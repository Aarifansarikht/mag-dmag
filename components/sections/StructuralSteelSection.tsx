"use client";

import SectionReveal from "../shared/SectionReveal";
import ServiceCard from "../shared/ServiceCard";
import { serviceList } from "@/lib/data";
import { Button } from "../ui/Primitives";
import Link from "next/link";

export default function StructuralSteelSection() {
  return (
 <section className="py-16 md:py-28 bg-[#0C0A09] relative overflow-hidden">
          {/* Industrial Blueprint Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1),transparent_70%)]" />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <SectionReveal className="flex flex-col md:flex-row justify-between items-end gap-6 md:gap-8 mb-12 md:mb-20 pb-8 border-b border-white/10">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="px-3 py-1 bg-gradient-to-r from-cobalt to-stone-700 text-white rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(212,175,55,0.5)]">
                    Division 02
                  </div>
                  <span className="text-stone-400 font-mono text-[10px] md:text-xs uppercase tracking-widest border border-stone-700 px-3 py-1 rounded-full bg-stone-800/50">
                    ISO 3834-2 Certified
                  </span>
                </div>
                <h2 className="font-display text-4xl md:text-7xl font-bold text-white mb-4 md:mb-6">
                  Structural Steel
                </h2>
                <p className="text-stone-300 text-base md:text-lg leading-relaxed pl-4 md:pl-6 border-l-4 border-cobalt">
                  We operate one of the region's largest dual-hub fabrication networks. Our facilities in Qatar and UAE
                  are equipped with automated CNC beam lines, blasting chambers, and painting booths.
                </p>
              </div>

              {/* Stats Box */}
              <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] backdrop-blur-md hover:bg-white/10 transition-colors w-full md:w-auto">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cobalt to-yellow-200">
                    35k
                  </span>
                  <span className="text-xs md:text-sm font-bold text-white uppercase">Tons / Year</span>
                </div>
                <p className="text-[10px] md:text-xs text-stone-400 mt-2 uppercase tracking-wider">
                  Total Production Capacity
                </p>
              </div>
            </SectionReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
              {serviceList.slice(0, 6).map((service, index) => (
                <ServiceCard
                  key={service.title}
                  index={index}
                  title={service.title}
                  subtitle={service.desc}
                  image={service.image}
                  specs={service.items}
                  link="/services"
                />
              ))}
            </div>
            <div className="mt-12 md:mt-16 text-center">
              <Link href="/services">
                <Button
                  variant="outline"
                  className="border-stone-600 text-white hover:bg-white hover:text-black hover:border-white h-12 md:h-14 px-10 md:px-12 rounded-full backdrop-blur-sm bg-white/5 text-xs md:text-sm"
                >
                  View Capabilities Matrix
                </Button>
              </Link>
            </div>
          </div>
        </section>
  );
}
