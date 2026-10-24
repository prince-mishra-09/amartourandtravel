"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Phone, ArrowUpRight } from "lucide-react";
import { BUSINESS_DETAILS } from "@/lib/business";

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
          className="fixed bottom-0 inset-x-0 z-40 p-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-[#0d0d0d]/95 backdrop-blur-xl border-t border-white/15 shadow-[0_-10px_35px_rgba(0,0,0,0.85)] lg:hidden"
          aria-label="Quick Mobile Actions"
        >
          <div className="mx-auto flex max-w-md items-center gap-2.5">
            {/* Direct Call Button */}
            <a
              href={BUSINESS_DETAILS.phones[0].tel}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.08] py-2.5 px-3 text-xs font-bold text-white transition-all active:scale-95 hover:border-[#FACC15] hover:text-[#FACC15]"
              aria-label={`Call ${BUSINESS_DETAILS.phones[0].display}`}
            >
              <Phone size={14} className="text-[#FACC15]" />
              <span>Call Now</span>
            </a>

            {/* Enquire Button */}
            <a
              href="#booking-enquiry"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#FACC15] py-2.5 px-3 text-xs font-black text-black shadow-[0_0_15px_rgba(250,204,21,0.35)] transition-all active:scale-95 hover:bg-white"
            >
              <span>Enquire</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
