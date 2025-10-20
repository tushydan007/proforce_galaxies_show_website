import {
  Award,
  Users,
  Zap,
  Satellite,
  Building2,
  Database,
  Globe,
  Rocket,
  Shield,
  Target,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Simple LoadingScreen component
const LoadingScreen = () => (
  <div className="fixed inset-0 bg-[#0F172B] flex items-center justify-center z-50">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-cyan-400 text-lg">Loading Experience...</p>
    </div>
  </div>
);

// Three.js Scene Component
const ParallaxScene = () => {
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    satellites: {
      mesh: THREE.Mesh;
      angle: number;
      radius: number;
      speed: number;
    }[];
    stars: THREE.Mesh[];
    earth: THREE.Mesh;
    animationId: number;
  } | null>(null);
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    if (!THREE) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // Capture the current mount element so the cleanup uses the same node reference
    const currentMount = mountRef.current;
    if (currentMount) {
      currentMount.appendChild(renderer.domElement);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x888888, 0.6);
    scene.add(ambientLight);

    const spotlight1 = new THREE.SpotLight(0x00ffff, 3);
    spotlight1.position.set(10, 20, 10);
    spotlight1.angle = Math.PI / 6;
    spotlight1.penumbra = 0.3;
    scene.add(spotlight1);

    const spotlight2 = new THREE.SpotLight(0x0088ff, 2.5);
    spotlight2.position.set(-10, -20, 10);
    spotlight2.angle = Math.PI / 6;
    spotlight2.penumbra = 0.3;
    scene.add(spotlight2);

    // Create stars
    const starGeometry = new THREE.SphereGeometry(0.08, 8, 8);
    const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const stars: THREE.Mesh[] = [];
    for (let i = 0; i < 500; i++) {
      const star = new THREE.Mesh(starGeometry, starMaterial);
      star.position.set(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 60
      );
      scene.add(star);
      stars.push(star);
    }

    // Create Earth
    const earthGeometry = new THREE.SphereGeometry(5, 32, 32);
    const earthMaterial = new THREE.MeshPhongMaterial({
      color: 0x2194ce,
      emissive: 0x0a1a2e,
      shininess: 100,
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earth.position.set(0, 0, -8);
    scene.add(earth);

    // Create satellites
    const satellites: {
      mesh: THREE.Mesh;
      angle: number;
      radius: number;
      speed: number;
    }[] = [];
    const satelliteGeometry = new THREE.BoxGeometry(0.4, 0.4, 0.8);
    const satelliteMaterial = new THREE.MeshPhongMaterial({
      color: 0x00ffff,
      emissive: 0x003333,
    });
    for (let i = 0; i < 5; i++) {
      const satellite = new THREE.Mesh(satelliteGeometry, satelliteMaterial);
      const angle = (i / 5) * Math.PI * 2;
      const radius = 8;
      satellite.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius,
        -8
      );
      scene.add(satellite);
      satellites.push({
        mesh: satellite,
        angle,
        radius,
        speed: 0.002 + Math.random() * 0.003,
      });
    }

    camera.position.z = 12;

    // Mouse parallax effect
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Scroll effect
    const handleScroll = () => {
      const scrollY = window.scrollY;
      camera.position.y = scrollY * 0.002;
      camera.rotation.x = scrollY * 0.0001;
    };
    window.addEventListener("scroll", handleScroll);

    // Set up sceneRef early with initial animationId
    sceneRef.current = {
      scene,
      camera,
      renderer,
      satellites,
      stars,
      earth,
      animationId: 0,
    };

    // Animation
    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      sceneRef.current!.animationId = animationId;

      // Rotate earth
      earth.rotation.y += 0.005;

      // Animate satellites
      satellites.forEach((sat) => {
        sat.angle += sat.speed;
        sat.mesh.position.x = Math.cos(sat.angle) * sat.radius;
        sat.mesh.position.y = Math.sin(sat.angle) * sat.radius;
        sat.mesh.rotation.y += 0.02;
      });

      // Parallax effect
      camera.position.x += (mouseX * 3 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 3 - camera.position.y) * 0.05;

      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current || !sceneRef.current) return;
      camera.aspect =
        mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight
      );
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId);
        if (currentMount && renderer.domElement) {
          currentMount.removeChild(renderer.domElement);
        }
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 -z-10" />;
};

