import { useRef } from "react";
import { Canvas, useFrame, extend, useLoader } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { satellites } from "@/data/satellite";
import * as THREE from "three";
import Satellite from "./Satellite";

// Extend for BufferGeometry if needed, but not necessary here
extend({ BufferGeometry: THREE.BufferGeometry });

// Simple Earth texture URL (you can replace with a higher-res one)
const EARTH_TEXTURE =
  "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg";

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

// Main reusable component
const GlobeWithSatellite = () => {
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
