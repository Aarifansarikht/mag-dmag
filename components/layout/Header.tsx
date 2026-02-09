"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Hexagon } from "lucide-react";
import { Button } from "../ui/Primitives";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import RotatingLogo from "../RotatingLogo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Solutions", path: "/products" },
    { name: "Accreditation", path: "/accreditation" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-out",
          scrolled ? "pt-2" : "pt-3 md:pt-3",
        )}
      >
        <div
          className={cn(
            "relative flex items-center justify-between transition-all duration-500 border border-white/40 shadow-xl shadow-stone-900/5 backdrop-blur-2xl",
            scrolled
              ? "w-[95%] rounded-full bg-white/90 px-4 py-2 md:py-3"
              : "w-[95%] rounded-2xl md:rounded-3xl bg-white/80 px-4 md:px-8 py-3 md:py-5",
          )}
        >
          <Link href="/" className="flex items-center justify-center group select-none">
            <RotatingLogo />
          </Link>

          {/* Centered Navigation Pill */}
          <nav className="hidden lg:flex items-center bg-white/50 backdrop-blur-md rounded-full px-2 p-1.5 border border-white/50 shadow-inner">
            {navLinks.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={cn(
                    "px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-300",
                    isActive
                      ? "bg-white text-cobalt shadow-sm scale-105 ring-1 ring-black/5"
                      : "text-stone-500 hover:text-ink hover:bg-white/50",
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            <Link href="/contact" className="hidden md:block">
              <Button
                size="sm"
                className="rounded-full px-6 bg-ink text-white hover:bg-cobalt border-none shadow-lg shadow-ink/20 hover:shadow-cobalt/30 transition-all"
              >
                Contact Us <ArrowUpRight className="ml-2 h-3 w-3" />
              </Button>
            </Link>

            <button
              className="lg:hidden p-2 text-ink bg-stone-100 rounded-full hover:bg-stone-200 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl p-6 flex flex-col pt-24 animate-in fade-in slide-in-from-top-10">
          <div className="flex flex-col gap-3">
            {navLinks.map((item, i) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="p-5 bg-stone-50 rounded-2xl flex items-center justify-between group hover:bg-cobalt transition-colors border border-transparent hover:border-cobalt/20"
              >
                <span className="font-display text-xl font-bold text-ink group-hover:text-white">{item.name}</span>
                <ArrowUpRight className="text-stone-400 group-hover:text-white" />
              </Link>
            ))}

            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="mt-4">
              <Button className="w-full h-16 text-lg rounded-2xl shadow-xl bg-gradient-to-r from-ink to-stone-800">
                Start Project
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
