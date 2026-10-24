"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ShieldCheck,
  MapPin,
  Phone,
  Car,
  BadgeCheck,
  CheckCircle2,
  CalendarCheck,
  Wind,
} from "lucide-react";
import { BUSINESS_DETAILS } from "@/lib/business";

export default function TrustSection() {
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : 0.65;

  return (
    <section
      id="trust"
      className="relative scroll-mt-16 overflow-hidden bg-[#090909] py-14 text-white sm:py-20 lg:py-24"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-12 h-96 w-96 rounded-full bg-[#FACC15]/[0.05] blur-[120px]"
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
                VERIFIED CREDENTIALS · व्यावसायिक परिचय
              </span>
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              TRUST THROUGH
              <br />
              <span className="text-[#FACC15]">AUTHENTIC DETAILS.</span>
            </h2>
            <p className="mt-2 text-sm font-medium text-white/50 sm:text-base">
              स्पष्ट पहचान, वास्तविक संपर्क एवं चित्रकूट की स्थानीय सेवा
            </p>
          </div>

          <div className="max-w-md">
            <p className="text-sm leading-relaxed text-white/60 sm:text-base">
              We operate transparently. All contact numbers, service address,
              and fleet categories listed here are true to our business card.
              No fabricated claims, fake awards, or synthetic ratings.
            </p>
          </div>
        </motion.div>

        {/* 2-Column Trust Grid */}
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Official Business Identity Card */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration }}
            className="flex flex-col justify-between rounded-3xl border border-white/15 bg-[#141414] p-6 shadow-xl sm:p-8"
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <span className="text-[11px] font-bold tracking-[0.2em] text-[#FACC15]">
                    ॥ {BUSINESS_DETAILS.blessing} ॥
                  </span>
                  <h3 className="mt-1 text-2xl font-black text-white sm:text-3xl">
                    {BUSINESS_DETAILS.name}
                  </h3>
                  <p className="text-sm font-semibold text-white/70">
                    {BUSINESS_DETAILS.hindiName}
                  </p>
                </div>

                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FACC15] text-[#111111]">
                  <BadgeCheck size={26} strokeWidth={2.2} />
                </span>
              </div>

              {/* Information list */}
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3.5">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-[#FACC15]">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-white/80">Business Address</p>
                    <p className="mt-0.5 text-sm font-semibold text-white">
                      {BUSINESS_DETAILS.address}
                    </p>
                    <p className="text-xs text-white/50">
                      {BUSINESS_DETAILS.addressEnglish}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-[#FACC15]">
                    <Phone size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-white/80">Official Phone Numbers</p>
                    <div className="mt-1 flex flex-wrap gap-2.5">
                      <a
                        href={BUSINESS_DETAILS.phones[0].tel}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-bold text-[#FACC15] hover:bg-[#FACC15] hover:text-black"
                      >
                        <Phone size={12} />
                        {BUSINESS_DETAILS.phones[0].display}
                      </a>
                      <a
                        href={BUSINESS_DETAILS.phones[1].tel}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-bold text-[#FACC15] hover:bg-[#FACC15] hover:text-black"
                      >
                        <Phone size={12} />
                        {BUSINESS_DETAILS.phones[1].display}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-[#FACC15]">
                    <Car size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-white/80">Available Vehicles</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-white/70">
                      Maruti Ertiga, Mahindra Scorpio, Mahindra Xylo, Tavera, Mahindra Bolero, Tata Indigo, Maruti Swift.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-[#FACC15]">
                    <Wind size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-white/80">AC & Non-AC Policy</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-white/70">
                      Both AC and Non-AC vehicle hire options are available, subject to actual vehicle availability at the time of your travel dates.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-white/10 pt-4 text-xs text-white/50">
              Chitrakoot, Uttar Pradesh · Serving pilgrims and travelers across regional pilgrimage routes
            </div>
          </motion.div>

          {/* Operating Principles & Fare Transparency */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration }}
            className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#111111] p-6 sm:p-8"
          >
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-[10px] font-bold tracking-wider text-[#FACC15]">
                <ShieldCheck size={14} />
                HOW WE OPERATE
              </div>

              <h3 className="text-xl font-black tracking-tight text-white sm:text-2xl">
                Clear Policies. Zero Surprises.
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/60 sm:text-sm">
                We believe trust is built on straightforward commitments. Here is how we conduct every trip enquiry:
              </p>

              <div className="mt-5 space-y-3.5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#FACC15]" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Direct Fare Quote</h4>
                    <p className="text-xs text-white/55">
                      Fares are agreed upon upfront based on destination, route, and vehicle choice before any trip begins.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#FACC15]" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Tolls & Charges Clarity</h4>
                    <p className="text-xs text-white/55">
                      Whether tolls, state border permits, and parking are included or extra is clarified before booking confirmation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#FACC15]" />
                  <div>
                    <h4 className="text-xs font-bold text-white">No Automated Online Traps</h4>
                    <p className="text-xs text-white/55">
                      We do not require online credit card payments upfront. All details are confirmed directly with the operator.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#FACC15]" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Reliable Punctuality</h4>
                    <p className="text-xs text-white/55">
                      Confirmed vehicles arrive on schedule at Karwi station, hotels, or your pickup address.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Note on genuine reviews */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-xs text-white/60">
              <div className="flex items-center gap-2 font-bold text-white">
                <CalendarCheck size={14} className="text-[#FACC15]" />
                Customer Feedback Commitment
              </div>
              <p className="mt-1 text-[11px] leading-relaxed text-white/50">
                In adherence to our strict transparency code, we do not fabricate customer testimonials or stars. Genuine, verified customer reviews will be published as travelers share their feedback with us.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}