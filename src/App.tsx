// import { useState } from "react";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import HomePage from "./components/Home";
import AboutPage from "./components/About";
import ServicesPage from "./components/Services";
import ProductsPage from "./components/Products";
import TechnologyPage from "./components/Technology";
import ContactPage from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

// type PageType =
//   | "home"
//   | "about"
//   | "services"
//   | "products"
//   | "technology"
//   | "contact";

// const App: React.FC = () => {
//   const [currentPage, setCurrentPage] = useState<PageType>("home");

//   const handleNavigate = (page: PageType) => {
//     setCurrentPage(page);
//   };

//   const renderPage = () => {
//     switch (currentPage) {
//       case "home":
//         return <HomePage />;
//       case "about":
//         return <AboutPage />;
//       case "services":
//         return <ServicesPage />;
//       case "products":
//         return <ProductsPage />;
//       case "technology":
//         return <TechnologyPage />;
//       case "contact":
//         return <ContactPage />;
//       default:
//         return <HomePage />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-900">
//       <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
//       <main className="relative">{renderPage()}</main>
//       <Footer onNavigate={handleNavigate} />
//       <ScrollToTop />
//     </div>
//   );
// };

// export default App;

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default App;
