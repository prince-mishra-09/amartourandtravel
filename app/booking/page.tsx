import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CarFront, Phone } from "lucide-react";
import BookingEnquiry from "@/components/BookingEnquiry";
import ContactFooter from "@/components/ContactFooter";
import { BUSINESS_DETAILS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Book a Ride & Fare Enquiry | Amar Singh Tour & Travels Chitrakoot",
  description:
    "Enquire about Chitrakoot Dham Darshan, local taxi rides, outstation trips, and wedding vehicle hire. Direct discussion and transparent fare with Amar Singh Tour & Travels. Call 8960736006 / 7651804647.",
};

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-[#090909] text-white">
      {/* Top Header */}
      <header className="border-b border-white/10 bg-[#111111] px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-white/70 transition-colors hover:text-[#FACC15]"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FACC15] text-black">
              <CarFront size={18} />
            </span>
            <span className="text-sm font-black text-white">
              {BUSINESS_DETAILS.name}
            </span>
          </Link>

          <a
            href={BUSINESS_DETAILS.phones[0].tel}
            className="hidden items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-bold text-[#FACC15] sm:inline-flex"
          >
            <Phone size={13} />
            {BUSINESS_DETAILS.phones[0].display}
          </a>
        </div>
      </header>

      {/* Booking Form Component */}
      <BookingEnquiry />

      {/* Footer */}
      <ContactFooter />
    </main>
  );
}
