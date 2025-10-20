import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import RotatingLogo from "./AnimatedLogo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsHover, setProductsHover] = useState(false);
  const [satellitesHover, setSatellitesHover] = useState(false);
  const [groundStationHover, setGroundStationHover] = useState(false);
  const [productsMobileOpen, setProductsMobileOpen] = useState(false);
  const [satellitesMobileOpen, setSatellitesMobileOpen] = useState(false);
  const [groundStationMobileOpen, setGroundStationMobileOpen] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const satellitesCloseTimeout = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );
  const groundStationCloseTimeout = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setProductsHover(false);
        setSatellitesHover(false);
        setGroundStationHover(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    {
      name: "Products",
      path: "/products",
      submenu: [
        {
          name: "Satellites",
          path: "/products/satellites",
          submenu: [
            { name: "Cubesat", path: "/products/satellites/cubesat" },
            { name: "Optical", path: "/products/satellites/optical" },
            {
              name: "Synthetic Aperture Radar",
              path: "/products/satellites/sar",
            },
          ],
        },
        {
          name: "Ground station",
          path: "/products/ground-station",
          submenu: [
            { name: "Fixed", path: "/products/ground-station/fixed" },
            { name: "Mobile", path: "/products/ground-station/mobile" },
            {
              name: "Transportable",
              path: "/products/ground-station/transportable",
            },
          ],
        },
      ],
    },
    { name: "Solutions", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Technology", path: "/technology" },
    { name: "About", path: "/about" },
    { name: "News & Media", path: "/news-media" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
    setProductsMobileOpen(false);
    setSatellitesMobileOpen(false);
    setGroundStationMobileOpen(false);
    setProductsHover(false);
    setSatellitesHover(false);
    setGroundStationHover(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isActive = (path?: string) => {
    if (!path) return false;
    return location.pathname === path;
  };

  const isActiveSubmenu = () => {
    return (
      location.pathname.startsWith("/products") &&
      location.pathname !== "/products"
    );
  };

  const isActiveSatellite = () => {
    return location.pathname.startsWith("/products/satellites");
  };

  const isActiveGroundStation = () => {
    return location.pathname.startsWith("/products/ground-station");
  };

  type SubLink = { name: string; path: string; submenu?: SubLink[] };

  const isActiveSubItem = (subLink: SubLink) => {
    if (subLink.name === "Satellites") return isActiveSatellite();
    if (subLink.name === "Ground station") return isActiveGroundStation();
    return false;
  };

  const handleProductsMouseEnter = () => {
    setProductsHover(true);
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
  };

  const handleProductsMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setProductsHover(false);
    }, 150);
  };

  const handleSatellitesMouseEnter = () => {
    setSatellitesHover(true);
    if (satellitesCloseTimeout.current) {
      clearTimeout(satellitesCloseTimeout.current);
    }
  };

  const handleSatellitesMouseLeave = () => {
    satellitesCloseTimeout.current = setTimeout(() => {
      setSatellitesHover(false);
    }, 150);
  };

  const handleGroundStationMouseEnter = () => {
    setGroundStationHover(true);
    if (groundStationCloseTimeout.current) {
      clearTimeout(groundStationCloseTimeout.current);
    }
  };

  const handleGroundStationMouseLeave = () => {
    groundStationCloseTimeout.current = setTimeout(() => {
      setGroundStationHover(false);
    }, 150);
  };

  const getHoverHandlers = (subLinkName: string) => {
    if (subLinkName === "Satellites") {
      return {
        enter: handleSatellitesMouseEnter,
        leave: handleSatellitesMouseLeave,
        hoverState: satellitesHover,
      };
    } else if (subLinkName === "Ground station") {
      return {
        enter: handleGroundStationMouseEnter,
        leave: handleGroundStationMouseLeave,
        hoverState: groundStationHover,
      };
    }
    return { enter: () => {}, leave: () => {}, hoverState: false };
  };

  const renderDesktopSubmenu = (submenu: SubLink[]) => (
    <div
      className={`absolute top-full left-0 mt-2 w-48 bg-slate-900/95 backdrop-blur-md rounded-lg shadow-lg shadow-cyan-500/10 py-2 z-10 transition-all duration-400 ease-out origin-top transform ${
        productsHover
          ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
          : "opacity-0 scale-95 translate-y-1 pointer-events-none"
      }`}
      onMouseEnter={handleProductsMouseEnter}
      onMouseLeave={handleProductsMouseLeave}
    >
      {submenu.map((subLink) => (
        <div key={subLink.name} className="relative">
          {subLink.submenu ? (
            <div
              className="relative"
              onMouseEnter={getHoverHandlers(subLink.name).enter}
              onMouseLeave={getHoverHandlers(subLink.name).leave}
            >
              <Link
                to={subLink.path}
                onClick={handleNavClick}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 relative flex items-center justify-between ${
                  isActive(subLink.path) || isActiveSubItem(subLink)
                    ? "text-cyan-400 bg-slate-800"
                    : "text-gray-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                {subLink.name}
                <ChevronRight
                  className="w-4 h-4 transition-transform duration-300 ease-in-out"
                  // style={{
                  //   transform: getHoverHandlers(subLink.name).hoverState
                  //     ? "rotate(180deg)"
                  //     : "rotate(0deg)",
                  // }}
                />
                {(isActive(subLink.path) || isActiveSubItem(subLink)) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400"></span>
                )}
              </Link>
              <div
                className={`absolute left-full top-0 w-48 bg-slate-900/95 backdrop-blur-md rounded-lg shadow-lg shadow-cyan-500/10 py-2 z-10 transition-all duration-400 ease-out origin-left transform ${
                  getHoverHandlers(subLink.name).hoverState
                    ? "opacity-100 scale-100 translate-x-0 pointer-events-auto"
                    : "opacity-0 scale-95 translate-x-1 pointer-events-none"
                }`}
                onMouseEnter={getHoverHandlers(subLink.name).enter}
                onMouseLeave={getHoverHandlers(subLink.name).leave}
              >
                {subLink.submenu.map((subsubLink: SubLink) => (
                  <Link
                    key={subsubLink.name}
                    to={subsubLink.path!}
                    onClick={handleNavClick}
                    className={`block px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      location.pathname === subsubLink.path
                        ? "text-cyan-400 bg-slate-800"
                        : "text-gray-300 hover:text-white hover:bg-slate-800"
                    }`}
                  >
                    {subsubLink.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              to={subLink.path}
              onClick={handleNavClick}
              className={`block px-4 py-2 text-sm font-medium transition-all duration-300 ${
                location.pathname === subLink.path
                  ? "text-cyan-400 bg-slate-800"
                  : "text-gray-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              {subLink.name}
            </Link>
          )}
        </div>
      ))}
    </div>
  );

  const renderMobileSubmenu = (
    submenu: SubLink[],
    level: number = 1,
    parentName?: string
  ) => {
    let isContainerOpen = false;
    if (level === 1) {
      isContainerOpen = productsMobileOpen;
    } else if (parentName === "Satellites") {
      isContainerOpen = satellitesMobileOpen;
    } else if (parentName === "Ground station") {
      isContainerOpen = groundStationMobileOpen;
    }

    return (
      <div
        className={`ml-${
          level * 4
        } space-y-1 transition-all duration-300 ease-in-out overflow-hidden ${
          isContainerOpen ? "max-h-[1000px] pt-2" : "max-h-0"
        }`}
      >
        {submenu.map((subLink) => (
          <div key={subLink.name}>
            {subLink.submenu ? (
              <>
                <div
                  className="flex items-center justify-between px-3 py-2 text-base font-medium rounded-md cursor-pointer"
                  onClick={() => {
                    if (subLink.name === "Satellites") {
                      setSatellitesMobileOpen(!satellitesMobileOpen);
                    } else if (subLink.name === "Ground station") {
                      setGroundStationMobileOpen(!groundStationMobileOpen);
                    }
                  }}
                >
                  <Link
                    to={subLink.path}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNavClick();
                    }}
                    className={`transition-colors ${
                      isActive(subLink.path) || isActiveSubItem(subLink)
                        ? "text-cyan-400"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {subLink.name}
                  </Link>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ease-in-out ${
                      subLink.name === "Satellites"
                        ? satellitesMobileOpen
                          ? "rotate-180"
                          : ""
                        : subLink.name === "Ground station"
                        ? groundStationMobileOpen
                          ? "rotate-180"
                          : ""
                        : ""
                    }`}
                  />
                </div>
                {renderMobileSubmenu(subLink.submenu, level + 1, subLink.name)}
              </>
            ) : (
              <Link
                to={subLink.path}
                onClick={handleNavClick}
                className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive(subLink.path)
                    ? "text-cyan-400 bg-slate-800"
                    : "text-gray-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                {subLink.name}
              </Link>
            )}
          </div>
        ))}
      </div>
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
            <RotatingLogo />
          </Link>

          <div className="hidden md:flex space-x-8 relative">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.submenu ? (
                  <div
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={handleProductsMouseEnter}
                    onMouseLeave={handleProductsMouseLeave}
                  >
                    <div
                      className={`text-sm font-medium transition-all duration-300 relative flex items-center cursor-pointer ${
                        isActive(link.path) || isActiveSubmenu()
                          ? "text-cyan-400"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        className="w-4 h-4 ml-1 transition-transform duration-300 ease-in-out"
                        style={{
                          transform: productsHover
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        }}
                      />
                      {(isActive(link.path) || isActiveSubmenu()) && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400"></span>
                      )}
                    </div>
                    {renderDesktopSubmenu(link.submenu)}
                  </div>
                ) : (
                  <Link
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
                )}
              </div>
            ))}
          </div>

          <div className="space-x-8 hidden md:flex items-center">
            <div className="hover:bg-cyan-500 cursor-pointer hover:text-white text-gray-300 text-sm font-medium transition-all duration-300 rounded-full px-4 py-2 border border-cyan-400">
              <Link to="/contact">Contact Sales</Link>
            </div>
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
              <div key={link.name}>
                {!link.submenu ? (
                  <Link
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
                ) : (
                  <>
                    <div
                      className="flex items-center justify-between px-3 py-2 text-base font-medium rounded-md cursor-pointer"
                      onClick={() => setProductsMobileOpen(!productsMobileOpen)}
                    >
                      <Link
                        to={link.path}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavClick();
                        }}
                        className={`transition-colors ${
                          isActive(link.path) || isActiveSubmenu()
                            ? "text-cyan-400"
                            : "text-gray-300 hover:text-white"
                        }`}
                      >
                        {link.name}
                      </Link>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ease-in-out ${
                          productsMobileOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    {renderMobileSubmenu(link.submenu, 1, link.name)}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
