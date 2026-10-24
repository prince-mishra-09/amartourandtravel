"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  CarFront,
  MapPin,
  MessageCircle,
  Phone,
  Calendar,
} from "lucide-react";
import { BUSINESS_DETAILS } from "@/lib/business";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Our Vehicles", href: "#vehicles" },
  { label: "Chitrakoot Darshan", href: "#destinations" },
  { label: "Travel Services", href: "#services" },
  { label: "Booking Process", href: "#booking-process" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Fleet Gallery", href: "#gallery" },
  { label: "Business Trust", href: "#trust" },
  { label: "FAQs", href: "#faqs" },
];

const CURRENT_YEAR = new Date().getFullYear();

export default function ContactFooter() {
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : 0.65;

  const whatsappUrl = `https://wa.me/91${BUSINESS_DETAILS.phones[0].number}?text=${encodeURIComponent(
    "Jai Shri Kamtanath. I would like to enquire about taxi / vehicle booking with Amar Singh Tour & Travels."
  )}`;

  return (
    <>
      {/* SECTION 9: CONTACT CTA BANNER */}
      <section
        id="contact"
        className="relative scroll-mt-16 overflow-hidden bg-[#F7F5EF] py-12 text-[#151515] sm:py-16 lg:py-20"
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration }}
            className="relative isolate overflow-hidden rounded-3xl bg-[#111111] px-5 py-8 text-white sm:px-10 sm:py-12 lg:px-12 lg:py-14"
          >
            {/* Background atmosphere */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full bg-[#FACC15]/15 blur-[90px]"
            />

            <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
              {/* Left Column */}
              <div>
                <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#FACC15]" />
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#FACC15] uppercase sm:text-xs">
                    ॥ {BUSINESS_DETAILS.blessing} ॥
                  </span>
                </div>

                <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  READY TO BOOK
                  <br />
                  <span className="text-[#FACC15]">YOUR CHITRAKOOT RIDE?</span>
                </h2>

                <p className="mt-3 max-w-xl text-xs leading-relaxed text-white/60 sm:text-sm sm:leading-relaxed">
                  Call directly or send your trip requirements through WhatsApp.
                  We provide personalized fare quotes for temple darshan, outstation
                  travel, and wedding bookings.
                </p>

                {/* Direct Contact Buttons */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#booking-enquiry"
                    className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#FACC15] px-6 py-3 text-xs font-bold text-black transition-colors hover:bg-white"
                  >
                    <Calendar size={15} />
                    Fill Enquiry Form
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-xs font-bold text-white transition-colors hover:border-[#FACC15] hover:text-[#FACC15]"
                  >
                    <MessageCircle size={15} />
                    WhatsApp Enquiry
                  </a>
                </div>
              </div>

              {/* Right Column: Direct Call Box */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md sm:p-6">
                <p className="text-xs font-bold tracking-wider text-[#FACC15] uppercase">
                  DIRECT CALL NUMBERS
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Speak directly with Amar Singh Tour & Travels
                </p>

                <div className="mt-4 space-y-2.5">
                  <a
                    href={BUSINESS_DETAILS.phones[0].tel}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3 text-xs font-bold text-white transition-all hover:border-[#FACC15] hover:bg-[#FACC15] hover:text-black"
                  >
                    <span className="flex items-center gap-2.5">
                      <Phone size={15} className="text-[#FACC15]" />
                      <span>{BUSINESS_DETAILS.phones[0].display}</span>
                    </span>
                    <span className="text-[11px] font-medium opacity-70">Primary Contact</span>
                  </a>

                  <a
                    href={BUSINESS_DETAILS.phones[1].tel}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3 text-xs font-bold text-white transition-all hover:border-[#FACC15] hover:bg-[#FACC15] hover:text-black"
                  >
                    <span className="flex items-center gap-2.5">
                      <Phone size={15} className="text-[#FACC15]" />
                      <span>{BUSINESS_DETAILS.phones[1].display}</span>
                    </span>
                    <span className="text-[11px] font-medium opacity-70">Secondary Contact</span>
                  </a>
                </div>

                <div className="mt-4 flex items-start gap-2 border-t border-white/10 pt-3 text-[11px] text-white/50">
                  <MapPin size={13} className="mt-0.5 shrink-0 text-[#FACC15]" />
                  <span>{BUSINESS_DETAILS.address}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COMPREHENSIVE FOOTER */}
      <footer className="border-t border-white/10 bg-[#090909] text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Col 1: Brand & Blessing */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link href="#home" className="flex items-center gap-2.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FACC15] text-[#111111]">
                  <CarFront size={22} />
                </span>
                <div>
                  <span className="block text-sm font-black tracking-wide text-white">
                    {BUSINESS_DETAILS.name}
                  </span>
                  <span className="block text-[9px] font-bold tracking-widest text-[#FACC15]">
                    अमर सिंह टूर एण्ड ट्रैवल्स
                  </span>
                </div>
              </Link>

              <p className="mt-4 text-xs leading-relaxed text-white/55">
                Official travel service based in Chitrakoot, Uttar Pradesh.
                Specializing in Chitrakoot Dham sightseeing, local railway station
                transfers, outstation trips, and wedding ceremonies.
              </p>

              <div className="mt-4 text-xs font-bold text-[#FACC15]">
                ॥ {BUSINESS_DETAILS.blessing} ॥
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div>
              <h3 className="text-xs font-bold tracking-[0.18em] text-[#FACC15] uppercase">
                QUICK NAVIGATION
              </h3>
              <ul className="mt-4 space-y-2 text-xs">
                {navigation.slice(0, 5).map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-white/60 transition-colors hover:text-[#FACC15]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Fleet & Destinations */}
            <div>
              <h3 className="text-xs font-bold tracking-[0.18em] text-[#FACC15] uppercase">
                OUR VEHICLE FLEET
              </h3>
              <ul className="mt-4 space-y-1.5 text-xs text-white/60">
                <li>Maruti Suzuki Ertiga (7-Seater)</li>
                <li>Mahindra Scorpio (7-Seater)</li>
                <li>Mahindra Xylo (7-8 Seater)</li>
                <li>Tavera (7-9 Seater)</li>
                <li>Mahindra Bolero (7-9 Seater)</li>
                <li>Tata Indigo & Maruti Swift</li>
                <li className="text-[11px] text-[#FACC15]">AC & Non-AC Options</li>
              </ul>
            </div>

            {/* Col 4: Official Contact Details */}
            <div>
              <h3 className="text-xs font-bold tracking-[0.18em] text-[#FACC15] uppercase">
                BUSINESS CONTACT
              </h3>

              <div className="mt-4 space-y-3 text-xs">
                <div className="flex items-start gap-2 text-white/60">
                  <MapPin size={14} className="mt-0.5 shrink-0 text-[#FACC15]" />
                  <span>
                    {BUSINESS_DETAILS.address}
                    <br />
                    <span className="text-[11px] text-white/40">
                      Chitrakoot, Uttar Pradesh
                    </span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Phone size={14} className="shrink-0 text-[#FACC15]" />
                  <a
                    href={BUSINESS_DETAILS.phones[0].tel}
                    className="font-bold text-white hover:text-[#FACC15]"
                  >
                    {BUSINESS_DETAILS.phones[0].display}
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <Phone size={14} className="shrink-0 text-[#FACC15]" />
                  <a
                    href={BUSINESS_DETAILS.phones[1].tel}
                    className="font-bold text-white hover:text-[#FACC15]"
                  >
                    {BUSINESS_DETAILS.phones[1].display}
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <MessageCircle size={14} className="shrink-0 text-[#FACC15]" />
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#FACC15] hover:underline"
                  >
                    WhatsApp Chat Available
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Legal & Developer Credit */}
          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {CURRENT_YEAR} {BUSINESS_DETAILS.name}. All rights reserved.
            </p>

            {/* Developer Credit explicitly requested by user */}
            <p className="text-white/60">
              Designed & Developed by{" "}
              <a
                href={BUSINESS_DETAILS.developerCredit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#FACC15] transition-colors hover:text-white"
              >
                {BUSINESS_DETAILS.developerCredit.name}
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}