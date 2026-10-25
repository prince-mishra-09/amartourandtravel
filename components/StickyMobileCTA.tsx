"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Phone, ArrowUpRight } from "lucide-react";
import { BUSINESS_DETAILS } from "@/lib/business";

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

export default function StickyMobileCTA() {
  const [show, setShow] = useState(false);
  const [formInView, setFormInView] = useState(false);

  useEffect(() => {
    // 1. Observe booking enquiry and footer so sticky bar does NOT obstruct forms or submit button
    const bookingSection = document.getElementById("booking-enquiry");
    const footerSection = document.getElementById("contact");

    const observer = new IntersectionObserver(
      (entries) => {
        const isAnyInView = entries.some((entry) => entry.isIntersecting);
        setFormInView(isAnyInView);
      },
      { threshold: 0.15 }
    );

    if (bookingSection) observer.observe(bookingSection);
    if (footerSection) observer.observe(footerSection);

    // 2. Scroll listener: Show only when scrolled past Hero section (~380px)
    const handleScroll = () => {
      if (window.scrollY > 380) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const isVisible = show && !formInView;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 inset-x-0 z-40 p-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-[#FAF7F0]/95 backdrop-blur-xl border-t border-[#E8DEC8] shadow-[0_-8px_30px_rgba(0,0,0,0.12)] lg:hidden"
          aria-label="Quick Mobile Actions"
        >
          <div className="mx-auto flex max-w-md items-center gap-2">
            {/* 1. Direct Call Button (Sleek Dark with Yellow Phone) */}
            <a
              href={BUSINESS_DETAILS.phones[0].tel}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-stone-800 bg-[#1C120B] py-2.5 px-3 text-xs font-bold text-white shadow-sm transition-all active:scale-95"
              aria-label={`Call ${BUSINESS_DETAILS.phones[0].display}`}
            >
              <Phone size={13} className="text-[#FACC15] shrink-0" />
              <span>Call Now</span>
            </a>

            {/* 2. Book Ride Button (Vibrant Yellow #FACC15 with black text & arrow) */}
            <a
              href="#booking-enquiry"
              className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#FACC15] hover:bg-amber-300 py-2.5 px-3 text-xs font-black text-black shadow-md transition-all active:scale-95"
            >
              <span>Book Ride</span>
              <ArrowUpRight size={14} className="shrink-0" />
            </a>

            {/* 3. WhatsApp Button with Authentic Logo */}
            <a
              href={`https://wa.me/91${BUSINESS_DETAILS.phones[0].number}?text=${encodeURIComponent(
                "Namaste Amar Singh Tour & Travels, I want to enquire about taxi booking for Chitrakoot Darshan."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white p-2.5 px-3 shadow-md transition-all active:scale-95 shrink-0"
              aria-label="WhatsApp enquiry"
            >
              <WhatsAppOfficialLogo className="h-4 w-4 fill-current" />
            </a>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
