import { REALISATIONS } from "@/data/realisations";
import SectionHeading from "@/components/ui/SectionHeading";
import RealisationCard from "./RealisationCard";

export default function Realisations() {
  return (
    <section id="realisations" className="relative bg-ink py-28 md:py-36">
      <div className="container-kr">
        <SectionHeading
          eyebrow="Nos réalisations"
          title="Quelques-uns de nos projets, la même exigence de précision"
          description="Un aperçu parmi nos nombreux chantiers menés à Paris et en Île-de-France : appartements, duplex et rénovations complètes, du gros œuvre aux finitions."
          invert
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {REALISATIONS.map((r, i) => (
            <RealisationCard key={r.slug} realisation={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
