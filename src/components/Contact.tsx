import { Globe2, Mail, Users } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import AdvancedTerrain3D from "./ThreeDTerrain";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      toast.success(
        "Message sent successfully! We'll get back to you within 24 hours.",
        {
          duration: 4000,
          position: "bottom-center",
        }
      );
      setFormData({ name: "", email: "", company: "", message: "" });
    } else {
      toast.error("Please fill in all required fields", {
        position: "bottom-center",
      });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-blue-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get in <span className="text-cyan-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss how we can help transform your geospatial workflows
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-300 font-semibold mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-300 font-semibold mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-gray-300 font-semibold mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-300 font-semibold mb-2"
                  >
                    Message *
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

          <div>
            <div className="h-64 rounded-2xl overflow-hidden mb-8 shadow-2xl">
              <AdvancedTerrain3D />
            </div>

            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-cyan-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <p className="text-gray-400">contact@geospatial3d.com</p>
                    <p className="text-gray-400">support@geospatial3d.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
                <div className="flex items-start space-x-4">
                  <Globe2 className="w-6 h-6 text-cyan-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Office</h3>
                    <p className="text-gray-400">123 Tech Avenue, Suite 500</p>
                    <p className="text-gray-400">San Francisco, CA 94102</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-cyan-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                    <p className="text-gray-400">Mon-Fri: 9AM - 6PM PST</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 rounded-xl border border-cyan-500/20">
                <h3 className="text-white font-semibold mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  {["Twitter", "LinkedIn", "GitHub", "YouTube"].map(
                    (social) => (
                      <button
                        key={social}
                        onClick={() =>
                          toast.success(`Opening ${social}`, {
                            position: "top-center",
                          })
                        }
                        className="w-10 h-10 bg-slate-700 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                      >
                        <span className="text-white text-xs">{social[0]}</span>
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Our technical support team is available 24/7 to help you with any
              issues
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                Live Chat
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
