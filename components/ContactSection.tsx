"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";
import { servicesData } from "@/data/services";
import { ArrowUpRight, Check, AlertCircle, Phone, Mail } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: servicesData[0]?.title || "Direct-Response Reels & TikToks",
    budget: "$3,000 - $6,000",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const budgetOptions = [
    "$2,500 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $20,000",
    "$20,000+ / Enterprise Retainer",
  ];

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = "Name or company required (min 2 chars).";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = "Valid business email required.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = "Project context required (min 10 chars).";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          service: servicesData[0]?.title || "Direct-Response Reels & TikToks",
          budget: "$3,000 - $6,000",
          message: "",
        });
      } else {
        setErrorMessage(result.message || "Failed to deliver. Please ping via WhatsApp directly.");
      }
    } catch {
      setErrorMessage("Network issue. Please ping WhatsApp directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative border-b border-hairline">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 border-b border-hairline pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-lime mb-2">
              <span>00:00:44:18</span>
              <span className="text-offwhite-dim">//</span>
              <span className="text-offwhite-muted uppercase">[TRANSMIT / SLIDE INTO THE DMS]</span>
            </div>
            <h2 className="font-sans font-bold text-3xl sm:text-5xl text-offwhite tracking-tight">
              Ready to roll? Slide into the DMs.
            </h2>
          </div>

          <span className="font-mono text-xs text-lime">
            AVG. RESPONSE: UNDER 2 HOURS
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info, Email & WhatsApp */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="p-6 bg-[#0E0E0E] border border-hairline">
              <span className="font-mono text-[10px] text-offwhite-dim uppercase tracking-wider block mb-2">
                [DIRECT FREQUENCY]
              </span>
              <h3 className="font-sans font-bold text-xl text-offwhite mb-3">
                Let's audit your hook drop-off.
              </h3>
              <p className="font-sans text-xs text-offwhite-muted leading-relaxed mb-6">
                Send your current ad account spend or reel handle. I'll reply with a 3-minute video breakdown of where you're losing viewers before the offer.
              </p>

              {/* Instant WhatsApp Button */}
              <a
                href={siteConfig.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 p-3.5 bg-lime text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-lime-hover transition-colors mb-3"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>

              {/* Direct Email Link */}
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="w-full inline-flex items-center justify-center gap-2 p-3 border border-hairline text-offwhite font-mono text-xs uppercase tracking-wider hover:border-offwhite hover:bg-white/[0.03] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-lime" />
                <span>{siteConfig.contactEmail}</span>
              </a>
            </div>

            {/* Quick Sprints Standard */}
            <div className="p-6 bg-[#0A0A0A] border border-hairline font-mono text-xs text-offwhite-muted space-y-2">
              <span className="text-offwhite font-bold block">
                [REELANCER SPEC SHEET]
              </span>
              <p>• Retainers renew on monthly milestones; zero lock-in.</p>
              <p>• 100% full IP transfer of raw cuts, scripts, and ad assets.</p>
              <p>• Dedicated client Notion portal with async approvals.</p>
            </div>

          </div>

          {/* Right Column: Inbound Lead Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-[#0E0E0E] border border-hairline">
              
              {submitSuccess ? (
                <div className="py-12 text-center">
                  <div className="w-12 h-12 border border-lime bg-lime/10 flex items-center justify-center text-lime mx-auto mb-4">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <span className="font-mono text-[10px] text-lime uppercase tracking-widest block mb-1">
                    [TRANSMISSION COMPLETE]
                  </span>
                  <h3 className="font-sans font-bold text-2xl text-offwhite mb-2">
                    Inquiry delivered to inbox.
                  </h3>
                  <p className="font-sans text-xs text-offwhite-muted max-w-md mx-auto mb-6">
                    Thanks for reaching out! I'll review your project details and respond via email within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="px-5 py-2 border border-hairline font-mono text-xs text-offwhite hover:border-lime transition-colors"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  
                  {errorMessage && (
                    <div className="p-3 bg-red-950/40 border border-red-800 text-red-200 font-mono text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block font-mono text-[10px] text-offwhite-dim uppercase tracking-wider mb-2">
                      [01] YOUR NAME / BRAND
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Thorne (Thorne Botanicals)"
                      className={`w-full px-4 py-3 bg-[#141414] border text-xs sm:text-sm text-offwhite placeholder-offwhite-dim focus:outline-none focus:border-lime font-sans transition-colors ${
                        formErrors.name ? "border-red-500" : "border-hairline"
                      }`}
                    />
                    {formErrors.name && (
                      <p className="font-mono text-[10px] text-red-400 mt-1">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block font-mono text-[10px] text-offwhite-dim uppercase tracking-wider mb-2">
                      [02] BUSINESS EMAIL
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@thornebotanicals.com"
                      className={`w-full px-4 py-3 bg-[#141414] border text-xs sm:text-sm text-offwhite placeholder-offwhite-dim focus:outline-none focus:border-lime font-sans transition-colors ${
                        formErrors.email ? "border-red-500" : "border-hairline"
                      }`}
                    />
                    {formErrors.email && (
                      <p className="font-mono text-[10px] text-red-400 mt-1">{formErrors.email}</p>
                    )}
                  </div>

                  {/* Service & Budget Two-Column Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="service" className="block font-mono text-[10px] text-offwhite-dim uppercase tracking-wider mb-2">
                        [03] SPRINT SERVICE
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 bg-[#141414] border border-hairline text-xs sm:text-sm text-offwhite focus:outline-none focus:border-lime font-sans cursor-pointer"
                      >
                        {servicesData.map((s) => (
                          <option key={s.id} value={s.title} className="bg-[#141414] text-offwhite">
                            {s.number} • {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block font-mono text-[10px] text-offwhite-dim uppercase tracking-wider mb-2">
                        [04] ESTIMATED BUDGET
                      </label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 bg-[#141414] border border-hairline text-xs sm:text-sm text-offwhite focus:outline-none focus:border-lime font-sans cursor-pointer"
                      >
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#141414] text-offwhite">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block font-mono text-[10px] text-offwhite-dim uppercase tracking-wider mb-2">
                      [05] PROJECT CONTEXT & GOALS
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your current monthly revenue or traffic, what product you are scaling, and target metrics..."
                      className={`w-full px-4 py-3 bg-[#141414] border text-xs sm:text-sm text-offwhite placeholder-offwhite-dim focus:outline-none focus:border-lime font-sans transition-colors resize-none ${
                        formErrors.message ? "border-red-500" : "border-hairline"
                      }`}
                    />
                    {formErrors.message && (
                      <p className="font-mono text-[10px] text-red-400 mt-1">{formErrors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-lime hover:bg-lime-hover text-black font-mono font-bold text-xs uppercase tracking-wider transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING...</span>
                    ) : (
                      <>
                        <span>TRANSMIT INQUIRY</span>
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
