"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { useToast } from "./Toast";
import {
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  Sparkles,
  ArrowUpRight,
  MessageSquare,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Contact() {
  const { toast } = useToast();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      toast({
        title: "Email copied to clipboard!",
        description: text,
        type: "success",
      });
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      toast({
        title: "Phone number copied!",
        description: text,
        type: "success",
      });
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      toast({
        title: "Please complete required fields",
        description: "Name, email, and message are required.",
        type: "error",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send directly to revathibaskar2003@gmail.com via FormSubmit AJAX endpoint
      const response = await fetch("https://formsubmit.co/ajax/revathibaskar2003@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          _subject: formState.subject || `New Portfolio Message from ${formState.name}`,
          message: formState.message,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (response.ok) {
        setIsSent(true);
        toast({
          title: "Message delivered directly to Revathi's inbox!",
          description: "Your message has been sent to revathibaskar2003@gmail.com.",
          type: "success",
        });
        setFormState({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Delivery error");
      }
    } catch {
      // Fallback: Open prefilled mail client to revathibaskar2003@gmail.com
      const mailtoLink = `mailto:revathibaskar2003@gmail.com?subject=${encodeURIComponent(
        formState.subject || `Portfolio Inquiry from ${formState.name}`
      )}&body=${encodeURIComponent(
        `Hi Revathi,\n\nName: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
      )}`;
      window.location.href = mailtoLink;
      setIsSent(true);
      toast({
        title: "Opening your email app...",
        description: "Draft created to send directly to revathibaskar2003@gmail.com.",
        type: "info",
      });
      setFormState({ name: "", email: "", subject: "", message: "" });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSent(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Container with Ambient Glow Border */}
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-14 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 dark:from-black dark:via-[#080910] dark:to-black text-white border border-indigo-500/30 dark:border-white/10 shadow-2xl">
          {/* Ambient decorative elements */}
          <div className="absolute -right-24 -top-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Info & Social Channels */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase text-indigo-300 bg-indigo-500/20 border border-indigo-400/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Get in Touch</span>
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  Let's build something exceptional together.
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Have an open full-time position, a contract project, or a technical inquiry? Send me an email or drop a message below.
                </p>
              </div>

              {/* Direct channels list */}
              <div className="space-y-3 pt-2">
                {/* Email row */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-800/60 dark:bg-white/[0.04] border border-slate-700/60 dark:border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                        Email Address
                      </div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-xs sm:text-sm font-medium text-slate-200 hover:text-indigo-300 transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.email, "email")}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/60 dark:hover:bg-white/10 transition-colors"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone row */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-800/60 dark:bg-white/[0.04] border border-slate-700/60 dark:border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                        Phone / WhatsApp
                      </div>
                      <a
                        href={`tel:${PERSONAL_INFO.phone}`}
                        className="text-xs sm:text-sm font-medium text-slate-200 hover:text-emerald-300 transition-colors"
                      >
                        {PERSONAL_INFO.phoneDisplay}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.phone, "phone")}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/60 dark:hover:bg-white/10 transition-colors"
                    aria-label="Copy phone"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Social Link Badges */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800/80 dark:bg-white/[0.06] hover:bg-indigo-600 text-slate-200 hover:text-white border border-slate-700/60 dark:border-white/10 transition-all text-xs font-semibold"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800/80 dark:bg-white/[0.06] hover:bg-white/15 text-slate-200 hover:text-white border border-slate-700/60 dark:border-white/10 transition-all text-xs font-semibold"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Code</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Send Note Form */}
            <div className="lg:col-span-7 bg-slate-900/80 dark:bg-black/90 border border-slate-800/80 dark:border-white/10 p-6 sm:p-8 rounded-2xl backdrop-blur-md">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-4">
                <MessageSquare className="w-4 h-4" />
                <span>Send a Direct Note</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-950/70 dark:bg-white/[0.03] border border-slate-700 dark:border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-950/70 dark:bg-white/[0.03] border border-slate-700 dark:border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Subject</label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-950/70 dark:bg-white/[0.03] border border-slate-700 dark:border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your product, project roadmap, or timeline..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-950/70 dark:bg-white/[0.03] border border-slate-700 dark:border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      <span>Sending note...</span>
                    </span>
                  ) : isSent ? (
                    <span className="flex items-center gap-2 text-emerald-300 font-bold">
                      <Check className="w-4 h-4" />
                      <span>Note Dispatched Successfully!</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span>Send Direct Message</span>
                      <Send className="w-4 h-4" />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

