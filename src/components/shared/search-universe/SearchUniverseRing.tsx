"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { RING_COLORS } from "@/constants/brand-colors";
import type { HoveredNodeInfo } from "./SearchUniverse3D";

export type Mode = "SEO" | "AEO" | "GEO";

interface SearchUniverseRingProps {
  mode: Mode;
  activeMode: Mode;
  radius: number;
  tilt: [number, number];
  speed: number;
  hoveredNodeRef: React.MutableRefObject<HoveredNodeInfo>;
}

const NODE_COUNT = 4;
const HOVER_SCALE_BONUS = 0.3;
const HOVER_EMISSIVE_BONUS = 1.0;

export function SearchUniverseRing({
  mode,
  activeMode,
  radius,
  tilt,
  speed,
  hoveredNodeRef,
}: SearchUniverseRingProps) {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const nodeRefs = useRef<(THREE.Mesh | null)[]>([]);

  const isActive = mode === activeMode;

  const ringColor = useMemo(() => new THREE.Color(RING_COLORS[mode]), [mode]);

  const animState = useRef({
    opacity: isActive ? 0.5 : 0.15,
    zOffset: isActive ? 0.3 : -0.2,
    emissiveIntensity: isActive ? 1.5 : 0.3,
    nodeScale: isActive ? 1.15 : 1.0,
  });

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const state = animState.current;
    const lerpFactor = 0.05;

    const targetOpacity = isActive ? 0.5 : 0.15;
    const targetZ = isActive ? 0.3 : -0.2;
    const targetEmissive = isActive ? 1.5 : 0.3;
    const targetNodeScale = isActive ? 1.15 : 1.0;

    state.opacity += (targetOpacity - state.opacity) * lerpFactor;
    state.zOffset += (targetZ - state.zOffset) * lerpFactor;
    state.emissiveIntensity += (targetEmissive - state.emissiveIntensity) * lerpFactor;
    state.nodeScale += (targetNodeScale - state.nodeScale) * lerpFactor;

    if (groupRef.current) {
      groupRef.current.position.z = state.zOffset;
    }

    if (ringRef.current) {
      const mat = ringRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = state.opacity;
    }

    const nodeRadius = isActive ? radius * 1.06 : radius;
    const hovered = hoveredNodeRef.current;

    for (let i = 0; i < NODE_COUNT; i++) {
      const node = nodeRefs.current[i];
      if (!node) continue;

      const angle = (i / NODE_COUNT) * Math.PI * 2 + t * speed;
      node.position.x = Math.cos(angle) * nodeRadius;
      node.position.y = Math.sin(angle) * nodeRadius;
      node.position.z = 0;

      // Apply hover bonus if this specific node is hovered
      const isHovered = hovered?.mode === mode && hovered?.index === i;
      const s = state.nodeScale + (isHovered ? HOVER_SCALE_BONUS : 0);
      node.scale.setScalar(s);

      const nodeMat = node.material as THREE.MeshStandardMaterial;
      nodeMat.emissiveIntensity = state.emissiveIntensity + (isHovered ? HOVER_EMISSIVE_BONUS : 0);
    }
  });

  return (
    <group ref={groupRef} rotation={[tilt[0], 0, tilt[1]]}>
      {/* Orbit ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[radius, 0.02, 16, 128]} />
        <meshBasicMaterial
          color={ringColor}
          transparent
          opacity={0.15}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Nodes */}
      {Array.from({ length: NODE_COUNT }).map((_, i) => {
        const angle = (i / NODE_COUNT) * Math.PI * 2;
        return (
          <mesh
            key={`${mode}-node-${i}`}
            ref={(el) => { nodeRefs.current[i] = el; }}
            position={[Math.cos(angle) * radius, Math.sin(angle) * radius, 0]}
            userData={{ mode, nodeIndex: i }}
          >
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial
              color={ringColor}
              emissive={ringColor}
              emissiveIntensity={0.3}
              metalness={0.5}
              roughness={0.4}
            />
          </mesh>
        );
      })}
    </group>
  );
}
