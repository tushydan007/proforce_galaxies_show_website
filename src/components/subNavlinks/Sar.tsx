import { useState, type JSX } from "react";
import {
  Radio,
  CloudOff,
  Moon,
  Radar,
  Download,
  ChevronRight,
  Play,
  Zap,
  Target,
  Globe,
} from "lucide-react";

interface Advantage {
  icon: JSX.Element;
  title: string;
  description: string;
}

interface Mode {
  name: string;
  resolution: string;
  swath: string;
  description: string;
}

interface Application {
  title: string;
  description: string;
  image: string;
  features: string[];
}

interface Specification {
  category: string;
  items: Array<{ label: string; value: string }>;
}

const SARSatellitePage = () => {
  const [activeTab, setActiveTab] = useState<
    "overview" | "modes" | "applications" | "specs"
  >("overview");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [selectedMode, setSelectedMode] = useState<number>(0);

  const advantages: Advantage[] = [
    {
      icon: <CloudOff className="w-6 h-6" />,
      title: "All-Weather Capability",
      description:
        "Penetrate clouds, fog, and atmospheric conditions that obscure optical sensors for reliable 24/7 imaging.",
    },
    {
      icon: <Moon className="w-6 h-6" />,
      title: "Day & Night Operation",
      description:
        "Active radar system provides consistent imaging regardless of sunlight, enabling continuous monitoring.",
    },
    {
      icon: <Radio className="w-6 h-6" />,
      title: "Surface Penetration",
      description:
        "Detect ground deformation, measure soil moisture, and identify subsurface features through vegetation.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Interferometric Analysis",
      description:
        "Millimeter-precision ground movement detection using advanced InSAR processing techniques.",
    },
  ];

  const imagingModes: Mode[] = [
    {
      name: "Stripmap",
      resolution: "3m",
      swath: "30km",
      description:
        "Continuous imaging along the satellite track with consistent resolution and radiometry.",
    },
    {
      name: "Spotlight",
      resolution: "1m",
      swath: "10km",
      description:
        "Ultra-high resolution focused imaging of specific areas of interest with extended dwell time.",
    },
    {
      name: "ScanSAR",
      resolution: "18m",
      swath: "100km",
      description:
        "Wide-area coverage mode for rapid mapping and change detection applications.",
    },
    {
      name: "Sliding Spotlight",
      resolution: "0.5m",
      swath: "5km",
      description:
        "Maximum resolution mode for detailed analysis of critical infrastructure and assets.",
    },
  ];

  const applications: Application[] = [
    {
      title: "Maritime Surveillance",
      description:
        "Monitor vessel traffic, detect illegal fishing, and track ships in all weather conditions across vast ocean areas.",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      features: ["Ship Detection", "Oil Spill Monitoring", "Ice Navigation"],
    },
    {
      title: "Infrastructure Monitoring",
      description:
        "Detect millimeter-scale ground movements to monitor bridges, dams, pipelines, and urban subsidence.",
      image:
        "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=800&h=600&fit=crop",
      features: [
        "InSAR Deformation",
        "Structural Health",
        "Subsidence Mapping",
      ],
    },
    {
      title: "Disaster Management",
      description:
        "Rapid damage assessment during floods, earthquakes, and hurricanes when optical imagery is unavailable.",
      image:
        "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800&h=600&fit=crop",
      features: ["Flood Mapping", "Damage Detection", "Emergency Response"],
    },
    {
      title: "Agriculture Intelligence",
      description:
        "Monitor crop growth, soil moisture, and field conditions through clouds for precision agriculture.",
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop",
      features: ["Soil Moisture", "Crop Monitoring", "Yield Estimation"],
    },
    {
      title: "Defense & Security",
      description:
        "Tactical intelligence gathering with persistent surveillance capabilities in any weather condition.",
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
      features: ["Target Recognition", "Change Detection", "Border Monitoring"],
    },
    {
      title: "Forest & Land Cover",
      description:
        "Track deforestation, monitor biomass, and map land use changes through dense vegetation and clouds.",
      image:
        "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800&h=600&fit=crop",
      features: [
        "Deforestation Alert",
        "Biomass Mapping",
        "Land Classification",
      ],
    },
  ];

  const specifications: Specification[] = [
    {
      category: "Radar System",
      items: [
        { label: "Frequency Band", value: "X-Band (9.6 GHz)" },
        { label: "Polarization", value: "Full Quad-Pol (HH, HV, VH, VV)" },
        { label: "Peak Power", value: "2 kW" },
        { label: "Antenna Size", value: "3.0m x 0.7m" },
      ],
    },
    {
      category: "Performance",
      items: [
        { label: "Best Resolution", value: "0.5m (Sliding Spotlight)" },
        { label: "Standard Resolution", value: "3m (Stripmap)" },
        { label: "Maximum Swath", value: "100km (ScanSAR)" },
        { label: "Radiometric Accuracy", value: "±1 dB" },
      ],
    },
    {
      category: "Orbital Characteristics",
      items: [
        { label: "Orbit Type", value: "Sun-Synchronous LEO" },
        { label: "Altitude", value: "550 km" },
        { label: "Inclination", value: "97.4°" },
        { label: "Revisit Time", value: "3-5 days" },
      ],
    },
    {
      category: "Platform",
      items: [
        { label: "Satellite Mass", value: "300 kg" },
        { label: "Power Generation", value: "800W" },
        { label: "Design Life", value: "7 years" },
        { label: "Data Downlink", value: "600 Mbps X-Band" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/70 to-slate-900 z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"></div>
        <img
          src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1920&h=1080&fit=crop"
          alt="SAR satellite"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-6 inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-6 py-2">
            <Radar className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold">
              Active Radar Imaging
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Synthetic Aperture Radar
            <br />
            <span className="text-cyan-400">Satellites</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            All-weather, day-night imaging technology for continuous Earth
            observation regardless of atmospheric conditions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              Explore Capabilities <ChevronRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2">
              <Download className="w-5 h-5" /> Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Why <span className="text-cyan-400">SAR Technology?</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Synthetic Aperture Radar overcomes the limitations of optical
            sensors to provide truly persistent monitoring
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-300 group"
              >
                <div className="bg-cyan-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors duration-300">
                  {advantage.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            SAR Technology <span className="text-cyan-400">Explained</span>
          </h2>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20">
            <div className="relative aspect-video bg-slate-800">
              {!isVideoPlaying ? (
                <>
                  <img
                    src="https://images.unsplash.com/photo-1581822261290-991b38693d1b?w=1920&h=1080&fit=crop"
                    alt="SAR technology visualization"
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

      {/* Tabbed Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {(["overview", "modes", "applications", "specs"] as const).map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 capitalize ${
                    activeTab === tab
                      ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/50"
                      : "bg-slate-800 text-gray-300 hover:bg-slate-700"
                  }`}
                >
                  {tab === "specs" ? "Specifications" : tab}
                </button>
              )
            )}
          </div>

          {/* Overview Content */}
          {activeTab === "overview" && (
            <div className="animate-fade-in">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 mb-8">
                <h3 className="text-3xl font-bold text-white mb-6">
                  How SAR Works
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Synthetic Aperture Radar (SAR) is an active remote sensing
                    technology that transmits microwave signals and measures the
                    backscattered energy reflected from the Earth's surface.
                    Unlike optical sensors that passively detect sunlight, SAR
                    generates its own illumination, enabling imaging in complete
                    darkness and through clouds.
                  </p>
                  <p>
                    The "synthetic aperture" is created by combining multiple
                    radar pulses transmitted as the satellite moves along its
                    orbit, effectively creating a much larger antenna than
                    physically possible. This technique provides high-resolution
                    imagery comparable to optical systems while maintaining
                    all-weather capability.
                  </p>
                  <p>
                    Advanced processing techniques like Interferometric SAR
                    (InSAR) can detect ground movements with millimeter
                    precision by comparing phase differences between images
                    taken at different times, making it invaluable for
                    monitoring infrastructure, volcanoes, and natural disasters.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-6 text-center">
                  <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">24/7</div>
                  <div className="text-gray-400">Continuous Operation</div>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-6 text-center">
                  <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">100%</div>
                  <div className="text-gray-400">Weather Independent</div>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-6 text-center">
                  <Target className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">0.5m</div>
                  <div className="text-gray-400">Best Resolution</div>
                </div>
              </div>
            </div>
          )}

          {/* Imaging Modes */}
          {activeTab === "modes" && (
            <div className="animate-fade-in">
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  {imagingModes.map((mode, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedMode(index)}
                      className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                        selectedMode === index
                          ? "bg-cyan-500/20 border-2 border-cyan-500"
                          : "bg-slate-800 border border-slate-700 hover:border-cyan-500/50"
                      }`}
                    >
                      <h3 className="text-xl font-bold text-white mb-2">
                        {mode.name}
                      </h3>
                      <div className="flex gap-4 text-sm mb-2">
                        <span className="text-cyan-400">
                          Resolution: {mode.resolution}
                        </span>
                        <span className="text-cyan-400">
                          Swath: {mode.swath}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">
                        {mode.description}
                      </p>
                    </button>
                  ))}
                </div>
                <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
                  <img
                    src="https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=600&fit=crop"
                    alt={imagingModes[selectedMode].name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                      {imagingModes[selectedMode].name} Mode
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {imagingModes[selectedMode].description}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-gray-400 text-sm mb-1">
                          Resolution
                        </div>
                        <div className="text-white font-bold text-xl">
                          {imagingModes[selectedMode].resolution}
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm mb-1">
                          Swath Width
                        </div>
                        <div className="text-white font-bold text-xl">
                          {imagingModes[selectedMode].swath}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Applications */}
          {activeTab === "applications" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {app.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{app.description}</p>
                    <div className="space-y-2">
                      {app.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                          <span className="text-cyan-400 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Specifications */}
          {activeTab === "specs" && (
            <div className="space-y-6 animate-fade-in">
              {specifications.map((spec, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700"
                >
                  <h3 className="text-2xl font-bold text-cyan-400 mb-6">
                    {spec.category}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {spec.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex justify-between items-center py-3 border-b border-slate-700"
                      >
                        <span className="text-gray-400 font-medium">
                          {item.label}
                        </span>
                        <span className="text-white font-bold">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Image Comparison */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            SAR vs <span className="text-cyan-400">Optical Imaging</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            See how SAR technology delivers reliable imagery in conditions where
            optical sensors fail
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
              <div className="h-64 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&h=600&fit=crop"
                  alt="Cloudy optical imagery"
                  className="w-full h-full object-cover opacity-30"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Optical Sensor
                </h3>
                <p className="text-gray-400">
                  Imagery obscured by clouds and weather conditions
                </p>
              </div>
            </div>
            <div className="bg-slate-800 rounded-xl overflow-hidden border border-cyan-500">
              <div className="h-64">
                <img
                  src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&h=600&fit=crop"
                  alt="Clear SAR imagery"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">
                  SAR Sensor
                </h3>
                <p className="text-gray-400">
                  Clear, detailed imagery regardless of weather
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-12 text-center">
          <Radar className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Experience the Power of SAR Technology
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Discover how our SAR satellites can provide continuous, all-weather
            monitoring for your critical operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Schedule Demo
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              Talk to Expert
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

export default SARSatellitePage;
