"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  Compass,
  MapPin,
  ArrowRight,
  Info,
  Calendar,
} from "lucide-react";
import { CHITRAKOOT_DESTINATIONS, Destination } from "@/lib/business";

interface ChitrakootDarshanProps {
  onSelectDestination?: (dest: string) => void;
}

export default function ChitrakootDarshan({
  onSelectDestination,
}: ChitrakootDarshanProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [showAll, setShowAll] = useState<boolean>(false);
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : 0.6;

  const categories = [
    { id: "all", label: "All Holy Sites (21)", hindi: "सभी दर्शनीय स्थल" },
    { id: "core-dham", label: "Core Dham Darshan (11)", hindi: "प्रमुख धाम" },
    { id: "ashram-heritage", label: "Ashrams & Heritage (5)", hindi: "आश्रम व तपोभूमि" },
    { id: "extended-excursion", label: "Regional Excursions (5)", hindi: "विस्तृत भ्रमण" },
  ];

  const categoryFiltered =
    activeCategory === "all"
      ? CHITRAKOOT_DESTINATIONS
      : CHITRAKOOT_DESTINATIONS.filter((d) => d.category === activeCategory);

  const displayedDestinations =
    !showAll && activeCategory === "all"
      ? categoryFiltered.slice(0, 6)
      : categoryFiltered;

  const handleEnquire = (dest: Destination) => {
    if (onSelectDestination) {
      onSelectDestination(dest.name);
    }
    const bookingEl = document.getElementById("booking-enquiry");
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="destinations"
      className="relative scroll-mt-16 overflow-hidden bg-[#0A0A0A] py-12 text-white sm:py-16 lg:py-20"
    >
      {/* Background radial gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-24 h-96 w-96 rounded-full bg-[#FACC15]/[0.06] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-12 h-96 w-96 rounded-full bg-[#FACC15]/[0.05] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration }}
          className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-3.5 flex items-center gap-2.5">
              <span className="h-[2px] w-8 bg-[#FACC15]" />
              <span className="text-[11px] font-bold tracking-[0.22em] text-[#FACC15] uppercase sm:text-xs">
                जय श्री कामतानाथ · पवित्र दर्शन
              </span>
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              CHITRAKOOT DHAM
              <br />
              <span className="text-[#FACC15]">DESTINATIONS.</span>
            </h2>
            <p className="mt-2 text-sm font-medium text-white/50 sm:text-base">
              चित्रकूट धाम दर्शन एवं आसपास के ऐतिहासिक तीर्थ स्थल
            </p>
          </div>

          <div className="max-w-md">
            <p className="text-sm leading-relaxed text-white/65 sm:text-base">
              Experience the sanctity of Chitrakoot where Lord Rama, Mata Sita,
              and Lakshmana spent eleven and a half years of exile. Enquire for
              customized temple darshan routes and round-trip transfers.
            </p>
          </div>
        </motion.div>

        {/* Category Tabs */}
        <div className="mb-8 flex flex-wrap gap-2 sm:mb-10 sm:gap-3">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`group flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold transition-all duration-300 sm:px-5 sm:py-3 sm:text-sm ${
                  isActive
                    ? "bg-[#FACC15] text-[#111111] shadow-[0_0_20px_rgba(250,204,21,0.25)]"
                    : "border border-white/10 bg-white/[0.04] text-white/70 hover:border-[#FACC15]/40 hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`hidden text-[11px] font-normal transition-opacity sm:inline ${
                    isActive ? "text-black/75" : "text-white/40 group-hover:text-white/60"
                  }`}
                >
                  · {cat.hindi}
                </span>
              </button>
            );
          })}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="mb-3 flex items-center justify-between text-xs text-white/55 sm:hidden">
          <span className="font-semibold text-[#FACC15]">← Swipe horizontally for all sites →</span>
          <span>{displayedDestinations.length} sites</span>
        </div>

        {/* Destinations: Horizontal on mobile, Grid on tablet/desktop */}
        <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-4 no-scrollbar snap-x snap-mandatory sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
          {displayedDestinations.map((dest, idx) => (
            <motion.article
              key={dest.id}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration,
                delay: reduceMotion ? 0 : Math.min(idx * 0.05, 0.3),
              }}
              className="group flex min-w-[285px] w-[82vw] max-w-[340px] shrink-0 snap-center flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#141414] transition-all duration-300 hover:border-[#FACC15]/50 hover:bg-[#181818] hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)] sm:min-w-0 sm:w-auto sm:shrink"
            >
              {/* Image Banner */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#202020]">
                <Image
                  src={dest.image}
                  alt={`${dest.name} (${dest.hindiName}) in Chitrakoot`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/20 to-black/30" />

                {/* Badges */}
                <div className="absolute left-3 top-3 flex flex-wrap gap-1.5 sm:left-4 sm:top-4">
                  <span className="rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[10px] font-bold tracking-wider text-[#FACC15] backdrop-blur-md">
                    {dest.categoryLabel}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <p className="text-xs font-semibold text-[#FACC15]">
                    {dest.hindiName}
                  </p>
                  <h3 className="text-xl font-black tracking-tight text-white sm:text-2xl">
                    {dest.name}
                  </h3>
                </div>
              </div>

              {/* Content Body */}
              <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                <div>
                  <p className="text-xs font-semibold text-white/90">
                    {dest.shortDesc}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-white/55">
                    {dest.significance}
                  </p>

                  {dest.verifiedStatus && (
                    <div className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-[#FACC15]/20 bg-[#FACC15]/10 px-2.5 py-1 text-[10px] font-medium text-[#FACC15]">
                      <Info size={12} className="shrink-0" />
                      <span>{dest.verifiedStatus}</span>
                    </div>
                  )}
                </div>

                {/* Card Action */}
                <div className="mt-5 border-t border-white/10 pt-4">
                  <button
                    type="button"
                    onClick={() => handleEnquire(dest)}
                    className="flex w-full items-center justify-between rounded-xl bg-white/[0.04] px-4 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:bg-[#FACC15] hover:text-[#111111]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <MapPin size={14} className="text-[#FACC15] group-hover:text-black" />
                      Enquire For This Site
                    </span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All / Less Toggle */}
        {activeCategory === "all" && (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full border border-[#FACC15]/40 bg-[#FACC15]/10 px-6 py-3 text-xs font-bold text-[#FACC15] transition-all hover:bg-[#FACC15] hover:text-black"
            >
              <span>{showAll ? "Show Featured Sites Only" : `View All ${CHITRAKOOT_DESTINATIONS.length} Holy Sites & Ashrams`}</span>
              <ArrowRight size={14} className={showAll ? "-rotate-90" : "rotate-90"} />
            </button>
          </div>
        )}

        {/* Bottom Destination Advisory */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration }}
          className="mt-10 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between sm:p-6"
        >
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FACC15]/20 text-[#FACC15]">
              <Compass size={16} />
            </span>
            <div>
              <p className="font-bold text-white">Custom Pilgrimage Itineraries</p>
              <p className="mt-1 text-xs leading-relaxed text-white/50">
                Chitrakoot sites span Uttar Pradesh and Madhya Pradesh borders. Fares and travel schedules vary by route and halts. Please discuss your preferred plan directly with us.
              </p>
            </div>
          </div>

          <a
            href="#booking-enquiry"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#FACC15] px-5 py-3 text-xs font-bold text-black transition-colors hover:bg-white sm:self-center"
          >
            <Calendar size={14} />
            Plan Darshan Itinerary
          </a>
        </motion.div>
      </div>
    </section>
  );
}
