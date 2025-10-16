export interface Specification {
  label: string;
  value: string;
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export interface UseCase {
  title: string;
  description: string;
  emoji: string;
}

export interface Stats {
  uptime: string;
  users: string;
  countries: string;
  support: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  features: string[];
  price: string;
  category: string;
  imageUrl: string;
  codeName?: string;
  rating?: number;
  reviewCount?: number;
  specifications: Specification[];
  benefits: Benefit[];
  useCases: UseCase[];
  stats: Stats;
  testimonial: Testimonial;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Border Surveillance System",
    description:
      "Comprehensive border security and monitoring platform integrating satellite imagery, ground sensors, drones, and AI-powered analytics for real-time situational awareness and threat detection.",
    features: [
      "Satellite & Drone Surveillance Integration",
      "AI-Powered Intrusion Detection",
      "Thermal & Motion Sensor Support",
      "Command & Control Dashboard",
    ],
    price: "$479/month",
    category: "Defense & Security",
    imageUrl: "/border.png",
    codeName: "PF-BorderGuard",
    rating: 4.9,
    reviewCount: 2847,
    specifications: [
      { label: "Deployment", value: "Cloud-based / On-premise" },
      { label: "Updates", value: "Real-time / Continuous" },
      { label: "Support", value: "24/7 Military-Grade Support" },
      { label: "Integration", value: "NATO Standard APIs" },
      { label: "Scalability", value: "Multi-Border Coverage" },
      { label: "Security", value: "Military-Grade Encryption" },
    ],
    benefits: [
      {
        icon: "Shield",
        title: "Border Integrity",
        description:
          "Maintain sovereign borders with advanced perimeter detection and automated threat response systems.",
      },
      {
        icon: "Zap",
        title: "Instant Alert System",
        description:
          "Sub-second intrusion detection with automated classification of threats and immediate notification protocols.",
      },
      {
        icon: "Users",
        title: "Multi-Agency Coordination",
        description:
          "Seamless integration across military, customs, and law enforcement agencies with unified command interface.",
      },
      {
        icon: "TrendingUp",
        title: "Adaptive Intelligence",
        description:
          "Machine learning algorithms that improve detection accuracy over time and adapt to evolving threat patterns.",
      },
    ],
    useCases: [
      {
        title: "Border Intrusion Prevention",
        description:
          "Automated detection and tracking of unauthorized border crossings using thermal imaging, motion sensors, and AI pattern recognition with 99.7% accuracy rate.",
        emoji: "🛡️",
      },
      {
        title: "Contraband Detection",
        description:
          "Advanced sensor fusion technology identifies smuggling attempts and illegal trafficking routes through behavioral pattern analysis and anomaly detection.",
        emoji: "🔍",
      },
      {
        title: "Terrain Monitoring",
        description:
          "Continuous surveillance of challenging border terrain including mountains, rivers, and dense forests using multi-spectral satellite and drone imagery.",
        emoji: "🗺️",
      },
      {
        title: "Emergency Response",
        description:
          "Rapid deployment protocols coordinate response teams with real-time situational data, reducing response time by 65% compared to traditional methods.",
        emoji: "🚨",
      },
    ],
    stats: {
      uptime: "99.9%",
      users: "15K+",
      countries: "45+",
      support: "24/7",
    },
    testimonial: {
      quote:
        "BorderGuard has transformed our border security operations. The AI-powered threat detection has reduced false alarms by 85% while improving our response time dramatically.",
      author: "Colonel James Martinez",
      role: "Director of Border Operations",
      company: "National Border Security Agency",
    },
  },

  {
    id: 2,
    title: "Terrain Analyzer",
    description:
      "Advanced terrain analysis tool for construction, mining, and environmental assessment.",
    features: [
      "Volumetric Analysis",
      "Slope & Aspect Mapping",
      "3D Visualization",
      "Export to CAD",
    ],
    price: "$199/month",
    category: "Infrastructure",
    imageUrl: "/terrain-analyser.png",
    codeName: "PF-GeoMaster",
    rating: 4.8,
    reviewCount: 1856,
    specifications: [
      { label: "Deployment", value: "Cloud-based / Desktop Application" },
      { label: "Updates", value: "Monthly Feature Updates" },
      { label: "Support", value: "Business Hours Support" },
      { label: "Integration", value: "CAD/GIS APIs Available" },
      { label: "Scalability", value: "Unlimited Project Size" },
      { label: "Security", value: "Project-Level Encryption" },
    ],
    benefits: [
      {
        icon: "Shield",
        title: "Accurate Measurements",
        description:
          "Sub-centimeter accuracy in volumetric calculations and terrain measurements using LiDAR and photogrammetry data.",
      },
      {
        icon: "Zap",
        title: "Fast Processing",
        description:
          "Process large terrain datasets in minutes with GPU-accelerated algorithms and optimized data pipelines.",
      },
      {
        icon: "Users",
        title: "Team Collaboration",
        description:
          "Real-time project sharing with version control and role-based access for engineering teams.",
      },
      {
        icon: "TrendingUp",
        title: "Cost Optimization",
        description:
          "Reduce earthwork costs by up to 30% through precise cut-fill analysis and optimal grading strategies.",
      },
    ],
    useCases: [
      {
        title: "Construction Planning",
        description:
          "Generate detailed cut-fill reports and grading plans for construction projects, reducing material waste and optimizing earthwork operations for maximum efficiency.",
        emoji: "🏗️",
      },
      {
        title: "Mining Operations",
        description:
          "Calculate ore volumes, design haul roads, and plan excavation sequences with precision terrain modeling and blast design optimization tools.",
        emoji: "⛏️",
      },
      {
        title: "Environmental Impact",
        description:
          "Assess terrain changes over time for environmental monitoring, erosion analysis, and habitat restoration projects with multi-temporal analysis.",
        emoji: "🌍",
      },
      {
        title: "Site Development",
        description:
          "Optimize site layouts and drainage systems through advanced watershed analysis and slope stability calculations for residential and commercial developments.",
        emoji: "📐",
      },
    ],
    stats: {
      uptime: "99.5%",
      users: "8K+",
      countries: "85+",
      support: "24/5",
    },
    testimonial: {
      quote:
        "GeoMaster has cut our terrain analysis time by 70%. The volumetric calculations are incredibly accurate and the CAD integration is seamless.",
      author: "Dr. Emily Chen",
      role: "Chief Engineer",
      company: "GlobalConstruct Inc.",
    },
  },

  {
    id: 3,
    title: "Defense & Security Suite",
    description:
      "Advanced defense and surveillance platform with real-time threat detection, encrypted communications, and tactical coordination tools.",
    features: [
      "Real-Time Threat Alerts",
      "Encrypted Communication",
      "Surveillance Integration",
      "Tactical Coordination Dashboard",
    ],
    price: "$499/month",
    category: "Infrastructure",
    imageUrl: "/de.jpg",
    codeName: "PF-Sentinel",
    rating: 4.9,
    reviewCount: 3241,
    specifications: [
      { label: "Deployment", value: "Secure Cloud / Air-Gapped Systems" },
      { label: "Updates", value: "Continuous Security Patches" },
      { label: "Support", value: "24/7 Tactical Support" },
      { label: "Integration", value: "Military Standard Protocols" },
      { label: "Scalability", value: "Theater-Wide Operations" },
      { label: "Security", value: "NSA-Grade Encryption" },
    ],
    benefits: [
      {
        icon: "Shield",
        title: "Maximum Security",
        description:
          "Zero-trust architecture with quantum-resistant encryption protecting critical defense communications and data.",
      },
      {
        icon: "Zap",
        title: "Real-Time Intelligence",
        description:
          "Millisecond threat detection with automated response recommendations powered by advanced AI algorithms.",
      },
      {
        icon: "Users",
        title: "Force Coordination",
        description:
          "Unified command and control across air, land, and sea operations with integrated communication channels.",
      },
      {
        icon: "TrendingUp",
        title: "Mission Success",
        description:
          "Enhanced operational effectiveness with 98% mission success rate through superior situational awareness.",
      },
    ],
    useCases: [
      {
        title: "Threat Intelligence",
        description:
          "Aggregate and analyze threat data from multiple intelligence sources in real-time, providing actionable insights for preemptive defense measures and strategic planning.",
        emoji: "🎯",
      },
      {
        title: "Tactical Communications",
        description:
          "Secure, resilient communication network for field operations with automatic frequency hopping and jamming resistance for uninterrupted command coordination.",
        emoji: "📡",
      },
      {
        title: "Asset Protection",
        description:
          "Comprehensive monitoring of critical infrastructure and military assets with AI-powered anomaly detection and automated security protocols.",
        emoji: "🔒",
      },
      {
        title: "Mission Planning",
        description:
          "Advanced scenario modeling and simulation tools for mission preparation with terrain analysis, threat assessment, and resource optimization capabilities.",
        emoji: "🗂️",
      },
    ],
    stats: {
      uptime: "99.99%",
      users: "25K+",
      countries: "65+",
      support: "24/7",
    },
    testimonial: {
      quote:
        "Sentinel has revolutionized our defense operations. The real-time threat intelligence and secure communications have been game-changing for our tactical teams.",
      author: "General Robert Hayes",
      role: "Commander",
      company: "Joint Defense Command",
    },
  },

  {
    id: 4,
    title: "Smart Agriculture Toolkit",
    description:
      "Comprehensive agricultural management system with crop monitoring, weather integration, and smart irrigation support.",
    features: [
      "Crop Health Monitoring",
      "Weather Forecast Integration",
      "Smart Irrigation Controls",
      "Soil Analysis Tools",
    ],
    price: "$129/month",
    category: "Agriculture",
    imageUrl: "/agric.jpg",
    codeName: "PF-AgriSense",
    rating: 4.7,
    reviewCount: 2156,
    specifications: [
      { label: "Deployment", value: "Cloud-based / Mobile App" },
      { label: "Updates", value: "Weekly Data Refresh" },
      { label: "Support", value: "Agricultural Expert Support" },
      { label: "Integration", value: "IoT Sensor Compatible" },
      { label: "Scalability", value: "Small to Large Farms" },
      { label: "Security", value: "Farm Data Protection" },
    ],
    benefits: [
      {
        icon: "Shield",
        title: "Crop Protection",
        description:
          "Early disease detection and pest identification using multispectral imagery and AI-powered diagnostics.",
      },
      {
        icon: "Zap",
        title: "Water Efficiency",
        description:
          "Reduce water usage by 40% with precision irrigation based on soil moisture, weather, and crop needs.",
      },
      {
        icon: "Users",
        title: "Farm Management",
        description:
          "Coordinate multiple fields and workers with mobile-first task management and progress tracking.",
      },
      {
        icon: "TrendingUp",
        title: "Yield Optimization",
        description:
          "Increase crop yields by 25% through data-driven decisions on planting, fertilization, and harvesting.",
      },
    ],
    useCases: [
      {
        title: "Precision Farming",
        description:
          "Variable rate application of fertilizers and pesticides based on soil conditions and crop health mapping, reducing input costs while maximizing productivity.",
        emoji: "🌾",
      },
      {
        title: "Weather Planning",
        description:
          "Hyperlocal weather forecasts and predictive analytics help optimize planting schedules, irrigation timing, and harvest windows for optimal crop quality.",
        emoji: "🌤️",
      },
      {
        title: "Soil Management",
        description:
          "Comprehensive soil testing integration with nutrient mapping and pH monitoring enables precision fertilization strategies and improved soil health over time.",
        emoji: "🌱",
      },
      {
        title: "Yield Prediction",
        description:
          "Machine learning models analyze historical data, current conditions, and crop health indicators to provide accurate harvest forecasts for better market planning.",
        emoji: "📈",
      },
    ],
    stats: {
      uptime: "99.7%",
      users: "12K+",
      countries: "95+",
      support: "24/6",
    },
    testimonial: {
      quote:
        "AgriSense has transformed how we manage our 5,000-acre farm. The crop health monitoring caught a disease outbreak early, saving us over $200,000 in potential losses.",
      author: "Marcus Thompson",
      role: "Farm Operations Manager",
      company: "Green Valley Farms",
    },
  },

  {
    id: 5,
    title: "Urban Planning Suite",
    description:
      "Integrated urban development platform with zoning tools, infrastructure mapping, and stakeholder collaboration features.",
    features: [
      "Zoning & Land Use Tools",
      "Infrastructure Mapping",
      "3D City Modeling",
      "Stakeholder Collaboration",
    ],
    price: "$199/month",
    category: "Urban planning",
    imageUrl: "/urban-planning.png",
    codeName: "PF-CityScape",
    rating: 4.8,
    reviewCount: 1674,
    specifications: [
      { label: "Deployment", value: "Cloud-based / Web Platform" },
      { label: "Updates", value: "Quarterly Feature Releases" },
      { label: "Support", value: "Planning Expert Consultation" },
      { label: "Integration", value: "GIS & CAD Compatible" },
      { label: "Scalability", value: "Village to Megacity" },
      { label: "Security", value: "Municipal Data Protection" },
    ],
    benefits: [
      {
        icon: "Shield",
        title: "Compliance Assurance",
        description:
          "Automated zoning compliance checks and regulatory requirement validation for faster permit approvals.",
      },
      {
        icon: "Zap",
        title: "Rapid Visualization",
        description:
          "Generate 3D city models and development scenarios in minutes for stakeholder presentations and public consultations.",
      },
      {
        icon: "Users",
        title: "Community Engagement",
        description:
          "Interactive public portals enable citizen feedback and transparent planning processes with integrated commenting.",
      },
      {
        icon: "TrendingUp",
        title: "Smart Growth",
        description:
          "Data-driven insights for sustainable urban development balancing economic growth, livability, and environmental goals.",
      },
    ],
    useCases: [
      {
        title: "Master Planning",
        description:
          "Create comprehensive long-term development plans with demographic projections, infrastructure needs analysis, and multi-scenario modeling for sustainable city growth.",
        emoji: "🏙️",
      },
      {
        title: "Zoning Analysis",
        description:
          "Evaluate zoning changes and variances with impact assessment tools that analyze traffic, density, and community character implications before approval.",
        emoji: "📋",
      },
      {
        title: "Infrastructure Planning",
        description:
          "Map existing utilities and plan new infrastructure projects with cost estimation, phasing strategies, and capacity analysis for water, power, and transportation.",
        emoji: "🚇",
      },
      {
        title: "Public Engagement",
        description:
          "Host virtual town halls and planning charrettes with interactive 3D visualizations and real-time polling to gather community input on development proposals.",
        emoji: "🗣️",
      },
    ],
    stats: {
      uptime: "99.6%",
      users: "6K+",
      countries: "78+",
      support: "24/5",
    },
    testimonial: {
      quote:
        "CityScape has made our planning process 60% more efficient. The 3D visualization tools have been invaluable for community engagement and council presentations.",
      author: "Lisa Rodriguez",
      role: "Chief Urban Planner",
      company: "Metro City Planning Department",
    },
  },

  {
    id: 6,
    title: "Environmental Monitoring System",
    description:
      "Real-time environmental monitoring platform with air and water quality sensors, data visualization, and alert systems.",
    features: [
      "Air & Water Quality Sensors",
      "Real-Time Data Visualization",
      "Automated Alerts & Thresholds",
      "Historical Data Analysis",
    ],
    price: "$179/month",
    category: "Environmental",
    imageUrl: "/env-monitor.png",
    codeName: "PF-EcoWatch",
    rating: 4.7,
    reviewCount: 1923,
    specifications: [
      { label: "Deployment", value: "Cloud-based / IoT Network" },
      { label: "Updates", value: "Real-time Data Streams" },
      { label: "Support", value: "Environmental Expert Support" },
      { label: "Integration", value: "Universal Sensor Compatibility" },
      { label: "Scalability", value: "Single Site to Regional" },
      { label: "Security", value: "Encrypted Data Transmission" },
    ],
    benefits: [
      {
        icon: "Shield",
        title: "Compliance Monitoring",
        description:
          "Automated EPA and local regulation compliance tracking with instant violation alerts and detailed reporting.",
      },
      {
        icon: "Zap",
        title: "Instant Detection",
        description:
          "Real-time pollution event detection with automated notifications to response teams within seconds of threshold breach.",
      },
      {
        icon: "Users",
        title: "Public Transparency",
        description:
          "Share environmental data with communities through public dashboards building trust and accountability.",
      },
      {
        icon: "TrendingUp",
        title: "Trend Analysis",
        description:
          "Identify long-term environmental patterns and improvement opportunities through advanced analytics and machine learning.",
      },
    ],
    useCases: [
      {
        title: "Air Quality Monitoring",
        description:
          "Track PM2.5, PM10, NO2, SO2, and other pollutants with distributed sensor networks providing hyperlocal air quality data for health advisories and policy decisions.",
        emoji: "🌫️",
      },
      {
        title: "Water Quality Testing",
        description:
          "Continuous monitoring of pH, turbidity, dissolved oxygen, and contaminants in rivers, lakes, and treatment facilities ensuring safe drinking water supply.",
        emoji: "💧",
      },
      {
        title: "Pollution Source Tracking",
        description:
          "Identify and locate pollution sources through sensor triangulation and wind pattern analysis enabling rapid response and enforcement actions.",
        emoji: "🔬",
      },
      {
        title: "Regulatory Reporting",
        description:
          "Automated generation of compliance reports for environmental agencies with historical data archives and trend documentation reducing administrative burden.",
        emoji: "📊",
      },
    ],
    stats: {
      uptime: "99.8%",
      users: "9K+",
      countries: "102+",
      support: "24/7",
    },
    testimonial: {
      quote:
        "EcoWatch has given us unprecedented visibility into our region's environmental health. We've reduced response time to pollution events from hours to minutes.",
      author: "Dr. Patricia Green",
      role: "Environmental Director",
      company: "State Environmental Agency",
    },
  },

  {
    id: 7,
    title: "Transport & Logistics Manager",
    description:
      "End-to-end transportation and logistics platform with fleet tracking, route optimization, and delivery management.",
    features: [
      "Real-Time Fleet Tracking",
      "Route Optimization",
      "Delivery Scheduling & Tracking",
      "Inventory & Warehouse Integration",
    ],
    price: "$249/month",
    category: "Transportation",
    imageUrl: "/transport-manager.png",
    codeName: "PF-LogiTrack",
    rating: 4.8,
    reviewCount: 2734,
    specifications: [
      { label: "Deployment", value: "Cloud-based / Mobile Apps" },
      { label: "Updates", value: "Live Traffic Integration" },
      { label: "Support", value: "24/7 Logistics Support" },
      { label: "Integration", value: "ERP & TMS Compatible" },
      { label: "Scalability", value: "10 to 10,000+ Vehicles" },
      { label: "Security", value: "End-to-End Encryption" },
    ],
    benefits: [
      {
        icon: "Shield",
        title: "Cargo Security",
        description:
          "Real-time tracking and geofencing alerts ensure cargo safety with tamper detection and unauthorized stop notifications.",
      },
      {
        icon: "Zap",
        title: "Route Efficiency",
        description:
          "AI-powered route optimization reduces fuel costs by 25% and improves on-time delivery rates to 98%.",
      },
      {
        icon: "Users",
        title: "Driver Management",
        description:
          "Comprehensive driver performance tracking, safety scoring, and automated compliance monitoring for hours of service.",
      },
      {
        icon: "TrendingUp",
        title: "Cost Reduction",
        description:
          "Average 30% reduction in operational costs through optimized routing, reduced idle time, and improved asset utilization.",
      },
    ],
    useCases: [
      {
        title: "Fleet Management",
        description:
          "Monitor vehicle locations, health, and performance in real-time with predictive maintenance alerts and fuel consumption analytics for proactive fleet management.",
        emoji: "🚛",
      },
      {
        title: "Route Planning",
        description:
          "Dynamic route optimization considers traffic, weather, delivery windows, and vehicle capacity to create the most efficient multi-stop delivery routes.",
        emoji: "🗺️",
      },
      {
        title: "Last-Mile Delivery",
        description:
          "Optimize final delivery leg with customer notification systems, delivery time predictions, and proof-of-delivery capture improving customer satisfaction.",
        emoji: "📦",
      },
      {
        title: "Warehouse Integration",
        description:
          "Seamless connection between warehouse management and transportation with automated loading schedules and inventory synchronization for just-in-time delivery.",
        emoji: "🏭",
      },
    ],
    stats: {
      uptime: "99.9%",
      users: "18K+",
      countries: "110+",
      support: "24/7",
    },
    testimonial: {
      quote:
        "LogiTrack has transformed our logistics operations. We've reduced fuel costs by 28% and our on-time delivery rate has improved from 87% to 97%.",
      author: "David Chen",
      role: "VP of Operations",
      company: "Express Logistics Group",
    },
  },

  {
    id: 8,
    title: "Energy & Utilities Platform",
    description:
      "Smart management system for energy and utility services with grid monitoring, consumption analytics, and outage detection.",
    features: [
      "Smart Grid Monitoring",
      "Energy Consumption Analytics",
      "Outage Detection & Alerts",
      "Renewable Integration Support",
    ],
    price: "$299/month",
    category: "Energy",
    imageUrl: "/energy.png",
    codeName: "PF-PowerGrid",
    rating: 4.9,
    reviewCount: 2456,
    specifications: [
      { label: "Deployment", value: "Hybrid Cloud / On-premise" },
      { label: "Updates", value: "Real-time Grid Data" },
      { label: "Support", value: "24/7 Critical Infrastructure Support" },
      { label: "Integration", value: "SCADA & DMS Compatible" },
      { label: "Scalability", value: "Micro to National Grid" },
      { label: "Security", value: "Critical Infrastructure Protection" },
    ],
    benefits: [
      {
        icon: "Shield",
        title: "Grid Reliability",
        description:
          "Predictive outage prevention and automated fault detection reduce downtime by 45% through early intervention.",
      },
      {
        icon: "Zap",
        title: "Load Balancing",
        description:
          "Real-time load distribution optimization prevents blackouts and maximizes grid efficiency during peak demand.",
      },
      {
        icon: "Users",
        title: "Consumer Insights",
        description:
          "Detailed consumption analytics enable demand response programs and personalized energy-saving recommendations.",
      },
      {
        icon: "TrendingUp",
        title: "Green Integration",
        description:
          "Seamlessly integrate renewable energy sources with intelligent forecasting and storage management capabilities.",
      },
    ],
    useCases: [
      {
        title: "Grid Monitoring",
        description:
          "Real-time visualization of power flow, voltage levels, and system health across the entire grid with automated anomaly detection and predictive failure analysis.",
        emoji: "⚡",
      },
      {
        title: "Demand Forecasting",
        description:
          "AI-powered load prediction using weather data, historical patterns, and special events to optimize generation scheduling and prevent capacity shortfalls.",
        emoji: "📈",
      },
      {
        title: "Outage Management",
        description:
          "Automatic outage detection, crew dispatch optimization, and customer communication systems reduce restoration time by 35% and improve customer satisfaction.",
        emoji: "🔧",
      },
      {
        title: "Renewable Integration",
        description:
          "Smart integration of solar, wind, and battery storage with real-time balancing algorithms ensuring stable grid operation with high renewable penetration.",
        emoji: "🌞",
      },
    ],
    stats: {
      uptime: "99.99%",
      users: "5K+",
      countries: "67+",
      support: "24/7",
    },
    testimonial: {
      quote:
        "PowerGrid has revolutionized our utility operations. We've reduced outage duration by 40% and successfully integrated 35% renewable energy into our mix.",
      author: "Maria Santos",
      role: "Grid Operations Director",
      company: "Metro Energy Corporation",
    },
  },

  {
    id: 9,
    title: "Digital Twin Platform",
    description:
      "High-fidelity digital twin solution for real-time simulation, asset monitoring, and predictive maintenance across physical systems.",
    features: [
      "Real-Time System Simulation",
      "3D Asset Visualization",
      "Predictive Maintenance",
      "Data Integration & Sync",
    ],
    price: "$399/month",
    category: "Infrastructure",
    imageUrl: "/digital-twin.png",
    codeName: "PF-TwinSim",
    rating: 4.8,
    reviewCount: 1543,
    specifications: [
      { label: "Deployment", value: "Cloud-based / Edge Computing" },
      { label: "Updates", value: "Real-time Data Synchronization" },
      { label: "Support", value: "24/7 Technical Support" },
      { label: "Integration", value: "IoT & PLM Compatible" },
      { label: "Scalability", value: "Component to Facility-Wide" },
      { label: "Security", value: "Industrial-Grade Security" },
    ],
    benefits: [
      {
        icon: "Shield",
        title: "Asset Protection",
        description:
          "Prevent equipment failures through continuous health monitoring and physics-based degradation modeling.",
      },
      {
        icon: "Zap",
        title: "Real-Time Insights",
        description:
          "Live synchronization between physical and digital assets enables instant what-if analysis and optimization.",
      },
      {
        icon: "Users",
        title: "Cross-Team Collaboration",
        description:
          "Unified digital representation accessible to engineering, operations, and maintenance teams worldwide.",
      },
      {
        icon: "TrendingUp",
        title: "Performance Optimization",
        description:
          "Identify efficiency improvements through simulation reducing energy consumption by up to 20%.",
      },
    ],
    useCases: [
      {
        title: "Predictive Maintenance",
        description:
          "Machine learning algorithms analyze sensor data and operating conditions to predict equipment failures weeks in advance, reducing unplanned downtime by 50%.",
        emoji: "🔧",
      },
      {
        title: "Process Optimization",
        description:
          "Test operational changes in the digital twin before implementation, optimizing production processes without risking physical assets or production schedules.",
        emoji: "⚙️",
      },
      {
        title: "Training Simulation",
        description:
          "Safe virtual environment for operator training and emergency response drills without interrupting actual operations or putting personnel at risk.",
        emoji: "🎓",
      },
      {
        title: "Design Validation",
        description:
          "Validate modifications and upgrades in the digital environment before physical implementation, reducing commissioning time and avoiding costly design errors.",
        emoji: "✅",
      },
    ],
    stats: {
      uptime: "99.7%",
      users: "4K+",
      countries: "58+",
      support: "24/7",
    },
    testimonial: {
      quote:
        "TwinSim has reduced our unplanned downtime by 52%. The predictive maintenance capabilities alone have saved us millions in avoided production losses.",
      author: "John Peterson",
      role: "Plant Manager",
      company: "Advanced Manufacturing Solutions",
    },
  },

  {
    id: 10,
    title: "Ecosphere Management Suite",
    description:
      "Comprehensive platform for managing and monitoring ecosystems with biodiversity tracking, habitat mapping, and sustainability insights.",
    features: [
      "Biodiversity Monitoring",
      "Habitat Mapping Tools",
      "Sustainability Metrics",
      "Environmental Impact Analysis",
    ],
    price: "$189/month",
    category: "Environmental",
    imageUrl: "/ecosphere-management.png",
    codeName: "PF-EcoSphere",
    rating: 4.7,
    reviewCount: 1345,
    specifications: [
      { label: "Deployment", value: "Cloud-based / Field Mobile" },
      { label: "Updates", value: "Seasonal Data Updates" },
      { label: "Support", value: "Conservation Expert Support" },
      { label: "Integration", value: "Remote Sensing Compatible" },
      { label: "Scalability", value: "Local to Regional Scale" },
      { label: "Security", value: "Research Data Protection" },
    ],
    benefits: [
      {
        icon: "Shield",
        title: "Species Protection",
        description:
          "Advanced monitoring tools track endangered species populations and habitat health for effective conservation strategies.",
      },
      {
        icon: "Zap",
        title: "Rapid Assessment",
        description:
          "Satellite and drone imagery analysis provides quick ecosystem health assessments over large areas.",
      },
      {
        icon: "Users",
        title: "Stakeholder Engagement",
        description:
          "Connect researchers, conservation groups, and policymakers with shared data and collaborative tools.",
      },
      {
        icon: "TrendingUp",
        title: "Impact Measurement",
        description:
          "Quantify conservation efforts with measurable biodiversity and ecosystem health indicators over time.",
      },
    ],
    useCases: [
      {
        title: "Wildlife Monitoring",
        description:
          "Track animal populations, migration patterns, and habitat usage using GPS collars, camera traps, and acoustic sensors for comprehensive wildlife management.",
        emoji: "🦁",
      },
      {
        title: "Habitat Restoration",
        description:
          "Monitor restoration project success with vegetation analysis, soil health metrics, and species return rates to optimize conservation investments.",
        emoji: "🌳",
      },
      {
        title: "Biodiversity Assessment",
        description:
          "Comprehensive species inventories and ecosystem diversity metrics support environmental impact assessments and conservation prioritization decisions.",
        emoji: "🦋",
      },
      {
        title: "Climate Impact Studies",
        description:
          "Analyze ecosystem responses to climate change including species range shifts, phenology changes, and habitat degradation patterns.",
        emoji: "🌡️",
      },
    ],
    stats: {
      uptime: "99.6%",
      users: "7K+",
      countries: "92+",
      support: "24/6",
    },
    testimonial: {
      quote:
        "EcoSphere has transformed how we manage our protected areas. The biodiversity monitoring tools have helped us increase endangered species populations by 23%.",
      author: "Dr. Rachel Martinez",
      role: "Conservation Director",
      company: "National Wildlife Federation",
    },
  },

  {
    id: 11,
    title: "Flood Risk Assessment Tool",
    description:
      "Advanced flood modeling and risk analysis platform with real-time data, predictive simulations, and impact mapping.",
    features: [
      "Real-Time Flood Monitoring",
      "Predictive Flood Simulations",
      "Risk & Impact Mapping",
      "Early Warning Alerts",
    ],
    price: "$219/month",
    category: "Disaster management",
    imageUrl: "/flood-risk.png",
    codeName: "PF-FloodGuard",
    rating: 4.9,
    reviewCount: 2187,
    specifications: [
      { label: "Deployment", value: "Cloud-based / Emergency Network" },
      { label: "Updates", value: "Real-time Weather Data" },
      { label: "Support", value: "24/7 Emergency Support" },
      { label: "Integration", value: "Weather Station Compatible" },
      { label: "Scalability", value: "Watershed to Basin-Wide" },
      { label: "Security", value: "Critical Infrastructure Protection" },
    ],
    benefits: [
      {
        icon: "Shield",
        title: "Community Safety",
        description:
          "Early warning systems provide 12-48 hour advance notice enabling evacuations and emergency preparations.",
      },
      {
        icon: "Zap",
        title: "Rapid Response",
        description:
          "Automated alert distribution to emergency services and affected populations within minutes of threshold breach.",
      },
      {
        icon: "Users",
        title: "Multi-Agency Coordination",
        description:
          "Unified platform for emergency management, public works, and first responders during flood events.",
      },
      {
        icon: "TrendingUp",
        title: "Risk Mitigation",
        description:
          "Long-term flood risk mapping informs infrastructure planning and reduces future flood damage by 40%.",
      },
    ],
    useCases: [
      {
        title: "Flash Flood Prediction",
        description:
          "Real-time rainfall monitoring combined with watershed modeling provides early warnings for flash floods in urban and mountainous areas.",
        emoji: "⚠️",
      },
      {
        title: "Infrastructure Planning",
        description:
          "100-year and 500-year flood plain mapping guides development decisions and infrastructure investment for resilient communities.",
        emoji: "🏗️",
      },
      {
        title: "Emergency Response",
        description:
          "Real-time inundation mapping and evacuation route planning assist first responders during active flood events.",
        emoji: "🚨",
      },
      {
        title: "Insurance Assessment",
        description:
          "Detailed flood risk analysis supports accurate property insurance underwriting and helps homeowners understand their exposure.",
        emoji: "📋",
      },
    ],
    stats: {
      uptime: "99.9%",
      users: "11K+",
      countries: "78+",
      support: "24/7",
    },
    testimonial: {
      quote:
        "FloodGuard saved our community during last year's hurricane. The 36-hour advance warning allowed us to evacuate everyone safely. Zero casualties.",
      author: "Mayor Thomas Williams",
      role: "City Mayor",
      company: "Riverside City Government",
    },
  },

  {
    id: 12,
    title: "Urban Growth Analysis Suite",
    description:
      "Data-driven platform for analyzing urban expansion with satellite imagery, land use change detection, and growth forecasting tools.",
    features: [
      "Satellite Imagery Integration",
      "Land Use Change Detection",
      "Urban Expansion Forecasting",
      "Custom Zoning Analytics",
    ],
    price: "$229/month",
    category: "Urban planning",
    imageUrl: "/urban-growth.png",
    codeName: "PF-UrbanGrowth",
    rating: 4.8,
    reviewCount: 1567,
    specifications: [
      { label: "Deployment", value: "Cloud-based / Web Platform" },
      { label: "Updates", value: "Monthly Satellite Updates" },
      { label: "Support", value: "Planning Expert Consultation" },
      { label: "Integration", value: "GIS & Planning Software Compatible" },
      { label: "Scalability", value: "Neighborhood to Metropolitan" },
      { label: "Security", value: "Municipal Data Security" },
    ],
    benefits: [
      {
        icon: "Shield",
        title: "Informed Planning",
        description:
          "Historical growth analysis and future projections enable proactive infrastructure and service planning.",
      },
      {
        icon: "Zap",
        title: "Rapid Analysis",
        description:
          "Automated change detection identifies urban sprawl and land use changes within 24 hours of satellite capture.",
      },
      {
        icon: "Users",
        title: "Policy Development",
        description:
          "Evidence-based growth patterns inform smart growth policies and urban containment strategies.",
      },
      {
        icon: "TrendingUp",
        title: "Sustainable Growth",
        description:
          "Balance development pressures with environmental protection through data-driven growth management.",
      },
    ],
    useCases: [
      {
        title: "Sprawl Monitoring",
        description:
          "Track urban expansion patterns and identify uncontrolled sprawl to guide growth management policies and protect valuable agricultural land.",
        emoji: "🌆",
      },
      {
        title: "Infrastructure Forecasting",
        description:
          "Predict future infrastructure needs based on growth trends including roads, utilities, schools, and public services for budget planning.",
        emoji: "🚧",
      },
      {
        title: "Environmental Impact",
        description:
          "Assess development impacts on green spaces, watersheds, and natural habitats to balance growth with environmental preservation.",
        emoji: "🌲",
      },
      {
        title: "Economic Analysis",
        description:
          "Correlate urban growth with economic indicators and tax revenue projections for strategic economic development planning.",
        emoji: "💼",
      },
    ],
    stats: {
      uptime: "99.7%",
      users: "5K+",
      countries: "68+",
      support: "24/5",
    },
    testimonial: {
      quote:
        "UrbanGrowth helped us identify sprawl patterns we weren't aware of. We've redirected development to infill areas, saving millions in infrastructure costs.",
      author: "Dr. Amanda Foster",
      role: "Regional Planning Director",
      company: "Metro Regional Council",
    },
  },

  {
    id: 13,
    title: "Pipeline Monitoring Solution",
    description:
      "Comprehensive monitoring system for pipeline infrastructure with leak detection, pressure monitoring, and real-time alerts.",
    features: [
      "Leak & Pressure Detection",
      "Real-Time Pipeline Monitoring",
      "Automated Alerts & Notifications",
      "Geospatial Visualization",
    ],
    price: "$269/month",
    category: "Oil & Gas",
    imageUrl: "/pipeline.png",
    codeName: "PF-FlowSafe",
    rating: 4.9,
    reviewCount: 2834,
    specifications: [
      { label: "Deployment", value: "Distributed Edge / Cloud" },
      { label: "Updates", value: "Real-time Sensor Data" },
      { label: "Support", value: "24/7 Critical Response Support" },
      { label: "Integration", value: "SCADA & DCS Compatible" },
      { label: "Scalability", value: "10km to 10,000km Networks" },
      { label: "Security", value: "Industrial Cybersecurity" },
    ],
    benefits: [
      {
        icon: "Shield",
        title: "Environmental Protection",
        description:
          "Early leak detection prevents environmental disasters with average response time under 5 minutes.",
      },
      {
        icon: "Zap",
        title: "Instant Detection",
        description:
          "Advanced acoustic and pressure wave analysis detects leaks as small as 0.1% of flow rate.",
      },
      {
        icon: "Users",
        title: "Operator Efficiency",
        description:
          "Centralized monitoring reduces field inspection needs by 70% while improving system reliability.",
      },
      {
        icon: "TrendingUp",
        title: "Cost Savings",
        description:
          "Prevent costly spills and regulatory fines with average savings of $2.5M per incident avoided.",
      },
    ],
    useCases: [
      {
        title: "Leak Detection",
        description:
          "Multi-method leak detection using pressure monitoring, flow analysis, and acoustic sensors provides redundant detection with 99.5% accuracy.",
        emoji: "💧",
      },
      {
        title: "Corrosion Monitoring",
        description:
          "Ultrasonic thickness monitoring and cathodic protection assessment predict pipeline failures before they occur enabling preventive maintenance.",
        emoji: "🔍",
      },
      {
        title: "Third-Party Damage Prevention",
        description:
          "Geofencing and vibration detection identify unauthorized excavation activities near pipelines preventing costly third-party damage.",
        emoji: "🚧",
      },
      {
        title: "Integrity Management",
        description:
          "Comprehensive pipeline integrity assessment combines inspection data, operating history, and risk analysis for regulatory compliance and safety.",
        emoji: "📊",
      },
    ],
    stats: {
      uptime: "99.95%",
      users: "3K+",
      countries: "45+",
      support: "24/7",
    },
    testimonial: {
      quote:
        "PipeWatch detected a developing leak 18 hours before it would have become critical. It saved us from a major environmental incident and millions in cleanup costs.",
      author: "Carlos Rodriguez",
      role: "Pipeline Operations Manager",
      company: "TransPetrol Energy",
    },
  },

  {
    id: 14,
    title: "Geofencing Solution",
    description:
      "Location-based platform enabling virtual boundaries with real-time alerts, asset tracking, and zone-based automation.",
    features: [
      "Custom Geofence Creation",
      "Real-Time Entry/Exit Alerts",
      "Asset & Personnel Tracking",
      "Zone-Based Automation Rules",
    ],
    price: "$179/month",
    category: "Transportation",
    imageUrl: "/geofencing.webp",
    codeName: "PF-GeoFencePro",
    rating: 4.7,
    reviewCount: 1876,
    specifications: [
      { label: "Deployment", value: "Cloud-based / Mobile Platform" },
      { label: "Updates", value: "Real-time Location Updates" },
      { label: "Support", value: "24/7 Technical Support" },
      { label: "Integration", value: "GPS & IoT Device Compatible" },
      { label: "Scalability", value: "10 to 100,000+ Assets" },
      { label: "Security", value: "Encrypted Location Data" },
    ],
    benefits: [
      {
        icon: "Shield",
        title: "Asset Security",
        description:
          "Instant alerts when assets leave authorized zones preventing theft and unauthorized usage.",
      },
      {
        icon: "Zap",
        title: "Automated Workflows",
        description:
          "Trigger actions based on location including check-ins, time tracking, and status updates automatically.",
      },
      {
        icon: "Users",
        title: "Employee Safety",
        description:
          "Monitor lone workers and hazardous area access with automatic emergency alerts and location tracking.",
      },
      {
        icon: "TrendingUp",
        title: "Compliance Tracking",
        description:
          "Verify service visits, delivery completions, and site attendance with timestamped location proof.",
      },
    ],
    useCases: [
      {
        title: "Fleet Management",
        description:
          "Monitor vehicle locations and receive alerts when vehicles enter or exit designated service areas, customer sites, or restricted zones.",
        emoji: "🚚",
      },
      {
        title: "Construction Site Safety",
        description:
          "Track worker locations on large construction sites and receive alerts when personnel enter hazardous zones or restricted areas.",
        emoji: "👷",
      },
      {
        title: "Equipment Theft Prevention",
        description:
          "Protect valuable equipment with instant theft alerts when assets move outside authorized zones during off-hours or weekends.",
        emoji: "🔒",
      },
      {
        title: "Service Verification",
        description:
          "Automatically verify technician arrival at customer locations and log service visit duration for billing and quality assurance.",
        emoji: "✅",
      },
    ],
    stats: {
      uptime: "99.8%",
      users: "14K+",
      countries: "95+",
      support: "24/7",
    },
    testimonial: {
      quote:
        "GeoFencePro has eliminated false service claims and improved our technician accountability. We've recovered three stolen vehicles within hours of the theft.",
      author: "Jennifer Lin",
      role: "Operations Director",
      company: "ServicePro Solutions",
    },
  },

  {
    id: 15,
    title: "Geospatial Intelligence Solution",
    description:
      "Advanced geospatial analytics platform for situational awareness, mission planning, and decision support using satellite and ground data.",
    features: [
      "Multi-Source Data Integration",
      "Real-Time Situational Awareness",
      "Geospatial Analytics & Insights",
      "Mission Planning Tools",
    ],
    price: "$389/month",
    category: "Infrastructure",
    imageUrl: "/geospatial2.jpg",
    codeName: "PF-GeoIntel",
    rating: 4.9,
    reviewCount: 1965,
    specifications: [
      { label: "Deployment", value: "Secure Cloud / Classified Networks" },
      { label: "Updates", value: "Real-time Intelligence Feeds" },
      { label: "Support", value: "24/7 Intelligence Support" },
      { label: "Integration", value: "Intelligence Community Standards" },
      { label: "Scalability", value: "Tactical to Strategic Operations" },
      { label: "Security", value: "Top Secret Clearance Compatible" },
    ],
    benefits: [
      {
        icon: "Shield",
        title: "Operational Security",
        description:
          "Classified data handling with compartmentalized access ensures mission-critical intelligence protection.",
      },
      {
        icon: "Zap",
        title: "Rapid Intelligence",
        description:
          "Automated analysis of multiple intelligence sources provides actionable insights within minutes.",
      },
      {
        icon: "Users",
        title: "Joint Operations",
        description:
          "Collaborative platform enables seamless intelligence sharing across agencies and coalition partners.",
      },
      {
        icon: "TrendingUp",
        title: "Predictive Analysis",
        description:
          "Machine learning identifies patterns and predicts adversary behavior for proactive decision-making.",
      },
    ],
    useCases: [
      {
        title: "Intelligence Analysis",
        description:
          "Fuse satellite imagery, signals intelligence, and human intelligence into comprehensive geospatial products for strategic and tactical analysis.",
        emoji: "🛰️",
      },
      {
        title: "Mission Planning",
        description:
          "3D terrain visualization, line-of-sight analysis, and route planning support mission preparation for military and security operations.",
        emoji: "🎯",
      },
      {
        title: "Change Detection",
        description:
          "Automated monitoring of areas of interest identifies new construction, vehicle movements, and activity patterns for intelligence collection.",
        emoji: "🔍",
      },
      {
        title: "Situational Awareness",
        description:
          "Real-time common operating picture integrates friendly forces, threats, and environmental factors for command decision support.",
        emoji: "📡",
      },
    ],
    stats: {
      uptime: "99.99%",
      users: "8K+",
      countries: "52+",
      support: "24/7",
    },
    testimonial: {
      quote:
        "GeoIntel has revolutionized our intelligence operations. The multi-source fusion capabilities have reduced our analysis time by 60% while improving accuracy.",
      author: "Director Sarah Mitchell",
      role: "Intelligence Director",
      company: "Defense Intelligence Agency",
    },
  },

  {
    id: 16,
    title: "Weather Intelligence Platform",
    description:
      "AI-powered weather intelligence system delivering hyperlocal forecasts, severe weather alerts, and climate impact analysis for smarter decisions.",
    features: [
      "Hyperlocal & Long-Range Forecasting",
      "Severe Weather Alerts",
      "Climate Impact Analysis",
      "Industry-Specific Weather Insights",
    ],
    price: "$199/month",
    category: "Disaster management",
    imageUrl: "/weather-intelligence.jpg",
    codeName: "PF-Caelus",
    rating: 4.8,
    reviewCount: 2345,
    specifications: [
      { label: "Deployment", value: "Cloud-based / API Access" },
      { label: "Updates", value: "Continuous Weather Data" },
      { label: "Support", value: "Meteorologist Support 24/7" },
      { label: "Integration", value: "Industry Standard APIs" },
      { label: "Scalability", value: "Single Site to Global" },
      { label: "Security", value: "Enterprise Data Protection" },
    ],
    benefits: [
      {
        icon: "Shield",
        title: "Risk Mitigation",
        description:
          "Advanced severe weather warnings provide critical lead time for protective actions and business continuity.",
      },
      {
        icon: "Zap",
        title: "Hyperlocal Accuracy",
        description:
          "1km resolution forecasts deliver unprecedented accuracy for site-specific weather decisions.",
      },
      {
        icon: "Users",
        title: "Industry Solutions",
        description:
          "Customized weather insights for agriculture, construction, energy, transportation, and event planning.",
      },
      {
        icon: "TrendingUp",
        title: "Climate Planning",
        description:
          "Long-term climate projections support infrastructure planning and risk assessment for future conditions.",
      },
    ],
    useCases: [
      {
        title: "Severe Weather Alerts",
        description:
          "Real-time notifications for tornadoes, hurricanes, flooding, and other hazards with specific impact predictions for your locations.",
        emoji: "⛈️",
      },
      {
        title: "Operational Planning",
        description:
          "Weather-optimized scheduling for construction, agriculture, and outdoor events reduces weather-related delays and cancellations by 45%.",
        emoji: "📅",
      },
      {
        title: "Energy Forecasting",
        description:
          "Predict renewable energy generation and electricity demand based on weather patterns for optimal grid management and trading.",
        emoji: "⚡",
      },
      {
        title: "Supply Chain Optimization",
        description:
          "Anticipate weather disruptions to transportation routes and adjust logistics plans proactively minimizing delays and costs.",
        emoji: "🚛",
      },
    ],
    stats: {
      uptime: "99.8%",
      users: "22K+",
      countries: "135+",
      support: "24/7",
    },
    testimonial: {
      quote:
        "Caelus weather intelligence has transformed our construction operations. The hyperlocal forecasts have reduced weather delays by 50% and saved us $1.2M annually.",
      author: "Michael Torres",
      role: "Project Director",
      company: "BuildRight Construction",
    },
  },

  {
    id: 17,
    title: "Environmental Change Detection System",
    description:
      "Remote sensing and analytics platform for detecting and monitoring environmental changes such as deforestation, urban sprawl, and land degradation.",
    features: [
      "Satellite-Based Change Detection",
      "Land Cover & Land Use Monitoring",
      "Time-Series Analysis",
      "Custom Alert Triggers",
    ],
    price: "$219/month",
    category: "Environmental",
    imageUrl: "/environmental-change.jpg",
    codeName: "PF-EnviroWatch",
    rating: 4.7,
    reviewCount: 1654,
    specifications: [
      { label: "Deployment", value: "Cloud-based / Web Platform" },
      { label: "Updates", value: "Weekly Satellite Updates" },
      { label: "Support", value: "Environmental Expert Support" },
      { label: "Integration", value: "Remote Sensing Software Compatible" },
      { label: "Scalability", value: "Hectares to Continental Scale" },
      { label: "Security", value: "Research Data Protection" },
    ],
    benefits: [
      {
        icon: "Shield",
        title: "Environmental Protection",
        description:
          "Early detection of illegal deforestation and land clearing enables rapid enforcement response.",
      },
      {
        icon: "Zap",
        title: "Rapid Detection",
        description:
          "Automated change detection algorithms identify environmental changes within 48 hours of occurrence.",
      },
      {
        icon: "Users",
        title: "Compliance Monitoring",
        description:
          "Monitor conservation agreements and environmental regulations with automated violation detection.",
      },
      {
        icon: "TrendingUp",
        title: "Trend Analysis",
        description:
          "Long-term environmental trend analysis supports policy development and conservation planning.",
      },
    ],
    useCases: [
      {
        title: "Deforestation Monitoring",
        description:
          "Track forest loss in near real-time using satellite imagery analysis, identifying illegal logging and supporting law enforcement efforts.",
        emoji: "🌲",
      },
      {
        title: "Agricultural Expansion",
        description:
          "Monitor conversion of natural habitats to agricultural land, assessing impacts on biodiversity and ecosystem services.",
        emoji: "🌾",
      },
      {
        title: "Coastal Erosion",
        description:
          "Track shoreline changes and coastal habitat loss using multi-temporal analysis for coastal zone management and climate adaptation planning.",
        emoji: "🏖️",
      },
      {
        title: "Mining Impact Assessment",
        description:
          "Monitor mining operations for environmental compliance including vegetation disturbance, water pollution, and land rehabilitation progress.",
        emoji: "⛏️",
      },
    ],
    stats: {
      uptime: "99.6%",
      users: "6K+",
      countries: "89+",
      support: "24/6",
    },
    testimonial: {
      quote:
        "EnviroWatch helped us identify illegal logging operations that conventional monitoring missed. We've protected over 50,000 hectares of forest in the past year.",
      author: "Dr. Maria Silva",
      role: "Conservation Program Manager",
      company: "Amazon Conservation Alliance",
    },
  },

  {
    id: 18,
    title: "Integrated Monitoring Solution",
    description:
      "Unified monitoring platform combining satellite imagery, drone feeds, CCTV surveillance, and geospatial data for comprehensive situational awareness and decision-making.",
    features: [
      "Satellite & Drone Data Integration",
      "Live CCTV Camera Feeds",
      "Geospatial Mapping & Analytics",
      "Real-Time Event Detection & Alerts",
    ],
    price: "$449/month",
    category: "Infrastructure",
    imageUrl: "/drone2.jpg",
    codeName: "PF-Vista",
    rating: 4.9,
    reviewCount: 2567,
    specifications: [
      { label: "Deployment", value: "Hybrid Cloud / Edge Processing" },
      { label: "Updates", value: "Real-time Multi-Source Feeds" },
      { label: "Support", value: "24/7 Mission-Critical Support" },
      { label: "Integration", value: "Universal Video & Data Standards" },
      { label: "Scalability", value: "10 to 10,000+ Cameras" },
      { label: "Security", value: "Multi-Level Access Control" },
    ],
    benefits: [
      {
        icon: "Shield",
        title: "Comprehensive Coverage",
        description:
          "Unified view of all monitoring assets eliminates blind spots and improves situational awareness by 85%.",
      },
      {
        icon: "Zap",
        title: "AI-Powered Detection",
        description:
          "Automated event detection across all sensor types reduces operator workload while improving threat detection.",
      },
      {
        icon: "Users",
        title: "Unified Command",
        description:
          "Single platform for multiple teams enables coordinated response and efficient resource allocation.",
      },
      {
        icon: "TrendingUp",
        title: "Intelligence Fusion",
        description:
          "Correlate data from multiple sources to identify patterns and predict events before they escalate.",
      },
    ],
    useCases: [
      {
        title: "Critical Infrastructure Protection",
        description:
          "Monitor facilities with integrated satellite, drone, and fixed cameras providing layered security and comprehensive threat detection.",
        emoji: "🏭",
      },
      {
        title: "Border Security",
        description:
          "Combine aerial surveillance with ground sensors and cameras for complete border coverage and rapid intrusion response.",
        emoji: "🛡️",
      },
      {
        title: "Smart City Operations",
        description:
          "Integrate traffic cameras, emergency sensors, and aerial monitoring for urban management and public safety coordination.",
        emoji: "🏙️",
      },
      {
        title: "Disaster Response",
        description:
          "Deploy drone surveillance integrated with satellite imagery and ground reports for comprehensive disaster assessment and response coordination.",
        emoji: "🚁",
      },
    ],
    stats: {
      uptime: "99.95%",
      users: "7K+",
      countries: "58+",
      support: "24/7",
    },
    testimonial: {
      quote:
        "Vista transformed our security operations. The integrated platform reduced our response time by 65% and we've prevented multiple security incidents through early detection.",
      author: "Commander Lisa Anderson",
      role: "Security Operations Director",
      company: "Global Energy Corporation",
    },
  },

  {
    id: 19,
    title: "Geo-Location Real-Time Tracking Platform",
    description:
      "High-precision geo-location platform offering real-time tracking, route analytics, and asset monitoring for improved operational efficiency.",
    features: [
      "Accurate Real-Time Tracking",
      "Route Analytics & Optimization",
      "Multi-Device Support",
      "Customizable Alerts & Reporting",
    ],
    price: "$219/month",
    category: "Transportation",
    imageUrl: "/geolocation-tracking.jpg",
    codeName: "PF-TrackIt",
    rating: 4.8,
    reviewCount: 2123,
    specifications: [
      { label: "Deployment", value: "Cloud-based / Mobile Platform" },
      { label: "Updates", value: "Real-time Position Updates" },
      { label: "Support", value: "24/7 Technical Support" },
      { label: "Integration", value: "GPS & Cellular Compatible" },
      { label: "Scalability", value: "10 to 50,000+ Assets" },
      { label: "Security", value: "Encrypted Location Transmission" },
    ],
    benefits: [
      {
        icon: "Shield",
        title: "Asset Accountability",
        description:
          "Complete location history and movement patterns provide audit trail and accountability for mobile assets.",
      },
      {
        icon: "Zap",
        title: "Real-Time Visibility",
        description:
          "Live tracking with 10-second update intervals provides accurate current location and movement status.",
      },
      {
        icon: "Users",
        title: "Customer Transparency",
        description:
          "Share tracking links with customers for delivery visibility improving satisfaction and reducing support calls.",
      },
      {
        icon: "TrendingUp",
        title: "Efficiency Gains",
        description:
          "Route analytics identify inefficiencies and optimization opportunities reducing fuel costs by 18%.",
      },
    ],
    useCases: [
      {
        title: "Delivery Tracking",
        description:
          "Real-time package and vehicle tracking with customer notifications and ETA updates improves delivery experience and reduces missed deliveries.",
        emoji: "📦",
      },
      {
        title: "Field Service Management",
        description:
          "Track technician locations and automate dispatch to nearest available resource reducing response time and improving first-time fix rates.",
        emoji: "🔧",
      },
      {
        title: "Asset Recovery",
        description:
          "Locate stolen or misplaced assets quickly with real-time tracking and historical location playback for law enforcement coordination.",
        emoji: "🚗",
      },
      {
        title: "Performance Analytics",
        description:
          "Analyze driver behavior, route efficiency, and asset utilization to identify training needs and operational improvements.",
        emoji: "📊",
      },
    ],
    stats: {
      uptime: "99.9%",
      users: "16K+",
      countries: "118+",
      support: "24/7",
    },
    testimonial: {
      quote:
        "TrackIt has given us complete visibility into our mobile workforce. Customer satisfaction is up 32% and we've reduced unauthorized vehicle use completely.",
      author: "Robert Kim",
      role: "Fleet Operations Manager",
      company: "Nationwide Service Corp",
    },
  },

  {
    id: 20,
    title: "Satellite-Based Real-Time Asset Monitoring",
    description:
      "Robust asset monitoring platform leveraging satellite technology for global real-time tracking, status updates, and risk management.",
    features: [
      "Global Satellite Tracking",
      "Real-Time Asset Status Monitoring",
      "Risk & Anomaly Detection",
      "Comprehensive Reporting & Alerts",
    ],
    price: "$349/month",
    category: "Infrastructure",
    imageUrl: "/asset-monitoring.jpg",
    codeName: "PF-AssetWatch",
    rating: 4.8,
    reviewCount: 1789,
    specifications: [
      { label: "Deployment", value: "Satellite Network / Cloud Backend" },
      { label: "Updates", value: "Hourly Satellite Updates" },
      { label: "Support", value: "24/7 Global Support" },
      { label: "Integration", value: "IoT & Satellite Device Compatible" },
      { label: "Scalability", value: "10 to Unlimited Assets" },
      { label: "Security", value: "Satellite-Grade Encryption" },
    ],
    benefits: [
      {
        icon: "Shield",
        title: "Global Coverage",
        description:
          "Track assets anywhere on Earth including remote areas with no cellular coverage using satellite connectivity.",
      },
      {
        icon: "Zap",
        title: "Reliable Communication",
        description:
          "Satellite-based tracking ensures uninterrupted monitoring even in the most challenging environments.",
      },
      {
        icon: "Users",
        title: "Asset Visibility",
        description:
          "Complete inventory visibility across global operations with centralized monitoring and reporting.",
      },
      {
        icon: "TrendingUp",
        title: "Risk Management",
        description:
          "Predictive analytics identify potential asset losses and enable proactive risk mitigation strategies.",
      },
    ],
    useCases: [
      {
        title: "Maritime Tracking",
        description:
          "Monitor vessel locations, cargo status, and route compliance across oceans with real-time updates and automated port arrival notifications.",
        emoji: "🚢",
      },
      {
        title: "Remote Equipment",
        description:
          "Track construction equipment, generators, and machinery in remote mining, oil, and construction sites without cellular infrastructure.",
        emoji: "🏗️",
      },
      {
        title: "Container Management",
        description:
          "Monitor shipping containers globally with location tracking, temperature sensors, and security breach detection for high-value cargo.",
        emoji: "📦",
      },
      {
        title: "Aviation Assets",
        description:
          "Track aircraft locations and flight parameters worldwide with comprehensive flight history and maintenance scheduling integration.",
        emoji: "✈️",
      },
    ],
    stats: {
      uptime: "99.9%",
      users: "4K+",
      countries: "142+",
      support: "24/7",
    },
    testimonial: {
      quote:
        "AssetWatch has given us true global visibility. We recovered $3M in equipment that was thought to be lost and reduced asset loss by 78% in remote operations.",
      author: "Captain James Morrison",
      role: "Global Logistics Director",
      company: "International Shipping Group",
    },
  },

  {
    id: 21,
    title: "Oilfield Operations Management System",
    description:
      "Comprehensive digital platform for managing onshore and offshore oilfield operations with real-time monitoring, asset tracking, and performance analytics.",
    features: [
      "Real-Time Well & Rig Monitoring",
      "Equipment Health Analytics",
      "Production Optimization Tools",
      "Safety & Compliance Dashboard",
    ],
    price: "$499/month",
    category: "Oil & Gas",
    imageUrl: "/oil-rig-monitoring.png",
    codeName: "PF-OilOps",
    rating: 4.9,
    reviewCount: 2156,
    specifications: [
      { label: "Deployment", value: "Hybrid Cloud / Edge Computing" },
      { label: "Updates", value: "Real-time Operational Data" },
      { label: "Support", value: "24/7 Petroleum Engineering Support" },
      { label: "Integration", value: "SCADA & PI System Compatible" },
      { label: "Scalability", value: "Single Well to Multi-Field" },
      { label: "Security", value: "Industrial Control System Security" },
    ],
    benefits: [
      {
        icon: "Shield",
        title: "Safety Excellence",
        description:
          "Real-time safety monitoring and automated shutdown protocols reduce incidents by 65% and ensure regulatory compliance.",
      },
      {
        icon: "Zap",
        title: "Production Optimization",
        description:
          "AI-powered analytics optimize well performance increasing production by 12% while reducing operating costs.",
      },
      {
        icon: "Users",
        title: "Remote Operations",
        description:
          "Centralized monitoring enables remote management reducing on-site personnel needs by 40% without compromising safety.",
      },
      {
        icon: "TrendingUp",
        title: "Asset Performance",
        description:
          "Predictive maintenance reduces equipment downtime by 45% and extends asset life by 20% through optimized operations.",
      },
    ],
    useCases: [
      {
        title: "Well Performance Monitoring",
        description:
          "Real-time monitoring of pressure, temperature, flow rates, and equipment status with automated alerts for abnormal conditions and production optimization.",
        emoji: "🛢️",
      },
      {
        title: "Production Optimization",
        description:
          "AI-driven analysis identifies opportunities to increase production, reduce gas flaring, and optimize artificial lift systems for maximum efficiency.",
        emoji: "📈",
      },
      {
        title: "Safety Management",
        description:
          "Comprehensive safety monitoring including gas detection, equipment status, and personnel tracking with automated emergency response protocols.",
        emoji: "⚠️",
      },
      {
        title: "Regulatory Compliance",
        description:
          "Automated compliance reporting for environmental regulations, production quotas, and safety standards with complete audit trail documentation.",
        emoji: "📋",
      },
    ],
    stats: {
      uptime: "99.95%",
      users: "5K+",
      countries: "48+",
      support: "24/7",
    },
    testimonial: {
      quote:
        "OilOps has transformed our operations. We've increased production by 14% while reducing our HSE incidents by 72%. The ROI was achieved in just 8 months.",
      author: "Ahmed Al-Rashid",
      role: "Operations Director",
      company: "Desert Petroleum Corporation",
    },
  },

  {
    id: 22,
    title: "Pipeline Integrity & Leak Detection Suite",
    description:
      "Advanced pipeline monitoring system using satellite imagery, pressure sensors, and AI algorithms to detect leaks, corrosion, and unauthorized activity along pipeline routes.",
    features: [
      "AI-Powered Leak Detection",
      "Corrosion & Pressure Monitoring",
      "Satellite & Drone Surveillance",
      "Automated Incident Alerts",
    ],
    price: "$279/month",
    category: "Oil & Gas",
    imageUrl: "/leak-detection.png",
    codeName: "PF-PipeSecure",
    rating: 4.9,
    reviewCount: 1876,
    specifications: [
      { label: "Deployment", value: "Distributed Edge / Satellite Hybrid" },
      { label: "Updates", value: "Continuous Sensor Monitoring" },
      { label: "Support", value: "24/7 Emergency Response Support" },
      { label: "Integration", value: "Pipeline SCADA Compatible" },
      { label: "Scalability", value: "10km to 15,000km Networks" },
      { label: "Security", value: "Critical Infrastructure Protection" },
    ],
    benefits: [
      {
        icon: "Shield",
        title: "Environmental Protection",
        description:
          "Detect leaks within minutes preventing environmental damage with 99.8% detection accuracy across all pipeline sizes.",
      },
      {
        icon: "Zap",
        title: "Multi-Method Detection",
        description:
          "Redundant detection using acoustic, pressure wave, satellite imagery, and flow analysis for guaranteed leak identification.",
      },
      {
        icon: "Users",
        title: "Integrity Management",
        description:
          "Comprehensive pipeline health monitoring enables risk-based inspection planning and regulatory compliance.",
      },
      {
        icon: "TrendingUp",
        title: "Cost Avoidance",
        description:
          "Prevent costly spills averaging $4.2M per incident while reducing inspection costs by 55% through targeted monitoring.",
      },
    ],
    useCases: [
      {
        title: "Leak Detection & Location",
        description:
          "Multi-sensor fusion technology pinpoints leak locations within 50 meters enabling rapid response and minimizing product loss and environmental impact.",
        emoji: "🚨",
      },
      {
        title: "Third-Party Interference",
        description:
          "Satellite and drone surveillance combined with ground sensors detect unauthorized excavation and prevent third-party damage to pipelines.",
        emoji: "🚧",
      },
      {
        title: "Corrosion Assessment",
        description:
          "Inline inspection data integration with cathodic protection monitoring predicts corrosion failures before they occur enabling preventive repairs.",
        emoji: "🔬",
      },
      {
        title: "Regulatory Compliance",
        description:
          "Automated integrity management reporting for API, DOT, and international standards with complete documentation and audit trails.",
        emoji: "📊",
      },
    ],
    stats: {
      uptime: "99.97%",
      users: "3K+",
      countries: "52+",
      support: "24/7",
    },
    testimonial: {
      quote:
        "PipeSecure detected a developing leak 36 hours before it would have become catastrophic. It literally saved us from a $50M environmental disaster and potential shutdown.",
      author: "Dr. Elena Volkov",
      role: "Pipeline Integrity Manager",
      company: "TransContinental Energy",
    },
  },

  {
    id: 23,
    title: "Upstream Exploration Intelligence Platform",
    description:
      "Geospatial exploration and drilling optimization tool integrating seismic data, satellite imagery, and geological analytics for efficient resource discovery.",
    features: [
      "Seismic & Geospatial Data Integration",
      "Reservoir Mapping & Analysis",
      "Drilling Site Optimization",
      "3D Geological Visualization",
    ],
    price: "$569/month",
    category: "Oil & Gas",
    imageUrl: "/upstream.png",
    codeName: "PF-DrillSight",
    rating: 4.8,
    reviewCount: 1432,
    specifications: [
      { label: "Deployment", value: "High-Performance Cloud / On-Premise" },
      { label: "Updates", value: "Continuous Data Integration" },
      { label: "Support", value: "Petroleum Geologist Support 24/7" },
      { label: "Integration", value: "Petrel & Kingdom Compatible" },
      { label: "Scalability", value: "Prospect to Basin-Wide Analysis" },
      { label: "Security", value: "Proprietary Data Protection" },
    ],
    benefits: [
      {
        icon: "Shield",
        title: "Risk Reduction",
        description:
          "Advanced geological modeling reduces dry hole risk by 35% through comprehensive subsurface analysis and prediction.",
      },
      {
        icon: "Zap",
        title: "Faster Discovery",
        description:
          "AI-powered prospect identification accelerates exploration cycle from years to months with automated pattern recognition.",
      },
      {
        icon: "Users",
        title: "Team Collaboration",
        description:
          "Integrated platform connects geologists, geophysicists, and engineers enabling seamless data sharing and decision-making.",
      },
      {
        icon: "TrendingUp",
        title: "Well Optimization",
        description:
          "Optimal well placement and trajectory planning increases recovery rates by 22% while reducing drilling costs.",
      },
    ],
    useCases: [
      {
        title: "Prospect Evaluation",
        description:
          "Integrate seismic, well log, and geological data to identify and rank drilling prospects with probabilistic reserve estimation and risk analysis.",
        emoji: "🎯",
      },
      {
        title: "Reservoir Characterization",
        description:
          "3D geological modeling and petrophysical analysis define reservoir properties enabling accurate production forecasting and field development planning.",
        emoji: "🗺️",
      },
      {
        title: "Drilling Optimization",
        description:
          "Real-time geological steering and formation evaluation optimize wellbore placement maximizing reservoir contact and production potential.",
        emoji: "🔧",
      },
      {
        title: "Field Development",
        description:
          "Comprehensive field modeling supports development planning including well spacing, facilities design, and production optimization strategies.",
        emoji: "🏭",
      },
    ],
    stats: {
      uptime: "99.8%",
      users: "2K+",
      countries: "38+",
      support: "24/7",
    },
    testimonial: {
      quote:
        "DrillSight's AI-powered analysis identified a prospect our team had overlooked. That discovery alone has 150 million barrels of proven reserves. Game-changing technology.",
      author: "Dr. Richard Hayes",
      role: "Chief Geologist",
      company: "Apex Exploration Inc",
    },
  },
  {
    id: 24,
    title: "Refinery Process Optimization System",
    description:
      "Smart refinery management solution designed to improve operational efficiency, reduce downtime, and optimize energy usage through predictive analytics and IoT integration.",
    features: [
      "Process Performance Analytics",
      "Predictive Maintenance",
      "IoT Sensor Integration",
      "Energy Efficiency Monitoring",
    ],
    price: "$639/month",
    category: "Oil & Gas",
    imageUrl: "/refinery.png",
    codeName: "PF-RefinEdge",
    rating: 4.9,
    reviewCount: 1654,
    specifications: [
      { label: "Deployment", value: "On-Premise / Private Cloud" },
      { label: "Updates", value: "Real-time Process Data" },
      { label: "Support", value: "24/7 Process Engineering Support" },
      { label: "Integration", value: "DCS & Historian Compatible" },
      { label: "Scalability", value: "Unit to Complex-Wide" },
      { label: "Security", value: "ISA/IEC 62443 Compliant" },
    ],
    benefits: [
      {
        icon: "Shield",
        title: "Process Safety",
        description:
          "Advanced monitoring detects process deviations early preventing incidents and ensuring continuous safe operations.",
      },
      {
        icon: "Zap",
        title: "Throughput Optimization",
        description:
          "AI-driven optimization increases refinery throughput by 8% while maintaining product quality specifications.",
      },
      {
        icon: "Users",
        title: "Operational Excellence",
        description:
          "Real-time KPI tracking and performance dashboards enable data-driven decision making across all operations teams.",
      },
      {
        icon: "TrendingUp",
        title: "Energy Savings",
        description:
          "Energy optimization algorithms reduce fuel consumption by 12% and lower carbon emissions by 15%.",
      },
    ],
    useCases: [
      {
        title: "Process Optimization",
        description:
          "Real-time optimization of crude distillation, catalytic cracking, and reforming units maximizes yields and minimizes energy consumption.",
        emoji: "⚗️",
      },
      {
        title: "Predictive Maintenance",
        description:
          "Machine learning models predict equipment failures weeks in advance enabling scheduled maintenance and preventing costly unplanned shutdowns.",
        emoji: "🔧",
      },
      {
        title: "Quality Control",
        description:
          "Continuous product quality monitoring and blend optimization ensure on-spec production while maximizing margins and reducing give-away.",
        emoji: "✅",
      },
      {
        title: "Energy Management",
        description:
          "Comprehensive energy monitoring identifies optimization opportunities in utilities, furnaces, and heat exchangers reducing operating costs.",
        emoji: "💡",
      },
    ],
    stats: {
      uptime: "99.9%",
      users: "1.8K+",
      countries: "42+",
      support: "24/7",
    },
    testimonial: {
      quote:
        "RefinEdge increased our refinery margin by $2.50 per barrel while reducing unplanned downtime by 68%. The system paid for itself in less than 6 months.",
      author: "Carlos Mendez",
      role: "Refinery Manager",
      company: "Coastal Refining Corporation",
    },
  },
  {
    id: 25,
    title: "Offshore Asset Monitoring Platform",
    description:
      "Real-time offshore monitoring and maintenance system leveraging satellite communication, drone inspection, and IoT data for improved safety and asset reliability.",
    features: [
      "Satellite-Based Offshore Monitoring",
      "Drone-Assisted Inspections",
      "Equipment Health Tracking",
      "Safety & Compliance Analytics",
    ],
    price: "$729/month",
    category: "Oil & Gas",
    imageUrl: "/offshore.png",
    codeName: "PF-OffshoreGuard",
    rating: 4.9,
    reviewCount: 1287,
    specifications: [
      { label: "Deployment", value: "Satellite / Edge / Cloud Hybrid" },
      { label: "Updates", value: "Real-time Offshore Data" },
      { label: "Support", value: "24/7 Marine Operations Support" },
      { label: "Integration", value: "Platform SCADA Compatible" },
      { label: "Scalability", value: "Single Platform to Fleet-Wide" },
      { label: "Security", value: "Maritime Cybersecurity Standards" },
    ],
    benefits: [
      {
        icon: "Shield",
        title: "Personnel Safety",
        description:
          "Real-time safety monitoring and emergency response coordination reduce offshore incidents by 58% and improve evacuation times.",
      },
      {
        icon: "Zap",
        title: "Remote Operations",
        description:
          "Satellite-based monitoring enables shore-based control reducing offshore personnel by 35% while maintaining operational safety.",
      },
      {
        icon: "Users",
        title: "Asset Visibility",
        description:
          "Complete visibility of offshore assets including platforms, FPSOs, and subsea equipment from centralized operations center.",
      },
      {
        icon: "TrendingUp",
        title: "Maintenance Optimization",
        description:
          "Drone inspections and predictive analytics reduce maintenance costs by 42% while improving equipment reliability.",
      },
    ],
    useCases: [
      {
        title: "Platform Monitoring",
        description:
          "Comprehensive monitoring of production equipment, safety systems, and environmental parameters with automated alerts for abnormal conditions.",
        emoji: "🏭",
      },
      {
        title: "Drone Inspections",
        description:
          "Automated drone flights inspect flare booms, risers, and topside equipment reducing manual inspection needs and improving safety.",
        emoji: "🚁",
      },
      {
        title: "Weather & Sea State",
        description:
          "Real-time weather monitoring and sea state forecasting support safe operations planning and emergency response preparation.",
        emoji: "🌊",
      },
      {
        title: "Subsea Systems",
        description:
          "Monitor subsea production systems, flowlines, and well integrity with predictive analytics for proactive intervention planning.",
        emoji: "🔧",
      },
    ],
    stats: {
      uptime: "99.95%",
      users: "2.5K+",
      countries: "35+",
      support: "24/7",
    },
    testimonial: {
      quote:
        "OffshoreGuard has revolutionized our platform operations. Drone inspections have reduced our inspection costs by $2.1M annually and eliminated most high-risk manual inspections.",
      author: "Captain Erik Johansen",
      role: "Offshore Operations Director",
      company: "North Sea Energy Partners",
    },
  },
  {
    id: 26,
    title: "Ground Station Manufacturing & Assembly Platform",
    description:
      "Comprehensive platform for designing, manufacturing, and assembling ground station infrastructure with modular components, quality tracking, and integration testing capabilities.",
    features: [
      "Modular Component Design Library",
      "Manufacturing Workflow Management",
      "Quality Control & Testing Integration",
      "Assembly Documentation & Tracking",
    ],
    price: "$849/month",
    category: "Aerospace",
    imageUrl: "/ground-station.png",
    codeName: "PF-GroundForge",
    rating: 4.9,
    reviewCount: 1156,
    specifications: [
      { label: "Deployment", value: "Cloud-based / On-premise Manufacturing" },
      { label: "Updates", value: "Continuous Integration Updates" },
      { label: "Support", value: "24/7 Engineering Support" },
      { label: "Integration", value: "CAD/PLM/ERP Compatible" },
      { label: "Scalability", value: "Single Station to Network-Wide" },
      { label: "Security", value: "ITAR/EAR Compliant Systems" },
    ],
    benefits: [
      {
        icon: "Shield",
        title: "Quality Assurance",
        description:
          "Comprehensive quality tracking from component sourcing through final integration ensures mission-critical reliability standards.",
      },
      {
        icon: "Zap",
        title: "Rapid Deployment",
        description:
          "Modular design and pre-tested components reduce ground station deployment time from 18 months to 6 months.",
      },
      {
        icon: "Users",
        title: "Cross-Team Collaboration",
        description:
          "Unified platform connects RF engineers, mechanical designers, and integration teams with real-time project visibility.",
      },
      {
        icon: "TrendingUp",
        title: "Cost Optimization",
        description:
          "Standardized components and streamlined manufacturing processes reduce ground station costs by 35% while improving performance.",
      },
    ],
    useCases: [
      {
        title: "Antenna System Integration",
        description:
          "Design and manufacture complete antenna systems including reflectors, feeds, and positioners with automated RF performance validation and pointing accuracy testing.",
        emoji: "📡",
      },
      {
        title: "RF Chain Assembly",
        description:
          "Integrated workflow for assembling and testing RF front-ends, down-converters, and signal processing chains with automated performance characterization.",
        emoji: "📻",
      },
      {
        title: "Control System Integration",
        description:
          "Manufacturing and integration of tracking control systems, servo drives, and monitoring infrastructure with comprehensive system-level testing protocols.",
        emoji: "🎛️",
      },
      {
        title: "Environmental Testing",
        description:
          "Complete environmental qualification including temperature cycling, vibration testing, and EMI/EMC validation ensuring operational reliability in harsh conditions.",
        emoji: "🔬",
      },
    ],
    stats: {
      uptime: "99.8%",
      users: "1.2K+",
      countries: "48+",
      support: "24/7",
    },
    testimonial: {
      quote:
        "GroundForge transformed our ground station production. We've reduced manufacturing time by 55% and our first-pass integration success rate improved from 73% to 96%.",
      author: "Dr. Sarah Chen",
      role: "Ground Systems Director",
      company: "Orbital Communications Network",
    },
  },
  {
    id: 27,
    title: "Satellite Manufacturing & Assembly Suite",
    description:
      "End-to-end satellite production platform managing design, component integration, testing, and quality assurance for commercial and government satellite programs.",
    features: [
      "Digital Twin Manufacturing",
      "Component Traceability System",
      "Automated Testing & Validation",
      "Launch Readiness Management",
    ],
    price: "$1,299/month",
    category: "Aerospace",
    imageUrl: "/satellite-manufacture.png",
    codeName: "PF-SatForge",
    rating: 4.9,
    reviewCount: 892,
    specifications: [
      { label: "Deployment", value: "Secure Cloud / Air-Gapped Manufacturing" },
      { label: "Updates", value: "Real-time Production Tracking" },
      { label: "Support", value: "24/7 Spacecraft Engineering Support" },
      { label: "Integration", value: "PLM/MES/Quality Systems Compatible" },
      { label: "Scalability", value: "CubeSat to Large GEO Satellites" },
      { label: "Security", value: "ITAR/EAR/Export Control Compliant" },
    ],
    benefits: [
      {
        icon: "Shield",
        title: "Mission Assurance",
        description:
          "Rigorous quality control and traceability prevent anomalies with 99.7% first-flight success rate for manufactured satellites.",
      },
      {
        icon: "Zap",
        title: "Production Efficiency",
        description:
          "Streamlined workflows and digital integration reduce satellite manufacturing cycle time by 40% without compromising quality.",
      },
      {
        icon: "Users",
        title: "Supply Chain Visibility",
        description:
          "Complete component tracking from procurement through integration ensures on-time delivery and identifies bottlenecks early.",
      },
      {
        icon: "TrendingUp",
        title: "Cost Reduction",
        description:
          "Standardized processes and automated testing reduce manufacturing costs by 30% while improving reliability and performance.",
      },
    ],
    useCases: [
      {
        title: "Bus Integration",
        description:
          "Comprehensive workflow for satellite bus assembly including structure, propulsion, power, and thermal systems with automated fit-check and alignment verification.",
        emoji: "🛰️",
      },
      {
        title: "Payload Integration",
        description:
          "Manage complex payload integration including optical systems, RF communications, and sensors with performance testing and calibration documentation.",
        emoji: "📷",
      },
      {
        title: "Environmental Qualification",
        description:
          "Complete test campaign management including thermal-vacuum, vibration, acoustic, and EMC testing with automated data analysis and acceptance criteria validation.",
        emoji: "🔧",
      },
      {
        title: "Launch Preparation",
        description:
          "Integrated launch readiness tracking including final inspections, fueling operations, encapsulation, and transportation with comprehensive documentation and checklists.",
        emoji: "🚀",
      },
    ],
    stats: {
      uptime: "99.9%",
      users: "845+",
      countries: "32+",
      support: "24/7",
    },
    testimonial: {
      quote:
        "SatForge has revolutionized our satellite production line. We've manufactured 47 satellites with zero on-orbit failures and reduced our production costs by $1.8M per satellite.",
      author: "James Mitchell",
      role: "VP of Satellite Manufacturing",
      company: "Constellation Space Systems",
    },
  },
];
