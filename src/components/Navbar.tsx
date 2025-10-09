import { Globe2, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

type PageType =
  | "home"
  | "about"
  | "services"
  | "products"
  | "technology"
  | "contact";

const Navbar = ({
  currentPage,
  onNavigate,
}: {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: { name: string; page: PageType }[] = [
    { name: "Home", page: "home" },
    { name: "About", page: "about" },
    { name: "Services", page: "services" },
    { name: "Products", page: "products" },
    { name: "Technology", page: "technology" },
    { name: "Contact", page: "contact" },
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    // toast.success(
    //   `Welcome to ${page.charAt(0).toUpperCase() + page.slice(1)}`,
    //   {
    //     duration: 2000,
    //     position: "top-right",
    //   }
    // );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg shadow-cyan-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleNavClick("home")}
          >
            <Globe2 className="w-8 h-8 text-cyan-400" />
            <span className="text-xl font-bold text-white">
              Proforce<span className="text-cyan-400"> Galaxies</span>
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.page)}
                className={`text-sm font-medium transition-all duration-300 relative cursor-pointer ${
                  currentPage === link.page
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
                {currentPage === link.page && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400"></span>
                )}
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
                onClick={() => handleNavClick(link.page)}
                className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  currentPage === link.page
                    ? "text-cyan-400 bg-slate-800"
                    : "text-gray-300 hover:text-white hover:bg-slate-800"
                }`}
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
