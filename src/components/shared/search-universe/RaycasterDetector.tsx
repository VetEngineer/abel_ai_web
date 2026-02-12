"use client";

import { useRef, useCallback, useEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { Mode } from "./SearchUniverseRing";
import type { HoveredNodeInfo } from "./SearchUniverse3D";

interface RaycasterDetectorProps {
  groupRef: React.RefObject<THREE.Group | null>;
  isDraggingRef: React.MutableRefObject<boolean>;
  hoveredNodeRef: React.MutableRefObject<HoveredNodeInfo>;
  onNodeHover?: (mode: Mode, screenPos: { x: number; y: number }) => void;
  onNodeLeave?: () => void;
}

export function RaycasterDetector({
  groupRef,
  isDraggingRef,
  hoveredNodeRef,
  onNodeHover,
  onNodeLeave,
}: RaycasterDetectorProps) {
  const { gl, camera } = useThree();
  const raycaster = useRef(new THREE.Raycaster());
  const pointer = useRef(new THREE.Vector2());
  const prevHitId = useRef<string | null>(null);
  const worldPos = useRef(new THREE.Vector3());
  const cachedNodes = useRef<THREE.Mesh[]>([]);
  const cacheValid = useRef(false);

  const handlePointerMove = useCallback((e: PointerEvent) => {
    const rect = gl.domElement.getBoundingClientRect();
    pointer.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  }, [gl]);

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointermove", handlePointerMove);
    return () => {
      canvas.removeEventListener("pointermove", handlePointerMove);
      hoveredNodeRef.current = null;
    };
  }, [gl, handlePointerMove, hoveredNodeRef]);

  // Invalidate node cache when group children change (mode switch)
  useEffect(() => {
    cacheValid.current = false;
  }, [groupRef]);

  useFrame(() => {
    if (isDraggingRef.current || !groupRef.current) {
      if (prevHitId.current) {
        hoveredNodeRef.current = null;
        prevHitId.current = null;
        onNodeLeave?.();
      }
      return;
    }

    raycaster.current.setFromCamera(pointer.current, camera);

    if (!cacheValid.current) {
      cachedNodes.current = [];
      groupRef.current.traverse((child) => {
        if (child instanceof THREE.Mesh && child.userData.mode) {
          cachedNodes.current.push(child);
        }
      });
      cacheValid.current = true;
    }

    const intersects = raycaster.current.intersectObjects(cachedNodes.current, false);

    if (intersects.length > 0) {
      const hit = intersects[0].object as THREE.Mesh;
      const hitId = `${hit.userData.mode}-${hit.userData.nodeIndex}`;

      if (hitId !== prevHitId.current) {
        prevHitId.current = hitId;
        hoveredNodeRef.current = {
          mode: hit.userData.mode as Mode,
          index: hit.userData.nodeIndex as number,
        };

        hit.getWorldPosition(worldPos.current);
        worldPos.current.project(camera);
        const rect = gl.domElement.getBoundingClientRect();
        const screenX = ((worldPos.current.x + 1) / 2) * rect.width + rect.left;
        const screenY = ((-worldPos.current.y + 1) / 2) * rect.height + rect.top;

        onNodeHover?.(hit.userData.mode as Mode, { x: screenX, y: screenY });
      }
    } else if (prevHitId.current) {
      hoveredNodeRef.current = null;
      prevHitId.current = null;
      onNodeLeave?.();
    }
  });

  return null;
}
