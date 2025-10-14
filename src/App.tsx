import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/Home";
import AboutPage from "./components/About";
import ServicesPage from "./components/Services";
import ProductsPage from "./components/Products";
import TechnologyPage from "./components/Technology";
import ContactPage from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

import { Route, Routes } from "react-router-dom";
import ProductDetailPage from "./components/ProductDetail";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default App;
