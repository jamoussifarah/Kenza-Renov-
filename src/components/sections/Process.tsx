"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROCESS_STEPS } from "@/data/process";
import SectionHeading from "@/components/ui/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            transformOrigin: "top",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 65%",
              end: "bottom 75%",
              scrub: 0.6,
            },
          }
        );
      }

      stepRefs.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 70, rotateX: 35 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.9,
            ease: "power3.out",
            delay: i * 0.03,
            scrollTrigger: {
              trigger: el,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" className="relative bg-navy py-28 md:py-36">
      <div className="container-kr">
        <SectionHeading
          eyebrow="Notre méthode"
          title="Un processus clair, du diagnostic à la livraison"
          align="center"
          invert
        />

        <div
          ref={containerRef}
          className="relative mx-auto mt-24 max-w-2xl"
          style={{ perspective: 1200 }}
        >
          <div className="absolute left-6 top-0 h-full w-px bg-line-invert md:left-1/2 md:-translate-x-1/2">
            <div
              ref={lineRef}
              className="h-full w-full bg-gradient-to-b from-gold to-gold-light"
            />
          </div>

          <div className="flex flex-col gap-16">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={step.index}
                ref={(el) => {
                  if (el) stepRefs.current[i] = el;
                }}
                className="relative pl-16 md:pl-0"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className={`md:grid md:grid-cols-2 md:items-center md:gap-16 ${
                    i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className={i % 2 === 1 ? "md:text-left" : "md:text-right"}>
                    <span className="font-display text-5xl text-gold/40">{step.index}</span>
                    <h3 className="mt-2 font-display text-2xl text-paper md:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-paper/60">
                      {step.description}
                    </p>
                  </div>
                  <div aria-hidden />
                </div>

                <span className="absolute left-6 top-1 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-gold bg-navy md:left-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
