"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Temoignages() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-28 md:py-36">
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-navy/40 blur-3xl" />

      <div className="container-kr relative">
        <SectionHeading
          eyebrow="Témoignages"
          title="La confiance de nos clients, chantier après chantier"
          align="center"
          invert
        />

        <div className="mt-16">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            centeredSlides
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: ".kr-pagination" }}
            breakpoints={{
              768: { slidesPerView: 2, centeredSlides: false },
              1280: { slidesPerView: 3, centeredSlides: false },
            }}
            className="!pb-4"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.name} className="h-auto">
                <div className="flex h-full flex-col justify-between rounded-sm border border-paper/10 bg-paper/5 p-8 backdrop-blur-md">
                  <div>
                    <Quote className="text-gold/50" size={28} />
                    <p className="mt-5 text-base leading-relaxed text-paper/85">
                      {t.quote}
                    </p>
                  </div>
                  <div className="mt-8">
                    <div className="flex gap-1 text-gold">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <p className="mt-3 font-display text-lg text-paper">{t.name}</p>
                    <p className="text-xs text-paper/50">{t.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="kr-pagination mt-8 flex justify-center gap-2" />
        </div>
      </div>
    </section>
  );
}
