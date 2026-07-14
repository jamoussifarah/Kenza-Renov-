"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { Service } from "@/data/services";

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const springCfg = { stiffness: 150, damping: 18, mass: 0.4 };
  const rotateX = useSpring(useTransform(my, [0, 1], [8, -8]), springCfg);
  const rotateY = useSpring(useTransform(mx, [0, 1], [-8, 8]), springCfg);
  const glowX = useTransform(mx, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(my, [0, 1], ["0%", "100%"]);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }

  function onLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      data-cursor-hover
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative aspect-[3/4] w-full overflow-hidden rounded-sm shadow-[0_20px_60px_-25px_rgba(0,0,0,0.35)]"
    >
      <Image
        src={service.image}
        alt={service.title}
        fill
        sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 90vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/10 transition-opacity duration-500 group-hover:from-ink/95" />

      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(280px circle at ${glowX} ${glowY}, rgba(182,144,92,0.35), transparent 70%)`,
        }}
      />

      <div className="relative flex h-full flex-col justify-between p-6">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-paper/10 text-gold backdrop-blur-sm">
          <Icon size={20} />
        </span>

        <div>
          <h3 className="font-display text-xl text-paper">{service.title}</h3>
          <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-paper/70 opacity-0 transition-all duration-500 ease-out group-hover:mt-3 group-hover:max-h-28 group-hover:opacity-100">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
