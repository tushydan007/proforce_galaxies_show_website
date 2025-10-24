import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "@/pages/Home";
import AboutPage from "@/pages/About";
import ServicesPage from "@/pages/Services";
import SolutionsPage from "@/pages/Solutions";
import TechnologyPage from "@/pages/Technology";
import ProductDetailPage from "@/pages/ProductDetail";
import NewsMedia from "@/pages/NewsAndMedia";
import ContactPage from "@/pages/Contact";

import ScrollToTop from "./components/ScrollToTop";

import { Route, Routes } from "react-router-dom";
import Cubesat from "./pages/NavLinks/Cubesat";
import Optical from "./pages/NavLinks/Optical";
import Sar from "./pages/NavLinks/Sar";
import FixedGroundStation from "./pages/NavLinks/FixedGroundStation";
import MobileGroundStation from "./pages/NavLinks/MobileGroundStation";
import TransportableGroundStation from "./pages/NavLinks/TransportableGroundStation";

const App = () => {
  return (
    <div className="flex flex-col bg-[#0F172B] min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news-media" element={<NewsMedia />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<SolutionsPage />} />
          <Route path="/products/satellites/cubesat" element={<Cubesat />} />
          <Route path="/products/satellites/optical" element={<Optical />} />
          <Route path="/products/satellites/sar" element={<Sar />} />
          <Route
            path="/products/ground-station/fixed"
            element={<FixedGroundStation />}
          />
          <Route
            path="/products/ground-station/mobile"
            element={<MobileGroundStation />}
          />
          <Route
            path="/products/ground-station/transportable"
            element={<TransportableGroundStation />}
          />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
