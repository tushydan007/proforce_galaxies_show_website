import { Award, Users, Zap } from "lucide-react";
import SatelliteNetwork3D from "./SatelliteNetwork3D";
import LoadingScreen from "./LoadingScreen";
import { useEffect, useState } from "react";

const AboutPage = () => {
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
    <div className="min-h-screen bg-[#0F172B] pt-20">
      <div className="max-w-[1500px] mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-cyan-400">Proforce Galaxies</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering the future of geospatial technology with innovative 3D
            solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-32 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Our Story</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Founded in 2015, Proforce Galaxies emerged from a vision to
              revolutionize how we understand and interact with geographic data.
              Our team of expert cartographers, data scientists, and software
              engineers came together with a shared passion for pushing the
              boundaries of spatial technology.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Today, we're proud to serve clients across 50+ countries,
              delivering cutting-edge 3D mapping solutions that transform raw
              data into actionable insights. From urban planning to
              environmental conservation, our technology is making a real-world
              impact.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-cyan-500/20">
                <Award className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="text-2xl font-bold text-white mb-1">50+</h3>
                <p className="text-gray-400">Industry Awards</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-cyan-500/20">
                <Users className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="text-2xl font-bold text-white mb-1">200+</h3>
                <p className="text-gray-400">Team Members</p>
              </div>
            </div>
          </div>
          <div className="h-96 rounded-xl overflow-hidden shadow-2xl border border-cyan-500/20">
            <SatelliteNetwork3D />
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12 text-cyan-400" />,
                title: "Innovation",
                description:
                  "Constantly pushing boundaries with cutting-edge technology and creative solutions.",
              },
              {
                icon: <Award className="w-12 h-12 text-cyan-400" />,
                title: "Excellence",
                description:
                  "Committed to delivering the highest quality in every project we undertake.",
              },
              {
                icon: <Users className="w-12 h-12 text-cyan-400" />,
                title: "Collaboration",
                description:
                  "Working closely with clients to understand and exceed their expectations.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-500/60 transition-all hover:transform hover:scale-105"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Our Journey
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              We're always looking for talented individuals to join our team
            </p>
            <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
