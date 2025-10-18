// Satellite colors for variety
export const SATELLITE_COLORS = [
  0x4a90e2, // Blue-ish
  0xff6b6b, // Red-ish
  0x4ecdc4, // Teal
  0x45b7d1, // Light blue
  0x96ceb4, // Green-ish
];

// Define multiple satellites with varied parameters
export const satellites = [
  {
    radius: 1.4,
    inclination: Math.PI / 4, // 45 degrees
    speed: 0.01,
    color: SATELLITE_COLORS[0],
    phase: 0,
    trailColor: [0.2, 0.5, 1.0], // Blue trail
  },
  {
    radius: 1.6,
    inclination: Math.PI / 2, // 90 degrees (polar)
    speed: 0.006,
    color: SATELLITE_COLORS[1],
    phase: Math.PI / 2,
    trailColor: [1.0, 0.4, 0.4], // Red trail
  },
  {
    radius: 1.8,
    inclination: 0, // Equatorial
    speed: 0.009,
    color: SATELLITE_COLORS[2],
    phase: Math.PI,
    trailColor: [0.3, 0.8, 0.6], // Teal trail
  },
  {
    radius: 1.5,
    inclination: Math.PI / 3, // 60 degrees
    speed: 0.007,
    color: SATELLITE_COLORS[3],
    phase: Math.PI * 1.5,
    trailColor: [0.3, 0.7, 0.8], // Light blue trail
  },
];
