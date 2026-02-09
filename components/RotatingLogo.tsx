"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const LOGOS = [
  {
    id: "mag",
    src: "/images/logo-doha.png",
    label: "MAG",
    location: "Doha, Qatar",
    // className: "invert brightness-125 contrast-125",
    scale: 1,
  },
  {
    id: "dmag",
    src: "/images/logo.png",
    label: "DMAG",
    location: "Dubai, UAE",
    className: "contrast-200 ",
    scale: 1.25,
  },
];

type RotatingLogoProps = {
  footer?: boolean;
};

function RotatingLogo({ footer = false }: RotatingLogoProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setIndex((prev) => (prev + 1) % LOGOS.length);
      },
      footer ? 4000 : 4000,
    ); // slower in footer
    return () => clearInterval(interval);
  }, [footer]);

  const logo = LOGOS[index];

  return (
<div
  className={cn(
    "flex whitespace-nowrap",
    footer
      ? "flex-col items-center gap-3"
      : "flex-row items-end gap-3 justify-start"
  )}
>

      {/* Logo */}
   <div
  className={cn(
    "relative overflow-hidden",
    footer
      ? "w-[200px] h-[90px]"
      : "w-[140px] md:w-[200px] h-[44px] md:h-[64px]"
  )}
>

        <AnimatePresence mode="wait">
          <motion.div
            key={logo.id}
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
        animate={{
  opacity: 1,
  y: 0,
  scale: footer ? 1 : logo.scale ?? 1,
}}

            exit={{ opacity: 0, y: -24, scale: 0.95 }}
            transition={{
              duration: footer ? 0.9 : 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={`${logo.label} Logo`}
              fill
              priority
              className={`object-contain ${logo.className ?? ""}`}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Location */}
      {/* Location */}
    {/* Location */}
{/* Location */}
<AnimatePresence mode="wait">
  <motion.div
    key={logo.id + "-text"}
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -6 }}
    transition={{ duration: 0.4 }}
    className={cn(
      // SAME structure for header & footer
      "flex items-center gap-2 uppercase font-medium leading-none",
      footer
        ? "text-[11px] tracking-[0.35em] text-white/80"
        : "text-[13px] tracking-[0.25em] text-tech-500"
    )}
  >
    {/* Dot INLINE before city */}
    <span
      className={cn(
        "inline-block rounded-full bg-brand shrink-0",
        footer ? "w-1.5 h-1.5" : "w-1.5 h-1.5"
      )}
    />

    {/* City */}
    <span className="text-black">{logo.location}</span>
  </motion.div>
</AnimatePresence>


    </div>
  );
}

export default RotatingLogo;
