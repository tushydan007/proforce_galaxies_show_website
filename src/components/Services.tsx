import { Globe2, Satellite, Map } from "lucide-react";
import Terrain3D from "./ThreeDTerrain";
import { toast } from "react-toastify";

const ServicesSection = () => {
  const services = [
    {
      icon: <Globe2 className="w-12 h-12 text-cyan-400" />,
      title: "3D Mapping",
      description:
        "High-precision 3D mapping services for urban planning and infrastructure development.",
    },
    {
      icon: <Satellite className="w-12 h-12 text-cyan-400" />,
      title: "Satellite Imagery",
      description:
        "Real-time satellite data analysis for environmental monitoring and resource management.",
    },
    {
      icon: <Map className="w-12 h-12 text-cyan-400" />,
      title: "GIS Analysis",
      description:
        "Comprehensive GIS solutions for spatial data analysis and visualization.",
    },
  ];

  return (
    <section
      id="services"
      className="relative min-h-screen bg-gradient-to-b from-slate-900 to-blue-900 py-20"
    >
      <div className="absolute left-0 top-1/3 w-1/4 h-64 opacity-30">
        <Terrain3D />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-cyan-400">Services</span>
          </h2>
          <p className="text-xl text-gray-300">
            Comprehensive geospatial solutions for every need
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 cursor-pointer"
              onClick={() =>
                toast.success(`Learn more about ${service.title}`, {
                  position: "top-center",
                })
              }
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
