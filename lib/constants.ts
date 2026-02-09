import { Droplets, Wrench, Layers, HardHat, Settings, ShieldCheck, Timer, Truck , Plane,
  ShoppingBag,
  Stethoscope,
  Factory,
  Building,
  Award,
  BoxSelect,
  FileText,
  LayoutGrid,
  Cpu,
  Headphones,
  PencilRuler,} from "lucide-react";

export const IMAGES = {
  hero: {
    civil: "/images/banner/banner-1.jpg",
    drain: "/images/drain.jpg",
    steel: "/images/services/structural-steel.jpg",
    facade: "/images/banner/banner-1.jpg",
  },

 products: {
    floor_drains: "/images/products/drainage/floor1.jpg",
    cleanouts: "/images/products/drainage/cleanouts2.jpg",
    shower_drains: "/images/products/drainage/drain1.jpg",

    rainwater_outlets: "/images/products/rainwater-outlets.jpg",
    roof_scupper: "/images/products/drainage/roof1.jpg",

    parking_area: "/images/products/drainage/parking2.jpg",

    kitchen_drainage: "/images/products/kitchen-ablution-drains.jpg",
    ablution_gratings: "/images/products/drainage/ablution_grating.jpg",

    gully_gratings: "/images/products/gratings-gully.jpg",

    manhole_covers: "/images/products/drainage/cover2.jpg",
  },
  steel: {
    beams_hero: "/images/services/structural-steel.jpg",
    structure: "/images/services/steel-structure.jpg",
    mezzanine: "/images/services/mezzanine-steel.jpg",
    stadium: "/images/services/logistics-warehouse.jpg",
  },

  services: {
    security: "/images/services/protective-railings.jpg",
    energy_doors: "/images/services/energy-doors.jpg",
    prefab: "/images/services/prefab-buildings.jpg",
    automation: "/images/services/shutters-automation.jpg",
    retractable: "/images/services/retractable-systems.jpg",
  },

  projects: {
    lusail: "/images/drain.jpg",
    museum: "/images/about.jpg",
    airport: "/images/Inspection.jpg",
    yas: "/images/solar-lighting.jpg",
  },

  headers: {
    about: "/images/about.jpg",
    products: "/images/products/drainage-solutions.jpg",
    accreditation: "/images/services/steel-fabrication-1.jpg",
    contact: "/images/services/steel-fabrication-2.jpg",
  },

  misc: {
    factory: "/images/services/steel-fabrication-1.jpg",
    history: "/images/services/steel-fabrication-2.jpg",
    qatar_office: "/images/banner/banner-2.jpg",
    uae_office: "/images/banner/banner-3.jpg",
    lab: "/images/services/structural-steel.jpg",
    map_bg: "/images/banner/banner-1.jpg",
    bridge: "/images/services/logistics-warehouse.jpg",
  },

  patterns: {
    carbon: "/images/patterns/carbon.png",
    graphy: "/images/patterns/graphy.png",
    cubes: "/images/patterns/cubes.png",
  },

  flags: {
    qatar: "/images/flags/qatar.jpg",
    uae: "/images/flags/uae.jpg",
  },
};
export const SOLUTIONS = [
  {
    id: "drainage",
    tab: "drainage",
    title: "Drainage Products & Accessories",
    description:
      "Floor drains, channel/trench drains, linear drains, roof drains, rainwater outlets, gullies, grease traps, and more.",
    icon: Droplets,
    image: "/images/products/drainage/drain3.jpg",
  },
  {
    id: "stainless",
    tab: "steel",
    title: "Stainless Steel Fabrication",
    description:
      "Custom floor drains, channels, gratings, catch pits, handrails, and bespoke SS304/SS316 components.",
    icon: Wrench,
    image: "/images/services/retractable-systems.jpg",
  },
  {
    id: "casting",
    tab: "casting",
    title: "Metal Casting Supply",
    description:
      "Ductile and grey iron manhole covers, gratings, frames, and custom castings to project requirements.",
    icon: Layers,
    image: "/images/metal-casting.jpg",
  },
  {
    id: "support",
    tab: "services",
    title: "Project Supply & Support",
    description:
      "Submittals, shop drawings, value engineering, quantity take-offs, and inspection coordination.",
    icon: HardHat,
    image: "/images/supply.jpg",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Experience You Can Build On",
    description: "Four decades of specialized expertise in drainage and heavy fabrication for Gulf infrastructure.",
    icon: Timer
  },
  {
    title: "Engineering Support",
    description: "Responsive design assistance, technical submittals, and Value Engineering (VE) options.",
    icon: Settings
  },
  {
    title: "Quality & Durability",
    description: "All products built to relevant international standards (BS EN) and specific project requirements.",
    icon: ShieldCheck
  },
  {
    title: "Custom Capability",
    description: "Stainless steel made to drawing, ensuring precise fit, finish, and material specification.",
    icon: Wrench
  },
  {
    title: "Regional Logistics",
    description: "On-time delivery across Qatar, UAE, and the wider GCC via our strategic hubs.",
    icon: Truck
  }
];



