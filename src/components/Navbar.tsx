import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import RotatingLogo from "./AnimatedLogo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showSatellite, setShowSatellite] = useState(false);
  const [showGroundStation, setShowGroundStation] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Technology", path: "/technology" },
    { name: "News & Media", path: "/news-media" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isActive = (path: string) => {
    return (
      location.pathname === path || location.pathname.startsWith(path + "/")
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg shadow-cyan-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center space-x-2"
            onClick={handleNavClick}
          >
            {/* <img
              src="/logo.webp"
              alt="Logo"
              className="object-cover w-40 h-auto"
            /> */}
            <RotatingLogo />
          </Link>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              if (link.name === "Products") {
                return (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => setShowProducts(true)}
                    onMouseLeave={() =>
                      setTimeout(() => setShowProducts(false), 250)
                    }
                  >
                    <Link
                      to={link.path}
                      onClick={handleNavClick}
                      className={`text-sm font-medium transition-all duration-300 relative flex items-center ${
                        isActive(link.path)
                          ? "text-cyan-400"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="w-3 h-3 ml-1 transition-transform duration-300 ease-in-out group-hover:rotate-180" />
                      {isActive(link.path) && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400"></span>
                      )}
                    </Link>
                    <ul
                      className={`absolute left-0 top-full mt-2 w-48 bg-slate-900/95 backdrop-blur-md rounded-md shadow-lg shadow-cyan-500/10 transition-all duration-200 z-50 ${
                        showProducts
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
                    >
                      <li
                        className="relative group"
                        onMouseEnter={() => setShowSatellite(true)}
                        onMouseLeave={() =>
                          setTimeout(() => setShowSatellite(false), 250)
                        }
                      >
                        <Link
                          to="/products/satellite"
                          onClick={handleNavClick}
                          className={`flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-800 transition-colors ${
                            isActive("/products/satellite")
                              ? "text-cyan-400 bg-slate-800"
                              : ""
                          }`}
                        >
                          Satellite
                          <ChevronDown className="w-3 h-3 transition-transform duration-300 ease-in-out group-hover:rotate-180" />
                        </Link>
                        <ul
                          className={`absolute left-full top-0 w-48 bg-slate-900/95 backdrop-blur-md rounded-md shadow-lg shadow-cyan-500/10 transition-all duration-200 z-50 ${
                            showSatellite
                              ? "opacity-100 visible"
                              : "opacity-0 invisible"
                          }`}
                        >
                          <li>
                            <Link
                              to="/products/satellite/cubesat"
                              onClick={handleNavClick}
                              className={`block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-800 transition-colors ${
                                isActive("/products/satellite/cubesat")
                                  ? "text-cyan-400 bg-slate-800"
                                  : ""
                              }`}
                            >
                              Cubesat
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/satellite/optical"
                              onClick={handleNavClick}
                              className={`block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-800 transition-colors ${
                                isActive("/products/satellite/optical")
                                  ? "text-cyan-400 bg-slate-800"
                                  : ""
                              }`}
                            >
                              Optical
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/satellite/synthetic-aperture-radar"
                              onClick={handleNavClick}
                              className={`block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-800 transition-colors ${
                                isActive(
                                  "/products/satellite/synthetic-aperture-radar"
                                )
                                  ? "text-cyan-400 bg-slate-800"
                                  : ""
                              }`}
                            >
                              Synthetic Aperture Radar
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="relative group"
                        onMouseEnter={() => setShowGroundStation(true)}
                        onMouseLeave={() =>
                          setTimeout(() => setShowGroundStation(false), 250)
                        }
                      >
                        <Link
                          to="/products/ground-station"
                          onClick={handleNavClick}
                          className={`flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-slate-800 transition-colors ${
                            isActive("/products/ground-station")
                              ? "text-cyan-400 bg-slate-800"
                              : ""
                          }`}
                        >
                          Ground Station
                          <ChevronDown className="w-3 h-3 transition-transform duration-300 ease-in-out group-hover:rotate-180" />
                        </Link>
                        <ul
                          className={`absolute left-full top-0 w-48 bg-slate-900/95 backdrop-blur-md rounded-md shadow-lg shadow-cyan-500/10 transition-all duration-200 z-50 ${
                            showGroundStation
                              ? "opacity-100 visible"
                              : "opacity-0 invisible"
                          }`}
                        >
                          <li>
                            <Link
                              to="/products/ground-station/antennas"
                              onClick={handleNavClick}
                              className={`block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-800 transition-colors ${
                                isActive("/products/ground-station/antennas")
                                  ? "text-cyan-400 bg-slate-800"
                                  : ""
                              }`}
                            >
                              Antennas
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/ground-station/receivers"
                              onClick={handleNavClick}
                              className={`block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-800 transition-colors ${
                                isActive("/products/ground-station/receivers")
                                  ? "text-cyan-400 bg-slate-800"
                                  : ""
                              }`}
                            >
                              Receivers
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/products/ground-station/control"
                              onClick={handleNavClick}
                              className={`block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-800 transition-colors ${
                                isActive("/products/ground-station/control")
                                  ? "text-cyan-400 bg-slate-800"
                                  : ""
                              }`}
                            >
                              Control Systems
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                );
              }
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={handleNavClick}
                  className={`text-sm font-medium transition-all duration-300 relative ${
                    isActive(link.path)
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400"></span>
                  )}
                </Link>
              );
            })}
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
              <Link
                key={link.name}
                to={link.path}
                onClick={handleNavClick}
                className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive(link.path)
                    ? "text-cyan-400 bg-slate-800"
                    : "text-gray-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// import { Menu, X } from "lucide-react";
// import { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import RotatingLogo from "./AnimatedLogo";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Services", path: "/services" },
//     { name: "Products", path: "/products" },
//     { name: "Technology", path: "/technology" },
//     { name: "News & Media", path: "/news-media" },
//     { name: "Contact", path: "/contact" },
//   ];

//   const handleNavClick = () => {
//     setIsOpen(false);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const isActive = (path: string) => {
//     return location.pathname === path;
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-slate-900/95 backdrop-blur-md shadow-lg shadow-cyan-500/10"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <Link
//             to="/"
//             className="flex items-center space-x-2"
//             onClick={handleNavClick}
//           >
//             {/* <img
//               src="/logo.webp"
//               alt="Logo"
//               className="object-cover w-40 h-auto"
//             /> */}
//             <RotatingLogo />
//           </Link>

//           <div className="hidden md:flex space-x-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 onClick={handleNavClick}
//                 className={`text-sm font-medium transition-all duration-300 relative ${
//                   isActive(link.path)
//                     ? "text-cyan-400"
//                     : "text-gray-300 hover:text-white"
//                 }`}
//               >
//                 {link.name}
//                 {isActive(link.path) && (
//                   <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400"></span>
//                 )}
//               </Link>
//             ))}
//           </div>

//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden text-white"
//           >
//             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="md:hidden bg-slate-900/95 backdrop-blur-md">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 onClick={handleNavClick}
//                 className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors ${
//                   isActive(link.path)
//                     ? "text-cyan-400 bg-slate-800"
//                     : "text-gray-300 hover:text-white hover:bg-slate-800"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
