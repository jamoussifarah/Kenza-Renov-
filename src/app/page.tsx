import Hero from "@/components/sections/Hero";
import Presentation from "@/components/sections/Presentation";
import Metiers from "@/components/sections/Metiers";
import Realisations from "@/components/sections/Realisations";
import Livret from "@/components/sections/Livret";
import PourquoiNousChoisir from "@/components/sections/PourquoiNousChoisir";
import Process from "@/components/sections/Process";
import Temoignages from "@/components/sections/Temoignages";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Presentation />
      <Metiers />
      <Realisations />
      <Livret />
      <PourquoiNousChoisir />
      <Process />
      <Temoignages />
      <CTA />
      <Contact />
    </main>
  );
}
