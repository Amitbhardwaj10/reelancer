import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { projectsData } from "@/data/projects";
import { siteConfig } from "@/data/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Eye,
  Music2,
  Calendar,
  Phone,
  MessageSquare,
} from "lucide-react";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${project.title} • ${project.client}`,
    description: project.summary,
    openGraph: {
      title: `${project.title} • ${project.client} Case Study`,
      description: project.summary,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const currentIndex = projectsData.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const project = projectsData[currentIndex];
  const prevProject =
    currentIndex > 0 ? projectsData[currentIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject =
    currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : projectsData[0];

  return (
    <div className="min-h-screen bg-background relative selection:bg-lime selection:text-black">
      <Navbar />

      <main className="pt-24 sm:pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          {/* Breadcrumb Navigation */}
          <div className="mb-8">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 font-mono text-xs text-offwhite-dim hover:text-lime transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>[← BACK TO REELS TIMELINE]</span>
            </Link>
          </div>

          {/* Viewfinder Header Stamp */}
          <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs border-b border-hairline pb-3 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-lime animate-rec-blink" />
              <span className="text-lime font-bold">{project.frameNumber}</span>
              <span className="text-offwhite-dim">//</span>
              <span className="text-offwhite-muted">{project.timecode}</span>
            </div>

            <div className="flex items-center gap-3 text-offwhite-dim">
              <span className="px-2 py-0.5 bg-lime text-black font-bold uppercase">
                {project.metricBadge}
              </span>
              <span className="hidden sm:inline">{project.industry}</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {project.year} ({project.duration})
              </span>
            </div>
          </div>

          {/* Title & Tagline */}
          <h1 className="font-sans font-bold text-3xl sm:text-5xl text-offwhite tracking-tight leading-tight mb-4">
            {project.title}
          </h1>

          <p className="font-sans text-base sm:text-lg text-offwhite-muted leading-relaxed max-w-3xl mb-12">
            {project.tagline}
          </p>

          {/* Viewfinder 9:16 Reel Card + Metrics Scorecard */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
            
            {/* 9:16 Vertical Reel Frame Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[320px] aspect-[9/16] bg-[#111111] border border-hairline p-1 relative flex flex-col justify-between shadow-2xl overflow-hidden">
                <div className="bracket-tl z-20" />
                <div className="bracket-tr z-20" />
                <div className="bracket-bl z-20" />
                <div className="bracket-br z-20" />

                <div className="relative w-full h-full">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Scorecard Grid */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <span className="font-mono text-xs text-offwhite-dim uppercase tracking-wider">
                [VERIFIED IMPACT SCORECARD]
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.results.metrics.map((m, idx) => (
                  <div key={idx} className="p-5 bg-[#0E0E0E] border border-hairline">
                    <span className="font-mono text-[10px] text-offwhite-dim uppercase tracking-wider block mb-1">
                      {m.label}
                    </span>
                    <div className="font-mono font-bold text-3xl text-lime tracking-tight mb-1">
                      {m.value}
                    </div>
                    <p className="font-sans text-xs text-offwhite-muted leading-snug">
                      {m.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Sprint Stack Pills */}
              <div className="p-4 bg-[#0E0E0E] border border-hairline mt-2">
                <span className="font-mono text-[10px] text-offwhite-dim uppercase tracking-wider block mb-2">
                  [SPRINT STACK USED]
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.servicesUsed.map((srv, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-black border border-hairline font-mono text-[11px] text-offwhite"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Deep Dive Case Study Content */}
          <div className="space-y-10">
            
            {/* The Goal & Objective */}
            <section className="p-6 sm:p-8 bg-[#0E0E0E] border border-hairline">
              <span className="font-mono text-xs text-lime uppercase tracking-wider block mb-2">
                [01 // THE OBJECTIVE]
              </span>
              <h2 className="font-sans font-bold text-2xl text-offwhite tracking-tight mb-4">
                Challenge & Benchmark
              </h2>
              <p className="font-sans text-sm sm:text-base text-offwhite-muted leading-relaxed mb-4">
                {project.summary}
              </p>
              <div className="p-4 bg-black border-l-2 border-lime font-mono text-xs text-offwhite leading-relaxed">
                <strong className="text-lime">NORTH STAR GOAL: </strong>
                {project.goal}
              </div>
            </section>

            {/* Growth Strategy */}
            <section className="p-6 sm:p-8 bg-[#0E0E0E] border border-hairline">
              <span className="font-mono text-xs text-lime uppercase tracking-wider block mb-2">
                [02 // THE FRAMEWORK]
              </span>
              <h2 className="font-sans font-bold text-2xl text-offwhite tracking-tight mb-6">
                3-Part Strategic Execution
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {project.strategy.map((item, idx) => (
                  <div key={idx} className="p-5 bg-black border border-hairline flex flex-col justify-between">
                    <span className="font-mono font-bold text-xs text-lime mb-3">
                      STAGE 0{idx + 1}
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-offwhite-muted leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Execution Roadmap */}
            <section className="p-6 sm:p-8 bg-[#0E0E0E] border border-hairline">
              <span className="font-mono text-xs text-lime uppercase tracking-wider block mb-2">
                [03 // TIMELINE]
              </span>
              <h2 className="font-sans font-bold text-2xl text-offwhite tracking-tight mb-6">
                Execution Phases
              </h2>

              <div className="space-y-4">
                {project.execution.map((phase, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-black border border-hairline flex flex-col sm:flex-row sm:items-start gap-4"
                  >
                    <span className="font-mono font-bold text-xs text-lime sm:w-1/3 shrink-0">
                      {phase.phase}
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-offwhite-muted leading-relaxed sm:w-2/3">
                      {phase.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Learnings */}
            <section className="p-6 sm:p-8 bg-[#0E0E0E] border border-hairline">
              <span className="font-mono text-xs text-lime uppercase tracking-wider block mb-2">
                [04 // STRATEGIC TAKEAWAYS]
              </span>
              <h2 className="font-sans font-bold text-2xl text-offwhite tracking-tight mb-6">
                Insights for Creators & Growth Teams
              </h2>

              <div className="space-y-3">
                {project.keyTakeaways.map((takeaway, idx) => (
                  <div key={idx} className="flex items-start gap-3 font-sans text-xs sm:text-sm text-offwhite-muted">
                    <Check className="w-4 h-4 text-lime shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Previous / Next Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-16 pt-8 border-t border-hairline">
            <Link
              href={`/work/${prevProject.slug}`}
              className="p-5 bg-[#0E0E0E] border border-hairline hover:border-lime transition-colors group flex flex-col"
            >
              <span className="font-mono text-[10px] text-offwhite-dim mb-1 flex items-center gap-1.5">
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                <span>PREVIOUS REEL</span>
              </span>
              <span className="font-sans font-bold text-sm text-offwhite group-hover:text-lime transition-colors truncate">
                {prevProject.client} • {prevProject.metricBadge}
              </span>
            </Link>

            <Link
              href={`/work/${nextProject.slug}`}
              className="p-5 bg-[#0E0E0E] border border-hairline hover:border-lime transition-colors group flex flex-col text-right sm:items-end"
            >
              <span className="font-mono text-[10px] text-offwhite-dim mb-1 flex items-center gap-1.5">
                <span>NEXT REEL</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="font-sans font-bold text-sm text-offwhite group-hover:text-lime transition-colors truncate">
                {nextProject.client} • {nextProject.metricBadge}
              </span>
            </Link>
          </div>

          {/* Bottom Action Card */}
          <div className="mt-12 p-8 bg-[#0E0E0E] border border-lime text-center relative">
            <div className="bracket-tl" />
            <div className="bracket-tr" />
            <div className="bracket-bl" />
            <div className="bracket-br" />

            <span className="font-mono text-[10px] text-lime uppercase tracking-widest block mb-2">
              [TRANSMISSION ACTION]
            </span>
            <h3 className="font-sans font-bold text-2xl sm:text-3xl text-offwhite mb-3">
              Ready to replicate these numbers?
            </h3>
            <p className="font-sans text-xs sm:text-sm text-offwhite-muted max-w-xl mx-auto mb-6">
              Let's audit your hook drop-off and build a high-retention reel acquisition engine.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-lime text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-lime-hover transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </Link>
              <a
                href={siteConfig.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-hairline font-mono text-xs uppercase tracking-wider text-offwhite hover:border-lime hover:text-lime transition-colors"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
