"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function CTA() {
  return (
    <section className="relative flex h-[80svh] min-h-[560px] items-center justify-center overflow-hidden bg-ink">
      {/*
        Emplacement vidéo : remplacer le bloc <motion.div><Image/></motion.div>
        ci-dessous par une balise <video autoPlay muted loop playsInline> une fois
        les rushs de chantier disponibles.
      */}
      <motion.div
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/realisations/maubeuge/05-verriere-metallique-detail.jpg"
          alt="Verrière métallique sur mesure, rénovation Kenza Renov"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-ink/90" />

      <div className="container-kr relative text-center">
        <Reveal>
          <span className="label-eyebrow text-gold">Votre projet commence ici</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mx-auto mt-6 max-w-2xl font-display text-4xl leading-tight text-paper text-balance sm:text-5xl md:text-6xl">
            Prêt à transformer votre intérieur ?
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-12 flex justify-center">
            <a
              href="#contact"
              data-cursor-hover
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gold px-10 py-5 label-eyebrow text-ink shadow-[0_0_60px_-10px_rgba(182,144,92,0.6)] transition-transform hover:scale-[1.04]"
            >
              Demander un devis gratuit
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
