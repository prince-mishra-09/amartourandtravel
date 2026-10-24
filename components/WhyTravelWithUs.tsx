"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Compass,
  CarFront,
  Wind,
  BadgePercent,
  PartyPopper,
  PhoneCall,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { BUSINESS_DETAILS } from "@/lib/business";

const genuineBenefits = [
  {
    number: "01",
    title: "Chitrakoot Pilgrimage Expertise",
    hindi: "चित्रकूट धाम दर्शन में विशेषज्ञता",
    description:
      "Deep local familiarity with all sacred sites—Ram Ghat, Kamadgiri Parikrama, Gupt Godavari, Hanuman Dhara, and forest ashrams—ensuring an organized, respectful pilgrimage.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Diverse Vehicle Options",
    hindi: "विभिन्न गाड़ियों का विकल्प",
    description:
      "A versatile fleet featuring Maruti Ertiga, Mahindra Scorpio, Xylo, Tavera, Bolero, Indigo, and Swift to accommodate individual travelers, families, and larger groups.",
    icon: CarFront,
  },
  {
    number: "03",
    title: "AC & Non-AC Availability",
    hindi: "एसी व नॉन-एसी विकल्प",
    description:
      "Freedom to select between AC and Non-AC vehicle options based on your comfort preference, travel season, and pilgrimage requirements.",
    icon: Wind,
  },
  {
    number: "04",
    title: "Fare Clarity Before Travel",
    hindi: "पारदर्शी किराया चर्चा",
    description:
      "No automated algorithms or hidden surcharges. Fares, toll policies, and parking inclusions are clearly communicated and agreed upon before confirmation.",
    icon: BadgePercent,
  },
  {
    number: "05",
    title: "Occasion & Event Fleet Hire",
    hindi: "शादी-विवाह व मांगलिक कार्य",
    description:
      "Dedicated multi-vehicle coordination for marriage barat processions, family gatherings, birthday functions, and auspicious regional ceremonies.",
    icon: PartyPopper,
  },
  {
    number: "06",
    title: "Direct Owner Contact",
    hindi: "सीधा फोन एवं व्हाट्सऐप संपर्क",
    description:
      "Direct line of communication with Amar Singh Tour & Travels via 8960736006 and 7651804647 for immediate query resolution and itinerary changes.",
    icon: PhoneCall,
  },
];

export default function WhyTravelWithUs() {
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : 0.65;

  return (
    <section
      id="why-us"
      className="relative scroll-mt-16 overflow-hidden bg-[#090909] py-14 text-white sm:py-20 lg:py-24"
    >
      {/* Background radial gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-16 h-80 w-80 rounded-full bg-[#FACC15]/[0.06] blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-10 h-80 w-80 rounded-full bg-[#FACC15]/[0.05] blur-[110px]"
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
                HONEST ADVANTAGES · हमारी विशेषताएं
              </span>
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              WHY TRAVEL
              <br />
              <span className="text-[#FACC15]">WITH US?</span>
            </h2>
            <p className="mt-2 text-sm font-medium text-white/50 sm:text-base">
              स्पष्ट जानकारी, विश्वसनीय गाड़ियाँ एवं चित्रकूट का स्थानीय अनुभव
            </p>
          </div>

          <div className="max-w-md">
            <p className="text-sm leading-relaxed text-white/60 sm:text-base">
              We focus on what truly matters to pilgrims and travelers: clean
              vehicles, transparent fare discussions, punctual service, and
              direct personal accountability without unnecessary middlemen.
            </p>
          </div>
        </motion.div>

        {/* Mobile Swipe Hint */}
        <div className="mb-3 flex items-center justify-between text-xs text-white/55 sm:hidden">
          <span className="font-semibold text-[#FACC15]">← Swipe horizontally for our key advantages →</span>
          <span>{genuineBenefits.length} benefits</span>
        </div>

        {/* 6 Benefit Cards: Horizontal on mobile, Grid on tablet/desktop */}
        <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-4 no-scrollbar snap-x snap-mandatory sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
          {genuineBenefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.article
                key={benefit.number}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration,
                  delay: reduceMotion ? 0 : index * 0.08,
                }}
                className="group relative flex min-w-[270px] w-[78vw] max-w-[320px] shrink-0 snap-center flex-col justify-between rounded-2xl border border-white/10 bg-[#141414] p-5 transition-all duration-300 hover:border-[#FACC15]/40 hover:bg-[#181818] sm:min-w-0 sm:w-auto sm:shrink sm:p-6"
              >
                <div>
                  <div className="mb-5 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FACC15]/10 text-[#FACC15] transition-colors duration-300 group-hover:bg-[#FACC15] group-hover:text-black">
                      <Icon size={22} strokeWidth={1.8} />
                    </span>

                    <span className="text-xs font-bold text-white/20">
                      {benefit.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold tracking-tight text-white sm:text-xl">
                    {benefit.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#FACC15]">
                    {benefit.hindi}
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-white/60 sm:text-sm">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-5 border-t border-white/10 pt-3.5">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-white/40 group-hover:text-[#FACC15]">
                    <CheckCircle2 size={13} className="text-[#FACC15]" />
                    Verified Service Detail
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Closing Quick CTA */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration }}
          className="mt-10 flex flex-col gap-4 rounded-2xl border border-[#FACC15]/20 bg-[#FACC15] p-5 text-black sm:flex-row sm:items-center sm:justify-between sm:p-7"
        >
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-black/60 uppercase">
              LOCAL CHITRAKOOT OPERATOR
            </span>
            <h4 className="mt-1 text-xl font-black tracking-tight sm:text-2xl">
              Plan your journey with Amar Singh Tour & Travels.
            </h4>
            <p className="mt-1 text-xs text-black/75">
              Call us on {BUSINESS_DETAILS.phones[0].display} or {BUSINESS_DETAILS.phones[1].display} for fare details.
            </p>
          </div>

          <a
            href="#booking-enquiry"
            className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-[#111111] px-6 py-3.5 text-xs font-bold text-white transition-colors hover:bg-white hover:text-black sm:self-center"
          >
            Enquire For Ride
            <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}