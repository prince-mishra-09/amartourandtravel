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
  X,
  Compass,
  CarFront,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Sparkles,
  Star,
  MessageCircle,
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

const TRIP_PILLS = [
  { label: "कामतानाथ दर्शन", en: "Dham Darshan", href: "#destinations" },
  { label: "लोकल दर्शनीय स्थल", en: "Local Sightseeing", href: "#destinations" },
  { label: "स्टेशन पिकअप/ड्रॉप", en: "Station Transfer", href: "#services" },
];

const TRUST_METRICS = [
  { value: "500+", label: "सफल यात्राएं", sub: "Happy Families" },
  { value: "100%", label: "साफ AC गाड़ियां", sub: "Clean & Verified" },
  { value: "24×7", label: "लोकल ड्राइवर", sub: "Expert Drivers" },
];

const getVehiclePosition = (id: string) => {
  switch (id) {
    case "bolero":
      return "object-[center_55%]";
    case "scorpio":
      return "object-[center_55%]";
    case "tavera":
      return "object-[center_50%]";
    case "xylo":
      return "object-[center_55%]";
    case "ertiga":
      return "object-[center_55%]";
    case "indigo":
      return "object-[center_55%]";
    case "swift":
      return "object-[center_55%]";
    default:
      return "object-center";
  }
};

