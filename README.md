# Reelancer 🎬 [RAW 4K]

> **The Viewfinder Concept**: An editorial, cinema-inspired portfolio for a performance creative and short-form growth engineer. Built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed to feel like looking through a camera viewfinder while scrolling a feed—sharp hairlines, corner brackets, timecodes, acid lime accents, and zero generic "AI template" aesthetics.

---

## 📐 Design System & Creative Rules

- **Palette**: Near-black `#0A0A0A` background, `#EDEAE3` off-white text, `#8A8A85` muted secondary, and hairline borders `rgba(237,234,227,0.12)`.
- **One Accent**: Acid Lime `#C6FF3D` for REC dots, key CTAs, active states, and highlighted terms. Warm `#FF5A36` reserved for tiny "LIVE" tags.
- **Typography**: 
  - `Instrument Serif` (italic emphasis words)
  - `Inter` (clean grotesk body)
  - `JetBrains Mono` (labels, timecodes, frame counters, and specs)
- **Viewfinder Motifs**: Corner brackets (`┌ ┐ └ ┘`), running timecodes (`00:00:12:08`), frame counters (`01 / 06`), blinking REC dots, film-strip timeline, and low-opacity film grain.
- **Interactive Cursor**: Desktop-only dot cursor that morphs into a `"VIEW"` label over reel work cards (automatically disabled on touch devices).
- **Anti-"AI Look"**: No purple/blue neon gradients, no glassmorphism overload, no identical card grids, no centered-everything layouts, no emojis, no lorem ipsum.

---

## ⚡ Ordered Sections (Home Page)

1. **NAVBAR**: Wordmark "Reelancer" with blinking lime REC dot, live timecode, anchor links (`Services`, `Work`, `The Kit`, `Process`, `Contact`), and "Book a call" CTA.
2. **HERO**: Giant editorial headline with italic serif accent, 3-reel stacked/overlapping composition with viewfinder brackets, profile strip, 4 mono stats (`Campaigns`, `Clients`, `Avg. ROAS`, `Years in trenches`), and primary/secondary CTAs.
3. **SERVICES ("The Feed")**: Full-bleed marquee strip, followed by 6 services in an irregular editorial list (numbers `01`–`06`, outcomes, 3 deliverables, starting prices, and save/like micro-interactions).
4. **WORK ("Reels")**: Horizontal scroll-snap rail of vertical 9:16 reel frames with metric badges (`+380% Revenue`, `+212% Reach`, `$85k in 18m`, etc.), audio tickers, and links to `/work/[slug]`.
5. **THE KIT**: Two-tab production rig showcase:
   - **Hardware Gear**: Spec-sheet style tiles with device name, usage note, and technical specs.
   - **Software Stack**: Tidy list of media, attribution, and editing tools with "why I use it" notes.
6. **PROCESS**: 4 short steps (`Discover`, `Strategy`, `Ship`, `Scale`) as a vertical film-strip with running timecodes.
7. **TESTIMONIALS ("DMs")**: Verified client reviews styled as direct messages and social comments with avatar initials and like counters.
8. **CONTACT ("Slide into the DMs")**: Inbound lead form (name, email, service, budget range, message) with server-side validation on `/api/contact`, plus WhatsApp button and direct email link.
9. **FOOTER**: Brand mark, social lettermarks (`X`, `IG`, `LI`, `YT`), back-to-top, and a witty `"Shot on Next.js • Shutter 1/48 • ISO 800 • No AI Fluff"` line.
10. **CAMERA CONTROL BAR (Mobile)**: Floating bottom tab bar (`FEED`, `OFFERS`, `REELS`, `KIT`, `DM`).

---

## 🚀 Quick Start

### 1. Installation
```bash
npm install
```

