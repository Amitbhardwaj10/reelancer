import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Film } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-between selection:bg-lime selection:text-black">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 py-24 sm:py-32 relative">
        <div className="max-w-md w-full text-center p-8 bg-[#0E0E0E] border border-hairline relative">
          <div className="bracket-tl" />
          <div className="bracket-tr" />
          <div className="bracket-bl" />
          <div className="bracket-br" />

          <div className="w-12 h-12 border border-hairline bg-black flex items-center justify-center text-lime mx-auto mb-4">
            <Film className="w-6 h-6" />
          </div>

          <span className="font-mono text-[10px] text-lime uppercase tracking-widest block mb-2">
            [ERROR 404 // FRAME LOST]
          </span>

          <h1 className="font-sans font-bold text-3xl sm:text-4xl text-offwhite tracking-tight mb-3">
            Scene Not In Timeline
          </h1>

          <p className="font-sans text-xs text-offwhite-muted leading-relaxed mb-8">
            The link you followed may be expired or the take was cut in post-production. Cut back to the main feed.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-lime text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-lime-hover transition-colors"
            >
              <span>Back to Feed</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </Link>

            <Link
              href="/#work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 border border-hairline font-mono text-xs uppercase tracking-wider text-offwhite hover:border-lime transition-colors"
            >
              <span>Explore Reels</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
