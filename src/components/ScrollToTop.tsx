import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    toast.success("Back to top!", {
      duration: 1000,
      position: "bottom-center",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
    >
      <ChevronRight className="w-6 h-6 transform -rotate-90" />
    </button>
  );
};

export default ScrollToTop;
