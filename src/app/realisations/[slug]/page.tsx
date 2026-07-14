import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { REALISATIONS } from "@/data/realisations";
import RealisationDetailGallery from "@/components/sections/RealisationDetailGallery";
import Reveal from "@/components/ui/Reveal";

export function generateStaticParams() {
  return REALISATIONS.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const realisation = REALISATIONS.find((r) => r.slug === slug);
  if (!realisation) return {};
  return {
    title: `${realisation.title} — ${realisation.location} | Kenza Renov`,
    description: realisation.excerpt,
    openGraph: {
      title: realisation.title,
      description: realisation.excerpt,
      images: [{ url: realisation.cover.src }],
    },
  };
}

export default async function RealisationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = REALISATIONS.findIndex((r) => r.slug === slug);
  if (index === -1) notFound();

  const realisation = REALISATIONS[index];
  const next = REALISATIONS[(index + 1) % REALISATIONS.length];

  return (
    <main className="bg-paper">
      <section className="relative h-[70svh] min-h-[480px] w-full overflow-hidden bg-ink">
        <Image
          src={realisation.cover.src}
          alt={realisation.cover.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/60" />

        <div className="container-kr absolute inset-x-0 top-24 md:top-28">
          <Link
            href="/#realisations"
            data-cursor-hover
            className="inline-flex items-center gap-2 label-eyebrow text-paper/70 hover:text-gold"
          >
            <ArrowLeft size={14} />
            Toutes nos réalisations
          </Link>
        </div>

        <div className="container-kr absolute inset-x-0 bottom-12">
          <span className="label-eyebrow text-gold">{realisation.location}</span>
          <h1 className="mt-4 max-w-2xl font-display text-4xl text-paper text-balance sm:text-5xl md:text-6xl">
            {realisation.title}
          </h1>
          <span className="mt-4 inline-block text-paper/60">{realisation.surface}</span>
        </div>
      </section>

      <section className="container-kr py-20 md:py-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.3fr_0.9fr]">
          <div>
            <Reveal>
              <span className="label-eyebrow text-gold">Le projet</span>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-5 max-w-2xl text-xl leading-relaxed text-ink/80 md:text-2xl font-display">
                {realisation.excerpt}
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-14">
                <h2 className="label-eyebrow text-ink/40">Prestations réalisées</h2>
                <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {realisation.prestations.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-ink/75">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-gold" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-sm bg-mist p-8">
              <h2 className="label-eyebrow text-ink/40">Matériaux &amp; finitions</h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {realisation.materiaux.map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-line bg-paper px-4 py-2 text-xs text-ink/70"
                  >
                    {m}
                  </span>
                ))}
              </div>

              <h2 className="mt-10 label-eyebrow text-ink/40">Univers</h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {realisation.categories.map((c) => (
                  <span key={c} className="rounded-full bg-gold-soft px-4 py-2 text-xs text-gold">
                    {c}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                data-cursor-hover
                className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 label-eyebrow text-paper transition-colors hover:bg-gold hover:text-ink"
              >
                Un projet similaire ? Demandez un devis
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-20 md:py-28">
        <div className="container-kr">
          <Reveal>
            <span className="label-eyebrow text-gold">Galerie du chantier</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 max-w-lg font-display text-3xl text-ink md:text-4xl">
              {realisation.gallery.length} vues du projet
            </h2>
          </Reveal>
          <div className="mt-12">
            <RealisationDetailGallery images={realisation.gallery} />
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper py-16">
        <div className="container-kr flex items-center justify-between">
          <span className="label-eyebrow text-ink/40">Projet suivant</span>
          <Link
            href={`/realisations/${next.slug}`}
            data-cursor-hover
            className="group flex items-center gap-3 font-display text-2xl text-ink transition-colors hover:text-gold md:text-3xl"
          >
            {next.title}
            <ArrowRight size={22} className="transition-transform group-hover:translate-x-1.5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
