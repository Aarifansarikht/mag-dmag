import { Droplets } from "lucide-react";
import SectionReveal from "../shared/SectionReveal";

import { IMAGES } from "@/lib/constants";
import Link from "next/link";
import { Button } from "../ui/Primitives";
import ProductCard from "../shared/ProductCard";


export default function DrainageProductsSection() {
  return (
<section className="py-16 md:py-28 bg-stone-50 relative overflow-hidden">
          {/* Unique Texture: Radial Dots */}
          <div className="absolute inset-0 bg-[radial-gradient(#D6D3D1_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
          {/* <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" /> */}
          {/* <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1C1917] to-transparent" /> */}

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <SectionReveal className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-md shadow-stone-200/50 mb-6 md:mb-8 border border-stone-100">
                <Droplets className="text-cobalt w-3 h-3 md:w-4 md:h-4" />
                <span className="text-stone-500 font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest">
                  Division 01
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-bold text-stone-900 mb-4 md:mb-6">
                Drainage Products
              </h2>
              <p className="text-stone-500 text-base md:text-lg leading-relaxed">
                Precision engineered EN124 drainage systems designed for longevity. Our systems manage the flow of water
                in the region's most demanding environments.
              </p>
            </SectionReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <ProductCard
                index={0}
                title="Linear Channels"
                subtitle="Minimalist stainless steel shower channels and slot drains that seamlessly integrate into modern floor finishes."
                image={IMAGES.products.shower_drains}
                link="/products/shower-drains"
              />

              <ProductCard
                index={1}
                title="Manhole Covers"
                subtitle="Heavy-duty ductile iron manhole covers for highways, ports, airports, and municipal roads (D400–F900)."
                image={IMAGES.products.manhole_covers}
                link="/products/manhole-covers"
              />

              <ProductCard
                index={2}
                title="Hygienic Drainage Systems"
                subtitle="SS316 slot and channel drainage systems with odor-seal traps for commercial kitchens and food processing areas."
                image={IMAGES.products.kitchen_drainage}
                link="/products/kitchen-drainage"
              />

              <ProductCard
                index={3}
                title="Roof & Balcony Drainage"
                subtitle="High-flow rainwater outlets and roof scupper drains for podiums, balconies, and flat roofs."
                image={IMAGES.products.rainwater_outlets}
                link="/products/rainwater-outlets"
              />

              <ProductCard
                index={4}
                title="Parking & Area Drains"
                subtitle="Heavy-duty drainage solutions with sediment buckets for basements and multi-storey parking structures."
                image={IMAGES.products.parking_area}
                link="/products/parking-area-drains"
              />

              <ProductCard
                index={5}
                title="Gully Gratings"
                subtitle="Ductile iron hinged gully gratings designed for roadside and surface stormwater management."
                image={IMAGES.products.gully_gratings}
                link="/products/gully-gratings"
              />
            </div>

            <div className="mt-12 md:mt-16 text-center">
              <Link href="/products">
                <Button
                  variant="outline"
                  className="rounded-full bg-white border-stone-200 text-stone-900 hover:border-cobalt hover:bg-cobalt hover:text-white px-8 md:px-10 h-12 md:h-14 text-xs md:text-sm shadow-xl shadow-stone-200 transition-all hover:scale-105"
                >
                  View Full Catalog
                </Button>
              </Link>
            </div>
          </div>
        </section>
  );
}
