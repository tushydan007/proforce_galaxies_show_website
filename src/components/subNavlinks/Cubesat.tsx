import { useState, type JSX } from "react";
import {
  CheckCircle,
  Zap,
  Shield,
  Rocket,
  Download,
  ChevronRight,
  Play,
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

const CubesatPage = () => {
  const [activeTab, setActiveTab] = useState<
    "overview" | "specs" | "applications"
  >("overview");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const specifications: Specification[] = [
    { label: "Form Factor", value: "3U, 6U, 12U" },
    { label: "Mass", value: "4-24 kg" },
    { label: "Power", value: "30-100W" },
    { label: "Resolution", value: "Up to 1m GSD" },
    { label: "Orbit", value: "LEO 400-600km" },
    { label: "Lifetime", value: "3-5 years" },
    { label: "Data Rate", value: "Up to 100 Mbps" },
    { label: "Launch Ready", value: "6-12 months" },
  ];

  const features: Feature[] = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Rapid Deployment",
      description:
        "Quick turnaround from order to orbit with standardized interfaces and proven launch integration.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Reliable Architecture",
      description:
        "Battle-tested subsystems with redundant components ensuring mission success and longevity.",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Cost-Effective",
      description:
        "Affordable satellite platform leveraging economies of scale and standardized manufacturing.",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Mission Flexibility",
      description:
        "Customizable payload configurations to meet diverse mission requirements and objectives.",
    },
  ];

  const applications: Application[] = [
    {
      title: "Earth Observation",
      description:
        "High-resolution imaging for agriculture, urban planning, and environmental monitoring.",
      image:
        "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop",
    },
    {
      title: "IoT Connectivity",
      description:
        "Global machine-to-machine communication for remote asset tracking and monitoring.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    },
    {
      title: "Scientific Research",
      description:
        "Space-based experiments and technology demonstrations in microgravity environment.",
      image:
        "https://images.unsplash.com/photo-1516849677043-ef67c9557e16?w=800&h=600&fit=crop",
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
    doc.text("Cubesat Specifications", pageWidth / 2, 25, { align: "center" });
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

    doc.save("cubesat_specifications.pdf");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=1920&h=1080&fit=crop"
          alt="Cubesat in orbit"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Cubesat <span className="text-cyan-400">Satellites</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Modular, cost-effective satellite platforms designed for rapid
            deployment and mission flexibility
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 cursor-pointer hover:bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              Request Quote <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={downloadSpecs}
              className=" cursor-pointer border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
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
                    src="https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?w=1920&h=1080&fit=crop"
                    alt="Cubesat assembly"
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
                  src="https://www.youtube.com/embed/FoOA80lFgZk"
                  className="w-full h-full"
                  title="Build Your Own CubeSat Instructions"
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
            <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
                >
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
            Cubesat <span className="text-cyan-400">Gallery</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1581822261290-991b38693d1b?w=800&h=600&fit=crop"
                alt="Cubesat design"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1558470598-a5dda9640f68?w=800&h=600&fit=crop"
                alt="Cubesat testing"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&h=600&fit=crop"
                alt="Cubesat deployment"
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
            Ready to Launch Your Cubesat Mission?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Our team of experts is ready to help you design, build, and deploy
            your custom cubesat solution
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

export default CubesatPage;
