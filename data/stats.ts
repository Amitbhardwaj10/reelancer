export interface ProfileStat {
  id: string;
  label: string;
  value: string;
  subnote: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  timecode: string;
  description: string;
}

export const profileStats: ProfileStat[] = [
  {
    id: "stat-campaigns",
    label: "CAMPAIGNS",
    value: "48+",
    subnote: "DTC & SaaS Sprints",
  },
  {
    id: "stat-clients",
    label: "CLIENTS",
    value: "28",
    subnote: "Direct Partnerships",
  },
  {
    id: "stat-roas",
    label: "AVG. ROAS",
    value: "4.3x",
    subnote: "Blended Return",
  },
  {
    id: "stat-years",
    label: "IN TRENCHES",
    value: "05",
    subnote: "Years Full-Time",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    timecode: "00:00:02:15",
    description: "Audit past creative, map audience friction points, and deconstruct top 3 competitor hook angles.",
  },
  {
    step: "02",
    title: "Strategy",
    timecode: "00:00:06:00",
    description: "Script 20+ modular 9:16 concepts targeting specific cognitive biases and emotional triggers.",
  },
  {
    step: "03",
    title: "Ship",
    timecode: "00:00:10:18",
    description: "Produce, color-grade, and launch dynamic budget creative testing matrices within 14 days.",
  },
  {
    step: "04",
    title: "Scale",
    timecode: "00:00:14:24",
    description: "Double down on winning hooks, automate comment-to-DM flows, and scale ad spend efficiently.",
  },
];
