import { motion } from "motion/react";

const MetalCastingCard = ({ item }: { item: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="relative group border border-white/10 rounded-3xl p-10 bg-gradient-to-b from-black via-black/95 to-black overflow-hidden"
  >
    {/* Glow */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top,#facc1520,transparent_60%)]" />

    <h3 className="text-white font-display text-2xl font-bold mb-4">
      {item.title}
    </h3>

    <p className="text-stone-400 text-sm leading-relaxed mb-8">
      {item.description}
    </p>

    {/* Tags */}
    <div className="flex flex-wrap gap-2 mb-10">
      {item.tags.map((tag: string, i: number) => (
        <span
          key={i}
          className="text-[10px] uppercase tracking-widest font-mono px-3 py-1 border border-white/10 text-stone-300"
        >
          {tag}
        </span>
      ))}
    </div>

    {/* Actions */}
    <div className="flex gap-4">
      <button className="px-6 py-3 text-xs uppercase tracking-widest border border-white/20 text-white hover:bg-white/10 transition">
        Datasheet
      </button>

      <button className="px-6 py-3 text-xs uppercase tracking-widest bg-amber-400 text-black font-bold hover:bg-amber-300 transition flex items-center gap-2">
        Get Quote →
      </button>
    </div>
  </motion.div>
);
