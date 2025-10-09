import { Globe2, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Navbar: React.FC<{ activeSection: string }> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Technology", href: "#technology" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
    toast.success(`Navigating to ${href.substring(1)}`, {
      autoClose: 2000,
      position: "top-right",
    });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Globe2 className="w-8 h-8 text-cyan-400" />
            <span className="text-xl font-bold text-white">GeoSpatial</span>
          </div>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeSection === link.href.substring(1)
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
