export interface ProjectMetric {
  label: string;
  value: string;
  description: string;
}

export interface ProjectCaseStudy {
  slug: string;
  frameNumber: string;
  timecode: string;
  title: string;
  client: string;
  industry: string;
  year: string;
  duration: string;
  heroMetric: string;
  metricBadge: string;
  tagline: string;
  summary: string;
  goal: string;
  strategy: string[];
  execution: {
    phase: string;
    description: string;
  }[];
  results: {
    overview: string;
    metrics: ProjectMetric[];
  };
  keyTakeaways: string[];
  servicesUsed: string[];
  reelAudioTitle: string;
  reelViewsCount: string;
  aspectRatio: "9:16";
  accentHue: string;
}

export const projectsData: ProjectCaseStudy[] = [
  {
    slug: "aura-botanicals",
    frameNumber: "01 / 06",
    timecode: "00:04:18:12",
    title: "Scaling DTC Wellness From $32k to $145k/mo on Meta",
    client: "Aura Botanicals",
    industry: "E-Commerce • Functional Wellness",
    year: "2024",
    duration: "4 Months",
    heroMetric: "4.8x ROAS",
    metricBadge: "+380% Revenue",
    tagline: "Replacing dry clinical whitepapers with thumb-stopping 24-second sensory hook reels.",
    summary: "Aura's blended CAC was creeping toward $42, choking off cash flow. We re-engineered their entire creative pipeline around 3 psychological hook angles and paired them with an automated mobile quiz checkout.",
    goal: "Break past the $30k monthly ceiling while bringing blended customer acquisition cost below $25 without cheap discounting.",
    strategy: [
      "Deconstructed the core adaptogen into 5 controversial 'what doctors won't mention' hooks testing cognitive friction.",
      "Built a 14-day rapid creative testing matrix on Meta with Dynamic Creative Optimization (DCO).",
      "Swapped the standard Shopify PDP for a 4-step mobile recommendation quiz, boosting conversion from 1.8% to 4.1%.",
    ],
    execution: [
      {
        phase: "Phase 01: Audit & Scripting",
        description: "Scraped competitor ad libraries, identified 6 unaddressed customer anxieties, and scripted 24 short-form variations.",
      },
      {
        phase: "Phase 02: Hook Velocity Sprint",
        description: "Tested 12 hook iterations in 10 days using low-budget ad sets. Two hooks achieved immediate 4.2x+ ROAS.",
      },
      {
        phase: "Phase 03: Scale & Retention",
        description: "Scaled daily spend from $400 to $2,400 while keeping CAC under $24 with automated post-purchase email/SMS flows.",
      },
    ],
    results: {
      overview: "Within 120 days, monthly run-rate jumped from $32k to $145k, while blended acquisition cost dropped by 42%.",
      metrics: [
        { label: "Blended ROAS", value: "4.82x", description: "Across all Meta prospecting ad sets" },
        { label: "Revenue Surge", value: "+380%", description: "From $32,000 to $145,000 monthly" },
        { label: "Total Views", value: "3.4M+", description: "Paid and organic vertical impressions" },
        { label: "Customer Acquisition Cost", value: "-42%", description: "Cut from $41.20 down to $23.80" },
      ],
    },
    keyTakeaways: [
      "The first 2.5 seconds of vertical video dictate 80% of downstream conversion profitability.",
      "Mobile quiz funnels consistently beat standard product pages for high-ticket wellness.",
      "Iterating new 3-second hook intros on a winning body video extends creative fatigue by 4x.",
    ],
    servicesUsed: ["Direct-Response Reels", "Paid Social Media Buying", "CAPI & Server-Side Event Tracking"],
    reelAudioTitle: "Aura • Sound of Clarity (Raw Mix)",
    reelViewsCount: "1.2M",
    aspectRatio: "9:16",
    accentHue: "#C6FF3D",
  },
  {
    slug: "nexus-cloud-sdk",
    frameNumber: "02 / 06",
    timecode: "00:08:24:00",
    title: "18,500 Developer Signups via Dark-Mode Terminal Demos",
    client: "Nexus Cloud SDK",
    industry: "B2B SaaS • Developer Infrastructure",
    year: "2024",
    duration: "6 Months",
    heroMetric: "+212% Reach",
    metricBadge: "+212% Reach",
    tagline: "Proving that cynical software engineers love snappy 40-second vertical terminal reels.",
    summary: "Nexus built a lightning-fast serverless workflow engine, but developers were bouncing from dense documentation. We replaced boring webinars with razor-sharp code execution reels on YouTube Shorts and X.",
    goal: "Generate qualified developer free-tier signups at a sub-$20 cost per active user.",
    strategy: [
      "Framed common engineering headaches (YAML hell, cold start latency) into relatable dark-mode code skits.",
      "Published 18 high-octane coding reels with crisp mechanical keyboard SFX and zero corporate fluff.",
      "Trimmed documentation onboarding so time-to-first-hello-world dropped from 14 minutes to 90 seconds.",
    ],
    execution: [
      {
        phase: "Phase 01: Dev Community Research",
        description: "Interviewed 20 power users on Discord to identify exact syntax frustrations and relatable meme language.",
      },
      {
        phase: "Phase 02: Terminal Reel Flight",
        description: "Produced and seeded 18 kinetic terminal coding tutorials with custom monospace syntax highlighting.",
      },
      {
        phase: "Phase 03: Enterprise Retargeting",
        description: "Retargeted viewer engagement cohorts with invitation-only enterprise tier trials.",
      },
    ],
    results: {
      overview: "Acquired 18,500 active developer accounts in 6 months and generated 44 enterprise demo requests.",
      metrics: [
        { label: "Free Tier Signups", value: "18.5K", description: "Verified software engineers" },
        { label: "Cost Per Lead", value: "$18.40", description: "Far below $45 industry standard" },
        { label: "Qualified Reach", value: "+212%", description: "Organic developer impressions" },
        { label: "Pipeline Generated", value: "$320K", description: "In identified enterprise ARR" },
      ],
    },
    keyTakeaways: [
      "Developers respect transparency and speed—no fluff, straight into code execution.",
      "Cinematic sound design and dark-mode terminal aesthetics dramatically increase watch time on B2B videos.",
    ],
    servicesUsed: ["Direct-Response Reels", "Mobile Quiz & Landing Funnels", "Creator Brand Architecture"],
    reelAudioTitle: "Nexus • Terminal Beats 128BPM",
    reelViewsCount: "840K",
    aspectRatio: "9:16",
    accentHue: "#C6FF3D",
  },
  {
    slug: "veloce-streetwear",
    frameNumber: "03 / 06",
    timecode: "00:12:05:18",
    title: "Midnight Capsule Drop: $85,000 Cleared in 18 Minutes",
    client: "Véloce Streetwear",
    industry: "Apparel • High-End Streetwear",
    year: "2024",
    duration: "2 Months",
    heroMetric: "$85K in 18m",
    metricBadge: "$85k in 18m",
    tagline: "Archival VHS textures, brutalist framing, and timed SMS unlock codes.",
    summary: "Véloce had loyal underground followers but struggled to build massive release momentum. We transformed their lookbook into an episodic cinematic reel series filmed in brutalist concrete architecture.",
    goal: "Sell out the 1,200 unit Capsule 04 collection within 24 hours of dropping.",
    strategy: [
      "Produced a 5-part cinematic teaser reel series with analog VHS grain and eerie ambient audio.",
      "Built an exclusive SMS VIP list gate with early 15-minute access passwords.",
      "Amplified user-generated lookbook styling reels through creator seeding.",
    ],
    execution: [
      {
        phase: "Phase 01: The Blackout",
        description: "Archived previous posts and published three cryptic 7-second glitch reels to spark community rumors.",
      },
      {
        phase: "Phase 02: VIP Gate Unlock",
        description: "Grew SMS VIP list by 8,200 engaged phone numbers in 14 days.",
      },
      {
        phase: "Phase 03: Drop Night Execution",
        description: "Triggered synchronized Instagram broadcast channel alerts and automated checkout links at midnight.",
      },
    ],
    results: {
      overview: "Capsule 04 sold out in 18 minutes flat, generating $85,200 in gross revenue.",
      metrics: [
        { label: "Drop Revenue", value: "$85.2K", description: "Generated in under 20 minutes" },
        { label: "Sellout Velocity", value: "18 Mins", description: "1,200 inventory units cleared" },
        { label: "Engagement Lift", value: "+490%", description: "Shares and saves on teaser reels" },
        { label: "SMS Subscribers", value: "8.2K", description: "Direct VIP phone numbers gathered" },
      ],
    },
    keyTakeaways: [
      "Curated scarcity combined with episodic reel storytelling generates irrational buyer excitement.",
      "SMS notifications achieve 94% open rates within 3 minutes of a drop.",
    ],
    servicesUsed: ["Creator Brand Architecture", "Direct-Response Reels", "Comment-to-DM Growth Funnels"],
    reelAudioTitle: "VÉLOCE • Midnight Capsule Theme",
    reelViewsCount: "2.1M",
    aspectRatio: "9:16",
    accentHue: "#C6FF3D",
  },
  {
    slug: "solaris-wealth",
    frameNumber: "04 / 06",
    timecode: "00:16:42:04",
    title: "52,000 App Downloads with Animated Wealth Breakdowns",
    client: "Solaris Wealth App",
    industry: "Fintech • Consumer Finance",
    year: "2023",
    duration: "5 Months",
    heroMetric: "52K Installs",
    metricBadge: "52k Installs",
    tagline: "Demystifying compound interest and index funds with split-second kinetic charts.",
    summary: "Solaris was burning money on expensive financial affiliate portals. We created educational split-screen reels comparing inflation loss against automated ETF compounding.",
    goal: "Achieve iOS app install costs below $4.50 while increasing first-deposit conversion to 35%.",
    strategy: [
      "Engineered animated split-screen reels comparing everyday impulse spending vs compounding wealth.",
      "Tested 30+ UGC-style testimonial hooks answering real user money dilemmas.",
      "Optimized deep linking straight from TikTok and Instagram in-app browsers into the App Store.",
    ],
    execution: [
      {
        phase: "Phase 01: Compliance & Angle Matrix",
        description: "Audited financial compliance guidelines and scripted 40 educational micro-reels.",
      },
      {
        phase: "Phase 02: Performance Media",
        description: "Ran targeted Spark ads on TikTok and Reels ads on Meta with dynamic subtitle overlays.",
      },
      {
        phase: "Phase 03: Deposit Retention",
        description: "Built automated in-app push triggers educating users on setting up automated weekly deposits.",
      },
    ],
    results: {
      overview: "Delivered 52,400 verified downloads with an average first deposit value of $340 per user.",
      metrics: [
        { label: "Verified Installs", value: "52.4K", description: "Direct from social reel funnels" },
        { label: "Cost Per Install", value: "$3.85", description: "Down from $11.20 affiliate baseline" },
        { label: "Deposit Rate", value: "38.2%", description: "Users funding within 72 hours" },
        { label: "AUM Acquired", value: "$17.8M", description: "Net new assets under management" },
      ],
    },
    keyTakeaways: [
      "Financial education works best when visually comparing concrete everyday tradeoffs.",
      "Dynamic captions with kinetic styling increase completion rates on finance content by 44%.",
    ],
    servicesUsed: ["Paid Social Media Buying", "CAPI & Server-Side Event Tracking", "Direct-Response Reels"],
    reelAudioTitle: "Solaris • Smart Compounding Mix",
    reelViewsCount: "1.7M",
    aspectRatio: "9:16",
    accentHue: "#C6FF3D",
  },
  {
    slug: "kinetics-lab",
    frameNumber: "05 / 06",
    timecode: "00:20:11:15",
    title: "1,400+ Recurring Members via Automated DM Funnels",
    client: "Kinetics Performance Lab",
    industry: "Fitness • Subscription Coaching",
    year: "2024",
    duration: "3 Months",
    heroMetric: "+175% MRR",
    metricBadge: "+175% MRR",
    tagline: "High-octane biomechanics tutorials paired with zero-friction DM automation.",
    summary: "A premier biomechanics coaching lab had world-class programming but zero inbound leads beyond word of mouth. We automated their Instagram DMs and transformed form critique videos into viral tutorials.",
    goal: "Generate 200+ monthly recurring app memberships without founder sales calls.",
    strategy: [
      "Created 'Stop Doing This' biomechanics critique reels that sparked intense comment debates.",
      "Integrated ManyChat automated DM funnels delivering workout split PDFs when users commented 'SPLIT'.",
      "Built a 3-day nurture sequence inside Instagram DMs leading directly to a discounted annual checkout.",
    ],
    execution: [
      {
        phase: "Phase 01: Reel Relaunch",
        description: "Published 3 high-value coaching reels weekly with clean freeze-frame overlays and anatomy labels.",
      },
      {
        phase: "Phase 02: DM Automation Funnel",
        description: "Engineered automated DM replies with instant lead magnet delivery and conversational qualification.",
      },
      {
        phase: "Phase 03: Conversion Sprint",
        description: "Retargeted engaged commenters with time-sensitive seasonal registration discounts.",
      },
    ],
    results: {
      overview: "Added over 1,420 active paying monthly members, scaling MRR from $24.7k to $68.1k.",
      metrics: [
        { label: "Active Members", value: "1,420", description: "Paying subscribers on monthly billing" },
        { label: "MRR Growth", value: "+175%", description: "From $24.7k to $68.1k monthly" },
        { label: "DM Conversations", value: "31.2K", description: "Automated qualified lead chats" },
        { label: "DM Conversion", value: "14.8%", description: "From lead magnet to paid trial" },
      ],
    },
    keyTakeaways: [
      "Automated comment-to-DM funnels bridge the gap between passive viral viewing and active consideration.",
      "Biomechanics breakdowns establish instant authoritative credibility over generic workout montages.",
    ],
    servicesUsed: ["Comment-to-DM Growth Funnels", "Direct-Response Reels", "Paid Social Media Buying"],
    reelAudioTitle: "Kinetics • High Heart Rate Trap",
    reelViewsCount: "950K",
    aspectRatio: "9:16",
    accentHue: "#C6FF3D",
  },
  {
    slug: "lumina-coffee",
    frameNumber: "06 / 06",
    timecode: "00:24:00:00",
    title: "Specialty Roastery DTC Expansion: 6.2x Meta Ad ROAS",
    client: "Lumina Single Origin",
    industry: "Specialty Beverage • DTC Subscription",
    year: "2023",
    duration: "4 Months",
    heroMetric: "6.2x ROAS",
    metricBadge: "6.2x ROAS",
    tagline: "Sensory ASMR extraction reels and origin stories that made coffee lovers hit subscribe.",
    summary: "Lumina roasted award-winning single-origin lots but had negligible direct-to-consumer presence. We built an aesthetic coffee-lover universe on Reels and TikTok with sensory pour-overs.",
    goal: "Grow recurring coffee subscription club past 1,000 active members.",
    strategy: [
      "Produced calming macro ASMR extraction reels focusing on crema, grind sound, and ceramic textures.",
      "Created an interactive 'Find Your Roast' taste profiler quiz linking to personalized subscription boxes.",
      "Implemented a subscription customization portal cutting customer churn in half.",
    ],
    execution: [
      {
        phase: "Phase 01: Macro Studio Production",
        description: "Recorded 40 high-definition 4K 60fps macro sensory pour-overs with binaural audio.",
      },
      {
        phase: "Phase 02: Algorithmic Seeding",
        description: "Cross-posted reels using trending ambient acoustics and baristas answering extraction FAQs.",
      },
      {
        phase: "Phase 03: Retention Hardening",
        description: "Shipped exclusive collector cards with origin stories in each subscription package.",
      },
    ],
    results: {
      overview: "Surpassed 1,180 active monthly subscribers with an extraordinary 88% 90-day retention rate.",
      metrics: [
        { label: "Active Subscribers", value: "1,180", description: "Recurring monthly coffee shipments" },
        { label: "Paid ROAS", value: "6.2x", description: "Top performing Meta ASMR ad sets" },
        { label: "90-Day Retention", value: "88.4%", description: "Industry benchmark is ~48%" },
        { label: "Organic Views", value: "4.8M", description: "Coffee ASMR hashtag views" },
      ],
    },
    keyTakeaways: [
      "Sensory audio-visual satisfaction (ASMR) creates instant emotional desire for physical products.",
      "Subscribers who engage with origin storytelling retain twice as long as discount shoppers.",
    ],
    servicesUsed: ["Direct-Response Reels", "Creator Brand Architecture", "Mobile Quiz & Landing Funnels"],
    reelAudioTitle: "Lumina • Pour Over Vinyl & Rain",
    reelViewsCount: "1.9M",
    aspectRatio: "9:16",
    accentHue: "#C6FF3D",
  },
];
