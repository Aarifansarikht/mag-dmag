import { CAPABILITIES_DATA } from '@/lib/constants'
import { motion } from 'motion/react'
import React from 'react'
import SectionReveal from '../shared/SectionReveal'

function CapabilitiesSection() {
  return (
    <section className="py-20 md:py-32 bg-transparent relative overflow-hidden">
              {/* Subtle Technical Background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

              <div className="container mx-auto px-4 md:px-6 max-w-screen-2xl relative z-10">
                {/* Header */}
                <SectionReveal className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 shadow-sm rounded-full text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-6">
                    Operational Scope
                  </span>

                  <h2 className="font-display text-4xl md:text-6xl font-bold text-ink leading-tight tracking-tight">
                    Capabilities{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cobalt to-yellow-500">
                      Snapshot.
                    </span>
                  </h2>
                </SectionReveal>

                {/* Capability Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                  {CAPABILITIES_DATA.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      viewport={{ once: true }}
                      className="group bg-white rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-10 border border-stone-100 hover:border-cobalt/30 shadow-sm hover:shadow-xl hover:shadow-cobalt/10 transition-all hover:-translate-y-1"
                    >
                      {/* Icon */}
                      <div className="mb-6 h-14 w-14 rounded-xl bg-amber-50 flex items-center justify-center text-cobalt shadow-sm group-hover:bg-cobalt group-hover:text-white transition-all">
                        {item.icon && <item.icon size={22} strokeWidth={1.5} />}
                      </div>

                      {/* Label */}
                      <span className="block text-[10px] font-mono uppercase tracking-widest text-stone-400 mb-3">
                        {item.label}
                      </span>

                      {/* Title */}
                      <h3 className="text-lg md:text-xl font-display font-bold text-stone-900 mb-4 group-hover:text-cobalt transition-colors">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-stone-600 text-sm leading-relaxed mb-6">{item.description}</p>

                      {/* Tags — FIXED */}
                      <div className="pt-5 border-t border-stone-100 flex flex-wrap gap-2">
                        {item.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-[9px] font-mono uppercase tracking-wider px-3 py-1.5 rounded-full bg-stone-50 text-stone-500 border border-stone-200 hover:border-cobalt/40 hover:text-cobalt transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

  )
}

export default CapabilitiesSection