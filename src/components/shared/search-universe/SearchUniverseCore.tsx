"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  BRAND_SPACE_BLUE_HEX,
  BRAND_SPACE_BLUE_DARK_HEX,
  BRAND_PRIMARY_HEX,
} from "@/constants/brand-colors";

const CORE_COLOR = new THREE.Color(BRAND_SPACE_BLUE_HEX);
const GLOW_COLOR = new THREE.Color(BRAND_PRIMARY_HEX);
const HALO_COLOR = new THREE.Color(BRAND_SPACE_BLUE_DARK_HEX);

export function SearchUniverseCore() {
  const baseRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const haloRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (baseRef.current) {
      baseRef.current.rotation.y = t * 0.15;
      baseRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;
    }

    if (glowRef.current) {
      glowRef.current.rotation.y = t * 0.15;
      glowRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;
      const pulse = 1 + Math.sin(t * 0.8) * 0.05;
      glowRef.current.scale.setScalar(pulse);
    }

    if (haloRef.current) {
      haloRef.current.rotation.z = -t * 0.1;
    }
  });

  return (
    <group>
      {/* Core Base */}
      <mesh ref={baseRef}>
        <sphereGeometry args={[1.0, 64, 64]} />
        <meshStandardMaterial
          color={CORE_COLOR}
          metalness={0.7}
          roughness={0.3}
          emissive={CORE_COLOR}
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Core Glow */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.05, 48, 48]} />
        <meshBasicMaterial
          color={GLOW_COLOR}
          transparent
          opacity={0.25}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Core Halo */}
      <mesh ref={haloRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.6, 0.01, 16, 64]} />
        <meshBasicMaterial
          color={HALO_COLOR}
          transparent
          opacity={0.4}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
