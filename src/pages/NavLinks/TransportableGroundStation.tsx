// import { useState, type JSX } from "react";
// import {
//   Boxes,
//   Plane,
//   Settings,
//   Users,
//   Download,
//   ChevronRight,
//   Play,
//   Package,
//   Wrench,
//   TrendingUp,
// } from "lucide-react";

// interface Specification {
//   label: string;
//   value: string;
// }

// interface Feature {
//   icon: JSX.Element;
//   title: string;
//   description: string;
// }

// interface UseCase {
//   title: string;
//   description: string;
//   image: string;
// }

// const TransportableGroundStationPage = () => {
//   const [activeTab, setActiveTab] = useState<"overview" | "specs" | "usecases">(
//     "overview"
//   );
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);

//   const specifications: Specification[] = [
//     { label: "Antenna Size", value: "3.7m - 7.3m" },
//     { label: "Transport Method", value: "Air/Sea/Land" },
//     { label: "Setup Time", value: "2-4 hours" },
//     { label: "Frequency Bands", value: "C, X, Ku, Ka" },
//     { label: "Data Rate", value: "Up to 5 Gbps" },
//     { label: "Shipping Cases", value: "4-8 ISO containers" },
//     { label: "Crew Required", value: "4-6 personnel" },
//     { label: "Deployment Period", value: "Weeks to months" },
//   ];

//   const features: Feature[] = [
//     {
//       icon: <Boxes className="w-6 h-6" />,
//       title: "Modular Design",
//       description:
//         "Containerized system components for efficient transport via air, sea, or land to any global location.",
//     },
//     {
//       icon: <Settings className="w-6 h-6" />,
//       title: "Quick Assembly",
//       description:
//         "Engineered for rapid deployment with standardized components and clear assembly procedures.",
//     },
//     {
//       icon: <TrendingUp className="w-6 h-6" />,
//       title: "Scalable Performance",
//       description:
//         "Configurable system architecture allowing customization based on specific mission requirements.",
//     },
//     {
//       icon: <Users className="w-6 h-6" />,
//       title: "Expert Support",
//       description:
//         "Comprehensive training, documentation, and on-site support ensuring successful deployment.",
//     },
//   ];

//   const useCases: UseCase[] = [
//     {
//       title: "Temporary Missions",
//       description:
//         "Ideal for short to medium-term satellite operations, field campaigns, and special projects.",
//       image:
//         "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
//     },
//     {
//       title: "Remote Locations",
//       description:
//         "Perfect for establishing satellite communications in remote areas lacking infrastructure.",
//       image:
//         "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop",
//     },
//     {
//       title: "Disaster Recovery",
//       description:
//         "Rapid deployment capability for emergency communications and disaster response operations.",
//       image:
//         "https://images.unsplash.com/photo-1509105494475-358d372e6ade?w=800&h=600&fit=crop",
//     },
//   ];

