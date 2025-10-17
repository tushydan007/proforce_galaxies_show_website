import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, extend, useLoader } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { Box, Plane, Cylinder } from "@react-three/drei";
import * as THREE from "three";

// Extend for BufferGeometry if needed, but not necessary here
extend({ BufferGeometry: THREE.BufferGeometry });

// Simple Earth texture URL (you can replace with a higher-res one)
const EARTH_TEXTURE =
  "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg";

// Satellite colors for variety
const SATELLITE_COLORS = [
  0x4a90e2, // Blue-ish
  0xff6b6b, // Red-ish
  0x4ecdc4, // Teal
  0x45b7d1, // Light blue
  0x96ceb4, // Green-ish
];

// Globe component
const Globe = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(THREE.TextureLoader, EARTH_TEXTURE);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005; // Slow rotation
    }
  });

  return (
    <mesh ref={meshRef}>
      <Sphere args={[1, 32, 32]}>
        <meshStandardMaterial map={texture} />
      </Sphere>
    </mesh>
  );
};

// Satellite component with performant orbit and orbital trail effect
interface SatelliteProps {
  radius?: number;
  inclination?: number;
  speed?: number;
  color?: number;
  phase?: number;
  trailColor?: number[];
}

const Satellite: React.FC<SatelliteProps> = ({
  radius = 1.5,
  inclination = Math.PI / 3,
  speed = 0.008,
  color = SATELLITE_COLORS[0],
  phase = 0,
  trailColor = [0.2, 0.5, 1.0],
}) => {
  const groupRef = useRef<THREE.Group | null>(null);
  // Use a properly typed ref for the Three.js Line to avoid React's SVG line typing conflict
  const lineRef = useRef<THREE.Line | null>(null);
  const exhaustRef = useRef<THREE.Points | null>(null);
  const timeRef = useRef(0);
  const posRef = useRef(new THREE.Vector3());
  const trailPositions = useRef<number[]>([]);
  const axis = useRef(new THREE.Vector3(1, 0, 0)); // Reused axis for applyAxisAngle
  const maxTrailLength = 300; // Number of points in the trail for smoothness and performance
  const numParticles = 50;
  const velocities = useRef<Float32Array>(new Float32Array(numParticles * 3));

  useEffect(() => {
    // Initialize velocities for exhaust particles (local space)
    for (let i = 0; i < numParticles; i++) {
      const idx = i * 3;
      velocities.current[idx] = (Math.random() - 0.5) * 0.05; // Small random x
      velocities.current[idx + 1] = (Math.random() - 0.5) * 0.05; // Small random y
      velocities.current[idx + 2] = -(0.5 + Math.random() * 0.3); // Strong negative z
    }
  }, []);

  useFrame((_state, delta) => {
    timeRef.current += speed; // Adjustable speed
    const theta = timeRef.current + phase;
    // Position in equatorial orbital plane (xz)
    posRef.current.set(radius * Math.cos(theta), 0, radius * Math.sin(theta));

    // Apply inclination: rotate around x-axis (global up is y, so x-rotation tilts the plane)
    posRef.current.applyAxisAngle(axis.current, inclination);

    if (groupRef.current) {
      groupRef.current.position.copy(posRef.current);
      // Optional: slight self-rotation for realism
      groupRef.current.rotation.y += 0.02;

      // Update trail
      const positions = trailPositions.current;
      positions.push(posRef.current.x, posRef.current.y, posRef.current.z);
      if (positions.length > maxTrailLength * 3) {
        positions.splice(0, 3);
      }

      // Update line geometry and colors for fading trail
      if (lineRef.current && positions.length >= 3) {
        const numPoints = positions.length / 3;
        const posArray = new Float32Array(positions);
        const colorArray = new Float32Array(numPoints * 4);

        // Custom trail color with fading alpha (tail transparent, head opaque)
        for (let i = 0; i < numPoints; i++) {
          const alpha = numPoints > 1 ? i / (numPoints - 1) : 1;
          colorArray[i * 4 + 0] = trailColor[0];
          colorArray[i * 4 + 1] = trailColor[1];
          colorArray[i * 4 + 2] = trailColor[2];
          colorArray[i * 4 + 3] = alpha * 0.6; // Slightly fainter for multiple trails
        }

        const geometry = lineRef.current.geometry as THREE.BufferGeometry;
        geometry.setAttribute(
          "position",
          new THREE.BufferAttribute(posArray, 3)
        );
        geometry.setAttribute(
          "color",
          new THREE.BufferAttribute(colorArray, 4)
        );
        geometry.attributes.position.needsUpdate = true;
        geometry.attributes.color.needsUpdate = true;
      }

      // Update exhaust particles
      const exhaust = exhaustRef.current;
      if (exhaust) {
        let posAttr = exhaust.geometry.attributes.position as
          | THREE.BufferAttribute
          | undefined;
        if (!posAttr) {
          posAttr = new THREE.BufferAttribute(
            new Float32Array(numParticles * 3),
            3
          );
          exhaust.geometry.setAttribute("position", posAttr);
          // Initialize positions at thruster
          const positions = posAttr.array as Float32Array;
          for (let i = 0; i < numParticles; i++) {
            const idx = i * 3;
            positions[idx] = (Math.random() - 0.5) * 0.01;
            positions[idx + 1] = (Math.random() - 0.5) * 0.01;
            positions[idx + 2] = -0.04;
          }
          posAttr.needsUpdate = true;
        } else {
          const positions = posAttr.array as Float32Array;
          for (let i = 0; i < numParticles; i++) {
            const idx = i * 3;
            positions[idx] += velocities.current[idx] * delta;
            positions[idx + 1] += velocities.current[idx + 1] * delta;
            positions[idx + 2] += velocities.current[idx + 2] * delta;
            // Reset if particle is too far (local space)
            if (
              positions[idx + 2] < -0.15 ||
              Math.abs(positions[idx]) > 0.08 ||
              Math.abs(positions[idx + 1]) > 0.08
            ) {
              positions[idx] = (Math.random() - 0.5) * 0.01;
              positions[idx + 1] = (Math.random() - 0.5) * 0.01;
              positions[idx + 2] = -0.04;
            }
          }
          posAttr.needsUpdate = true;
        }
      }
    }
  });

  return (
    <>
      <group ref={groupRef}>
        {/* Satellite Body */}
        <Box args={[0.04, 0.03, 0.06]}>
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        </Box>
        {/* Solar Panels */}
        <Plane
          args={[0.12, 0.03]}
          position={[0.03, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <meshStandardMaterial
            color={0xcccccc}
            metalness={0.5}
            roughness={0.3}
            side={THREE.DoubleSide}
          />
        </Plane>
        <Plane
          args={[0.12, 0.03]}
          position={[-0.03, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <meshStandardMaterial
            color={0xcccccc}
            metalness={0.5}
            roughness={0.3}
            side={THREE.DoubleSide}
          />
        </Plane>
        {/* Antenna */}
        <Cylinder args={[0.005, 0.005, 0.04]} position={[0, 0.02, 0]}>
          <meshStandardMaterial color={color} metalness={1} roughness={0.1} />
        </Cylinder>
        {/* Thruster */}
        <Cylinder args={[0.005, 0.005, 0.015]} position={[0, 0, -0.035]}>
          <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
        </Cylinder>
        {/* Exhaust Particles */}
        <points ref={exhaustRef}>
          <bufferGeometry />
          <pointsMaterial
            color={0xff6600}
            size={0.003}
            transparent
            opacity={0.7}
            sizeAttenuation={false}
          />
        </points>
      </group>
      <line ref={lineRef as unknown as React.Ref<SVGLineElement>}>
        <bufferGeometry />
        <lineBasicMaterial vertexColors transparent linewidth={1.5} />
      </line>
    </>
  );
};

// Main reusable component
const GlobeWithSatellite = () => {
  // Define multiple satellites with varied parameters
  const satellites = [
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

  return (
    <div style={{ width: "100%", height: "800px" }}>
      <Canvas
        camera={{ position: [0, 0, 2] }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
        <Globe />
        {satellites.map((satProps, index) => (
          <Satellite key={index} {...satProps} />
        ))}
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
        />
      </Canvas>
    </div>
  );
};

export default GlobeWithSatellite;
