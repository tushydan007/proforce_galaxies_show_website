import { useEffect, useState } from "react";
import AdvancedGlobe3D from "./ThreeDGlobe";
import {
  Award,
  ChevronRight,
  Globe2,
  Layers,
  Sparkles,
  Users,
} from "lucide-react";

const HomePage: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AdvancedGlobe3D />
      </div>

      <div
        className="relative z-10 min-h-screen flex items-center justify-center px-4"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${
            mousePosition.y * 20
          }px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <Sparkles className="w-16 h-16 text-cyan-400 animate-pulse" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            Explore the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Future
            </span>{" "}
            of Geospatial
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Advanced 3D mapping, satellite imagery, and spatial analysis powered
            by cutting-edge technology
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="group px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50 flex items-center space-x-2">
              <span>Get Started</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
              Watch Demo
            </button>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                value: "500+",
                label: "Projects",
                icon: <Layers className="w-6 h-6" />,
              },
              {
                value: "50+",
                label: "Countries",
                icon: <Globe2 className="w-6 h-6" />,
              },
              {
                value: "99.9%",
                label: "Accuracy",
                icon: <Award className="w-6 h-6" />,
              },
              {
                value: "24/7",
                label: "Support",
                icon: <Users className="w-6 h-6" />,
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all"
              >
                <div className="text-cyan-400 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
