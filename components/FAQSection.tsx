"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ChevronDown,
  CircleHelp,
  Phone,
  ArrowRight,
} from "lucide-react";
import { FAQS, BUSINESS_DETAILS } from "@/lib/business";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("fare-quote");
  const reduceMotion = useReducedMotion();
  const animationDuration = reduceMotion ? 0 : 0.25;

  return (
    <section
      id="faqs"
      className="relative scroll-mt-16 overflow-hidden bg-[#F7F5EF] py-14 text-[#151515] sm:py-20 lg:py-24"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          {/* Left Column: Heading and Contact Card */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            <div className="mb-3.5 flex items-center gap-2.5">
              <span className="h-[2px] w-8 bg-[#B38B08]" />
              <span className="text-[11px] font-bold tracking-[0.22em] text-[#80630A] uppercase sm:text-xs">
                FREQUENTLY ASKED QUESTIONS · अक्सर पूछे जाने वाले सवाल
              </span>
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-5xl">
              QUESTIONS &
              <br />
              <span className="text-[#A47C00]">HELPFUL ANSWERS.</span>
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-black/65 sm:text-base">
              Clear answers regarding fare requests, available vehicles, Chitrakoot
              Dham darshan routes, toll inclusions, and wedding fleet bookings.
            </p>

            {/* Quick Support Card */}
            <div className="mt-7 rounded-2xl border border-black/[0.08] bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FACC15] text-[#111111]">
                  <CircleHelp size={22} />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-black">Have a specific question?</h3>
                  <p className="text-xs text-black/55">Speak directly with our team</p>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-2">
                <a
                  href={BUSINESS_DETAILS.phones[0].tel}
                  className="flex items-center justify-between rounded-xl bg-[#F7F5EF] px-3.5 py-2.5 text-xs font-bold text-[#151515] transition-colors hover:bg-[#FACC15]"
                >
                  <span className="flex items-center gap-2">
                    <Phone size={13} className="text-[#80630A]" />
                    Call {BUSINESS_DETAILS.phones[0].display}
                  </span>
                  <ArrowRight size={13} />
                </a>

                <a
                  href={BUSINESS_DETAILS.phones[1].tel}
                  className="flex items-center justify-between rounded-xl bg-[#F7F5EF] px-3.5 py-2.5 text-xs font-bold text-[#151515] transition-colors hover:bg-[#FACC15]"
                >
                  <span className="flex items-center gap-2">
                    <Phone size={13} className="text-[#80630A]" />
                    Call {BUSINESS_DETAILS.phones[1].display}
                  </span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Accordion */}
          <div className="space-y-3">
            {FAQS.map((faq) => {
              const isOpen = openId === faq.id;
              const panelId = `faq-panel-${faq.id}`;
              const buttonId = `faq-btn-${faq.id}`;

              return (
                <div
                  key={faq.id}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-[#B38B08]/40 bg-white shadow-sm"
                      : "border-black/[0.07] bg-white/70 hover:border-black/20"
                  }`}
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenId(isOpen ? null : faq.id)}
                      className="flex w-full items-center justify-between gap-4 p-4 text-left transition-colors sm:p-5"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-black transition-colors ${
                            isOpen
                              ? "bg-[#FACC15] text-[#111111]"
                              : "bg-black/[0.05] text-black/40"
                          }`}
                        >
                          {faq.number}
                        </span>
                        <span className="text-sm font-bold text-black sm:text-base">
                          {faq.question}
                        </span>
                      </div>

                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                          isOpen
                            ? "rotate-180 bg-[#FACC15] text-[#111111]"
                            : "bg-black/[0.05] text-black/50"
                        }`}
                      >
                        <ChevronDown size={16} />
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: animationDuration, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-black/[0.06] px-4 pb-5 pt-3.5 sm:px-5 sm:pb-6">
                          <p className="text-xs leading-relaxed text-black/65 sm:text-sm sm:leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}