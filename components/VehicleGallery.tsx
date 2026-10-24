"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Info,
} from "lucide-react";

interface GalleryPhoto {
  src: string;
  title: string;
  hindiTitle: string;
  category: string;
  alt: string;
  note?: string;
}

const galleryPhotos: GalleryPhoto[] = [
  {
    src: "/fleet/ertiga.jpg",
    title: "Maruti Suzuki Ertiga",
    hindiTitle: "मारुति सुजुकी अर्टिगा",
    category: "MUV FLEET",
    alt: "Maruti Suzuki Ertiga passenger vehicle model for Chitrakoot tours",
    note: "6-7 Seater · Ideal for family pilgrimage & outstation travel",
  },
  {
    src: "/fleet/scorpio.jpg",
    title: "Mahindra Scorpio",
    hindiTitle: "महिंद्रा स्कॉर्पियो",
    category: "SUV FLEET",
    alt: "Mahindra Scorpio SUV for highway and outstation excursions",
    note: "7-Seater · High ground clearance for regional tours & Kalinjar",
  },
  {
    src: "/fleet/xylo.jpg",
    title: "Mahindra Xylo",
    hindiTitle: "महिंद्रा ज़ाइलो",
    category: "MUV FLEET",
    alt: "Mahindra Xylo multi-utility vehicle for comfortable group travel",
    note: "7-8 Seater · Spacious cabin for elderly travelers & family groups",
  },
  {
    src: "/fleet/tavera.jpg",
    title: "Tavera (Tour Fleet)",
    hindiTitle: "टवेरा",
    category: "MUV FLEET",
    alt: "Tavera tour vehicle for group pilgrimage trips in Chitrakoot",
    note: "7-9 Seater · Reliable group vehicle for temple & parikrama routes",
  },
  {
    src: "/fleet/bolero.jpg",
    title: "Mahindra Bolero",
    hindiTitle: "महिंद्रा बोलेरो",
    category: "UTILITY FLEET",
    alt: "Mahindra Bolero utility vehicle for rural and ashram pilgrimage routes",
    note: "7-9 Seater · Rugged capability on all rural & pilgrimage roads",
  },
  {
    src: "/fleet/indigo.jpg",
    title: "Tata Indigo (Sedan)",
    hindiTitle: "टाटा इंडिगो",
    category: "SEDAN FLEET",
    alt: "Tata Indigo sedan for railway station transfers and small family rides",
    note: "4-Seater · Comfortable sedan boot for luggage and station rides",
  },
  {
    src: "/fleet/swift.jpg",
    title: "Maruti Suzuki Swift",
    hindiTitle: "मारुति सुजुकी स्विफ्ट",
    category: "HATCHBACK FLEET",
    alt: "Maruti Suzuki Swift compact car for prompt town travel",
    note: "4-Seater · Prompt and economical city & station travel",
  },
  {
    src: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&fm=jpg&q=85&w=1400",
    title: "Ram Ghat & Mandakini River",
    hindiTitle: "रामघाट एवं मन्दाकिनी",
    category: "CHITRAKOOT DESTINATION",
    alt: "Ram Ghat on sacred Mandakini river in Chitrakoot Dham",
    note: "Sacred riverfront where Maha Aarti and boat rides take place",
  },
];

