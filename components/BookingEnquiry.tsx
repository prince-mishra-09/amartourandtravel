"use client";

import { useState, useId } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Car,
  User,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { BUSINESS_DETAILS, VEHICLE_FLEET } from "@/lib/business";

interface BookingEnquiryProps {
  initialTripType?: string;
  initialVehicle?: string;
  initialDestination?: string;
}

export default function BookingEnquiry({
  initialTripType = "Chitrakoot Dham Darshan",
  initialVehicle = "",
  initialDestination = "",
}: BookingEnquiryProps) {
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : 0.6;

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [tripType, setTripType] = useState(initialTripType);
  const [vehicle, setVehicle] = useState(initialVehicle);
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState(initialDestination);
  const [travelDate, setTravelDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [acPreference, setAcPreference] = useState("AC Preferred");
  const [journeyType, setJourneyType] = useState("Round Trip / Full Day");
  const [passengers, setPassengers] = useState("1 - 4 Passengers");
  const [notes, setNotes] = useState("");

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [validationError, setValidationError] = useState("");

  const nameId = useId();
  const phoneId = useId();
  const tripTypeId = useId();
  const vehicleId = useId();
  const pickupId = useId();
  const destId = useId();
  const dateId = useId();
  const timeId = useId();
  const acId = useId();
  const journeyTypeId = useId();
  const passengersId = useId();
  const notesId = useId();

  const handleTripEnquiry = (channel: "whatsapp" | "call") => {
    // Basic validation
    if (!fullName.trim()) {
      setValidationError("Please enter your name.");
      return;
    }
    const cleanPhone = phone.replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      setValidationError("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!travelDate) {
      setValidationError("Please select your travel date.");
      return;
    }

    setValidationError("");
    setFormSubmitted(true);

    const messageText = `*New Travel Enquiry - Amar Singh Tour & Travels*
*Name:* ${fullName.trim()}
*Phone:* ${phone.trim()}
*Trip Category:* ${tripType}
*Preferred Vehicle:* ${vehicle || "Any suitable vehicle"}
*AC Preference:* ${acPreference}
*Journey Mode:* ${journeyType}
*Pickup Location:* ${pickup || "Chitrakoot (To be finalized)"}
*Destination:* ${destination || "Chitrakoot Sightseeing"}
*Travel Date:* ${travelDate}
*Pickup Time:* ${pickupTime || "To be discussed"}
*Passengers:* ${passengers}
${notes ? `*Additional Notes:* ${notes}` : ""}

Please share the applicable fare and vehicle availability.`;

    if (channel === "whatsapp") {
      const waNumber = BUSINESS_DETAILS.phones[0].number;
      const url = `https://wa.me/91${waNumber}?text=${encodeURIComponent(messageText)}`;
      window.open(url, "_blank");
    } else {
      window.location.href = BUSINESS_DETAILS.phones[0].tel;
    }
  };

  return (
    <section
      id="booking-enquiry"
      className="relative scroll-mt-16 overflow-hidden bg-[#0D0D0D] py-14 text-white sm:py-20 lg:py-24"
    >
      {/* Decorative Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-[#FACC15]/[0.08] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-[#FACC15]/[0.05] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
        >
          <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#FACC15]" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#FACC15] uppercase sm:text-xs">
              Direct Fare Quotation · सीधी बात
            </span>
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            ENQUIRE ABOUT
            <br />
            <span className="text-[#FACC15]">YOUR RIDE.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
            Share your travel requirements below to discuss the applicable fare.
            We confirm all bookings directly with full clarity on vehicles, routes,
            and timings.
          </p>
        </motion.div>

        {/* Form Container */}
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/15 bg-[#141414] p-5 shadow-2xl sm:p-8 lg:p-10">
          {formSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FACC15]/20 text-[#FACC15]">
                <CheckCircle2 size={36} />
              </div>

              <h3 className="text-2xl font-black text-white sm:text-3xl">
                Ready to Discuss Your Trip!
              </h3>
              <p className="mx-auto mt-3 max-w-md text-sm text-white/70">
                Thank you, <span className="font-bold text-[#FACC15]">{fullName}</span>.
                Your travel requirements are prepared. You can connect with Amar Singh
                Tour & Travels via WhatsApp or phone call right away.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => handleTripEnquiry("whatsapp")}
                  className="inline-flex items-center gap-2 rounded-full bg-[#FACC15] px-6 py-3.5 text-sm font-bold text-black transition-colors hover:bg-white"
                >
                  <MessageCircle size={18} />
                  Send via WhatsApp
                </button>

                <a
                  href={BUSINESS_DETAILS.phones[0].tel}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:border-[#FACC15] hover:text-[#FACC15]"
                >
                  <Phone size={18} />
                  Call 8960736006
                </a>

                <a
                  href={BUSINESS_DETAILS.phones[1].tel}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:border-[#FACC15] hover:text-[#FACC15]"
                >
                  <Phone size={18} />
                  Call 7651804647
                </a>
              </div>

              <button
                type="button"
                onClick={() => setFormSubmitted(false)}
                className="mt-6 text-xs text-white/40 underline underline-offset-4 hover:text-white"
              >
                Modify trip details
              </button>
            </motion.div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleTripEnquiry("whatsapp");
              }}
              className="space-y-6"
            >
              {validationError && (
                <div
                  role="alert"
                  className="flex items-center gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 text-xs text-red-200"
                >
                  <AlertCircle size={16} className="shrink-0 text-red-400" />
                  <span>{validationError}</span>
                </div>
              )}

              {/* Step 1: Customer Contact Info */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor={nameId}
                    className="mb-1.5 block text-xs font-bold text-white/80"
                  >
                    Your Full Name <span className="text-[#FACC15]">*</span>
                  </label>
                  <div className="relative">
                    <User
                      size={16}
                      className="pointer-events-none absolute left-3.5 top-3.5 text-white/40"
                    />
                    <input
                      id={nameId}
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full rounded-xl border border-white/15 bg-white/[0.05] py-2.5 pl-10 pr-3.5 text-sm text-white placeholder-white/35 transition-colors focus:border-[#FACC15] focus:outline-none focus:ring-1 focus:ring-[#FACC15]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor={phoneId}
                    className="mb-1.5 block text-xs font-bold text-white/80"
                  >
                    Mobile Phone Number <span className="text-[#FACC15]">*</span>
                  </label>
                  <div className="relative">
                    <Phone
                      size={16}
                      className="pointer-events-none absolute left-3.5 top-3.5 text-white/40"
                    />
                    <input
                      id={phoneId}
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 98XXXXXXXX"
                      className="w-full rounded-xl border border-white/15 bg-white/[0.05] py-2.5 pl-10 pr-3.5 text-sm text-white placeholder-white/35 transition-colors focus:border-[#FACC15] focus:outline-none focus:ring-1 focus:ring-[#FACC15]"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Trip Category & Vehicle */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor={tripTypeId}
                    className="mb-1.5 block text-xs font-bold text-white/80"
                  >
                    Trip Category <span className="text-[#FACC15]">*</span>
                  </label>
                  <select
                    id={tripTypeId}
                    value={tripType}
                    onChange={(e) => setTripType(e.target.value)}
                    className="w-full rounded-xl border border-white/15 bg-[#1C1C1C] px-3.5 py-2.5 text-sm text-white transition-colors focus:border-[#FACC15] focus:outline-none focus:ring-1 focus:ring-[#FACC15]"
                  >
                    <option value="Chitrakoot Dham Darshan">
                      Chitrakoot Dham Darshan (चित्रकूट दर्शन)
                    </option>
                    <option value="Local Rides & City Travel">
                      Local Travel & Station Transfers (लोकल यात्रा)
                    </option>
                    <option value="Outstation Journey">
                      Outstation Intercity Trip (बाहरी यात्रा)
                    </option>
                    <option value="Wedding & Auspicious Occasion">
                      Wedding / Marriage Ceremony (शादी-विवाह)
                    </option>
                    <option value="Birthday & Special Events">
                      Birthday & Special Event (मांगलिक कार्य)
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor={vehicleId}
                    className="mb-1.5 block text-xs font-bold text-white/80"
                  >
                    Preferred Vehicle (Optional)
                  </label>
                  <div className="relative">
                    <Car
                      size={16}
                      className="pointer-events-none absolute left-3.5 top-3.5 text-white/40"
                    />
                    <select
                      id={vehicleId}
                      value={vehicle}
                      onChange={(e) => setVehicle(e.target.value)}
                      className="w-full rounded-xl border border-white/15 bg-[#1C1C1C] py-2.5 pl-10 pr-3.5 text-sm text-white transition-colors focus:border-[#FACC15] focus:outline-none focus:ring-1 focus:ring-[#FACC15]"
                    >
                      <option value="">Any Suitable Vehicle (Based on Fare & Availability)</option>
                      {VEHICLE_FLEET.map((v) => (
                        <option key={v.id} value={v.name}>
                          {v.name} ({v.seats})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 3: Pickup & Destination */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor={pickupId}
                    className="mb-1.5 block text-xs font-bold text-white/80"
                  >
                    Pickup Location
                  </label>
                  <div className="relative">
                    <MapPin
                      size={16}
                      className="pointer-events-none absolute left-3.5 top-3.5 text-white/40"
                    />
                    <input
                      id={pickupId}
                      type="text"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      placeholder="e.g. Karwi Station, Hotel, Home"
                      className="w-full rounded-xl border border-white/15 bg-white/[0.05] py-2.5 pl-10 pr-3.5 text-sm text-white placeholder-white/35 transition-colors focus:border-[#FACC15] focus:outline-none focus:ring-1 focus:ring-[#FACC15]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor={destId}
                    className="mb-1.5 block text-xs font-bold text-white/80"
                  >
                    Destination / Route
                  </label>
                  <div className="relative">
                    <MapPin
                      size={16}
                      className="pointer-events-none absolute left-3.5 top-3.5 text-white/40"
                    />
                    <input
                      id={destId}
                      type="text"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      placeholder="e.g. Ram Ghat, Gupt Godavari, Prayagraj"
                      className="w-full rounded-xl border border-white/15 bg-white/[0.05] py-2.5 pl-10 pr-3.5 text-sm text-white placeholder-white/35 transition-colors focus:border-[#FACC15] focus:outline-none focus:ring-1 focus:ring-[#FACC15]"
                    />
                  </div>
                </div>
              </div>

              {/* Step 4: Date, Time & Preferences */}
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label
                    htmlFor={dateId}
                    className="mb-1.5 block text-xs font-bold text-white/80"
                  >
                    Travel Date <span className="text-[#FACC15]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id={dateId}
                      type="date"
                      required
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      className="w-full rounded-xl border border-white/15 bg-[#1C1C1C] px-3.5 py-2.5 text-sm text-white transition-colors focus:border-[#FACC15] focus:outline-none focus:ring-1 focus:ring-[#FACC15]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor={timeId}
                    className="mb-1.5 block text-xs font-bold text-white/80"
                  >
                    Pickup Time
                  </label>
                  <div className="relative">
                    <input
                      id={timeId}
                      type="time"
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                      className="w-full rounded-xl border border-white/15 bg-[#1C1C1C] px-3.5 py-2.5 text-sm text-white transition-colors focus:border-[#FACC15] focus:outline-none focus:ring-1 focus:ring-[#FACC15]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor={acId}
                    className="mb-1.5 block text-xs font-bold text-white/80"
                  >
                    AC Option
                  </label>
                  <select
                    id={acId}
                    value={acPreference}
                    onChange={(e) => setAcPreference(e.target.value)}
                    className="w-full rounded-xl border border-white/15 bg-[#1C1C1C] px-3.5 py-2.5 text-sm text-white transition-colors focus:border-[#FACC15] focus:outline-none focus:ring-1 focus:ring-[#FACC15]"
                  >
                    <option value="AC Preferred">AC Vehicle</option>
                    <option value="Non-AC Preferred">Non-AC Vehicle</option>
                    <option value="Either AC or Non-AC">Either (Subject to availability)</option>
                  </select>
                </div>
              </div>

              {/* Journey details: mode & passengers */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor={journeyTypeId}
                    className="mb-1.5 block text-xs font-bold text-white/80"
                  >
                    Journey Type
                  </label>
                  <select
                    id={journeyTypeId}
                    value={journeyType}
                    onChange={(e) => setJourneyType(e.target.value)}
                    className="w-full rounded-xl border border-white/15 bg-[#1C1C1C] px-3.5 py-2.5 text-sm text-white transition-colors focus:border-[#FACC15] focus:outline-none focus:ring-1 focus:ring-[#FACC15]"
                  >
                    <option value="Round Trip / Full Day">Round Trip / Full Day Darshan</option>
                    <option value="One Way Drop">One-Way Drop</option>
                    <option value="Multi-Day Tour">Multi-Day Journey</option>
                    <option value="Wedding Barat Fleet">Wedding / Barat Fleet Hire</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor={passengersId}
                    className="mb-1.5 block text-xs font-bold text-white/80"
                  >
                    Passenger Count
                  </label>
                  <select
                    id={passengersId}
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                    className="w-full rounded-xl border border-white/15 bg-[#1C1C1C] px-3.5 py-2.5 text-sm text-white transition-colors focus:border-[#FACC15] focus:outline-none focus:ring-1 focus:ring-[#FACC15]"
                  >
                    <option value="1 - 4 Passengers">1 - 4 Passengers (Swift / Indigo)</option>
                    <option value="5 - 7 Passengers">5 - 7 Passengers (Ertiga / Scorpio / Xylo)</option>
                    <option value="8 - 9+ Passengers">8 - 9+ Passengers (Bolero / Tavera / Multiple)</option>
                    <option value="Large Group / Barat">Large Group / Wedding Guests</option>
                  </select>
                </div>
              </div>

              {/* Step 5: Special requirements / Notes */}
              <div>
                <label
                  htmlFor={notesId}
                  className="mb-1.5 block text-xs font-bold text-white/80"
                >
                  Special Requirements or Questions (Optional)
                </label>
                <textarea
                  id={notesId}
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Visiting Gupt Godavari and Hanuman Dhara; need early morning pickup at Karwi station..."
                  className="w-full rounded-xl border border-white/15 bg-white/[0.05] p-3 text-sm text-white placeholder-white/35 transition-colors focus:border-[#FACC15] focus:outline-none focus:ring-1 focus:ring-[#FACC15]"
                />
              </div>

              {/* Transparency Notice */}
              <div className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] p-3.5 text-xs text-white/60">
                <ShieldCheck size={16} className="mt-0.5 shrink-0 text-[#FACC15]" />
                <p>
                  <strong className="text-white">Honest Pricing:</strong> We do not ask for
                  automated online payments. Your fare quote will be discussed directly based
                  on route, toll/parking terms, and dates before confirmation.
                </p>
              </div>

              {/* Form Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="text-xs text-white/45">
                  Call directly for urgent bookings:{" "}
                  <a
                    href={BUSINESS_DETAILS.phones[0].tel}
                    className="font-bold text-[#FACC15] hover:underline"
                  >
                    {BUSINESS_DETAILS.phones[0].display}
                  </a>{" "}
                  /{" "}
                  <a
                    href={BUSINESS_DETAILS.phones[1].tel}
                    className="font-bold text-[#FACC15] hover:underline"
                  >
                    {BUSINESS_DETAILS.phones[1].display}
                  </a>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  <button
                    type="button"
                    onClick={() => handleTripEnquiry("call")}
                    className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-xs font-bold text-white transition-colors hover:border-[#FACC15] hover:text-[#FACC15]"
                  >
                    <Phone size={15} />
                    Call For Quote
                  </button>

                  <button
                    type="submit"
                    className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#FACC15] px-6 py-3 text-xs font-bold text-black shadow-[0_0_20px_rgba(250,204,21,0.2)] transition-all hover:bg-white"
                  >
                    <MessageCircle size={16} />
                    Enquire on WhatsApp
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
