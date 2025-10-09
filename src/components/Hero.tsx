import { toast } from "react-toastify";
import Globe3D from "./ThreeDGlobe";

const HeroSection = ({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900"
    >
      <div className="absolute inset-0 z-0">
        <Globe3D containerRef={containerRef} />
      </div>
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Explore the World in <span className="text-cyan-400">3D</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay">
          Advanced geospatial solutions powered by cutting-edge technology
        </p>
        <button
          onClick={() => {
            document
              .querySelector("#about")
              ?.scrollIntoView({ behavior: "smooth" });
            toast.success("Let's explore together!", {
              position: "top-center",
            });
          }}
          className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
        >
          Discover More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
