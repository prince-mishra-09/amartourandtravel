"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  Wind,
  Check,
  ArrowRight,
  Info,
} from "lucide-react";
import { VEHICLE_FLEET, Vehicle } from "@/lib/business";

interface VehicleShowcaseProps {
  onSelectVehicle?: (vehicleName: string) => void;
}

export default function VehicleShowcase({
  onSelectVehicle,
}: VehicleShowcaseProps) {
  const [filter, setFilter] = useState<string>("all");
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : 0.6;

  const filteredFleet =
    filter === "all"
      ? VEHICLE_FLEET
      : filter === "muv-suv"
      ? VEHICLE_FLEET.filter((v) => v.type === "MUV" || v.type === "SUV")
      : VEHICLE_FLEET.filter((v) => v.type === "Sedan" || v.type === "Hatchback");

  const handleEnquire = (v: Vehicle) => {
    if (onSelectVehicle) {
      onSelectVehicle(v.name);
    }
    const bookingEl = document.getElementById("booking-enquiry");
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="vehicles"
      className="relative scroll-mt-16 overflow-hidden bg-[#F7F5EF] py-12 text-[#151515] sm:py-16 lg:py-20"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full border border-[#D6A900]/20"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration }}
          className="mb-8 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-3.5 flex items-center gap-2.5">
              <span className="h-[2px] w-8 bg-[#B38B08]" />
              <span className="text-[11px] font-bold tracking-[0.22em] text-[#80630A] uppercase sm:text-xs">
                OUR VEHICLE FLEET · हमारे वाहन
              </span>
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              EXPLORE OUR
              <br />
              <span className="text-[#A47C00]">VEHICLE FLEET.</span>
            </h2>
            <p className="mt-2 text-sm font-medium text-black/60 sm:text-base">
              मारुति अर्टिगा, स्कॉर्पियो, ज़ाइलो, टवेरा, बोलेरो, इंडिगो एवं स्विफ्ट
            </p>
          </div>

          <div className="max-w-md">
            <p className="text-sm leading-relaxed text-black/65 sm:text-base">
              From family pilgrimage tours to group wedding transit, we offer
              a versatile fleet of multi-utility and passenger cars. Enquire for
              both AC and Non-AC vehicle options based on your requirement.
            </p>
          </div>
        </motion.div>

        {/* Fleet Filter Tabs */}
        <div className="mb-6 flex flex-wrap gap-2.5 sm:mb-8">
          <button
            type="button"
            suppressHydrationWarning
            onClick={() => setFilter("all")}
            className={`rounded-full px-5 py-2.5 text-xs font-bold transition-all duration-300 sm:text-sm ${
              filter === "all"
                ? "bg-[#151515] text-white shadow-md"
                : "border border-black/10 bg-white/70 text-black/70 hover:bg-white hover:text-black"
            }`}
          >
            All Vehicles ({VEHICLE_FLEET.length})
          </button>
          <button
            type="button"
            suppressHydrationWarning
            onClick={() => setFilter("muv-suv")}
            className={`rounded-full px-5 py-2.5 text-xs font-bold transition-all duration-300 sm:text-sm ${
              filter === "muv-suv"
                ? "bg-[#151515] text-white shadow-md"
                : "border border-black/10 bg-white/70 text-black/70 hover:bg-white hover:text-black"
            }`}
          >
            SUVs & MUVs (Ertiga, Scorpio, Xylo, Tavera, Bolero)
          </button>
          <button
            type="button"
            suppressHydrationWarning
            onClick={() => setFilter("sedan-hatch")}
            className={`rounded-full px-5 py-2.5 text-xs font-bold transition-all duration-300 sm:text-sm ${
              filter === "sedan-hatch"
                ? "bg-[#151515] text-white shadow-md"
                : "border border-black/10 bg-white/70 text-black/70 hover:bg-white hover:text-black"
            }`}
          >
            Sedans & Hatchbacks (Indigo, Swift)
          </button>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="mb-3 flex items-center justify-between text-xs text-black/55 sm:hidden">
          <span className="font-semibold text-[#80630A]">← Swipe horizontally to view all vehicles →</span>
          <span>{filteredFleet.length} vehicles</span>
        </div>

        {/* Fleet Cards: Horizontal on mobile, Grid on tablet/desktop */}
        <div className="-mx-4 flex gap-4 overflow-x-auto overscroll-x-contain px-4 pb-4 no-scrollbar snap-x snap-mandatory sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
          {filteredFleet.map((vehicle, idx) => (
            <motion.article
              key={vehicle.id}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration,
                delay: reduceMotion ? 0 : Math.min(idx * 0.06, 0.3),
              }}
              className="group flex min-w-[285px] w-[82vw] max-w-[340px] shrink-0 snap-center flex-col justify-between overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-[0_6px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B38B08]/40 hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] sm:min-w-0 sm:w-auto sm:shrink"
            >
              <div>
                {/* Vehicle Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E9E6DC]">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  {/* Type Badge */}
                  <div className="absolute left-3 top-3 flex gap-1.5">
                    <span className="rounded-full bg-[#151515]/85 px-3 py-1 text-[10px] font-bold text-white backdrop-blur-md">
                      {vehicle.type}
                    </span>
                    <span className="rounded-full bg-[#FACC15] px-2.5 py-1 text-[10px] font-black text-black">
                      {vehicle.seats}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs font-semibold text-[#FACC15]">
                      {vehicle.hindiName}
                    </p>
                    <h3 className="text-xl font-black tracking-tight sm:text-2xl">
                      {vehicle.name}
                    </h3>
                  </div>
                </div>

                {/* Specs & Attributes */}
                <div className="p-4 sm:p-5">
                  <div className="mb-3.5 flex flex-wrap gap-2 text-xs">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#F7F5EF] px-2.5 py-1 font-semibold text-[#80630A]">
                      <Wind size={13} />
                      {vehicle.acOption}
                    </span>
                  </div>

                  <p className="text-xs font-bold text-black/85">
                    Best For:{" "}
                    <span className="font-normal text-black/65">
                      {vehicle.bestFor}
                    </span>
                  </p>

                  <ul className="mt-3.5 space-y-1.5 border-t border-black/[0.06] pt-3 text-xs text-black/60">
                    {vehicle.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check size={13} className="shrink-0 text-[#80630A]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="border-t border-black/[0.06] p-4 sm:p-5 sm:pt-4">
                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={() => handleEnquire(vehicle)}
                  className="flex w-full items-center justify-between rounded-xl bg-[#151515] px-4 py-2.5 text-xs font-bold text-white transition-colors duration-300 hover:bg-[#FACC15] hover:text-[#111111]"
                >
                  <span>Enquire For This Vehicle</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Availability & Fare Disclaimer Banner */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration }}
          className="mt-10 flex items-start gap-3 rounded-2xl border border-black/[0.07] bg-white/80 p-4 text-xs leading-relaxed text-black/60 sm:p-5"
        >
          <Info size={16} className="mt-0.5 shrink-0 text-[#80630A]" />
          <div>
            <strong className="text-black/85">Fleet Availability Note:</strong> Vehicle availability is confirmed on a first-come, first-served basis upon enquiry. Fares are determined by travel dates, destination distances, and vehicle selection. Please contact us in advance to lock in your preferred vehicle.
          </div>
        </motion.div>
      </div>
    </section>
  );
}