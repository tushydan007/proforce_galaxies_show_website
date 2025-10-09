import { useEffect, useRef } from "react";
import * as THREE from "three";

const Terrain3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountNode.clientWidth / mountNode.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(mountNode.clientWidth, mountNode.clientHeight);
    mountNode.appendChild(renderer.domElement);

    // Terrain
    const geometry = new THREE.PlaneGeometry(5, 5, 32, 32);
    const vertices = geometry.attributes.position.array;
    for (let i = 0; i < vertices.length; i += 3) {
      vertices[i + 2] =
        Math.sin(vertices[i] * 2) * Math.cos(vertices[i + 1] * 2) * 0.5;
    }
    geometry.computeVertexNormals();

    const material = new THREE.MeshPhongMaterial({
      color: 0x00ff88,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    });
    const terrain = new THREE.Mesh(geometry, material);
    terrain.rotation.x = -Math.PI / 3;
    scene.add(terrain);

    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(0, 5, 5);
    scene.add(light);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    camera.position.set(0, 2, 4);
    camera.lookAt(0, 0, 0);

    const animate = () => {
      requestAnimationFrame(animate);
      terrain.rotation.z += 0.002;
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
      mountNode?.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default Terrain3D;
