"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import VehicleShowcase from "@/components/VehicleShowcase";
import ChitrakootDarshan from "@/components/ChitrakootDarshan";
import JourneySection from "@/components/JourneySection";
import BookingProcess from "@/components/BookingProcess";
import WhyTravelWithUs from "@/components/WhyTravelWithUs";
import VehicleGallery from "@/components/VehicleGallery";
import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";
import BookingEnquiry from "@/components/BookingEnquiry";
import ContactFooter from "@/components/ContactFooter";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function HomePage() {
  const [selectedVehicle, setSelectedVehicle] = useState<string>("");
  const [selectedDestination, setSelectedDestination] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>("Chitrakoot Dham Darshan");

  return (
    <main className="overflow-hidden">
      {/* 1. Hero Introduction */}
      <Hero />

      {/* 2. Meet Your Ride / Vehicle Fleet */}
      <VehicleShowcase onSelectVehicle={setSelectedVehicle} />

      {/* 3. Chitrakoot Darshan Destination Experience */}
      <ChitrakootDarshan onSelectDestination={setSelectedDestination} />

      {/* 4. Choose Your Journey */}
      <JourneySection onSelectService={setSelectedService} />

      {/* 5. How Booking Works */}
      <BookingProcess />

      {/* 6. Why Choose Us */}
      <WhyTravelWithUs />

      {/* 7. Fleet & Sightseeing Gallery */}
      <VehicleGallery />

      {/* 8. Trust and Business Information */}
      <TrustSection />

      {/* 9. FAQs */}
      <FAQSection />

      {/* 10. Interactive Booking & Fare Enquiry */}
      <BookingEnquiry
        key={`${selectedVehicle}-${selectedDestination}-${selectedService}`}
        initialVehicle={selectedVehicle}
        initialDestination={selectedDestination}
        initialTripType={selectedService}
      />

      {/* 11. Contact CTA and Footer */}
      <ContactFooter />

      {/* 12. Floating Sticky Mobile CTA on scroll */}
      <StickyMobileCTA />
    </main>
  );
}