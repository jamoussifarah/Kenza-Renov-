"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#presentation", label: "L'agence" },
  { href: "#metiers", label: "Métiers" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#livret", label: "Livret" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-paper/80 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="container-kr flex items-center justify-between h-20 md:h-24">
        <Link
          href="/"
          data-cursor-hover
          className={`font-display text-lg md:text-xl tracking-[0.02em] transition-colors duration-500 ${
            scrolled ? "text-ink" : "text-paper"
          }`}
        >
          Kenza<span className="text-gold"> Renov</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor-hover
              className={`label-eyebrow transition-colors duration-500 ${
                scrolled ? "text-ink/70 hover:text-ink" : "text-paper/75 hover:text-paper"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            data-cursor-hover
            className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 label-eyebrow transition-colors duration-500 ${
              scrolled ? "bg-ink text-paper" : "bg-paper text-ink"
            }`}
          >
            <span className="relative z-10">Demander un devis</span>
            <span className="absolute inset-0 -translate-x-full bg-gold transition-transform duration-500 group-hover:translate-x-0" />
          </a>
        </div>

        <button
          aria-label="Ouvrir le menu"
          onClick={() => setOpen(true)}
          className={`lg:hidden p-2 transition-colors duration-500 ${
            scrolled ? "text-ink" : "text-paper"
          }`}
          data-cursor-hover
        >
          <Menu size={26} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink text-paper lg:hidden"
          >
            <div className="container-kr flex h-20 items-center justify-between">
              <span className="font-display text-lg">
                Kenza<span className="text-gold"> Renov</span>
              </span>
              <button
                aria-label="Fermer le menu"
                onClick={() => setOpen(false)}
                className="p-2"
              >
                <X size={26} />
              </button>
            </div>
            <nav className="container-kr mt-10 flex flex-col gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-4xl py-3 border-b border-line-invert"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * NAV_LINKS.length, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-gold px-6 py-3 label-eyebrow text-ink"
              >
                Demander un devis
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
