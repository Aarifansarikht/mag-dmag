import { HOME_SERVICES } from '@/lib/constants'
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import React from 'react'
import SectionReveal from '../shared/SectionReveal'
import { Button } from '../ui/Primitives'
import Link from 'next/link'

function ComprehensivesSection() {
  return (
         <section className="pb-20 md:pb-32 bg-white relative overflow-hidden">
              {/* Subtle Technical Texture */}
              {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" /> */}

              <div className="container mx-auto px-4 md:px-6 max-w-screen-2xl relative z-10">
                {/* Header */}
                <SectionReveal className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-stone-100 shadow-sm rounded-full text-[10px] font-mono uppercase tracking-widest text-stone-500 mb-6">
                    Service Ecosystem
                  </span>

                  <h2 className="font-display text-4xl md:text-6xl font-bold text-ink leading-tight tracking-tight">
                    Comprehensive <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cobalt via-yellow-500 to-stone-700">
                      Engineering Services.
                    </span>
                  </h2>
                </SectionReveal>

                {/* Services Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {HOME_SERVICES.map((service, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      viewport={{ once: true }}
                      className="group relative bg-white rounded-[1.5rem] md:rounded-[2rem] border border-stone-100 hover:border-cobalt/30 shadow-sm hover:shadow-xl hover:shadow-cobalt/10 transition-all"
                    >
                      {/* Top Accent */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cobalt to-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />

                      {/* Index */}
                      <div className="absolute top-6 right-6 text-[56px] font-black text-stone-100 group-hover:text-cobalt/10 transition-colors pointer-events-none">
                        {service.id}
                      </div>

                      <div className="p-8 md:p-10 flex flex-col h-full">
                        {/* Icon */}
                        <div className="mb-6 h-14 w-14 rounded-xl bg-amber-50 flex items-center justify-center text-cobalt shadow-sm group-hover:bg-cobalt group-hover:text-white transition-all">
                          {service.icon && <service.icon size={22} strokeWidth={1.5} />}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl md:text-2xl font-display font-bold text-stone-900 mb-4 group-hover:text-cobalt transition-colors">
                          {service.title}
                        </h3>

                        {/* Bullets */}
                        <ul className="space-y-3 mb-6 flex-grow">
                          {service.bullets.map((bullet, idx) => (
                            <li key={idx} className="flex gap-3 items-start">
                              <span className="w-1.5 h-1.5 bg-cobalt mt-2 rounded-full" />
                              <span className="text-stone-600 text-sm leading-relaxed">{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tags */}
                        <div className="pt-5 border-t border-stone-100 flex flex-wrap gap-2">
                          {service.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="text-[9px] font-mono uppercase tracking-wider px-2 py-1 bg-stone-50 text-stone-500 border border-stone-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-16 md:mt-24 text-center">
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="rounded-full bg-white border-stone-200 text-stone-900 hover:border-cobalt hover:bg-cobalt hover:text-white px-8 md:px-10 h-12 md:h-14 text-xs md:text-sm shadow-lg transition-all"
                    >
                      Download Detailed Service PDF
                      <ArrowRight size={16} className="ml-3" />
                    </Button>
                  </Link>
                </div>
              </div>
            </section>
  )
}

export default ComprehensivesSection