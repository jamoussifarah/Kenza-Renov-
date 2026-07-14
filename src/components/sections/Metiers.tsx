"use client";

import { SERVICES } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "./ServiceCard";

export default function Metiers() {
  return (
    <section id="metiers" className="relative bg-mist py-28 md:py-36">
      <div className="container-kr">
        <SectionHeading
          eyebrow="Nos métiers"
          title="Chaque corps de métier, maîtrisé sous un même toit"
          description="De la peinture à la rénovation complète, une équipe coordonnée pour un chantier sans rupture."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
