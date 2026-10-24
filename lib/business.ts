export interface Vehicle {
  id: string;
  name: string;
  hindiName: string;
  type: "MUV" | "SUV" | "Sedan" | "Hatchback";
  seats: string;
  acOption:  "AC & Non-AC Available";
  bestFor: string;
  image: string;
  alt: string;
  features: string[];
}

export interface Destination {
  id: string;
  name: string;
  hindiName: string;
  category: "core-dham" | "ashram-heritage" | "extended-excursion";
  categoryLabel: string;
  shortDesc: string;
  significance: string;
  image: string;
  verifiedStatus?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  hindiTitle: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
}

export const BUSINESS_DETAILS = {
  name: "Amar Singh Tour & Travels",
  hindiName: "अमर सिंह टूर एण्ड ट्रैवल्स",
  blessing: "जय श्री कामतानाथ",
  tagline: "Discover Chitrakoot. Travel With Comfort.",
  taglineHindi: "चित्रकूट धाम दर्शन एवं सुरक्षित यात्रा सेवा",
  address: "ग्राम चितरा गोकुलपुर, चित्रकूट (उ. प्र.)",
  addressEnglish: "Gram Chitra Gokulpur, Chitrakoot, Uttar Pradesh",
  phones: [
    {
      display: "8960736006",
      tel: "tel:+918960736006",
      number: "8960736006",
      primary: true,
    },
    {
      display: "7651804647",
      tel: "tel:+917651804647",
      number: "7651804647",
      primary: false,
    },
  ],
  serviceRegion: "Chitrakoot, Uttar Pradesh & Outstation Routes",
  pricingNotice:
    "Fares are customized based on route, vehicle selection, and travel date. Please enquire directly for an accurate fare quote.",
  developerCredit: {
    text: "Designed & Developed by Prince Mishra · XWAKED",
    name: "Prince Mishra · XWAKED",
    url: "https://xwaked.com",
  },
};

