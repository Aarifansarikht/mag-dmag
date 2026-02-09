
import { IMAGES } from "./constants";

export const PRODUCTS = [
  // === DRAIN OUTLETS ===
  {
    id: "floor-drains",
    title: "Floor Drains",
    category: "Drain Outlets",
    image: IMAGES.products.floor_drains,
    spec: "SS304 / SS316",
    description:
      "High-quality stainless steel floor drains suitable for commercial, residential, and industrial flooring systems.",
    features: [
      "Removable trap",
      "Anti-odor design",
      "Heavy-duty grating",
      "Adjustable height"
    ]
  },
  {
    id: "cleanouts",
    title: "Cleanouts",
    category: "Drain Outlets",
    image: IMAGES.products.cleanouts,
    spec: "Gas Tight",
    description:
      "Access covers for drainage pipelines ensuring gas-tight and water-tight inspection access.",
    features: [
      "Double seal gasket",
      "Screw-down cover",
      "Corrosion resistant",
      "Easy maintenance"
    ]
  },
  {
    id: "shower-drains",
    title: "Shower Drains",
    category: "Drain Outlets",
    image: IMAGES.products.shower_drains,
    spec: "Linear / Square",
    description:
      "Modern shower drainage systems for wet rooms, hotels, and luxury bathrooms.",
    features: [
      "Linear & square options",
      "Hair catcher",
      "Tile insert design",
      "High flow capacity"
    ]
  },

  // === RAINWATER / ROOF ===
  {
    id: "rainwater-outlets",
    title: "Rainwater Outlets",
    category: "Roof Drainage",
    image: IMAGES.products.rainwater_outlets,
    spec: "High Flow",
    description:
      "Vertical rainwater outlets designed for flat roofs and podium slabs.",
    features: [
      "Domed grating",
      "High discharge rate",
      "Waterproofing flange",
      "Durable construction"
    ]
  },
  {
    id: "roof-scupper-drains",
    title: "Roof Scupper Drains",
    category: "Roof Drainage",
    image: IMAGES.products.roof_scupper,
    spec: "Horizontal Outlet",
    description:
      "Side outlet drainage systems for parapet walls and roof edges.",
    features: [
      "Custom fabrication",
      "Bitumen membrane compatible",
      "Stainless steel body",
      "Efficient discharge"
    ]
  },

  // === PARKING & AREA ===
  {
    id: "parking-area-drains",
    title: "Parking & Area Drains",
    category: "External Drainage",
    image: IMAGES.products.parking_area,
    spec: "Heavy Duty",
    description:
      "Robust drainage solutions for parking areas, driveways, and industrial zones.",
    features: [
      "High load bearing",
      "Sediment bucket",
      "Heel-proof grating",
      "Long service life"
    ]
  },

  // === KITCHEN & ABLUTION ===
  {
    id: "kitchen-drainage",
    title: "Kitchen Drainage Solutions",
    category: "Kitchen & Ablution",
    image: IMAGES.products.kitchen_drainage,
    spec: "Hygienic Design",
    description:
      "Slotted and channel drains designed for commercial kitchens and food processing areas.",
    features: [
      "Easy to clean",
      "Anti-bacterial design",
      "High flow capacity",
      "Slip-resistant grating"
    ]
  },
  {
    id: "ablution-gratings",
    title: "Ablution Gratings",
    category: "Kitchen & Ablution",
    image: IMAGES.products.ablution_gratings,
    spec: "Mosque Standard",
    description:
      "Custom stainless steel gratings for mosque ablution and wash areas.",
    features: [
      "Anti-slip surface",
      "Custom sizes",
      "Corrosion resistant",
      "Easy maintenance"
    ]
  },

  // === GRATINGS & GULLY ===
  {
    id: "gully-gratings",
    title: "Gratings & Gully Gratings",
    category: "Infrastructure",
    image: IMAGES.products.gully_gratings,
    spec: "Ductile Iron",
    description:
      "Roadside and surface water gully gratings for stormwater management.",
    features: [
      "High load rating",
      "Bicycle safe",
      "Hinged cover",
      "Long lifespan"
    ]
  },

  // === MANHOLE COVERS ===
  {
    id: "manhole-covers",
    title: "Manhole Covers",
    category: "Infrastructure",
    image: IMAGES.products.manhole_covers,
    spec: "D400 – F900",
    description:
      "Heavy-duty ductile iron manhole covers for roads, highways, and airports.",
    features: [
      "Anti-theft design",
      "Noise reduction gasket",
      "Custom logo option",
      "International standards compliant"
    ]
  }
];