//   const downloadSpecs = () => {
//     const specsText = specifications
//       .map((spec) => `${spec.label}: ${spec.value}`)
//       .join("\n");
//     const blob = new Blob(
//       [
//         `Transportable Ground Station Specifications\n\n${specsText}\n\nGenerated on October 21, 2025`,
//       ],
//       { type: "text/plain" }
//     );
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "transportable_ground_station_specifications.txt";
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-950 to-slate-900">
//       {/* Hero Section */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900 z-10"></div>
//         <img
//           src="https://images.unsplash.com/photo-1566140967404-b8b3932483f5?w=1920&h=1080&fit=crop"
//           alt="Transportable Ground Station"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
//           <div className="flex justify-center mb-6">
//             <Package className="w-16 h-16 text-purple-400 animate-pulse" />
//           </div>
//           <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
//             Transportable{" "}
//             <span className="text-purple-400">Ground Station</span>
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
//             Modular satellite communications system designed for global
//             deployment with flexible setup configurations
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-purple-500 cursor-pointer hover:bg-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
//               Request Quote <ChevronRight className="w-5 h-5" />
//             </button>
//             <button
//               onClick={downloadSpecs}
//               className="cursor-pointer border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
//             >
//               <Download className="w-5 h-5" /> Download Specs
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Video Section */}
//       <section className="py-20 px-4">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-bold text-white text-center mb-12">
//             Assembly & <span className="text-purple-400">Deployment</span>
//           </h2>
//           <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20">
//             <div className="relative aspect-video bg-slate-800">
//               {!isVideoPlaying ? (
//                 <>
//                   <img
//                     src="https://images.unsplash.com/photo-1566140967404-b8b3932483f5?w=1920&h=1080&fit=crop"
//                     alt="Station Assembly"
//                     className="w-full h-full object-cover"
//                   />
//                   <button
//                     onClick={() => setIsVideoPlaying(true)}
//                     className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-all duration-300 group"
//                   >
//                     <div className="bg-purple-500 rounded-full p-6 transform group-hover:scale-110 transition-transform duration-300">
//                       <Play className="w-12 h-12 text-white" fill="white" />
//                     </div>
//                   </button>
//                 </>
//               ) : (
//                 <iframe
//                   src="https://www.youtube.com/embed/RtU_mdL2vBM"
//                   className="w-full h-full"
//                   title="Transportable Ground Station Assembly"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 px-4 bg-slate-800/30">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-4 gap-8">
//             {[
//               {
//                 icon: <Wrench className="w-8 h-8" />,
//                 value: "2-4hrs",
//                 label: "Setup Time",
//               },
//               {
//                 icon: <TrendingUp className="w-8 h-8" />,
//                 value: "5 Gbps",
//                 label: "Data Rate",
//               },
//               {
//                 icon: <Plane className="w-8 h-8" />,
//                 value: "Global",
//                 label: "Deployment",
//               },
//               {
//                 icon: <Boxes className="w-8 h-8" />,
//                 value: "4-8",
//                 label: "Containers",
//               },
//             ].map((stat, index) => (
//               <div
//                 key={index}
//                 className="text-center p-6 bg-slate-900/50 rounded-xl border border-purple-500/20 hover:border-purple-500 transition-all duration-300"
//               >
//                 <div className="flex justify-center mb-4 text-purple-400">
//                   {stat.icon}
//                 </div>
//                 <div className="text-3xl font-bold text-white mb-2">
//                   {stat.value}
//                 </div>
//                 <div className="text-gray-400">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Tabs Section */}
//       <section className="py-20 px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex justify-center gap-4 mb-12 flex-wrap">
//             {(["overview", "specs", "usecases"] as const).map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 capitalize ${
//                   activeTab === tab
//                     ? "bg-purple-500 text-white shadow-lg shadow-purple-500/50"
//                     : "bg-slate-800 text-gray-300 hover:bg-slate-700"
//                 }`}
//               >
//                 {tab === "usecases" ? "use cases" : tab}
//               </button>
//             ))}
//           </div>

