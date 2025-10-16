import { useEffect, useRef, useState } from "react";
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Clock,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";
import * as THREE from "three";

const DemoVideoModal = ({ isOpen, onClose }) => {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [selectedDemo, setSelectedDemo] = useState(0);
  const sceneRef = useRef(null);
  const animationFrameRef = useRef(null);
  const particlesRef = useRef([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const demos = [
    {
      title: "Platform Overview",
      duration: "3:45",
      thumbnail: "overview",
      description:
        "Complete walkthrough of our geospatial intelligence platform",
    },
    {
      title: "Real-Time Analytics",
      duration: "2:30",
      thumbnail: "analytics",
      description:
        "See AI-powered insights in action with live data processing",
    },
    {
      title: "3D Visualization",
      duration: "4:15",
      thumbnail: "3d",
      description: "Explore terrain modeling and satellite imagery integration",
    },
    {
      title: "Case Studies",
      duration: "5:00",
      thumbnail: "cases",
      description: "Real-world applications across different industries",
    },
  ];

  useEffect(() => {
    if (!isOpen || !canvasRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = 5;

    const ambientLight = new THREE.AmbientLight(0x06b6d4, 0.3);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x3b82f6, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const pointLight1 = new THREE.PointLight(0x06b6d4, 1, 50);
    pointLight1.position.set(-5, 0, 3);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x3b82f6, 1, 50);
    pointLight2.position.set(5, 0, 3);
    scene.add(pointLight2);

    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20;
      positions[i + 1] = (Math.random() - 0.5) * 20;
      positions[i + 2] = (Math.random() - 0.5) * 10;

      velocities.push({
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02,
      });
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x06b6d4,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);
    particlesRef.current = { positions, velocities };

    const ringGeometry = new THREE.TorusGeometry(2, 0.05, 16, 100);
    const ringMaterial = new THREE.MeshPhongMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.3,
      wireframe: true,
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    scene.add(ring);

    const sphereGeometry = new THREE.SphereGeometry(1.5, 32, 32);
    const sphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.2,
      wireframe: true,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    let time = 0;
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      time += 0.01;

      ring.rotation.x = time * 0.5;
      ring.rotation.y = time * 0.3;

      sphere.rotation.y = time * 0.2;
      sphere.scale.setScalar(1 + Math.sin(time) * 0.1);

      const positions = particleGeometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        const vel = particlesRef.current.velocities[i / 3];
        positions[i] += vel.x;
        positions[i + 1] += vel.y;
        positions[i + 2] += vel.z;

        if (Math.abs(positions[i]) > 10) vel.x *= -1;
        if (Math.abs(positions[i + 1]) > 10) vel.y *= -1;
        if (Math.abs(positions[i + 2]) > 5) vel.z *= -1;
      }
      particleGeometry.attributes.position.needsUpdate = true;

      camera.position.x = mousePos.x * 0.5;
      camera.position.y = -mousePos.y * 0.5;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      sphereGeometry.dispose();
      sphereMaterial.dispose();
    };
  }, [isOpen, mousePos]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    if (isOpen) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isOpen]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleLoadedMetadata = () => setDuration(video.duration);

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  if (!isOpen) return null;

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(!isMuted);
  };

  const handleProgressClick = (e) => {
    const video = videoRef.current;
    if (!video) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    video.currentTime = percent * video.duration;
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const stats = [
    { icon: Users, value: "50K+", label: "Active Users" },
    { icon: Award, value: "99.9%", label: "Uptime" },
    { icon: TrendingUp, value: "10x", label: "Faster Processing" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      <div className="relative z-10 w-full max-w-7xl animate-[fadeIn_0.5s_ease-out]">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-3 text-gray-400 hover:text-white transition-colors bg-slate-800/80 rounded-full hover:bg-slate-700 backdrop-blur-sm z-20"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl">
              <div className="relative aspect-video bg-slate-950 group">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect width='1920' height='1080' fill='%230f172b'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='48' fill='%2306b6d4' text-anchor='middle' dominant-baseline='middle'%3EDemo Video%3C/text%3E%3C/svg%3E"
                >
                  <source src="demo-video.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <button
                  onClick={togglePlay}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-cyan-500/90 hover:bg-cyan-600 rounded-full transition-all duration-300 transform hover:scale-110 shadow-2xl group-hover:shadow-cyan-500/50"
                >
                  {isPlaying ? (
                    <Pause className="w-12 h-12 text-white" />
                  ) : (
                    <Play className="w-12 h-12 text-white ml-1" />
                  )}
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div
                  onClick={handleProgressClick}
                  className="relative h-2 bg-slate-800 rounded-full cursor-pointer overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20" />
                  <div
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-150 group-hover:shadow-lg group-hover:shadow-cyan-500/50"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration || 0)}</span>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={togglePlay}
                    className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 text-white" />
                    ) : (
                      <Play className="w-5 h-5 text-white" />
                    )}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5 text-white" />
                    ) : (
                      <Volume2 className="w-5 h-5 text-white" />
                    )}
                  </button>

                  <div className="flex-1" />

                  <button className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
                    <Maximize className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-slate-900/80 backdrop-blur-xl p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105"
                  style={{
                    animation: `slideUp 0.5s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <stat.icon className="w-8 h-8 text-cyan-400 mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30">
              <h3 className="text-xl font-bold text-white mb-2">
                {demos[selectedDemo].title}
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                {demos[selectedDemo].description}
              </p>

              <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                <Clock className="w-4 h-4" />
                <span>{demos[selectedDemo].duration}</span>
              </div>

              <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
            </div>

            <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl p-4 border border-cyan-500/30 space-y-2">
              <h4 className="text-sm font-semibold text-gray-400 mb-3 px-2">
                MORE DEMOS
              </h4>
              {demos.map((demo, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedDemo(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                    selectedDemo === index
                      ? "bg-cyan-500/20 border border-cyan-500/50"
                      : "bg-slate-800/30 hover:bg-slate-800/50 border border-transparent"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h5 className="text-white font-medium mb-1 text-sm">
                        {demo.title}
                      </h5>
                      <p className="text-gray-400 text-xs line-clamp-2">
                        {demo.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-400 shrink-0">
                      <Clock className="w-3 h-3" />
                      <span>{demo.duration}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default DemoVideoModal;
