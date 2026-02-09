"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";

import PageHeader from "@/components/ui/PageHeader";
import { PRODUCTS, serviceList } from "@/lib/data";
import { Button } from "@/components/ui/Primitives";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Box } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { HOME_SERVICES, IMAGES } from "@/lib/constants";

/* ---------------- TYPES ---------------- */
type TabType = "drainage" | "steel" | "metal_casting" | "services";

/* ---------------- METAL CASTING DATA ---------------- */
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
    description: "Project-specific iron castings engineered for drainage, access, and heavy-duty applications.",
    tags: ["BUILT TO DRAWING", "LOAD RATED", "PROJECT SUPPLY"],
  },
];

/* ---------------- METAL CASTING CARD ---------------- */

const MetalCastingCard = ({ item }: { item: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="relative group rounded-3xl p-10 bg-black border border-white/10 overflow-hidden"
  >
    {/* subtle glow (DO NOT BLOCK CLICKS) */}
    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top,#facc1520,transparent_60%)]" />

    {/* CONTENT */}
    <div className="relative z-10">
      <h3 className="text-white font-display text-2xl font-bold mb-4">{item.title}</h3>

      <p className="text-stone-400 text-sm leading-relaxed mb-8">{item.description}</p>

      {/* TAGS */}
      <div className="flex flex-wrap gap-2 mb-10">
        {item.tags.map((tag: string, i: number) => (
          <span
            key={i}
            className="text-[10px] uppercase tracking-widest font-mono px-4 py-1.5 border border-white/10 rounded-full text-stone-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* BUTTONS */}
      <div className="flex gap-4">
        {/* DATASHEET */}
        <Link
          href="/contact"
          className="px-6 py-3 text-xs uppercase tracking-widest border border-white/20 rounded-full text-white hover:bg-white/10 transition inline-block"
        >
          Datasheet
        </Link>

        {/* GET QUOTE */}
        <Link
          href="/contact"
          className="px-6 py-3 text-xs uppercase tracking-widest bg-amber-400 text-black font-bold rounded-full hover:bg-amber-300 transition inline-flex items-center gap-2"
        >
          Get Quote
        </Link>
      </div>
    </div>
  </motion.div>
);

/* ---------------- PRODUCT CARD ---------------- */
const ProductCard = ({ item, activeTab }: { item: any; activeTab: TabType }) => (
  // <Link href={`/products/${item.id}`}>
  <Link href={`#`}>
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all aspect-[4/5] cursor-pointer border border-tech-100"
    >
      {/* IMAGE */}
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

      {/* CATEGORY */}
      <div className="absolute top-4 right-4 z-10">
        <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
          {item.category}
        </span>
      </div>

      {/* CONTENT */}
      <div className="absolute bottom-0 left-0 w-full p-8 z-10">
        <p className="text-yellow-300 text-xs font-mono font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {item.spec}
        </p>

        <h3 className="text-white font-display text-2xl font-bold mb-4">{item.title}</h3>

        {/* ACTION BUTTONS */}
        <div className="flex flex-wrap gap-2">
          {/* DATASHEET */}
          <Button
            size="sm"
            className="bg-white/90 text-ink hover:bg-white rounded-full h-9 px-4 text-[10px] uppercase tracking-widest"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.location.href = "/contact";
            }}
          >
            Datasheet
          </Button>

          {/* GET QUOTE */}
          <Button
            size="sm"
            className="bg-amber-400 text-black hover:bg-amber-300 rounded-full h-9 px-4 text-[10px] uppercase tracking-widest font-bold"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.location.href = "/contact";
            }}
          >
            Get a Quote
          </Button>
        </div>
      </div>
    </motion.div>
  </Link>
);

/* ---------------- PAGE ---------------- */
export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState<TabType>("drainage");

  const drainageProducts = PRODUCTS.filter(
    (p) => p.category !== "Structural Steel" && p.category !== "Steel Fabrication" && p.category !== "metal_casting",
  );

  const steelProducts = serviceList;

  const metalCastingProducts = PRODUCTS.filter((p) => p.category === "metal_casting");

  const displayProducts =
    activeTab === "drainage"
      ? drainageProducts
      : activeTab === "steel"
        ? steelProducts
        : activeTab === "metal_casting"
          ? metalCastingProducts
          : [];

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink font-sans">
    
      <main className="flex-grow">
        <PageHeader
          title="Engineered Solutions"
          subtitle="Explore our EN124 drainage systems and structural steel capabilities."
          badge="Product Catalog"
          image={IMAGES.headers.products}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Solutions", href: "/products" },
          ]}
        />

        {/* ---------- TAB SWITCHER ---------- */}
        <div className="container mx-auto px-6 -mt-8 relative z-20 flex justify-center">
          <div className="inline-flex bg-white p-2 rounded-full border border-tech-200 shadow-xl">
            {[
              { key: "drainage", label: "Drainage Systems" },
              { key: "steel", label: "Steel Fabrication" },
              { key: "metal_casting", label: "Metal Casting" },
              { key: "services", label: "Services" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as TabType)}
                className={cn(
                  "px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider transition-all",
                  activeTab === tab.key ? "bg-cobalt text-white shadow-lg" : "text-tech-500 hover:text-ink",
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ---------- CONTENT ---------- */}
        <section className="py-24 bg-paper relative">
          <div className="container mx-auto px-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {activeTab === "metal_casting" ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {METAL_CASTING_CARDS.map((card, i) => (
                      <MetalCastingCard key={i} item={card} />
                    ))}
                  </div>
                ) : activeTab === "services" ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {HOME_SERVICES.map((service, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="group bg-white rounded-3xl border border-stone-100 hover:shadow-xl transition"
                      >
                        <div className="p-10 flex flex-col h-full">
                          <div className="mb-6 h-14 w-14 rounded-xl bg-amber-50 flex items-center justify-center text-cobalt group-hover:bg-cobalt group-hover:text-white transition">
                            {service.icon && <service.icon size={22} />}
                          </div>

                          <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>

                          <ul className="space-y-3 mb-6 flex-grow">
                            {service.bullets.map((b, idx) => (
                              <li key={idx} className="flex gap-3">
                                <span className="w-1.5 h-1.5 bg-cobalt mt-2 rounded-full" />
                                <span className="text-stone-600 text-sm">{b}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="pt-5 border-t border-stone-100 flex flex-wrap gap-2">
                            {service.tags.map((tag, idx) => (
                              <span
                                key={idx}
                                className="text-[9px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-stone-50 border"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {displayProducts.map((item) => (
                      <ProductCard key={item.id} item={item} activeTab={activeTab} />
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>

 
    </div>
  );
}