export const SECTORS = [
  {
    name: "Infrastructure",
    icon: Plane,
    details: "Roads, Metro, Utilities",
    image: "/images/sectors/infrastructure.jpg",
  },
  {
    name: "Commercial",
    icon: ShoppingBag,
    details: "Malls, Offices, Hospitality",
    image: "/images/sectors/commercial-building.jpg",
  },
  {
    name: "Healthcare & Education",
    icon: Stethoscope,
    details: "Medical Hubs, Schools",
    image: "/images/sectors/health-care.jpg",
  },
  {
    name: "Industrial & Energy",
    icon: Factory,
    details: "Refineries, Power, Storage",
    image: "/images/services/steel-fabrication-1.jpg",
  },
  {
    name: "Residential & Mixed-Use",
    icon: Building,
    details: "Luxury Living, High-rise",
    image: "/images/sectors/residential.jpg",
  },
];
export const CAPABILITIES_DATA = [
  {
    id: 'MAT-01',
    label: 'Materials',
    title: 'SS304, SS316',
    description: 'Specialized stainless steel grades with optional custom alloys available on request for specific corrosive environments.',
    icon: BoxSelect,
    tags: ['SS304', 'SS316', 'L-Grades']
  },
  {
    id: 'APP-02',
    label: 'Applications',
    title: 'Multi-Environment',
    description: 'Wet areas, plant rooms, kitchens, podiums, roads, utilities, and D&B (Design & Build) projects.',
    icon: LayoutGrid ,
    tags: ['Infrastructure', 'Commercial', 'MEP']
  },
  {
    id: 'DOC-03',
    label: 'Documentation',
    title: 'Technical Packages',
    description: 'Comprehensive submittals, shop drawings, O&M inputs, and step-by-step installation guides.',
    icon: FileText,
    tags: ['Submittals', 'Shop Drawings', 'O&M']
  },
  {
    id: 'STD-04',
    label: 'Standards',
    title: 'Global Alignment',
    description: 'We align strictly to relevant international standards specified by the project (BS EN / ISO / ASTM).',
    icon: Award ,
    tags: ['EN 124', 'ISO 9001', 'BS Standards']
  }
];

export const HOME_SERVICES = [
  {
    id: '01',
    title: 'Design & Pre-Construction Support',
    icon: PencilRuler,
    bullets: [
      'Product selection and specification assistance',
      'Quantity take-offs and submittal packages',
      'Value engineering for lifecycle performance and cost'
    ],
    tags: ['Technical Consulting', 'Quantity Take-off']
  },
  {
    id: '02',
    title: 'Stainless Steel Fabrication',
    icon: Cpu ,
    bullets: [
      'Custom drains, channels, gratings, sumps, and housings',
      'SS304/SS316 options, finish per requirement',
      'Precision welding and QA checks'
    ],
    tags: ['Custom Build', 'SS316 / SS304']
  },
  {
    id: '03',
    title: 'Drainage Products & Accessories Supply',
    icon: Droplets ,
    bullets: [
      'Floor/roof drains, linear/trench channels, gullies, grease traps',
      'Manhole covers, access covers, and gratings',
      'Backwater valves, cleanouts, separators, and more'
    ],
    tags: ['Infrastructure', 'Plumbing Supply']
  },
  {
    id: '04',
    title: 'Metal Casting Supply',
    icon: Layers ,
    bullets: [
      'Ductile/grey iron covers, gratings, frames',
      'Project-specific sizing and load classifications (as specified)'
    ],
    tags: ['Heavy Duty', 'EN 124 Standard']
  },
  {
    id: '05',
    title: 'Procurement, Logistics & Site Coordination',
    icon: Truck ,
    bullets: [
      'Regional delivery across Qatar, UAE, and the GCC',
      'Phased deliveries aligned to site installation',
      'Inspection coordination and documentation'
    ],
    tags: ['Regional Ops', 'Site Management']
  },
  {
    id: '06',
    title: 'After-Sales Support',
    icon: Headphones ,
    bullets: [
      'Replacement parts, adjustments, and continuous assistance'
    ],
    tags: ['Warranty Support', 'Technical Help']
  }
];

export const DRAINAGE_PRODUCTS = [
  {
    title: "Floor Drains",
    subtitle: "Heavy-duty stainless steel floor drains for commercial and industrial use.",
    image: IMAGES.products.floor_drains,
    link: "/products/floor-drains",
  },
  {
    title: "Cleanouts",
    subtitle: "Accessible cleanout solutions for maintenance and inspection.",
    image: IMAGES.products.cleanouts,
    link: "/products/cleanouts",
  },
  {
    title: "Shower Drains",
    subtitle: "Linear and point drains for modern wet areas.",
    image: IMAGES.products.shower_drains,
    link: "/products/shower-drains",
  },
  {
    title: "Rainwater Outlets",
    subtitle: "High-capacity rainwater and roof drainage outlets.",
    image: IMAGES.products.rainwater_outlets,
    link: "/products/rainwater-outlets",
  },
  {
    title: "Parking & Area Drains",
    subtitle: "Heavy-duty drains for basements and parking structures.",
    image: IMAGES.products.parking_area,
    link: "/products/parking-area-drains",
  },
  {
    title: "Manhole Covers",
    subtitle: "Ductile iron covers compliant with EN 124 standards.",
    image: IMAGES.products.manhole_covers,
    link: "/products/manhole-covers",
  },
];
const METAL_CASTING_CARDS = [
  {
    title: "DUCTILE IRON MANHOLE COVERS",
    description:
      "EN124 compliant ductile iron covers and frames for infrastructure, utilities, and roadway applications.",
    tags: ["EN124", "D400", "E600", "CUSTOM SIZES"],
  },
  {
    title: "GREY IRON CASTINGS",
    description:
      "Grey iron covers, gratings, and frames manufactured to project-specific load and sizing requirements.",
    tags: ["CUSTOM CASTING", "INFRASTRUCTURE", "UTILITIES"],
  },
  {
    title: "CUSTOM METAL CASTINGS",
    description:
      "Project-specific iron castings engineered for drainage, access, and heavy-duty applications.",
    tags: ["BUILT TO DRAWING", "LOAD RATED", "PROJECT SUPPLY"],
  },
];
