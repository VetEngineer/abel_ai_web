"use client";

import { useRef, useMemo, useCallback, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import {
  BRAND_PRIMARY_HEX,
  BRAND_BACKGROUND_HEX,
  BRAND_GRID_LINE,
} from "@/constants/brand-colors";

/* ── Config ── */
const PARTICLE_COUNT = 500;
const CLUSTER_RADIUS = 4.5;
const ACCENT = new THREE.Color(BRAND_PRIMARY_HEX);

/* ── Particle shaders ── */
const particleVertex = /* glsl */ `
  attribute float aSize;
  attribute float aOpacity;
  attribute float aSeed;
  varying float vOpacity;
  varying float vSeed;

  void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = min(aSize * (50.0 / -mvPosition.z), 24.0);
    gl_Position = projectionMatrix * mvPosition;
    vOpacity = aOpacity;
    vSeed = aSeed;
  }
`;

const particleFragment = /* glsl */ `
  uniform vec3 uColor;
  uniform float uTime;
  varying float vOpacity;
  varying float vSeed;

  void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    if (d > 0.5) discard;

    // Soft glow falloff
    float glow = 1.0 - smoothstep(0.0, 0.5, d);
    glow = pow(glow, 1.5);

    // Twinkle
    float twinkle = sin(uTime * 1.5 + vSeed * 6.2831) * 0.2 + 0.8;

    gl_FragColor = vec4(uColor, glow * vOpacity * twinkle);
  }
`;

/* ── Particle cloud ── */
function ParticleCloud({
  mouseRef,
}: {
  mouseRef: React.RefObject<THREE.Vector3 | null>;
}) {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const rotationRef = useRef({ x: 0, y: 0 });

  const geometry = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);
    const opacities = new Float32Array(PARTICLE_COUNT);
    const seeds = new Float32Array(PARTICLE_COUNT);

    const golden = Math.PI * (3 - Math.sqrt(5));
    const surfaceCount = Math.floor(PARTICLE_COUNT * 0.7);

    // Surface layer
    for (let i = 0; i < surfaceCount; i++) {
      const y = 1 - (i / (surfaceCount - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      positions[i * 3] = Math.cos(theta) * r * CLUSTER_RADIUS;
      positions[i * 3 + 1] = y * CLUSTER_RADIUS;
      positions[i * 3 + 2] = Math.sin(theta) * r * CLUSTER_RADIUS;
      sizes[i] = 0.8 + Math.random() * 1.2;
      opacities[i] = 0.3 + Math.random() * 0.7;
      seeds[i] = Math.random();
    }

    // Inner volume
    for (let i = surfaceCount; i < PARTICLE_COUNT; i++) {
      const idx = i - surfaceCount;
      const innerCount = PARTICLE_COUNT - surfaceCount;
      const y = 1 - (idx / (innerCount - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * idx * 1.3;
      const innerR = CLUSTER_RADIUS * (0.3 + Math.random() * 0.4);
      positions[i * 3] = Math.cos(theta) * r * innerR;
      positions[i * 3 + 1] = y * innerR;
      positions[i * 3 + 2] = Math.sin(theta) * r * innerR;
      sizes[i] = 0.4 + Math.random() * 1.0;
      opacities[i] = 0.2 + Math.random() * 0.5;
      seeds[i] = Math.random();
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
    geo.setAttribute("aOpacity", new THREE.BufferAttribute(opacities, 1));
    geo.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));
    return geo;
  }, []);

  const uniforms = useMemo(
    () => ({
      uColor: { value: ACCENT },
      uTime: { value: 0 },
    }),
    []
  );

  useFrame(({ clock }) => {
    const points = pointsRef.current;
    const mouse = mouseRef.current;
    if (!points) return;

    const t = clock.getElapsedTime();
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = t;
    }

    // Smooth rotation toward target
    const targetRotY = (mouse ? mouse.x * 0.04 : 0) + t * 0.08;
    const targetRotX = (mouse ? -mouse.y * 0.03 : 0) + Math.sin(t * 0.3) * 0.1;
    rotationRef.current.x += (targetRotX - rotationRef.current.x) * 0.02;
    rotationRef.current.y += (targetRotY - rotationRef.current.y) * 0.02;

    points.rotation.x = rotationRef.current.x;
    points.rotation.y = rotationRef.current.y;

    // Breathing
    const breathe = 1 + Math.sin(t * 0.5) * 0.03;
    points.scale.setScalar(breathe);
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <shaderMaterial
        ref={materialRef}
        vertexShader={particleVertex}
        fragmentShader={particleFragment}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* ── Mouse tracking ── */
function MouseTracker({
  mouseRef,
}: {
  mouseRef: React.MutableRefObject<THREE.Vector3>;
}) {
  const { viewport, gl } = useThree();

  const handleMove = useCallback(
    (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseRef.current.set(
        x * (viewport.width / 2),
        y * (viewport.height / 2),
        0
      );
    },
    [viewport, mouseRef]
  );

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointermove", handleMove);
    return () => canvas.removeEventListener("pointermove", handleMove);
  }, [gl, handleMove]);

  return null;
}

/* ── Scene ── */
function Scene() {
  const mouseRef = useRef(new THREE.Vector3(0, 0, 0));

  return (
    <>
      <color attach="background" args={[BRAND_BACKGROUND_HEX]} />
      <MouseTracker mouseRef={mouseRef} />
      <ParticleCloud mouseRef={mouseRef} />
    </>
  );
}

export function SplineScene({ className }: { className?: string }) {
  return (
    <div className={className} style={{ position: "relative" }}>
      {/* Diagonal grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            `repeating-linear-gradient(45deg, transparent, transparent 40px, ${BRAND_GRID_LINE} 40px, ${BRAND_GRID_LINE} 41px), repeating-linear-gradient(-45deg, transparent, transparent 40px, ${BRAND_GRID_LINE} 40px, ${BRAND_GRID_LINE} 41px)`,
        }}
      />
      <Canvas
        camera={{ position: [0, 0, 12], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: false }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
