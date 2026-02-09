"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ServiceCardProps = {
  title: string;
  subtitle: string;
  specs: string[];
  image: string;
  link: string;
  index: number;
};

const ServiceCard = ({ title, subtitle, specs, image, link, index }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.15 }}
    viewport={{ once: true }}
    className="group relative h-[450px] md:h-[600px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/50"
  >
    {/* Background Image with Zoom Effect */}
    <div className="absolute inset-0">
      <img
        src={image}
        className="w-full h-full object-cover opacity-70 group-hover:opacity-40 transition-all duration-700 group-hover:scale-110"
        alt={title}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/80 to-transparent" />
      {/* Blueprint Overlay on Hover */}
      <div className="absolute inset-0 bg-[url('/images/patterns/graphy.png')] opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay" />
    </div>

    <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-10">
      {/* Top Border Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cobalt to-yellow-300 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />

      <div className="transform translate-y-4 md:translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
        {/* Tech Specs Reveal */}
        <div className="mb-4 md:mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex flex-wrap gap-2">
          {specs.map((s, i) => (
            <span
              key={i}
              className="px-2 py-1 border border-cobalt/50 bg-cobalt/10 text-yellow-200 text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-wider rounded backdrop-blur-md"
            >
              {s}
            </span>
          ))}
        </div>

        <h3 className="text-2xl md:text-4xl font-display font-bold text-white mb-2 md:mb-3 leading-none group-hover:text-yellow-400 transition-colors">
          {title}
        </h3>
        <div className="h-0.5 w-12 bg-gradient-to-r from-cobalt to-yellow-300 mb-3 md:mb-4 group-hover:w-full transition-all duration-500" />
        <p className="text-stone-300 text-xs md:text-base mb-6 md:mb-8 line-clamp-2">{subtitle}</p>

        <Link
          href={link}
          className="inline-flex items-center justify-between w-full p-3 md:p-4 rounded-xl bg-white/5 border border-white/10 group-hover:bg-cobalt group-hover:border-cobalt transition-all group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] backdrop-blur-sm"
        >
          <span className="text-white font-bold uppercase text-[10px] md:text-xs tracking-widest">
            View System Details
          </span>
          <ArrowRight size={14} className="text-white transform group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>
    </div>
  </motion.div>
);

export default ServiceCard;
