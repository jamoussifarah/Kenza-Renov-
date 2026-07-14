"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Realisation } from "@/data/realisations";

export default function RealisationCard({
  realisation,
  index,
}: {
  realisation: Realisation;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.9, delay: (index % 4) * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/realisations/${realisation.slug}`}
        data-cursor-hover
        className="group relative block aspect-[3/4] w-full overflow-hidden rounded-sm"
      >
        <Image
          src={realisation.cover.src}
          alt={realisation.cover.alt}
          fill
          sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/45 via-40% to-transparent transition-opacity duration-500" />

        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6">
          <span className="label-eyebrow text-gold">{realisation.location}</span>
          <h3 className="font-display text-2xl text-paper">{realisation.title}</h3>
          <div className="flex items-center justify-between">
            <span className="text-xs text-paper/60">{realisation.surface}</span>
            <span className="flex items-center gap-1 text-xs text-paper/80 opacity-0 transition-all duration-300 group-hover:opacity-100">
              Voir le projet
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
