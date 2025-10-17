import {
  Award,
  Globe2,
  Sparkles,
  Zap,
  Wrench,
  Settings,
  Cpu,
  Satellite,
  Radio,
  CircuitBoard,
} from "lucide-react";
import React, { useState } from "react";
import DataVisualization3D from "./DataVisualization3D";
import SatelliteNetwork3D from "./SatelliteNetwork3D";

interface DiagramCardProps {
  title: string;
  children: React.ReactNode;
  color?: string;
}

const DiagramCard: React.FC<DiagramCardProps> = ({
  title,
  children,
  color = "cyan",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl border border-${color}-500/20 hover:border-${color}-500/60 transition-all hover:transform hover:scale-105 cursor-pointer`}
    >
      <div className="bg-slate-900/80 rounded-lg p-6 mb-4 h-48 flex items-center justify-center overflow-hidden">
        <div
          className={`transform transition-transform duration-300 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        >
          {children}
        </div>
      </div>
      <p className="text-gray-300 text-center font-medium">{title}</p>
    </div>
  );
};

const SatelliteDesignDiagram = () => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <defs>
      <linearGradient id="satGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#06b6d4", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#3b82f6", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    {/* Satellite body */}
    <rect x="80" y="50" width="40" height="50" fill="url(#satGrad)" rx="2" />
    {/* Solar panels */}
    <rect x="30" y="60" width="45" height="30" fill="#22d3ee" opacity="0.7" />
    <rect x="125" y="60" width="45" height="30" fill="#22d3ee" opacity="0.7" />
    {/* Panel lines */}
    <line x1="52" y1="60" x2="52" y2="90" stroke="#0e7490" strokeWidth="1" />
    <line x1="147" y1="60" x2="147" y2="90" stroke="#0e7490" strokeWidth="1" />
    {/* Antenna */}
    <line x1="100" y1="50" x2="100" y2="30" stroke="#06b6d4" strokeWidth="2" />
    <circle cx="100" cy="30" r="4" fill="#22d3ee" />
    {/* Communication waves */}
    <path
      d="M 100 30 Q 85 20, 75 15"
      stroke="#22d3ee"
      strokeWidth="1"
      fill="none"
      opacity="0.5"
    />
    <path
      d="M 100 30 Q 115 20, 125 15"
      stroke="#22d3ee"
      strokeWidth="1"
      fill="none"
      opacity="0.5"
    />
    {/* Labels */}
    <text x="100" y="120" fill="#94a3b8" fontSize="10" textAnchor="middle">
      CAD Design
    </text>
    <text x="100" y="135" fill="#64748b" fontSize="8" textAnchor="middle">
      3D Modeling Phase
    </text>
  </svg>
);

const ComponentAssemblyDiagram = () => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <defs>
      <linearGradient id="compGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: "#06b6d4", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#8b5cf6", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    {/* Assembly stages */}
    <rect
      x="20"
      y="40"
      width="35"
      height="35"
      fill="#1e293b"
      stroke="#06b6d4"
      strokeWidth="2"
      rx="2"
    />
    <rect
      x="82"
      y="40"
      width="35"
      height="35"
      fill="#1e293b"
      stroke="#06b6d4"
      strokeWidth="2"
      rx="2"
    />
    <rect
      x="145"
      y="40"
      width="35"
      height="35"
      fill="#1e293b"
      stroke="#06b6d4"
      strokeWidth="2"
      rx="2"
    />
    {/* Components inside */}
    <circle cx="37" cy="57" r="8" fill="url(#compGrad)" />
    <rect x="92" y="49" width="15" height="15" fill="url(#compGrad)" />
    <circle cx="162" cy="52" r="5" fill="#22d3ee" />
    <circle cx="162" cy="63" r="5" fill="#22d3ee" />
    {/* Arrows */}
    <path
      d="M 57 57 L 77 57"
      stroke="#22d3ee"
      strokeWidth="2"
      markerEnd="url(#arrowhead)"
    />
    <path
      d="M 119 57 L 140 57"
      stroke="#22d3ee"
      strokeWidth="2"
      markerEnd="url(#arrowhead)"
    />
    <defs>
      <marker
        id="arrowhead"
        markerWidth="10"
        markerHeight="10"
        refX="8"
        refY="3"
        orient="auto"
      >
        <polygon points="0 0, 10 3, 0 6" fill="#22d3ee" />
      </marker>
    </defs>
    {/* Labels */}
    <text x="37" y="95" fill="#94a3b8" fontSize="8" textAnchor="middle">
      Parts
    </text>
    <text x="99" y="95" fill="#94a3b8" fontSize="8" textAnchor="middle">
      Assembly
    </text>
    <text x="162" y="95" fill="#94a3b8" fontSize="8" textAnchor="middle">
      Testing
    </text>
    <text x="100" y="125" fill="#94a3b8" fontSize="10" textAnchor="middle">
      Component Assembly
    </text>
    <text x="100" y="138" fill="#64748b" fontSize="8" textAnchor="middle">
      Automated Integration
    </text>
  </svg>
);

