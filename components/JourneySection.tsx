"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  Compass,
  MapPin,
  Route,
  PartyPopper,
  Check,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { CORE_SERVICES, ServiceItem } from "@/lib/business";

interface JourneySectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export default function JourneySection({
  onSelectService,
}: JourneySectionProps) {
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : 0.65;

  const handleServiceSelect = (service: ServiceItem) => {
    if (onSelectService) {
      onSelectService(service.title);
    }
    const bookingEl = document.getElementById("booking-enquiry");
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "darshan":
        return Compass;
      case "local":
        return MapPin;
      case "outstation":
        return Route;
      case "occasions":
        return PartyPopper;
      default:
        return Route;
    }
  };

  return (
    <section
      id="services"
      className="relative scroll-mt-16 overflow-hidden bg-[#0B0B0B] py-12 text-white sm:py-16 lg:py-20"
    >
      {/* Background yellow glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-16 h-80 w-80 rounded-full bg-[#FACC15]/[0.06] blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-[#FACC15]/[0.05] blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
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
                TRAVEL SERVICES · मुख्य सेवाएं
              </span>
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              CHOOSE YOUR
              <br />
              <span className="text-[#FACC15]">JOURNEY.</span>
            </h2>
            <p className="mt-2 text-sm font-medium text-white/50 sm:text-base">
              धाम दर्शन, स्थानीय सफर, बाहरी यात्रा एवं मांगलिक अवसरों हेतु वाहन
            </p>
          </div>

          <div className="max-w-md">
            <p className="text-sm leading-relaxed text-white/60 sm:text-base">
              From sacred Chitrakoot Dham pilgrimages to long-distance outstation
              trips and wedding barat fleets, choose the service that fits your
              itinerary and discuss the fare directly with us.
            </p>
          </div>
        </motion.div>

        {/* Mobile Swipe Hint */}
        <div className="mb-3 flex items-center justify-between text-xs text-white/55 sm:hidden">
          <span className="font-semibold text-[#FACC15]">← Swipe horizontally for all services →</span>
          <span>{CORE_SERVICES.length} services</span>
        </div>

        {/* 4 Service Cards: Horizontal swipe on mobile, 2 cols on tablet, 4 cols on desktop */}
        <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-4 no-scrollbar snap-x snap-mandatory sm:mx-0 sm:grid sm:overflow-visible sm:px-0 sm:pb-0 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5 lg:gap-5">
          {CORE_SERVICES.map((service, idx) => {
            const Icon = getServiceIcon(service.id);

            return (
              <motion.article
                key={service.id}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration,
                  delay: reduceMotion ? 0 : idx * 0.08,
                }}
                className="group flex min-w-[275px] w-[80vw] max-w-[320px] shrink-0 snap-center flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#151515] transition-all duration-300 hover:border-[#FACC15]/40 hover:bg-[#181818] hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)] sm:min-w-0 sm:w-auto sm:shrink"
              >
                <div>
                  {/* Image banner */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#222222]">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-black/25 to-black/20" />

                    {/* Number & Icon badge */}
                    <div className="absolute left-3 top-3 flex items-center gap-1.5">
                      <span className="rounded-full bg-black/70 px-2.5 py-0.5 text-[11px] font-black tracking-wider text-[#FACC15] backdrop-blur-md">
                        {service.number}
                      </span>
                      <span className="rounded-full border border-white/20 bg-black/50 px-2.5 py-0.5 text-[9px] font-bold tracking-wider text-white backdrop-blur-md">
                        {service.tagline}
                      </span>
                    </div>

                    <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#FACC15] text-black shadow-md sm:h-9 sm:w-9">
                      <Icon size={16} />
                    </div>

                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-[11px] font-semibold text-[#FACC15]">
                        {service.hindiTitle}
                      </p>
                      <h3 className="text-lg font-black tracking-tight text-white sm:text-xl">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 sm:p-5">
                    <p className="text-xs leading-relaxed text-white/65 line-clamp-3">
                      {service.description}
                    </p>

                    <ul className="mt-3.5 space-y-1.5 border-t border-white/10 pt-3 text-xs text-white/60">
                      {service.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check size={13} className="shrink-0 text-[#FACC15]" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="border-t border-white/10 p-4 pt-3">
                  <button
                    type="button"
                    onClick={() => handleServiceSelect(service)}
                    className="flex w-full items-center justify-between rounded-xl bg-white/[0.05] px-3.5 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:bg-[#FACC15] hover:text-[#111111]"
                  >
                    <span>Enquire Service</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Quick Booking Strip */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration }}
          className="mt-10 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
        >
          <div>
            <h4 className="text-base font-bold text-white sm:text-lg">
              Looking for a custom trip or multi-day package?
            </h4>
            <p className="mt-1 text-xs text-white/50">
              Share your travel itinerary and dates. We discuss and customize the fare for your schedule.
            </p>
          </div>

          <a
            href="#booking-enquiry"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-[#FACC15] px-5 py-3 text-xs font-bold text-black transition-colors hover:bg-white sm:self-center"
          >
            Request Custom Quote
            <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}