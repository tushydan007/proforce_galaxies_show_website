import { useEffect, useState, useRef } from "react";
import {
  Award,
  Globe2,
  Layers,
  Sparkles,
  Users,
  Satellite,
  Map,
  TrendingUp,
  Database,
  ArrowRight,
  CheckCircle2,
  Settings,
  Wrench,
  Zap,
  Shield,
  Clock,
  Target,
  Cpu,
  Radio,
  Microscope,
  GitBranch,
  Cloud,
  Code2,
  Rocket,
  MessageSquare,
  Star,
  Building2,
  Workflow,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LoadingScreen from "./LoadingScreen";
import GlobeWithSatellite from "./GlobeWithSatellite";

const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [loading, setLoading] = useState(true);

  // Refs
  const heroRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const gradientSpanRef = useRef<HTMLSpanElement>(null);
  const heroStatsRef = useRef<HTMLDivElement>(null);
  const whatWeDoRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const capabilitiesRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const whyChooseRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const useCasesRef = useRef<HTMLDivElement>(null);
  const facilitiesRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const splitText = (text: string, className: string = "inline-block") =>
    text.split("").map((char, index) => (
      <span key={index} className={`${className}`}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (loading) return;

    gsap.registerPlugin(ScrollTrigger);

    // Hero Timeline
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    const letters = gsap.utils.toArray(".hero-letter");
    gsap.set(letters, { opacity: 0, y: 50 });

    if (gradientSpanRef.current) {
      gsap.set(gradientSpanRef.current, { opacity: 0, y: 30 });
    }

    heroTl.to(letters, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.03,
      ease: "power3.out",
    });

    heroTl.to(
      gradientSpanRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.5"
    );

    // Hero Stats Timeline
    const heroStatsTl = gsap.timeline({
      scrollTrigger: {
        trigger: heroStatsRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });

    const heroStatValues = gsap.utils.toArray<Element>(".hero-stat-value");
    const heroStatIcons = gsap.utils.toArray<Element>(".hero-stat-icon");
    gsap.set(heroStatValues, { opacity: 0, y: 20 });
    gsap.set(heroStatIcons, { opacity: 0, scale: 0 });

    heroStatsTl.to(heroStatIcons, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.2,
      ease: "back.out(1.7)",
    });
    heroStatsTl.to(
      heroStatValues,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        onStart: function () {
          heroStatValues.forEach((el: Element) => {
            const finalValue = parseInt(
              (el as Element).textContent?.slice(0, -1) || "0"
            );
            const num = { val: 0 };
            gsap.to(num, {
              val: finalValue,
              duration: 1.5,
              ease: "power2.out",
              snap: { val: 1 },
              onUpdate: function () {
                (el as Element).textContent =
                  Math.round(num.val) +
                  (el.textContent?.includes("%") ? "%" : "");
              },
            });
          });
        },
      },
      "-=0.5"
    );

    // What We Do Timeline
    const whatWeDoTl = gsap.timeline({
      scrollTrigger: {
        trigger: whatWeDoRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    const whatWeDoCards = gsap.utils.toArray(".what-we-do-card");
    gsap.set(whatWeDoCards, { opacity: 0, y: 50, scale: 0.9 });
    whatWeDoTl.to(whatWeDoCards, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      stagger: 0.1,
      ease: "back.out(1.7)",
    });

    // Process Timeline
    const processTl = gsap.timeline({
      scrollTrigger: {
        trigger: processRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    const processSteps = gsap.utils.toArray(".process-step");
    gsap.set(processSteps, { opacity: 0, x: -30 });
    processTl.to(processSteps, {
      opacity: 1,
      x: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
    });

    // Capabilities Timeline
    const capabilitiesTl = gsap.timeline({
      scrollTrigger: {
        trigger: capabilitiesRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    const capabilityCards = gsap.utils.toArray(".capability-card");
    gsap.set(capabilityCards, { opacity: 0, y: 40, rotationX: 15 });
    capabilitiesTl.to(capabilityCards, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });

    // Tech Timeline (NEW: Added to animate and reveal the section)
    const techTl = gsap.timeline({
      scrollTrigger: {
        trigger: techRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    const techCards = gsap.utils.toArray(".tech-card");
    gsap.set(techCards, { opacity: 0, y: 30 });
    techTl.to(techCards, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });

    // Why Choose Timeline
    const whyChooseTl = gsap.timeline({
      scrollTrigger: {
        trigger: whyChooseRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    const whyChooseCards = gsap.utils.toArray(".why-choose-card");
    gsap.set(whyChooseCards, { opacity: 0, y: 30 });
    whyChooseTl.to(whyChooseCards, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });

    // Testimonials Timeline
    const testimonialsTl = gsap.timeline({
      scrollTrigger: {
        trigger: testimonialsRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    const testimonialCards = gsap.utils.toArray(".testimonial-card");
    gsap.set(testimonialCards, { opacity: 0, y: 50, scale: 0.9 });
    testimonialsTl.to(testimonialCards, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      stagger: 0.1,
      ease: "back.out(1.7)",
    });

    // Use Cases Timeline
    const useCasesTl = gsap.timeline({
      scrollTrigger: {
        trigger: useCasesRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    const useCaseCards = gsap.utils.toArray(".use-case-card");
    gsap.set(useCaseCards, { opacity: 0, y: 50, scale: 0.9 });
    useCasesTl.to(useCaseCards, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      stagger: 0.1,
      ease: "back.out(1.7)",
    });

    // Facilities Timeline
    const facilitiesTl = gsap.timeline({
      scrollTrigger: {
        trigger: facilitiesRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    const facilityCards = gsap.utils.toArray(".facility-card");
    gsap.set(facilityCards, { opacity: 0, y: 30 });
    facilitiesTl.to(facilityCards, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });

    // Achievements Timeline
    const achievementsTl = gsap.timeline({
      scrollTrigger: {
        trigger: achievementsRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    const achievementCards = gsap.utils.toArray(".achievement-card");
    gsap.set(achievementCards, { opacity: 0, y: 20, scale: 0 });
    achievementsTl.to(achievementCards, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      stagger: 0.15,
      ease: "back.out(1.7)",
    });

    // FAQ Timeline
    const faqTl = gsap.timeline({
      scrollTrigger: {
        trigger: faqRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    const faqItems = gsap.utils.toArray(".faq-item");
    gsap.set(faqItems, { opacity: 0, x: -30 });
    faqTl.to(faqItems, {
      opacity: 1,
      x: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });

    // CTA Timeline
    const ctaTl = gsap.timeline({
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.set(".cta-section", { opacity: 0, y: 30 });
    ctaTl.to(".cta-section", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    });

    // Hover Effects - Services/What We Do
    const whatWeDoCardsHover = gsap.utils.toArray<Element>(
      ".what-we-do-card"
    ) as Element[];
    whatWeDoCardsHover.forEach((card: Element) => {
      const icon = card.querySelector(".text-cyan-400") as Element;
      const title = card.querySelector("h3") as Element;

      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.05,
          boxShadow: "0 25px 50px -12px rgba(0, 255, 255, 0.25)",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(icon, {
          rotation: 360,
          scale: 1.2,
          duration: 0.6,
          ease: "power2.inOut",
        });
        gsap.to(title, {
          color: "#00ffff",
          duration: 0.3,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          boxShadow: "none",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(icon, {
          rotation: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(title, {
          color: "#ffffff",
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    // Hover Effects - Capabilities
    const capabilityCardsHover = gsap.utils.toArray<Element>(
      ".capability-card"
    ) as Element[];
    capabilityCardsHover.forEach((card: Element) => {
      const iconContainer = card.querySelector(".inline-block") as Element;
      const title = card.querySelector("h3") as Element;

      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -10,
          boxShadow: "0 20px 40px -10px rgba(0, 255, 255, 0.2)",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(iconContainer, {
          scale: 1.1,
          rotation: 180,
          duration: 0.4,
          ease: "power2.inOut",
        });
        gsap.to(title, {
          color: "#00ffff",
          duration: 0.3,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          boxShadow: "none",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(iconContainer, {
          scale: 1,
          rotation: 0,
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to(title, {
          color: "#ffffff",
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    // Hover Effects - Why Choose
    const whyChooseCardsHover = gsap.utils.toArray(
      ".why-choose-card"
    ) as Element[];
    whyChooseCardsHover.forEach((card: Element) => {
      const iconContainer = card.querySelector(".inline-block") as Element;
      const title = card.querySelector("h3") as Element;

      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -10,
          boxShadow: "0 20px 40px -10px rgba(0, 255, 255, 0.2)",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(iconContainer, {
          scale: 1.1,
          rotation: 180,
          duration: 0.4,
          ease: "power2.inOut",
        });
        gsap.to(title, {
          color: "#00ffff",
          duration: 0.3,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          boxShadow: "none",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(iconContainer, {
          scale: 1,
          rotation: 0,
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to(title, {
          color: "#ffffff",
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    // Hover Effects - Testimonials
    const testimonialCardsHover = gsap.utils.toArray(
      ".testimonial-card"
    ) as Element[];
    testimonialCardsHover.forEach((card: Element) => {
      const avatar = card.querySelector(".rounded-full") as Element;
      const title = card.querySelector(".text-white") as Element;

      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(avatar, {
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(title, {
          color: "#00ffff",
          duration: 0.3,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(avatar, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(title, {
          color: "#ffffff",
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    // Hover Effects - Use Cases
    const useCaseCardsHover = gsap.utils.toArray<Element>(
      ".use-case-card"
    ) as Element[];
    useCaseCardsHover.forEach((card: Element) => {
      const icon = card.querySelector("svg") as Element;
      const title = card.querySelector("h3") as Element;

      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.05,
          boxShadow: "0 25px 50px -12px rgba(0, 255, 255, 0.25)",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(icon, {
          rotation: 360,
          scale: 1.2,
          duration: 0.6,
          ease: "power2.inOut",
        });
        gsap.to(title, {
          color: "#00ffff",
          duration: 0.3,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          boxShadow: "none",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(icon, {
          rotation: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(title, {
          color: "#ffffff",
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    // Mobile responsiveness: Disable hovers on touch devices
    const isMobile = () => window.innerWidth < 768;
    if (!isMobile()) {
      // Hovers already added
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [loading]);

  const parallaxStyle = {
    transform: `translate3d(${mousePosition.x * 15}px, ${
      mousePosition.y * 15
    }px, 0)`,
    transition: "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
  };

  const scrollParallax = (speed: number) => ({
    transform: `translateY(${scrollY * speed}px)`,
  });

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-[#0F172B] overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <GlobeWithSatellite />
          </div>
        </div>

        <div
          className="max-w-[1500px] mx-auto text-center relative z-10"
          style={parallaxStyle}
        >
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-cyan-400 text-sm font-medium">
              End-to-End Satellite Solutions
            </span>
          </div>

          <h1
            ref={heroTitleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
          >
            {splitText("Comprehensive Satellite Ecosystem", "hero-letter")}
            <br />
            <span ref={gradientSpanRef} className="relative inline-block mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-pulse">
                From Design to Intelligence
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 blur-2xl -z-10" />
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Full-spectrum satellite services: custom manufacturing & assembly of
            satellites/ground stations, AI analytics software, real-time 3D
            visualization, and geospatial intelligence. Empower operations with
            precise hardware, innovative software, and integrated solutions for
            mission-critical industries.
          </p>

          <div
            ref={heroStatsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {[
              {
                value: <span className="hero-stat-value">500+</span>,
                label: "Enterprise Projects",
                icon: <Layers className="hero-stat-icon" />,
                color: "from-cyan-400 to-blue-500",
              },
              {
                value: <span className="hero-stat-value">15+</span>,
                label: "Countries Covered",
                icon: <Globe2 className="hero-stat-icon" />,
                color: "from-blue-500 to-purple-500",
              },
              {
                value: <span className="hero-stat-value">99.9%</span>,
                label: "Data Accuracy",
                icon: <Award className="hero-stat-icon" />,
                color: "from-purple-500 to-pink-500",
              },
              {
                value: <span className="hero-stat-value">24/7</span>,
                label: "Expert Support",
                icon: <Users className="hero-stat-icon" />,
                color: "from-pink-500 to-cyan-400",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="group bg-slate-800/40 backdrop-blur-md p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
              >
                <div className="text-cyan-400 mb-3 flex justify-center transform group-hover:scale-110 transition-transform">
                  <div
                    className={`p-3 rounded-full bg-gradient-to-br ${stat.color} bg-opacity-10`}
                  >
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-cyan-400 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section
        ref={whatWeDoRef}
        className="relative z-10 py-20 px-4 bg-gradient-to-b from-slate-900/50 via-slate-800/30 to-transparent md:py-32"
      >
        <div className="max-w-[1500px] mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-6xl font-bold text-white mb-6">
              What We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Do
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              We are a vertically integrated satellite solutions provider,
              offering everything from hardware manufacturing to advanced
              software analytics and geospatial intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {[
              {
                icon: Wrench,
                title: "Hardware Manufacturing",
                description:
                  "We design, manufacture, and assemble custom satellites and ground stations in our state-of-the-art facilities. From small CubeSats to large constellation deployments, we deliver precision-engineered hardware tailored to your mission requirements.",
                highlights: [
                  "ISO 9001 certified cleanroom facilities",
                  "In-house component fabrication",
                  "Thermal vacuum testing chambers",
                  "Vibration and shock testing",
                  "Custom payload integration",
                ],
              },
              {
                icon: Code2,
                title: "Software & Analytics",
                description:
                  "Our AI-powered software platform processes vast amounts of satellite data in real-time, providing actionable insights through advanced analytics, machine learning models, and intuitive visualization tools.",
                highlights: [
                  "Real-time data processing pipelines",
                  "Custom ML model development",
                  "3D terrain visualization engine",
                  "Automated anomaly detection",
                  "API-first architecture",
                ],
              },
              {
                icon: Globe2,
                title: "Geospatial Intelligence",
                description:
                  "Transform raw satellite imagery into strategic intelligence with our comprehensive geospatial analysis services. We provide multi-spectral analysis, change detection, and predictive modeling for critical decision-making.",
                highlights: [
                  "Multi-source data fusion",
                  "Temporal analysis capabilities",
                  "Object recognition & classification",
                  "Automated report generation",
                  "Secure data delivery",
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="what-we-do-card bg-slate-800/40 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="mb-6">
                  <div className="inline-block p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
                    <service.icon className="w-12 h-12 text-cyan-400" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-300 text-sm"
                    >
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section
        ref={processRef}
        className="relative z-10 py-20 px-4 bg-slate-900/50 md:py-32"
      >
        <div className="max-w-[1500px] mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-6xl font-bold text-white mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Process
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              From initial consultation to ongoing support, we guide you through
              every step of your satellite mission with proven methodologies and
              expert execution.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 hidden md:block" />

            {[
              {
                phase: "Phase 1",
                title: "Discovery & Design",
                icon: Target,
                description:
                  "We begin with comprehensive requirements gathering and feasibility analysis. Our team works closely with you to understand your mission objectives, constraints, and success criteria.",
                deliverables: [
                  "Mission requirements document",
                  "Technical feasibility study",
                  "Preliminary design review",
                  "Cost and timeline estimates",
                ],
              },
              {
                phase: "Phase 2",
                title: "Engineering & Development",
                icon: Cpu,
                description:
                  "Our engineers create detailed designs and begin fabrication. This phase includes component selection, subsystem integration planning, and software architecture design.",
                deliverables: [
                  "Detailed design specifications",
                  "Component procurement plan",
                  "Integration test procedures",
                  "Software development roadmap",
                ],
              },
              {
                phase: "Phase 3",
                title: "Manufacturing & Assembly",
                icon: Settings,
                description:
                  "Precision manufacturing in our cleanroom facilities, followed by careful assembly and integration of all satellite subsystems and ground station components.",
                deliverables: [
                  "Assembled satellite/ground station",
                  "Component traceability documentation",
                  "Assembly quality reports",
                  "Pre-integration test results",
                ],
              },
              {
                phase: "Phase 4",
                title: "Testing & Validation",
                icon: Microscope,
                description:
                  "Rigorous testing protocols ensure mission readiness. We conduct environmental testing, functional verification, and end-to-end system validation.",
                deliverables: [
                  "Environmental test reports",
                  "Functional verification results",
                  "Performance characterization",
                  "Flight readiness review",
                ],
              },
              {
                phase: "Phase 5",
                title: "Deployment & Integration",
                icon: Rocket,
                description:
                  "We manage launch coordination, on-orbit commissioning, and software platform deployment. Our team ensures smooth integration with your existing systems.",
                deliverables: [
                  "Launch integration support",
                  "Commissioning procedures",
                  "Software platform access",
                  "Operations training",
                ],
              },
              {
                phase: "Phase 6",
                title: "Operations & Support",
                icon: Users,
                description:
                  "Ongoing mission support with 24/7 monitoring, software updates, data analytics services, and continuous optimization of your satellite operations.",
                deliverables: [
                  "24/7 operations center access",
                  "Regular software updates",
                  "Analytics and reporting",
                  "Technical support services",
                ],
              },
            ].map((step, index) => (
              <div
                key={index}
                className={`relative mb-16 md:mb-20 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:ml-auto md:text-right" : ""
                  }`}
                >
                  <div
                    className={`bg-slate-800/40 backdrop-blur-md p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-4 mb-6 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
                        <step.icon className="w-8 h-8 text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-cyan-400 text-sm font-semibold mb-1">
                          {step.phase}
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-cyan-400 mb-3">
                        Key Deliverables:
                      </div>
                      {step.deliverables.map((deliverable, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-gray-300 text-sm"
                        >
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span>{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute left-1/2 top-8 w-8 h-8 bg-cyan-500 rounded-full border-4 border-[#0F172B] -translate-x-1/2 hidden md:block">
                  <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-75" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section
        ref={capabilitiesRef}
        className="relative z-10 py-20 px-4 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent md:py-32"
      >
        <div className="max-w-[1500px] mx-auto">
          <div
            className="text-center mb-16 md:mb-20"
            style={scrollParallax(-0.05)}
          >
            <h2 className="text-3xl md:text-6xl font-bold text-white mb-6">
              Powerful{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Capabilities
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              End-to-end solutions blending hardware manufacturing, software
              innovation, and geospatial intelligence for top performance and
              reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Satellite,
                title: "Satellite Manufacturing & Assembly",
                description:
                  "Custom satellite design, manufacturing, and assembly with advanced components. Tailored for smallsats to constellations.",
                features: [
                  "Cleanroom assembly",
                  "Component integration",
                  "Quality assurance testing",
                ],
              },
              {
                icon: Radio,
                title: "Ground Station Manufacturing & Deployment",
                description:
                  "Complete ground station lifecycle: antenna design, manufacturing, and deployment. Ensures reliable data/command operations.",
                features: [
                  "Modular designs",
                  "RF engineering",
                  "Site optimization",
                ],
              },
              {
                icon: Map,
                title: "3D Terrain Modeling",
                description:
                  "Photorealistic 3D models from imagery with cm-level precision for engineering, planning, and simulation.",
                features: [
                  "LiDAR integration",
                  "Point cloud processing",
                  "Mesh generation",
                ],
              },
              {
                icon: TrendingUp,
                title: "Predictive Analytics",
                description:
                  "ML models on billions of points for trend forecasting, pattern detection, and outcome prediction in satellite/ground ops.",
                features: [
                  "Time-series analysis",
                  "Anomaly detection",
                  "Risk assessment",
                ],
              },
              {
                icon: Database,
                title: "Big Data Processing",
                description:
                  "Process petabytes of geospatial/telemetry data in minutes with auto-scaling distributed computing for hardware-software synergy.",
                features: [
                  "Parallel processing",
                  "Cloud-native",
                  "Auto-scaling",
                ],
              },
              {
                icon: Workflow,
                title: "Integrated Hardware-Software Services",
                description:
                  "Seamless custom hardware-software integration with full support from prototype to deployment for optimal satellite performance.",
                features: [
                  "Custom integrations",
                  "Firmware development",
                  "Lifecycle management",
                ],
              },
            ].map((capability, index) => (
              <div
                key={index}
                className="capability-card group bg-slate-800/30 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
                style={scrollParallax(0.02 * (index % 2 === 0 ? 1 : -1))}
              >
                <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <div className="inline-block p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
                    <capability.icon className="w-10 h-10 text-cyan-400" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {capability.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm md:text-base">
                  {capability.description}
                </p>
                <ul className="space-y-2">
                  {capability.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-gray-300 text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section (FIXED: Renamed class to tech-card, now animated) */}
      <section
        ref={techRef}
        className="relative z-10 py-20 px-4 bg-slate-900/50 md:py-32"
      >
        <div className="max-w-[1500px] mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-6xl font-bold text-white mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Technology
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Cutting-edge hardware components and software technologies power
              our integrated satellite solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="tech-card bg-slate-800/40 backdrop-blur-md p-6 md:p-10 rounded-2xl border border-cyan-500/20">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
                  <Cpu className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-white">
                  Hardware Technologies
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {[
                  {
                    name: "Advanced CMOS Sensors",
                    spec: "Sub-meter resolution",
                  },
                  { name: "High-Gain Antennas", spec: "X/Ka-band capable" },
                  { name: "Radiation-Hardened CPUs", spec: "Space-qualified" },
                  { name: "Solar Arrays", spec: "28% efficiency" },
                  { name: "Reaction Wheels", spec: "Precision pointing" },
                  { name: "SDR Transceivers", spec: "Software-defined" },
                ].map((tech, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-slate-700/30 rounded-xl border border-cyan-500/10"
                  >
                    <div className="text-white font-semibold mb-1">
                      {tech.name}
                    </div>
                    <div className="text-cyan-400 text-sm">{tech.spec}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="tech-card bg-slate-800/40 backdrop-blur-md p-6 md:p-10 rounded-2xl border border-cyan-500/20">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                  <Cloud className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-white">
                  Software Stack
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {[
                  { name: "TensorFlow & PyTorch", spec: "ML/AI frameworks" },
                  { name: "Kubernetes", spec: "Container orchestration" },
                  { name: "Apache Kafka", spec: "Real-time streaming" },
                  { name: "PostGIS", spec: "Geospatial database" },
                  { name: "Three.js / WebGL", spec: "3D visualization" },
                  { name: "Python & C++", spec: "Core languages" },
                ].map((tech, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-slate-700/30 rounded-xl border border-blue-500/10"
                  >
                    <div className="text-white font-semibold mb-1">
                      {tech.name}
                    </div>
                    <div className="text-blue-400 text-sm">{tech.spec}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyChooseRef} className="relative z-10 py-20 px-4 md:py-32">
        <div className="max-w-[1500px] mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-6xl font-bold text-white mb-6">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Us
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              We combine decades of aerospace expertise with cutting-edge
              technology to deliver unmatched satellite solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "Rapid Deployment",
                description:
                  "From design to orbit in months, not years. Our streamlined processes accelerate your mission timeline.",
              },
              {
                icon: Shield,
                title: "Mission Assurance",
                description:
                  "Rigorous quality control and redundancy planning ensure 99.9% uptime for critical operations.",
              },
              {
                icon: Clock,
                title: "24/7 Support",
                description:
                  "Round-the-clock operations center and technical support team ready to assist anytime, anywhere.",
              },
              {
                icon: GitBranch,
                title: "Flexible Integration",
                description:
                  "API-first platform seamlessly integrates with your existing systems and workflows.",
              },
            ].map((reason, index) => (
              <div
                key={index}
                className="why-choose-card bg-slate-800/40 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
              >
                <div className="mb-6">
                  <div className="inline-block p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
                    <reason.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section
        ref={testimonialsRef}
        className="relative z-10 py-20 px-4 bg-slate-900/50 md:py-32"
      >
        <div className="max-w-[1500px] mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-6xl font-bold text-white mb-6">
              Trusted by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Industry Leaders
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              See what our clients say about working with us on mission-critical
              satellite projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                quote:
                  "Their integrated approach to satellite manufacturing and software analytics has transformed our intelligence gathering capabilities. The hardware quality is exceptional and the AI insights are game-changing.",
                author: "Col. Sarah Mitchell",
                role: "Director of Space Operations",
                company: "Defense Systems International",
                rating: 5,
              },
              {
                quote:
                  "We've worked with multiple satellite providers, but none match the end-to-end service and technical expertise we receive here. From ground station deployment to real-time data processing, everything just works.",
                author: "Dr. James Chen",
                role: "Chief Technology Officer",
                company: "Global Agricultural Solutions",
                rating: 5,
              },
              {
                quote:
                  "The 3D terrain modeling and predictive analytics have given us unprecedented visibility into infrastructure planning. Their team's responsiveness and deep domain knowledge make them an invaluable partner.",
                author: "Maria Rodriguez",
                role: "Head of Smart City Initiatives",
                company: "Metropolitan Urban Planning",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card bg-slate-800/40 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-cyan-400 text-cyan-400"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic text-sm md:text-base">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold">
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.role}
                    </div>
                    <div className="text-cyan-400 text-sm">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section ref={useCasesRef} className="relative z-10 py-20 px-4 md:py-32">
        <div className="max-w-[1500px] mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-6xl font-bold text-white mb-6">
              Trusted Across{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Industries
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Leading organizations rely on our hardware, software, and
              intelligence platform for mission-critical applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                industry: "Defense & Security",
                icon: Shield,
                use: "Custom satellites, ground stations, real-time intel for threat assessment and strategy.",
                metrics: [
                  "95% threat detection",
                  "Real-time updates",
                  "Classified support",
                ],
                details:
                  "Secure communication links, encrypted data transmission, and multi-spectrum surveillance capabilities for national security operations.",
              },
              {
                industry: "Agriculture",
                icon: TrendingUp,
                use: "Satellite assembly, ground deployment, AI analytics for crop monitoring and yield prediction.",
                metrics: [
                  "30% yield increase",
                  "Water optimization",
                  "Pest detection",
                ],
                details:
                  "NDVI analysis, soil moisture monitoring, and precision agriculture recommendations for sustainable farming practices.",
              },
              {
                industry: "Urban Planning",
                icon: Building2,
                use: "Hardware-software integration for smart cities, infrastructure, and population mapping.",
                metrics: [
                  "40% cost reduction",
                  "Traffic optimization",
                  "Zoning automation",
                ],
                details:
                  "3D city modeling, infrastructure monitoring, and growth prediction for efficient urban development and resource allocation.",
              },
              {
                industry: "Environmental",
                icon: Globe2,
                use: "Satellite/ground manufacturing for climate monitoring, deforestation tracking, disaster response.",
                metrics: [
                  "Real-time alerts",
                  "Historical analysis",
                  "Predictive models",
                ],
                details:
                  "Carbon sequestration monitoring, wildfire detection, flood prediction, and ecosystem health assessment for environmental protection.",
              },
            ].map((useCase, index) => (
              <div
                key={index}
                className="use-case-card group bg-slate-800/40 backdrop-blur-md p-6 md:p-10 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
                      <useCase.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {useCase.industry}
                    </h3>
                  </div>
                  <ArrowRight className="w-6 h-6 text-cyan-400 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all" />
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed text-sm md:text-base">
                  {useCase.use}
                </p>
                <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                  {useCase.details}
                </p>
                <div className="flex flex-wrap gap-3">
                  {useCase.metrics.map((metric, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities & Certifications Section */}
      <section
        ref={facilitiesRef}
        className="relative z-10 py-20 px-4 bg-slate-900/50 md:py-32"
      >
        <div className="max-w-[1500px] mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-6xl font-bold text-white mb-6">
              World-Class{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Facilities
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              State-of-the-art manufacturing facilities and industry-leading
              certifications ensure the highest quality standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
            <div className="facility-card bg-slate-800/40 backdrop-blur-md p-6 md:p-10 rounded-2xl border border-cyan-500/20">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                Our Facilities
              </h3>
              <div className="space-y-4">
                {[
                  { name: "ISO 7 Cleanroom", area: "5,000 sq ft" },
                  { name: "Thermal Vacuum Chamber", spec: "-180°C to +150°C" },
                  {
                    name: "Vibration Test Lab",
                    spec: "Up to 50g acceleration",
                  },
                  { name: "RF Anechoic Chamber", spec: "1 GHz - 40 GHz" },
                  { name: "Integration & Test Bay", area: "10,000 sq ft" },
                  { name: "Mission Control Center", spec: "24/7 operations" },
                ].map((facility, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 bg-slate-700/30 rounded-xl border border-cyan-500/10"
                  >
                    <span className="text-white font-semibold">
                      {facility.name}
                    </span>
                    <span className="text-cyan-400 text-sm">
                      {facility.area || facility.spec}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="facility-card bg-slate-800/40 backdrop-blur-md p-6 md:p-10 rounded-2xl border border-cyan-500/20">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                Certifications & Standards
              </h3>
              <div className="space-y-4">
                {[
                  { name: "ISO 9001:2015", type: "Quality Management" },
                  { name: "AS9100D", type: "Aerospace Quality" },
                  { name: "ITAR Registered", type: "Export Compliance" },
                  { name: "CMMC Level 3", type: "Cybersecurity" },
                  { name: "ECSS Standards", type: "European Space" },
                  { name: "NASA EEE-INST-002", type: "Component Selection" },
                ].map((cert, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 bg-slate-700/30 rounded-xl border border-cyan-500/10"
                  >
                    <span className="text-white font-semibold">
                      {cert.name}
                    </span>
                    <span className="text-cyan-400 text-sm">{cert.type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-6 md:p-8 backdrop-blur-md text-center">
            <p className="text-gray-300 text-lg md:text-base">
              <span className="text-cyan-400 font-semibold">
                100% compliance
              </span>{" "}
              with international aerospace standards and regulations. Our
              quality management system ensures traceability and reliability at
              every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Stats & Achievements Section */}
      <section
        ref={achievementsRef}
        className="relative z-10 py-20 px-4 md:py-32"
      >
        <div className="max-w-[1500px] mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-6xl font-bold text-white mb-6">
              Proven{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Track Record
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Numbers that demonstrate our commitment to excellence and customer
              success.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                value: <span className="achievement-stat-value">250</span>,
                label: "Satellites Manufactured",
                icon: Satellite,
              },
              {
                value: <span className="achievement-stat-value">180</span>,
                label: "Ground Stations Deployed",
                icon: Radio,
              },
              {
                value: <span className="achievement-stat-value">5</span>,
                label: "Data Processed Monthly",
                icon: Database,
              },
              {
                value: <span className="achievement-stat-value">98</span>,
                label: "Mission Success Rate",
                icon: Target,
              },
              {
                value: <span className="achievement-stat-value">15</span>,
                label: "Years of Experience",
                icon: Clock,
              },
              {
                value: <span className="achievement-stat-value">200</span>,
                label: "Expert Engineers",
                icon: Users,
              },
              {
                value: <span className="achievement-stat-value">45</span>,
                label: "Countries Served",
                icon: Globe2,
              },
              {
                value: <span className="achievement-stat-value">10</span>,
                label: "Avg. Latency",
                icon: Zap,
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="achievement-card bg-slate-800/40 backdrop-blur-md p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                    <stat.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}+
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        ref={faqRef}
        className="relative z-10 py-20 px-4 bg-slate-900/50 md:py-32"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Questions
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400">
              Get answers to common questions about our services and
              capabilities.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What types of satellites can you manufacture?",
                a: "We manufacture a wide range of satellites from 1U CubeSats to large LEO satellites weighing up to 500kg. Our capabilities include Earth observation, communications, scientific research, and constellation deployments.",
              },
              {
                q: "How long does a typical satellite project take?",
                a: "Timeline varies by complexity, but typical projects range from 12-24 months from contract signing to launch readiness. We offer expedited programs for urgent requirements with delivery as fast as 8 months.",
              },
              {
                q: "Do you provide ongoing operations support?",
                a: "Yes, we offer comprehensive operations support including 24/7 mission control, software updates, data processing services, and hardware maintenance. Support packages are customizable based on your needs.",
              },
              {
                q: "Can you integrate with our existing systems?",
                a: "Absolutely. Our API-first platform is designed for seamless integration with existing workflows, databases, and visualization tools. We provide comprehensive documentation and integration support.",
              },
              {
                q: "What security measures do you have in place?",
                a: "We maintain CMMC Level 3 certification, ITAR compliance, and employ end-to-end encryption for all data transmission. Our facilities have controlled access and we follow strict cybersecurity protocols.",
              },
              {
                q: "Do you offer ground station as a service?",
                a: "Yes, we provide ground station as a service (GSaaS) options including dedicated and shared antenna time, data downlink services, and command & control capabilities through our global network.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="faq-item bg-slate-800/40 backdrop-blur-md p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                  {faq.q}
                </h3>
                <p className="text-gray-400 leading-relaxed pl-8 text-sm md:text-base">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="relative z-10 py-20 px-4 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="cta-section bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-2 border-cyan-500/30 rounded-3xl p-8 md:p-12 backdrop-blur-md relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Satellite Operations?
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-10 max-w-2xl mx-auto">
                Join hundreds of organizations leveraging our end-to-end
                hardware, software, and intelligence solutions. Start your free
                30-day trial today—no credit card required.
              </p>
              <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
                <button className="group cursor-pointer md:px-12 md:py-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/50 flex items-center space-x-3">
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="md:px-12 md:py-6 px-6 py-3 cursor-pointer bg-slate-800/50 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
