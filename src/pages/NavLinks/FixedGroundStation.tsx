// import { useState, type JSX } from "react";
// import {
//   Radio,
//   Signal,
//   Database,
//   Lock,
//   Download,
//   ChevronRight,
//   Play,
//   Satellite,
//   Wifi,
//   CloudSnow,
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

// interface Capability {
//   title: string;
//   description: string;
//   image: string;
// }

// const FixedGroundStationPage = () => {
//   const [activeTab, setActiveTab] = useState<
//     "overview" | "specs" | "capabilities"
//   >("overview");
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);

//   const specifications: Specification[] = [
//     { label: "Antenna Size", value: "7.3m - 13m" },
//     { label: "Frequency Bands", value: "S, X, Ka, Ku" },
//     { label: "Data Rate", value: "Up to 10 Gbps" },
//     { label: "Tracking Accuracy", value: "±0.01°" },
//     { label: "Operating Temp", value: "-40°C to +55°C" },
//     { label: "Uptime", value: "99.9% SLA" },
//     { label: "Power Output", value: "100W - 2000W" },
//     { label: "Setup Time", value: "3-6 months" },
//   ];

//   const features: Feature[] = [
//     {
//       icon: <Signal className="w-6 h-6" />,
//       title: "High Throughput",
//       description:
//         "Maximum data transfer rates with advanced signal processing and multi-band support for mission-critical operations.",
//     },
//     {
//       icon: <Database className="w-6 h-6" />,
//       title: "24/7 Operations",
//       description:
//         "Round-the-clock monitoring and control with redundant systems ensuring continuous satellite communications.",
//     },
//     {
//       icon: <Lock className="w-6 h-6" />,
//       title: "Secure Infrastructure",
//       description:
//         "Military-grade encryption and physical security measures protecting your data and communications.",
//     },
//     {
//       icon: <Radio className="w-6 h-6" />,
//       title: "Multi-Mission Support",
//       description:
//         "Versatile architecture supporting various satellite types, orbits, and mission profiles simultaneously.",
//     },
//   ];

//   const capabilities: Capability[] = [
//     {
//       title: "Satellite Telemetry & Control",
//       description:
//         "Real-time command and control operations with comprehensive telemetry monitoring and analysis.",
//       image:
//         "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
//     },
//     {
//       title: "Data Reception & Processing",
//       description:
//         "High-speed data downlink with advanced processing capabilities and automated quality checks.",
//       image:
//         "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
//     },
//     {
//       title: "Multi-Satellite Tracking",
//       description:
//         "Simultaneous tracking and communication with multiple satellites across different orbital regimes.",
//       image:
//         "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&h=600&fit=crop",
//     },
//   ];

//   const downloadSpecs = () => {
//     const specsText = specifications
//       .map((spec) => `${spec.label}: ${spec.value}`)
//       .join("\n");
//     const blob = new Blob(
//       [
//         `Fixed Ground Station Specifications\n\n${specsText}\n\nGenerated on October 21, 2025`,
//       ],
//       { type: "text/plain" }
//     );
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "fixed_ground_station_specifications.txt";
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-900">
//       {/* Hero Section */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900 z-10"></div>
//         <img
//           src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop"
//           alt="Fixed Ground Station"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
//           <div className="flex justify-center mb-6">
//             <Satellite className="w-16 h-16 text-green-400 animate-pulse" />
//           </div>
//           <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
//             Fixed <span className="text-green-400">Ground Station</span>
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
//             Permanent infrastructure delivering unmatched reliability and
//             performance for critical satellite operations
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-green-500 cursor-pointer hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
//               Request Quote <ChevronRight className="w-5 h-5" />
//             </button>
//             <button
//               onClick={downloadSpecs}
//               className="cursor-pointer border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
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
//             See Our <span className="text-green-400">Technology</span> in Action
//           </h2>
//           <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-green-500/20">
//             <div className="relative aspect-video bg-slate-800">
//               {!isVideoPlaying ? (
//                 <>
//                   <img
//                     src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop"
//                     alt="Ground Station Operations"
//                     className="w-full h-full object-cover"
//                   />
//                   <button
//                     onClick={() => setIsVideoPlaying(true)}
//                     className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-all duration-300 group"
//                   >
//                     <div className="bg-green-500 rounded-full p-6 transform group-hover:scale-110 transition-transform duration-300">
//                       <Play className="w-12 h-12 text-white" fill="white" />
//                     </div>
//                   </button>
//                 </>
//               ) : (
//                 <iframe
//                   src="https://www.youtube.com/embed/ThFrAJtp2Ek"
//                   className="w-full h-full"
//                   title="Ground Station Operations"
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
//                 icon: <Wifi className="w-8 h-8" />,
//                 value: "99.9%",
//                 label: "Uptime SLA",
//               },
//               {
//                 icon: <Signal className="w-8 h-8" />,
//                 value: "10 Gbps",
//                 label: "Max Data Rate",
//               },
//               {
//                 icon: <CloudSnow className="w-8 h-8" />,
//                 value: "-40°C",
//                 label: "Min Temp",
//               },
//               {
//                 icon: <Radio className="w-8 h-8" />,
//                 value: "24/7",
//                 label: "Operations",
//               },
//             ].map((stat, index) => (
//               <div
//                 key={index}
//                 className="text-center p-6 bg-slate-900/50 rounded-xl border border-green-500/20 hover:border-green-500 transition-all duration-300"
//               >
//                 <div className="flex justify-center mb-4 text-green-400">
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
//             {(["overview", "specs", "capabilities"] as const).map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 capitalize ${
//                   activeTab === tab
//                     ? "bg-green-500 text-white shadow-lg shadow-green-500/50"
//                     : "bg-slate-800 text-gray-300 hover:bg-slate-700"
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>

