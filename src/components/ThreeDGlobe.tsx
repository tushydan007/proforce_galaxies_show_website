import { useEffect, useRef } from "react";
import * as THREE from "three";

const AdvancedGlobe3D = () => {
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
    renderer.setPixelRatio(window.devicePixelRatio);
    mountNode.appendChild(renderer.domElement);

    // Create Earth
    const earthGeometry = new THREE.SphereGeometry(2, 64, 64);
    const earthMaterial = new THREE.MeshPhongMaterial({
      color: 0x2233ff,
      emissive: 0x112244,
      shininess: 25,
      specular: 0x333333,
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earth);

    // Atmosphere glow
    const atmosphereGeometry = new THREE.SphereGeometry(2.15, 64, 64);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x4488ff,
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide,
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);

    // Clouds layer
    const cloudsGeometry = new THREE.SphereGeometry(2.05, 64, 64);
    const cloudsMaterial = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.4,
      emissive: 0x223344,
    });
    const clouds = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
    scene.add(clouds);

    // Wireframe overlay
    const wireframeGeometry = new THREE.SphereGeometry(2.02, 32, 32);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const wireframe = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    scene.add(wireframe);

    // Stars
    const starsGeometry = new THREE.BufferGeometry();
    const starPositions = [];
    for (let i = 0; i < 5000; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 50 + Math.random() * 50;
      starPositions.push(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );
    }
    starsGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starPositions, 3)
    );
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
      transparent: true,
      opacity: 0.8,
    });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Orbiting satellites
    const satelliteGroup = new THREE.Group();
    for (let i = 0; i < 8; i++) {
      const satGeometry = new THREE.BoxGeometry(0.05, 0.05, 0.05);
      const satMaterial = new THREE.MeshPhongMaterial({
        color: 0xff00ff,
        emissive: 0xff00ff,
        emissiveIntensity: 0.5,
      });
      const satellite = new THREE.Mesh(satGeometry, satMaterial);
      const angle = (i / 8) * Math.PI * 2;
      const radius = 3;
      satellite.position.set(
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 2,
        Math.sin(angle) * radius
      );
      satelliteGroup.add(satellite);
    }
    scene.add(satelliteGroup);

    // Advanced lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 1);
    sunLight.position.set(5, 3, 5);
    scene.add(sunLight);

    const pointLight1 = new THREE.PointLight(0x00ffff, 0.5, 50);
    pointLight1.position.set(-10, 0, 0);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff00ff, 0.5, 50);
    pointLight2.position.set(10, 0, 0);
    scene.add(pointLight2);

    camera.position.z = 6;

    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);

      const time = Date.now() * 0.0001;

      earth.rotation.y += 0.002;
      clouds.rotation.y += 0.003;
      wireframe.rotation.y += 0.001;
      satelliteGroup.rotation.y += 0.005;

      stars.rotation.y += 0.0001;
      stars.rotation.x += 0.0001;

      camera.position.x = Math.sin(time * 0.5) * 0.5;
      camera.position.y = Math.cos(time * 0.3) * 0.5;
      camera.lookAt(scene.position);

      const scrollPercent = scrollY * 0.001;
      earth.rotation.x = scrollPercent;

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

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      mountNode?.removeChild(renderer.domElement);
      earthGeometry.dispose();
      earthMaterial.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
      cloudsGeometry.dispose();
      cloudsMaterial.dispose();
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
      starsGeometry.dispose();
      starsMaterial.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default AdvancedGlobe3D;
