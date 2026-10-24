"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Menu,
  Phone,
  Sparkles,
  X,
  Compass,
  CarFront,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { BUSINESS_DETAILS, VEHICLE_FLEET } from "@/lib/business";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Our Vehicles", href: "#vehicles" },
  { label: "Chitrakoot Darshan", href: "#destinations" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#booking-process" },
  { label: "Book a Ride", href: "#booking-enquiry" },
  { label: "Contact", href: "#contact" },
];

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentVehicleIndex, setCurrentVehicleIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const duration = reduceMotion ? 0 : 0.65;

  // Auto-change vehicle image every 3 seconds as requested
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVehicleIndex((prev) => (prev + 1) % VEHICLE_FLEET.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const activeVehicle = VEHICLE_FLEET[currentVehicleIndex];

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen flex-col justify-between overflow-hidden bg-[#090909] text-white lg:min-h-[calc(100vh-38px)]"
    >
      {/* Top Blessing Banner - compact and responsive without overflow */}
      <div className="relative z-30 border-b border-white/10 bg-[#111111]/90 px-3 py-1.5 text-center text-[10px] font-bold tracking-[0.16em] text-[#FACC15] backdrop-blur-md sm:text-xs">
        <span className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          <span>॥ {BUSINESS_DETAILS.blessing} ॥</span>
          <span className="hidden text-white/40 sm:inline">|</span>
          <span className="hidden font-medium text-white/80 sm:inline">
            अमर सिंह टूर एण्ड ट्रैवल्स — {BUSINESS_DETAILS.address}
          </span>
        </span>
      </div>

      {/* Ambient gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_70%_35%,rgba(250,204,21,0.12),transparent_48%)]"
      />

      {/* Header */}
      <header className="relative z-20 mx-auto w-full max-w-7xl border-b border-white/10 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="#home" className="group flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FACC15] text-[#111111] shadow-[0_0_15px_rgba(250,204,21,0.3)] transition-transform duration-300 group-hover:scale-105">
              <CarFront size={22} strokeWidth={2.2} />
            </span>

            <div>
              <span className="block text-sm font-black tracking-wide text-white sm:text-base">
                AMAR SINGH
              </span>
              <span className="block text-[8px] font-bold tracking-[0.18em] text-[#FACC15] sm:text-[9px]">
                TOUR & TRAVELS · CHITRAKOOT
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-5 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs font-semibold text-white/70 transition-colors duration-200 hover:text-[#FACC15]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Quick Phone CTAs */}
          <div className="hidden items-center gap-2.5 sm:flex">
            <a
              href={BUSINESS_DETAILS.phones[0].tel}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-white transition-colors hover:border-[#FACC15] hover:text-[#FACC15]"
              aria-label={`Call ${BUSINESS_DETAILS.phones[0].display}`}
            >
              <Phone size={12} className="text-[#FACC15]" />
              <span>{BUSINESS_DETAILS.phones[0].display}</span>
            </a>

            <a
              href="#booking-enquiry"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#FACC15] px-3.5 py-1.5 text-xs font-bold text-black transition duration-300 hover:bg-white"
            >
              Enquire
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile navigation dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute left-3 right-3 top-[92px] z-30 rounded-2xl border border-white/15 bg-[#141414] p-4 shadow-2xl lg:hidden"
          >
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-[#FACC15]"
                >
                  {item.label}
                  <ArrowUpRight size={15} />
                </Link>
              ))}
            </div>

            <div className="mt-3 border-t border-white/10 pt-3">
              <p className="px-2 text-[10px] font-bold tracking-wider text-white/40">
                DIRECT CALL NUMBERS
              </p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <a
                  href={BUSINESS_DETAILS.phones[0].tel}
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 py-2 text-xs font-bold text-white hover:text-[#FACC15]"
                >
                  <Phone size={12} className="text-[#FACC15]" />
                  {BUSINESS_DETAILS.phones[0].display}
                </a>
                <a
                  href={BUSINESS_DETAILS.phones[1].tel}
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 py-2 text-xs font-bold text-white hover:text-[#FACC15]"
                >
                  <Phone size={12} className="text-[#FACC15]" />
                  {BUSINESS_DETAILS.phones[1].display}
                </a>
              </div>

              <a
                href="#booking-enquiry"
                onClick={() => setMenuOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#FACC15] py-2.5 text-xs font-bold text-black"
              >
                Enquire About a Ride
                <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Hero Content - Vertically centered, perfectly filling the desktop viewport */}
      <div className="relative z-10 mx-auto flex w-full min-w-0 max-w-7xl flex-1 items-center px-4 py-4 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
        <div className="grid w-full min-w-0 max-w-full grid-cols-1 items-center gap-5 sm:gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          {/* Left Text Column - w-full with break-words to prevent text cutoff */}
          <div className="w-full min-w-0 max-w-full overflow-hidden break-words">
            {/* Tag badge - hidden on mobile as requested, compact on desktop */}
            <motion.div
              initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration, delay: reduceMotion ? 0 : 0.08 }}
              className="mb-2.5 hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 backdrop-blur-md sm:inline-flex"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#FACC15]" />
              <span className="text-[9px] font-bold tracking-[0.16em] text-[#FACC15] uppercase sm:text-[10px]">
                CHITRAKOOT DHAM DARSHAN · LOCAL & OUTSTATION
              </span>
            </motion.div>

            {/* Headline with clean mobile leading and balanced desktop size */}
            <motion.h1
              initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration,
                delay: reduceMotion ? 0 : 0.16,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[26px] sm:text-4xl lg:text-[42px] xl:text-[48px] font-black leading-[1.14] tracking-tight break-words"
            >
              DISCOVER CHITRAKOOT.
              <br />
              <span className="text-[#FACC15]">TRAVEL WITH COMFORT.</span>
            </motion.h1>

            {/* Hindi Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration, delay: reduceMotion ? 0 : 0.22 }}
              className="mt-2 text-xs sm:text-sm font-semibold text-white/80 leading-relaxed break-words"
            >
              अमर सिंह टूर एण्ड ट्रैवल्स — पवित्र धाम दर्शन, स्थानीय एवं बाहरी यात्रा हेतु विश्वसनीय सेवा।
            </motion.p>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration, delay: reduceMotion ? 0 : 0.28 }}
              className="mt-2 text-xs leading-relaxed text-white/65 sm:text-sm sm:leading-relaxed max-w-lg break-words"
            >
              Chitrakoot Dham pilgrimage darshan (Ram Ghat, Kamadgiri, Gupt Godavari,
              Hanuman Dhara), railway station transfers, outstation trips, and wedding
              occasions. AC & Non-AC vehicles available upon enquiry.
            </motion.p>

            {/* Action Buttons - all visible in first screen */}
            <motion.div
              initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration, delay: reduceMotion ? 0 : 0.35 }}
              className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3"
            >
              <a
                href="#booking-enquiry"
                className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-[#FACC15] px-4 py-2.5 text-xs font-bold text-[#111111] shadow-[0_0_20px_rgba(250,204,21,0.25)] transition-all duration-300 hover:bg-white sm:px-5"
              >
                Enquire About a Ride
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </a>

              <a
                href="#vehicles"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-3.5 py-2.5 text-xs font-bold text-white backdrop-blur-md transition-colors duration-300 hover:border-[#FACC15] hover:text-[#FACC15] sm:px-4"
              >
                Explore Our Vehicles
                <ArrowDown size={13} />
              </a>

              <a
                href="#destinations"
                className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-[#FACC15]/30 bg-[#FACC15]/10 px-3.5 py-2.5 text-xs font-bold text-[#FACC15] transition-colors hover:bg-[#FACC15] hover:text-black"
              >
                <Compass size={13} />
                Sightseeing Guide
              </a>
            </motion.div>

            {/* Quick Contact Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration, delay: reduceMotion ? 0 : 0.42 }}
              className="mt-3.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-white/55"
            >
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Call Owner:</span>
              </div>
              <a
                href={BUSINESS_DETAILS.phones[0].tel}
                className="font-bold text-white transition-colors hover:text-[#FACC15]"
              >
                {BUSINESS_DETAILS.phones[0].display}
              </a>
              <span>·</span>
              <a
                href={BUSINESS_DETAILS.phones[1].tel}
                className="font-bold text-white transition-colors hover:text-[#FACC15]"
              >
                {BUSINESS_DETAILS.phones[1].display}
              </a>
            </motion.div>
          </div>

          {/* Right Visual Frame: Auto-changing fleet carousel every 3 seconds */}
          <motion.div
            initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.15,
            }}
            className="relative w-full min-w-0 max-w-full"
          >
            <div className="relative aspect-[16/10] w-full min-w-0 max-w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 bg-[#141414] shadow-2xl sm:min-h-[340px] lg:min-h-[380px] xl:min-h-[420px]">
              {/* Stacked preloaded fleet images with smooth crossfade — ZERO black screens */}
              {VEHICLE_FLEET.map((vehicle, index) => {
                const isActive = currentVehicleIndex === index;
                return (
                  <div
                    key={vehicle.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      isActive
                        ? "opacity-100 z-10 pointer-events-auto"
                        : "opacity-0 z-0 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={vehicle.image}
                      alt={`${vehicle.name} (${vehicle.hindiName}) at Amar Singh Tour & Travels`}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover"
                    />
                  </div>
                );
              })}

              {/* Gentle luxury gradient overlay for maximum readability without darkening car */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/15 to-transparent"
              />

              {/* Top Glass Badges */}
              <div className="absolute left-3 top-3 z-20 flex items-center gap-2 sm:left-4 sm:top-4">
                <span className="rounded-full border border-white/20 bg-black/60 px-2.5 py-1 text-[10px] font-bold tracking-wider text-white backdrop-blur-md sm:px-3">
                  चित्रकूट धाम · CHITRAKOOT
                </span>
                <span className="rounded-full bg-[#FACC15] px-2 py-0.5 text-[9px] font-black text-black sm:px-2.5 sm:py-1">
                  {currentVehicleIndex + 1} / {VEHICLE_FLEET.length}
                </span>
              </div>

              {/* Left / Right Chevron Controls */}
              <button
                type="button"
                onClick={() =>
                  setCurrentVehicleIndex(
                    (prev) => (prev - 1 + VEHICLE_FLEET.length) % VEHICLE_FLEET.length
                  )
                }
                aria-label="Previous vehicle"
                className="absolute left-2 top-1/2 z-20 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-md transition-all hover:bg-[#FACC15] hover:text-black sm:left-3 sm:h-9 sm:w-9"
              >
                <ChevronLeft size={16} />
              </button>

              <button
                type="button"
                onClick={() =>
                  setCurrentVehicleIndex((prev) => (prev + 1) % VEHICLE_FLEET.length)
                }
                aria-label="Next vehicle"
                className="absolute right-2 top-1/2 z-20 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-md transition-all hover:bg-[#FACC15] hover:text-black sm:right-3 sm:h-9 sm:w-9"
              >
                <ChevronRight size={16} />
              </button>

              {/* Clean Professional Bottom Floating Glass Card & Pagination Dots */}
              <div className="absolute inset-x-2.5 bottom-2.5 z-20 rounded-xl border border-white/15 bg-black/70 p-2.5 backdrop-blur-md sm:inset-x-4 sm:bottom-4 sm:p-4">
                <div className="flex items-center justify-between gap-2 sm:gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1 text-[#FACC15]">
                      <Sparkles size={11} className="shrink-0" />
                      <span className="truncate text-[10px] font-bold tracking-wider">
                        {activeVehicle.hindiName} · {activeVehicle.seats}
                      </span>
                    </div>
                    <h3 className="truncate text-xs font-black text-white sm:text-lg">
                      {activeVehicle.name}
                    </h3>
                    <p className="truncate text-[10px] text-white/70 sm:text-[11px]">
                      {activeVehicle.acOption} · {activeVehicle.bestFor}
                    </p>
                  </div>

                  <a
                    href="#booking-enquiry"
                    className="shrink-0 rounded-full bg-[#FACC15] px-3 py-1.5 text-[10px] font-bold text-black transition-colors hover:bg-white sm:px-3.5 sm:text-[11px]"
                  >
                    Enquire
                  </a>
                </div>

                {/* 7 Fleet Pagination Dots with active indicator */}
                <div className="mt-2 flex items-center justify-center gap-1.5 sm:mt-2.5">
                  {VEHICLE_FLEET.map((v, i) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setCurrentVehicleIndex(i)}
                      aria-label={`Show ${v.name}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        currentVehicleIndex === i
                          ? "w-5 sm:w-6 bg-[#FACC15] shadow-[0_0_8px_#FACC15]"
                          : "w-1.5 bg-white/40 hover:bg-white"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle luxury bottom bar with key travel pillars & scroll prompt */}
      <div className="relative z-20 w-full border-t border-white/10 bg-white/[0.02] px-3.5 py-2 backdrop-blur-sm sm:px-6 sm:py-2.5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 text-xs text-white/60">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 sm:gap-x-4">
            <span className="flex items-center gap-1 font-medium text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FACC15]" />
              7 Verified Models
            </span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              24×7 Booking
            </span>
            <span className="hidden md:inline text-white/20">|</span>
            <span className="hidden md:flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FACC15]" />
              Local & Outstation Services
            </span>
          </div>

          <a
            href="#vehicles"
            className="group inline-flex items-center gap-1 text-[11px] font-semibold text-white/70 transition-colors hover:text-[#FACC15] sm:text-xs"
          >
            <span>Explore Vehicles</span>
            <ArrowDown
              size={12}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}