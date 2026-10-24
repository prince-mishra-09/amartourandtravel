import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BUSINESS_DETAILS } from "@/lib/business";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#090909",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Amar Singh Tour & Travels | Chitrakoot Dham Darshan & Taxi Service",
  description:
    "Official website of Amar Singh Tour & Travels (अमर सिंह टूर एण्ड ट्रैवल्स). Chitrakoot Dham sightseeing, Ram Ghat, Kamadgiri, local taxi bookings, outstation journeys, and wedding vehicle hire. Call 8960736006 / 7651804647.",
  keywords: [
    "Amar Singh Tour & Travels",
    "अमर सिंह टूर एण्ड ट्रैवल्स",
    "Chitrakoot taxi service",
    "Chitrakoot Dham Darshan taxi",
    "Chitrakoot car rental",
    "Ram Ghat taxi Chitrakoot",
    "Kamadgiri Parikrama vehicle",
    "Gupt Godavari cab",
    "Chitrakoot to Prayagraj taxi",
    "Chitrakoot outstation cab",
    "wedding car rental Chitrakoot",
    "Karwi station taxi pickup",
  ],
  authors: [{ name: "Amar Singh Tour & Travels" }],
  creator: "Prince Mishra · XWAKED",
  publisher: "Amar Singh Tour & Travels",
  metadataBase: new URL("https://amarsinghtourandtravels.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Amar Singh Tour & Travels | Chitrakoot Dham Darshan & Taxi",
    description:
      "Chitrakoot Dham Darshan, local rides, outstation trips, and wedding vehicle hire. Ertiga, Scorpio, Xylo, Tavera, Bolero, Indigo, Swift. Call 8960736006 / 7651804647.",
    url: "/",
    siteName: "Amar Singh Tour & Travels",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: BUSINESS_DETAILS.name,
    alternateName: BUSINESS_DETAILS.hindiName,
    description:
      "Chitrakoot Dham Darshan, local rides, outstation journeys, and special occasion vehicle bookings in Chitrakoot, Uttar Pradesh.",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_DETAILS.address,
      addressLocality: "Chitrakoot",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    telephone: [
      `+91${BUSINESS_DETAILS.phones[0].number}`,
      `+91${BUSINESS_DETAILS.phones[1].number}`,
    ],
    areaServed: [
      "Chitrakoot",
      "Karwi",
      "Prayagraj",
      "Ayodhya",
      "Varanasi",
      "Satna",
      "Rewa",
      "Banda",
      "Panna",
      "Khajuraho",
      "Lucknow",
    ],
    priceRange: "Enquire for Fare",
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#090909] text-white selection:bg-[#FACC15] selection:text-black">
        {children}
      </body>
    </html>
  );
}
