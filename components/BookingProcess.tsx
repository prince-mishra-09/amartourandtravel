"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ClipboardList,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { BUSINESS_DETAILS } from "@/lib/business";

const steps = [
  {
    number: "01",
    label: "STEP 1 · पहला चरण",
    title: "Share Trip Requirements",
    hindiTitle: "यात्रा का विवरण साझा करें",
    description:
      "Tell us your travel date, pickup location, destination (e.g. Chitrakoot Darshan, Prayagraj, etc.), preferred vehicle, and whether you require AC or Non-AC.",
    icon: ClipboardList,
    detail: "Pickup, destination & dates",
  },
  {
    number: "02",
    label: "STEP 2 · दूसरा चरण",
    title: "Discuss Fare & Route",
    hindiTitle: "किराया व वाहन तय करें",
    description:
      "We review your route and discuss the customized fare transparently. We clarify inclusion of tolls, parking, and driver allowances with zero hidden charges.",
    icon: MessageCircle,
    detail: "Transparent fare quotation",
  },
  {
    number: "03",
    label: "STEP 3 · तीसरा चरण",
    title: "Confirm Your Ride",
    hindiTitle: "यात्रा सुनिश्चित करें",
    description:
      "Once you are satisfied with the agreed fare and vehicle details, your booking is confirmed. Your vehicle arrives promptly at the scheduled time.",
    icon: CheckCircle2,
    detail: "Direct driver & ride confirmation",
  },
];

export default function BookingProcess() {
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : 0.65;

  return (
    <section
      id="booking-process"
      className="relative scroll-mt-16 overflow-hidden bg-[#F7F5EF] py-14 text-[#151515] sm:py-20 lg:py-24"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
        >
          <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#B38B08]" />
            <span className="text-[11px] font-bold tracking-[0.22em] text-[#80630A] uppercase sm:text-xs">
              HOW IT WORKS · बुकिंग प्रक्रिया
            </span>
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            SIMPLE, HONEST
            <br />
            <span className="text-[#A47C00]">BOOKING PROCESS.</span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-black/60 sm:text-base">
            No automated guesswork or confusing portals. Direct discussion on fare,
            vehicle choice, and travel schedule before finalizing your ride.
          </p>
        </motion.div>

        {/* Mobile Swipe Hint */}
        <div className="mb-3 flex items-center justify-between text-xs text-black/55 sm:hidden">
          <span className="font-semibold text-[#80630A]">← Swipe horizontally for all 3 steps →</span>
          <span>Step 1 to 3</span>
        </div>

        {/* 3 Steps: Horizontal on mobile, Grid on tablet/desktop */}
        <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-4 no-scrollbar snap-x snap-mandatory sm:mx-0 sm:grid sm:overflow-visible sm:px-0 sm:pb-0 md:grid-cols-3 md:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.number}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration,
                  delay: reduceMotion ? 0 : index * 0.12,
                }}
                className="group relative flex min-w-[270px] w-[78vw] max-w-[320px] shrink-0 snap-center flex-col justify-between rounded-2xl border border-black/[0.08] bg-white p-6 shadow-[0_6px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B38B08]/40 hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] sm:min-w-0 sm:w-auto sm:shrink sm:p-7"
              >
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FACC15] text-[#151515] shadow-[0_0_15px_rgba(250,204,21,0.3)]">
                      <Icon size={22} strokeWidth={2} />
                    </span>

                    <span className="text-2xl font-black text-black/15">
                      {step.number}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold tracking-wider text-[#80630A]">
                    {step.label}
                  </span>

                  <h3 className="mt-1 text-xl font-black tracking-tight text-black sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#80630A]">
                    {step.hindiTitle}
                  </p>

                  <p className="mt-3.5 text-xs leading-relaxed text-black/60 sm:text-sm">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-black/[0.06] pt-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-black/50">
                    <ShieldCheck size={14} className="text-[#80630A]" />
                    <span>{step.detail}</span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Booking Action Strip */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration }}
          className="mt-10 flex flex-col gap-4 rounded-2xl bg-[#141414] p-5 text-white sm:flex-row sm:items-center sm:justify-between sm:p-7"
        >
          <div>
            <p className="text-xs font-bold text-[#FACC15]">
              ॥ {BUSINESS_DETAILS.blessing} ॥
            </p>
            <h4 className="mt-1 text-lg font-black tracking-tight text-white sm:text-xl">
              Ready to plan your Chitrakoot trip?
            </h4>
            <p className="mt-1 text-xs text-white/50">
              Submit an online enquiry or call us directly at {BUSINESS_DETAILS.phones[0].display} / {BUSINESS_DETAILS.phones[1].display}.
            </p>
          </div>

          <a
            href="#booking-enquiry"
            className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-[#FACC15] px-6 py-3.5 text-xs font-bold text-black transition-colors hover:bg-white sm:self-center"
          >
            Start Your Enquiry
            <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}