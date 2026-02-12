"use client";

import { useRef, useCallback, useEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import type * as THREE from "three";

const DAMPING = 0.95;
const SENSITIVITY = 0.005;
const MAX_PITCH = Math.PI / 3; // ±60°

interface DragControllerProps {
  groupRef: React.RefObject<THREE.Group | null>;
  isDraggingRef: React.MutableRefObject<boolean>;
}

export function DragController({ groupRef, isDraggingRef }: DragControllerProps) {
  const { gl } = useThree();

  const dragState = useRef({
    dragging: false,
    prevX: 0,
    prevY: 0,
    velocityX: 0,
    velocityY: 0,
    rotationX: 0,
    rotationY: 0,
  });

  const onPointerDown = useCallback((e: PointerEvent) => {
    const state = dragState.current;
    state.dragging = true;
    state.prevX = e.clientX;
    state.prevY = e.clientY;
    state.velocityX = 0;
    state.velocityY = 0;
    isDraggingRef.current = true;
  }, [isDraggingRef]);

  const onPointerMove = useCallback((e: PointerEvent) => {
    const state = dragState.current;
    if (!state.dragging) return;

    const dx = e.clientX - state.prevX;
    const dy = e.clientY - state.prevY;

    state.velocityX = dx * SENSITIVITY;
    state.velocityY = dy * SENSITIVITY;
    state.rotationY += state.velocityX;
    state.rotationX += state.velocityY;

    // Clamp pitch
    state.rotationX = Math.max(-MAX_PITCH, Math.min(MAX_PITCH, state.rotationX));

    state.prevX = e.clientX;
    state.prevY = e.clientY;
  }, []);

  const onPointerUp = useCallback(() => {
    dragState.current.dragging = false;
    isDraggingRef.current = false;
  }, [isDraggingRef]);

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointerleave", onPointerUp);

    return () => {
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointerleave", onPointerUp);
    };
  }, [gl, onPointerDown, onPointerMove, onPointerUp]);

  useFrame(({ clock }) => {
    const group = groupRef.current;
    if (!group) return;

    const state = dragState.current;
    const t = clock.getElapsedTime();

    if (!state.dragging) {
      // Inertia decay
      state.rotationY += state.velocityX;
      state.rotationX += state.velocityY;
      state.rotationX = Math.max(-MAX_PITCH, Math.min(MAX_PITCH, state.rotationX));
      state.velocityX *= DAMPING;
      state.velocityY *= DAMPING;

      // Idle auto-rotation when no momentum
      if (Math.abs(state.velocityX) < 0.0001 && Math.abs(state.velocityY) < 0.0001) {
        state.rotationY += 0.002;
      }
    }

    // Apply base idle tilt
    const idleTilt = Math.sin(t * 0.3) * 0.05;
    group.rotation.x = state.rotationX + idleTilt;
    group.rotation.y = state.rotationY;
  });

  return null;
}
