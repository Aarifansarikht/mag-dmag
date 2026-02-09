"use client";

import SectionReveal from "../shared/SectionReveal";
import { WHY_CHOOSE_US } from "@/lib/constants";
import Link from "next/link";
import { Button } from "@/components/ui/Primitives";
import { motion } from "motion/react";

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 md:py-28 bg-white relative overflow-hidden">
      {/* Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(#e4e4e7_1px,transparent_1px),linear-gradient(to_right,#e4e4e7_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionReveal className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center mb-16 md:mb-24">
          {/* LEFT : IMAGE */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-stone-200 border-4 border-white h-[320px] md:h-auto">
              <img src="/images/about.jpg" alt="Factory Support" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-cobalt/30 to-transparent mix-blend-overlay" />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-8 bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-xl border border-stone-50 max-w-[200px] md:max-w-xs hidden sm:block">
              <div className="text-4xl font-black text-cobalt mb-1">40+</div>
              <div className="text-[10px] font-black uppercase tracking-[0.35em] text-stone-600">
                Years of Proven Performance
              </div>
            </div>
          </div>

          {/* RIGHT : CONTENT */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="h-[2px] w-10 bg-gradient-to-r from-cobalt to-yellow-400" />
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-stone-500">
                Our Advantage
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-6xl font-bold text-ink mb-6 md:mb-8 leading-tight">
              Why Contractors <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cobalt to-stone-800">
                Choose Us.
              </span>
            </h2>

            <div className="space-y-5 md:space-y-6">
              {WHY_CHOOSE_US.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="flex gap-4 items-start"
                >
                  <div className="h-10 w-10 rounded-xl bg-amber-50 flex items-center justify-center text-cobalt shadow-sm shrink-0">
                    {item.icon && <item.icon size={18} strokeWidth={1.5} />}
                  </div>

                  <div>
                    <h4 className="font-bold uppercase tracking-wider text-xs text-ink mb-1">{item.title}</h4>
                    <p className="text-stone-600 text-sm leading-relaxed max-w-lg">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 md:mt-10">
              <Link href="/contact">
                <Button className="h-12 md:h-14 px-8 md:px-10 rounded-full bg-ink text-white hover:bg-cobalt shadow-xl hover:shadow-2xl transition-all text-xs md:text-sm">
                  Visit Our Facilities
                </Button>
              </Link>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