//           {/* Overview Tab */}
//           {activeTab === "overview" && (
//             <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
//               {features.map((feature, index) => (
//                 <div
//                   key={index}
//                   className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105"
//                 >
//                   <div className="bg-green-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 text-green-400">
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

//           {/* Capabilities Tab */}
//           {activeTab === "capabilities" && (
//             <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
//               {capabilities.map((capability, index) => (
//                 <div
//                   key={index}
//                   className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105"
//                 >
//                   <div className="relative h-48 overflow-hidden">
//                     <img
//                       src={capability.image}
//                       alt={capability.title}
//                       className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
//                     />
//                   </div>
//                   <div className="p-6">
//                     <h3 className="text-xl font-bold text-white mb-3">
//                       {capability.title}
//                     </h3>
//                     <p className="text-gray-400">{capability.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Image Gallery */}
//       <section className="py-20 px-4 bg-slate-800/30">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-bold text-white text-center mb-12">
//             Installation <span className="text-green-400">Gallery</span>
//           </h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {[
//               "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&h=600&fit=crop",
//               "https://images.unsplash.com/photo-1581822261290-991b38693d1b?w=800&h=600&fit=crop",
//               "https://images.unsplash.com/photo-1558470598-a5dda9640f68?w=800&h=600&fit=crop",
//             ].map((img, index) => (
//               <div
//                 key={index}
//                 className="relative h-64 rounded-xl overflow-hidden group"
//               >
//                 <img
//                   src={img}
//                   alt={`Ground Station ${index + 1}`}
//                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-4">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl font-bold text-white mb-6">
//             Ready to Deploy Your Ground Station?
//           </h2>
//           <p className="text-xl text-gray-400 mb-8">
//             Contact our team to discuss your requirements and receive a
//             customized solution proposal
//           </p>
//           <button className="bg-green-500 hover:bg-green-600 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
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

// export default FixedGroundStationPage;

// Fixed Ground Station
// import { useState, type JSX } from "react";
// import {
//   CheckCircle,
//   Zap,
//   Shield,
//   Download,
//   ChevronRight,
//   Play,
// } from "lucide-react";
// import jsPDF from "jspdf";

// interface Specification {
//   label: string;
//   value: string;
// }

// interface Feature {
//   icon: JSX.Element;
//   title: string;
//   description: string;
// }

// interface Application {
//   title: string;
//   description: string;
//   image: string;
// }

// const FixedGroundStation = () => {
//   const [activeTab, setActiveTab] = useState<
//     "overview" | "specs" | "applications"
//   >("overview");
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);

//   const heroImage =
//     "https://images.pexels.com/photos/8346132/pexels-photo-8346132.jpeg?auto=compress&cs=tinysrgb&w=1920";