const CleanroomDiagram = () => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <defs>
      <linearGradient id="cleanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#22d3ee", stopOpacity: 0.3 }} />
        <stop
          offset="100%"
          style={{ stopColor: "#06b6d4", stopOpacity: 0.1 }}
        />
      </linearGradient>
    </defs>
    {/* Cleanroom chamber */}
    <rect
      x="30"
      y="30"
      width="140"
      height="80"
      fill="url(#cleanGrad)"
      stroke="#06b6d4"
      strokeWidth="2"
      rx="4"
    />
    {/* Air flow lines */}
    <path
      d="M 40 20 L 40 30"
      stroke="#22d3ee"
      strokeWidth="1.5"
      strokeDasharray="3,3"
      opacity="0.7"
    />
    <path
      d="M 70 20 L 70 30"
      stroke="#22d3ee"
      strokeWidth="1.5"
      strokeDasharray="3,3"
      opacity="0.7"
    />
    <path
      d="M 100 20 L 100 30"
      stroke="#22d3ee"
      strokeWidth="1.5"
      strokeDasharray="3,3"
      opacity="0.7"
    />
    <path
      d="M 130 20 L 130 30"
      stroke="#22d3ee"
      strokeWidth="1.5"
      strokeDasharray="3,3"
      opacity="0.7"
    />
    <path
      d="M 160 20 L 160 30"
      stroke="#22d3ee"
      strokeWidth="1.5"
      strokeDasharray="3,3"
      opacity="0.7"
    />
    {/* Workstation */}
    <rect
      x="70"
      y="60"
      width="60"
      height="35"
      fill="#1e293b"
      stroke="#06b6d4"
      strokeWidth="1.5"
    />
    {/* Component being assembled */}
    <circle cx="100" cy="77" r="12" fill="#06b6d4" opacity="0.5" />
    <rect x="95" y="72" width="10" height="10" fill="#22d3ee" />
    {/* Labels */}
    <text x="100" y="125" fill="#94a3b8" fontSize="10" textAnchor="middle">
      Cleanroom Integration
    </text>
    <text x="100" y="138" fill="#64748b" fontSize="8" textAnchor="middle">
      ISO Class 5 Environment
    </text>
  </svg>
);

const GroundStationDiagram = () => (
  <svg viewBox="0 0 200 150" className="w-full h-full">
    <defs>
      <linearGradient id="dishGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#06b6d4", stopOpacity: 0.8 }} />
        <stop
          offset="100%"
          style={{ stopColor: "#3b82f6", stopOpacity: 0.8 }}
        />
      </linearGradient>
      <radialGradient id="signalGrad">
        <stop offset="0%" style={{ stopColor: "#22d3ee", stopOpacity: 0.8 }} />
        <stop offset="100%" style={{ stopColor: "#22d3ee", stopOpacity: 0 }} />
      </radialGradient>
    </defs>
    {/* Ground */}
    <line x1="20" y1="110" x2="180" y2="110" stroke="#334155" strokeWidth="2" />
    {/* Antenna dish */}
    <ellipse cx="100" cy="70" rx="40" ry="25" fill="url(#dishGrad)" />
    <ellipse cx="100" cy="70" rx="30" ry="18" fill="#0e7490" />
    {/* Support structure */}
    <rect x="95" y="95" width="10" height="15" fill="#475569" />
    <path
      d="M 85 95 L 100 70 L 115 95"
      stroke="#475569"
      strokeWidth="3"
      fill="none"
    />
    {/* Signal waves */}
    <path
      d="M 100 50 Q 80 30, 70 20"
      stroke="#22d3ee"
      strokeWidth="2"
      fill="none"
      opacity="0.6"
      strokeDasharray="5,5"
    />
    <path
      d="M 100 50 Q 100 35, 100 20"
      stroke="#22d3ee"
      strokeWidth="2"
      fill="none"
      opacity="0.6"
      strokeDasharray="5,5"
    />
    <path
      d="M 100 50 Q 120 30, 130 20"
      stroke="#22d3ee"
      strokeWidth="2"
      fill="none"
      opacity="0.6"
      strokeDasharray="5,5"
    />
    {/* Satellite icon */}
    <rect x="95" y="15" width="10" height="8" fill="#06b6d4" />
    <rect x="88" y="17" width="5" height="4" fill="#22d3ee" opacity="0.7" />
    <rect x="107" y="17" width="5" height="4" fill="#22d3ee" opacity="0.7" />
    {/* Labels */}
    <text x="100" y="130" fill="#94a3b8" fontSize="10" textAnchor="middle">
      Ground Station
    </text>
    <text x="100" y="143" fill="#64748b" fontSize="8" textAnchor="middle">
      Multi-Band Antenna System
    </text>
  </svg>
);

