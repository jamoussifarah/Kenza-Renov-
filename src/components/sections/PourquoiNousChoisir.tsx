"use client";

import { motion } from "framer-motion";
import { WHY_US } from "@/data/process";
import SectionHeading from "@/components/ui/SectionHeading";

export default function PourquoiNousChoisir() {
  return (
    <section className="relative bg-mist py-28 md:py-36">
      <div className="container-kr">
        <SectionHeading
          eyebrow="Pourquoi nous choisir"
          title="Une exigence constante, à chaque étape"
          align="center"
        />

        <div className="relative mt-20">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-line md:block" />

          <div className="grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-2">
            {WHY_US.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.8, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex items-start gap-5 ${isLeft ? "md:justify-self-end md:text-right md:flex-row-reverse" : ""}`}
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-ink text-gold">
                    <item.icon size={22} />
                  </span>
                  <div className="max-w-xs">
                    <h3 className="font-display text-lg text-ink">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
