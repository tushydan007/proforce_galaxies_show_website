import {
  Globe2,
  Mail,
  Users,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import AdvancedTerrain3D from "./ThreeDTerrain";

declare global {
  interface Window {
    tidioChatApi?: {
      open: () => void;
      close: () => void;
      show: () => void;
      hide: () => void;
      [key: string]: unknown;
    };
  }
}

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  company: z.string().optional(),
  message: z.string().min(1, { message: "Message is required" }),
});

type FormData = z.infer<typeof formSchema>;

const ContactPage = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = (values: FormData) => {
    toast.success(
      "Message sent successfully! We'll get back to you within 24 hours.",
      {
        duration: 4000,
        position: "bottom-center",
      }
    );
    console.log(values);
    form.reset();
  };

  useEffect(() => {
    // Tidio AI chatbot integration
    const script = document.createElement("script");
    script.src = `//code.tidio.co/YOUR_TIDIO_PUBLIC_KEY.js`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      const existing = document.querySelector('script[src*="code.tidio.co"]');
      if (existing) {
        existing.remove();
      }
    };
  }, []);

  const socialIcons = {
    X: Twitter,
    Facebook: Facebook,
    Instagram: Instagram,
    Linkedin: Linkedin,
  };

  const socialLinks = {
    X: "https://twitter.com/Proforcedefence",
    Facebook: "https://www.facebook.com/proforceofficial/",
    Instagram: "https://www.instagram.com/proforcedefence/",
    Linkedin: "https://www.linkedin.com/company/proforcelimited",
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
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300 font-semibold">
                          Name *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            className="bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300 font-semibold">
                          Email *
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            className="bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300 font-semibold">
                          Company
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your Company"
                            className="bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300 font-semibold">
                          Message *
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project..."
                            className="bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all resize-none"
                            rows={5}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center space-x-2"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Send Message</span>
                  </Button>
                </form>
              </Form>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-cyan-500/20">
              <h3 className="text-lg font-bold text-white mb-2 text-center">
                Our Location
              </h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.449614!2d3.68559!3d6.97339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTguNDEwJyAwMC4xNCJcMyDEyJzI4LjEyIg!5e0!3m2!1sen!2sus!4v1630000000000!5m2!1sen!2sus"
                width="100%"
                height="400"
                className="rounded-b-2xl"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
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
                    <p className="text-gray-400">
                      contact@proforcegalaxies.com
                    </p>
                    <p className="text-gray-400">
                      support@proforcegalaxies.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
                <div className="flex items-start space-x-4">
                  <Globe2 className="w-6 h-6 text-cyan-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Office</h3>
                    <p className="text-gray-400">1, Akaka Junction, Ode Remo</p>
                    <p className="text-gray-400">Ogun State, Nigeria.</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-cyan-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <p className="text-gray-400">+234 7012 234 567</p>
                    <p className="text-gray-400">Mon-Fri: 9AM - 6PM PST</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 rounded-xl border border-cyan-500/20">
                <h3 className="text-white font-semibold mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  {(
                    [
                      "X",
                      "Facebook",
                      "Instagram",
                      "Linkedin",
                    ] as (keyof typeof socialIcons)[]
                  ).map((social) => {
                    const Icon = socialIcons[social];
                    const link = socialLinks[social];
                    return (
                      <a
                        key={social}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-slate-700 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                      >
                        <Icon className="w-4 h-4 text-white" />
                      </a>
                    );
                  })}
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
              <Button
                onClick={() => {
                  if (window.tidioChatApi) {
                    window.tidioChatApi.open();
                  } else {
                    toast.error("Live chat is not available at the moment.");
                  }
                }}
                className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Live Chat
              </Button>
              <Button className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                Schedule Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
