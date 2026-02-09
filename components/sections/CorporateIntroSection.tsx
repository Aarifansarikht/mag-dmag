"use client";

import { Factory, Wrench, ShieldCheck, Globe2 } from "lucide-react";
import { motion } from "framer-motion";

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

export default function CorporateIntroSection() {
  return (
    <section className="py-16 md:py-32 px-4 relative overflow-hidden bg-gradient-to-b from-white to-stone-50">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />

          <div className="container mx-auto max-w-7xl relative z-10">
            <SectionReveal className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16 mb-16 md:mb-24">
              {/* LEFT : Heading */}
              <div className="lg:w-3/5">
                <div className="flex items-center gap-4 mb-4 md:mb-6">
                  <div className="h-[2px] w-8 md:w-12 bg-gradient-to-r from-cobalt to-yellow-400" />
                  <span className="text-cobalt font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest">
                    40+ YEARS OF EXPERTISE
                  </span>
                </div>

                <h2 className="font-display text-4xl sm:text-5xl md:text-8xl font-bold text-ink leading-[1] md:leading-[0.95] tracking-tight">
                  Built on <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cobalt via-yellow-600 to-stone-700">
                    Engineering Trust.
                  </span>
                </h2>
              </div>

              {/* RIGHT : Description + bullets */}
              <div className="lg:w-2/5">
                <div className="border-l-2 border-stone-200 pl-6">
                  <p className="text-base md:text-xl text-stone-600 leading-relaxed font-medium mb-6">
                    For over four decades, we've supported civil and MEP contractors with reliable drainage products,
                    custom stainless steel fabrication, and metal casting supply—delivered with technical support and
                    regional logistics you can count on.
                  </p>

                  <ul className="space-y-3 text-sm md:text-base text-stone-600">
                    <li className="flex gap-2">
                      <span className="text-cobalt font-bold">•</span>
                      Factory-backed manufacturing for infrastructure, commercial, and industrial projects
                    </li>
                    <li className="flex gap-2">
                      <span className="text-cobalt font-bold">•</span>
                      Regional presence in Doha and Dubai, serving the GCC
                    </li>
                    <li className="flex gap-2">
                      <span className="text-cobalt font-bold">•</span>
                      Engineering-led support from design coordination to final delivery
                    </li>
                  </ul>
                </div>
              </div>
            </SectionReveal>

            {/* STATS */}
            <SectionReveal className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { label: "Market Tenure", val: "40+", unit: "Tons", icon: Factory },
                { label: "Drainage Systems Supplied", val: "1M", unit: "%", icon: Wrench },
                { label: "Global Compliance", val: "ISO", unit: "9001", icon: ShieldCheck },
                { label: "Regional Focus", val: "GCC", unit: "Years", icon: Globe2 },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="group bg-white p-5 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-stone-100 hover:border-cobalt/30 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-cobalt/5 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <stat.icon className="w-12 h-12 md:w-16 md:h-16 text-cobalt" />
                  </div>
                  <div className="relative z-10">
                    <div className="mb-2 md:mb-4 text-stone-400 group-hover:text-cobalt transition-colors">
                      <stat.icon className="w-5 h-5 md:w-7 md:h-7" />
                    </div>
                    <p className="text-3xl md:text-5xl font-display font-bold text-ink mb-1 md:mb-2">{stat.val}</p>
                    <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-stone-500">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </SectionReveal>
          </div>
        </section>
  );
}