export const VEHICLE_FLEET: Vehicle[] = [
  {
    id: "ertiga",
    name: "Maruti Suzuki Ertiga",
    hindiName: "मारुति सुजुकी अर्टिगा",
    type: "MUV",
    seats: "6 - 7 Seater",
    acOption: "AC & Non-AC Available",
    bestFor: "Family Chitrakoot Darshan & Outstation Journeys",
    image: "/fleet/ertiga.jpg",
    alt: "Maruti Suzuki Ertiga multi-utility passenger vehicle",
    features: [
      "Ample legroom for family comfort",
      "Flexible luggage area",
      "Smooth highway ride",
      "AC / Non-AC as per booking",
    ],
  },
  {
    id: "scorpio",
    name: "Mahindra Scorpio",
    hindiName: "महिंद्रा स्कॉर्पियो",
    type: "SUV",
    seats: "7 Seater",
    acOption: "AC & Non-AC Available",
    bestFor: "Rugged Excursions, Kalinjar, & Outstation Travel",
    image: "/fleet/scorpio.jpg",
    alt: "Mahindra Scorpio powerful SUV for road trips",
    features: [
      "High ground clearance for hills & rough roads",
      "Commanding road presence",
      "Spacious 7-seater cabin",
      "Ideal for pilgrimage & outstation groups",
    ],
  },
  {
    id: "xylo",
    name: "Mahindra Xylo",
    hindiName: "महिंद्रा ज़ाइलो",
    type: "MUV",
    seats: "7 - 8 Seater",
    acOption: "AC & Non-AC Available",
    bestFor: "Group Pilgrimage & Wedding Travel",
    image: "/fleet/xylo.jpg",
    alt: "Mahindra Xylo spacious travel vehicle",
    features: [
      "Expansive cabin & high headroom",
      "Ideal for elder pilgrims and long stays",
      "Generous seating layout",
      "Comfortable long-haul suspension",
    ],
  },
  {
    id: "tavera",
    name: "Tavera (Chevrolet / Tata)",
    hindiName: "टवेरा",
    type: "MUV",
    seats: "7 - 9 Seater",
    acOption: "AC & Non-AC Available",
    bestFor: "Group Sightseeing & Auspicious Occasions",
    image: "/fleet/tavera.jpg",
    alt: "Tavera tour vehicle for group journeys",
    features: [
      "Large seating capacity for parikrama groups",
      "Dependable for all Chitrakoot ghats",
      "Economical group travel choice",
      "AC & Non-AC variants",
    ],
  },
  {
    id: "bolero",
    name: "Mahindra Bolero",
    hindiName: "महिंद्रा बोलेरो",
    type: "SUV",
    seats: "7 - 9 Seater",
    acOption: "AC & Non-AC Available",
    bestFor: "Local Sightseeing & Rural Pilgrim Routes",
    image: "/fleet/bolero.jpg",
    alt: "Mahindra Bolero rugged pilgrimage travel vehicle",
    features: [
      "Unmatched durability on village roads",
      "Spacious group seating",
      "Reliable performance in all terrains",
      "Preferred choice for rural ashram visits",
    ],
  },
  {
    id: "indigo",
    name: "Tata Indigo",
    hindiName: "टाटा इंडिगो",
    type: "Sedan",
    seats: "4 Seater",
    acOption: "AC & Non-AC Available",
    bestFor: "Railway Station Pickups & Small Family Rides",
    image: "/fleet/indigo.jpg",
    alt: "Tata Indigo sedan for comfortable passenger travel",
    features: [
      "Sedan boot for family luggage",
      "Comfortable rear seat ride",
      "Budget-friendly sedan hire",
      "AC / Non-AC selection",
    ],
  },
  {
    id: "swift",
    name: "Maruti Suzuki Swift",
    hindiName: "मारुति सुजुकी स्विफ्ट",
    type: "Hatchback",
    seats: "4 Seater",
    acOption: "AC & Non-AC Available",
    bestFor: "Quick City Rides & Local Station Transfers",
    image: "/fleet/swift.jpg",
    alt: "Maruti Suzuki Swift compact car for prompt local rides",
    features: [
      "Nimble travel through town lanes",
      "Ideal for 1-4 passengers",
      "Clean, prompt, and convenient",
      "Enquire for local daily quotes",
    ],
  },
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "darshan",
    number: "01",
    title: "Chitrakoot Dham Darshan",
    hindiTitle: "चित्रकूट धाम दर्शन",
    tagline: "SACRED PILGRIMAGE",
    description:
      "Comprehensive, peaceful darshan of sacred Chitrakoot Dham including Ram Ghat, Kamadgiri Parikrama, Gupt Godavari, Hanuman Dhara, Sphatik Shila, Sati Anusuya, and historic ashrams.",
    features: [
      "Covers all holy temples & mandakini ghats",
      "Comfortable halts for elderly pilgrims & parikrama",
      "Flexible full-day or half-day itineraries",
      "Enquire for customized temple route fares",
    ],
    image:
      "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=85&w=1200",
    imageAlt: "Peaceful sacred waters and ghats representing Chitrakoot Darshan",
  },
  {
    id: "local",
    number: "02",
    title: "Local Travel & Sightseeing",
    hindiTitle: "लोकल यात्रा व दर्शनीय स्थल",
    tagline: "TOWN & STATION RIDES",
    description:
      "Prompt and courteous local vehicle bookings for Chitrakoot Dham Karwi railway station pickups, Manikpur junction transfers, city shopping, and local sightseeing.",
    features: [
      "Karwi & Manikpur railway station transfers",
      "Town market, guest house & hotel pickups",
      "Hourly or point-to-point local journeys",
      "AC & Non-AC vehicle choices",
    ],
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=85&w=1200",
    imageAlt: "City road and travel scenery representing local rides",
  },
  {
    id: "outstation",
    number: "03",
    title: "Outstation & Intercity Trips",
    hindiTitle: "बाहरी यात्रा (आउटस्टेशन)",
    tagline: "INTERCITY JOURNEYS",
    description:
      "Reliable one-way and round-trip vehicle hires from Chitrakoot to Prayagraj (Sangam), Ayodhya, Varanasi, Satna, Rewa, Banda, Panna, Khajuraho, and Lucknow.",
    features: [
      "One-way drops & return round trips",
      "Experienced drivers familiar with national highways",
      "Timely departures for flights and trains",
      "Transparent fare discussions before departure",
    ],
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=85&w=1200",
    imageAlt: "Scenic highway and landscape representing outstation journeys",
  },
  {
    id: "occasions",
    number: "04",
    title: "Weddings & Special Occasions",
    hindiTitle: "शादी-विवाह एवं मांगलिक कार्य",
    tagline: "CELEBRATIONS & EVENTS",
    description:
      "Dedicated fleet arrangements for wedding barat processions, family gatherings, birthday celebrations, auspicious ceremonies, and multi-vehicle group transit.",
    features: [
      "Multi-vehicle bookings for baraat & wedding guests",
      "Decorated vehicle options upon special request",
      "Prompt scheduled arrival for ceremony times",
      "Custom package discussions for event durations",
    ],
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=85&w=1200",
    imageAlt: "Festive celebration and travel for weddings and occasions",
  },
];

