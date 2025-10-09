import { Globe2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Globe2 className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold text-white">GeoSpatial</span>
            </div>
            <p className="text-gray-400 text-sm">
              Leading the way in 3D geospatial technology and innovation.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">
                Home
              </li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">
                About
              </li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">
                Services
              </li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">
                Products
              </li>
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
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>info@geospatial.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Tech Avenue</li>
              <li>San Francisco, CA 94102</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; 2025 GeoSpatial. All rights reserved. Built with React,
            Three.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
