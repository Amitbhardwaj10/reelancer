export interface GearItem {
  id: string;
  name: string;
  category: "Capture" | "Audio" | "Lighting" | "Support & Motion" | "Post & Compute";
  usedFor: string;
  specLine: string;
  iconName: string;
}

export const gearData: GearItem[] = [
  {
    id: "gear-01",
    name: "Sony FX3 Full-Frame Cinema",
    category: "Capture",
    usedFor: "A-cam for 4K 120p macro product shots, high-ISO talking head, and handheld b-roll.",
    specLine: "12.1MP BSI Sensor • 15+ Stops DR • 10-bit 4:2:2 All-Intra • S-Cinetone",
    iconName: "Camera",
  },
  {
    id: "gear-02",
    name: "Sigma 24-70mm f/2.8 DG DN Art II",
    category: "Capture",
    usedFor: "Everyday studio workhorse; edge-to-edge sharpness for rapid set reframing.",
    specLine: "Constant f/2.8 • 0.18m Macro Focus • 82mm Filter Thread • Nano AR Coating",
    iconName: "Disc",
  },
  {
    id: "gear-03",
    name: "DJI RS 3 Pro Gimbal + LiDAR",
    category: "Support & Motion",
    usedFor: "Automated autofocus tracking on kinetic product transitions and fluid tracking shots.",
    specLine: "4.5kg Payload Capacity • ActiveTrack Pro • 43,200 LiDAR Ranging Points",
    iconName: "Compass",
  },
  {
    id: "gear-04",
    name: "RØDE Wireless PRO Dual Kit",
    category: "Audio",
    usedFor: "Zero-clipping on-the-fly talent audio with internal 32-bit float backup recording.",
    specLine: "32-bit Float Internal Recording • 260m Range • Timecode Sync Transmitter",
    iconName: "Mic",
  },
  {
    id: "gear-05",
    name: "Aputure 300d II + Light Dome III",
    category: "Lighting",
    usedFor: "High-contrast editorial key lighting that makes product surfaces pop on mobile feeds.",
    specLine: "5500K Daylight Balanced • 80,000 lux @ 1m • CRI 96+ • Bowens Mount",
    iconName: "Sun",
  },
  {
    id: "gear-06",
    name: "Shure SM7B + Cloudlifter CL-1",
    category: "Audio",
    usedFor: "Direct-response voiceovers and podcast-style hook intros with dead-quiet room rejection.",
    specLine: "Cardioid Dynamic • Flat 50Hz-20kHz • +25dB Ultra-Clean Discrete Gain",
    iconName: "Radio",
  },
  {
    id: "gear-07",
    name: "DJI Mini 4 Pro Drone",
    category: "Capture",
    usedFor: "Native vertical 9:16 aerial perspectives for outdoor lifestyle and apparel campaigns.",
    specLine: "True Vertical 9:16 Gimbal • 4K/60fps HDR • D-Log M • Omnidirectional Sensing",
    iconName: "Navigation",
  },
  {
    id: "gear-08",
    name: "Apple MacBook Pro M3 Max",
    category: "Post & Compute",
    usedFor: "Multi-stream 4K ProRes timeline scrubbing, neural denoising, and instant exports.",
    specLine: "16-Core CPU • 40-Core GPU • 64GB Unified RAM • 400 GB/s Memory Bandwidth",
    iconName: "Laptop",
  },
  {
    id: "gear-09",
    name: "SanDisk PRO-BLADE 4TB NVMe SSD",
    category: "Post & Compute",
    usedFor: "High-throughput active scratch drive handling high-bitrate multi-cam production rushes.",
    specLine: "Up to 3,000 MB/s Read • Aluminum Core Heat Dissipation • USB-C 40Gbps",
    iconName: "HardDrive",
  },
];

