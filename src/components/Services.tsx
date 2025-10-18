import {
  Globe2,
  Satellite,
  Map,
  Database,
  Rocket,
  GraduationCap,
  FlaskConical,
  ChevronRight,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useEffect, useState, type ReactElement } from "react";

export interface ServiceItem {
  icon: ReactElement; // e.g. <Globe2 className="..." />
  title: string;
  description: string;
  features: string[];
  gradient: string;
  iconBg: string;
}

const services: ServiceItem[] = [
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
    gradient: "from-cyan-500/10 to-blue-500/10",
    iconBg: "bg-cyan-500/10",
  },
  {
    icon: <Satellite className="w-16 h-16 text-purple-400" />,
    title: "Satellite Imagery Analysis",
    description:
      "Real-time satellite data analysis for environmental monitoring, agriculture, and resource management.",
    features: [
      "Multispectral Analysis",
      "Change Detection",
      "Time Series Analysis",
      "AI-Powered Insights",
    ],
    gradient: "from-purple-500/10 to-pink-500/10",
    iconBg: "bg-purple-500/10",
  },
  {
    icon: <Map className="w-16 h-16 text-emerald-400" />,
    title: "GIS Solutions",
    description:
      "Comprehensive GIS solutions for spatial data analysis, visualization, and decision-making support.",
    features: [
      "Spatial Analysis",
      "Custom Applications",
      "Database Management",
      "Web GIS Platforms",
    ],
    gradient: "from-emerald-500/10 to-teal-500/10",
    iconBg: "bg-emerald-500/10",
  },
  {
    icon: <Database className="w-16 h-16 text-blue-400" />,
    title: "Data Processing & Analytics",
    description:
      "Advanced data processing pipelines for large-scale geospatial datasets and real-time analytics.",
    features: [
      "Big Data Processing",
      "Cloud Computing",
      "Machine Learning",
      "API Integration",
    ],
    gradient: "from-blue-500/10 to-indigo-500/10",
    iconBg: "bg-blue-500/10",
  },
  {
    icon: <Rocket className="w-16 h-16 text-orange-400" />,
    title: "Mission Design",
    description:
      "Comprehensive mission planning and design services for satellite deployment, orbital analysis, and space operations.",
    features: [
      "Orbital Mechanics",
      "Launch Window Analysis",
      "Mission Trajectory Planning",
      "Payload Integration",
    ],
    gradient: "from-orange-500/10 to-red-500/10",
    iconBg: "bg-orange-500/10",
  },
  {
    icon: <GraduationCap className="w-16 h-16 text-yellow-400" />,
    title: "Training Programs",
    description:
      "Professional training and certification programs in geospatial technologies, remote sensing, and space systems.",
    features: [
      "GIS Certification Courses",
      "Remote Sensing Workshops",
      "Software Training",
      "Custom Corporate Training",
    ],
    gradient: "from-yellow-500/10 to-amber-500/10",
    iconBg: "bg-yellow-500/10",
  },
  {
    icon: <FlaskConical className="w-16 h-16 text-pink-400" />,
    title: "Space Research Program",
    description:
      "Cutting-edge research initiatives in space science, satellite technology, and Earth observation systems.",
    features: [
      "Applied Research Projects",
      "Academic Partnerships",
      "Innovation Labs",
      "Grant-Funded Studies",
    ],
    gradient: "from-pink-500/10 to-rose-500/10",
    iconBg: "bg-pink-500/10",
  },
];

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(
    null
  );
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    satisfaction: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      if (hasAnimated) return;

      const statsSection = document.getElementById("stats-section");
      if (!statsSection) return;

      const rect = statsSection.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isVisible) {
        setHasAnimated(true);
        animateCounters();
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      projects: 500,
      clients: 50,
      years: 15,
      satisfaction: 98,
    };

    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounts({
        projects: Math.floor(targets.projects * easeOutQuart),
        clients: Math.floor(targets.clients * easeOutQuart),
        years: Math.floor(targets.years * easeOutQuart),
        satisfaction: Math.floor(targets.satisfaction * easeOutQuart),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);
  };

  const handleLearnMore = (service: ServiceItem) => {
    setSelectedService(service);
    setTimeout(() => setSelectedService(null), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div
          className={`max-w-7xl mx-auto text-center relative z-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-semibold">
              Professional Geospatial Solutions
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Our <span className="text-cyan-400">Services</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive geospatial and space technology solutions tailored to
            transform your vision into reality
          </p>
        </div>

        {/* Stats Section */}
        <div
          id="stats-section"
          className="max-w-6xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 px-4"
        >
          <div className="bg-slate-800/30 backdrop-blur-sm border border-cyan-500/10 rounded-2xl p-6 text-center hover:border-cyan-500/30 transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">
              {counts.projects}+
            </div>
            <div className="text-gray-400 text-sm md:text-base">
              Projects Completed
            </div>
          </div>
          <div className="bg-slate-800/30 backdrop-blur-sm border border-cyan-500/10 rounded-2xl p-6 text-center hover:border-cyan-500/30 transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">
              {counts.clients}+
            </div>
            <div className="text-gray-400 text-sm md:text-base">
              Global Clients
            </div>
          </div>
          <div className="bg-slate-800/30 backdrop-blur-sm border border-cyan-500/10 rounded-2xl p-6 text-center hover:border-cyan-500/30 transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">
              {counts.years}+
            </div>
            <div className="text-gray-400 text-sm md:text-base">
              Years Experience
            </div>
          </div>
          <div className="bg-slate-800/30 backdrop-blur-sm border border-cyan-500/10 rounded-2xl p-6 text-center hover:border-cyan-500/30 transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">
              {counts.satisfaction}%
            </div>
            <div className="text-gray-400 text-sm md:text-base">
              Client Satisfaction
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/40 backdrop-blur-sm rounded-3xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              <div className="relative p-8">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 ${service.iconBg} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500`}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors duration-300"
                    >
                      <ChevronRight className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <button
                  onClick={() => handleLearnMore(service)}
                  className="w-full px-6 py-3 bg-slate-700/50 hover:bg-cyan-500 text-gray-300 hover:text-white border border-slate-600/50 hover:border-cyan-500 rounded-xl transition-all duration-300 font-semibold flex items-center justify-center gap-2 group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="relative bg-gradient-to-r from-slate-800/50 via-slate-800/30 to-slate-800/50 backdrop-blur-sm rounded-3xl p-12 md:p-16 border border-cyan-500/20 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #06b6d4 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            ></div>
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Need a Custom Solution?
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                We specialize in creating tailored geospatial and space
                technology solutions that perfectly fit your unique requirements
                and workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2">
                  <span>Request Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-slate-700/50 hover:bg-slate-700 text-white font-semibold rounded-full transition-all duration-300 border border-slate-600 hover:border-cyan-500">
                  View Portfolio
                </button>
              </div>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute inset-8 bg-gradient-to-tr from-cyan-500/30 to-blue-500/30 rounded-full flex items-center justify-center">
                  <Sparkles className="w-24 h-24 text-cyan-400 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {selectedService && (
        <div className="fixed bottom-8 right-8 bg-slate-800 border border-cyan-500/50 rounded-2xl p-6 shadow-2xl shadow-cyan-500/20 animate-in slide-in-from-right-5 max-w-sm z-50">
          <div className="flex items-start gap-4">
            <div className={`${selectedService.iconBg} p-3 rounded-xl`}>
              {selectedService.icon}
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">
                {selectedService.title}
              </h4>
              <p className="text-gray-400 text-sm">
                Contact us to learn more about this service
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;
