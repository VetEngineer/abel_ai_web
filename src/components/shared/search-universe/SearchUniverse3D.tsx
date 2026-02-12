"use client";

import { Suspense, useRef, useState, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { BRAND_GRID_LINE } from "@/constants/brand-colors";
import { useDeviceCapability } from "@/hooks/useDeviceCapability";
import { SearchUniverseCore } from "./SearchUniverseCore";
import { SearchUniverseRing } from "./SearchUniverseRing";
import { DragController } from "./DragController";
import { RaycasterDetector } from "./RaycasterDetector";
import type { Mode } from "./SearchUniverseRing";

export type HoveredNodeInfo = { mode: Mode; index: number } | null;

interface SearchUniverse3DProps {
  className?: string;
  mode: Mode;
  onNodeHover?: (mode: Mode, screenPos: { x: number; y: number }) => void;
  onNodeLeave?: () => void;
}

function PosterFallback() {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      role="img"
      aria-label="ABEL AI 검색 우주 시각화"
    >
      <div className="relative size-48 rounded-full bg-gradient-to-br from-primary/20 via-purple-500/10 to-transparent blur-2xl" />
    </div>
  );
}

function GridOverlay() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.07]"
      style={{
        backgroundImage:
          `repeating-linear-gradient(45deg, transparent, transparent 40px, ${BRAND_GRID_LINE} 40px, ${BRAND_GRID_LINE} 41px), repeating-linear-gradient(-45deg, transparent, transparent 40px, ${BRAND_GRID_LINE} 40px, ${BRAND_GRID_LINE} 41px)`,
      }}
    />
  );
}

function SceneContent({
  mode,
  isDraggingRef,
  hoveredNodeRef,
  onNodeHover,
  onNodeLeave,
}: {
  mode: Mode;
  isDraggingRef: React.MutableRefObject<boolean>;
  hoveredNodeRef: React.MutableRefObject<HoveredNodeInfo>;
  onNodeHover?: (mode: Mode, screenPos: { x: number; y: number }) => void;
  onNodeLeave?: () => void;
}) {
  const groupRef = useRef<THREE.Group>(null);

  return (
    <>
      {/* 3-point lighting */}
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <directionalLight position={[-3, 2, -3]} intensity={0.3} />
      <directionalLight position={[0, -5, -5]} intensity={0.4} />
      <ambientLight intensity={0.15} />

      {/* Offset group: pushes scene to right half for text balance */}
      <group position={[3, 0, 0]}>
        <group ref={groupRef}>
          <SearchUniverseCore />
          <SearchUniverseRing
            mode="SEO"
            activeMode={mode}
            radius={2.4}
            tilt={[0.3, 0.1]}
            speed={0.25}
            hoveredNodeRef={hoveredNodeRef}
          />
          <SearchUniverseRing
            mode="AEO"
            activeMode={mode}
            radius={3.0}
            tilt={[-0.2, 0.4]}
            speed={0.18}
            hoveredNodeRef={hoveredNodeRef}
          />
          <SearchUniverseRing
            mode="GEO"
            activeMode={mode}
            radius={3.6}
            tilt={[0.15, -0.3]}
            speed={0.12}
            hoveredNodeRef={hoveredNodeRef}
          />
        </group>
      </group>

      <DragController groupRef={groupRef} isDraggingRef={isDraggingRef} />
      <RaycasterDetector
        groupRef={groupRef}
        isDraggingRef={isDraggingRef}
        hoveredNodeRef={hoveredNodeRef}
        onNodeHover={onNodeHover}
        onNodeLeave={onNodeLeave}
      />
    </>
  );
}

export function SearchUniverse3D({
  className,
  mode,
  onNodeHover,
  onNodeLeave,
}: SearchUniverse3DProps) {
  const { isMobile, prefersReducedMotion, supportsWebGL } = useDeviceCapability();
  const [is3DReady, setIs3DReady] = useState(false);
  const isDraggingRef = useRef(false);
  const hoveredNodeRef = useRef<HoveredNodeInfo>(null);

  const handleCreated = useCallback(() => {
    setIs3DReady(true);
  }, []);

  const shouldShowFallback = !supportsWebGL || (isMobile && prefersReducedMotion);

  return (
    <div className={className} style={{ position: "relative" }} aria-hidden="true">
      {/* Fallback poster */}
      {(!is3DReady || shouldShowFallback) && <PosterFallback />}

      {/* Grid background */}
      <GridOverlay />

      {/* 3D Canvas */}
      {!shouldShowFallback && (
        <Suspense fallback={null}>
          <Canvas
            camera={{ position: [0, 0, 13], fov: 45 }}
            dpr={isMobile ? [1, 1.5] : [1, 2]}
            gl={{
              antialias: !isMobile,
              alpha: true,
              powerPreference: isMobile ? "low-power" : "high-performance",
            }}
            style={{ background: "transparent" }}
            onCreated={handleCreated}
          >
            <SceneContent
              mode={mode}
              isDraggingRef={isDraggingRef}
              hoveredNodeRef={hoveredNodeRef}
              onNodeHover={onNodeHover}
              onNodeLeave={onNodeLeave}
            />
          </Canvas>
        </Suspense>
      )}
    </div>
  );
}
