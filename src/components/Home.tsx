import { useEffect, useState } from "react";
import {
  Award,
  ChevronRight,
  Globe2,
  Layers,
  Sparkles,
  Users,
  Satellite,
  Map,
  TrendingUp,
  Database,
  ArrowRight,
  CheckCircle2,
  Play,
  Settings,
  Wrench,
} from "lucide-react";
import LoadingScreen from "./LoadingScreen";
import GlobeWithSatellite from "./GlobeWithSatellite";

const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxStyle = {
    transform: `translate3d(${mousePosition.x * 15}px, ${
      mousePosition.y * 15
    }px, 0)`,
    transition: "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
  };

  const scrollParallax = (speed: number) => ({
    transform: `translateY(${scrollY * speed}px)`,
  });

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-[#0F172B] overflow-hidden">
      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
        {/* Globe positioned behind the hero content */}
        <div className="absolute inset-0 z-0">
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <GlobeWithSatellite />
          </div>
        </div>

        <div
          className="max-w-[1500px] mx-auto text-center relative z-10"
          style={parallaxStyle}
        >
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-cyan-400 text-sm font-medium">
              End-to-End Satellite Solutions
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            Comprehensive Satellite Ecosystem
            <br />
            <span className="relative inline-block mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-pulse">
                From Design to Intelligence
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 blur-2xl -z-10" />
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Full-spectrum satellite services: custom manufacturing & assembly of
            satellites/ground stations, AI analytics software, real-time 3D
            visualization, and geospatial intelligence. Empower operations with
            precise hardware, innovative software, and integrated solutions for
            mission-critical industries.
          </p>

          <div className="flex flex-wrap gap-6 justify-center mb-16">
            <button className="group cursor-pointer px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/50 flex items-center space-x-3">
              <span className="text-lg">Start Free Trial</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            <button className="group cursor-pointer px-10 py-5 bg-slate-800/50 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center space-x-3">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-lg">Watch Demo</span>
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                value: "500+",
                label: "Enterprise Projects",
                icon: Layers,
                color: "from-cyan-400 to-blue-500",
              },
              {
                value: "150+",
                label: "Countries Covered",
                icon: Globe2,
                color: "from-blue-500 to-purple-500",
              },
              {
                value: "99.9%",
                label: "Data Accuracy",
                icon: Award,
                color: "from-purple-500 to-pink-500",
              },
              {
                value: "24/7",
                label: "Expert Support",
                icon: Users,
                color: "from-pink-500 to-cyan-400",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="group bg-slate-800/40 backdrop-blur-md p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
              >
                <div className="text-cyan-400 mb-3 flex justify-center transform group-hover:scale-110 transition-transform">
                  <div
                    className={`p-3 rounded-full bg-gradient-to-br ${stat.color} bg-opacity-10`}
                  >
                    <stat.icon className="w-7 h-7" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-cyan-400 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="relative z-10 py-32 px-4 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
        <div className="max-w-[1500px] mx-auto">
          <div className="text-center mb-20" style={scrollParallax(-0.05)}>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Powerful{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Capabilities
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              End-to-end solutions blending hardware manufacturing, software
              innovation, and geospatial intelligence for top performance and
              reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Satellite,
                title: "Satellite Manufacturing & Assembly",
                description:
                  "Custom satellite design, manufacturing, and assembly with advanced components. Tailored for smallsats to constellations.",
                features: [
                  "Cleanroom assembly",
                  "Component integration",
                  "Quality assurance testing",
                ],
              },
              {
                icon: Settings,
                title: "Ground Station Manufacturing & Deployment",
                description:
                  "Complete ground station lifecycle: antenna design, manufacturing, and deployment. Ensures reliable data/command operations.",
                features: [
                  "Modular designs",
                  "RF engineering",
                  "Site optimization",
                ],
              },
              {
                icon: Map,
                title: "3D Terrain Modeling",
                description:
                  "Photorealistic 3D models from imagery with cm-level precision for engineering, planning, and simulation.",
                features: [
                  "LiDAR integration",
                  "Point cloud processing",
                  "Mesh generation",
                ],
              },
              {
                icon: TrendingUp,
                title: "Predictive Analytics",
                description:
                  "ML models on billions of points for trend forecasting, pattern detection, and outcome prediction in satellite/ground ops.",
                features: [
                  "Time-series analysis",
                  "Anomaly detection",
                  "Risk assessment",
                ],
              },
              {
                icon: Database,
                title: "Big Data Processing",
                description:
                  "Process petabytes of geospatial/telemetry data in minutes with auto-scaling distributed computing for hardware-software synergy.",
                features: [
                  "Parallel processing",
                  "Cloud-native",
                  "Auto-scaling",
                ],
              },
              {
                icon: Wrench,
                title: "Integrated Hardware-Software Services",
                description:
                  "Seamless custom hardware-software integration with full support from prototype to deployment for optimal satellite performance.",
                features: [
                  "Custom integrations",
                  "Firmware development",
                  "Lifecycle management",
                ],
              },
            ].map((capability, index) => (
              <div
                key={index}
                className="group bg-slate-800/30 backdrop-blur-md p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
                style={scrollParallax(0.02 * (index % 2 === 0 ? 1 : -1))}
              >
                <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <div className="inline-block p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
                    <capability.icon className="w-10 h-10 text-cyan-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {capability.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {capability.description}
                </p>
                <ul className="space-y-2">
                  {capability.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-gray-300 text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="relative z-10 py-32 px-4 bg-slate-900/50">
        <div className="max-w-[1500px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Trusted Across{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Industries
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Leading organizations rely on our hardware, software, and
              intelligence platform for mission-critical applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                industry: "Defense & Security",
                use: "Custom satellites, ground stations, real-time intel for threat assessment and strategy.",
                metrics: [
                  "95% threat detection",
                  "Real-time updates",
                  "Classified support",
                ],
              },
              {
                industry: "Agriculture",
                use: "Satellite assembly, ground deployment, AI analytics for crop monitoring and yield prediction.",
                metrics: [
                  "30% yield increase",
                  "Water optimization",
                  "Pest detection",
                ],
              },
              {
                industry: "Urban Planning",
                use: "Hardware-software integration for smart cities, infrastructure, and population mapping.",
                metrics: [
                  "40% cost reduction",
                  "Traffic optimization",
                  "Zoning automation",
                ],
              },
              {
                industry: "Environmental",
                use: "Satellite/ground manufacturing for climate monitoring, deforestation tracking, disaster response.",
                metrics: [
                  "Real-time alerts",
                  "Historical analysis",
                  "Predictive models",
                ],
              },
            ].map((useCase, index) => (
              <div
                key={index}
                className="group bg-slate-800/40 backdrop-blur-md p-10 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {useCase.industry}
                  </h3>
                  <ArrowRight className="w-6 h-6 text-cyan-400 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all" />
                </div>
                <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                  {useCase.use}
                </p>
                <div className="flex flex-wrap gap-3">
                  {useCase.metrics.map((metric, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-2 border-cyan-500/30 rounded-3xl p-12 md:p-16 backdrop-blur-md relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)]" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Satellite Operations?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Join hundreds of organizations leveraging our end-to-end
                hardware, software, and intelligence solutions. Start your free
                30-day trial today—no credit card required.
              </p>
              <div className="flex flex-wrap gap-6 justify-center">
                <button className="group cursor-pointer md:px-12 md:py-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/50 flex items-center space-x-3">
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="md:px-12 md:py-6 px-6 py-3 cursor-pointer bg-slate-800/50 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
