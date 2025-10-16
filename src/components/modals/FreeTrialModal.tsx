import { useEffect, useRef, useState } from "react";
import {
  X,
  Check,
  ArrowRight,
  Mail,
  Building2,
  User,
  Phone,
  MapPin,
} from "lucide-react";
import * as THREE from "three";

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FreeTrialModal = ({ isOpen, onClose }: FreeTrialModalProps) => {
  const canvasRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    country: "",
    role: "",
  });
  const [currentStep, setCurrentStep] = useState(1);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const animationFrameRef = useRef<number | null>(null);

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

    const ambientLight = new THREE.AmbientLight(0x06b6d4, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x3b82f6, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x06b6d4, 1, 100);
    pointLight.position.set(0, 0, 3);
    scene.add(pointLight);

    const geometries = [
      new THREE.OctahedronGeometry(0.5),
      new THREE.TetrahedronGeometry(0.4),
      new THREE.IcosahedronGeometry(0.3),
      new THREE.TorusGeometry(0.3, 0.1, 16, 100),
    ];

    const material = new THREE.MeshPhongMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.6,
      wireframe: true,
    });

    const meshes: THREE.Mesh[] = [];
    for (let i = 0; i < 15; i++) {
      const geometry =
        geometries[Math.floor(Math.random() * geometries.length)];
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.x = (Math.random() - 0.5) * 10;
      mesh.position.y = (Math.random() - 0.5) * 10;
      mesh.position.z = (Math.random() - 0.5) * 5;

      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;

      scene.add(mesh);
      meshes.push(mesh);
    }

    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      meshes.forEach((mesh, index) => {
        mesh.rotation.x += 0.001 * (index % 2 === 0 ? 1 : -1);
        mesh.rotation.y += 0.002 * (index % 2 === 0 ? 1 : -1);

        mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001;
      });

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
      geometries.forEach((g) => g.dispose());
      material.dispose();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep === 1) {
      setCurrentStep(2);
    } else {
      console.log("Form submitted:", formData);
      onClose();
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const features = [
    "Full platform access for 30 days",
    "Unlimited satellite imagery requests",
    "AI-powered analytics tools",
    "Real-time 3D visualization",
    "Dedicated onboarding session",
    "Priority support channel",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      <div className="relative z-10 w-full max-w-6xl bg-slate-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-cyan-500/30 overflow-hidden animate-[slideUp_0.5s_ease-out]">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2 text-gray-400 hover:text-white transition-colors bg-slate-800/50 rounded-full hover:bg-slate-800"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          <div className="p-12 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border-r border-cyan-500/20">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full mb-6">
                <span className="text-cyan-400 text-sm font-semibold">
                  30-DAY FREE TRIAL
                </span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Start Your Journey to Better Insights
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Experience the full power of our geospatial intelligence
                platform. No credit card required.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="mt-1 p-1 bg-cyan-500/20 rounded-full group-hover:bg-cyan-500/30 transition-colors">
                    <Check className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-slate-800/50 rounded-xl border border-cyan-500/20">
              <p className="text-gray-400 text-sm italic">
                "This platform transformed how we approach geospatial analysis.
                The insights are invaluable."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full" />
                <div>
                  <p className="text-white font-semibold">Sarah Chen</p>
                  <p className="text-gray-400 text-sm">Director of Analytics</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-12">
            <div ref={formRef} className="space-y-6">
              {currentStep === 1 ? (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                        placeholder="John"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Work Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                        placeholder="john.doe@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name *
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                        placeholder="Acme Corporation"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Country *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      <select
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select country</option>
                        <option value="us">United States</option>
                        <option value="uk">United Kingdom</option>
                        <option value="ca">Canada</option>
                        <option value="au">Australia</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Role *
                    </label>
                    <select
                      name="role"
                      required
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select role</option>
                      <option value="analyst">Data Analyst</option>
                      <option value="engineer">Engineer</option>
                      <option value="manager">Manager</option>
                      <option value="executive">Executive</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </>
              )}

              <div className="flex gap-4 pt-4">
                {currentStep === 2 && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="px-6 py-3 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    Back
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex-1 group flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  <span>
                    {currentStep === 1 ? "Continue" : "Start Free Trial"}
                  </span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <p className="text-sm text-gray-400 text-center">
                By continuing, you agree to our Terms of Service and Privacy
                Policy
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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

export default FreeTrialModal;