//           {/* Overview Tab */}
//           {activeTab === "overview" && (
//             <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
//               {features.map((feature, index) => (
//                 <div
//                   key={index}
//                   className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"
//                 >
//                   <div className="bg-purple-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 text-purple-400">
//                     {feature.icon}
//                   </div>
//                   <h3 className="text-xl font-bold text-white mb-3">
//                     {feature.title}
//                   </h3>
//                   <p className="text-gray-400">{feature.description}</p>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Specifications Tab */}
//           {activeTab === "specs" && (
//             <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 animate-fade-in">
//               <div className="grid md:grid-cols-2 gap-6">
//                 {specifications.map((spec, index) => (
//                   <div
//                     key={index}
//                     className="flex justify-between items-center py-4 border-b border-slate-700"
//                   >
//                     <span className="text-gray-400 font-medium">
//                       {spec.label}
//                     </span>
//                     <span className="text-white font-bold">{spec.value}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Use Cases Tab */}
//           {activeTab === "usecases" && (
//             <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
//               {useCases.map((useCase, index) => (
//                 <div
//                   key={index}
//                   className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"
//                 >
//                   <div className="relative h-48 overflow-hidden">
//                     <img
//                       src={useCase.image}
//                       alt={useCase.title}
//                       className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
//                     />
//                   </div>
//                   <div className="p-6">
//                     <h3 className="text-xl font-bold text-white mb-3">
//                       {useCase.title}
//                     </h3>
//                     <p className="text-gray-400">{useCase.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Features Grid */}
//       <section className="py-20 px-4 bg-slate-800/30">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-bold text-white text-center mb-12">
//             System <span className="text-purple-400">Components</span>
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               {
//                 title: "Antenna System",
//                 desc: "High-gain parabolic antenna with precision tracking mount",
//                 icon: "🛰️",
//               },
//               {
//                 title: "RF Equipment",
//                 desc: "Multi-band transceivers and signal processing units",
//                 icon: "📡",
//               },
//               {
//                 title: "Control Center",
//                 desc: "Operator workstations with monitoring and control software",
//                 icon: "🖥️",
//               },
//               {
//                 title: "Power System",
//                 desc: "Generator and UPS for continuous operation",
//                 icon: "⚡",
//               },
//               {
//                 title: "Climate Control",
//                 desc: "HVAC systems maintaining optimal operating conditions",
//                 icon: "❄️",
//               },
//               {
//                 title: "Security",
//                 desc: "Physical and cyber security measures and monitoring",
//                 icon: "🔒",
//               },
//             ].map((component, index) => (
//               <div
//                 key={index}
//                 className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300"
//               >
//                 <div className="text-4xl mb-4">{component.icon}</div>
//                 <h3 className="text-lg font-bold text-white mb-2">
//                   {component.title}
//                 </h3>
//                 <p className="text-gray-400 text-sm">{component.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Image Gallery */}
//       <section className="py-20 px-4">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-bold text-white text-center mb-12">
//             Deployment <span className="text-purple-400">Gallery</span>
//           </h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {[
//               "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
//               "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&h=600&fit=crop",
//               "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop",
//             ].map((img, index) => (
//               <div
//                 key={index}
//                 className="relative h-64 rounded-xl overflow-hidden group"
//               >
//                 <img
//                   src={img}
//                   alt={`Transportable Station ${index + 1}`}
//                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Process Timeline */}
//       <section className="py-20 px-4 bg-slate-800/30">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-bold text-white text-center mb-12">
//             Deployment <span className="text-purple-400">Process</span>
//           </h2>
//           <div className="space-y-8">
//             {[
//               {
//                 step: "01",
//                 title: "Site Survey & Planning",
//                 desc: "Assessment of location, logistics, and mission requirements",
//               },
//               {
//                 step: "02",
//                 title: "Transportation & Delivery",
//                 desc: "Containerized equipment shipped via air, sea, or land freight",
//               },
//               {
//                 step: "03",
//                 title: "On-Site Assembly",
//                 desc: "Professional installation team assembles system components",
//               },
//               {
//                 step: "04",
//                 title: "Testing & Commissioning",
//                 desc: "System verification, calibration, and performance validation",
//               },
//               {
//                 step: "05",
//                 title: "Operations & Support",
//                 desc: "24/7 monitoring, maintenance, and technical support",
//               },
//             ].map((phase, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col md:flex-row items-start gap-6 bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300"
//               >
//                 <div className="flex-shrink-0 w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center border-2 border-purple-500">
//                   <span className="text-2xl font-bold text-purple-400">
//                     {phase.step}
//                   </span>
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-white mb-2">
//                     {phase.title}
//                   </h3>
//                   <p className="text-gray-400">{phase.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-4">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl font-bold text-white mb-6">
//             Plan Your Deployment
//           </h2>
//           <p className="text-xl text-gray-400 mb-8">
//             Connect with our engineering team to design a customized
//             transportable ground station solution
//           </p>
//           <button className="bg-purple-500 hover:bg-purple-600 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
//             Schedule Consultation
//           </button>
//         </div>
//       </section>

//       <style>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in {
//           animation: fade-in 0.6s ease-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TransportableGroundStationPage;

import { useState, type JSX } from "react";
import {
  Clock,
  Package,
  Download,
  ChevronRight,
  Play,
  Globe,
  Settings,
  Zap,
  Shield,
} from "lucide-react";
import jsPDF from "jspdf";
import heroImage from "/transportable-ground-station.webp";

interface Specification {
  label: string;
  value: string;
}

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
  details?: string[];
}

interface Application {
  title: string;
  description: string;
  image: string;
}