const getVehicleDesc = (v: (typeof VEHICLE_FLEET)[number]) => {
  if (v.id === "bolero") {
    return "Comfortable rides for Chitrakoot darshan, family trips and outstation travel.";
  }
  return `${v.bestFor}. Comfortable rides for Chitrakoot darshan and group travel.`;
};

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentVehicleIndex, setCurrentVehicleIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const duration = reduceMotion ? 0 : 0.6;

  // Auto-change vehicle image every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVehicleIndex((prev) => (prev + 1) % VEHICLE_FLEET.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const activeVehicle = VEHICLE_FLEET[currentVehicleIndex];

  return (
    <section
      id="home"
      className="relative isolate flex flex-col justify-between overflow-x-clip bg-[#090909] text-white min-h-[100svh] lg:min-h-[calc(100vh-42px)]"
    >
      {/* 1. Compact Top Blessing Banner */}
      <div className="relative z-30 shrink-0 border-b border-white/10 bg-[#111111]/90 px-3 py-1 text-center text-[10px] font-bold tracking-[0.16em] text-[#FACC15] backdrop-blur-md sm:py-1.5 sm:text-xs">
        <span className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          <span>॥ {BUSINESS_DETAILS.blessing} ॥</span>
          <span className="hidden text-white/40 sm:inline">|</span>
          <span className="hidden font-medium text-white/80 sm:inline">
            अमर सिंह टूर एण्ड ट्रैवल्स — {BUSINESS_DETAILS.address}
          </span>
        </span>
      </div>

      {/* Ambient gold glow background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(250,204,21,0.08),transparent_55%)]"
      />

      {/* Sacred Chitrakoot Mountain Backdrop (Blends organically into dark background) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 z-0 h-[260px] w-[85%] max-w-[520px] overflow-hidden opacity-30 sm:h-[350px] sm:w-[55%] sm:opacity-40 lg:h-[420px] lg:w-[45%]"
        style={{
          maskImage:
            "radial-gradient(ellipse at 85% 15%, black 25%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 85% 15%, black 25%, transparent 75%)",
        }}
      >
        <Image
          src="/chitrakoot-mountains.jpg"
          alt="Chitrakoot Kamadgiri Holy Hills"
          fill
          priority
          sizes="(max-width: 768px) 85vw, 45vw"
          className="object-cover object-right-top mix-blend-luminosity brightness-110 contrast-125"
        />
        {/* Soft edge fade overlays to guarantee 0 sharp edges */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#090909]/40 to-[#090909]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent" />
      </div>

      {/* 2. Compact Branded Header */}
      <header className="relative z-20 shrink-0 mx-auto w-full max-w-7xl border-b border-white/10 px-4 py-2 sm:px-6 sm:py-2.5 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="#home" className="group flex items-center gap-2 sm:gap-2.5">
            <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-[#FACC15] text-[#111111] shadow-[0_0_15px_rgba(250,204,21,0.3)] transition-transform duration-300 group-hover:scale-105">
              <CarFront size={18} strokeWidth={2.2} />
            </span>

            <div>
              <span className="block text-xs sm:text-sm font-black tracking-wide text-white sm:text-base">
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

          {/* Quick Phone CTAs (Desktop / Tablet) */}
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
            suppressHydrationWarning
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
          >
            {menuOpen ? <X size={17} /> : <Menu size={17} />}
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
            className="absolute left-3 right-3 top-[76px] z-30 rounded-2xl border border-white/15 bg-[#141414] p-4 shadow-2xl lg:hidden"
          >
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-[#FACC15]"
                >
                  {item.label}
                  <ArrowUpRight size={15} />
                </Link>
              ))}
            </div>

            <div className="mt-2.5 border-t border-white/10 pt-2.5">
              <p className="px-2 text-[10px] font-bold tracking-wider text-white/40">
                DIRECT CALL NUMBERS
              </p>
              <div className="mt-1.5 grid grid-cols-2 gap-2">
                <a
                  href={BUSINESS_DETAILS.phones[0].tel}
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 py-1.5 text-xs font-bold text-white hover:text-[#FACC15]"
                >
                  <Phone size={12} className="text-[#FACC15]" />
                  {BUSINESS_DETAILS.phones[0].display}
                </a>
                <a
                  href={BUSINESS_DETAILS.phones[1].tel}
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 py-1.5 text-xs font-bold text-white hover:text-[#FACC15]"
                >
                  <Phone size={12} className="text-[#FACC15]" />
                  {BUSINESS_DETAILS.phones[1].display}
                </a>
              </div>

              <a
                href="#booking-enquiry"
                onClick={() => setMenuOpen(false)}
                className="mt-2.5 flex items-center justify-center gap-2 rounded-xl bg-[#FACC15] py-2 text-xs font-bold text-black"
              >
                Enquire About a Ride
                <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* 3. Hero Main Content — Cohesive, Balanced & Rich */}
      <div className="relative z-10 mx-auto flex w-full min-w-0 max-w-7xl flex-1 flex-col justify-between sm:justify-center px-3.5 py-2.5 sm:px-6 sm:py-5 lg:px-8 lg:py-6">
        <div className="flex flex-col flex-1 justify-between gap-2.5 sm:gap-4 lg:grid lg:grid-cols-[1fr_1.05fr] lg:gap-10 lg:items-center">
          
          {/* LEFT COLUMN (Desktop) / TOP CHUNK (Mobile) */}
          <div className="w-full min-w-0 max-w-full flex flex-col justify-center lg:col-start-1 lg:row-start-1">
            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration, delay: reduceMotion ? 0 : 0.05 }}
              className="mb-1 inline-flex self-start items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 backdrop-blur-md"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#FACC15] animate-pulse" />
              <span className="text-[9px] font-bold tracking-[0.14em] text-[#FACC15] uppercase sm:text-[10px]">
                CHITRAKOOT DARSHAN · 24×7 TAXI & TOUR SERVICE
              </span>
            </motion.div>

            {/* Main Headline — Grand & Impactful */}
            <motion.h1
              initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration,
                delay: reduceMotion ? 0 : 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[30px] xs:text-[34px] sm:text-4xl lg:text-[48px] xl:text-[52px] font-black leading-[1.05] tracking-tight break-words"
            >
              DISCOVER CHITRAKOOT.
              <span className="block text-[#FACC15]">TRAVEL WITH COMFORT.</span>
            </motion.h1>

            {/* Subtitle in Hindi for authentic pilgrim connection */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration, delay: reduceMotion ? 0 : 0.12 }}
              className="mt-1 text-xs xs:text-[13px] sm:text-sm font-semibold text-[#FACC15]/95 tracking-wide"
            >
              ॥ आस्था, आराम एवं सुरक्षित तीर्थ यात्रा — चित्रकूट धाम दर्शन सेवा ॥
            </motion.p>

            {/* Informative Introductory Paragraph */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration, delay: reduceMotion ? 0 : 0.16 }}
              className="mt-1.5 text-xs xs:text-[12.5px] sm:text-sm text-white/75 leading-relaxed break-words max-w-md sm:max-w-lg"
            >
              Book comfortable rides for Chitrakoot darshan, temple visits, local sightseeing and outstation journeys. Explore our available vehicles, choose the right option for your family or group, and contact us directly to plan your trip.
            </motion.p>

            {/* Trust, Rating & Social Proof Strip (Pilgrim Reviews & Verified Driver) */}
            <div className="mt-2 flex flex-wrap items-center gap-1.5 xs:gap-2">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#FACC15]/30 bg-[#FACC15]/10 px-2.5 py-0.5 backdrop-blur-md">
                <div className="flex items-center gap-0.5 text-[#FACC15]">
                  <Star size={10} className="fill-[#FACC15]" />
                  <Star size={10} className="fill-[#FACC15]" />
                  <Star size={10} className="fill-[#FACC15]" />
                  <Star size={10} className="fill-[#FACC15]" />
                  <Star size={10} className="fill-[#FACC15]" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-white">
                  4.9 <span className="font-medium text-[#FACC15]">(280+ तीर्थयात्री समीक्षाएं)</span>
                </span>
              </div>

              <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[9.5px] sm:text-[11px] font-medium text-white/80">
                <ShieldCheck size={11} className="text-emerald-400" />
                <span>100% वेरिफाइड लोकल ड्राइवर</span>
              </div>
            </div>

            {/* Quick Trip Route Chips (Informative & fills the space purposefully) */}
            <motion.div
              initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration, delay: reduceMotion ? 0 : 0.2 }}
              className="mt-2 flex flex-wrap items-center gap-1.5 sm:gap-2"
            >
              {TRIP_PILLS.map((trip) => (
                <a
                  key={trip.en}
                  href={trip.href}
                  className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/[0.04] px-2.5 py-1 text-[10px] sm:text-xs font-medium text-white/85 transition-all hover:border-[#FACC15] hover:bg-[#FACC15]/10 hover:text-[#FACC15]"
                >
                  <MapPin size={10} className="text-[#FACC15]" />
                  <span>{trip.label}</span>
                </a>
              ))}
            </motion.div>

            {/* Key Service Guarantees (Clean micro-badges) */}
            <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] sm:text-xs text-white/60">
              <span className="inline-flex items-center gap-1 text-white/80">
                <CheckCircle2 size={11} className="text-[#FACC15]" />
                साफ AC / Non-AC गाड़ियां
              </span>
              <span className="inline-flex items-center gap-1 text-white/80">
                <CheckCircle2 size={11} className="text-[#FACC15]" />
                लोकल अनुभवी ड्राइवर
              </span>
              <span className="inline-flex items-center gap-1 text-white/80">
                <CheckCircle2 size={11} className="text-[#FACC15]" />
                पारदर्शी किराया
              </span>
            </div>

            {/* Desktop CTAs (Hidden on mobile where CTAs appear at bottom of mobile view) */}
            <div className="hidden lg:flex lg:flex-col lg:gap-3.5 mt-4">
              <div className="flex items-center gap-3">
                <a
                  href="#booking-enquiry"
                  className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#FACC15] px-6 py-2.5 text-sm font-bold text-[#111111] shadow-[0_0_20px_rgba(250,204,21,0.25)] transition-all duration-300 hover:bg-white active:scale-[0.98]"
                >
                  <span>Book a Ride</span>
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </a>

                <a
                  href={BUSINESS_DETAILS.phones[0].tel}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-5 py-2.5 text-sm font-bold text-white backdrop-blur-md transition-colors duration-300 hover:border-[#FACC15] hover:text-[#FACC15] active:scale-[0.98]"
                >
                  <Phone size={14} className="text-[#FACC15]" />
                  <span>Call {BUSINESS_DETAILS.phones[0].display}</span>
                </a>
              </div>

              {/* Desktop Trust Metrics */}
              <div className="grid grid-cols-3 gap-2.5 pt-2 border-t border-white/10 max-w-lg">
                {TRUST_METRICS.map((metric) => (
                  <div
                    key={metric.value}
                    className="rounded-xl border border-white/10 bg-white/[0.02] p-2.5 backdrop-blur-sm"
                  >
                    <div className="text-base font-black text-[#FACC15]">
                      {metric.value}
                    </div>
                    <div className="text-xs font-semibold text-white">
                      {metric.label}
                    </div>
                    <div className="text-[10px] text-white/50">
                      {metric.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (Desktop) / LOWER VEHICLE & BOTTOM CHUNK (Mobile) — Interactive Vehicle Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: reduceMotion ? 0 : 0.5,
              delay: reduceMotion ? 0 : 0.12,
            }}
            className="w-full min-w-0 max-w-full flex flex-col justify-end lg:justify-center lg:col-start-2 lg:row-start-1 mt-auto lg:mt-0"
          >
            {/* Lower Vehicle block (Placed down to fill the empty space smoothly) */}
            <div className="w-full">
              {/* Quick Vehicle Selector Chips */}
              <div className="mb-1.5 flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider text-white/50 pr-0.5">
                  Fleet:
                </span>
                {VEHICLE_FLEET.map((v, i) => {
                  const isCurrent = currentVehicleIndex === i;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      suppressHydrationWarning
                      onClick={() => setCurrentVehicleIndex(i)}
                      className={`shrink-0 rounded-lg px-2.5 py-1 text-[10.5px] sm:text-xs font-bold transition-all duration-200 ${
                        isCurrent
                          ? "bg-[#FACC15] text-[#111111] shadow-[0_0_12px_rgba(250,204,21,0.35)] scale-105"
                          : "border border-white/10 bg-white/[0.04] text-white/70 hover:border-white/30 hover:text-white"
                      }`}
                    >
                      {v.name.replace("Maruti Suzuki ", "").replace("Mahindra ", "").replace("Tata ", "")}
                    </button>
                  );
                })}
              </div>

              {/* 16:9 Landscape Frame (Clean without large text overlay) */}
              <div className="relative w-full aspect-video overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 bg-[#141414] shadow-2xl">
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
                        priority={index <= 1}
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        className={`object-cover ${getVehiclePosition(vehicle.id)}`}
                      />
                    </div>
                  );
                })}

                {/* Minimal vignette at top & edges only to keep badge and chevrons clear */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent to-transparent"
                />

                {/* Small Top Badge */}
                <div className="absolute left-2.5 top-2.5 z-20 flex items-center gap-1.5 sm:left-4 sm:top-4 sm:gap-2">
                  <span className="rounded-full border border-white/20 bg-black/60 px-2 py-0.5 text-[8.5px] sm:text-[10px] font-bold tracking-wider text-white backdrop-blur-md sm:px-3 sm:py-1">
                    चित्रकूट धाम · CHITRAKOOT
                  </span>
                  <span className="rounded-full bg-[#FACC15] px-1.5 py-0.5 text-[8px] sm:text-[9px] font-black text-black sm:px-2.5 sm:py-1">
                    {currentVehicleIndex + 1}/{VEHICLE_FLEET.length}
                  </span>
                </div>

                {/* Left / Right Carousel Chevrons */}
                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={() =>
                    setCurrentVehicleIndex(
                      (prev) => (prev - 1 + VEHICLE_FLEET.length) % VEHICLE_FLEET.length
                    )
                  }
                  aria-label="Previous vehicle"
                  className="absolute left-2 top-1/2 z-20 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-all hover:bg-[#FACC15] hover:text-black sm:left-3 sm:h-9 sm:w-9"
                >
                  <ChevronLeft size={15} />
                </button>

                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={() =>
                    setCurrentVehicleIndex((prev) => (prev + 1) % VEHICLE_FLEET.length)
                  }
                  aria-label="Next vehicle"
                  className="absolute right-2 top-1/2 z-20 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-all hover:bg-[#FACC15] hover:text-black sm:right-3 sm:h-9 sm:w-9"
                >
                  <ChevronRight size={15} />
                </button>
              </div>

              {/* Compact Vehicle Details Immediately Below the Image */}
              <div className="mt-2 rounded-xl border border-white/10 bg-[#141414]/90 p-2.5 backdrop-blur-md">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <h3 className="truncate text-[13px] sm:text-sm font-semibold text-white">
                      {activeVehicle.name}
                    </h3>
                    <span className="shrink-0 rounded bg-[#FACC15]/20 border border-[#FACC15]/40 px-1.5 py-0.5 text-[10px] sm:text-[11px] font-bold text-[#FACC15]">
                      {activeVehicle.seats}
                    </span>
                  </div>

                  <a
                    href="#booking-enquiry"
                    className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#FACC15] px-2.5 py-1 text-[10px] sm:text-[11px] font-bold text-black transition-colors hover:bg-white active:scale-95"
                  >
                    <span>Enquire</span>
                    <ArrowUpRight size={11} />
                  </a>
                </div>

                <div className="mt-1 flex items-center justify-between gap-3">
                  <p className="line-clamp-2 text-[10px] sm:text-[11px] text-white/65 leading-snug">
                    {getVehicleDesc(activeVehicle)}
                  </p>

                  {/* Subtle Dots */}
                  <div className="flex items-center gap-1 shrink-0">
                    {VEHICLE_FLEET.map((v, i) => (
                      <button
                        key={v.id}
                        type="button"
                        suppressHydrationWarning
                        onClick={() => setCurrentVehicleIndex(i)}
                        aria-label={`Show ${v.name}`}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          currentVehicleIndex === i
                            ? "w-3 bg-[#FACC15]"
                            : "w-1 bg-white/30 hover:bg-white/60"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* MOBILE ONLY: Split 30% WhatsApp + 70% Book a Ride Action Bar */}
            <div className="mt-2.5 flex flex-col gap-1.5 lg:hidden">
              <div className="flex items-center gap-2 w-full">
                {/* Left 30%: WhatsApp Button */}
                <a
                  href={`https://wa.me/91${BUSINESS_DETAILS.phones[0].number}?text=${encodeURIComponent("Namaste Amar Singh Tour & Travels, I want to book/enquire about a taxi for Chitrakoot Darshan.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-[30%] min-h-11 items-center justify-center gap-1.5 rounded-xl bg-[#25D366] px-2 py-2 text-xs font-black text-black shadow-[0_0_15px_rgba(37,211,102,0.3)] transition-all duration-300 hover:brightness-110 active:scale-95"
                >
                  <MessageCircle size={15} className="shrink-0 fill-black" />
                  <span>WhatsApp</span>
                </a>

                {/* Right 70%: Book a Ride Button */}
                <a
                  href="#booking-enquiry"
                  className="group flex w-[70%] min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FACC15] via-[#FDE047] to-[#FACC15] px-4 py-2 text-xs font-black text-[#111111] shadow-[0_4px_20px_rgba(250,204,21,0.3)] transition-all duration-300 hover:brightness-105 active:scale-95"
                >
                  <span>Book a Ride</span>
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </a>
              </div>

              {/* Quick Direct Call & Guide Strip */}
              <div className="flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] text-white/70 backdrop-blur-sm">
                <a
                  href={BUSINESS_DETAILS.phones[0].tel}
                  className="inline-flex items-center gap-1.5 font-bold text-white transition-colors hover:text-[#FACC15]"
                >
                  <Phone size={12} className="text-[#FACC15]" />
                  <span>Call Now · {BUSINESS_DETAILS.phones[0].display}</span>
                </a>

                <a
                  href="#destinations"
                  className="inline-flex items-center gap-1 font-semibold text-[#FACC15] transition-colors hover:text-white"
                >
                  <Compass size={11} />
                  <span>Darshan Guide</span>
                </a>
              </div>

              {/* Mobile Trust Badges (Anchored to finish the bottom cleanly) */}
              <div className="grid grid-cols-3 gap-1.5 pt-0.5">
                <div className="rounded-lg border border-white/10 bg-white/[0.03] px-1.5 py-1 text-center backdrop-blur-sm">
                  <span className="block text-[11px] font-black text-[#FACC15]">500+</span>
                  <span className="block text-[8.5px] font-medium text-white/70 leading-none mt-0.5">सफल यात्राएं</span>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.03] px-1.5 py-1 text-center backdrop-blur-sm">
                  <span className="block text-[11px] font-black text-[#FACC15]">100%</span>
                  <span className="block text-[8.5px] font-medium text-white/70 leading-none mt-0.5">साफ AC गाड़ियां</span>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.03] px-1.5 py-1 text-center backdrop-blur-sm">
                  <span className="block text-[11px] font-black text-[#FACC15]">24×7</span>
                  <span className="block text-[8.5px] font-medium text-white/70 leading-none mt-0.5">लोकल ड्राइवर</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 4. Compact Trust Strip & Scroll Prompt — Anchors the bottom cleanly */}
      <div className="relative z-20 shrink-0 w-full border-t border-white/10 bg-white/[0.02] px-3.5 py-1.5 backdrop-blur-sm sm:px-6 sm:py-2">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 text-[11px] sm:text-xs text-white/60">
          <div className="flex items-center gap-2.5 sm:gap-4">
            <span className="flex items-center gap-1 font-medium text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FACC15]" />
              Multiple Vehicles
            </span>
            <span className="text-white/20">|</span>
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Direct Booking
            </span>
            <span className="hidden md:inline text-white/20">|</span>
            <span className="hidden md:flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FACC15]" />
              Local & Outstation
            </span>
          </div>

          <a
            href="#vehicles"
            className="group inline-flex items-center gap-1 text-[11px] font-semibold text-white/70 transition-colors hover:text-[#FACC15] sm:text-xs"
          >
            <span>Explore Fleet</span>
            <ArrowDown
              size={11}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}