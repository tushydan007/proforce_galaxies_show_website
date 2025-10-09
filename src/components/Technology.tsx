import Satellite3D from "./ThreeDSatellite";
import Terrain3D from "./ThreeDTerrain";

const TechnologySection: React.FC = () => {
  return (
    <section
      id="technology"
      className="relative min-h-screen bg-gradient-to-b from-blue-900 to-slate-900 py-20 overflow-hidden"
    >
      <div className="absolute right-0 bottom-0 w-1/2 h-96 opacity-30">
        <Terrain3D />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cutting-Edge <span className="text-cyan-400">Technology</span>
          </h2>
          <p className="text-xl text-gray-300">
            Powered by the latest innovations in geospatial science
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border-l-4 border-cyan-500">
              <h3 className="text-xl font-bold text-white mb-2">
                AI-Powered Analysis
              </h3>
              <p className="text-gray-300">
                Machine learning algorithms for automated feature extraction and
                pattern recognition.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border-l-4 border-cyan-500">
              <h3 className="text-xl font-bold text-white mb-2">
                Real-Time Processing
              </h3>
              <p className="text-gray-300">
                Cloud-based infrastructure for instant data processing and
                visualization.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border-l-4 border-cyan-500">
              <h3 className="text-xl font-bold text-white mb-2">
                3D Visualization
              </h3>
              <p className="text-gray-300">
                Immersive 3D rendering engines for interactive spatial
                exploration.
              </p>
            </div>
          </div>
          <div className="h-96 rounded-xl overflow-hidden shadow-2xl">
            <Satellite3D />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
