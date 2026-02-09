"use client";

import PageHeader from "@/components/ui/PageHeader";
import {
  ShieldCheck,
  Globe2,
  CheckCircle2,
  Microscope,
  Factory,
  ClipboardCheck,
  FileCheck,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/constants";

/* ---------------------------------- */
/* Certificate Card */
/* ---------------------------------- */
const CertificateItem = ({ icon: Icon, title, code, points, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="group bg-white p-10 rounded-[2rem] border border-tech-200 shadow-sm hover:shadow-xl transition-all"
  >
    <div className="flex items-start justify-between mb-10">
      <div className="h-16 w-16 bg-tech-50 rounded-2xl flex items-center justify-center text-cobalt group-hover:bg-cobalt group-hover:text-white transition-colors">
        <Icon size={30} />
      </div>
      <ArrowUpRight className="opacity-20 group-hover:opacity-100 text-cobalt transition-opacity" />
    </div>

    <p className="font-mono text-xs font-bold text-tech-400 tracking-widest mb-2 uppercase">
      {code}
    </p>
    <h3 className="text-2xl font-bold text-ink mb-6">{title}</h3>

    <div className="space-y-4">
      {points.map((item: string) => (
        <div key={item} className="flex items-center gap-3 text-tech-600">
          <CheckCircle2 size={16} className="text-cobalt" />
          <span className="text-sm font-semibold uppercase tracking-wide">
            {item}
          </span>
        </div>
      ))}
    </div>
  </motion.div>
);

/* ---------------------------------- */
/* Page */
/* ---------------------------------- */
export default function AccreditationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-paper">
 

      <main className="flex-grow">
        <PageHeader
          title="Quality & Compliance"
          subtitle="Certified systems, audited processes, and manufacturing rigor that meet global infrastructure benchmarks."
          badge="ISO Certified"
          image={IMAGES.headers.accreditation}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Accreditation", href: "/accreditation" },
          ]}
        />

        {/* ================= SECTION ================= */}
        <section className="py-24 relative overflow-hidden">
          {/* ✅ CHECK / GRID TEXTURE (FIXED) */}
          <div
            className="absolute inset-0 pointer-events-none
            bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),
                linear-gradient(to_bottom,#00000010_1px,transparent_1px)]
            bg-[size:24px_24px]"
          />

          <div className="container mx-auto px-6 relative z-10">
            {/* Intro */}
            <div className="max-w-4xl mb-24">
              <p className="label-technical mb-6">
                Quality Assurance Framework
              </p>
              <h2 className="text-5xl md:text-6xl font-display font-bold text-ink mb-6">
                Certified.
                <br />
                <span className="text-cobalt">Compliance.</span>
              </h2>
              <p className="text-tech-500 text-lg leading-relaxed">
                Our operations function under a unified global compliance
                matrix, ensuring every casting and fabrication meets stringent
                infrastructure standards.
              </p>
            </div>

            {/* ISO Standards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-40">
              <CertificateItem
                icon={ShieldCheck}
                title="ISO 9001:2015 – Quality Management"
                code="STANDARD 01"
                delay={0.1}
                points={[
                  "Continuous Process Optimization",
                  "Supply Chain Traceability",
                  "Stakeholder Risk Assessment",
                ]}
              />

              <CertificateItem
                icon={Globe2}
                title="ISO 14001:2015 – Environmental Management"
                code="STANDARD 02"
                delay={0.2}
                points={[
                  "Material Waste Minimization",
                  "Energy Efficient Fabrication",
                  "Eco-compliant Logistics",
                ]}
              />
            </div>

            {/* Manufacturing Rigor */}
            <section className="mb-40">
              <div className="text-center mb-24">
                <span className="label-technical block mb-4">
                  Validation Workflow
                </span>
                <h3 className="text-4xl md:text-5xl font-display font-bold text-ink">
                  Manufacturing Rigor
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  {
                    title: "Material Testing",
                    icon: Microscope,
                    desc: "Spectral analysis of raw ingots and alloys.",
                  },
                  {
                    title: "Load Batching",
                    icon: Factory,
                    desc: "EN-124 structural load verification.",
                  },
                  {
                    title: "Dimensional Accuracy",
                    icon: ClipboardCheck,
                    desc: "High-precision laser measurements.",
                  },
                  {
                    title: "Final Certification",
                    icon: FileCheck,
                    desc: "Batch-specific technical passports.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="bg-white p-8 rounded-3xl border border-tech-200 shadow-sm hover:shadow-xl transition-all"
                  >
                    <div className="h-12 w-12 bg-tech-50 rounded-xl flex items-center justify-center text-cobalt mb-6">
                      <item.icon size={22} />
                    </div>
                    <h4 className="font-bold text-ink mb-3">
                      {item.title}
                    </h4>
                    <p className="text-sm text-tech-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>

    
    </div>
  );
}
