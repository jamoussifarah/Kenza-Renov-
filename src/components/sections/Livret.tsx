"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Download } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const PDF_HREF = "/documents/livret-kenza-renov.pdf";

export default function Livret() {
  return (
    <section id="livret" className="relative bg-paper py-28 md:py-36">
      <div className="container-kr">
        <SectionHeading
          eyebrow="Documentation"
          title="Notre livret de réalisations"
          description="Découvrez en détail une sélection de nos projets de rénovation, illustrant notre savoir-faire, notre exigence de qualité et notre expertise dans la transformation d'espaces de vie et de travail."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-16 overflow-hidden rounded-sm bg-navy"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative aspect-[4/3] lg:aspect-auto">
              <Image
                src="/images/livret-cover.jpg"
                alt="Couverture du livret de réalisations Kenza Renov"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-navy/90 lg:bg-gradient-to-r" />
            </div>

            <div className="relative flex flex-col justify-center p-10 md:p-16">
              <span className="label-eyebrow text-gold">Livret 2016 — 2026</span>
              <h3 className="mt-4 font-display text-3xl text-paper md:text-4xl">
                Nos projets, page après page
              </h3>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-paper/60">
                Plans, matériaux, avant-projet et photographies de chantier :
                un document complet pour découvrir l&apos;étendue de notre
                savoir-faire artisanal.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={PDF_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 label-eyebrow text-ink transition-transform hover:scale-[1.03]"
                >
                  <BookOpen size={16} />
                  Visualiser le livret
                </a>
                <a
                  href={PDF_HREF}
                  download="Livret-Kenza-Renov.pdf"
                  data-cursor-hover
                  className="group inline-flex items-center gap-2 rounded-full border border-paper/25 px-7 py-4 label-eyebrow text-paper transition-colors hover:border-gold hover:text-gold"
                >
                  <Download size={16} />
                  Télécharger le PDF
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
