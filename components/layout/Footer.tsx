"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight } from "lucide-react";
import RotatingLogo from "../RotatingLogo";

export default function Footer() {
  return (
    <footer className="bg-brand-navy pt-24 pb-12 border-t border-white/10 relative z-10 overflow-hidden">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 industrial-grid opacity-[0.03]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          
          {/* ================= BRAND ================= */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex mb-10 group select-none">
              <RotatingLogo footer />
            </Link>

            <p className="text-black/60 text-sm leading-relaxed font-light max-w-sm">
              Providing reliable, standards-aligned drainage products and custom
              stainless steel fabrication for safe and efficient GCC
              infrastructure.
            </p>

            <div className="flex items-center gap-6 mt-10">
              <Link
                href="#"
                className="p-3 border border-white/10 rounded-full text-black/60 hover:text-brand-gold hover:border-brand-gold/40 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* ================= DOHA OFFICE ================= */}
          <div className="lg:col-span-3">
            <h4 className="text-black font-black mb-10 uppercase tracking-[0.3em] text-[11px]">
              Doha Head Office
            </h4>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-brand-gold mt-1 shrink-0" />
                <p className="text-black/60 text-xs leading-relaxed">
                  <span className="text-black font-semibold block mb-1">
                    MAG GENERAL TRADING WLL
                  </span>
                  Aziziya Commercial Street
                  <br />
                  Zone 55, Street 185
                  <br />
                  Building 88
                  <br />
                  Doha, Qatar
                </p>
              </div>

              <a
                href="tel:+97431586804"
                className="flex items-center gap-4 text-black hover:text-brand-gold transition-colors font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-brand-gold" />
                <span>+974 3158 6804</span>
              </a>

              <a
                href="mailto:m.adnanghani@maggulf.com"
                className="flex items-center gap-4 text-black/80 hover:text-brand-gold transition-colors text-xs"
              >
                <Mail className="w-4 h-4 text-brand-gold" />
                <span>m.adnanghani@maggulf.com</span>
              </a>
            </div>
          </div>

          {/* ================= DUBAI OFFICE ================= */}
          <div className="lg:col-span-3">
            <h4 className="text-black font-black mb-10 uppercase tracking-[0.3em] text-[11px]">
              Dubai Branch
            </h4>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-brand-gold mt-1 shrink-0" />
                <p className="text-black/60 text-xs leading-relaxed">
                  <span className="text-black font-semibold block mb-1">
                    DMAG TRADING CO WLL
                  </span>
                  Office 43–44, Al Fahidi
                  <br />
                  Bur Dubai
                  <br />
                  Dubai, UAE
                </p>
              </div>

              <a
                href="tel:+971501493369"
                className="flex items-center gap-4 text-black hover:text-brand-gold transition-colors font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-brand-gold" />
                <span>+971 50 149 3369</span>
              </a>

              <a
                href="mailto:sales1@maggulf.com"
                className="flex items-center gap-4 text-black/80 hover:text-brand-gold transition-colors text-xs"
              >
                <Mail className="w-4 h-4 text-brand-gold" />
                <span>sales1@maggulf.com</span>
              </a>
            </div>
          </div>

          {/* ================= QUICK NAV ================= */}
          <div className="lg:col-span-2">
            <h4 className="text-black font-black mb-10 uppercase tracking-[0.3em] text-[11px]">
              Quick Nav
            </h4>

            <ul className="space-y-4">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Products", path: "/products" },
                { label: "Accreditation", path: "/accreditation" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.path}
                    className="text-[11px] font-bold uppercase tracking-widest text-black/60 hover:text-brand-gold transition flex items-center group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={10}
                      className="ml-2 opacity-0 group-hover:opacity-100 transition"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-black/60 text-[9px] uppercase tracking-[0.6em] font-black text-center md:text-left">
            © 2026 MAG GENERAL TRADING & DMAG TRADING. ALL RIGHTS RESERVED.
          </p>

          <div className="text-black/60 text-[9px] uppercase tracking-widest font-bold">
            Designed for Precision Performance
          </div>
        </div>
      </div>
    </footer>
  );
}
