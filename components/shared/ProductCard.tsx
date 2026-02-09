"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";


const ProductCard = ({
  title,
  subtitle,
  image,
  link,
  index,
}: {
  title: string;
  subtitle: string;
  image: string;
  link: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative h-[400px] md:h-[500px] bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-cobalt/10 transition-all duration-500 border border-stone-100 hover:border-cobalt/30"
  >
    <div className="h-[60%] overflow-hidden relative">
      <img
        src={image}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        alt={title}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
    </div>

    <div className="h-[40%] p-6 md:p-8 flex flex-col justify-between relative bg-white group-hover:bg-amber-50/20 transition-colors">
      {/* Floating Icon */}
      <div className="absolute -top-6 md:-top-8 right-6 md:right-8 h-12 w-12 md:h-16 md:w-16 bg-gradient-to-br from-cobalt to-stone-800 text-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shadow-cobalt/30 group-hover:-translate-y-2 transition-transform duration-300">
        <ArrowUpRight size={24} className="md:w-7 md:h-7" />
      </div>

      <div>
        <div className="flex items-center gap-3 mb-2 md:mb-3">
          <div className="h-[2px] w-6 bg-gradient-to-r from-cobalt to-yellow-300" />
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-stone-400">
            Product Line
          </span>
        </div>
        <h3 className="text-xl md:text-2xl font-display font-bold text-stone-900 leading-none mb-2 md:mb-3 group-hover:text-cobalt transition-colors">
          {title}
        </h3>
        <p className="text-stone-500 text-xs md:text-sm line-clamp-2">{subtitle}</p>
      </div>

      <div className="flex items-center justify-between border-t border-stone-100 pt-4 md:pt-6 mt-2">
        <span className="text-[10px] md:text-xs font-bold uppercase text-stone-900 group-hover:text-cobalt transition-colors">
          View Specifications
        </span>
        <ArrowRight
          size={14}
          className="text-stone-300 group-hover:text-cobalt transform group-hover:translate-x-2 transition-all"
        />
      </div>
    </div>
  </motion.div>
);
export default ProductCard;