//   const specifications: Specification[] = [
//     { label: "Antenna Diameter", value: "4.5m parabolic" },
//     { label: "Frequency Bands", value: "S/X/Ka" },
//     { label: "G/T", value: ">40 dB/K" },
//     { label: "EIRP", value: ">60 dBW" },
//     { label: "Power Consumption", value: "<500W" },
//     { label: "Operating Temp", value: "-40°C to +55°C" },
//     { label: "Footprint", value: "10m x 10m" },
//     { label: "Weight", value: "2,500 kg" },
//   ];

//   const features: Feature[] = [
//     {
//       icon: <Shield className="w-6 h-6" />,
//       title: "Robust Durability",
//       description:
//         "Built to withstand extreme weather conditions, ensuring 99.9% uptime with redundant systems for continuous operation.",
//     },
//     {
//       icon: <Zap className="w-6 h-6" />,
//       title: "High-Speed Data",
//       description:
//         "Supports up to 10 Gbps downlink with S/X/Ka-band compatibility for seamless integration into your satellite constellation.",
//     },
//     {
//       icon: <CheckCircle className="w-6 h-6" />,
//       title: "Easy Integration",
//       description:
//         "Plug-and-play compatibility with standard ground segment software, reducing deployment time by up to 50%.",
//     },
//   ];

//   const applications: Application[] = [
//     {
//       title: "Permanent Telemetry",
//       description:
//         "Reliable command and control for long-term satellite operations in fixed locations.",
//       image:
//         "https://images.pexels.com/photos/8346132/pexels-photo-8346132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
//     },
//     {
//       title: "Data Processing Centers",
//       description:
//         "High-volume data reception and processing for earth observation missions.",
//       image:
//         "https://images.pexels.com/photos/1630365/pexels-photo-1630365.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
//     },
//     {
//       title: "Research Facilities",
//       description:
//         "Stable platform for scientific experiments requiring consistent satellite links.",
//       image:
//         "https://images.pexels.com/photos/9022678/pexels-photo-9022678.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
//     },
//   ];

//   const downloadSpecs = () => {
//     const doc = new jsPDF();
//     const pageWidth = doc.internal.pageSize.getWidth();
//     const pageHeight = doc.internal.pageSize.getHeight();
//     const margin = 20;
//     const rowHeight = 8;
//     const startY = 40;

//     // Set background color for the entire page (light gray)
//     doc.setFillColor(248, 250, 252);
//     doc.rect(0, 0, pageWidth, pageHeight, "F");

//     // Title styling
//     doc.setFont("helvetica", "bold");
//     doc.setFontSize(24);
//     doc.setTextColor(8, 145, 178); // Cyan color
//     doc.setDrawColor(8, 145, 178);
//     doc.text("Fixed Ground Station Specifications", pageWidth / 2, 25, {
//       align: "center",
//     });
//     doc.setLineWidth(1);
//     doc.line(margin, 30, pageWidth - margin, 30); // Underline title

//     // Headers
//     doc.setFontSize(12);
//     doc.setFont("helvetica", "bold");
//     doc.setTextColor(0, 0, 0); // Black
//     doc.setFillColor(8, 145, 178); // Cyan background for headers
//     doc.rect(
//       margin,
//       startY - 5,
//       (pageWidth - 2 * margin) / 2,
//       rowHeight + 2,
//       "F"
//     ); // Label header bg
//     doc.rect(
//       margin + (pageWidth - 2 * margin) / 2,
//       startY - 5,
//       (pageWidth - 2 * margin) / 2,
//       rowHeight + 2,
//       "F"
//     ); // Value header bg
//     doc.setTextColor(255, 255, 255); // White text on bg
//     doc.text("Label", margin + 10, startY);
//     doc.text("Value", pageWidth / 2 + 10, startY);
//     doc.setDrawColor(200, 200, 200);
//     doc.setLineWidth(0.5);
//     doc.line(margin, startY + 2, pageWidth - margin, startY + 2); // Line under headers

//     // Data rows
//     doc.setFont("helvetica", "normal");
//     doc.setTextColor(0, 0, 0);
//     let y = startY + rowHeight + 5;
//     specifications.forEach((spec, index) => {
//       // Alternating row colors
//       if (index % 2 === 0) {
//         doc.setFillColor(255, 255, 255); // White
//       } else {
//         doc.setFillColor(243, 244, 246); // Light gray
//       }
//       doc.rect(margin, y - 5, pageWidth - 2 * margin, rowHeight + 2, "F");