export const PROJECTS = [
  {
    id: "lusail-stadium",
    title: "Lusail Stadium",
    location: "Doha, Qatar",
    category: "Sports Infrastructure",
    year: "2021",
    client: "Supreme Committee",
    image: IMAGES.projects.lusail,
    heroImage: IMAGES.steel.stadium,
    description: "The flagship venue for the 2022 World Cup. MAG Group was commissioned to fabricate complex secondary steel structures and heavy-duty drainage infrastructure for the surrounding precincts.",
    challenge: "The project required intricate curved steel geometries to match the 'lantern' vessel design of the stadium. Additionally, the drainage systems needed to handle extreme flash-flood scenarios within the podium areas.",
    solution: "We utilized 5-axis CNC plasma cutting to achieve the complex node geometries required for the steel facade supports. For drainage, we engineered a custom slot-drain system with F900 load rating to withstand emergency vehicle traffic.",
    stats: {
      tonnage: "4,500 Tons",
      duration: "18 Months",
      architect: "Foster + Partners",
      scope: "Structural Steel & Drainage"
    },
    gallery: [IMAGES.projects.lusail, IMAGES.steel.stadium, IMAGES.misc.bridge]
  },
  {
    id: "museum-future",
    title: "Museum of the Future",
    location: "Dubai, UAE",
    category: "Cultural",
    year: "2020",
    client: "Dubai Future Foundation",
    image: IMAGES.projects.museum,
    heroImage: IMAGES.hero.facade,
    description: "An architectural marvel with a torus shape. Our involvement focused on the invisible infrastructure that keeps the building functioning—specifically the stainless steel drainage networks integrated into the calligraphy facade.",
    challenge: "Standard drainage covers would disrupt the seamless calligraphy panels. The system needed to be invisible yet fully accessible for maintenance.",
    solution: "We designed a bespoke 'Stone-In-Edge' access cover system that perfectly aligned with the stainless steel facade panels, effectively disappearing into the structure while maintaining full functionality.",
    stats: {
      tonnage: "N/A",
      duration: "12 Months",
      architect: "Killa Design",
      scope: "Specialized Drainage"
    },
    gallery: [IMAGES.projects.museum, IMAGES.hero.facade]
  },
  {
    id: "hamad-airport",
    title: "Hamad Int. Airport",
    location: "Doha, Qatar",
    category: "Transport",
    year: "2019",
    client: "Civil Aviation Authority",
    image: IMAGES.projects.airport,
    heroImage: IMAGES.hero.civil,
    description: "Expansion of the central concourse. We provided the primary steelwork for the new tropical garden roof structure and heavy-duty runway drainage.",
    challenge: "Logistics within a live airport environment meant zero-tolerance for delays. The roof structure required long-span trusses to create an open, column-free space.",
    solution: "We implemented a modular fabrication strategy, pre-assembling 40m truss sections in our factory and transporting them at night to minimize operational impact.",
    stats: {
      tonnage: "12,000 Tons",
      duration: "24 Months",
      architect: "HOK",
      scope: "Roof Structure"
    },
    gallery: [IMAGES.projects.airport, IMAGES.steel.structure]
  },
  {
    id: "yas-marina",
    title: "Yas Marina Circuit",
    location: "Abu Dhabi, UAE",
    category: "Sports Infrastructure",
    year: "2018",
    client: "Aldar Properties",
    image: IMAGES.projects.yas,
    heroImage: IMAGES.misc.bridge,
    description: "Upgrades to the track infrastructure including new grandstand steel supports and trackside drainage improvement.",
    challenge: "The drainage system had to be capable of clearing the track surface instantly during sudden downpours to prevent race stoppages.",
    solution: "We installed our 'Monoblock' polymer concrete channels with high-capacity intake slots, ensuring rapid water evacuation even during high-speed race conditions.",
    stats: {
      tonnage: "1,200 Tons",
      duration: "6 Months",
      architect: "Tilke Engineers",
      scope: "Track Infrastructure"
    },
    gallery: [IMAGES.projects.yas, IMAGES.misc.bridge]
  }
];
export const serviceList = [
  {
    id:1,
    title: "Structural Steel Systems",
    desc: "Engineered steel frameworks for complex and large-scale construction projects.",
    image: "/images/services/structural-steel.jpg",
    items: ["High-Rise Building Frames", "Stadium & Arena Structures", "Steel Bridge Systems"],
  },
  {
    id:2,

    title: "Light Steel & Mezzanine Systems",
    desc: "Optimized lightweight steel solutions for efficient space utilization.",
    image: "/images/services/mezzanine-steel.jpg",
    items: ["Light Steel Structures", "Steel Mezzanine Floors", "Suspended Steel Flooring"],
  },
  {
    id:3,

    title: "Prefabricated & Industrial Buildings",
    desc: "Factory-engineered steel buildings for fast-track project execution.",
    image: "/images/services/prefab-buildings.jpg",
    items: ["Prefabricated Steel Buildings", "Industrial Facilities", "Tarpaulin-Covered Steel Structures"],
  },
  {
    id:4,

    title: "Logistics & Warehouse Structures",
    desc: "Heavy-duty steel systems for logistics, storage, and distribution facilities.",
    image: "/images/services/logistics-warehouse.jpg",
    items: ["Logistics Warehouses", "High-Span Roof Structures", "Racking Support Systems"],
  },
  {
    id:5,

    title: "Specialized & Retractable Systems",
    desc: "Custom-engineered steel solutions for advanced architectural requirements.",
    image: "/images/services/retractable-systems.jpg",
    items: ["Retractable Glass Roof Systems", "Architectural Steel Elements"],
  },
  {
    id:6,

    title: "Energy, Utility & Access Systems",
    desc: "Steel systems designed for safety, durability, and operational efficiency.",
    image: "/images/services/energy-doors.jpg",
    items: ["Steel Transformer Doors", "Energy-Efficient Steel Doors"],
  },
  {
    id:7,

    title: "Shutters, Barriers & Automation",
    desc: "Automated steel access and security systems.",
    image: "/images/services/shutters-automation.jpg",
    items: ["Rolling Shutters", "Gate & Barrier Systems"],
  },
  {
    id:8,

    title: "Protective & Safety Structures",
    desc: "Fabricated steel systems focused on protection and compliance.",
    image: "/images/services/protective-railings.jpg",
    items: ["Protective Railings", "Guardrails & Handrails"],
  },
  {
    id:9,

    title: "Villas & Residential Steel Systems",
    desc: "Modern steel construction for villas and residential developments.",
    image: "/images/services/steel-villas.jpg",
    items: ["Steel Villas", "Luxury Residential Steel"],
  },
];

export const getProduct = (id: string) => PRODUCTS.find(p => p.id === id);
export const getProject = (id: string) => PROJECTS.find(p => p.id === id);
