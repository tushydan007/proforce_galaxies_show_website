import { useEffect, useRef } from "react";
import * as THREE from "three";

const Globe3D = ({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const globeRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera(
      75,
      mountNode.clientWidth / mountNode.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(mountNode.clientWidth, mountNode.clientHeight);
    mountNode.appendChild(renderer.domElement);

    // Globe
    const geometry = new THREE.SphereGeometry(2, 64, 64);
    const material = new THREE.MeshPhongMaterial({
      color: 0x2196f3,
      emissive: 0x0a4d7a,
      wireframe: false,
      transparent: true,
      opacity: 0.9,
    });
    const globe = new THREE.Mesh(geometry, material);
    globeRef.current = globe;
    scene.add(globe);

    // Wireframe overlay
    const wireframeGeometry = new THREE.SphereGeometry(2.01, 32, 32);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const wireframe = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    scene.add(wireframe);

    // Points (stars)
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.02,
    });
    const starsVertices = [];
    for (let i = 0; i < 1000; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      starsVertices.push(x, y, z);
    }
    starsGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starsVertices, 3)
    );
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      if (globeRef.current) {
        globeRef.current.rotation.y += 0.002;
      }
      wireframe.rotation.y -= 0.001;
      stars.rotation.y += 0.0001;
      renderer.render(scene, camera);
    };
    animate();

    // Scroll animation
    const handleScroll = () => {
      if (containerRef.current && globeRef.current) {
        const scrollPercent =
          window.scrollY / (containerRef.current.offsetHeight / 2);
        globeRef.current.rotation.x = scrollPercent * 0.5;
        camera.position.z = 5 + scrollPercent * 2;
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Resize handler
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
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      mountNode?.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
      starsGeometry.dispose();
      starsMaterial.dispose();
    };
  }, [containerRef]);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default Globe3D;
