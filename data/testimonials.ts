export interface DMTestimonial {
  id: string;
  name: string;
  handle: string;
  avatarInitial: string;
  avatarImage: string;
  role: string;
  company: string;
  text: string;
  timeAgo: string;
  likesCount: number;
}

export const testimonialsData: DMTestimonial[] = [
  {
    id: "dm-01",
    name: "Marcus Vance",
    handle: "@marcus.vance",
    avatarInitial: "MV",
    avatarImage: "/images/avatars/marcus.svg",
    role: "Founder & CEO",
    company: "Aura Botanicals",
    text: "Honestly assumed short-form was just brand fluff. Nikhil brought our blended CAC from $41 down to $23 in 60 days. Our Shopify orders haven't dipped since.",
    timeAgo: "2d ago",
    likesCount: 38,
  },
  {
    id: "dm-02",
    name: "Elena Rostova",
    handle: "@elena.nexus",
    avatarInitial: "ER",
    avatarImage: "/images/avatars/elena.svg",
    role: "Head of Growth",
    company: "Nexus Cloud SDK",
    text: "Engineers are allergic to typical marketing. The dark-mode terminal reels Nikhil directed brought us 18,500 developer signups with zero ad fatigue.",
    timeAgo: "5d ago",
    likesCount: 64,
  },
  {
    id: "dm-03",
    name: "Darius Kroll",
    handle: "@dariuskroll",
    avatarInitial: "DK",
    avatarImage: "/images/avatars/darius.svg",
    role: "Creative Director",
    company: "Véloce Streetwear",
    text: "Capsule 04 cleared out in 18 minutes flat. The teaser pacing and analog grain made people set alarms for midnight. We're locking Nikhil in for all 2025 drops.",
    timeAgo: "1w ago",
    likesCount: 47,
  },
  {
    id: "dm-04",
    name: "Sophia Lin",
    handle: "@sophia.solaris",
    avatarInitial: "SL",
    avatarImage: "/images/avatars/sophia.svg",
    role: "Co-Founder",
    company: "Solaris Wealth App",
    text: "Fintech compliance usually murders good creative. Nikhil found the exact pocket between SEC-safe messaging and high-CTR TikTok hooks. CPI plummeted to $3.85.",
    timeAgo: "2w ago",
    likesCount: 52,
  },
  {
    id: "dm-05",
    name: "Liam O'Connor",
    handle: "@liam.kinetics",
    avatarInitial: "LO",
    avatarImage: "/images/avatars/liam.svg",
    role: "Managing Director",
    company: "Kinetics Performance Lab",
    text: "The comment-to-DM automation alone generated 1,400+ recurring memberships without our founders touching a sales call. Pure revenue infrastructure.",
    timeAgo: "3w ago",
    likesCount: 29,
  },
];
