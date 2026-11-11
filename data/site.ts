export interface SocialLink {
  name: string;
  tag: string;
  url: string;
}

export interface SiteConfig {
  name: string;
  brandName: string;
  handle: string;
  role: string;
  tagline: string;
  subline: string;
  bio: string;
  location: string;
  status: string;
  timecodeEpoch: string;
  contactEmail: string;
  socials: SocialLink[];
  getWhatsAppUrl: () => string;
}

export const siteConfig: SiteConfig = {
  name: "Nikhil Varma",
  brandName: "Reelancer",
  handle: "@nikhil.growth",
  role: "Performance Creative & Short-Form Growth Engineer",
  tagline: "Engineering viral retention into cold, hard cashflow.",
  subline: "Direct-response short form for DTC challengers and developer SaaS. No agency bloat, no generic templates—just high-velocity hook testing and measurable ROAS.",
  bio: "Solo operator running creative labs, paid social media buying, and server-side attribution systems. Based worldwide, working on retainers and high-stakes launch sprints.",
  location: "UTC+5:30 • Worldwide",
  status: "REC • ACCEPTING Q1/Q2 SPRINTS",
  timecodeEpoch: "00:00:12:08",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "nikhil@reelancer.co",
  socials: [
    { name: "X / Twitter", tag: "X", url: "https://x.com" },
    { name: "Instagram", tag: "IG", url: "https://instagram.com" },
    { name: "LinkedIn", tag: "LI", url: "https://linkedin.com" },
    { name: "YouTube", tag: "YT", url: "https://youtube.com" },
  ],
  getWhatsAppUrl: () => {
    const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "15550192834";
    const cleanNumber = rawNumber.replace(/[^0-9]/g, "");
    const message = encodeURIComponent("Hey Nikhil, saw Reelancer and want to book a sprint.");
    return `https://wa.me/${cleanNumber}?text=${message}`;
  },
};
