import { useState, useRef, useEffect } from "react";
import {
  Globe2,
  Mail,
  Users,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  X,
  Send,
  Minimize2,
  Maximize2,
} from "lucide-react";
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
import LoadingScreen from "./LoadingScreen";

// Types for Chatbot
interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface QuickReply {
  text: string;
  action: string;
}

// Knowledge base for the chatbot
const FAQ_KNOWLEDGE = {
  greeting: [
    "Hello! 👋 I'm here to help you with any questions about our geospatial services.",
    "Hi there! Welcome to Proforce Galaxies. How can I assist you today?",
    "Greetings! I'm your virtual assistant. What can I help you with?",
  ],
  services: [
    "We offer comprehensive geospatial solutions including:\n\n• GIS Mapping & Analysis\n• Drone Surveys & Photogrammetry\n• 3D Terrain Modeling\n• Satellite Imagery Processing\n• Custom Geospatial Software Development\n\nWhich service interests you?",
  ],
  pricing: [
    "Our pricing varies based on project scope and requirements. Typical project ranges:\n\n• Basic surveys: $2,000 - $5,000\n• Medium projects: $5,000 - $15,000\n• Enterprise solutions: $15,000+\n\nWould you like to schedule a consultation for an accurate quote?",
  ],
  contact: [
    "You can reach us through:\n\n📧 Email: info@proforcegalaxies.com\n📧 Support: info@proforcegalaxies.com\n📞 Phone: +234 7012 234 567\n🏢 Office: 1, Akaka Junction, Ode Remo, Ogun State, Nigeria\n\nWe're available Mon-Fri: 9AM - 6PM PST",
  ],
  support: [
    "For technical support:\n\n1. Email our support team at info@proforcegalaxies.com\n2. Call us at +234 7012 234 567\n3. Use the contact form on this page\n\nOur team typically responds within 2-4 hours during business hours.",
  ],
  hours: [
    "Our business hours are:\n\n🕐 Monday - Friday: 9:00 AM - 6:00 PM PST\n🕐 Saturday: 10:00 AM - 2:00 PM PST\n🕐 Sunday: Closed\n\nFor urgent matters outside these hours, please email support@proforcegalaxies.com",
  ],
  projects: [
    "We've successfully completed projects in:\n\n• Urban planning and development\n• Agricultural land assessment\n• Mining and resource exploration\n• Environmental monitoring\n• Infrastructure planning\n• Defense and security applications\n\nWould you like to see case studies or discuss your specific project?",
  ],
  technology: [
    "We utilize cutting-edge technology:\n\n• Advanced drone fleet (DJI Phantom, Matrice series)\n• High-resolution satellite imagery\n• Industry-leading GIS software (ArcGIS, QGIS)\n• Custom AI/ML algorithms\n• Cloud-based processing infrastructure\n\nWhat technical aspect interests you most?",
  ],
  timeline: [
    "Project timelines typically range from:\n\n• Quick assessments: 1-2 weeks\n• Standard projects: 2-6 weeks\n• Large-scale projects: 2-6 months\n\nTimelines depend on project complexity, site accessibility, and weather conditions. We can provide a detailed timeline after reviewing your requirements.",
  ],
  default: [
    "I'm here to help! I can answer questions about:\n\n• Our services and solutions\n• Pricing and project timelines\n• Technical capabilities\n• How to get started\n• Contact information\n\nWhat would you like to know?",
  ],
};

// Intent matching function
const matchIntent = (userMessage: string): string => {
  const msg = userMessage.toLowerCase();

  if (
    /^(hi|hello|hey|greetings|good\s*(morning|afternoon|evening))/.test(msg)
  ) {
    return "greeting";
  }
  if (
    /(service|solution|offer|provide|do\s*you\s*have|what\s*do\s*you|capabilities)/.test(
      msg
    )
  ) {
    return "services";
  }
  if (/(price|pricing|cost|how\s*much|budget|quote|estimate)/.test(msg)) {
    return "pricing";
  }
  if (/(contact|reach|email|phone|address|location|office)/.test(msg)) {
    return "contact";
  }
  if (/(support|help|problem|issue|technical|trouble)/.test(msg)) {
    return "support";
  }
  if (/(hour|time|open|available|when|schedule)/.test(msg)) {
    return "hours";
  }
  if (/(project|case\s*stud|portfolio|example|work|experience)/.test(msg)) {
    return "projects";
  }
  if (/(technology|tech|equipment|software|drone|satellite|tool)/.test(msg)) {
    return "technology";
  }
  if (/(timeline|duration|how\s*long|take|deadline|delivery)/.test(msg)) {
    return "timeline";
  }
  return "default";
};

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  company: z.string().optional(),
  message: z.string().min(1, { message: "Message is required" }),
});

type FormData = z.infer<typeof formSchema>;