const AboutPage = () => {
  const [loading, setLoading] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const gradientSpanRef = useRef<HTMLSpanElement>(null);
  const heroParagraphRef = useRef<HTMLParagraphElement>(null);
  const heroButtonsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);

  const splitText = (text: string, className: string = "inline-block") =>
    text.split("").map((char, index) => (
      <span key={index} className={`${className}`}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
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

    const letters = gsap.utils.toArray<Element>(".hero-letter") as Element[];
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

    if (heroParagraphRef.current) {
      gsap.set(heroParagraphRef.current, { opacity: 0, y: 30 });
      heroTl.to(
        heroParagraphRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5"
      );
    }

    if (heroButtonsRef.current) {
      gsap.set(heroButtonsRef.current, { opacity: 0, scale: 0.9 });
      heroTl.to(
        heroButtonsRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      );
    }

    // Vision & Mission Timeline
    const visionMissionTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".vision-mission-grid",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.set(".vision-mission-grid > div", { opacity: 0, y: 30 });
    visionMissionTl.to(".vision-mission-grid > div:nth-child(1)", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    });
    visionMissionTl.to(
      ".vision-mission-grid > div:nth-child(2)",
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.4"
    );

    // Services Timeline
    const servicesTl = gsap.timeline({
      scrollTrigger: {
        trigger: servicesRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    const servicesCards = gsap.utils.toArray<Element>(
      ".service-card"
    ) as Element[];
    gsap.set(servicesCards, { opacity: 0, y: 50, scale: 0.9 });
    servicesTl.to(servicesCards, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      stagger: 0.1,
      ease: "back.out(1.7)",
    });

    // Services Letters Timeline
    const servicesLettersTl = gsap.timeline({
      scrollTrigger: {
        trigger: servicesRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    const serviceLetters = gsap.utils.toArray<Element>(
      ".service-letter"
    ) as Element[];
    gsap.set(serviceLetters, { opacity: 0, y: 20 });
    servicesLettersTl.to(serviceLetters, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: {
        amount: 0.3,
        from: "center",
        grid: "auto",
        each: 0.02,
      },
      ease: "power2.out",
    });

    // Services Hover Effects
    const serviceCardsHover = gsap.utils.toArray<Element>(
      ".service-card"
    ) as Element[];
    serviceCardsHover.forEach((card: Element) => {
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

    // Stats Timeline
    const statsTl = gsap.timeline({
      scrollTrigger: {
        trigger: statsRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    const statValues = gsap.utils.toArray<Element>(".stat-value") as Element[];
    const statIcons = gsap.utils.toArray<Element>(".stat-icon") as Element[];
    gsap.set(statValues, { opacity: 0, y: 20 });
    gsap.set(statIcons, { opacity: 0, scale: 0 });

    statsTl.to(statIcons, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.2,
      ease: "back.out(1.7)",
    });
    statsTl.to(
      statValues,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        onStart: function () {
          statValues.forEach((el) => {
            const finalValue = parseInt(
              (el as Element).textContent?.slice(0, -1) || "0"
            );
            // animate the number using a proxy object and update the element in onUpdate
            const num = { val: 0 };
            gsap.to(num, {
              val: finalValue,
              duration: 1.5,
              ease: "power2.out",
              snap: { val: 1 },
              onUpdate: function () {
                (el as Element).textContent = Math.round(num.val) + "+";
              },
            });
          });
        },
      },
      "-=0.5"
    );

    // Values Timeline
    const valuesTl = gsap.timeline({
      scrollTrigger: {
        trigger: valuesRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    const valueCards = gsap.utils.toArray<Element>(".value-card") as Element[];
    gsap.set(valueCards, { opacity: 0, y: 40, rotationX: 15 });
    valuesTl.to(valueCards, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });

    // Values Hover Effects
    const valueCardsHover = gsap.utils.toArray<Element>(
      ".value-card"
    ) as Element[];
    valueCardsHover.forEach((card: Element) => {
      const iconContainer = card.querySelector(".inline-flex") as Element;
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

    // Vision & Mission Hover Effects
    const visionCards = gsap.utils.toArray<Element>(
      ".vision-mission-grid > div"
    ) as Element[];
    visionCards.forEach((card: Element) => {
      const icon = card.querySelector("svg") as Element;
      const title = card.querySelector("h2") as Element;

      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(icon, {
          scale: 1.2,
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
        gsap.to(icon, {
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

    // Story Timeline
    const storyTl = gsap.timeline({
      scrollTrigger: {
        trigger: storyRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    const storyParagraphs = gsap.utils.toArray<Element>(
      ".story-paragraph"
    ) as Element[];
    gsap.set(storyParagraphs, { opacity: 0, x: -30 });
    storyTl.to(storyParagraphs, {
      opacity: 1,
      x: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
    });

    const journeyBox = ".journey-box";
    gsap.set(journeyBox, { opacity: 0, scale: 0.8, rotation: -5 });
    storyTl.to(
      journeyBox,
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
      },
      "-=0.5"
    );

    // CTA Timeline
    const ctaTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cta-section",
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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [loading]);

  if (loading) {
    return <LoadingScreen />;
  }

  const services = [
    {
      icon: <Satellite className="w-12 h-12" />,
      title: "Satellite Manufacturing",
      description:
        "End-to-end satellite design, manufacturing, assembly, integration and testing (MAIT) of optical satellites, SAR satellites, and CubeSats.",
      features: [
        "Optical Satellites",
        "SAR Satellites",
        "CubeSats",
        "Custom Solutions",
      ],
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Ground Station Solutions",
      description:
        "Complete ground station manufacturing, assembly, and integration for satellite communication and data reception.",
      features: [
        "Equipment Manufacturing",
        "Installation & Integration",
        "Maintenance Support",
        "Custom Configurations",
      ],
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Satellite Data as a Service",
      description:
        "Comprehensive satellite data solutions providing real-time imagery and analytics to end-users across industries.",
      features: [
        "Real-time Imagery",
        "Data Analytics",
        "API Access",
        "Custom Data Feeds",
      ],
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Integrated Surveillance",
      description:
        "Multi-dimensional surveillance combining satellite imagery, drone feeds, and ground-based CCTV for complete situational awareness.",
      features: [
        "Space-based Imaging",
        "Aerial Drone Feed",
        "Ground CCTV Integration",
        "Real-time Monitoring",
      ],
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "Space Operations",
      description:
        "Full-spectrum space operations covering upstream, midstream, and downstream activities for mission success.",
      features: [
        "Mission Planning",
        "Launch Coordination",
        "Operations Management",
        "Post-Launch Support",
      ],
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "COTM Solutions",
      description:
        "Advanced Communications-on-the-Move internet solutions for mobile and remote operations requiring constant connectivity.",
      features: [
        "Mobile Connectivity",
        "High-Speed Internet",
        "Secure Communications",
        "24/7 Availability",
      ],
    },
  ];

  const stats = [
    {
      icon: <Award className="stat-icon" />,
      value: <span className="stat-value">50+</span>,
      label: "Industry Awards",
    },
    {
      icon: <Users className="stat-icon" />,
      value: <span className="stat-value">200+</span>,
      label: "Expert Team Members",
    },
    {
      icon: <Globe className="stat-icon" />,
      value: <span className="stat-value">50+</span>,
      label: "Countries Served",
    },
    {
      icon: <Rocket className="stat-icon" />,
      value: <span className="stat-value">100+</span>,
      label: "Successful Missions",
    },
  ];

  const values = [
    {
      icon: <Zap />,
      title: "Innovation",
      description:
        "Pushing the boundaries of space technology with cutting-edge research and development.",
    },
    {
      icon: <Award />,
      title: "Excellence",
      description:
        "Delivering world-class quality in every satellite, ground station, and data solution we provide.",
    },
    {
      icon: <Users />,
      title: "Collaboration",
      description:
        "Working closely with partners and clients to achieve extraordinary results together.",
    },
    {
      icon: <Target />,
      title: "Reliability",
      description:
        "Building trust through consistent performance and unwavering commitment to mission success.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F172B] relative overflow-hidden">
      <ParallaxScene />
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center pt-20 px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h1
            ref={heroTitleRef}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            {splitText("Shaping the Future of ", "hero-letter")}
            <span
              ref={gradientSpanRef}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
            >
              Space Technology
            </span>
          </h1>
          <p
            ref={heroParagraphRef}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            From satellite manufacturing to data services, we provide end-to-end
            space solutions that transform industries and connect the world.
          </p>
          <div
            ref={heroButtonsRef}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50">
              Explore Our Solutions
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-full transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="vision-mission-grid grid md:grid-cols-2 gap-8 mb-20">
          <div className="flex justify-center flex-col bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl p-8 md:p-12 border border-cyan-500/20 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <Zap className="w-10 h-10 text-cyan-400 mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Our Vision
              </h2>
            </div>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              To become the leading space and satellite technology solutions
              provider globally, enabling unprecedented access to space-based
              services and data.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-8 md:p-12 border border-blue-500/20 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <Target className="w-10 h-10 text-blue-400 mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Our Mission
              </h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              To revolutionize space technology through:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">▸</span>
                <span>
                  Engaging in upstream, midstream, and downstream space
                  operations
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">▸</span>
                <span>
                  Manufacturing, Assembly, Integration and testing of space
                  crafts including but not limited to satellites; Optical
                  satellites, Synthetic Aperture Radar (SAR) satellites,
                  Cudesats, Ground stations equipments
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">▸</span>
                <span>
                  SDaaS (Satellite Data as a Service): Provision of Satellite
                  data solutions to end-users
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">▸</span>
                <span>
                  Integrated surveillance solutions (Satellite Imagery Feed
                  (space), Drone, Imagery feed (Air), CCTV Imagery live feed
                  (Ground))
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">▸</span>
                <span>Provision of Coms-on-the-move internet solution</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Services Section */}
        <div ref={servicesRef} className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-cyan-400">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive space technology services tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group service-card bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 transition-all duration-300"
              >
                <div className="text-cyan-400 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {splitText(service.title, "service-letter")}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="mb-20">
          <div className="bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-3xl p-12 border border-cyan-500/20 backdrop-blur-sm">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/10 rounded-full mb-4 group-hover:bg-cyan-500/20 transition-all duration-300 text-cyan-400">
                    {stat.icon}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {stat.value}
                  </h3>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div ref={storyRef} className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-cyan-400">Journey</span>
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p className="story-paragraph">
                  Founded in 2015, Proforce Galaxies emerged with a bold vision
                  to democratize access to space technology and satellite
                  services. What began as a satellite data service provider has
                  evolved into a comprehensive space technology company.
                </p>
                <p className="story-paragraph">
                  Today, we stand at the forefront of the space industry,
                  offering end-to-end solutions from satellite manufacturing and
                  ground station assembly to advanced data services and
                  integrated surveillance systems.
                </p>
                <p className="story-paragraph">
                  Our journey has been marked by continuous innovation,
                  strategic partnerships, and an unwavering commitment to
                  excellence. We've successfully deployed numerous satellites,
                  established ground stations across continents, and delivered
                  critical data solutions to clients in over 50 countries.
                </p>
                <p className="story-paragraph">
                  As we look to the future, we remain dedicated to pushing the
                  boundaries of what's possible in space technology, making
                  satellite services more accessible, affordable, and impactful
                  for organizations worldwide.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="journey-box aspect-square bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl border border-cyan-500/30 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <Rocket className="w-32 h-32 text-cyan-400 mx-auto mb-6 animate-pulse" />
                  <p className="text-2xl font-bold text-white mb-2">
                    10+ Years
                  </p>
                  <p className="text-gray-300">of Space Innovation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div ref={valuesRef} className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Our <span className="text-cyan-400">Core Values</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="value-card bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 transition-all duration-300 text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full mb-6 transition-transform duration-300">
                  <div className="text-cyan-400">{value.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl p-12 md:p-16 border border-cyan-500/20 backdrop-blur-sm text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Launch Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join industry leaders who trust Proforce Galaxies for their space
              technology needs. Let's build the future together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50 text-lg">
                Get Started
              </button>
              <button className="px-10 py-5 bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-full transition-all duration-300 text-lg">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
