import { Award, Database, Globe2, Layers, Sparkles, Zap } from "lucide-react";
import DataVisualization3D from "./DataVisualization3D";
import SatelliteNetwork3D from "./SatelliteNetwork3D";
import LoadingScreen from "./LoadingScreen";
import { useEffect, useState } from "react";

const TechnologyPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      <div className="max-w-[1500px] mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-cyan-400">Technology</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powered by cutting-edge innovations in geospatial science and
            artificial intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="h-[650px] rounded-2xl overflow-hidden shadow-2xl w-full border border-cyan-500/20">
            <DataVisualization3D />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Advanced Technology Stack
            </h2>
            <p className="text-gray-300 text-lg">
              Our platform leverages the latest advancements in cloud computing,
              machine learning, and spatial processing to deliver unparalleled
              performance and accuracy.
            </p>
            {[
              {
                title: "AI-Powered Analysis",
                description:
                  "Deep learning models for automated feature extraction, object detection, and pattern recognition in satellite imagery.",
              },
              {
                title: "Real-Time Processing",
                description:
                  "Distributed computing infrastructure processes terabytes of spatial data in real-time with sub-second latency.",
              },
              {
                title: "3D Rendering Engine",
                description:
                  "Custom-built WebGL engine delivers photorealistic 3D visualization with millions of polygons at 60fps.",
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border-l-4 border-cyan-500"
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  {tech.title}
                </h3>
                <p className="text-gray-300">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Technology Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12 text-cyan-400" />,
                title: "Lightning Fast",
                description:
                  "Process millions of data points in milliseconds with our optimized algorithms.",
              },
              {
                icon: <Database className="w-12 h-12 text-cyan-400" />,
                title: "Scalable Infrastructure",
                description:
                  "Cloud-native architecture that scales effortlessly with your needs.",
              },
              {
                icon: <Layers className="w-12 h-12 text-cyan-400" />,
                title: "Multi-Layer Analysis",
                description:
                  "Combine multiple data sources for comprehensive spatial insights.",
              },
              {
                icon: <Sparkles className="w-12 h-12 text-cyan-400" />,
                title: "AI Integration",
                description:
                  "Machine learning models trained on billions of spatial features.",
              },
              {
                icon: <Globe2 className="w-12 h-12 text-cyan-400" />,
                title: "Global Coverage",
                description:
                  "Access to worldwide satellite imagery and terrain data.",
              },
              {
                icon: <Award className="w-12 h-12 text-cyan-400" />,
                title: "Certified Accuracy",
                description:
                  "ISO-certified processes ensuring data quality and reliability.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-500/60 transition-all hover:transform hover:scale-105"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Innovation Pipeline
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Quantum GIS Processing",
                  status: "In Development",
                  progress: 65,
                },
                {
                  title: "5G Real-Time Streaming",
                  status: "Beta Testing",
                  progress: 85,
                },
                {
                  title: "Holographic Visualization",
                  status: "Research Phase",
                  progress: 40,
                },
                {
                  title: "Edge AI Deployment",
                  status: "Coming Soon",
                  progress: 90,
                },
              ].map((project, index) => (
                <div key={index} className="bg-slate-800/50 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-semibold">
                      {project.title}
                    </span>
                    <span className="text-cyan-400 text-sm">
                      {project.status}
                    </span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-cyan-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="h-96 rounded-2xl overflow-hidden">
            <SatelliteNetwork3D />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyPage;