const TechnologyPage = () => {
  // const [activeTab, setActiveTab] = useState("hardware");

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      <div className="max-w-[1500px] mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-6 py-2 mb-6">
            <Cpu className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold">
              Advanced Engineering
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-cyan-400">Technology</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Integrated hardware and software solutions powered by precision
            engineering, advanced manufacturing, and AI-driven geospatial
            intelligence
          </p>
        </div>

        {/* Technology Stack Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6 order-2 md:order-1">
            <h2 className="text-3xl font-bold text-white">
              Advanced Technology Stack
            </h2>
            <p className="text-gray-300 text-lg">
              Our ecosystem combines state-of-the-art hardware manufacturing
              with cutting-edge software to deliver end-to-end satellite and
              ground station solutions with unmatched reliability and
              performance.
            </p>
            {[
              {
                icon: <Wrench className="w-6 h-6 text-cyan-400" />,
                title: "Precision Hardware Manufacturing",
                description:
                  "Automated cleanroom assembly lines for satellites and ground stations with sub-micron tolerances and full traceability.",
              },
              {
                icon: <Sparkles className="w-6 h-6 text-cyan-400" />,
                title: "AI-Powered Analytics",
                description:
                  "Deep learning models integrated with hardware telemetry for automated anomaly detection and predictive maintenance.",
              },
              {
                icon: <CircuitBoard className="w-6 h-6 text-cyan-400" />,
                title: "Modular System Integration",
                description:
                  "Seamless hardware-software fusion enabling scalable constellations and global ground networks with real-time data flow.",
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border-l-4 border-cyan-500 hover:bg-slate-800/70 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">{tech.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {tech.title}
                    </h3>
                    <p className="text-gray-300">{tech.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-cyan-500/20 bg-slate-800/30 order-1 md:order-2 flex items-center justify-center">
            <div className="w-full h-full">
              <DataVisualization3D />
            </div>
          </div>
        </div>

        {/* Technology Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Technology Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Wrench className="w-12 h-12 text-cyan-400" />,
                title: "Precision Assembly",
                description:
                  "Robotic manufacturing for satellites and ground stations with 99.99% defect-free assembly rates.",
              },
              {
                icon: <Settings className="w-12 h-12 text-cyan-400" />,
                title: "Modular Ground Stations",
                description:
                  "Plug-and-play antenna systems deployable in hours, supporting multi-band operations worldwide.",
              },
              {
                icon: <Zap className="w-12 h-12 text-cyan-400" />,
                title: "High-Speed Data Relay",
                description:
                  "Hardware-optimized RF systems delivering Gbps throughput with minimal latency for real-time applications.",
              },
              {
                icon: <Sparkles className="w-12 h-12 text-cyan-400" />,
                title: "AI-Driven Optimization",
                description:
                  "Machine learning algorithms for orbital path planning and ground station resource allocation.",
              },
              {
                icon: <Globe2 className="w-12 h-12 text-cyan-400" />,
                title: "Global Constellation Support",
                description:
                  "End-to-end design for LEO/MEO networks with inter-satellite laser communications.",
              },
              {
                icon: <Award className="w-12 h-12 text-cyan-400" />,
                title: "Certified Reliability",
                description:
                  "MIL-STD compliant hardware and ISO-certified processes ensuring mission-critical performance.",
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

        {/* Manufacturing Process Diagrams */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Hardware Manufacturing Process
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Visual overview of our precision manufacturing processes for
            satellites and ground stations
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <DiagramCard title="Satellite Design Phase">
              <SatelliteDesignDiagram />
            </DiagramCard>
            <DiagramCard title="Component Assembly">
              <ComponentAssemblyDiagram />
            </DiagramCard>
            <DiagramCard title="Cleanroom Integration">
              <CleanroomDiagram />
            </DiagramCard>
            <DiagramCard title="Ground Station Deployment">
              <GroundStationDiagram />
            </DiagramCard>
          </div>
        </div>

        {/* Innovation Pipeline */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Innovation Pipeline
            </h2>
            <p className="text-gray-300 mb-6">
              Cutting-edge projects pushing the boundaries of satellite and
              ground station technology
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Autonomous Satellite Assembly",
                  status: "In Development",
                  progress: 65,
                  icon: <Satellite className="w-5 h-5" />,
                },
                {
                  title: "Phased Array Ground Antennas",
                  status: "Beta Testing",
                  progress: 85,
                  icon: <Radio className="w-5 h-5" />,
                },
                {
                  title: "Quantum-Enhanced RF Systems",
                  status: "Research Phase",
                  progress: 40,
                  icon: <Zap className="w-5 h-5" />,
                },
                {
                  title: "Integrated Constellation Software",
                  status: "Coming Soon",
                  progress: 90,
                  icon: <Globe2 className="w-5 h-5" />,
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="text-cyan-400">{project.icon}</div>
                      <span className="text-white font-semibold">
                        {project.title}
                      </span>
                    </div>
                    <span className="text-cyan-400 text-sm font-medium px-3 py-1 bg-cyan-500/10 rounded-full">
                      {project.status}
                    </span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                      style={{ width: `${project.progress}%` }}
                    >
                      <span className="text-white text-xs font-bold">
                        {project.progress}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="h-96 rounded-2xl overflow-hidden border border-cyan-500/20 bg-slate-800/30 flex items-center justify-center">
            <div className="w-full h-full">
              <SatelliteNetwork3D />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyPage;

// import { Award, Globe2, Sparkles, Zap, Wrench, Settings } from "lucide-react";
// import DataVisualization3D from "./DataVisualization3D";
// import SatelliteNetwork3D from "./SatelliteNetwork3D";
// import LoadingScreen from "./LoadingScreen";
// import { useEffect, useState } from "react";

// const TechnologyPage = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return <LoadingScreen />;
//   }
//   return (
//     <div className="min-h-screen bg-slate-900 pt-20">
//       <div className="max-w-[1500px] mx-auto px-4 py-20">
//         <div className="text-center mb-16">
//           <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
//             Our <span className="text-cyan-400">Technology</span>
//           </h1>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//             Integrated hardware and software solutions powered by precision
//             engineering, advanced manufacturing, and AI-driven geospatial
//             intelligence
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 mb-20">
//           <div className="h-[650px] rounded-2xl overflow-hidden shadow-2xl w-full border border-cyan-500/20">
//             <DataVisualization3D />
//           </div>
//           <div className="space-y-6">
//             <h2 className="text-3xl font-bold text-white">
//               Advanced Technology Stack
//             </h2>
//             <p className="text-gray-300 text-lg">
//               Our ecosystem combines state-of-the-art hardware manufacturing
//               with cutting-edge software to deliver end-to-end satellite and
//               ground station solutions with unmatched reliability and
//               performance.
//             </p>
//             {[
//               {
//                 title: "Precision Hardware Manufacturing",
//                 description:
//                   "Automated cleanroom assembly lines for satellites and ground stations with sub-micron tolerances and full traceability.",
//               },
//               {
//                 title: "AI-Powered Analytics",
//                 description:
//                   "Deep learning models integrated with hardware telemetry for automated anomaly detection and predictive maintenance.",
//               },
//               {
//                 title: "Modular System Integration",
//                 description:
//                   "Seamless hardware-software fusion enabling scalable constellations and global ground networks with real-time data flow.",
//               },
//             ].map((tech, index) => (
//               <div
//                 key={index}
//                 className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border-l-4 border-cyan-500"
//               >
//                 <h3 className="text-xl font-bold text-white mb-2">
//                   {tech.title}
//                 </h3>
//                 <p className="text-gray-300">{tech.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mb-20">
//           <h2 className="text-3xl font-bold text-white text-center mb-12">
//             Technology Features
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: <Wrench className="w-12 h-12 text-cyan-400" />,
//                 title: "Precision Assembly",
//                 description:
//                   "Robotic manufacturing for satellites and ground stations with 99.99% defect-free assembly rates.",
//               },
//               {
//                 icon: <Settings className="w-12 h-12 text-cyan-400" />,
//                 title: "Modular Ground Stations",
//                 description:
//                   "Plug-and-play antenna systems deployable in hours, supporting multi-band operations worldwide.",
//               },
//               {
//                 icon: <Zap className="w-12 h-12 text-cyan-400" />,
//                 title: "High-Speed Data Relay",
//                 description:
//                   "Hardware-optimized RF systems delivering Gbps throughput with minimal latency for real-time applications.",
//               },
//               {
//                 icon: <Sparkles className="w-12 h-12 text-cyan-400" />,
//                 title: "AI-Driven Optimization",
//                 description:
//                   "Machine learning algorithms for orbital path planning and ground station resource allocation.",
//               },
//               {
//                 icon: <Globe2 className="w-12 h-12 text-cyan-400" />,
//                 title: "Global Constellation Support",
//                 description:
//                   "End-to-end design for LEO/MEO networks with inter-satellite laser communications.",
//               },
//               {
//                 icon: <Award className="w-12 h-12 text-cyan-400" />,
//                 title: "Certified Reliability",
//                 description:
//                   "MIL-STD compliant hardware and ISO-certified processes ensuring mission-critical performance.",
//               },
//             ].map((feature, index) => (
//               <div
//                 key={index}
//                 className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-500/60 transition-all hover:transform hover:scale-105"
//               >
//                 <div className="mb-4">{feature.icon}</div>
//                 <h3 className="text-xl font-bold text-white mb-3">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-300">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mb-20">
//           <h2 className="text-3xl font-bold text-white text-center mb-12">
//             Hardware Manufacturing Diagrams
//           </h2>
//           <p className="text-xl text-gray-300 text-center mb-8 max-w-3xl mx-auto">
//             Visual overview of our precision manufacturing processes for
//             satellites and ground stations.
//           </p>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 src: "https://via.placeholder.com/400x300/0F172B/FFFFFF?text=Satellite+Design+Phase",
//                 alt: "Satellite Design Phase Diagram",
//               },
//               {
//                 src: "https://via.placeholder.com/400x300/0F172B/FFFFFF?text=Component+Assembly",
//                 alt: "Component Assembly Diagram",
//               },
//               {
//                 src: "https://via.placeholder.com/400x300/0F172B/FFFFFF?text=Cleanroom+Integration",
//                 alt: "Cleanroom Integration Diagram",
//               },
//               {
//                 src: "https://via.placeholder.com/400x300/0F172B/FFFFFF?text=Ground+Station+Deployment",
//                 alt: "Ground Station Deployment Diagram",
//               },
//             ].map((diagram, index) => (
//               <div
//                 key={index}
//                 className="group bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl border border-cyan-500/20 hover:border-cyan-500/60 transition-all hover:transform hover:scale-105"
//               >
//                 <img
//                   src={diagram.src}
//                   alt={diagram.alt}
//                   className="w-full h-48 object-cover rounded-lg mb-4 group-hover:opacity-80 transition-opacity"
//                 />
//                 <p className="text-gray-300 text-center font-medium">
//                   {diagram.alt}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-3xl font-bold text-white mb-6">
//               Innovation Pipeline
//             </h2>
//             <div className="space-y-4">
//               {[
//                 {
//                   title: "Autonomous Satellite Assembly",
//                   status: "In Development",
//                   progress: 65,
//                 },
//                 {
//                   title: "Phased Array Ground Antennas",
//                   status: "Beta Testing",
//                   progress: 85,
//                 },
//                 {
//                   title: "Quantum-Enhanced RF Systems",
//                   status: "Research Phase",
//                   progress: 40,
//                 },
//                 {
//                   title: "Integrated Constellation Software",
//                   status: "Coming Soon",
//                   progress: 90,
//                 },
//               ].map((project, index) => (
//                 <div key={index} className="bg-slate-800/50 p-4 rounded-lg">
//                   <div className="flex justify-between mb-2">
//                     <span className="text-white font-semibold">
//                       {project.title}
//                     </span>
//                     <span className="text-cyan-400 text-sm">
//                       {project.status}
//                     </span>
//                   </div>
//                   <div className="w-full bg-slate-700 rounded-full h-2">
//                     <div
//                       className="bg-cyan-500 h-2 rounded-full transition-all duration-500"
//                       style={{ width: `${project.progress}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="h-96 rounded-2xl overflow-hidden">
//             <SatelliteNetwork3D />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TechnologyPage;