interface HowItWorksStep {
  title: string;
  description: string;
  icon: JSX.Element;
}

const TransportableGroundStation = () => {
  const [activeTab, setActiveTab] = useState<
    "overview" | "specs" | "applications" | "how-it-works"
  >("overview");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const specifications: Specification[] = [
    { label: "Antenna Diameter", value: "3.8m ring-focus parabolic" },
    { label: "Frequency Bands", value: "C, X, Ka-band support" },
    { label: "G/T (Gain-to-Noise Temperature)", value: ">38 dB/K at Ka-band" },
    { label: "EIRP (Effective Isotropic Radiated Power)", value: ">55 dBW" },
    { label: "Power Consumption", value: "<400W average" },
    { label: "Operating Temperature", value: "-40°C to +60°C" },
    { label: "Container Size", value: "20ft ISO standard" },
    { label: "Total Weight", value: "1,800 kg (including packaging)" },
    { label: "Data Throughput", value: "Up to 8 Gbps full-duplex" },
    { label: "Modulation Schemes", value: "QPSK, 8PSK, 16APSK" },
    { label: "Polarization", value: "Linear and Circular" },
    { label: "Alignment Time", value: "<30 minutes automated" },
  ];

  const features: Feature[] = [
    {
      icon: <Package className="w-6 h-6" />,
      title: "Containerized Design",
      description:
        "Fully integrated into a rugged 20ft ISO shipping container, enabling seamless global transport by truck, rail, ship, or air freight. Weatherproof and shock-resistant construction ensures reliability in harsh environments.",
      details: [
        "MIL-STD-810G compliant for environmental durability",
        "Forklift-compatible base for easy handling",
        "Integrated climate control system",
      ],
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Scalable High-Performance",
      description:
        "Modular RF and modem architecture supports multi-band operations and future upgrades. Delivers up to 8 Gbps throughput with low latency, ideal for high-data-rate missions like Earth observation and broadband communications.",
      details: [
        "Software-defined radio (SDR) for flexible frequency agility",
        "Redundant power supplies for 99.99% uptime",
        "Compatible with major satellite constellations (LEO/MEO/GEO)",
      ],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Rapid Deployment & Activation",
      description:
        "Designed for mission-critical speed: Unpack, auto-align, and go live in under 2 hours. Built-in GPS, inertial sensors, and AI-driven pointing algorithms minimize setup time and human error.",
      details: [
        "One-person operation with intuitive touchscreen interface",
        "Self-diagnostic tools for instant health checks",
        "Remote monitoring via secure web portal",
      ],
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Reliable Operations",
      description:
        "Enterprise-grade encryption and cybersecurity features protect sensitive data transmissions. Redundant systems and failover mechanisms ensure uninterrupted service in contested environments.",
      details: [
        "AES-256 encryption for all data links",
        "Anti-jam and anti-spoofing capabilities",
        "Compliance with CCSDS standards",
      ],
    },
  ];

  const applications: Application[] = [
    {
      title: "Expeditionary & Remote Missions",
      description:
        "Empower field operations in austere locations, from Arctic research bases to disaster response zones, with reliable satellite connectivity for real-time data relay and command/control.",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    },
    {
      title: "Temporary & Transitional Sites",
      description:
        "Bridge connectivity gaps during infrastructure builds, site relocations, or event coverage, providing plug-and-play satellite access without permanent installations.",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    },
    {
      title: "Global Collaborative Deployments",
      description:
        "Facilitate international partnerships and joint ventures with rapid, standardized setups that integrate seamlessly into multinational satellite networks.",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    },
    {
      title: "Defense & Tactical Operations",
      description:
        "Support secure, mobile C4ISR (Command, Control, Communications, Computers, Intelligence, Surveillance, Reconnaissance) in dynamic battlefield scenarios.",
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7e87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    },
  ];

  const howItWorksSteps: HowItWorksStep[] = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "Transport & Unload",
      description:
        "Ship via standard logistics to site. Use forklift or crane to position container. No special equipment required.",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Power Up & Configure",
      description:
        "Connect to local power source. Launch the setup wizard on the integrated control panel for initial network configuration.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Auto-Align Antenna",
      description:
        "GPS and compass auto-locate satellites. AI algorithms fine-tune pointing for optimal signal lock-in under 30 minutes.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Acquire & Transmit",
      description:
        "Begin data acquisition, tracking, and transmission. Monitor performance in real-time via dashboard or remote app.",
    },
  ];

  const downloadSpecs = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const rowHeight = 7;
    const startY = 50;

    // Light background
    doc.setFillColor(248, 250, 252);
    doc.rect(0, 0, pageWidth, pageHeight, "F");

    // Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(8, 145, 178);
    doc.text("Transportable Ground Station Specifications", pageWidth / 2, 25, {
      align: "center",
    });
    doc.setDrawColor(8, 145, 178);
    doc.setLineWidth(1.5);
    doc.line(margin, 32, pageWidth - margin, 32);

    // Headers
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0);
    doc.setFillColor(8, 145, 178);
    doc.rect(margin, startY - 6, pageWidth - 2 * margin, rowHeight + 4, "F");
    doc.setTextColor(255, 255, 255);
    doc.text("Specification", margin + 10, startY - 1);
    doc.text("Details", margin + 100, startY - 1);

    // Vertical line
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.5);
    doc.line(margin + 95, startY - 6, margin + 95, startY + rowHeight + 4);

    // Horizontal under headers
    doc.line(margin, startY + 2, pageWidth - margin, startY + 2);

    // Data rows
    doc.setFont("helvetica", "normal");
    doc.setTextColor(0, 0, 0);
    let y = startY + rowHeight + 8;
    specifications.forEach((spec, index) => {
      const rowColor = index % 2 === 0 ? [255, 255, 255] : [243, 244, 246];
      doc.setFillColor(...rowColor);
      doc.rect(margin, y - 6, pageWidth - 2 * margin, rowHeight + 4, "F");

      doc.text(spec.label, margin + 10, y);
      doc.setFont("helvetica", "bold");
      doc.text(spec.value, margin + 100, y);
      doc.setFont("helvetica", "normal");

      doc.line(margin, y + 1, pageWidth - margin, y + 1);
      y += rowHeight + 6;
      if (y > pageHeight - 30) {
        doc.addPage();
        y = 30;
      }
    });

    // Footer
    doc.setFont("helvetica", "italic");
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    doc.text(
      "Generated on October 21, 2025 | Confidential - For Internal Use",
      pageWidth / 2,
      pageHeight - 10,
      {
        align: "center",
      }
    );

    doc.save("transportable_ground_station_specifications.pdf");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Transportable Ground Station in rugged terrain"
          className="absolute inset-0 w-full h-full object-cover z-0"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-slate-900/40 to-slate-900/80 z-10"></div>
        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
            Transportable <span className="text-cyan-400">Ground Station</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Engineered for mobility and mission readiness, our containerized
            satellite ground station delivers high-performance connectivity
            anywhere on Earth. Seamlessly transport, deploy, and operate with
            unmatched speed and reliability for defense, research, and
            commercial applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
              aria-label="Request a quote for the Transportable Ground Station"
            >
              Request Quote <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={downloadSpecs}
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 hover:shadow-lg"
              aria-label="Download specifications PDF"
            >
              <Download className="w-5 h-5" /> Download Specs
            </button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See It in Action
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn how to build and operate a transportable satellite ground
              station in this comprehensive tutorial from SatNOGS. Discover the
              step-by-step process for assembly, antenna alignment, software
              configuration, and real-time data reception – empowering you to
              establish reliable satellite links in remote locations.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/25 border border-cyan-500/20">
            <div className="relative aspect-video bg-slate-800">
              {!isVideoPlaying ? (
                <>
                  <img
                    src="https://images.unsplash.com/photo-1558618047-3c8c76ca7e87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                    alt="Transportable satellite ground station assembly and operation demo thumbnail"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <button
                    onClick={() => setIsVideoPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/70 transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-cyan-500"
                    aria-label="Play video demo"
                  >
                    <div className="bg-cyan-500 rounded-full p-6 transform group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                  </button>
                </>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/edNfD_YXZps?autoplay=1"
                  className="w-full h-full"
                  title="SatNOGS: Build Your Own Transportable Satellite Ground Station – Comprehensive Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {(
              ["overview", "how-it-works", "specs", "applications"] as const
            ).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 capitalize text-sm md:text-base ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50"
                    : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700 hover:border-cyan-500/50"
                }`}
                aria-label={`Switch to ${tab} tab`}
              >
                {tab
                  .replace("-", " ")
                  .replace(/\b\w/g, (l: string) => l.toUpperCase())}
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <article
                  key={feature.title}
                  className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
                  role="article"
                  aria-labelledby={`feature-title-${index}`}
                >
                  <img
                    src={heroImage}
                    alt={`${feature.title} illustration`}
                    className="w-full h-40 object-cover rounded-xl mb-4"
                    loading="lazy"
                  />
                  <div className="bg-cyan-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4 text-cyan-400 border border-cyan-500/20">
                    {feature.icon}
                  </div>
                  <h3
                    id={`feature-title-${index}`}
                    className="text-xl font-bold text-white mb-3"
                  >
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  {feature.details && (
                    <ul className="space-y-1 text-sm text-gray-400">
                      {feature.details.map((detail, dIndex) => (
                        <li key={dIndex} className="flex items-center gap-2">
                          <Zap className="w-3 h-3 text-cyan-400" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          )}

          {/* How It Works Tab */}
          {activeTab === "how-it-works" && (
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl font-bold text-center mb-8">
                How the Transportable Ground Station Works
              </h2>
              <p className="text-center text-gray-300 text-lg max-w-3xl mx-auto mb-12">
                Our system combines cutting-edge hardware and software for
                effortless deployment. From transport to full operation,
                experience end-to-end efficiency designed for high-stakes
                environments.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {howItWorksSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="flex flex-col items-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 text-center space-y-4"
                  >
                    <div className="bg-cyan-500/10 w-20 h-20 rounded-xl flex items-center justify-center text-cyan-400 border border-cyan-500/20">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                    <div className="w-full h-0.5 bg-slate-700/50" />
                    {index < howItWorksSteps.length - 1 && (
                      <div className="absolute inset-x-0 bottom-0 mx-auto w-16 h-16 bg-white/10 rounded-full flex items-center justify-center -translate-y-8">
                        <ChevronRight className="w-6 h-6 text-gray-500 rotate-90" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Specifications Tab */}
          {activeTab === "specs" && (
            <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Technical Specifications
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-4 border-b border-slate-700/50 last:border-b-0 hover:bg-slate-700/20 transition-colors duration-200"
                  >
                    <span
                      className="text-gray-400 font-medium"
                      aria-label={spec.label}
                    >
                      {spec.label}
                    </span>
                    <span className="text-white font-bold text-right">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Applications Tab */}
          {activeTab === "applications" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applications.map((app, index) => (
                <article
                  key={index}
                  className="bg-slate-800/30 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
                  role="article"
                  aria-labelledby={`app-title-${index}`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={app.image}
                      alt={`${app.title} application example`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3
                      id={`app-title-${index}`}
                      className="text-xl font-bold text-white mb-3"
                    >
                      {app.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {app.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-4 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Transportable Ground Station{" "}
            <span className="text-cyan-400">Gallery</span>
          </h2>
          <p className="text-center text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            Explore real-world deployments and detailed views of our rugged,
            containerized satellite solution in action.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7e87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                alt: "Containerized satellite antenna deployed in remote field",
              },
              {
                src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                alt: "High-gain parabolic dish in transportable setup",
              },
              {
                src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                alt: "Global shipping of transportable ground station via container",
              },
            ].map((img, index) => (
              <div
                key={index}
                className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer"
                role="img"
                aria-label={img.alt}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                  <p className="text-white font-semibold">
                    {img.alt.split(" ")[0].toUpperCase()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-cyan-500/10 to-blue-600/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
            Transport Your Network Forward
          </h2>
          <p className="text-xl text-gray-300">
            Unlock global connectivity with our battle-tested transportable
            ground stations. Engineered for speed, security, and scalability.
          </p>
          <button
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            aria-label="Schedule a consultation"
          >
            Schedule Consultation
          </button>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default TransportableGroundStation;
