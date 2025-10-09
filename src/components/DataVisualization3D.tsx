import { useRef, useEffect } from "react";
import * as THREE from "three";

interface Column {
  mesh: THREE.Mesh;
  baseHeight: number;
  angle: number;
}

const DataVisualization3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Initialize scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    rendererRef.current = renderer;

    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    mountRef.current.appendChild(renderer.domElement);

    // Create data columns
    const columns: Column[] = [];
    for (let i = 0; i < 20; i++) {
      const height = Math.random() * 3 + 0.5;
      const geometry = new THREE.BoxGeometry(0.3, height, 0.3);
      const hue = (i / 20) * 0.6;
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color().setHSL(hue, 1, 0.5),
        emissive: new THREE.Color().setHSL(hue, 1, 0.3),
        shininess: 100,
      });
      const column = new THREE.Mesh(geometry, material);

      const angle = (i / 20) * Math.PI * 2;
      const radius = 3;
      column.position.set(
        Math.cos(angle) * radius,
        height / 2,
        Math.sin(angle) * radius
      );

      scene.add(column);
      columns.push({ mesh: column, baseHeight: height, angle: angle });
    }

    // Grid floor
    const gridHelper = new THREE.GridHelper(10, 20, 0x00ffff, 0x004444);
    gridHelper.position.y = -0.1;
    scene.add(gridHelper);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlePositions: number[] = [];
    for (let i = 0; i < 500; i++) {
      particlePositions.push(
        (Math.random() - 0.5) * 15,
        Math.random() * 8,
        (Math.random() - 0.5) * 15
      );
    }
    particlesGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(particlePositions, 3)
    );
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1, 50);
    pointLight.position.set(0, 10, 0);
    scene.add(pointLight);

    camera.position.set(5, 5, 5);
    camera.lookAt(scene.position);

    // Animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      // Animate columns
      columns.forEach((col, i) => {
        const newHeight = col.baseHeight + Math.sin(time * 2 + i * 0.5) * 0.5;
        col.mesh.scale.y = newHeight / col.baseHeight;
        col.mesh.position.y = newHeight / 2;
        col.mesh.rotation.y += 0.01;
      });

      // Rotate particles
      particles.rotation.y += 0.001;

      // Orbit camera
      camera.position.x = Math.sin(time * 0.5) * 8;
      camera.position.z = Math.cos(time * 0.5) * 8;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      if (mountRef.current && rendererRef.current) {
        camera.aspect =
          mountRef.current.clientWidth / mountRef.current.clientHeight;
        camera.updateProjectionMatrix();
        rendererRef.current.setSize(
          mountRef.current.clientWidth,
          mountRef.current.clientHeight
        );
      }
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      if (mountRef.current && rendererRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
      // Dispose of geometries and materials
      columns.forEach((col) => {
        col.mesh.geometry.dispose();
        if (Array.isArray(col.mesh.material)) {
          col.mesh.material.forEach((mat) => mat.dispose());
        } else {
          col.mesh.material.dispose();
        }
      });
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      rendererRef.current?.dispose();
    };
  }, []);

  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-900 to-black">
      <div ref={mountRef} className="w-full h-full" />
    </div>
  );
};

export default DataVisualization3D;