const ContactPage = () => {
  // Form state
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  // Chatbot state
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! 👋 I'm your virtual assistant. I can help you with information about our geospatial services, pricing, projects, and more. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [loading, setLoading] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickReplies: QuickReply[] = [
    { text: "Services & Solutions", action: "services" },
    { text: "Pricing Information", action: "pricing" },
    { text: "Contact Details", action: "contact" },
    { text: "Project Timeline", action: "timeline" },
  ];

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

  // Form submit handler
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

  // Chatbot functions
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isChatOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isChatOpen, isMinimized]);

  const generateBotResponse = (userMessage: string): string => {
    const intent = matchIntent(userMessage);
    const responses = FAQ_KNOWLEDGE[intent as keyof typeof FAQ_KNOWLEDGE];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = async (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    const thinkingTime = 500 + Math.random() * 1000;

    setTimeout(() => {
      const botResponse = generateBotResponse(messageText);

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, thinkingTime);
  };

  const handleQuickReply = (action: string) => {
    const quickReplyText =
      quickReplies.find((qr) => qr.action === action)?.text || action;
    handleSendMessage(quickReplyText);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-[#0F172B] pt-20">
      <div className="max-w-[1500px] mx-auto px-4 py-20">
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
            <div className="h-64 rounded-2xl overflow-hidden mb-8 shadow-2xl border border-cyan-500/20">
              <AdvancedTerrain3D />
            </div>

            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-cyan-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <p className="text-gray-400">info@proforcegalaxies.com</p>
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
                    <p className="text-gray-400">+234 812 089 9087</p>
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
                onClick={() => setIsChatOpen(true)}
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

      {/* CHATBOT WIDGET */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed cursor-pointer bottom-16 right-2 z-50 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full p-4 shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-110 group"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
            1
          </span>
        </button>
      )}

      {isChatOpen && (
        <div
          className={`fixed bottom-6 right-6 z-50 bg-slate-800 rounded-2xl shadow-2xl border border-cyan-500/30 flex flex-col transition-all duration-300 ${
            isMinimized ? "h-16 w-80" : "h-[600px] w-96"
          }`}
        >
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">
                  Support Assistant
                </h3>
                <p className="text-cyan-100 text-xs">
                  Online • Typically replies instantly
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-white/20 p-1.5 rounded-lg transition-colors"
                aria-label={isMinimized ? "Maximize" : "Minimize"}
              >
                {isMinimized ? (
                  <Maximize2 className="w-5 h-5" />
                ) : (
                  <Minimize2 className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:bg-white/20 p-1.5 rounded-lg transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    } animate-fadeIn`}
                  >
                    <div
                      className={`flex items-end space-x-2 max-w-[80%] ${
                        message.sender === "user"
                          ? "flex-row-reverse space-x-reverse"
                          : ""
                      }`}
                    >
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          message.sender === "user"
                            ? "bg-cyan-500"
                            : "bg-gradient-to-br from-blue-500 to-cyan-500"
                        }`}
                      >
                        {message.sender === "user" ? (
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        )}
                      </div>
                      <div>
                        <div
                          className={`px-4 py-2 rounded-2xl ${
                            message.sender === "user"
                              ? "bg-cyan-500 text-white rounded-br-none"
                              : "bg-slate-700 text-gray-100 rounded-bl-none"
                          }`}
                        >
                          <p className="text-sm whitespace-pre-wrap break-words">
                            {message.text}
                          </p>
                        </div>
                        <p
                          className={`text-xs text-gray-500 mt-1 ${
                            message.sender === "user"
                              ? "text-right"
                              : "text-left"
                          }`}
                        >
                          {formatTime(message.timestamp)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start animate-fadeIn">
                    <div className="flex items-end space-x-2 max-w-[80%]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-500">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div className="px-4 py-3 rounded-2xl bg-slate-700 rounded-bl-none">
                        <div className="flex space-x-1">
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0ms" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "150ms" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "300ms" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {messages.length <= 2 && !isTyping && (
                <div className="px-4 py-2 bg-slate-900/50 border-t border-slate-700">
                  <p className="text-xs text-gray-400 mb-2">Quick questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickReplies.map((reply, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuickReply(reply.action)}
                        className="px-3 py-1.5 bg-slate-700 hover:bg-cyan-500 text-gray-300 hover:text-white text-xs rounded-full transition-all duration-200 transform hover:scale-105"
                      >
                        {reply.text}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="p-4 bg-slate-800 rounded-b-2xl border-t border-slate-700">
                <div className="flex items-center space-x-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 bg-slate-700 text-white placeholder-gray-400 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                    disabled={isTyping}
                  />
                  <button
                    onClick={() => handleSendMessage()}
                    disabled={!inputValue.trim() || isTyping}
                    className="bg-cyan-500 hover:bg-cyan-600 disabled:bg-slate-600 disabled:cursor-not-allowed text-white p-3 rounded-full transition-all duration-200 transform hover:scale-110 disabled:transform-none"
                    aria-label="Send message"
                  >
                    {isTyping ? (
                      <svg
                        className="w-5 h-5 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Press Enter to send
                </p>
              </div>
            </>
          )}
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
