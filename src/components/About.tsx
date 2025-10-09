import Satellite3D from "./ThreeDSatellite";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-slate-900 py-20 overflow-hidden"
    >
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3 h-96 opacity-50">
        <Satellite3D />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-cyan-400">GeoSpatial</span>
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            We are pioneers in 3D geospatial technology, providing innovative
            solutions for mapping, surveying, and spatial analysis. Our
            cutting-edge tools help businesses and organizations visualize and
            understand geographic data like never before.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            With years of expertise in satellite imagery, LiDAR scanning, and 3D
            modeling, we transform raw data into actionable insights that drive
            decision-making across industries.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-cyan-500/20">
              <h3 className="text-3xl font-bold text-cyan-400 mb-2">500+</h3>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-cyan-500/20">
              <h3 className="text-3xl font-bold text-cyan-400 mb-2">50+</h3>
              <p className="text-gray-300">Countries Served</p>
            </div>
          </div>
        </div>
        <div className="hidden md:block"></div>
      </div>
    </section>
  );
};

export default AboutSection;
