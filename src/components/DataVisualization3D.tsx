import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

interface Column {
  mesh: THREE.Mesh;
  baseHeight: number;
  angle: number;
}

const DataVisualization3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    let isMounted = true;
    const container = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f172a);

    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
    });

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create animated data columns
    const columns: Column[] = [];
    const columnCount = 20;

    for (let i = 0; i < columnCount; i++) {
      const height = Math.random() * 3 + 1;
      const geometry = new THREE.BoxGeometry(0.4, height, 0.4);
      const hue = (i / columnCount) * 0.7;
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color().setHSL(hue, 0.8, 0.6),
        emissive: new THREE.Color().setHSL(hue, 0.8, 0.3),
        shininess: 80,
      });
      const column = new THREE.Mesh(geometry, material);

      const angle = (i / columnCount) * Math.PI * 2;
      const radius = 4;
      column.position.set(
        Math.cos(angle) * radius,
        height / 2,
        Math.sin(angle) * radius
      );

      scene.add(column);
      columns.push({ mesh: column, baseHeight: height, angle });
    }

    // Grid floor
    const gridHelper = new THREE.GridHelper(12, 24, 0x00ffff, 0x003344);
    gridHelper.position.y = 0;
    scene.add(gridHelper);

    // Animated particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20;
      positions[i + 1] = Math.random() * 10;
      positions[i + 2] = (Math.random() - 0.5) * 20;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x00ffff,
      size: 0.08,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00ffff, 1, 50);
    pointLight1.position.set(5, 8, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff00ff, 0.8, 50);
    pointLight2.position.set(-5, 8, -5);
    scene.add(pointLight2);

    // Camera position
    camera.position.set(8, 6, 8);
    camera.lookAt(0, 2, 0);

    setIsLoaded(true);

    // Animation loop
    let animationId: number;
    const animate = () => {
      if (!isMounted) return;

      animationId = requestAnimationFrame(animate);
      frameRef.current++;

      const time = Date.now() * 0.001;

      // Animate columns - pulsing and rotating
      columns.forEach((col, i) => {
        const pulse = Math.sin(time * 2 + i * 0.3) * 0.6;
        const newHeight = col.baseHeight + pulse;
        col.mesh.scale.y = newHeight / col.baseHeight;
        col.mesh.position.y = newHeight / 2;
        col.mesh.rotation.y = time * 0.5 + i;
      });

      // Rotate particles
      particles.rotation.y = time * 0.2;
      particles.rotation.x = Math.sin(time * 0.1) * 0.1;

      // Orbit camera around scene
      const radius = 10;
      const speed = 0.2;
      camera.position.x = Math.sin(time * speed) * radius;
      camera.position.z = Math.cos(time * speed) * radius;
      camera.position.y = 6 + Math.sin(time * 0.3) * 2;
      camera.lookAt(0, 2, 0);

      // Animate lights
      pointLight1.position.x = Math.sin(time * 0.5) * 6;
      pointLight1.position.z = Math.cos(time * 0.5) * 6;

      pointLight2.position.x = Math.cos(time * 0.3) * 6;
      pointLight2.position.z = Math.sin(time * 0.3) * 6;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!container) return;

      const width = container.clientWidth;
      const height = container.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      isMounted = false;
      window.removeEventListener("resize", handleResize);

      if (animationId) {
        cancelAnimationFrame(animationId);
      }

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      columns.forEach((col) => {
        col.mesh.geometry.dispose();
        (col.mesh.material as THREE.Material).dispose();
      });

      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full bg-gradient-to-b from-slate-950 to-slate-900">
      <div ref={mountRef} className="w-full h-full" />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-cyan-400 text-lg animate-pulse">
            Loading 3D Visualization...
          </div>
        </div>
      )}
    </div>
  );
};

export default DataVisualization3D;
