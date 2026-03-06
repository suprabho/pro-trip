/**
 * Calculate the appropriate zoom level for a Leaflet/slippy map given
 * a bounding box (min/max lat/lng) and the map container size in pixels.
 *
 * Based on the standard Web Mercator tile math:
 * At zoom 0, the world is 256px wide. Each zoom level doubles resolution.
 */
export function getZoomForBounds(
  bounds: { sw: [number, number]; ne: [number, number] },
  mapWidth: number = 600,
  mapHeight: number = 400,
  padding: number = 0.2,
  maxZoom: number = 18,
): number {
  const { sw, ne } = bounds;

  const latMin = Math.min(sw[0], ne[0]);
  const latMax = Math.max(sw[0], ne[0]);
  const lngMin = Math.min(sw[1], ne[1]);
  const lngMax = Math.max(sw[1], ne[1]);

  // Single point — return a sensible city-level zoom
  if (latMin === latMax && lngMin === lngMax) {
    return Math.min(12, maxZoom);
  }

  // Apply padding to the bounds
  const latPad = (latMax - latMin) * padding;
  const lngPad = (lngMax - lngMin) * padding;

  const paddedLatMin = latMin - latPad;
  const paddedLatMax = latMax + latPad;
  const paddedLngMin = lngMin - lngPad;
  const paddedLngMax = lngMax + lngPad;

  // Longitude zoom: straightforward linear mapping
  const lngDiff = paddedLngMax - paddedLngMin;
  const lngZoom = Math.log2((360 * mapWidth) / (256 * lngDiff));

  // Latitude zoom: uses Mercator projection (lat → y conversion)
  const latToY = (lat: number) =>
    Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360));

  const yMin = latToY(paddedLatMin);
  const yMax = latToY(paddedLatMax);
  const yDiff = yMax - yMin;
  const latZoom = Math.log2((2 * Math.PI * mapHeight) / (256 * yDiff));

  // Use the more constraining of the two axes
  const zoom = Math.floor(Math.min(lngZoom, latZoom));

  return Math.max(0, Math.min(zoom, maxZoom));
}

/**
 * Calculate the center point of a bounding box.
 */
export function getCenterOfBounds(
  bounds: { sw: [number, number]; ne: [number, number] },
): [number, number] {
  return [
    (bounds.sw[0] + bounds.ne[0]) / 2,
    (bounds.sw[1] + bounds.ne[1]) / 2,
  ];
}

/**
 * Compute bounds from an array of [lat, lng] coordinates.
 */
export function getBoundsFromCoords(
  coords: [number, number][],
): { sw: [number, number]; ne: [number, number] } | null {
  if (coords.length === 0) return null;

  let minLat = Infinity, maxLat = -Infinity;
  let minLng = Infinity, maxLng = -Infinity;

  for (const [lat, lng] of coords) {
    if (lat < minLat) minLat = lat;
    if (lat > maxLat) maxLat = lat;
    if (lng < minLng) minLng = lng;
    if (lng > maxLng) maxLng = lng;
  }

  return { sw: [minLat, minLng], ne: [maxLat, maxLng] };
}
