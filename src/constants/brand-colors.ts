/**
 * Brand colors as hex for Three.js / WebGL contexts
 * where CSS custom properties are not accessible.
 *
 * Keep in sync with oklch values in globals.css.
 */

/** --primary: oklch(0.55 0.18 250) */
export const BRAND_PRIMARY_HEX = "#0061e6";

/** --destructive: oklch(0.704 0.191 22.216) */
export const BRAND_DESTRUCTIVE_HEX = "#ff5757";

/** --background: oklch(0.10 0.01 260) */
export const BRAND_BACKGROUND_HEX = "#050508";

/** --foreground at 3% opacity — grid overlay (rgba for browser compat) */
export const BRAND_GRID_LINE = "rgba(255, 255, 255, 0.03)";

/* ── Search Universe 3D ── */

/** oklch(0.45 0.15 250) */
export const BRAND_SPACE_BLUE_HEX = "#0052c9";
/** oklch(0.35 0.12 250) */
export const BRAND_SPACE_BLUE_DARK_HEX = "#003d94";
/** oklch(0.50 0.20 290) */
export const BRAND_PURPLE_HEX = "#8b5cf6";
/** oklch(0.60 0.22 290) */
export const BRAND_PURPLE_LIGHT_HEX = "#a78bfa";
/** oklch(0.40 0.18 290) */
export const BRAND_PURPLE_DARK_HEX = "#6d28d9";

export const RING_COLORS = {
  SEO: "#0061e6",
  AEO: "#8b5cf6",
  GEO: "#a78bfa",
} as const;
