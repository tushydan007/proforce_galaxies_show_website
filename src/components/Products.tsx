import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import toast from "react-hot-toast";
import { products } from "../data/product";
import LoadingScreen from "./LoadingScreen";
import { useNavigate } from "react-router-dom";

const categories = [
  "Energy",
  "Agriculture",
  "Environmental",
  "Real estate",
  "Transportation",
  "Urban planning",
  "Infrastructure",
  "Disaster management",
  "Oil & Gas",
];

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  const navigateToProduct = useNavigate();

  const handleProductClick = (productId: number) => {
    navigateToProduct(`/products/${productId}`);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-[#0F172B] pt-20">
      <div className="max-w-[1500px] mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-cyan-400">Products</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Industry-leading geospatial tools and platforms designed for
            professionals
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 md:py-3 rounded-full font-semibold transition-all cursor-pointer text-sm md:text-base ${
              selectedCategory === "all"
                ? "bg-cyan-500 text-white"
                : "bg-slate-800/50 text-gray-300 hover:bg-slate-700"
            }`}
          >
            All Products
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 md:py-3 rounded-full font-semibold transition-all cursor-pointer text-sm md:text-base ${
                selectedCategory === cat
                  ? "bg-cyan-500 text-white"
                  : "bg-slate-800/50 text-gray-300 hover:bg-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => handleProductClick(product.id)}
              className=" cursor-pointer group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30"
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-300 mb-2">
                  {product.codeName}
                </h3>
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
                    className="cursor-pointer px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all duration-300"
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
