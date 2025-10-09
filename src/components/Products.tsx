import { toast } from "react-toastify";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const ProductsSection: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      title: "GeoMapper Pro",
      description:
        "Professional-grade 3D mapping software with advanced analytics.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      category: "Software",
    },
    {
      id: 2,
      title: "SatView Elite",
      description:
        "Real-time satellite imagery platform with AI-powered insights.",
      image:
        "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop",
      category: "Platform",
    },
    {
      id: 3,
      title: "LiDAR Scanner X1",
      description:
        "Portable high-precision LiDAR scanner for field operations.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      category: "Hardware",
    },
    {
      id: 4,
      title: "Terrain Analyzer",
      description:
        "Advanced terrain analysis tool for construction and mining.",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      category: "Software",
    },
  ];

  return (
    <section id="products" className="relative min-h-screen bg-slate-900 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-cyan-400">Products</span>
          </h2>
          <p className="text-xl text-gray-300">
            Industry-leading geospatial solutions
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-slate-800 rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-cyan-500/30"
              onClick={() =>
                toast.success(`Viewing ${product.title}`, {
                  position: "top-center",
                })
              }
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-semibold rounded-full mb-3">
                  {product.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-400 text-sm">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
