"use client";

import { useSyncExternalStore } from "react";

interface DeviceCapability {
  isMobile: boolean;
  prefersReducedMotion: boolean;
  supportsWebGL: boolean;
}

const SSR_FALLBACK: DeviceCapability = {
  isMobile: false,
  prefersReducedMotion: false,
  supportsWebGL: true,
};

function checkWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

// Cache snapshot to satisfy useSyncExternalStore's referential equality requirement
let cachedSnapshot: DeviceCapability | null = null;

function getSnapshot(): DeviceCapability {
  const isMobile =
    window.matchMedia("(pointer: coarse)").matches &&
    window.innerWidth < 768;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const supportsWebGL = checkWebGL();

  if (
    cachedSnapshot &&
    cachedSnapshot.isMobile === isMobile &&
    cachedSnapshot.prefersReducedMotion === prefersReducedMotion &&
    cachedSnapshot.supportsWebGL === supportsWebGL
  ) {
    return cachedSnapshot;
  }

  cachedSnapshot = { isMobile, prefersReducedMotion, supportsWebGL };
  return cachedSnapshot;
}

function getServerSnapshot(): DeviceCapability {
  return SSR_FALLBACK;
}

function subscribe(callback: () => void): () => void {
  const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  mql.addEventListener("change", callback);
  window.addEventListener("resize", callback);
  return () => {
    mql.removeEventListener("change", callback);
    window.removeEventListener("resize", callback);
  };
}

export function useDeviceCapability(): DeviceCapability {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
