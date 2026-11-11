export interface SoftwareTool {
  id: string;
  name: string;
  category: "Paid Media" | "Attribution & Ops" | "Creative & Post" | "Funnel & Automation";
  role: string;
  whyIUseIt: string;
  iconName: string;
}

export const softwareData: SoftwareTool[] = [
  {
    id: "soft-01",
    name: "Meta Ads Manager",
    category: "Paid Media",
    role: "Advantage+ Shopping & Scaling",
    whyIUseIt: "Hourly spend pacing, CAPI event deduplication, and testing 15+ hook variations simultaneously.",
    iconName: "Target",
  },
  {
    id: "soft-02",
    name: "TikTok Ads Manager",
    category: "Paid Media",
    role: "Spark Ads & Sound Seeding",
    whyIUseIt: "Amplifying creator organic posts with authorized spark codes to cut discovery CAC in half.",
    iconName: "Zap",
  },
  {
    id: "soft-03",
    name: "Google Analytics 4 & BigQuery",
    category: "Attribution & Ops",
    role: "Server-Side Event Auditing",
    whyIUseIt: "Streaming un-sampled checkout data directly to SQL tables to audit true blended return on ad spend.",
    iconName: "BarChart3",
  },
  {
    id: "soft-04",
    name: "Ahrefs & Search Console",
    category: "Attribution & Ops",
    role: "Search Intent Mining",
    whyIUseIt: "Finding zero-competition programmatic keyword gaps to turn short-form virality into evergreen organic rank.",
    iconName: "Search",
  },
  {
    id: "soft-05",
    name: "DaVinci Resolve Studio",
    category: "Creative & Post",
    role: "Color Science & Sound Design",
    whyIUseIt: "Film print emulation (FPE) LUTs and Fairlight audio compression that commands immediate screen authority.",
    iconName: "Film",
  },
  {
    id: "soft-06",
    name: "CapCut Desktop",
    category: "Creative & Post",
    role: "Kinetic Velocity Editing",
    whyIUseIt: "Speed-ramping, magnetic auto-captions, and instant 9:16 export presets tailored for mobile feeds.",
    iconName: "Scissors",
  },
  {
    id: "soft-07",
    name: "Figma",
    category: "Creative & Post",
    role: "Visual Storyboarding & CRO",
    whyIUseIt: "Wireframing mobile quiz funnels and visual hook storyboards before wasting a single dollar on production.",
    iconName: "Layout",
  },
  {
    id: "soft-08",
    name: "Klaviyo & Postscript",
    category: "Funnel & Automation",
    role: "Lifecycle SMS & Email",
    whyIUseIt: "Automating 3-part welcome drop sequences that capture 30%+ incremental revenue after the initial click.",
    iconName: "Mail",
  },
  {
    id: "soft-09",
    name: "ManyChat",
    category: "Funnel & Automation",
    role: "Comment-to-DM Conversions",
    whyIUseIt: "Triggering conversational qualification sequences within 60 seconds of a viewer commenting on a reel.",
    iconName: "MessageSquare",
  },
  {
    id: "soft-10",
    name: "Notion",
    category: "Attribution & Ops",
    role: "Client Sprint Portal",
    whyIUseIt: "Live script approvals, asset links, and sprint deliverables with zero back-and-forth Slack clutter.",
    iconName: "CheckSquare",
  },
  {
    id: "soft-11",
    name: "Looker Studio",
    category: "Attribution & Ops",
    role: "Executive ROAS Dashboards",
    whyIUseIt: "Consolidating spend, revenue, and gross profit into a single viewport with zero vanity metrics.",
    iconName: "PieChart",
  },
  {
    id: "soft-12",
    name: "Linear",
    category: "Attribution & Ops",
    role: "Sprint Issue Tracking",
    whyIUseIt: "Tracking weekly creative experiments, hook hypotheses, and release milestones with engineering rigor.",
    iconName: "Layers",
  },
];

