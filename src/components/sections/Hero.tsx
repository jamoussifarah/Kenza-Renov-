"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

const HeroCanvas = dynamic(() => import("@/components/three/HeroCanvas"), {
  ssr: false,
});

const title = "Transformons vos espaces en lieux d'exception";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.035, delayChildren: 0.4 },
  },
};

const word = {
  hidden: { y: "110%" },
  show: {
    y: "0%",
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[720px] w-full items-center overflow-hidden bg-gradient-to-b from-charcoal via-ink to-navy grain">
      <div className="absolute inset-0">
        <HeroCanvas />
      </div>

      {/* readability scrims */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy via-transparent to-ink/40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />

      <div className="container-kr relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="label-eyebrow mb-6 text-gold"
        >
          Rénovation intérieure d&apos;exception — Villecresnes
        </motion.p>

        <h1 className="max-w-3xl font-display text-[2.6rem] leading-[1.05] text-paper text-balance sm:text-6xl md:text-7xl">
          <motion.span
            variants={container}
            initial="hidden"
            animate="show"
            className="block"
          >
            {title.split(" ").map((w, i) => (
              <span key={i} className="mr-[0.28em] inline-block overflow-hidden align-top">
                <motion.span variants={word} className="inline-block">
                  {w}
                </motion.span>
              </span>
            ))}
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-lg text-base leading-relaxed text-paper/70 md:text-lg"
        >
          Kenza Renov accompagne particuliers et professionnels dans leurs
          projets de rénovation intérieure, du premier croquis jusqu&apos;aux
          finitions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.75, ease: [0.16, 1, 0.3, 1] }}
          className="mt-11 flex flex-wrap items-center gap-5"
        >
          <a
            href="#contact"
            data-cursor-hover
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gold px-8 py-4 label-eyebrow text-ink"
          >
            <span className="relative z-10">Demander un devis</span>
            <ArrowRight size={16} className="relative z-10 transition-transform group-hover:translate-x-1" />
            <span className="absolute inset-0 -translate-x-full bg-paper transition-transform duration-500 group-hover:translate-x-0" />
          </a>
          <a
            href="#realisations"
            data-cursor-hover
            className="group inline-flex items-center gap-2 rounded-full border border-paper/25 px-8 py-4 label-eyebrow text-paper transition-colors hover:border-gold hover:text-gold"
          >
            Découvrir nos réalisations
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-9 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-paper/50"
      >
        <span className="label-eyebrow">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.div>
    </section>
  );
}