export const CHITRAKOOT_DESTINATIONS: Destination[] = [
  // Core Chitrakoot Dham Pilgrimage
  {
    id: "ram-ghat",
    name: "Ram Ghat",
    hindiName: "रामघाट",
    category: "core-dham",
    categoryLabel: "Core Dham Darshan",
    shortDesc: "Vibrant Mandakini riverfront & evening Maha Aarti",
    significance:
      "The sacred steps along the Mandakini river where Goswami Tulsidas had the divine vision of Lord Rama and Lakshmana. Famous for peaceful boat rides and spiritual aarti.",
    image:
      "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=85&w=1000",
  },
  {
    id: "kamadgiri",
    name: "Kamadgiri",
    hindiName: "कामदगिरि",
    category: "core-dham",
    categoryLabel: "Core Dham Darshan",
    shortDesc: "The prime sacred hill with 5 km holy Parikrama",
    significance:
      "Considered the original embodiment of Lord Kamadnath who fulfills righteous wishes. Thousands of pilgrims perform the sacred 5 km barefoot circumambulation here.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=85&w=1000",
  },
  {
    id: "hanuman-dhara",
    name: "Hanuman Dhara",
    hindiName: "हनुमानधारा",
    category: "core-dham",
    categoryLabel: "Core Dham Darshan",
    shortDesc: "Cascading cliff spring dedicated to Lord Hanuman",
    significance:
      "Perched on a steep hillside where a perennial natural cool spring gently cascades over the idol of Lord Hanuman, relieving his heat after the Lanka combustion.",
    image:
      "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&q=85&w=1000",
  },
  {
    id: "gupt-godavari",
    name: "Gupt Godavari",
    hindiName: "गुप्त गोदावरी",
    category: "core-dham",
    categoryLabel: "Core Dham Darshan",
    shortDesc: "Sacred twin limestone caves with flowing stream",
    significance:
      "Two ancient natural caves where holy spring water flows continuously through knees-deep passages. Believed to have hosted Lord Rama and Lakshmana during exile.",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=85&w=1000",
  },
  {
    id: "sphatik-shila",
    name: "Sphatik Shila",
    hindiName: "स्फटिक शिला",
    category: "core-dham",
    categoryLabel: "Core Dham Darshan",
    shortDesc: "Holy boulder preserving footprints of Lord Rama & Sita",
    significance:
      "A large quartz rock on the Mandakini riverbank where Lord Rama and Mother Sita rested and observed nature. Footprint impressions are venerated here.",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=85&w=1000",
  },
  {
    id: "janki-kund",
    name: "Janki Kund",
    hindiName: "जानकीकुण्ड",
    category: "core-dham",
    categoryLabel: "Core Dham Darshan",
    shortDesc: "Quiet sacred bathing pool of Mata Sita",
    significance:
      "A peaceful stretch of the Mandakini river situated upstream of Ram Ghat where Mata Janki (Sita) is revered to have taken her holy bath during exile.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=85&w=1000",
  },
  {
    id: "sati-anusuya",
    name: "Sati Anusuya",
    hindiName: "सती अनुसूया",
    category: "core-dham",
    categoryLabel: "Core Dham Darshan",
    shortDesc: "Forest hermitage at the origin of Mandakini river",
    significance:
      "Surrounded by lush forest and cascading streams, this revered ashram marks the penance of Sati Anusuya and Maharishi Atri where Brahma, Vishnu, and Shiva incarnated as Dattatreya.",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=85&w=1000",
  },
  {
    id: "bharat-koop",
    name: "Bharat Koop",
    hindiName: "भरतकूप",
    category: "core-dham",
    categoryLabel: "Core Dham Darshan",
    shortDesc: "Holy well filled with consecrated river waters",
    significance:
      "A sacred well where Bharat Ji stored the consecrated waters collected from all holy rivers across India for Lord Rama's royal coronation.",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=85&w=1000",
  },
  {
    id: "ram-shaiya",
    name: "Ram Shaiya",
    hindiName: "रामशैया",
    category: "core-dham",
    categoryLabel: "Core Dham Darshan",
    shortDesc: "Sacred resting stone of Lord Rama, Lakshmana, and Sita",
    significance:
      "A secluded holy site situated on the way between Chitrakoot and Bharat Koop featuring a sacred stone bed marking the resting place of the divine exile trio.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=85&w=1000",
  },
  {
    id: "manas-darshan",
    name: "Manas Darshan",
    hindiName: "मानस दर्शन",
    category: "core-dham",
    categoryLabel: "Core Dham Darshan",
    shortDesc: "Spiritual exhibition of Shri Ramcharitmanas",
    significance:
      "An insightful cultural and devotional complex illustrating pivotal life teachings, chhand, and events of Goswami Tulsidas's epic Shri Ramcharitmanas.",
    image:
      "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&q=85&w=1000",
  },
  {
    id: "ram-darshan",
    name: "Ram Darshan",
    hindiName: "रामदर्शन",
    category: "core-dham",
    categoryLabel: "Core Dham Darshan",
    shortDesc: "Cultural heritage museum dedicated to Lord Rama",
    significance:
      "A unique socio-cultural museum that depicts Lord Rama's human virtues, societal harmony, and ethical guidance without collecting traditional monetary offerings.",
    image:
      "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&q=85&w=1000",
  },

  // Historic Ashrams & Spiritual Centers
  {
    id: "valmiki-ashram",
    name: "Valmiki Ashram",
    hindiName: "वाल्मीकि आश्रम",
    category: "ashram-heritage",
    categoryLabel: "Ashrams & Heritage",
    shortDesc: "Hilltop hermitage of Adikavi Maharishi Valmiki",
    significance:
      "The ancient mountain hermitage where Sage Valmiki greeted Lord Rama during exile and where Mata Sita found sanctuary, giving birth to Luv and Kush.",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=85&w=1000",
  },
  {
    id: "sarbhanga-ashram",
    name: "Sarbhanga Ashram",
    hindiName: "सरभंगा आश्रम",
    category: "ashram-heritage",
    categoryLabel: "Ashrams & Heritage",
    shortDesc: "Sacred penance hermitage visited by Lord Rama",
    significance:
      "A deeply venerated forest tapovan where Sage Sarbhanga gave up his mortal body in yogic fire after receiving divine darshan of Shri Rama.",
    image:
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=85&w=1000",
  },
  {
    id: "sutikshna-ashram",
    name: "Sutīkṣṇa Ashram",
    hindiName: "सुतीक्षण आश्रम",
    category: "ashram-heritage",
    categoryLabel: "Ashrams & Heritage",
    shortDesc: "Forest hermitage of devoted disciple Sage Sutikshna",
    significance:
      "The tranquil ashram of Sage Sutikshna, beloved disciple of Maharishi Agastya, who engaged in rigorous tapasya awaiting the arrival of Lord Rama.",
    image:
      "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&q=85&w=1000",
  },
  {
    id: "dharkundi-ashram",
    name: "Dharkundi Ashram",
    hindiName: "धारकुंडी आश्रम",
    category: "ashram-heritage",
    categoryLabel: "Ashrams & Heritage",
    shortDesc: "Serene spiritual retreat of Sachchidanand Ji Paramhans",
    significance:
      "Nestled amidst dense Vindhya forests and natural waterfalls, this ashram is famous for spiritual silence, medicinal gardens, and ancient yogic energy.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=85&w=1000",
  },
  {
    id: "ganesh-bagh",
    name: "Ganesh Bagh",
    hindiName: "गणेशबाग",
    category: "ashram-heritage",
    categoryLabel: "Ashrams & Heritage",
    shortDesc: "19th-century Peshwa palace & carved stone temple complex",
    significance:
      "Often termed 'Mini Khajuraho', this architectural marvel was constructed by Vinayak Rao Peshwa featuring a Shiva temple with intricate erotic carvings and a massive seven-tier stepwell.",
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=85&w=1000",
  },

  // Extended Regional Excursions
  {
    id: "rajapur",
    name: "Rajapur",
    hindiName: "राजापुर",
    category: "extended-excursion",
    categoryLabel: "Regional Excursion",
    shortDesc: "Birthplace of Goswami Tulsidas on River Yamuna",
    significance:
      "The hallowed birthplace of Mahakavi Tulsidas located on the tranquil banks of the Yamuna. The local temple preserves a rare original handwritten manuscript of Ayodhya Kand.",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=85&w=1000",
  },
  {
    id: "kalinjar",
    name: "Kalinjar Fort",
    hindiName: "कालिंजर दुर्ग",
    category: "extended-excursion",
    categoryLabel: "Regional Excursion",
    shortDesc: "Historic impregnable fortress & ancient Neelkanth temple",
    significance:
      "One of India's most formidable historical hill forts, praised in ancient Puranas for the subterranean Neelkanth Mahadev temple and colossal rock-cut sculptures.",
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=85&w=1000",
  },
  {
    id: "maihar",
    name: "Maihar",
    hindiName: "मैहर (माँ शारदा)",
    category: "extended-excursion",
    categoryLabel: "Regional Excursion",
    shortDesc: "Celebrated Maa Sharda Devi Shaktipeeth temple atop hill",
    significance:
      "A world-renowned pilgrimage atop Trikuta hill reached by 1,063 stone steps or ropeway, revered for deep musical tradition and warrior Alha's eternal devotion.",
    image:
      "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&q=85&w=1000",
  },
  {
    id: "nandi-hanuman",
    name: "Nandi Hanuman",
    hindiName: "नंदी हनुमान",
    category: "extended-excursion",
    categoryLabel: "Regional Excursion",
    shortDesc: "Sacred temple shrine (As printed on card)",
    significance:
      "Revered local shrine listed on the official travel card. Please confirm specific pilgrimage route and timings when booking.",
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=85&w=1000",
    verifiedStatus: "Preserved from business card — confirm itinerary details",
  },
  {
    id: "gopinath",
    name: "Gopinath",
    hindiName: "गोपीनाथ",
    category: "extended-excursion",
    categoryLabel: "Regional Excursion",
    shortDesc: "Historic heritage temple shrine (As printed on card)",
    significance:
      "A devotional site transcribed from the official travel card. Customers can request customized trip inclusions upon enquiry.",
    image:
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&q=85&w=1000",
    verifiedStatus: "Preserved from business card — confirm itinerary details",
  },
];

