import { useEffect, useRef } from "react";
import * as THREE from "three";

const SatelliteNetwork3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);

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

    // Central hub
    const hubGeometry = new THREE.IcosahedronGeometry(0.8, 1);
    const hubMaterial = new THREE.MeshPhongMaterial({
      color: 0x00ffff,
      emissive: 0x006666,
      shininess: 100,
      wireframe: false,
    });
    const hub = new THREE.Mesh(hubGeometry, hubMaterial);
    scene.add(hub);

    // Rotating ring
    const ringGeometry = new THREE.TorusGeometry(2, 0.02, 16, 100);
    const ringMaterial = new THREE.MeshPhongMaterial({
      color: 0xff00ff,
      emissive: 0x660066,
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 2;
    scene.add(ring);

    // Satellites
    const satellites: THREE.Group[] = [];
    for (let i = 0; i < 6; i++) {
      const satGroup = new THREE.Group();

      const bodyGeometry = new THREE.BoxGeometry(0.3, 0.15, 0.15);
      const bodyMaterial = new THREE.MeshPhongMaterial({
        color: 0x888888,
        shininess: 100,
      });
      const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
      satGroup.add(body);

      const panelGeometry = new THREE.BoxGeometry(0.6, 0.02, 0.3);
      const panelMaterial = new THREE.MeshPhongMaterial({
        color: 0x1a237e,
        emissive: 0x0d47a1,
      });
      const panel1 = new THREE.Mesh(panelGeometry, panelMaterial);
      panel1.position.set(0.45, 0, 0);
      satGroup.add(panel1);
      const panel2 = new THREE.Mesh(panelGeometry, panelMaterial);
      panel2.position.set(-0.45, 0, 0);
      satGroup.add(panel2);

      const angle = (i / 6) * Math.PI * 2;
      satGroup.position.set(Math.cos(angle) * 2, 0, Math.sin(angle) * 2);
      satGroup.lookAt(hub.position);

      scene.add(satGroup);
      satellites.push(satGroup);
    }

    // Connection lines
    const linesMaterial = new THREE.LineBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.3,
    });
    const linesGroup = new THREE.Group();
    satellites.forEach((sat) => {
      const points = [hub.position, sat.position];
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(lineGeometry, linesMaterial);
      linesGroup.add(line);
    });
    scene.add(linesGroup);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlePositions = [];
    for (let i = 0; i < 1000; i++) {
      particlePositions.push(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
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
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0x00ffff, 1, 50);
    pointLight.position.set(0, 5, 5);
    scene.add(pointLight);
    const pointLight2 = new THREE.PointLight(0xff00ff, 1, 50);
    pointLight2.position.set(0, -5, -5);
    scene.add(pointLight2);

    camera.position.set(4, 3, 4);
    camera.lookAt(scene.position);

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);

      hub.rotation.x += 0.01;
      hub.rotation.y += 0.01;
      ring.rotation.z += 0.005;

      satellites.forEach((sat, i) => {
        sat.rotation.y += 0.02;
        const time = Date.now() * 0.001;
        sat.position.y = Math.sin(time + i) * 0.5;
      });

      particles.rotation.y += 0.001;

      camera.position.x = Math.sin(Date.now() * 0.0003) * 5;
      camera.position.z = Math.cos(Date.now() * 0.0003) * 5;
      camera.lookAt(scene.position);

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

export default SatelliteNetwork3D;
