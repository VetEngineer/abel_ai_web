"use client";

import { useRef, useMemo, useCallback, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import {
  BRAND_PRIMARY_HEX,
  BRAND_DESTRUCTIVE_HEX,
  BRAND_BACKGROUND_HEX,
  BRAND_GRID_LINE,
} from "@/constants/brand-colors";

/* ── Config ── */
const SPHERE_COUNT = 300;
const CLUSTER_RADIUS = 4.5;
const ACCENT = new THREE.Color(BRAND_PRIMARY_HEX);

/* ── Fresnel shader for dark spheres with edge glow ── */
const fresnelVertex = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vViewDir;
  varying vec3 vWorldPos;

  void main() {
    vec4 worldPos = instanceMatrix * vec4(position, 1.0);
    worldPos = modelMatrix * worldPos;
    vWorldPos = worldPos.xyz;
    vNormal = normalize(mat3(instanceMatrix) * normal);
    vNormal = normalize(normalMatrix * vNormal);
    vViewDir = normalize(cameraPosition - worldPos.xyz);
    gl_Position = projectionMatrix * viewMatrix * worldPos;
  }
`;

const fresnelFragment = /* glsl */ `
  uniform vec3 uColor;
  uniform float uFresnelPower;
  uniform float uTime;

  varying vec3 vNormal;
  varying vec3 vViewDir;
  varying vec3 vWorldPos;

  void main() {
    float fresnel = pow(1.0 - max(dot(vNormal, vViewDir), 0.0), uFresnelPower);

    // Base: slight color tint
    vec3 base = uColor * 0.1;
    // Edge glow
    vec3 glow = uColor * fresnel * 1.8;
    // Subtle inner rim
    float rim = pow(1.0 - max(dot(vNormal, vViewDir), 0.0), 1.5) * 0.25;
    vec3 innerRim = uColor * rim;

    vec3 finalColor = base + glow + innerRim;
    float alpha = 0.85 + fresnel * 0.15;

    gl_FragColor = vec4(finalColor, alpha);
  }
`;

/* ── Fibonacci sphere distribution ── */
function fibonacciSphere(count: number, radius: number) {
  const golden = Math.PI * (3 - Math.sqrt(5));
  const points: { pos: [number, number, number]; layer: number }[] = [];

  // Surface layer
  for (let i = 0; i < count * 0.7; i++) {
    const y = 1 - (i / (count * 0.7 - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    points.push({
      pos: [
        Math.cos(theta) * r * radius,
        y * radius,
        Math.sin(theta) * r * radius,
      ],
      layer: 0,
    });
  }

  // Inner layers for volume
  for (let i = 0; i < count * 0.3; i++) {
    const y = 1 - (i / (count * 0.3 - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i * 1.3;
    const innerR = radius * (0.5 + Math.random() * 0.3);
    points.push({
      pos: [
        Math.cos(theta) * r * innerR,
        y * innerR,
        Math.sin(theta) * r * innerR,
      ],
      layer: 1,
    });
  }

  return points;
}

/* ── Sphere cluster ── */
function SphereCluster({
  mouseRef,
}: {
  mouseRef: React.RefObject<THREE.Vector3 | null>;
}) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const rotationRef = useRef({ x: 0, y: 0 });

  const spheres = useMemo(() => fibonacciSphere(SPHERE_COUNT, CLUSTER_RADIUS), []);

  const uniforms = useMemo(
    () => ({
      uColor: { value: ACCENT },
      uFresnelPower: { value: 2.5 },
      uTime: { value: 0 },
    }),
    []
  );

  useFrame(({ clock }) => {
    const mesh = meshRef.current;
    const mouse = mouseRef.current;
    if (!mesh) return;

    const t = clock.getElapsedTime();
    uniforms.uTime.value = t;

    // Gentle auto-rotation + mouse tilt
    const targetRotY = (mouse ? mouse.x * 0.04 : 0) + t * 0.08;
    const targetRotX = (mouse ? -mouse.y * 0.03 : 0) + Math.sin(t * 0.3) * 0.1;
    rotationRef.current.x += (targetRotX - rotationRef.current.x) * 0.02;
    rotationRef.current.y += (targetRotY - rotationRef.current.y) * 0.02;

    const euler = new THREE.Euler(rotationRef.current.x, rotationRef.current.y, 0);
    const quat = new THREE.Quaternion().setFromEuler(euler);

    spheres.forEach((s, i) => {
      const [bx, by, bz] = s.pos;

      // Apply rotation
      const vec = new THREE.Vector3(bx, by, bz).applyQuaternion(quat);

      // Breathing animation
      const breathe = 1 + Math.sin(t * 0.5 + i * 0.02) * 0.03;
      vec.multiplyScalar(breathe);

      dummy.position.copy(vec);
      const baseScale = s.layer === 0 ? 0.34 : 0.26;
      dummy.scale.setScalar(baseScale);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    });

    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, SPHERE_COUNT]}>
      <sphereGeometry args={[1, 24, 24]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={fresnelVertex}
        fragmentShader={fresnelFragment}
        uniforms={uniforms}
        transparent
      />
    </instancedMesh>
  );
}

/* ── Cursor sphere ── */
function CursorSphere({
  mouseRef,
}: {
  mouseRef: React.MutableRefObject<THREE.Vector3>;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(() => {
    const mesh = ref.current;
    if (!mesh) return;
    mesh.position.lerp(mouseRef.current, 0.06);
  });

  return (
    <mesh ref={ref} position={[0, 0, 4]}>
      <sphereGeometry args={[0.15, 24, 24]} />
      <meshBasicMaterial color={BRAND_DESTRUCTIVE_HEX} transparent opacity={0.7} />
    </mesh>
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
      <SphereCluster mouseRef={mouseRef} />
      <CursorSphere mouseRef={mouseRef} />
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
        camera={{ position: [1, 0, 8.5], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: false }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
