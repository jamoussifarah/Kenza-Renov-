import Link from "next/link";
import { SITE } from "@/data/site";
import { ArrowUpRight } from "lucide-react";

const COLUMNS = [
  {
    title: "Navigation",
    links: [
      { label: "L'agence", href: "#presentation" },
      { label: "Métiers", href: "#metiers" },
      { label: "Réalisations", href: "#realisations" },
      { label: "Livret", href: "#livret" },
      { label: "Process", href: "#process" },
    ],
  },
  {
    title: "Prestations",
    links: [
      { label: "Rénovation complète", href: "#metiers" },
      { label: "Cuisine & mobilier sur mesure", href: "#realisations" },
      { label: "Peinture & revêtements", href: "#metiers" },
      { label: "Bureaux & locaux commerciaux", href: "#metiers" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink text-paper">
      <div className="container-kr pt-24 pb-10 md:pt-32">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          <div>
            <span className="font-display text-2xl">
              Kenza<span className="text-gold"> Renov</span>
            </span>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-paper/60">
              Rénovation intérieure haut de gamme pour particuliers et
              professionnels. Depuis {SITE.founded}, du premier croquis aux
              finitions.
            </p>
            <a
              href="#contact"
              data-cursor-hover
              className="group mt-8 inline-flex items-center gap-2 label-eyebrow text-gold"
            >
              Demander un devis gratuit
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="label-eyebrow text-paper/40">{col.title}</h3>
              <ul className="mt-6 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      data-cursor-hover
                      className="text-sm text-paper/75 transition-colors hover:text-gold"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="label-eyebrow text-paper/40">Contact</h3>
            <ul className="mt-6 space-y-3 text-sm text-paper/75">
              <li>{SITE.address}</li>
              <li>
                <a href={`tel:${SITE.phoneHref}`} data-cursor-hover className="hover:text-gold">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} data-cursor-hover className="hover:text-gold">
                  {SITE.email}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-4">
              {SITE.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  data-cursor-hover
                  className="label-eyebrow text-paper/50 hover:text-gold"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-line-invert pt-8 text-xs text-paper/40 md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} {SITE.name}. Tous droits réservés.
          </span>
          <div className="flex gap-6">
            <Link href="/mentions-legales" data-cursor-hover className="hover:text-gold">
              Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite" data-cursor-hover className="hover:text-gold">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
