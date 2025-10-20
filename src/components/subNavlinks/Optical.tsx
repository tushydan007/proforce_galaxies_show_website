import { useState, type JSX } from "react";
import {
  Eye,
  Maximize2,
  Clock,
  Download,
  ChevronRight,
  Play,
  Camera,
  Layers,
} from "lucide-react";

interface CapabilityCard {
  icon: JSX.Element;
  title: string;
  description: string;
  metric: string;
}

interface TechnicalSpec {
  category: string;
  specs: Array<{ label: string; value: string }>;
}

interface UseCase {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const OpticalSatellitePage = () => {
  const [activeSection, setActiveSection] = useState<
    "capabilities" | "technical" | "usecases"
  >("capabilities");
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const capabilities: CapabilityCard[] = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Ultra-High Resolution",
      description:
        "Capture crystal-clear imagery with industry-leading ground sample distance",
      metric: "30cm GSD",
    },
    {
      icon: <Maximize2 className="w-6 h-6" />,
      title: "Wide Coverage",
      description:
        "Extensive swath width for efficient area coverage and reduced revisit times",
      metric: "20km Swath",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Rapid Revisit",
      description:
        "Frequent passes over areas of interest for near-real-time monitoring",
      metric: "<12hrs",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Multi-Spectral",
      description:
        "Capture data across multiple spectral bands for advanced analytics",
      metric: "8 Bands",
    },
  ];

  const technicalSpecs: TechnicalSpec[] = [
    {
      category: "Imaging Performance",
      specs: [
        { label: "Panchromatic Resolution", value: "30 cm GSD" },
        { label: "Multispectral Resolution", value: "1.2 m GSD" },
        { label: "Spectral Bands", value: "RGB + NIR + 4 Custom" },
        { label: "Swath Width", value: "20 km" },
      ],
    },
    {
      category: "Orbital Parameters",
      specs: [
        { label: "Orbit Type", value: "Sun-Synchronous LEO" },
        { label: "Altitude", value: "500-600 km" },
        { label: "Inclination", value: "97.4°" },
        { label: "Revisit Time", value: "6-12 hours" },
      ],
    },
    {
      category: "System Specifications",
      specs: [
        { label: "Mass", value: "150-200 kg" },
        { label: "Power Generation", value: "500W" },
        { label: "Data Storage", value: "2 TB SSD" },
        { label: "Downlink Rate", value: "450 Mbps X-Band" },
      ],
    },
  ];

  const useCases: UseCase[] = [
    {
      title: "Precision Agriculture",
      description:
        "Monitor crop health, optimize irrigation, and maximize yields with multispectral analysis and vegetation indices.",
      image:
        "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop",
      tags: ["NDVI", "Crop Monitoring", "Yield Prediction"],
    },
    {
      title: "Urban Planning",
      description:
        "Support smart city development with high-resolution imagery for infrastructure planning and 3D modeling.",
      image:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=600&fit=crop",
      tags: ["3D Mapping", "Infrastructure", "Growth Analysis"],
    },
    {
      title: "Disaster Response",
      description:
        "Enable rapid damage assessment and emergency response coordination with near-real-time imagery.",
      image:
        "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800&h=600&fit=crop",
      tags: ["Emergency", "Damage Assessment", "Real-time"],
    },
    {
      title: "Environmental Monitoring",
      description:
        "Track deforestation, coastal erosion, and climate change impacts with temporal analysis capabilities.",
      image:
        "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800&h=600&fit=crop",
      tags: ["Climate", "Conservation", "Change Detection"],
    },
    {
      title: "Maritime Surveillance",
      description:
        "Monitor shipping lanes, detect illegal fishing, and track vessel movements across vast ocean areas.",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      tags: ["Ship Detection", "Maritime", "Security"],
    },
    {
      title: "Infrastructure Inspection",
      description:
        "Assess pipeline integrity, power line conditions, and transportation networks with minimal ground surveys.",
      image:
        "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=600&fit=crop",
      tags: ["Asset Management", "Inspection", "Maintenance"],
    },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1581822261290-991b38693d1b?w=1200&h=800&fit=crop",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/60 to-slate-900 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1920&h=1080&fit=crop"
          alt="Optical satellite in space"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-6 inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-6 py-2">
            <Camera className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold">
              Advanced Imaging Technology
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Optical <span className="text-cyan-400">Satellites</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Next-generation Earth observation satellites delivering ultra-high
            resolution imagery for mission-critical applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              Get Started <ChevronRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2">
              <Download className="w-5 h-5" /> Technical Datasheet
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Image Gallery */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20">
            <img
              src={galleryImages[selectedImage]}
              alt="Satellite imagery"
              className="w-full h-[500px] object-cover transition-all duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-6">
              <div className="flex gap-4 justify-center">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      selectedImage === index
                        ? "bg-cyan-400 w-8"
                        : "bg-gray-500"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {(["capabilities", "technical", "usecases"] as const).map(
              (section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 capitalize ${
                    activeSection === section
                      ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/50"
                      : "bg-slate-800 text-gray-300 hover:bg-slate-700"
                  }`}
                >
                  {section === "usecases" ? "Use Cases" : section}
                </button>
              )
            )}
          </div>

          {/* Capabilities Section */}
          {activeSection === "capabilities" && (
            <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800 to-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-cyan-500/10 w-14 h-14 rounded-lg flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 transition-colors duration-300">
                      {capability.icon}
                    </div>
                    <span className="text-3xl font-bold text-cyan-400">
                      {capability.metric}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-gray-400">{capability.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Technical Specifications */}
          {activeSection === "technical" && (
            <div className="space-y-6 animate-fade-in">
              {technicalSpecs.map((category, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700"
                >
                  <h3 className="text-2xl font-bold text-cyan-400 mb-6">
                    {category.category}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.specs.map((spec, specIndex) => (
                      <div
                        key={specIndex}
                        className="flex justify-between items-center py-3 border-b border-slate-700"
                      >
                        <span className="text-gray-400 font-medium">
                          {spec.label}
                        </span>
                        <span className="text-white font-bold">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Use Cases */}
          {activeSection === "usecases" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={useCase.image}
                      alt={useCase.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{useCase.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {useCase.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            See Our Technology <span className="text-cyan-400">In Action</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Discover how our optical satellites capture stunning imagery and
            deliver actionable intelligence
          </p>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20">
            <div className="relative aspect-video bg-slate-800">
              {!isVideoPlaying ? (
                <>
                  <img
                    src="https://images.unsplash.com/photo-1516849677043-ef67c9557e16?w=1920&h=1080&fit=crop"
                    alt="Satellite operations"
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setIsVideoPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-all duration-300 group"
                  >
                    <div className="bg-cyan-500 rounded-full p-6 transform group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-12 h-12 text-white" fill="white" />
                    </div>
                  </button>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-400">Video player placeholder</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "30cm", label: "Ground Resolution" },
              { value: "99.9%", label: "Uptime" },
              { value: "12hrs", label: "Revisit Time" },
              { value: "20km", label: "Swath Width" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-cyan-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Transform Your Operations with Optical Satellite Imagery
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Partner with us to access cutting-edge Earth observation
            capabilities and unlock new insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Request Demo
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default OpticalSatellitePage;
