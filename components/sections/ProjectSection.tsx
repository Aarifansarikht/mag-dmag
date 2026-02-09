import { SECTORS } from '@/lib/constants';
import Link from 'next/link';
import React from 'react'
import SectionReveal from '../shared/SectionReveal';
import { Button } from '../ui/Primitives';
import Image from "next/image";

function ProjectSection() {
  return (
      <SectionReveal>
              <div className="flex items-center justify-between mb-8 md:mb-12">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-ink">Sectors We Serve</h3>
                {/* <Link
                  href="/projects"
                  className="hidden md:flex items-center gap-2 text-sm font-bold uppercase text-cobalt hover:text-ink transition-colors"
                >
                  View Portfolio <ArrowRight size={16} />
                </Link> */}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
                {SECTORS.map((sector, index) => {
                  const Icon = sector.icon;

                  return (
                    <div
                      key={index}
                      className="group relative aspect-[4/5] rounded-[1.5rem] md:rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                    >
                      {/* Image */}
                      <Image
                        src={sector.image}
                        alt={sector.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-yellow-300">
                            <Icon size={20} strokeWidth={1.5} />
                          </div>
                          <div className="h-1 w-8 bg-gradient-to-r from-cobalt to-yellow-300" />
                        </div>

                        <h4 className="text-white font-display font-bold text-lg md:text-xl leading-tight mb-1">
                          {sector.name}
                        </h4>
                        <p className="text-stone-300 text-[10px] md:text-xs font-mono uppercase tracking-wider">
                          {sector.details}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Mobile CTA */}
              <div className="mt-8 text-center md:hidden">
                <Link href="/projects">
                  <Button variant="outline" className="w-full rounded-full">
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </SectionReveal>
  )
}

export default ProjectSection