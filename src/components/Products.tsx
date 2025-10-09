import { Globe2, Satellite, Map, ChevronRight } from "lucide-react";
import toast from "react-hot-toast";
import { products } from "../data/product";

const ProductsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0F172B] pt-20">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-cyan-400">Products</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Industry-leading geospatial tools and platforms designed for
            professionals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  {product.id % 3 === 0 ? (
                    <Globe2 className="w-24 h-24 text-cyan-400 opacity-50" />
                  ) : product.id % 3 === 1 ? (
                    <Satellite className="w-24 h-24 text-cyan-400 opacity-50" />
                  ) : (
                    <Map className="w-24 h-24 text-cyan-400 opacity-50" />
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-400 mb-4">{product.description}</p>
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 text-gray-400 text-sm"
                    >
                      <ChevronRight className="w-4 h-4 text-cyan-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                  <span className="text-2xl font-bold text-cyan-400">
                    {product.price}
                  </span>
                  <button
                    onClick={() =>
                      toast.success(`Added ${product.title} to cart`, {
                        position: "bottom-center",
                      })
                    }
                    className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all duration-300"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Enterprise Solutions
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Need custom pricing for your organization? Contact our sales team
              for enterprise packages.
            </p>
            <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
