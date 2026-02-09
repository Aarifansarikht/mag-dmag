import { Award } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import SectionReveal from '../shared/SectionReveal'
import { Button } from '../ui/Primitives'

function CtaSeaction() {
  return (
     <section className="py-20 md:py-32 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <SectionReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white border border-stone-100 shadow-sm rounded-full mb-6 md:mb-8">
                <Award className="w-3 h-3 md:w-4 md:h-4 text-cobalt" />
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-stone-500">
                  ISO 9001 • 14001 • 45001
                </span>
              </div>
              <h2 className="font-display text-5xl md:text-8xl font-bold mb-6 md:mb-8 text-ink tracking-tight">
                Reliable Solutions. On-Time Delivery.
              </h2>
              <p className="text-base md:text-xl text-stone-500 mb-10 md:mb-12 max-w-2xl mx-auto">
                Partner with the GCC's manufacturing and trading elite for your next infrastructure bid.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-cobalt text-white hover:bg-yellow-600 h-14 md:h-16 px-10 md:px-12 text-sm md:text-base rounded-full shadow-2xl shadow-yellow-500/30 hover:-translate-y-1 transition-all w-full sm:w-auto"
                  >
                    Contact Us
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-14 md:h-16 px-10 md:px-12 text-sm md:text-base rounded-full border-stone-200 bg-white hover:bg-stone-50 text-stone-700 w-full sm:w-auto"
                  >
                    Our Locations
                  </Button>
                </Link>
              </div>
            </SectionReveal>
          </div>
        </section>
  )
}

export default CtaSeaction