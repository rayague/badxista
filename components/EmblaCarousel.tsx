// components/EmblaCarousel.tsx
"use client";

import useEmblaCarousel from "embla-carousel-react";

export default function EmblaCarousel({ children }) {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    align: "start",
  });

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex gap-8">{children}</div>
    </div>
  );
}
