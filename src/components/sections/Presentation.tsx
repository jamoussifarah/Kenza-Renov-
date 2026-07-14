"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { User, Briefcase, Building2, Store } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const AUDIENCES = [
  { icon: User, label: "Particuliers" },
  { icon: Briefcase, label: "Professionnels" },
  { icon: Building2, label: "Bureaux" },
  { icon: Store, label: "Locaux commerciaux" },
];

export default function Presentation() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="presentation" className="relative bg-paper py-28 md:py-36">
      <div className="container-kr">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
          <div>
            <Reveal>
              <span className="label-eyebrow text-gold">L&apos;agence</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 max-w-lg font-display text-3xl leading-[1.1] text-ink text-balance sm:text-4xl md:text-5xl">
                Une exigence artisanale, pensée comme un bureau
                d&apos;architecte
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink/60">
                Fondée en 2016 et implantée à Villecresnes, Kenza Renov
                conduit des travaux de rénovation intérieure et de second
                œuvre avec la même exigence, quel que soit le lieu ou
                l&apos;échelle du projet.
              </p>
            </Reveal>

            <div className="mt-14 border-t border-line">
              {[
                { year: "2016", text: "Création de Kenza Renov, à Villecresnes." },
                { year: "2016 — 2020", text: "Développement du savoir-faire second œuvre : peinture, électricité, plomberie, revêtements." },
                { year: "2020 — Auj.", text: "Rénovations complètes d'appartements, duplex et locaux professionnels en Île-de-France." },
              ].map((item, i) => (
                <Reveal key={item.year} delay={0.1 + i * 0.08}>
                  <div className="flex items-start gap-6 border-b border-line py-6">
                    <span className="label-eyebrow w-24 shrink-0 pt-1 text-gold">
                      {item.year}
                    </span>
                    <p className="text-sm leading-relaxed text-ink/70">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {AUDIENCES.map((a, i) => (
                <Reveal key={a.label} delay={0.1 + i * 0.06}>
                  <div className="flex flex-col items-start gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-mist text-ink">
                      <a.icon size={18} />
                    </span>
                    <span className="text-sm text-ink/70">{a.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1} className="relative">
            <div
              ref={ref}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-sm lg:aspect-auto lg:h-full lg:min-h-[560px]"
            >
              <motion.div style={{ y: imgY }} className="absolute inset-0 -top-[8%] h-[116%]">
                <Image
                  src="/images/realisations/maubeuge/02-sejour-parquet-cheminee.jpg"
                  alt="Séjour haussmannien rénové par Kenza Renov, parquet chevron et cheminée d'origine"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                  priority
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-sm bg-paper/90 px-5 py-4 backdrop-blur">
                <span className="label-eyebrow text-ink/60">Rue Maubeuge — Paris 09</span>
                <span className="font-display text-sm italic text-gold">120 m²</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
