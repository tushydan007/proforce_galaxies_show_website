import { useEffect, useRef } from "react";
import * as THREE from "three";

const AdvancedTerrain3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 1, 20);
    const camera = new THREE.PerspectiveCamera(
      75,
      mountNode.clientWidth / mountNode.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(mountNode.clientWidth, mountNode.clientHeight);
    mountNode.appendChild(renderer.domElement);

    // Create terrain
    const geometry = new THREE.PlaneGeometry(10, 10, 50, 50);
    const vertices = geometry.attributes.position.array;
    for (let i = 0; i < vertices.length; i += 3) {
      const x = vertices[i];
      const y = vertices[i + 1];
      vertices[i + 2] =
        Math.sin(x * 0.5) * Math.cos(y * 0.5) * 1.5 +
        Math.sin(x * 1.2) * Math.cos(y * 1.2) * 0.5;
    }
    geometry.computeVertexNormals();

    const material = new THREE.MeshPhongMaterial({
      color: 0x00ff88,
      emissive: 0x004422,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
      shininess: 100,
    });
    const terrain = new THREE.Mesh(geometry, material);
    terrain.rotation.x = -Math.PI / 2.5;
    scene.add(terrain);

    // Add solid terrain underneath
    const solidGeometry = geometry.clone();
    const solidMaterial = new THREE.MeshPhongMaterial({
      color: 0x003322,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide,
    });
    const solidTerrain = new THREE.Mesh(solidGeometry, solidMaterial);
    solidTerrain.rotation.x = -Math.PI / 2.5;
    solidTerrain.position.y = -0.1;
    scene.add(solidTerrain);

    // Floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 2000;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 15;
      positions[i + 1] = Math.random() * 5;
      positions[i + 2] = (Math.random() - 0.5) * 15;
    }
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x00ffff,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particleSystem);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x222222);
    scene.add(ambientLight);

    const spotLight1 = new THREE.SpotLight(0x00ffff, 1);
    spotLight1.position.set(-5, 10, -5);
    spotLight1.angle = 0.3;
    scene.add(spotLight1);

    const spotLight2 = new THREE.SpotLight(0xff00ff, 1);
    spotLight2.position.set(5, 10, 5);
    spotLight2.angle = 0.3;
    scene.add(spotLight2);

    camera.position.set(0, 4, 6);
    camera.lookAt(0, 0, 0);

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      terrain.rotation.z += 0.002;
      solidTerrain.rotation.z += 0.002;

      particleSystem.rotation.y += 0.001;
      const positions = particleSystem.geometry.attributes.position.array;
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] -= 0.01;
        if (positions[i] < 0) positions[i] = 5;
      }
      particleSystem.geometry.attributes.position.needsUpdate = true;

      camera.position.x = Math.sin(time * 0.3) * 8;
      camera.position.z = Math.cos(time * 0.3) * 8;
      camera.lookAt(0, 0, 0);

      spotLight1.position.x = Math.sin(time) * 5;
      spotLight1.position.z = Math.cos(time) * 5;
      spotLight2.position.x = Math.cos(time) * 5;
      spotLight2.position.z = Math.sin(time) * 5;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (mountRef.current) {
        camera.aspect =
          mountRef.current.clientWidth / mountRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(
          mountRef.current.clientWidth,
          mountRef.current.clientHeight
        );
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      mountNode?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default AdvancedTerrain3D;