//       doc.setFont("helvetica", "normal");
//       doc.text(spec.label, margin + 10, y);
//       doc.setFont("helvetica", "bold");
//       doc.text(spec.value, pageWidth / 2 + 10, y);

//       // Row separator
//       doc.setDrawColor(200, 200, 200);
//       doc.line(margin, y + 3, pageWidth - margin, y + 3);

//       y += rowHeight + 5;
//     });

//     // Footer note
//     doc.setFont("helvetica", "italic");
//     doc.setFontSize(10);
//     doc.setTextColor(100, 100, 100);
//     doc.text("Generated on October 20, 2025", pageWidth / 2, pageHeight - 10, {
//       align: "center",
//     });

//     doc.save("fixed_ground_station_specifications.pdf");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
//       {/* Hero Section */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         <img
//           src={heroImage}
//           alt="Fixed Ground Station"
//           className="absolute inset-0 w-full h-full object-cover z-0"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-slate-900 z-10"></div>
//         <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
//           <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
//             Fixed <span className="text-cyan-400">Ground Station</span>
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
//             Reliable, high-throughput data reception for mission-critical
//             satellite operations with unmatched stability.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-cyan-500 cursor-pointer hover:bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
//               Request Quote <ChevronRight className="w-5 h-5" />
//             </button>
//             <button
//               onClick={downloadSpecs}
//               className="cursor-pointer border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
//             >
//               <Download className="w-5 h-5" /> Download Specs
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Video Section */}
//       <section className="py-20 px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20">
//             <div className="relative aspect-video bg-slate-800">
//               {!isVideoPlaying ? (
//                 <>
//                   <img
//                     src="https://images.pexels.com/photos/8346132/pexels-photo-8346132.jpeg?auto=compress&cs=tinysrgb&w=1920"
//                     alt="Fixed Ground Station assembly"
//                     className="w-full h-full object-cover"
//                   />
//                   <button
//                     onClick={() => setIsVideoPlaying(true)}
//                     className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-all duration-300 group"
//                   >
//                     <div className="bg-cyan-500 rounded-full p-6 transform group-hover:scale-110 transition-transform duration-300">
//                       <Play className="w-12 h-12 text-white" fill="white" />
//                     </div>
//                   </button>
//                 </>
//               ) : (
//                 <iframe
//                   src="https://www.youtube.com/embed/PPZtj5JrPNM"
//                   className="w-full h-full"
//                   title="Fixed Ground Station Demo"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Tabs Section */}
//       <section className="py-20 px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex justify-center gap-4 mb-12 flex-wrap">
//             {(["overview", "specs", "applications"] as const).map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 capitalize ${
//                   activeTab === tab
//                     ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/50"
//                     : "bg-slate-800 text-gray-300 hover:bg-slate-700"
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>

//           {/* Overview Tab */}
//           {activeTab === "overview" && (
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
//               {features.map((feature, index) => (
//                 <div
//                   key={index}
//                   className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
//                 >
//                   <img
//                     src="https://images.pexels.com/photos/8346132/pexels-photo-8346132.jpeg?auto=compress&cs=tinysrgb&w=500"
//                     alt={`${feature.title} Feature`}
//                     className="w-full h-32 object-cover rounded-lg mb-4"
//                   />
//                   <div className="bg-cyan-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 text-cyan-400">
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

//           {/* Applications Tab */}
//           {activeTab === "applications" && (
//             <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
//               {applications.map((app, index) => (
//                 <div
//                   key={index}
//                   className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
//                 >
//                   <div className="relative h-48 overflow-hidden">
//                     <img
//                       src={app.image}
//                       alt={app.title}
//                       className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
//                     />
//                   </div>
//                   <div className="p-6">
//                     <h3 className="text-xl font-bold text-white mb-3">
//                       {app.title}
//                     </h3>
//                     <p className="text-gray-400">{app.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Image Gallery */}
//       <section className="py-20 px-4 bg-slate-800/30">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-bold text-white text-center mb-12">
//             Fixed Ground Station <span className="text-cyan-400">Gallery</span>
//           </h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             <div className="relative h-64 rounded-xl overflow-hidden group">
//               <img
//                 src={heroImage}
//                 alt="Fixed Ground Station design"
//                 className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </div>
//             <div className="relative h-64 rounded-xl overflow-hidden group">
//               <img
//                 src="https://images.pexels.com/photos/9022678/pexels-photo-9022678.jpeg?auto=compress&cs=tinysrgb&w=800"
//                 alt="Fixed Ground Station testing"
//                 className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </div>
//             <div className="relative h-64 rounded-xl overflow-hidden group">
//               <img
//                 src="https://images.pexels.com/photos/1630365/pexels-photo-1630365.jpeg?auto=compress&cs=tinysrgb&w=800"
//                 alt="Fixed Ground Station deployment"
//                 className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-4">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl font-bold text-white mb-6">
//             Ready to Deploy Your Fixed Ground Station?
//           </h2>
//           <p className="text-xl text-gray-400 mb-8">
//             Contact our experts to discuss customization options and get a
//             tailored proposal.
//           </p>
//           <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
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