export default function VehicleGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : 0.6;

  const closeGallery = () => setActiveIndex(null);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === null
        ? null
        : (current - 1 + galleryPhotos.length) % galleryPhotos.length
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === null
        ? null
        : (current + 1) % galleryPhotos.length
    );
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  return (
    <>
      <section
        id="gallery"
        className="relative scroll-mt-16 overflow-hidden bg-[#F7F5EF] py-14 text-[#151515] sm:py-20 lg:py-24"
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration }}
            className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <div className="mb-3.5 flex items-center gap-2.5">
                <span className="h-[2px] w-8 bg-[#B38B08]" />
                <span className="text-[11px] font-bold tracking-[0.22em] text-[#80630A] uppercase sm:text-xs">
                  FLEET & SIGHTSEEING GALLERY · गैलरी
                </span>
              </div>

              <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                OUR FLEET &
                <br />
                <span className="text-[#A47C00]">CHITRAKOOT GLIMPSES.</span>
              </h2>
              <p className="mt-2 text-sm font-medium text-black/60 sm:text-base">
                विभिन्न गाड़ियों का विवरण एवं चित्रकूट धाम दर्शन के दृश्य
              </p>
            </div>

            <div className="max-w-md">
              <p className="text-sm leading-relaxed text-black/65 sm:text-base">
                Take a closer look at our available vehicle models and
                pilgrimage destinations. Click any photo to view in high resolution.
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-[#80630A]">
                <Camera size={15} />
                <span>Click image to expand in full screen</span>
              </div>
            </div>
          </motion.div>

          {/* Mobile Swipe Hint */}
          <div className="mb-3 flex items-center justify-between text-xs text-black/55 sm:hidden">
            <span className="font-semibold text-[#80630A]">← Swipe horizontally for all photos →</span>
            <span>{galleryPhotos.length} photos</span>
          </div>

          {/* Gallery: Horizontal on mobile, Grid on tablet/desktop */}
          <div className="-mx-4 flex gap-3.5 overflow-x-auto px-4 pb-4 no-scrollbar snap-x snap-mandatory sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
            {galleryPhotos.map((photo, index) => (
              <motion.button
                key={photo.title}
                type="button"
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration,
                  delay: reduceMotion ? 0 : Math.min(index * 0.05, 0.25),
                }}
                onClick={() => setActiveIndex(index)}
                aria-label={`View photo of ${photo.title} in full screen`}
                className="group relative flex aspect-[4/3] min-w-[260px] w-[75vw] max-w-[300px] shrink-0 snap-center flex-col justify-end overflow-hidden rounded-2xl bg-[#1E1E1E] text-left transition-all duration-300 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#80630A] sm:min-w-0 sm:w-full sm:shrink"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Category badge */}
                <div className="absolute left-3 top-3">
                  <span className="rounded-full bg-black/60 px-2.5 py-1 text-[9px] font-bold tracking-wider text-[#FACC15] backdrop-blur-md">
                    {photo.category}
                  </span>
                </div>

                <div className="relative z-10 flex items-end justify-between p-3.5 text-white">
                  <div>
                    <p className="text-[11px] font-medium text-[#FACC15]">
                      {photo.hindiTitle}
                    </p>
                    <h3 className="text-sm font-black leading-tight sm:text-base">
                      {photo.title}
                    </h3>
                  </div>

                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FACC15] text-black opacity-90 transition-transform duration-300 group-hover:scale-110">
                    <Maximize2 size={13} />
                  </span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Footer note on fleet images */}
          <div className="mt-8 flex items-start gap-2.5 rounded-xl border border-black/[0.06] bg-white/70 p-3.5 text-xs text-black/55 sm:items-center">
            <Info size={15} className="mt-0.5 shrink-0 text-[#80630A] sm:mt-0" />
            <p>
              Vehicle photographs shown represent the exact make, model, and class printed on the business card. Specific vehicle color and seating layout can be verified during your fare enquiry.
            </p>
          </div>
        </div>
      </section>

      {/* Accessible Full-Screen Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            key="fleet-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Fleet and Sightseeing Photo Viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex flex-col bg-black/95 p-4 text-white sm:p-6"
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-[#FACC15] uppercase">
                  {galleryPhotos[activeIndex].category}
                </span>
                <p className="text-xs text-white/50">
                  Photo {activeIndex + 1} of {galleryPhotos.length}
                </p>
              </div>

              <button
                type="button"
                onClick={closeGallery}
                aria-label="Close photo viewer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-[#FACC15] hover:text-black"
              >
                <X size={20} />
              </button>
            </div>

            {/* Stage */}
            <div className="relative flex flex-1 items-center justify-center py-4">
              <button
                type="button"
                onClick={showPrevious}
                aria-label="View previous photo"
                className="absolute left-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-[#FACC15] hover:text-black sm:left-4"
              >
                <ChevronLeft size={22} />
              </button>

              <div className="relative h-full w-full max-w-4xl">
                <Image
                  src={galleryPhotos[activeIndex].src}
                  alt={galleryPhotos[activeIndex].alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              <button
                type="button"
                onClick={showNext}
                aria-label="View next photo"
                className="absolute right-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-[#FACC15] hover:text-black sm:right-4"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* Caption & CTA */}
            <div className="border-t border-white/10 pt-3 text-center">
              <h3 className="text-lg font-black text-white sm:text-xl">
                {galleryPhotos[activeIndex].title} ({galleryPhotos[activeIndex].hindiTitle})
              </h3>
              {galleryPhotos[activeIndex].note && (
                <p className="mt-1 text-xs text-[#FACC15]">
                  {galleryPhotos[activeIndex].note}
                </p>
              )}
              <div className="mt-3">
                <a
                  href="#booking-enquiry"
                  onClick={closeGallery}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#FACC15] px-5 py-2 text-xs font-bold text-black transition-colors hover:bg-white"
                >
                  <span>Enquire For This Vehicle</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}