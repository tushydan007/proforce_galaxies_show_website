export interface Product {
  id: number;
  title: string;
  description: string;
  features: string[];
  price: string;
  category: string;
  imageUrl: string;
  codeName?: string;
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
  },
  // {
  //   id: 2,
  //   title: "LiDAR Scanner X1",
  //   description:
  //     "Portable high-precision LiDAR scanner for field operations and rapid data collection.",
  //   features: [
  //     "360° Scanning",
  //     "Sub-centimeter Accuracy",
  //     "Cloud Sync",
  //     "Battery: 8 Hours",
  //   ],
  //   price: "$15,999",
  //   category: "Infrastructure",
  //   imageUrl: "/lidar.png",
  //   codeName: "PF-TerraScan",
  // },
  {
    id: 3,
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
  },

  {
    id: 4,
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
  },
  {
    id: 5,
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
    imageUrl: "agric.jpg",
    codeName: "PF-AgriSense",
  },
  {
    id: 6,
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
    imageUrl: "/urban-planning.jpg",
    codeName: "PF-CityScape",
  },
  {
    id: 7,
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
  },
  {
    id: 8,
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
  },
  {
    id: 9,
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
  },
  {
    id: 10,
    title: "Weather Intelligence Suite",
    description:
      "Advanced weather data and forecasting platform with hyperlocal insights, alert systems, and decision support tools.",
    features: [
      "Hyperlocal Weather Forecasts",
      "Severe Weather Alerts",
      "Historical Weather Data",
      "Decision Support Analytics",
    ],
    price: "$159/month",
    category: "Disaster management",
    imageUrl: "/weather-intelligence.png",
    codeName: "PF-StormWatch",
  },
  {
    id: 11,
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
  },
  {
    id: 12,
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
  },
  {
    id: 13,
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
  },
  {
    id: 14,
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
    imageUrl: "urban-growth.png",
    codeName: "PF-UrbanGrowth",
  },
  {
    id: 15,
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
    category: "Energy",
    imageUrl: "/pipeline.png",
    codeName: "PF-PipeWatch",
  },
  {
    id: 16,
    title: "Logistics & Delivery Management System",
    description:
      "End-to-end delivery management platform with real-time tracking, automated dispatching, and customer notifications.",
    features: [
      "Real-Time Delivery Tracking",
      "Automated Dispatch & Routing",
      "Driver & Fleet Management",
      "Customer Notifications & Proof of Delivery",
    ],
    price: "$259/month",
    category: "Transportation",
    imageUrl: "/logistic.jpg",
    codeName: "PF-DeliverEase",
  },
  {
    id: 17,
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
  },
  {
    id: 18,
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
  },
  {
    id: 19,
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
    codeName: "PF-WeatherWise",
  },
  {
    id: 20,
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
  },
  {
    id: 21,
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
    codeName: "PF-MonitorPro",
  },
  {
    id: 22,
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
  },
  {
    id: 23,
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
  },
];
