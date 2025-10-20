// src/pages/products/ground-station/TransportableGroundStation.jsx
import { useState, type JSX } from "react";
import {
  Clock,
  Package,
  Download,
  ChevronRight,
  Play,
  Globe,
} from "lucide-react";
import jsPDF from "jspdf";

interface Specification {
  label: string;
  value: string;
}

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

interface Application {
  title: string;
  description: string;
  image: string;
}

const TransportableGroundStation = () => {
  const [activeTab, setActiveTab] = useState<
    "overview" | "specs" | "applications"
  >("overview");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const heroImage =
    "https://images.pexels.com/photos/8346132/pexels-photo-8346132.jpeg?auto=compress&cs=tinysrgb&w=1920";

  const specifications: Specification[] = [
    { label: "Antenna Diameter", value: "3.8m ring-focus" },
    { label: "Frequency Bands", value: "C/X/Ka" },
    { label: "G/T", value: ">38 dB/K" },
    { label: "EIRP", value: ">55 dBW" },
    { label: "Power Consumption", value: "<400W" },
    { label: "Operating Temp", value: "-40°C to +60°C" },
    { label: "Container Size", value: "20ft ISO" },
    { label: "Weight", value: "1,800 kg" },
  ];

  const features: Feature[] = [
    {
      icon: <Package className="w-6 h-6" />,
      title: "Containerized Design",
      description:
        "ISO-standard shipping container for effortless global transport via truck, ship, or air.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Scalable Performance",
      description:
        "Modular architecture supports expansion for growing networks, delivering 8 Gbps with full-duplex capabilities.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Activation",
      description:
        "On-site commissioning in hours, with automated alignment and self-test routines for immediate readiness.",
    },
  ];

  const applications: Application[] = [
    {
      title: "Expeditionary Missions",
      description:
        "Portable stations for remote scientific expeditions and polar operations.",
      image:
        "https://images.pexels.com/photos/8346132/pexels-photo-8346132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    },
    {
      title: "Temporary Sites",
      description:
        "Interim ground links during construction or relocation of permanent facilities.",
      image:
        "https://images.pexels.com/photos/1630365/pexels-photo-1630365.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    },
    {
      title: "Global Deployment",
      description:
        "Rapid international setup for multinational satellite collaborations.",
      image:
        "https://images.pexels.com/photos/9022678/pexels-photo-9022678.jpeg?auto=compress&cs=tinysrgb&w=800&h=600",
    },
  ];

  const downloadSpecs = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const rowHeight = 8;
    const startY = 40;

    // Set background color for the entire page (light gray)
    doc.setFillColor(248, 250, 252);
    doc.rect(0, 0, pageWidth, pageHeight, "F");

    // Title styling
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.setTextColor(8, 145, 178); // Cyan color
    doc.setDrawColor(8, 145, 178);
    doc.text("Transportable Ground Station Specifications", pageWidth / 2, 25, {
      align: "center",
    });
    doc.setLineWidth(1);
    doc.line(margin, 30, pageWidth - margin, 30); // Underline title

    // Headers
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0); // Black
    doc.setFillColor(8, 145, 178); // Cyan background for headers
    doc.rect(
      margin,
      startY - 5,
      (pageWidth - 2 * margin) / 2,
      rowHeight + 2,
      "F"
    ); // Label header bg
    doc.rect(
      margin + (pageWidth - 2 * margin) / 2,
      startY - 5,
      (pageWidth - 2 * margin) / 2,
      rowHeight + 2,
      "F"
    ); // Value header bg
    doc.setTextColor(255, 255, 255); // White text on bg
    doc.text("Label", margin + 10, startY);
    doc.text("Value", pageWidth / 2 + 10, startY);
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.5);
    doc.line(margin, startY + 2, pageWidth - margin, startY + 2); // Line under headers

    // Data rows
    doc.setFont("helvetica", "normal");
    doc.setTextColor(0, 0, 0);
    let y = startY + rowHeight + 5;
    specifications.forEach((spec, index) => {
      // Alternating row colors
      if (index % 2 === 0) {
        doc.setFillColor(255, 255, 255); // White
      } else {
        doc.setFillColor(243, 244, 246); // Light gray
      }
      doc.rect(margin, y - 5, pageWidth - 2 * margin, rowHeight + 2, "F");

      doc.setFont("helvetica", "normal");
      doc.text(spec.label, margin + 10, y);
      doc.setFont("helvetica", "bold");
      doc.text(spec.value, pageWidth / 2 + 10, y);

      // Row separator
      doc.setDrawColor(200, 200, 200);
      doc.line(margin, y + 3, pageWidth - margin, y + 3);

      y += rowHeight + 5;
    });

    // Footer note
    doc.setFont("helvetica", "italic");
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text("Generated on October 20, 2025", pageWidth / 2, pageHeight - 10, {
      align: "center",
    });

    doc.save("transportable_ground_station_specifications.pdf");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Transportable Ground Station"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-slate-900 z-10"></div>
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Transportable <span className="text-cyan-400">Ground Station</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Portable power for satellite missions with containerized design for
            easy shipping and quick activation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 cursor-pointer hover:bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              Request Quote <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={downloadSpecs}
              className="cursor-pointer border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" /> Download Specs
            </button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20">
            <div className="relative aspect-video bg-slate-800">
              {!isVideoPlaying ? (
                <>
                  <img
                    src="https://images.pexels.com/photos/8346132/pexels-photo-8346132.jpeg?auto=compress&cs=tinysrgb&w=1920"
                    alt="Transportable Ground Station assembly"
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
                <iframe
                  src="https://www.youtube.com/embed/wjR3SfOFl7A"
                  className="w-full h-full"
                  title="Transportable Ground Station Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {(["overview", "specs", "applications"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 capitalize ${
                  activeTab === tab
                    ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/50"
                    : "bg-slate-800 text-gray-300 hover:bg-slate-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <img
                    src="https://images.pexels.com/photos/8346132/pexels-photo-8346132.jpeg?auto=compress&cs=tinysrgb&w=500"
                    alt={`${feature.title} Feature`}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <div className="bg-cyan-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 text-cyan-400">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Specifications Tab */}
          {activeTab === "specs" && (
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 animate-fade-in">
              <div className="grid md:grid-cols-2 gap-6">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-4 border-b border-slate-700"
                  >
                    <span className="text-gray-400 font-medium">
                      {spec.label}
                    </span>
                    <span className="text-white font-bold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Applications Tab */}
          {activeTab === "applications" && (
            <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {app.title}
                    </h3>
                    <p className="text-gray-400">{app.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Transportable Ground Station{" "}
            <span className="text-cyan-400">Gallery</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-xl overflow-hidden group">
              <img
                src={heroImage}
                alt="Transportable Ground Station design"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden group">
              <img
                src="https://images.pexels.com/photos/9022678/pexels-photo-9022678.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Transportable Ground Station testing"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden group">
              <img
                src="https://images.pexels.com/photos/1630365/pexels-photo-1630365.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Transportable Ground Station deployment"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Transport Your Network Forward
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Explore how our transportable stations can enhance your global
            satellite infrastructure.
          </p>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Schedule Consultation
          </button>
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

export default TransportableGroundStation;