// export default FixedGroundStation;




import { useState, useEffect } from 'react';
import { Radio, CheckCircle, ArrowRight, Shield, Globe, Antenna, Server, Clock, Monitor, Database, Cloud, Wifi, Lock, TrendingUp, BarChart3, Settings, Users, FileText, ChevronRight, Play } from 'lucide-react';

const FixedGroundStation = () => {
  // const [activeTab, setActiveTab] = useState('overview');
  const [activeFeature, setActiveFeature] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [azimuth, setAzimuth] = useState(0);
  const [elevation, setElevation] = useState(45);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const capabilities = [
    {
      icon: <Antenna className="w-8 h-8" />,
      title: "Multi-Band Tracking",
      description: "Advanced multi-frequency support across S, X, Ku, and Ka-bands with seamless switching",
      details: [
        "Simultaneous multi-satellite tracking",
        "Auto-acquisition and tracking",
        "Precision pointing accuracy ±0.01°",
        "Weather compensation algorithms"
      ]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Redundant Infrastructure",
      description: "Enterprise-grade systems designed for 99.99% uptime with full redundancy",
      details: [
        "Dual-path RF signal processing",
        "Hot-swappable components",
        "Automatic failover systems",
        "24/7 remote monitoring"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Compliance",
      description: "Military-grade encryption and security protocols meeting international standards",
      details: [
        "AES-256 encryption",
        "Secure key management",
        "ITAR/EAR compliance ready",
        "ISO 27001 certified facilities"
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "High-Speed Processing",
      description: "Real-time data processing with ultra-low latency for mission-critical operations",
      details: [
        "Up to 10 Gbps data throughput",
        "Sub-100ms latency",
        "Real-time demodulation",
        "Adaptive coding and modulation"
      ]
    }
  ];

  const technicalSpecs = {
    antenna: [
      { label: "Diameter Options", value: "3.7m, 5.5m, 7.3m, 9m, 11m, 13m" },
      { label: "Frequency Bands", value: "S-band (2-4 GHz), X-band (7-8.5 GHz), Ku-band (10.7-18 GHz), Ka-band (26.5-40 GHz)" },
      { label: "G/T (Figure of Merit)", value: "20 dB/K to 45 dB/K" },
      { label: "EIRP", value: "Up to 85 dBW" },
      { label: "Polarization", value: "Linear (H/V), Circular (RHCP/LHCP), Dual" },
      { label: "Tracking Modes", value: "Program Track, Auto-Track (Monopulse, Step-Track)" }
    ],
    performance: [
      { label: "Azimuth Range", value: "±270° continuous, 360° with cable wrap" },
      { label: "Elevation Range", value: "0° to 90°" },
      { label: "Pointing Accuracy", value: "±0.01° (3σ)" },
      { label: "Tracking Rate", value: "5°/sec (Azimuth), 2°/sec (Elevation)" },
      { label: "Data Rate", value: "Up to 10 Gbps downlink, 2 Gbps uplink" },
      { label: "Bit Error Rate", value: "<10⁻⁸ at nominal C/N₀" }
    ],
    environmental: [
      { label: "Operating Temperature", value: "-40°C to +55°C" },
      { label: "Survival Temperature", value: "-50°C to +65°C" },
      { label: "Operating Wind", value: "Up to 55 km/h" },
      { label: "Survival Wind", value: "200 km/h (stowed position)" },
      { label: "Humidity", value: "0-100% (with dehumidification)" },
      { label: "Seismic Rating", value: "Zone 4 compliant" }
    ],
    power: [
      { label: "Input Power", value: "3-phase 400V AC, 50/60 Hz" },
      { label: "Power Consumption", value: "15-50 kW (depending on configuration)" },
      { label: "Backup Power", value: "UPS with 4-hour battery backup" },
      { label: "Generator Support", value: "Automatic transfer switch (ATS)" }
    ]
  };

  const architectureComponents = [
    {
      title: "RF Subsystem",
      icon: <Radio className="w-6 h-6" />,
      items: [
        "Low-noise block downconverters (LNB)",
        "High-power amplifiers (HPA/SSPA)",
        "Redundant feed systems",
        "Frequency converters",
        "RF switching matrix"
      ]
    },
    {
      title: "Baseband Subsystem",
      icon: <Monitor className="w-6 h-6" />,
      items: [
        "Modulator/Demodulator banks",
        "Encoder/Decoder systems",
        "Bit synchronizers",
        "Frame synchronizers",
        "Protocol processors"
      ]
    },
    {
      title: "Control Subsystem",
      icon: <Settings className="w-6 h-6" />,
      items: [
        "Antenna control unit (ACU)",
        "Track receiver system",
        "Servo control systems",
        "Environmental monitoring",
        "Safety interlock systems"
      ]
    },
    {
      title: "Network Infrastructure",
      icon: <Cloud className="w-6 h-6" />,
      items: [
        "10/40/100 GbE backbone",
        "Redundant network paths",
        "VPN gateway systems",
        "Network management system",
        "Firewall and security appliances"
      ]
    }
  ];

  const applications = [
    {
      category: "Earth Observation",
      icon: <Globe className="w-6 h-6" />,
      description: "High-resolution imagery and data collection from LEO/MEO satellites",
      examples: ["Optical imaging downlink", "SAR data reception", "Multi-spectral data", "Hyperspectral payloads"]
    },
    {
      category: "Telecommunications",
      icon: <Wifi className="w-6 h-6" />,
      description: "Commercial satellite communications and broadcast services",
      examples: ["Video distribution", "Internet backbone", "VSAT hub operations", "Broadcast uplink"]
    },
    {
      category: "Government & Defense",
      icon: <Lock className="w-6 h-6" />,
      description: "Secure communications for military and government operations",
      examples: ["Tactical communications", "Intelligence gathering", "Secure command & control", "Space situational awareness"]
    },
    {
      category: "Scientific Research",
      icon: <BarChart3 className="w-6 h-6" />,
      description: "Deep space missions and scientific satellite operations",
      examples: ["Deep space network", "Radio astronomy", "Space weather monitoring", "Planetary missions"]
    },
    {
      category: "Commercial Space",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Support for commercial satellite operators and new space ventures",
      examples: ["Constellation management", "Launch vehicle telemetry", "In-orbit testing", "Payload operations"]
    }
  ];

  const operationalBenefits = [
    {
      title: "Maximum Uptime",
      value: "99.99%",
      description: "Guaranteed availability with redundant systems and 24/7 monitoring"
    },
    {
      title: "Rapid Deployment",
      value: "6-12 months",
      description: "From contract signature to full operational capability"
    },
    {
      title: "Scalability",
      value: "Modular",
      description: "Easy expansion with additional antennas and processing capacity"
    },
    {
      title: "Remote Operations",
      value: "Global",
      description: "Manage operations from anywhere with secure remote access"
    }
  ];

  const supportServices = [
    { icon: <Clock className="w-5 h-5" />, title: "24/7/365 Support", desc: "Round-the-clock technical assistance" },
    { icon: <Users className="w-5 h-5" />, title: "Expert Training", desc: "Comprehensive operator certification programs" },
    { icon: <FileText className="w-5 h-5" />, title: "Documentation", desc: "Complete technical and operational manuals" },
    { icon: <Settings className="w-5 h-5" />, title: "Maintenance", desc: "Preventive and corrective maintenance services" }
  ];

  const handleReset = () => {
    setAzimuth(0);
    setElevation(45);
  };

  return (
    <div className="min-h-screen bg-[#060C1D] text-white">
      {/* Hero Section with Parallax */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        
        {/* Animated Grid Background */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <pattern id="fixed-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="1"/>
            </pattern>
            <radialGradient id="grid-fade">
              <stop offset="0%" stopColor="rgba(6, 182, 212, 0.3)" />
              <stop offset="100%" stopColor="rgba(6, 182, 212, 0)" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#fixed-grid)" />
          <circle cx="50%" cy="50%" r="40%" fill="url(#grid-fade)" />
        </svg>

        {/* Animated Satellite Signals */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + Math.sin(i) * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            >
              <div className="absolute w-full h-full bg-cyan-400 rounded-full animate-ping" />
            </div>
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="mb-12 flex justify-center">
            <FixedStationSVG />
          </div>
          
          <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
            <span className="text-cyan-400 text-sm font-semibold">PERMANENT INFRASTRUCTURE</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
            Fixed Ground Station
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Enterprise-grade satellite ground infrastructure designed for maximum reliability, 
            performance, and scalability. Supporting mission-critical operations with 99.99% uptime guarantee.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button className="group bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 flex items-center gap-2">
              Request Consultation 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group bg-transparent border-2 border-cyan-500/50 hover:border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Key Capabilities Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Core Capabilities
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Advanced features and technologies that define our fixed ground station systems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {capabilities.map((capability, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl cursor-pointer ${
                activeFeature === idx 
                  ? 'border-cyan-500 shadow-cyan-500/20' 
                  : 'border-cyan-500/20 hover:border-cyan-500/50'
              }`}
              onMouseEnter={() => setActiveFeature(idx)}
            >
              <div className="flex items-start gap-6">
                <div className={`p-4 rounded-xl transition-all duration-300 ${
                  activeFeature === idx 
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50' 
                    : 'bg-cyan-500/10 text-cyan-400'
                }`}>
                  {capability.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-white">{capability.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="bg-gradient-to-b from-slate-900/50 to-transparent py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Interactive Demo
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Simulate antenna pointing and control in real-time
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <FixedStationSVG azimuth={azimuth} elevation={elevation} />
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Azimuth (Horizontal Rotation °)</label>
                <input 
                  type="range" 
                  min="0" 
                  max="360" 
                  step="1"
                  value={azimuth} 
                  onChange={(e) => setAzimuth(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #06b6d4 ${azimuth}%, #374151 ${azimuth}%)`
                  }}
                />
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>0°</span>
                  <span className="font-semibold text-cyan-400">{azimuth}°</span>
                  <span>360°</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Elevation (Vertical Tilt °)</label>
                <input 
                  type="range" 
                  min="0" 
                  max="90" 
                  step="1"
                  value={elevation} 
                  onChange={(e) => setElevation(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #06b6d4 ${elevation}%, #374151 ${elevation}%)`
                  }}
                />
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>0°</span>
                  <span className="font-semibold text-cyan-400">{elevation}°</span>
                  <span>90°</span>
                </div>
              </div>
              <button 
                onClick={handleReset}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Reset to Default
              </button>
              <p className="text-sm text-gray-500 text-center">Adjust the sliders to simulate real-time antenna pointing control</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="bg-gradient-to-b from-slate-900/50 to-transparent py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive technical details and performance characteristics
            </p>
          </div>

          <div className="space-y-12">
            {Object.entries(technicalSpecs).map(([category, specs], idx) => (
              <div key={idx} className="bg-slate-800/30 border border-cyan-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-cyan-400 capitalize flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  {category} Specifications
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {specs.map((spec, i) => (
                    <div key={i} className="bg-[#060C1D]/50 rounded-lg p-5 border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300">
                      <div className="text-gray-400 text-sm mb-2 font-medium">{spec.label}</div>
                      <div className="text-lg font-semibold text-white">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System Architecture */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            System Architecture
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Modular design with redundancy at every level for maximum reliability
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {architectureComponents.map((component, idx) => (
            <div key={idx} className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                  {component.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{component.title}</h3>
              </div>
              <ul className="space-y-3">
                {component.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <ChevronRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Applications */}
      <div className="bg-gradient-to-b from-slate-900/50 to-transparent py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Applications & Use Cases
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Versatile solutions across multiple industries and mission types
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, idx) => (
              <div key={idx} className="bg-slate-800/30 border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400 w-fit mb-4">
                  {app.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{app.category}</h3>
                <p className="text-gray-400 mb-4">{app.description}</p>
                <div className="space-y-2">
                  {app.examples.map((example, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Operational Benefits */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Operational Excellence
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {operationalBenefits.map((benefit, idx) => (
            <div key={idx} className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8 text-center hover:border-cyan-500/50 transition-all duration-300">
              <div className="text-5xl font-bold text-cyan-400 mb-3">{benefit.value}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Support Services */}
      <div className="bg-gradient-to-b from-slate-900/50 to-transparent py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Comprehensive Support
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Full lifecycle support from installation to operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportServices.map((service, idx) => (
              <div key={idx} className="bg-slate-800/30 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 text-center">
                <div className="inline-flex p-4 bg-cyan-500/10 rounded-full text-cyan-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-5xl mx-auto px-4 py-24">
        <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 animate-pulse" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Deploy Your Fixed Ground Station?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you design, build, and deploy a custom ground station solution tailored to your mission requirements.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 flex items-center gap-2">
                Schedule Consultation <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Fixed Station SVG
const FixedStationSVG = ({ azimuth = 0, elevation = 45 }) => {
  // Simple simulation: rotate for azimuth, adjust dish position and shape for elevation
  const pivotX = 150;
  const pivotY = 220;
  const baseCy = 100;
  const tiltOffset = (90 - elevation) * 0.3; // Slight tilt simulation by offsetting cy and reducing ry
  const adjustedRyFactor = 1 - (tiltOffset / 100);

  return (
    <svg width="300" height="300" viewBox="0 0 300 300" className="filter drop-shadow-2xl">
      <defs>
        <linearGradient id="dishGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <linearGradient id="towerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#475569" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Base Platform */}
      <rect x="100" y="220" width="100" height="60" fill="#1e293b" rx="6" />
      <rect x="90" y="215" width="120" height="10" fill="#334155" rx="2" />
      
      {/* Tower Structure */}
      <rect x="135" y="120" width="30" height="100" fill="url(#towerGradient)" rx="3" />
      <rect x="130" y="115" width="40" height="10" fill="#334155" />
      
      {/* Support Beams */}
      <path d="M 150 220 L 120 190 L 150 190 Z" fill="#334155" opacity="0.6" />
      <path d="M 150 220 L 180 190 L 150 190 Z" fill="#334155" opacity="0.6" />
      
      {/* Movable Dish Group - rotated for azimuth, tilted for elevation */}
      <g transform={`rotate(${azimuth}, ${pivotX}, ${pivotY})`}>
        {/* Dish Support */}
        <rect x="145" y={`${baseCy}`} width="10" height="20" fill="#334155" rx="2" transform={`translate(0, ${tiltOffset})`} />
        
        {/* Main Dish - adjusted for elevation */}
        <ellipse cx="150" cy={`${baseCy + tiltOffset}`} rx="80" ry={`${45 * adjustedRyFactor}`} fill="url(#dishGradient)" opacity="0.2" />
        <ellipse cx="150" cy={`${baseCy + tiltOffset * 0.8}`} rx="65" ry={`${37 * adjustedRyFactor}`} fill="url(#dishGradient)" opacity="0.4" />
        <ellipse cx="150" cy={`${baseCy + tiltOffset * 0.6}`} rx="50" ry={`${29 * adjustedRyFactor}`} fill="url(#dishGradient)" opacity="0.7" />
        <ellipse cx="150" cy={`${baseCy + tiltOffset * 0.4}`} rx="35" ry={`${21 * adjustedRyFactor}`} fill="url(#dishGradient)" />
        
        {/* Feed Horn - adjusted */}
        <circle cx="150" cy={`${baseCy + tiltOffset * 0.2}`} r="8" fill="#fbbf24" filter="url(#glow)" />
        <circle cx="150" cy={`${baseCy + tiltOffset * 0.2}`} r="4" fill="#fef3c7" />
      </g>
      
      {/* Signal Waves - Animated, fixed position for simplicity */}
      {[...Array(5)].map((_, i) => (
        <g key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.3}s`, animationDuration: '3s' }}>
          <path
            d={`M 150 100 Q ${100 - i * 20} ${60 - i * 15} ${50 - i * 25} ${30 - i * 10}`}
            stroke="#06b6d4"
            strokeWidth="2"
            fill="none"
            opacity={0.7 - i * 0.12}
          />
          <path
            d={`M 150 100 Q ${200 + i * 20} ${60 - i * 15} ${250 + i * 25} ${30 - i * 10}`}
            stroke="#06b6d4"
            strokeWidth="2"
            fill="none"
            opacity={0.7 - i * 0.12}
          />
        </g>
      ))}
    </svg>
  );
};

export default FixedGroundStation;