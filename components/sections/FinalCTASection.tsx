"use client";

import SectionReveal from "../shared/SectionReveal";
import Link from "next/link";
import { Button } from "@/components/ui/Primitives";

export default function FinalCTASection() {
  return (
    <section className="py-32 bg-gradient-to-b from-stone-50 to-white text-center">
      <SectionReveal>
        <h2 className="text-7xl font-bold mb-6">
          Reliable Solutions. On-Time Delivery.
        </h2>
        <p className="text-stone-500 mb-10">
          Partner with the GCC’s manufacturing elite.
        </p>

        <div className="flex justify-center gap-6">
          <Link href="/contact">
            <Button className="rounded-full">Contact Us</Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" className="rounded-full">
              Our Locations
            </Button>
          </Link>
        </div>
      </SectionReveal>
    </section>
  );
}
