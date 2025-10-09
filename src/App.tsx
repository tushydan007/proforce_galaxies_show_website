import { useEffect, useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import AboutSection from "./components/About";
import ServicesSection from "./components/Services";
import ProductsSection from "./components/Products";
import TechnologySection from "./components/Technology";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "services",
        "products",
        "technology",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    toast.success("Welcome to GeoSpatial! 🌍", {
      duration: 3000,
      position: "top-center",
      icon: "🚀",
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      <Toaster
        toastOptions={{
          className: "bg-slate-800 text-white",
          style: {
            background: "#1e293b",
            color: "#fff",
            border: "1px solid #06b6d4",
          },
        }}
      />
      <Navbar activeSection={activeSection} />
      <HeroSection containerRef={heroRef} />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <TechnologySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
