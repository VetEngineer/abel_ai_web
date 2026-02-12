"use client";

import { useState, useEffect } from "react";

interface DeviceCapability {
  isMobile: boolean;
  prefersReducedMotion: boolean;
  supportsWebGL: boolean;
}

function checkWebGL(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(
      canvas.getContext("webgl2") || canvas.getContext("webgl")
    );
  } catch {
    return false;
  }
}

export function useDeviceCapability(): DeviceCapability {
  const [capability, setCapability] = useState<DeviceCapability>({
    isMobile: false,
    prefersReducedMotion: false,
    supportsWebGL: true,
  });

  useEffect(() => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
      window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const supportsWebGL = checkWebGL();

    setCapability({ isMobile, prefersReducedMotion, supportsWebGL });
  }, []);

  return capability;
}
