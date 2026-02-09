"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BannerSlider from "@/components/ui/BannerSlider";
import { Button } from "@/components/ui/Primitives";
import { motion } from "framer-motion";
import {
  Droplets,
  Layers,
  ArrowRight,
  Construction,
  Anchor,
  ShieldCheck,
  Globe2,
  CheckCircle2,
  Wrench,
  ArrowUpRight,
  Factory,
  Award,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { CAPABILITIES_DATA, HOME_SERVICES, IMAGES, SECTORS, WHY_CHOOSE_US } from "@/lib/constants";
import { serviceList } from "@/lib/data";
import EngineeredSolutionsSection from "@/components/sections/EngineeredSolutionsSection";
import HeroSection from "@/components/sections/HeroSection";
import CorporateIntroSection from "@/components/sections/CorporateIntroSection";
import DrainageProductsSection from "@/components/sections/DrainageProductsSection";
import StructuralSteelSection from "@/components/sections/StructuralSteelSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import ComprehensivesSection from "@/components/sections/ComprehensivesSection";
import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import ProjectSection from "@/components/sections/ProjectSection";
import CtaSeaction from "@/components/sections/CtaSeaction";


export default function PrecisionLanding() {
  return (
    <div className="flex min-h-screen flex-col bg-paper font-sans selection:bg-cobalt/30 selection:text-cobalt-900">


      <main className="flex-grow">
        {/* HERO */}
        <HeroSection />
        {/* 1. CORPORATE INTRO */}
        <CorporateIntroSection />
        <EngineeredSolutionsSection />

        {/* 2. DIVISION 01: DRAINAGE PRODUCTS */}
        <DrainageProductsSection />
        {/* 3. DIVISION 02: STRUCTURAL STEEL */}
        <StructuralSteelSection />

        {/* 4. NEW: MORE THAN A SUPPLIER - REDESIGNED */}
        <WhyChooseUsSection />

        <section className=" bg-white relative overflow-hidden">
          {/* Texture: Subtle Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(#e4e4e7_1px,transparent_1px),linear-gradient(to_right,#e4e4e7_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            {/* USP Content Block */}
            {/* 4. WHY CONTRACTORS CHOOSE US */}
            <ComprehensivesSection />
            <CapabilitiesSection />

            {/* PROJECT GALLERY */}
            <ProjectSection />
          </div>
        </section>

        <CtaSeaction />
      </main>

     
    </div>
  );
}
