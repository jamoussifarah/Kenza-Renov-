"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { SITE } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative bg-paper py-28 md:py-36">
      <div className="container-kr">
        <SectionHeading
          eyebrow="Contact"
          title="Parlons de votre projet"
          description="Un premier échange, un diagnostic sur site et un devis gratuit sous quelques jours."
        />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-sm bg-mist p-8 md:p-10"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Field label="Nom complet" name="name" required />
              <Field label="Téléphone" name="phone" type="tel" />
              <Field label="Email" name="email" type="email" required className="sm:col-span-2" />
              <div className="sm:col-span-2">
                <label className="label-eyebrow text-ink/50">Votre projet</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full resize-none border-b border-line bg-transparent py-2 text-ink outline-none transition-colors focus:border-gold"
                  placeholder="Décrivez votre projet de rénovation..."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              data-cursor-hover
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 label-eyebrow text-paper transition-colors hover:bg-gold hover:text-ink disabled:opacity-70 sm:w-auto"
            >
              {status === "sent" ? (
                <>
                  <CheckCircle2 size={16} />
                  Message envoyé
                </>
              ) : (
                <>
                  <Send size={16} />
                  {status === "sending" ? "Envoi en cours..." : "Envoyer ma demande"}
                </>
              )}
            </button>

            {status === "error" && (
              <p className="mt-4 flex items-center gap-2 text-sm text-red-600">
                <AlertCircle size={16} />
                Une erreur est survenue. Vous pouvez nous contacter directement à{" "}
                <a href={`mailto:${SITE.email}`} className="underline">
                  {SITE.email}
                </a>
                .
              </p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <InfoItem icon={Phone} label="Téléphone" value={SITE.phone} href={`tel:${SITE.phoneHref}`} />
              <InfoItem icon={Mail} label="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
              <InfoItem icon={MapPin} label="Adresse" value={SITE.address} />
              <InfoItem
                icon={Clock}
                label="Horaires"
                value={SITE.hours.map((h) => `${h.day} : ${h.hours}`).join(" · ")}
              />
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-line sm:aspect-[16/10]">
              <iframe
                title="Kenza Renov sur Google Maps"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&z=13&output=embed`}
                className="h-full w-full grayscale-[40%] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="label-eyebrow text-ink/50">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border-b border-line bg-transparent py-2 text-ink outline-none transition-colors focus:border-gold"
      />
    </div>
  );
}

function InfoItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mist text-ink">
        <Icon size={18} />
      </span>
      <div>
        <p className="label-eyebrow text-ink/40">{label}</p>
        <p className="mt-1 text-sm text-ink/75">{value}</p>
      </div>
    </>
  );

  return href ? (
    <a href={href} data-cursor-hover className="flex items-start gap-4 hover:text-gold">
      {content}
    </a>
  ) : (
    <div className="flex items-start gap-4">{content}</div>
  );
}
