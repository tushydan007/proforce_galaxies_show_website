import { Globe2 } from "lucide-react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 bg-slate-900 flex items-center justify-center">
      <div className="text-center">
        <Globe2 className="w-16 h-16 text-cyan-400 animate-spin mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white mb-2">
          Loading GeoSpatial3D
        </h2>
        <p className="text-gray-400">Preparing your experience...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
