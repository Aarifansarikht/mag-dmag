"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Primitives";
import { SOLUTIONS } from "@/lib/constants";

/* Reuse your existing animation wrapper */
const SectionReveal = ({ children, className }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-5%" }}
    transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function EngineeredSolutionsSection() {
  return (
    <section className="py-16 md:py-28 bg-[#0C0A09] relative overflow-hidden">
      {/* Industrial Blueprint Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_70%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* HEADER */}
        <SectionReveal className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8 mb-12 md:mb-20 pb-8 border-b border-white/10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="px-3 py-1 bg-gradient-to-r from-cobalt to-stone-700 text-white rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(212,175,55,0.45)]">
             Industrial Excellence Matrix
              </div>
           
            </div>

            <h2 className="font-display text-4xl md:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Solutions We

              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cobalt to-yellow-300">
               Provide.
              </span>
            </h2>

            <p className="text-stone-300 text-base md:text-lg leading-relaxed pl-4 md:pl-6 border-l-4 border-cobalt">
              Integrated product systems designed for drainage, structural, and
              infrastructure applications — engineered for compliance, durability,
              and long-term performance in demanding environments.
            </p>
          </div>

          <Link href="/products">
            <Button
              variant="outline"
              className="border-stone-600 text-white hover:bg-white hover:text-black hover:border-white h-12 md:h-14 px-10 md:px-12 rounded-full backdrop-blur-sm bg-white/5 text-xs md:text-sm"
            >
              Explore Systems
            </Button>
          </Link>
        </SectionReveal>

        {/* SOLUTION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {SOLUTIONS.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
              className="group relative h-[520px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/60"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-40 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/80 to-transparent" />
                <div className="absolute inset-0 industrial-grid opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-10">
                {/* Division Tag */}
                <div className="mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-300" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-yellow-300/80">
                    DIV-0{index + 1}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 leading-none group-hover:text-yellow-400 transition-colors">
                  {solution.title}
                </h3>

                <div className="h-0.5 w-12 bg-gradient-to-r from-cobalt to-yellow-300 mb-4 group-hover:w-full transition-all duration-500" />

                <p className="text-stone-300 text-xs md:text-sm mb-6 line-clamp-3">
                  {solution.description}
                </p>

                <Link
                  href={`/products?tab=${solution.tab}`}
                  className="inline-flex items-center justify-between w-full p-3 md:p-4 rounded-xl bg-white/5 border border-white/10 group-hover:bg-cobalt group-hover:border-cobalt transition-all backdrop-blur-sm"
                >
                  <span className="text-white font-bold uppercase text-[10px] md:text-xs tracking-widest">
                    View System Details
                  </span>
                  <ArrowRight
                    size={14}
                    className="text-white transform group-hover:translate-x-2 transition-transform"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
