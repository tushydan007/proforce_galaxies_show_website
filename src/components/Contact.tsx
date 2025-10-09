import { Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      toast.success("Message sent successfully! We'll get back to you soon.", {
        autoClose: 4000,
        position: "bottom-center",
      });
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error("Please fill in all fields", { position: "bottom-center" });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative min-h-screen bg-slate-900 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300">
            Let's discuss your geospatial needs
          </p>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-cyan-500/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-300 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-300 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
