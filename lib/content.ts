export const site = {
  name: "Crystal Kizor",
  title: "Crystal Kizor — Architecture, objects, and ideas",
  description:
    "Crystal Kizor is an architect, designer, and founder of Studio COKA. She builds climate-responsive spaces — and the education, products, and communities that make better living possible.",
  location: "Enugu, Nigeria",
};

export const images = {
  hero: "/brand/crystal-hero.jpg",
  office: "/brand/office.jpeg",
  white: "/brand/white.jpeg",
  outside: "/brand/outside.jpeg",
  editorial: "/brand/crystal-editorial.jpg",
  studio: "/brand/crystal-studio.jpg",
  desk: "/brand/crystal-desk.jpg",
  confident: "/brand/crystal-confident.jpg",
  podcast: "/brand/crystal-podcast.jpg",
  wordmark: "/brand/logo-wordmark.png",
  horizontal: "/brand/logo-horizontal.png",
  mark: "/brand/logo-mark-square.png",
  monogram: "/brand/logo-monogram.png",
  signature: "/brand/logo-signature.png",
  communityCourtyard: "/brand/community-courtyard.jpg",
  communityExterior: "/brand/community-exterior.jpg",
  communityHall: "/brand/community-hall.jpg",
  natureFront: "/brand/nature-home-front.jpg",
  natureLounge: "/brand/nature-home-lounge.jpg",
  natureShade: "/brand/nature-home-shade.jpg",
  nature2Garden: "/brand/nature-home-2-garden.jpg",
  nature2Dining: "/brand/nature-home-2-dining.jpg",
  nature2Bedroom: "/brand/nature-home-2-bedroom.jpg",
};

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#ecosystem", label: "Ecosystem" },
  { href: "#ideas", label: "Ideas" },
];

export const intents = [
  { value: "studio-coka", label: "Start a Studio COKA project" },
  { value: "speaking", label: "Invite Crystal to speak" },
  { value: "tea", label: "TEA / professional learning" },
  { value: "elevated", label: "ELEvated — furniture & products" },
  { value: "ako", label: "AKO Alliance partnership" },
  { value: "alive-and-free", label: "Alive and Free" },
  { value: "press", label: "Press, research, or writing" },
  { value: "other", label: "Something else" },
];

export const strip = [
  {
    src: images.communityExterior,
    alt: "Community centre exterior — Studio COKA",
  },
  {
    src: images.natureShade,
    alt: "Nature Home shaded court — Studio COKA",
  },
  {
    src: images.nature2Dining,
    alt: "Nature Home 2 dining room — Studio COKA",
  },
];

export const projects = [
  {
    id: "community",
    title: "Community Centre",
    meta: "Civic architecture",
    tag: "Studio COKA",
    image: images.communityCourtyard,
    extra: [images.communityExterior, images.communityHall],
    body: "A circular civic hall organised around shade, air, and gathering. Earth walls, a timber roof, and a tree at the centre — architecture that belongs to its climate and its people.",
  },
  {
    id: "nature-home",
    title: "Nature Home",
    meta: "Residential · Enugu",
    tag: "Completed",
    image: images.natureLounge,
    extra: [images.natureShade, images.natureFront],
    body: "A family house worked for daylight, shade, and outdoor living. Cantilevered eaves, a tree-lined court, and interiors kept calm so the climate does more of the work.",
  },
  {
    id: "nature-home-2",
    title: "Nature Home 2",
    meta: "Residential · Garden house",
    tag: "Studio COKA",
    image: images.nature2Garden,
    extra: [images.nature2Dining, images.nature2Bedroom],
    body: "A garden house in earth, timber, and glass. Rooms open onto planting and water. The building is designed to feel cool, grounded, and of its place.",
  },
];

export const ecosystem = {
  primary: {
    name: "Studio COKA",
    letters: "SC",
    kind: "Practice",
    image: images.nature2Dining,
    summary:
      "Architecture, interior design, and construction. A design-build studio focused on thoughtful, climate-responsive work in Nigeria and similar climates.",
    href: "https://studiocoka.com",
    hrefLabel: "studiocoka.com",
  },
  secondary: [
    {
      name: "The Effective Architect",
      letters: "TEA",
      kind: "Profession",
      summary:
        "An education and media platform helping architects and built-environment professionals learn, grow, and build better careers — methodology, not just inspiration.",
    },
    {
      name: "Speaking",
      letters: "CK",
      kind: "Voice",
      summary:
        "Talks and conversations on architecture, climate-responsive design, African cities, entrepreneurship, and the built environment. TEDx Port Harcourt, 2025.",
    },
  ],
  tertiary: [
    {
      name: "ELEvated",
      letters: "EL",
      kind: "Objects",
      summary:
        "Contemporary furniture and product design. Functional pieces rooted in African context, materials, and ideas.",
    },
    {
      name: "AKO Alliance",
      letters: "AKO",
      kind: "Access",
      summary:
        "Expanding access to education and creating opportunities for children and young people.",
    },
    {
      name: "Alive and Free",
      letters: "AF",
      kind: "Faith",
      summary:
        "A Christian youth movement helping young people walk in truth, healing, freedom, identity, purpose, and life in Christ.",
    },
  ],
};

export const paths = [
  {
    who: "I need a building or interior",
    next: "Studio COKA",
    href: "#enquire",
  },
  {
    who: "I design buildings",
    next: "The Effective Architect",
    href: "#ecosystem",
  },
  {
    who: "I want her on a stage",
    next: "Speaking enquiry",
    href: "#enquire",
  },
  {
    who: "I care about objects and furniture",
    next: "ELEvated",
    href: "#ecosystem",
  },
  {
    who: "I work in education or youth",
    next: "AKO Alliance",
    href: "#ecosystem",
  },
  {
    who: "I walk in faith with young people",
    next: "Alive and Free",
    href: "#ecosystem",
  },
  {
    who: "I write, research, or report",
    next: "Ideas & press",
    href: "#ideas",
  },
];

export const ideas = [
  {
    kicker: "Talk",
    title: "Indigenous modern architecture",
    note: "TEDx Port Harcourt, 2025 — design rooted in culture, climate, and the end-user.",
  },
  {
    kicker: "Practice",
    title: "Buildings that breathe before they consume",
    note: "Orientation, shade, daylight, and air as the first energy strategy — then solar, if the building still needs it.",
  },
  {
    kicker: "Cities",
    title: "African cities, on their own terms",
    note: "Writing and research on climate-responsive architecture, identity, and how we build in the heat.",
  },
];
