"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import type { RealisationImage } from "@/data/realisations";

export default function RealisationDetailGallery({ images }: { images: RealisationImage[] }) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setIndex(i)}
            data-cursor-hover
            className="group relative mb-4 block w-full overflow-hidden rounded-sm break-inside-avoid"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 100vw"
              className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/15" />
          </button>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images.map((i) => ({ src: i.src, width: i.width, height: i.height, alt: i.alt }))}
        plugins={[Zoom]}
        zoom={{ maxZoomPixelRatio: 3 }}
        styles={{ container: { backgroundColor: "rgba(10,10,10,0.97)" } }}
      />
    </>
  );
}