export const FAQS = [
  {
    id: "fare-quote",
    number: "01",
    question: "How do I request a fare quote for my journey?",
    answer:
      "You can submit an enquiry via our website form, or call us directly at 8960736006 or 7651804647. Share your pickup location, destination, travel date, and preferred vehicle. We discuss and agree upon the fare transparently before any booking is confirmed.",
  },
  {
    id: "vehicles-available",
    number: "02",
    question: "Which vehicles can I enquire about?",
    answer:
      "You can enquire about our Maruti Suzuki Ertiga, Mahindra Scorpio, Mahindra Xylo, Tavera, Mahindra Bolero, Tata Indigo, and Maruti Suzuki Swift. Both AC and non-AC options are available depending on your preference and actual vehicle availability.",
  },
  {
    id: "darshan-tours",
    number: "03",
    question: "Can I book a vehicle for Chitrakoot Dham Darshan?",
    answer:
      "Yes, Chitrakoot Dham sightseeing is our core specialty. We cater to full-day or multi-day temple visits including Ram Ghat, Kamadgiri Parikrama, Gupt Godavari, Hanuman Dhara, Sphatik Shila, Sati Anusuya, and surrounding ashrams. Custom itineraries can be planned based on your convenience.",
  },
  {
    id: "local-outstation",
    number: "04",
    question: "Are both local and outstation journeys available?",
    answer:
      "Yes, we provide vehicles for local travel (Karwi/Manikpur railway station pickups, town sightseeing) as well as outstation trips to Prayagraj, Ayodhya, Varanasi, Satna, Rewa, Banda, Panna, Khajuraho, Lucknow, and other destinations upon confirmation.",
  },
  {
    id: "wedding-bookings",
    number: "05",
    question: "Can I enquire about a wedding or special occasion booking?",
    answer:
      "Yes. We cater to marriage ceremonies, barat processions, birthdays, and family events. We can arrange multiple vehicles for guest travel. Please enquire well in advance to discuss dates and vehicle availability.",
  },
  {
    id: "booking-details",
    number: "06",
    question: "What details are required to book a vehicle?",
    answer:
      "Please provide your name, contact phone number, trip category (Chitrakoot Darshan, Local, Outstation, or Wedding), travel date, pickup time, pickup address, destination, passenger count, and AC or non-AC preference.",
  },
  {
    id: "tolls-parking",
    number: "07",
    question: "Are tolls, parking, and driver allowances included?",
    answer:
      "Inclusion of toll taxes, state border permits, parking fees, and driver night allowances depends on the agreed trip quotation. We discuss all applicable charges clearly with you before finalizing your trip so there are no surprises.",
  },
  {
    id: "cancellation",
    number: "08",
    question: "What is the cancellation and rescheduling policy?",
    answer:
      "Please confirm specific cancellation and rescheduling terms directly with us when finalizing your booking. We understand travel plans may change and strive to accommodate adjustments whenever informed in advance.",
  },
  {
    id: "advance-confirm",
    number: "09",
    question: "How far in advance should I confirm my ride?",
    answer:
      "We recommend enquiring at least 2 to 7 days ahead for outstation trips, festival periods (Amavasya, Ram Navami, Deepawali), or wedding bookings. For urgent local pickups, call us directly on 8960736006 or 7651804647 to check immediate availability.",
  },
];
