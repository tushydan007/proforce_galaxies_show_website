import { useEffect, useMemo, useRef, useState } from "react";
import {
  ChevronRight,
  Check,
  Shield,
  Zap,
  Users,
  TrendingUp,
  Star,
  Clock,
  Globe,
  Headphones,
} from "lucide-react";
import * as THREE from "three";
import { useParams } from "react-router-dom";
import { products, type Product } from "@/data/product";

// Icon mapping for benefits
const iconMap = {
  Shield,
  Zap,
  Users,
  TrendingUp,
};

type IconKey = keyof typeof iconMap;

const ProductDetailPage = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [activeTab, setActiveTab] = useState("overview");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const { productId } = useParams();

  const parsedProductId = parseInt(productId ?? "0");

  useEffect(() => {
    const product = products.find((p) => p.id === parsedProductId);
    setProduct(product || null);
  }, [parsedProductId]);

  // Three.js Scene Setup
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      canvasRef.current.clientWidth / canvasRef.current.clientHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(
      canvasRef.current.clientWidth,
      canvasRef.current.clientHeight
    );
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create rotating geometric structure
    const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
    const material = new THREE.MeshPhongMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    // Add particle system
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 500;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.8,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x06b6d4, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 5;

    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      torusKnot.rotation.x += 0.005;
      torusKnot.rotation.y += 0.005;
      particlesMesh.rotation.y += 0.001;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!canvas) return;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, [product]);

  // Animate elements on mount
  useEffect(() => {
    if (!product) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [product]);

  const stars = useMemo(() => Array(5).fill(0), []);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0F172B] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Product Not Found
          </h2>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-all"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F172B]">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-on-scroll {
          opacity: 0;
        }

        .animate-on-scroll.animate-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .feature-card {
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
        }
      `}</style>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Product Info */}
            <div className="space-y-6">
              {product.codeName && (
                <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full animate-pulse">
                  <span className="text-cyan-400 font-semibold text-sm">
                    {product.codeName}
                  </span>
                </div>
              )}

              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                {product.title}
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                {product.description}
              </p>

              <div className="flex items-center space-x-2 text-yellow-400">
                {stars.map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
                <span className="text-gray-300 ml-2">
                  ({product.rating || 4.9}/5 from{" "}
                  {product.reviewCount?.toLocaleString() || "2,847"} reviews)
                </span>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400">
                    {product.price}
                  </div>
                </div>
                <button className="cursor-pointer flex-1 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30">
                  Get Started Now
                </button>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>

            {/* Right: 3D Canvas & Image */}
            <div className="relative h-[500px]">
              <canvas ref={canvasRef} className="w-full h-full rounded-2xl" />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="relative w-full h-full">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-2xl shadow-2xl border border-cyan-500/30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172B] via-transparent to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-4 pb-16">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 text-center animate-on-scroll">
              <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">
                {product.stats.uptime}
              </div>
              <div className="text-sm text-gray-400">Uptime</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 text-center animate-on-scroll">
              <Users className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">
                {product.stats.users}
              </div>
              <div className="text-sm text-gray-400">Active Users</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 text-center animate-on-scroll">
              <Globe className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">
                {product.stats.countries}
              </div>
              <div className="text-sm text-gray-400">Countries</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 text-center animate-on-scroll">
              <Headphones className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">
                {product.stats.support}
              </div>
              <div className="text-sm text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-cyan-500/20 sticky top-0 bg-[#0F172B]/95 backdrop-blur-sm z-40">
        <div className="max-w-[1500px] mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            {["overview", "features", "specifications", "benefits"].map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-2 font-semibold capitalize whitespace-nowrap transition-all ${
                    activeTab === tab
                      ? "text-cyan-400 border-b-2 border-cyan-400"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  {tab}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-[1500px] mx-auto px-4 py-16">
        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-4 animate-on-scroll">
            Key Features
          </h2>
          <p className="text-gray-300 mb-12 text-lg animate-on-scroll">
            Powerful capabilities designed to transform your workflow and drive
            results
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {product.features.map((feature, idx) => (
              <div
                key={idx}
                className="feature-card group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 animate-on-scroll"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <Check className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {feature}
                    </h3>
                    <p className="text-gray-400">
                      Advanced implementation ensuring maximum efficiency and
                      seamless integration with your existing infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-4 animate-on-scroll">
            Use Cases
          </h2>
          <p className="text-gray-300 mb-12 text-lg animate-on-scroll">
            Discover how organizations leverage this solution to solve complex
            challenges
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {product.useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300 animate-on-scroll"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{useCase.emoji}</div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Specifications Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-4 animate-on-scroll">
            Technical Specifications
          </h2>
          <p className="text-gray-300 mb-12 text-lg animate-on-scroll">
            Enterprise-grade infrastructure built for reliability and
            performance
          </p>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 animate-on-scroll">
            <div className="grid md:grid-cols-2 gap-6">
              {product.specifications.map((spec, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-slate-700/30 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-sm text-gray-400">{spec.label}</div>
                    <div className="text-lg font-semibold text-white">
                      {spec.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-4 animate-on-scroll">
            Why Choose This Solution
          </h2>
          <p className="text-gray-300 mb-12 text-lg animate-on-scroll">
            Experience transformative benefits that set us apart from the
            competition
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.benefits.map((benefit, idx) => {
              const IconComponent = iconMap[benefit.icon as IconKey] || Shield;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 animate-on-scroll"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/20 animate-on-scroll">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                {stars.map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-2xl text-gray-300 mb-6 italic">
                "{product.testimonial.quote}"
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">
                    {product.testimonial.author}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {product.testimonial.role}, {product.testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/20 text-center animate-on-scroll">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of organizations worldwide who trust our platform for
            their critical operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-slate-800/50 hover:bg-slate-700 text-white font-semibold rounded-lg border border-cyan-500/30 transition-all duration-300">
              Contact Sales
            </button>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-cyan-400" />
              <span>Free 14-day trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-cyan-400" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-cyan-400" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetailPage;
