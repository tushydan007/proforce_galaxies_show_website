import { useEffect, useRef } from "react";
import * as THREE from "three";

const Satellite3D = () => {
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

    // Satellite body
    const bodyGeometry = new THREE.BoxGeometry(1, 0.5, 0.5);
    const bodyMaterial = new THREE.MeshPhongMaterial({
      color: 0x888888,
      shininess: 100,
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    scene.add(body);

    // Solar panels
    const panelGeometry = new THREE.BoxGeometry(2, 0.05, 1);
    const panelMaterial = new THREE.MeshPhongMaterial({
      color: 0x1a237e,
      emissive: 0x0d47a1,
    });
    const panel1 = new THREE.Mesh(panelGeometry, panelMaterial);
    panel1.position.set(1.5, 0, 0);
    body.add(panel1);
    const panel2 = new THREE.Mesh(panelGeometry, panelMaterial);
    panel2.position.set(-1.5, 0, 0);
    body.add(panel2);

    // Antenna
    const antennaGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1, 8);
    const antennaMaterial = new THREE.MeshPhongMaterial({ color: 0xcccccc });
    const antenna = new THREE.Mesh(antennaGeometry, antennaMaterial);
    antenna.position.set(0, 0.75, 0);
    body.add(antenna);

    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    camera.position.z = 3;

    const animate = () => {
      requestAnimationFrame(animate);
      body.rotation.y += 0.01;
      body.rotation.x += 0.005;
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
      bodyGeometry.dispose();
      bodyMaterial.dispose();
      panelGeometry.dispose();
      panelMaterial.dispose();
      antennaGeometry.dispose();
      antennaMaterial.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default Satellite3D;
