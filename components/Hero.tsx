"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Menu,
  Phone,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  Star,
  Check,
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

// Unified scaling and centering for rock-solid visual consistency across vehicle slides
const getVehicleScale = (id: string) => {
  switch (id) {
    case "swift":
      return "scale-[1.03] object-[center_52%]";
    case "indigo":
      return "scale-[1.02] object-[center_52%]";
    case "tavera":
      return "scale-100 object-[center_50%]";
    case "scorpio":
      return "scale-100 object-[center_54%]";
    case "xylo":
      return "scale-100 object-[center_52%]";
    case "ertiga":
      return "scale-100 object-[center_52%]";
    case "bolero":
      return "scale-100 object-[center_52%]";
    default:
      return "scale-100 object-center";
  }
};

const getVehicleDesc = (v: (typeof VEHICLE_FLEET)[number]) => {
  if (v.id === "scorpio") {
    return "Rugged Excursions, Kalinjar, & Outstation Travel. Comfortable rides for Chitrakoot darshan and group travel.";
  }
  if (v.id === "bolero") {
    return "Comfortable rides for Chitrakoot darshan, family trips and outstation travel.";
  }
  return `${v.bestFor}. Comfortable rides for Chitrakoot darshan and group travel.`;
};

// Smooth 60fps counter animation from 0 to 263
function AnimatedCounter({
  target = 263,
  duration = 1400,
}: {
  target?: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return <span>{count}</span>;
}

// Authentic Sacred Chariot (Rath with horses and flag) emblem for Chitrakoot Pilgrimage
const ChariotLogo = () => (
  <svg
    viewBox="0 0 64 48"
    className="h-8 w-11 sm:h-10 sm:w-14 shrink-0 text-[#C58B1B]"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      d="M10 24 C10 16 16 11 23 10 L25 5 L28 5 L27 10 C34 11 39 16 39 24 Z"
      fill="#C58B1B"
      opacity="0.95"
    />
    <path d="M26 2 L26 8 M26 2 L33 4 L26 7 Z" fill="#D97706" />
    <path
      d="M8 25 L41 25 C43 25 44 27 43 29 L39 36 L10 36 L7 29 C6 27 7 25 8 25 Z"
      fill="#B45309"
    />
    <circle cx="24" cy="36" r="9" fill="#FFFBEB" stroke="#B45309" strokeWidth="2.5" />
    <circle cx="24" cy="36" r="3" fill="#B45309" />
    <path
      d="M24 27 L24 45 M15 36 L33 36 M18 30 L30 42 M18 42 L30 30"
      stroke="#B45309"
      strokeWidth="1.2"
    />
    <circle cx="34" cy="20" r="2.8" fill="#78350F" />
    <path d="M32 23 C32 22 36 22 37 25 L35 28 L31 28 Z" fill="#78350F" />
    <path d="M37 25 Q46 24 53 28" stroke="#D97706" strokeWidth="1.2" fill="none" />
    <path
      d="M48 24 C50 20 54 21 57 23 C59 21 62 21 63 23 C62 25 59 26 57 28 C56 31 54 36 51 36 L48 33 C50 31 52 28 48 27 Z"
      fill="#D97706"
    />
    <path
      d="M44 26 C46 22 50 23 53 25 C55 24 57 24 58 26 C57 28 55 29 53 30 C52 33 50 37 47 37 L44 34 C46 32 48 29 44 28 Z"
      fill="#C58B1B"
    />
  </svg>
);

// Authentic Official WhatsApp Logo (Original speech bubble + telephone handset)
const WhatsAppOfficialLogo = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// Authentic Google Multicolor 'G' Icon
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

// 3 Custom Illustrated Graphic Icons for Feature Cards (Desktop view)
const DriverIllustration = () => (
  <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-amber-50/90 border border-amber-200/70 shadow-sm">
    <svg viewBox="0 0 36 36" className="h-7 w-7 text-stone-800" fill="currentColor">
      <path d="M10 13 C10 10 14 7 18 7 C22 7 26 10 26 13 L27 15 L9 15 Z" fill="#292524" />
      <path d="M8 15 C8 15 13 14 18 14 C23 14 28 15 28 15 C28 16 26 17 18 17 C10 17 8 16 8 15 Z" fill="#C58B1B" />
      <circle cx="18" cy="18" r="4.5" fill="#FCD34D" />
      <circle cx="16.5" cy="17.5" r="0.6" fill="#1C1917" />
      <circle cx="19.5" cy="17.5" r="0.6" fill="#1C1917" />
      <path d="M16 20 Q18 21.5 20 20" stroke="#78350F" strokeWidth="0.8" fill="none" />
      <path d="M11 26 C11 23 14 22.5 18 22.5 C22 22.5 25 23 25 26 L26 29 L10 29 Z" fill="#44403C" />
      <polygon points="18,23 16.5,27 18,29 19.5,27" fill="#C58B1B" />
    </svg>
  </div>
);

const TransparentPricingIllustration = () => (
  <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-amber-50/90 border border-amber-200/70 shadow-sm">
    <svg viewBox="0 0 36 36" className="h-7 w-7" fill="none">
      <circle cx="18" cy="14" r="6.5" fill="#F59E0B" stroke="#D97706" strokeWidth="1.2" />
      <circle cx="18" cy="14" r="5" fill="#FBBF24" />
      <text
        x="18"
        y="17.2"
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="bold"
        fill="#78350F"
        fontFamily="sans-serif"
      >
        ₹
      </text>
      <path d="M11 9 L12 11 L10 11 Z" fill="#F59E0B" />
      <path d="M25 9 L24 11 L26 11 Z" fill="#F59E0B" />
      <path
        d="M9 25 C11 24 13 23 16 23 L21 23 C23 23 25 24 27 25 C25 27 23 28 18 28 L13 28 C11 28 9 27 9 25 Z"
        fill="#FCD34D"
        stroke="#D97706"
        strokeWidth="1"
      />
      <path d="M16 23 L18 20 C18.5 19 19.5 19 20 20 L21 23" stroke="#D97706" strokeWidth="0.8" fill="none" />
    </svg>
  </div>
);

const AcFleetIllustration = () => (
  <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-amber-50/90 border border-amber-200/70 shadow-sm">
    <svg viewBox="0 0 36 36" className="h-7 w-7" fill="none">
      <circle cx="18" cy="11" r="4.5" fill="#E0F2FE" stroke="#0284C7" strokeWidth="0.8" />
      <path d="M18 8 L18 14 M15 11 L21 11 M16 9 L20 13 M16 13 L20 9" stroke="#0284C7" strokeWidth="0.9" />
      <path
        d="M12 21 C13 18 15 17 18 17 C21 17 23 18 24 21 L26 23 L10 23 Z"
        fill="#0284C7"
      />
      <path d="M13 21 C14 19 16 18.5 18 18.5 C20 18.5 22 19 23 21 Z" fill="#BAE6FD" />
      <path
        d="M9 23 C9 22 10 22 12 22 L24 22 C26 22 27 22 27 23 L26.5 27 C26.5 28 25.5 28.5 24.5 28.5 L11.5 28.5 C10.5 28.5 9.5 28 9.5 27 Z"
        fill="#C58B1B"
      />
      <circle cx="12" cy="24.5" r="1.2" fill="#FEF08A" />
      <circle cx="24" cy="24.5" r="1.2" fill="#FEF08A" />
      <rect x="14" y="26" width="8" height="1.5" rx="0.75" fill="#292524" />
      <rect x="10" y="27.5" width="2.5" height="2" rx="0.5" fill="#1C1917" />
      <rect x="23.5" y="27.5" width="2.5" height="2" rx="0.5" fill="#1C1917" />
    </svg>
  </div>
);

// 4 Verified Pilgrim Avatars for Customer Social Proof
const PILGRIM_AVATARS = [
  {
    name: "Mishra Family",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Pandey Ji",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Verma Travels",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Sharma Ji",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
  },
];

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentVehicleIndex, setCurrentVehicleIndex] = useState(1); // Default to Scorpio
  const reduceMotion = useReducedMotion();

  // Desktop midpoint measurement for the 3 cards
  const contentAreaRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [bannerHeight, setBannerHeight] = useState<number | null>(null);

  const duration = reduceMotion ? 0 : 0.5;

  // Auto-change vehicle image every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVehicleIndex((prev) => (prev + 1) % VEHICLE_FLEET.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // On desktop, measure exact vertical midpoint of 3 cards relative to contentAreaRef
  useEffect(() => {
    const updateBannerHeight = () => {
      if (cardsRef.current && contentAreaRef.current) {
        const cardsRect = cardsRef.current.getBoundingClientRect();
        const containerRect = contentAreaRef.current.getBoundingClientRect();
        const midPoint = (cardsRect.top - containerRect.top) + (cardsRect.height / 2);
        setBannerHeight(Math.round(midPoint));
      }
    };

    updateBannerHeight();
    window.addEventListener("resize", updateBannerHeight);

    return () => {
      window.removeEventListener("resize", updateBannerHeight);
    };
  }, []);

  const activeVehicle = VEHICLE_FLEET[currentVehicleIndex];

  return (
    <section
      id="home"
      className="relative isolate flex flex-col justify-between overflow-x-clip bg-[#FAF7F0] text-stone-900 min-h-[100svh] lg:h-[100vh] lg:max-h-[1080px]"
    >
      {/* 1. Branded Header — Clean Warm Ivory Heritage Theme (Fixed at top so it never scrolls off) */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-[#E8DEC8] bg-[#FAF7F0]/95 backdrop-blur-md px-3.5 pt-2 pb-[4vh] sm:px-6 sm:py-2.5 lg:px-8 lg:py-2.5 shadow-2xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2.5 sm:gap-3">
          {/* Left: Traditional Chariot Emblem + Brand Title */}
          <Link href="#home" className="group flex items-center gap-2 sm:gap-3">
            <ChariotLogo />
            <div>
              <span className="block text-sm sm:text-base lg:text-lg font-black tracking-wide text-[#2B1E16] leading-tight">
                AMAR SINGH
              </span>
              <span className="block text-[7.5px] sm:text-[9px] font-extrabold tracking-[0.16em] text-[#C58B1B]">
                TOUR &amp; TRAVELS | CHITRAKOOT
              </span>
            </div>
          </Link>

          {/* Center: Navigation Menus for Desktop & Tablet as requested */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {[
              { label: "Home", href: "#home" },
              { label: "Chitrakoot Darshan", href: "#destinations" },
              { label: "Our Vehicles", href: "#vehicles" },
              { label: "Services", href: "#services" },
              { label: "How It Works", href: "#booking-process" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-2.5 py-1 text-xs lg:text-[13px] font-bold text-[#2B1E16] hover:text-[#C58B1B] hover:bg-stone-200/50 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right: WhatsApp Inquiry & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Official WhatsApp Inquiry button with authentic WhatsApp color and logo */}
            <a
              href={`https://wa.me/91${BUSINESS_DETAILS.phones[0].number}?text=${encodeURIComponent(
                "Namaste Amar Singh Tour & Travels, I want to enquire about taxi booking in Chitrakoot."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#25D366] hover:bg-[#20ba5a] px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-bold text-white shadow-sm transition-all duration-300 hover:shadow-md active:scale-95 shrink-0"
              aria-label="WhatsApp Inquiry"
            >
              <WhatsAppOfficialLogo className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-white shrink-0" />
              <span className="hidden sm:inline">WhatsApp Inquiry</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>

            {/* Mobile Hamburger menu toggle (hidden on tablet & desktop as requested) */}
            <button
              type="button"
              suppressHydrationWarning
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="md:hidden flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg border border-stone-300/80 text-[#2B1E16] transition-colors hover:bg-stone-200/50"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* In-flow spacer ensuring the content below never shifts position on mobile or desktop */}
      <div
        className="shrink-0 w-full px-3.5 pt-2 pb-[4vh] sm:px-6 sm:py-2.5 lg:px-8 lg:py-2.5 invisible pointer-events-none select-none"
        aria-hidden="true"
      >
        <div className="h-8 sm:h-9 lg:h-10" />
      </div>

      {/* Mobile navigation dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed left-3 right-3 top-[62px] sm:top-[70px] z-50 rounded-2xl border border-stone-200 bg-[#FAF7F0] p-4 shadow-2xl text-[#2B1E16] md:hidden"
          >
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold text-[#2B1E16] transition-colors hover:bg-stone-200/60 hover:text-[#C58B1B]"
                >
                  {item.label}
                  <ArrowUpRight size={15} />
                </Link>
              ))}
            </div>

            <div className="mt-3 border-t border-stone-200 pt-3">
              <p className="px-2 text-[10px] font-bold tracking-wider text-stone-500">
                DIRECT CALL NUMBERS
              </p>
              <div className="mt-1.5 grid grid-cols-2 gap-2">
                <a
                  href={BUSINESS_DETAILS.phones[0].tel}
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-stone-300 bg-white py-1.5 text-xs font-bold text-[#2B1E16] hover:text-[#C58B1B]"
                >
                  <Phone size={12} className="text-[#C58B1B]" />
                  {BUSINESS_DETAILS.phones[0].display}
                </a>
                <a
                  href={BUSINESS_DETAILS.phones[1].tel}
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-stone-300 bg-white py-1.5 text-xs font-bold text-[#2B1E16] hover:text-[#C58B1B]"
                >
                  <Phone size={12} className="text-[#C58B1B]" />
                  {BUSINESS_DETAILS.phones[1].display}
                </a>
              </div>

              <a
                href="#booking-enquiry"
                onClick={() => setMenuOpen(false)}
                className="mt-2.5 flex items-center justify-center gap-2 rounded-xl bg-[#C58B1B] py-2 text-xs font-bold text-white shadow-sm"
              >
                Enquire About a Ride
                <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* 2. Hero Main Canvas: 
          - On Desktop (lg): Two-Tone with mountain image at top & 3 cards straddling the midpoint
          - On Mobile (< lg): Pure Heritage Cream/Yellow theme, Car Showcase flush under nav, enlarged headline, reviews above buttons, fills screen completely!
      */}
      <div
        ref={contentAreaRef}
        className="relative isolate flex-1 min-h-0 overflow-y-auto lg:overflow-visible flex flex-col justify-between lg:justify-center px-3 sm:px-6 lg:px-8 pt-1 pb-2 sm:py-2 lg:py-2 xl:py-3"
      >
        {/* Mountain Landscape Banner (DESKTOP ONLY — Hidden on mobile as requested) */}
        <div
          style={{ height: bannerHeight ? `${bannerHeight}px` : "50%" }}
          className="hidden lg:block absolute top-0 left-0 right-0 z-0 overflow-hidden bg-[#170E08]"
        >
          <Image
            src="/chitrakoot-mountains.jpg"
            alt="Holy Chitrakoot Hills, Temples & Mandakini Valley"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_35%] brightness-105 contrast-105"
          />
          {/* Crisp, natural dark gradient for contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35" />
        </div>

        {/* Content Container: Flush to top on mobile (no top gap) / centered on desktop */}
        <div className="relative z-10 mx-auto w-full max-w-7xl flex flex-col justify-between lg:justify-center my-0 lg:my-auto flex-1">
          <div className="flex flex-col lg:grid lg:grid-cols-[1.1fr_1fr] gap-2.5 sm:gap-4 lg:gap-8 lg:items-center">
            
            {/* 🚗 VEHICLE SHOWCASE COLUMN:
                - On Phone (< lg): ORDER-1 (Flush right below navbar with zero gap!)
                - On Desktop (lg): ORDER-2 (Right column)
            */}
            <motion.div
              initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: reduceMotion ? 0 : 0.4,
                delay: reduceMotion ? 0 : 0.08,
              }}
              className="order-1 lg:order-2 w-full flex flex-col justify-center relative z-10 mt-0"
            >
              {/* Fleet Selector Pills (DESKTOP ONLY — Hidden on phone screen as requested) */}
              <div className="hidden lg:flex mb-2 items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider text-white/90 pr-0.5 drop-shadow-sm">
                  FLEET:
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
                          ? "bg-[#C58B1B] text-white shadow-md scale-105"
                          : "border border-white/30 bg-black/35 backdrop-blur-xs text-white/95 hover:border-white/50 hover:bg-black/50 hover:text-white"
                      }`}
                    >
                      {v.name.replace("Maruti Suzuki ", "").replace("Mahindra ", "").replace("Tata ", "")}
                    </button>
                  );
                })}
              </div>

              {/* Vehicle Showcase Card: Taller on mobile to fill screen gracefully */}
              <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-stone-200/90 bg-white shadow-xl lg:shadow-2xl text-stone-900 flex flex-col">
                {/* Image Frame: Increased height on mobile to fill screen */}
                <div className="relative w-full h-[195px] xs:h-[215px] sm:h-[245px] lg:h-auto lg:aspect-video overflow-hidden bg-stone-950 shrink-0">
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
                          className={`object-cover w-full h-full transition-transform duration-500 ${getVehicleScale(
                            vehicle.id
                          )}`}
                        />
                      </div>
                    );
                  })}

                  {/* Gradient overlays */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/65 via-transparent to-black/45"
                  />

                  {/* Top Left: Chitrakoot Badge + Counter */}
                  <div className="absolute left-2 top-2 z-20 flex items-center gap-1 sm:left-3.5 sm:top-3.5 sm:gap-1.5">
                    <span className="rounded-full border border-white/20 bg-black/65 px-2 py-0.5 text-[8px] sm:text-[9.5px] font-bold tracking-wider text-white backdrop-blur-md">
                      चित्रकूट धाम · CHITRAKOOT
                    </span>
                    <span className="rounded-full bg-[#C58B1B] px-1.5 py-0.5 text-[7.5px] sm:text-[9px] font-black text-white">
                      {currentVehicleIndex + 1}/{VEHICLE_FLEET.length}
                    </span>
                  </div>

                  {/* Top Right: Google Reviews Badge */}
                  <div className="absolute right-2 top-2 z-20 flex items-center gap-1 rounded-full border border-stone-200/60 bg-white/95 px-2 py-0.5 sm:px-2.5 sm:py-1 shadow-md backdrop-blur-md">
                    <GoogleIcon />
                    <div className="flex items-center gap-0.5 text-[#F59E0B]">
                      <Star size={8} className="fill-[#F59E0B]" />
                      <Star size={8} className="fill-[#F59E0B]" />
                      <Star size={8} className="fill-[#F59E0B]" />
                      <Star size={8} className="fill-[#F59E0B]" />
                      <Star size={8} className="fill-[#F59E0B]" />
                    </div>
                    <span className="text-[8px] sm:text-[9px] font-bold text-stone-700">
                      (39)
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
                    className="absolute left-1.5 top-1/2 z-20 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-all hover:bg-[#C58B1B] sm:left-3 sm:h-8 sm:w-8"
                  >
                    <ChevronLeft size={14} className="sm:h-4 sm:w-4" />
                  </button>

                  <button
                    type="button"
                    suppressHydrationWarning
                    onClick={() =>
                      setCurrentVehicleIndex((prev) => (prev + 1) % VEHICLE_FLEET.length)
                    }
                    aria-label="Next vehicle"
                    className="absolute right-1.5 top-1/2 z-20 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-all hover:bg-[#C58B1B] sm:right-3 sm:h-8 sm:w-8"
                  >
                    <ChevronRight size={14} className="sm:h-4 sm:w-4" />
                  </button>

                  {/* Bottom Left: 4.9 Rating */}
                  <div className="absolute bottom-2 left-2 z-20 flex items-center gap-1 rounded-full bg-white/95 px-2 py-0.5 text-stone-900 shadow-sm backdrop-blur-md">
                    <span className="text-[9px] sm:text-[10px] font-black text-[#1C1917]">4.9</span>
                    <div className="flex items-center gap-0.5 text-[#F59E0B]">
                      <Star size={7} className="fill-[#F59E0B]" />
                      <Star size={7} className="fill-[#F59E0B]" />
                      <Star size={7} className="fill-[#F59E0B]" />
                      <Star size={7} className="fill-[#F59E0B]" />
                      <Star size={7} className="fill-[#F59E0B]" />
                    </div>
                    <span className="hidden sm:inline text-[8px] font-semibold text-stone-500">133 reviews</span>
                  </div>

                  {/* Bottom Right: Verified Drivers Badge */}
                  <div className="absolute bottom-2 right-2 z-20 flex items-center gap-1 rounded-full bg-white/95 px-2 py-0.5 shadow-sm backdrop-blur-md">
                    <CheckCircle2 size={10} className="text-emerald-600 sm:h-3 sm:w-3" />
                    <span className="text-[8px] sm:text-[9px] font-bold text-stone-800">
                      Verified Drivers
                    </span>
                  </div>

                  {/* Bottom Center Dots */}
                  <div className="absolute bottom-1.5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1">
                    {VEHICLE_FLEET.map((v, i) => (
                      <button
                        key={v.id}
                        type="button"
                        suppressHydrationWarning
                        onClick={() => setCurrentVehicleIndex(i)}
                        aria-label={`Show ${v.name}`}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          currentVehicleIndex === i
                            ? "w-3 sm:w-3.5 bg-[#F5D061]"
                            : "w-1 bg-white/40 hover:bg-white/70"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Card Bottom Body: Ultra compact on mobile, full on desktop */}
                <div className="p-2 sm:p-2.5 lg:p-4 bg-white flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm sm:text-base lg:text-lg font-black text-[#1C1917] truncate">
                        {activeVehicle.name}
                      </h3>
                      <span className="shrink-0 rounded-md bg-[#C58B1B] px-2 py-0.5 text-[9px] sm:text-[10px] lg:text-xs font-bold text-white shadow-xs">
                        {activeVehicle.seats}
                      </span>
                    </div>

                    <p className="mt-0.5 lg:mt-1 text-[11px] lg:text-xs text-stone-600 leading-snug line-clamp-1 lg:line-clamp-2">
                      {getVehicleDesc(activeVehicle)}
                    </p>
                  </div>

                  {/* Desktop CTA Action Button (Only on Desktop) */}
                  <div className="hidden lg:flex mt-2.5 items-center gap-2">
                    <a
                      href="#booking-enquiry"
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[#C58B1B] hover:bg-[#A8720F] py-2.5 sm:py-3 px-4 text-xs sm:text-sm font-bold text-white shadow-md transition-all duration-300 active:scale-[0.98]"
                    >
                      <span>Book Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 📝 HEADLINE & CONTENT COLUMN:
                - On Phone (< lg): ORDER-2 (Right below the car card)
                - On Desktop (lg): ORDER-1 (Left column)
            */}
            <div className="order-2 lg:order-1 w-full flex flex-col justify-center">
              
              {/* Main Headline — 5vh top padding on mobile as requested, clean offset on desktop */}
              <div className="pt-[5vh] lg:pt-1">
                <motion.h1
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration, delay: reduceMotion ? 0 : 0.08 }}
                  className="text-[32px] xs:text-[36px] sm:text-4xl md:text-5xl lg:text-[40px] xl:text-[44px] font-black leading-[1.1] tracking-tight text-[#1C1917] lg:text-white drop-shadow-none lg:drop-shadow-md"
                >
                  Experience the Essence <br className="hidden sm:inline" />
                  <span className="text-[#C58B1B] lg:text-[#F5D061]">of Chitrakoot</span>
                </motion.h1>

                {/* Subtitle: 2vh gap after heading on mobile, zero gap between texts below bold text as requested */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration, delay: reduceMotion ? 0 : 0.12 }}
                  className="mt-[2vh] lg:mt-2 text-[14px] xs:text-[15px] sm:text-base lg:text-[15px] xl:text-base text-stone-800 lg:text-stone-100/95 leading-relaxed max-w-xl space-y-0 sm:space-y-1 lg:space-y-1.5"
                >
                  <p className="font-bold text-stone-900 lg:text-white">
                    Comfortable Pilgrimages &amp; Guided Sightseeing to Ramghat, Gupt Godavari, Kamadgiri Parikrama, Hanuman Dhara &amp; Sati Anusuya Ashram.
                  </p>
                  <p className="text-stone-700 lg:text-stone-200">
                    Complete Chitrakoot Dham Darshan with sanitized family AC cabs, prompt pickup &amp; drop from Karwi (CKTD) Railway Station, and trusted outstation tours to Prayagraj Sangam, Ayodhya &amp; Khajuraho.
                  </p>
                  <p className="text-stone-700 lg:text-stone-200">
                    24×7 humble local expert drivers ensuring a peaceful, safe &amp; memorable yatra for elderly family members and pilgrim groups.
                  </p>
                </motion.div>

                {/* Sacred Hindi Blessing */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration, delay: reduceMotion ? 0 : 0.14 }}
                  className="mt-1 sm:mt-1.5 lg:mt-1.5 text-xs sm:text-sm lg:text-xs font-bold text-[#C58B1B] lg:text-[#F5D061] tracking-wide"
                >
                  ॥ आस्था, आराम एवं सुरक्षित तीर्थ यात्रा — चित्रकूट धाम दर्शन सेवा ॥
                </motion.p>
              </div>

              {/* 3 Elevated Feature Cards (DESKTOP ONLY — Hidden on mobile as requested to keep 1 screen fit) */}
              <div
                ref={cardsRef}
                className="hidden lg:grid mt-4 sm:mt-5 grid-cols-3 gap-2.5 max-w-xl relative z-10"
              >
                {/* Card 1: Experienced Drivers */}
                <div className="rounded-2xl border border-stone-200/90 bg-white p-2.5 sm:p-3 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="mb-1.5">
                    <DriverIllustration />
                  </div>
                  <h4 className="text-xs font-black text-[#1C1917]">Experienced Drivers</h4>
                  <p className="mt-0.5 text-[10px] text-stone-600 leading-snug">
                    Experienced drivers, with key local expertise.
                  </p>
                </div>

                {/* Card 2: Transparent Pricing */}
                <div className="rounded-2xl border border-stone-200/90 bg-white p-2.5 sm:p-3 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="mb-1.5">
                    <TransparentPricingIllustration />
                  </div>
                  <h4 className="text-xs font-black text-[#1C1917]">Transparent Pricing</h4>
                  <p className="mt-0.5 text-[10px] text-stone-600 leading-snug">
                    Fixed upfront rates with zero hidden costs.
                  </p>
                </div>

                {/* Card 3: Comfortable, A/C Fleet */}
                <div className="rounded-2xl border border-stone-200/90 bg-white p-2.5 sm:p-3 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="mb-1.5">
                    <AcFleetIllustration />
                  </div>
                  <h4 className="text-xs font-black text-[#1C1917]">Comfortable, A/C Fleet</h4>
                  <p className="mt-0.5 text-[10px] text-stone-600 leading-snug">
                    Clean, verified vehicles with cool comfort.
                  </p>
                </div>
              </div>

              {/* Lower Section: Reviews ABOVE Buttons + 3 CTA Action Buttons + Trust Strip */}
              <div className="mt-2 sm:mt-2.5 lg:mt-2 xl:mt-3 max-w-xl relative z-10">
                
                {/* Desktop Checklist (Compact on 2xl screens, hidden on laptop/standard desktop to ensure 100% single screen fit) */}
                <div className="hidden 2xl:block mb-2">
                  <h3 className="text-sm font-extrabold text-[#1C1917]">
                    Our Trusted Fleet for Sacred Journeys
                  </h3>
                  <ul className="mt-1.5 space-y-1 sm:space-y-1.5 text-xs text-[#292524] font-medium">
                    <li className="flex items-center gap-2">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#C58B1B] text-white">
                        <Check size={11} strokeWidth={3} />
                      </span>
                      <span>Book comfortable rides for Chitrakoot, temple visits and outstation journeys</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#C58B1B] text-white">
                        <Check size={11} strokeWidth={3} />
                      </span>
                      <span>Kamadgiri Parikrama, Ram Ghat, Gupt Godavari and station pickup/drop</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#C58B1B] text-white">
                        <Check size={11} strokeWidth={3} />
                      </span>
                      <span>Clean AC / Non-AC vehicles with 24×7 local expert drivers</span>
                    </li>
                  </ul>
                </div>

                {/* ⭐ REVIEWS AND SOCIAL PROOF: Positioned ABOVE the buttons with 1.5x enlarged profile avatars */}
                <div className="mt-2 sm:mt-2.5 flex flex-wrap items-center justify-between sm:justify-start gap-2 pt-2 border-t border-stone-200/70 lg:border-none">
                  <div className="flex items-center gap-2.5">
                    {/* 1.5x Enlarged Pilgrim Avatars (h-9 w-9 / 36px) */}
                    <div className="flex -space-x-2 overflow-hidden py-0.5">
                      {PILGRIM_AVATARS.map((avatar, idx) => (
                        <div
                          key={idx}
                          className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white border border-amber-300/80 shadow-sm overflow-hidden bg-stone-200"
                        >
                          <img
                            src={avatar.src}
                            alt={avatar.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Rating Stars & Animated 0 to 263 Review Counter */}
                    <div className="flex items-center gap-1 text-xs sm:text-sm">
                      <div className="flex items-center gap-0.5 text-[#F59E0B]">
                        <Star size={13} className="fill-[#F59E0B]" />
                        <Star size={13} className="fill-[#F59E0B]" />
                        <Star size={13} className="fill-[#F59E0B]" />
                        <Star size={13} className="fill-[#F59E0B]" />
                        <Star size={13} className="fill-[#F59E0B]" />
                      </div>
                      <span className="font-extrabold text-[#1C1917]">4.9</span>
                      <span className="font-bold text-[#C58B1B]">
                        (<AnimatedCounter target={263} duration={1400} /> reviews)
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] sm:text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/80">
                    ✔ 100% Verified Pilgrims
                  </span>
                </div>

                {/* 🛡️ TRUST HIGHLIGHTS: Positioned directly above the CTA buttons on mobile (hidden on desktop since bottom bar already shows it) */}
                <div className="lg:hidden mt-2 flex items-center justify-between text-[11px] sm:text-xs font-bold text-stone-800 bg-amber-50/90 border border-amber-200/80 rounded-xl px-3 py-1.5 shadow-2xs">
                  <span className="flex items-center gap-1.5 text-[#2B1E16]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C58B1B]" />
                    Multiple Vehicles Available
                  </span>
                  <span className="text-amber-300">|</span>
                  <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Direct Booking · No Middlemen
                  </span>
                </div>

                {/* 🎯 3 CTA ACTION BUTTONS: Placed directly below trust strip on mobile, below reviews on desktop */}
                <div className="mt-2 sm:mt-2.5 lg:mt-3 flex items-center gap-2 sm:gap-2.5">
                  {/* Call Now Button (Dark with Yellow Phone) */}
                  <a
                    href={BUSINESS_DETAILS.phones[0].tel}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-stone-800 bg-[#1C120B] hover:bg-stone-900 text-white py-2.5 px-3 text-xs sm:text-sm font-bold shadow-sm transition-all active:scale-95"
                    aria-label={`Call ${BUSINESS_DETAILS.phones[0].display}`}
                  >
                    <Phone size={13} className="text-[#FACC15] shrink-0" />
                    <span>Call Now</span>
                  </a>

                  {/* Book / Enquire Button (Vibrant Yellow #FACC15 with black text & arrow) */}
                  <a
                    href="#booking-enquiry"
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#FACC15] hover:bg-amber-300 text-black py-2.5 px-3 text-xs sm:text-sm font-black shadow-md transition-all active:scale-95"
                  >
                    <span>Book Ride</span>
                    <ArrowUpRight size={14} className="shrink-0" />
                  </a>

                  {/* WhatsApp Quick Icon Button with Authentic Logo */}
                  <a
                    href={`https://wa.me/91${BUSINESS_DETAILS.phones[0].number}?text=${encodeURIComponent(
                      "Namaste Amar Singh Tour & Travels, I want to enquire about taxi booking for Chitrakoot Darshan."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white p-2.5 px-3.5 shadow-md transition-all active:scale-95 shrink-0"
                    aria-label="WhatsApp enquiry"
                  >
                    <WhatsAppOfficialLogo className="h-4 w-4 fill-current" />
                  </a>
                </div>

                {/* 🛡️ DESKTOP TRUST & FLEET STRIP: Directly BELOW the buttons as requested ("bhai button ke neeche rhe") */}
                <div className="hidden lg:flex mt-2.5 items-center justify-between gap-2 text-[11px] xl:text-xs text-stone-700 pt-2 border-t border-stone-200/80">
                  <div className="flex items-center gap-2.5 xl:gap-3.5">
                    <span className="flex items-center gap-1 font-bold text-[#2B1E16]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C58B1B]" />
                      Multiple Vehicles Available
                    </span>
                    <span className="text-stone-300">|</span>
                    <span className="flex items-center gap-1 font-bold text-emerald-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Direct Booking · No Middlemen
                    </span>
                    <span className="text-stone-300 hidden xl:inline">|</span>
                    <span className="hidden xl:flex items-center gap-1 text-stone-600 font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C58B1B]" />
                      Local Darshan &amp; Outstation Trips
                    </span>
                  </div>

                  <a
                    href="#vehicles"
                    className="group inline-flex items-center gap-1 font-bold text-[#C58B1B] hover:text-[#A8720F] transition-colors shrink-0"
                  >
                    <span>Explore Fleet</span>
                    <ArrowDown
                      size={12}
                      className="transition-transform duration-300 group-hover:translate-y-0.5"
                    />
                  </a>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}