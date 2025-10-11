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
  Shield,
  Zap,
  Database,
  ArrowRight,
  CheckCircle2,
  Play,
} from "lucide-react";

const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

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

  return (
    <div className="min-h-screen bg-[#0F172B] overflow-hidden">
      {/* Animated Background with Ambient Effects */}
      {/* <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-900/50 to-slate-950" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at ${
              50 + mousePosition.x * 10
            }% ${
              50 + mousePosition.y * 10
            }%, rgba(6, 182, 212, 0.2) 0%, transparent 50%)`,
          }}
        />
        <div className="absolute inset-0" style={scrollParallax(-0.1)}>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_110%)]" />
        </div>
      </div> */}

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-20">
        <div
          className="max-w-[1500px] mx-auto text-center"
          style={parallaxStyle}
        >
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-cyan-400 text-sm font-medium">
              Next-Generation Geospatial Intelligence
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            Transform Data Into
            <br />
            <span className="relative inline-block mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-pulse">
                Actionable Intelligence
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 blur-2xl -z-10" />
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Harness the power of satellite imagery, AI-driven analytics, and
            real-time 3D visualization to unlock unprecedented insights from
            geospatial data. Make smarter decisions with precision mapping,
            predictive modeling, and enterprise-grade spatial intelligence.
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

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
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
              Enterprise-grade geospatial platform built for organizations that
              demand precision, speed, and scalability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Satellite,
                title: "Real-Time Satellite Feeds",
                description:
                  "Access live satellite imagery from multiple providers with sub-meter resolution. Monitor changes as they happen with automated change detection algorithms.",
                features: [
                  "Multi-spectral analysis",
                  "Automated updates",
                  "Global coverage",
                ],
              },
              {
                icon: Map,
                title: "3D Terrain Modeling",
                description:
                  "Generate photorealistic 3D models from aerial imagery. Accurate elevation data with centimeter-level precision for engineering and planning.",
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
                  "Machine learning models trained on billions of data points. Forecast trends, detect patterns, and predict outcomes with unprecedented accuracy.",
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
                  "Process petabytes of geospatial data in minutes. Distributed computing infrastructure scales automatically with your workload.",
                features: [
                  "Parallel processing",
                  "Cloud-native",
                  "Auto-scaling",
                ],
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description:
                  "Military-grade encryption and compliance certifications. Your data is protected with industry-leading security protocols.",
                features: [
                  "SOC 2 certified",
                  "End-to-end encryption",
                  "Role-based access",
                ],
              },
              {
                icon: Zap,
                title: "Lightning Performance",
                description:
                  "Sub-second query response times on massive datasets. Optimized algorithms deliver results 100x faster than traditional GIS systems.",
                features: [
                  "GPU acceleration",
                  "Edge caching",
                  "Smart indexing",
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
              Leading organizations worldwide rely on our platform for
              mission-critical geospatial intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                industry: "Defense & Security",
                use: "Threat assessment and strategic planning with real-time intelligence",
                metrics: [
                  "95% threat detection",
                  "Real-time updates",
                  "Classified support",
                ],
              },
              {
                industry: "Agriculture",
                use: "Precision farming with crop health monitoring and yield prediction",
                metrics: [
                  "30% yield increase",
                  "Water optimization",
                  "Pest detection",
                ],
              },
              {
                industry: "Urban Planning",
                use: "Smart city development with population density and infrastructure analysis",
                metrics: [
                  "40% cost reduction",
                  "Traffic optimization",
                  "Zoning automation",
                ],
              },
              {
                industry: "Environmental",
                use: "Climate monitoring, deforestation tracking, and disaster response",
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
                Ready to Transform Your Geospatial Workflow?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Join hundreds of organizations leveraging our platform. Start
                your free 30-day trial today—no credit card required.
              </p>
              <div className="flex flex-wrap gap-6 justify-center">
                <button className="group cursor-pointer px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/50 flex items-center space-x-3">
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="px-12 py-6 cursor-pointer bg-slate-800/50 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm">
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

// import { useEffect, useState } from "react";
// import AdvancedGlobe3D from "./ThreeDGlobe";
// import {
//   Award,
//   ChevronRight,
//   Globe2,
//   Layers,
//   Sparkles,
//   Users,
// } from "lucide-react";

// const HomePage: React.FC = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({
//         x: e.clientX / window.innerWidth,
//         y: e.clientY / window.innerHeight,
//       });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
//       <div className="absolute inset-0 z-0">
//         <AdvancedGlobe3D />
//       </div>

//       <div
//         className="relative z-10 min-h-screen flex items-center justify-center px-4"
//         style={{
//           transform: `translate(${mousePosition.x * 20}px, ${
//             mousePosition.y * 20
//           }px)`,
//           transition: "transform 0.1s ease-out",
//         }}
//       >
//         <div className="max-w-5xl mx-auto text-center">
//           <div className="mb-8 inline-block">
//             <Sparkles className="w-16 h-16 text-cyan-400 animate-pulse" />
//           </div>
//           <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
//             Explore the{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
//               Future
//             </span>{" "}
//             of Geospatial Technology
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
//             Advanced 3D mapping, satellite imagery, and spatial analysis powered
//             by cutting-edge technology
//           </p>
//           <div className="flex flex-wrap gap-4 justify-center">
//             <button className="group px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50 flex items-center space-x-2">
//               <span>Get Started</span>
//               <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </button>
//             <button className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
//               Watch Demo
//             </button>
//           </div>

//           <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
//             {[
//               {
//                 value: "500+",
//                 label: "Projects",
//                 icon: <Layers className="w-6 h-6" />,
//               },
//               {
//                 value: "50+",
//                 label: "Countries",
//                 icon: <Globe2 className="w-6 h-6" />,
//               },
//               {
//                 value: "99.9%",
//                 label: "Accuracy",
//                 icon: <Award className="w-6 h-6" />,
//               },
//               {
//                 value: "24/7",
//                 label: "Support",
//                 icon: <Users className="w-6 h-6" />,
//               },
//             ].map((stat, index) => (
//               <div
//                 key={index}
//                 className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all"
//               >
//                 <div className="text-cyan-400 mb-2 flex justify-center">
//                   {stat.icon}
//                 </div>
//                 <div className="text-3xl font-bold text-white mb-1">
//                   {stat.value}
//                 </div>
//                 <div className="text-gray-400 text-sm">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