### 2. Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Configure your variables:
```env
# International phone number for WhatsApp without '+' or leading zeros
NEXT_PUBLIC_WHATSAPP_NUMBER=15550192834

# Contact Email for incoming inquiries
NEXT_PUBLIC_CONTACT_EMAIL=nikhil@reelancer.co

# Site URL for metadata & sitemaps
NEXT_PUBLIC_SITE_URL=https://reelancer.vercel.app
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

### 4. Build for Production
```bash
npm run build
npm start
```

---

## 📁 Project Directory Structure

```
d:\nikhil_portfolio/
├── app/
│   ├── api/contact/route.ts     # Validated Route Handler for lead inquiries
│   ├── work/[slug]/page.tsx     # SSG Case study detail pages with generateStaticParams
│   ├── globals.css              # Film-grain texture, vignette & viewfinder bracket styles
│   ├── layout.tsx               # Root layout with fonts, metadata & mobile tab bar
│   ├── not-found.tsx            # Viewfinder 404 page ("FRAME LOST")
│   ├── page.tsx                 # Single scrolling home page (9 ordered sections)
│   ├── robots.ts                # Dynamic robots.txt
│   └── sitemap.ts               # Dynamic sitemap.xml
├── components/
│   ├── ContactSection.tsx       # "Slide into the DMs" form + WhatsApp + Email
│   ├── CustomCursor.tsx         # Desktop dot cursor that morphs into "VIEW" on reels
│   ├── Footer.tsx               # Footer with social lettermarks & camera specs
│   ├── Hero.tsx                 # Big headline, overlapping 9:16 frames & profile stats
│   ├── KitSection.tsx           # Two-tab Gear & Software production rig
│   ├── MobileTabBar.tsx         # Floating camera-control bottom bar for mobile
│   ├── Navbar.tsx               # Wordmark with blinking REC dot & live timecode
│   ├── ProcessSection.tsx       # 4-step vertical film-strip with timecodes
│   ├── Services.tsx             # Marquee strip + irregular editorial list
│   ├── TestimonialsSection.tsx  # Direct message / comment reviews
│   └── WorkSection.tsx          # 9:16 scroll-snap horizontal reels showcase
├── data/
│   ├── gear.ts                  # 9 hardware gadgets with technical spec lines
│   ├── projects.ts              # 6 case studies (goals, strategy, metrics, 9:16 frames)
│   ├── services.ts              # 6 modular sprint services with outcomes & deliverables
│   ├── site.ts                  # Brand config, bio, socials & WhatsApp URL generator
│   ├── software.ts              # 12 production tools with "why I use it" notes
│   ├── stats.ts                 # 4 hero profile stats & 4 process steps
│   └── testimonials.ts          # 5 verified client DM receipts
├── public/
│   └── favicon.svg              # Acid lime REC dot favicon
├── tailwind.config.ts           # Near-black palette, acid lime accent, fonts
└── README.md
```

---

## 🛠️ Editing Content (All in `/data/`)

To customize the portfolio, simply edit the files inside `/data/`:
- **`data/site.ts`**: Edit name, handle, role, bio, location, and social links.
- **`data/services.ts`**: Edit service titles, numbers, outcomes, deliverables, and prices.
- **`data/projects.ts`**: Edit case studies, 9:16 reel metadata, client names, and metrics.
- **`data/gear.ts`**: Edit physical gear items, camera specs, and audio gear.
- **`data/software.ts`**: Edit software tools and the "why I use it" rationale.
- **`data/stats.ts`**: Edit the 4 hero profile stats and 4 process steps.
- **`data/testimonials.ts`**: Edit client quotes and DM receipts.

---

## ☁️ Deploying to Vercel (Zero Config)

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. In the [Vercel Dashboard](https://vercel.com/new), click **"Import Project"**.
3. Next.js App Router will be automatically detected.
4. Under **Environment Variables**, add:
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
   - `NEXT_PUBLIC_CONTACT_EMAIL`
   - `NEXT_PUBLIC_SITE_URL`
5. Click **Deploy**. Prerendered static pages (SSG) will generate in ~30 seconds.
