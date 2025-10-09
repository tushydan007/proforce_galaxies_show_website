import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import HomePage from "./components/Home";
import AboutPage from "./components/About";
import ServicesPage from "./components/Services";
import ProductsPage from "./components/Products";
import TechnologyPage from "./components/Technology";
import ContactPage from "./components/Contact";
import LoadingScreen from "./components/LoadingScreen";
import ScrollToTop from "./components/ScrollToTop";

type PageType =
  | "home"
  | "about"
  | "services"
  | "products"
  | "technology"
  | "contact";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>("home");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      toast.success("Welcome to GeoSpatial3D! 🌍", {
        duration: 3000,
        position: "top-center",
        icon: "🚀",
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "about":
        return <AboutPage />;
      case "services":
        return <ServicesPage />;
      case "products":
        return <ProductsPage />;
      case "technology":
        return <TechnologyPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

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
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="relative">{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
      <ScrollToTop />
    </div>
  );
};

export default App;
