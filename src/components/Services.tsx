import { Globe2, Satellite, Map, Database, ChevronRight } from "lucide-react";
import AdvancedTerrain3D from "./ThreeDTerrain";
import toast from "react-hot-toast";
import LoadingScreen from "./LoadingScreen";
import { useEffect, useState } from "react";

const services = [
  {
    icon: <Globe2 className="w-16 h-16 text-cyan-400" />,
    title: "3D Mapping & Modeling",
    description:
      "High-precision 3D mapping services for urban planning, infrastructure development, and terrain analysis.",
    features: [
      "LiDAR Scanning",
      "Photogrammetry",
      "Point Cloud Processing",
      "BIM Integration",
    ],
  },
  {
    icon: <Satellite className="w-16 h-16 text-cyan-400" />,
    title: "Satellite Imagery Analysis",
    description:
      "Real-time satellite data analysis for environmental monitoring, agriculture, and resource management.",
    features: [
      "Multispectral Analysis",
      "Change Detection",
      "Time Series Analysis",
      "AI-Powered Insights",
    ],
  },
  {
    icon: <Map className="w-16 h-16 text-cyan-400" />,
    title: "GIS Solutions",
    description:
      "Comprehensive GIS solutions for spatial data analysis, visualization, and decision-making support.",
    features: [
      "Spatial Analysis",
      "Custom Applications",
      "Database Management",
      "Web GIS Platforms",
    ],
  },
  {
    icon: <Database className="w-16 h-16 text-cyan-400" />,
    title: "Data Processing & Analytics",
    description:
      "Advanced data processing pipelines for large-scale geospatial datasets and real-time analytics.",
    features: [
      "Big Data Processing",
      "Cloud Computing",
      "Machine Learning",
      "API Integration",
    ],
  },
];

const ServicesPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

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
            Our <span className="text-cyan-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive geospatial solutions tailored to your unique needs
          </p>
        </div>

        <div className="mb-16 h-96 rounded-2xl overflow-hidden shadow-2xl border border-cyan-500/20">
          <AdvancedTerrain3D />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 text-gray-400"
                  >
                    <ChevronRight className="w-4 h-4 text-cyan-400" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() =>
                  toast.success(`Learn more about ${service.title}`, {
                    position: "top-center",
                  })
                }
                className="mt-6 px-6 py-3 bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-white border border-cyan-500/50 rounded-lg transition-all duration-300 font-semibold"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                We specialize in creating tailored geospatial solutions that
                perfectly fit your unique requirements and workflows.
              </p>
              <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                Request Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
