"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { useToast } from "./Toast";
import {
  ArrowRight,
  Copy,
  MapPin,
  Briefcase,
  GraduationCap,
  Sparkles,
  Mail,
  Check,
  Code2,
  Terminal,
  Zap,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Hero() {
  const { toast } = useToast();
  const [copied, setCopied] = React.useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    toast({
      title: "Email copied to clipboard!",
      description: PERSONAL_INFO.email,
      type: "success",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="top" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Aesthetic ambient glow background elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] ambient-glow-1 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-20 w-[450px] h-[450px] ambient-glow-2 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] ambient-glow-3 rounded-full blur-3xl pointer-events-none -z-10 opacity-60" />

      {/* Decorative subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline and Bio */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Radar Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Full-Stack Roles & High-Impact Products</span>
            </div>

            {/* Main Greeting and Title with animated gradient */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.08]">
                Hi, I'm{" "}
                <span className="shimmer-text">Revathi Baskar</span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-slate-700 dark:text-slate-200 tracking-tight">
                Full-Stack Developer crafting high-velocity web products from screen to database.
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Specialized in engineering robust user experiences with{" "}
              <span className="text-slate-900 dark:text-white font-semibold underline decoration-indigo-500/60 underline-offset-4">
                React.js & Next.js
              </span>
              , backed by scalable{" "}
              <span className="text-slate-900 dark:text-white font-semibold underline decoration-purple-500/60 underline-offset-4">
                Node.js, Express & PostgreSQL
              </span>
              . Proven shipping across e-commerce, CRM systems, recurring subscription engines, and real-time hardware billing.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all group"
              >
                <span>View Shipped Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-black/90 hover:bg-slate-50 dark:hover:bg-white/10 text-slate-800 dark:text-white font-semibold text-sm shadow-sm transition-all hover:-translate-y-0.5"
              >
                <span>Contact Me</span>
              </a>

              {/* Quick Copy Email */}
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl border border-dashed border-slate-300 dark:border-white/15 hover:border-indigo-500 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-xs font-mono transition-colors dark:bg-black/40"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied!" : "Copy Email"}</span>
              </button>
            </div>

            {/* Quick stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200/80 dark:border-white/10">
              {PERSONAL_INFO.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-3.5 rounded-xl bg-slate-100/60 dark:bg-black/60 border border-slate-200/60 dark:border-white/10 transition-transform hover:-translate-y-0.5"
                >
                  <div className="text-xl sm:text-2xl font-bold font-mono text-indigo-600 dark:text-indigo-400">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Profile Bento Card with Floating Tech Badges */}
          <div className="lg:col-span-5 relative">
            {/* Floating Tech Badges for dynamic animation */}
            <div className="absolute -top-5 -left-6 z-20 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 dark:bg-black/95 text-white border border-white/10 shadow-xl text-xs font-mono animate-float-slow">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Next.js 16 + React 19</span>
            </div>

            <div className="absolute -bottom-5 -right-4 z-20 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 dark:bg-black/95 text-white border border-white/10 shadow-xl text-xs font-mono animate-float-reverse">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>PostgreSQL & Node.js</span>
            </div>

            {/* Glowing Border Frame */}
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-indigo-500/40 via-purple-500/40 to-pink-500/40 shadow-2xl">
              <div className="relative rounded-[23px] bg-white dark:bg-black p-6 sm:p-7 shadow-xl space-y-6">
                {/* Header of the info card */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    <span className="ml-2 font-mono text-xs text-slate-500 dark:text-slate-400">
                      revathi-profile.ts
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white dark:bg-white/[0.05] transition-colors"
                      aria-label="GitHub"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white dark:bg-white/[0.05] transition-colors"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Profile Snapshot List */}
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 shrink-0">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">Current Focus</div>
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {PERSONAL_INFO.role}
                      </div>
                      <div className="text-xs text-indigo-600 dark:text-indigo-400 font-mono mt-0.5">
                        React.js · Next.js · Node.js · PostgreSQL
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/70 text-purple-600 dark:text-purple-400 shrink-0">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">Present Role</div>
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {PERSONAL_INFO.currentCompany}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                        {PERSONAL_INFO.since}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">Location</div>
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {PERSONAL_INFO.location}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400 shrink-0">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">Degrees</div>
                      <div className="font-semibold text-slate-900 dark:text-white">
                        MCA (73.1%) · BCA (81.0%)
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        University of Madras · Sri Sankara College
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tech Pills Bar */}
                <div className="pt-2 border-t border-slate-200/80 dark:border-white/10">
                  <div className="text-xs font-mono text-slate-400 mb-2.5">Primary Tech Stack</div>
                  <div className="flex flex-wrap gap-1.5">
                    {["Next.js", "React.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "Stripe", "Tailwind"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-100 dark:bg-white/[0.05] text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
