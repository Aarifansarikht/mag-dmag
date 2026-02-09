"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Factory,
  Target,
  ShieldCheck,
  Wrench,
  Building2,
  Handshake,
  Flag,
  Compass,
} from "lucide-react";
import { IMAGES } from "@/lib/constants";

const Reveal = ({ children, className = "" }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
    viewport={{ once: true }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function AboutClient() {
  return (
    <>
      {/* ================= WHO WE ARE ================= */}
      <section className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative bg-white px-10 py-20 lg:px-24 lg:py-28 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="relative z-10 max-w-xl">
              <Reveal>
                <span className="block text-[10px] font-bold uppercase tracking-[0.35em] text-cobalt mb-6">
                  About MAG
                </span>

                <h2 className="text-4xl md:text-5xl font-display font-bold text-ink mb-8 leading-tight">
                  Who We Are
                </h2>

                <p className="text-lg font-medium text-ink leading-relaxed mb-6">
                  A regional partner network built for reliability and engineering clarity.
                </p>

                <p className="text-tech-500 leading-relaxed mb-10">
                  MAG GENERAL TRADING WLL (Qatar) and DMAG TRADING CO WLL (UAE) operate as a regional partner network
                  focused on drainage products, stainless steel fabrication, and metal casting supply. Since the early
                  days of Gulf infrastructure growth, we’ve supported contractors with standards-aligned products,
                  engineering-led guidance, and dependable regional logistics.
                </p>

                <div className="grid grid-cols-2 gap-10 border-t border-tech-100 pt-8">
                  <div>
                    <span className="block text-4xl font-display font-bold text-cobalt mb-1">40+</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-tech-400">
                      Years Experience
                    </span>
                  </div>
                  <div>
                    <span className="block text-4xl font-display font-bold text-cobalt mb-1">GCC</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-tech-400">
                      Regional Coverage
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="relative min-h-[520px]">
            <img
              src={IMAGES.misc.history}
              alt="MAG History"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= WHAT GUIDES US ================= */}
      <section className="py-28 bg-tech-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:32px_32px]" />

        <div className="container mx-auto px-6 relative z-10">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-4">
                What Guides Us
              </h2>
              <p className="text-tech-500 max-w-xl mx-auto">
                The principles that define how we work, deliver, and support every project.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
              {[
                { icon: Handshake, title: "Reliability", desc: "Deliver what we promise, when we promise." },
                {
                  icon: ShieldCheck,
                  title: "Engineering-First",
                  desc: "Fit-for-purpose, standards-aligned solutions.",
                },
                { icon: Wrench, title: "Safety & Integrity", desc: "Responsible practices and durable materials." },
                { icon: Building2, title: "Partnership", desc: "We work as an extension of your project team." },
              ].map((item, i) => (
                <div key={i}>
                  <item.icon className="mx-auto mb-4 text-cobalt" size={28} />
                  <h4 className="text-sm font-bold uppercase tracking-widest text-ink mb-2">
                    {item.title}
                  </h4>
                  <p className="text-tech-500 text-sm max-w-xs mx-auto">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= OUR DIFFERENCE ================= */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

        <div className="container mx-auto px-6 relative z-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="block text-[10px] font-bold uppercase tracking-[0.35em] text-cobalt mb-4">
                Why MAG
              </span>

              <h2 className="text-4xl md:text-5xl font-display font-bold text-ink mb-6 leading-tight">
                Our Difference
              </h2>

              <p className="text-tech-500 text-lg leading-relaxed">
                What sets MAG apart is not only what we supply, but how we reduce risk, simplify decisions, and
                support projects from coordination through completion.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 max-w-6xl mx-auto">
            {[
              {
                icon: Target,
                title: "Proven Track Record",
                desc: "Four decades delivering complex, deadline-driven infrastructure and commercial projects.",
              },
              {
                icon: ShieldCheck,
                title: "Engineering-Led Support",
                desc: "Product selection guidance, submittals, take-offs, and standards compliance.",
              },
              {
                icon: Factory,
                title: "Custom Fabrication Excellence",
                desc: "Stainless steel fabricated precisely to approved drawings and specifications.",
              },
              {
                icon: Wrench,
                title: "Quality & Compliance",
                desc: "Controlled QA/QC processes aligned with international standards.",
              },
              {
                icon: Handshake,
                title: "Coordinated Logistics",
                desc: "Deliveries aligned with site schedules to minimize risk and delays.",
              },
              {
                icon: Building2,
                title: "Long-Term Partnership",
                desc: "After-sales support and continuity well beyond project handover.",
              },
            ].map((item, i) => (
              <Reveal key={i}>
                <div className="group flex items-start gap-6">
                  <div className="h-14 w-14 shrink-0 rounded-2xl bg-white border border-tech-200 shadow-sm flex items-center justify-center text-cobalt group-hover:bg-cobalt group-hover:text-white transition-all duration-300">
                    <item.icon size={24} />
                  </div>

                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-ink mb-2">
                      {item.title}
                    </h4>
                    <p className="text-tech-500 text-sm leading-relaxed max-w-md">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-32 bg-tech-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:32px_32px]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                icon: Flag,
                title: "Mission",
                desc: "To supply reliable, standards-aligned drainage products and deliver custom stainless steel fabrication that helps contractors build safe, efficient infrastructure.",
              },
              {
                icon: Compass,
                title: "Vision",
                desc: "To be the GCC’s most trusted partner for drainage and stainless steel solutions, known for engineering excellence and dependable delivery.",
              },
            ].map((item, i) => (
              <Reveal key={i}>
                <div className="p-14 bg-white rounded-[3rem] border border-tech-200 shadow-xl">
                  <item.icon className="text-cobalt mb-6" size={28} />
                  <h3 className="text-3xl font-display font-bold text-ink mb-4">
                    {item.title}
                  </h3>
                  <p className="text-tech-500 text-lg leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
