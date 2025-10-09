import { ChevronRight, Globe2 } from "lucide-react";
import toast from "react-hot-toast";

type PageType =
  | "home"
  | "about"
  | "services"
  | "products"
  | "technology"
  | "contact";

const Footer = ({ onNavigate }: { onNavigate: (page: PageType) => void }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Globe2 className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold text-white">
                Proforce<span className="text-cyan-400"> Galaxies</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Leading the way in 3D geospatial technology and innovation.
              Transforming how the world understands space.
            </p>
            <div className="flex space-x-3">
              {["T", "L", "G", "Y"].map((letter, idx) => (
                <button
                  key={idx}
                  className="w-8 h-8 bg-slate-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300 text-gray-400 hover:text-white"
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {["home", "about", "services", "products"].map((page) => (
                <li
                  key={page}
                  onClick={() => onNavigate(page as PageType)}
                  className="hover:text-cyan-400 cursor-pointer transition-colors"
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">
                3D Mapping
              </li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">
                Satellite Imagery
              </li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">
                GIS Analysis
              </li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">
                Consulting
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-3">
              Stay updated with our latest innovations
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-slate-800 text-white text-sm rounded-l-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button
                onClick={() =>
                  toast.success("Subscribed successfully!", {
                    position: "bottom-center",
                  })
                }
                className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-r-lg transition-all duration-300"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; 2025 Proforce Galaxies. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="hover:text-cyan-400 transition-colors">
              Privacy Policy
            </button>
            <button className="hover:text-cyan-400 transition-colors">
              Terms of Service
            </button>
            <button className="hover:text-cyan-400 transition-colors">
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
