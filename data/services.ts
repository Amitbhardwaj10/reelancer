export interface ServiceItem {
  id: string;
  number: string;
  category: string;
  title: string;
  outcome: string;
  deliverables: [string, string, string];
  fromPrice: string;
  priceNote: string;
  initialLikes: number;
  initialSaves: number;
  previewNote: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "service-01",
    number: "01",
    category: "CREATIVE LAB",
    title: "Direct-Response Reels & TikToks",
    outcome: "First-3-second retention >64% through psychological hook matrices and kinetic pacing.",
    deliverables: [
      "12 custom 9:16 scripts with 3 hook variations each",
      "Dynamic b-roll direction, sound design, & split-second cuts",
      "High-converting caption typography tuned for silent feed autoplay",
    ],
    fromPrice: "$3,200",
    priceNote: "/ monthly sprint",
    initialLikes: 184,
    initialSaves: 92,
    previewNote: "Avg. 3.4x watch-time lift vs static image ads",
  },
  {
    id: "service-02",
    number: "02",
    category: "PAID MEDIA",
    title: "Performance Social Media Buying",
    outcome: "Profitable scale on Meta & TikTok with rapid algorithmic budget allocation.",
    deliverables: [
      "Full pixel CAPI setup & custom conversion tracking",
      "Bi-weekly creative iteration testing matrices",
      "Retargeting funnel & lookalike scaling systems",
    ],
    fromPrice: "$3,800",
    priceNote: "/ month + % ad spend",
    initialLikes: 247,
    initialSaves: 114,
    previewNote: "Consistent 3.8x+ ROAS across DTC accounts",
  },
  {
    id: "service-03",
    number: "03",
    category: "ATTRIBUTION",
    title: "CAPI & Server-Side Event Tracking",
    outcome: "Eliminating ad account data leakage and reconciling blended CAC in raw BigQuery.",
    deliverables: [
      "Server-side Google Tag Manager (sGTM) on AWS or Cloudflare",
      "Meta Conversions API & TikTok Events API hardening",
      "Looker Studio real-time margin and net cash console",
    ],
    fromPrice: "$1,800",
    priceNote: "one-time setup",
    initialLikes: 129,
    initialSaves: 78,
    previewNote: "Recovers up to 28% of dropped iOS attribution",
  },
  {
    id: "service-04",
    number: "04",
    category: "CRO / FUNNELS",
    title: "Mobile Quiz & Landing Funnels",
    outcome: "Directing high-intent vertical video traffic into 4%+ mobile checkout conversion.",
    deliverables: [
      "Frictionless mobile-first PDP or interactive quiz architecture",
      "Conversion copywriting dismantling customer objections",
      "A/B split testing of pricing anchors & bundle offers",
    ],
    fromPrice: "$2,400",
    priceNote: "/ funnel build",
    initialLikes: 165,
    initialSaves: 88,
    previewNote: "Tested across $2.4M in DTC checkouts",
  },
  {
    id: "service-05",
    number: "05",
    category: "AUTOMATION",
    title: "Comment-to-DM Growth Funnels",
    outcome: "Turning reel comments into qualified buyers and booked calls within 90 seconds.",
    deliverables: [
      "ManyChat trigger workflows on specific reel keywords",
      "Instant lead magnet & discount code delivery in DMs",
      "Automated qualification questionnaire prior to booking",
    ],
    fromPrice: "$1,600",
    priceNote: "/ pipeline build",
    initialLikes: 142,
    initialSaves: 67,
    previewNote: "Up to 18% conversation-to-checkout conversion",
  },
  {
    id: "service-06",
    number: "06",
    category: "POSITIONING",
    title: "Creator Brand Architecture",
    outcome: "A distinct, recognizable editorial aesthetic that commands premium pricing.",
    deliverables: [
      "Custom visual language: color palette, overlays & lower-thirds",
      "Signature thumbnail design framework & feed moodboard",
      "Founder narrative positioning & hook script templates",
    ],
    fromPrice: "$2,600",
    priceNote: "/ brand system",
    initialLikes: 208,
    initialSaves: 99,
    previewNote: "Separates you from generic corporate content",
  },
];
