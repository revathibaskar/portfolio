"use client";

import React, { useState, useEffect } from "react";
import { PROJECTS, Project } from "@/data/portfolioData";
import {
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Globe,
  ArrowUpRight,
} from "lucide-react";

export default function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const activeProject = PROJECTS[activeProjectIndex];

  const handlePrev = () => {
    setActiveProjectIndex((prev) => (prev === 0 ? PROJECTS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveProjectIndex((prev) => (prev === PROJECTS.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (modalProject) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalProject]);

  return (
    <section
      id="projects"
      className="py-20 md:py-28 relative overflow-hidden bg-slate-50/70 dark:bg-black text-slate-900 dark:text-white transition-colors duration-300"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-b from-indigo-500/10 dark:from-indigo-900/15 via-purple-500/10 dark:via-purple-900/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase text-pink-600 dark:text-pink-400 bg-pink-500/10 border border-pink-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Device Showcase</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Projects
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl text-sm sm:text-base">
              Explore real-world client platforms built end-to-end. Use the arrows or thumbnail dock below to switch between live applications.
            </p>
          </div>

          {/* Quick Counter */}
          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-slate-600 dark:text-slate-400 bg-white dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 px-4 py-2 rounded-full shadow-sm">
            <span className="text-pink-600 dark:text-pink-400 font-bold text-sm">{activeProject.num}</span>
            <span>/</span>
            <span>0{PROJECTS.length}</span>
          </div>
        </div>

        {/* Center Stage: Device Mockup */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows on Left and Right of Device */}
          <button
            onClick={handlePrev}
            className="absolute -left-4 sm:-left-8 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-3.5 rounded-full bg-white/95 dark:bg-zinc-900/95 hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-800 dark:text-white border border-slate-200/80 dark:border-white/15 shadow-xl hover:shadow-2xl backdrop-blur-md transition-all hover:scale-110 active:scale-95 hover:border-pink-500/50 dark:hover:border-pink-500/50 focus:outline-none"
            aria-label="Previous Project"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute -right-4 sm:-right-8 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-3.5 rounded-full bg-white/95 dark:bg-zinc-900/95 hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-800 dark:text-white border border-slate-200/80 dark:border-white/15 shadow-xl hover:shadow-2xl backdrop-blur-md transition-all hover:scale-110 active:scale-95 hover:border-pink-500/50 dark:hover:border-pink-500/50 focus:outline-none"
            aria-label="Next Project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Main Tablet Device Frame */}
          <div className="relative rounded-[32px] sm:rounded-[44px] p-2.5 sm:p-4 bg-slate-200 dark:bg-[#141419] border-[3px] border-slate-300/80 dark:border-[#272733] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.15)] dark:shadow-[0_30px_100px_-20px_rgba(0,0,0,0.95)] transition-all duration-500">
            {/* Top Tablet Camera Dot */}
            <div className="absolute top-2 sm:top-2.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-slate-400 dark:bg-[#20202a] border border-black/20 z-20"></div>

            {/* Inner Tablet Display Area */}
            <div className="relative aspect-[16/10] rounded-[22px] sm:rounded-[32px] overflow-hidden bg-black shadow-inner group/screen">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/screen:scale-[1.01]"
              />

              {/* Glossy reflection highlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.04] via-transparent to-transparent pointer-events-none" />

              {/* Quick floating Live Link chip inside screen */}
              <a
                href={activeProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3.5 right-3.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 hover:bg-pink-600 text-white text-[11px] font-mono border border-white/20 shadow-xl backdrop-blur-md transition-all hover:scale-105"
              >
                <span>Live Site</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Interactive Bottom Thumbnail Dock / Carousel */}
          <div className="max-w-2xl mx-auto mt-12 sm:mt-16 p-2 rounded-2xl bg-white/90 dark:bg-zinc-900/90 border border-slate-200 dark:border-white/10 backdrop-blur-2xl shadow-xl dark:shadow-2xl flex items-center justify-center gap-2.5 sm:gap-4 overflow-x-auto">
            {PROJECTS.map((project, index) => {
              const isSelected = index === activeProjectIndex;
              return (
                <button
                  key={project.id}
                  onClick={() => setActiveProjectIndex(index)}
                  className={`relative w-20 sm:w-28 aspect-[16/10] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 border-2 focus:outline-none shrink-0 ${
                    isSelected
                      ? "border-pink-500 scale-105 shadow-[0_0_25px_rgba(236,72,153,0.5)] opacity-100 ring-2 ring-pink-500/30"
                      : "border-transparent opacity-50 hover:opacity-90 hover:scale-102"
                  }`}
                  aria-label={`View ${project.title}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-black/15 dark:bg-black/20" />

                  {/* Thumbnail Number Badge */}
                  <span
                    className={`absolute bottom-1 left-1 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold ${
                      isSelected
                        ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                        : "bg-white/90 dark:bg-black/80 text-slate-800 dark:text-slate-300"
                    }`}
                  >
                    {index + 1}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Active Project Specifications Card below the Dock */}
        <div className="mt-12 sm:mt-16 rounded-3xl p-6 sm:p-8 lg:p-10 bg-white dark:bg-zinc-950 border border-slate-200/80 dark:border-white/10 shadow-xl dark:shadow-2xl relative overflow-hidden transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Details */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-pink-600 dark:text-pink-400 bg-pink-500/10 px-3 py-1 rounded-full border border-pink-500/20">
                  {activeProject.category}
                </span>
                <span className="text-slate-400 dark:text-slate-500">•</span>
                <span className="text-xs font-mono text-slate-600 dark:text-slate-400">
                  {activeProject.clientType}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {activeProject.title}
              </h3>

              <p className="text-sm font-medium text-indigo-600 dark:text-purple-300">
                {activeProject.tagline}
              </p>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeProject.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Key Technical Feats
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  {activeProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Tags */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {activeProject.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-100 dark:bg-white/[0.05] text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Actions & Metrics */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-6 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-white/10 pt-6 lg:pt-0 lg:pl-8">
              {/* Metrics */}
              {activeProject.metrics && (
                <div className="space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Project Stats
                  </div>
                  <div className="grid grid-cols-1 gap-2.5">
                    {activeProject.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 flex items-center justify-between"
                      >
                        <span className="text-xs text-slate-500 dark:text-slate-400">{m.label}</span>
                        <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-pink-500/25 transition-all hover:-translate-y-0.5"
                >
                  <Globe className="w-4 h-4" />
                  <span>Visit Live Application</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <button
                  onClick={() => setModalProject(activeProject)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-slate-100 dark:bg-white/[0.06] hover:bg-slate-200 dark:hover:bg-white/[0.12] text-slate-800 dark:text-white font-semibold text-xs transition-colors border border-slate-200 dark:border-white/10"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>View Full Architecture Specs</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Deep-Dive Specs */}
        {modalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative max-w-2xl w-full rounded-3xl p-6 sm:p-8 bg-white dark:bg-zinc-950 shadow-2xl border border-slate-200 dark:border-white/15 space-y-6 max-h-[90vh] overflow-y-auto text-slate-900 dark:text-white">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10">
                <div>
                  <div className="text-xs font-mono text-pink-600 dark:text-pink-400 uppercase tracking-wider">
                    {modalProject.category}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                    {modalProject.title}
                  </h4>
                </div>
                <button
                  onClick={() => setModalProject(null)}
                  className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Preview image */}
              <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 aspect-video relative bg-slate-950">
                <img
                  src={modalProject.image}
                  alt={modalProject.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <div>
                  <h5 className="font-semibold text-slate-900 dark:text-white mb-1">Architecture & Scope</h5>
                  <p className="leading-relaxed">{modalProject.description}</p>
                </div>

                <div>
                  <h5 className="font-semibold text-slate-900 dark:text-white mb-2">Key Engineering Highlights</h5>
                  <ul className="space-y-2">
                    {modalProject.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-slate-900 dark:text-white mb-2">Full Tech Stack</h5>
                  <div className="flex flex-wrap gap-2">
                    {modalProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-100 dark:bg-white/[0.06] text-purple-700 dark:text-purple-300 border border-slate-200 dark:border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                <a
                  href={modalProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold text-xs shadow-lg shadow-pink-500/25 transition-all"
                >
                  <span>Open Live Application</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setModalProject(null)}
                  className="px-5 py-2.5 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-800 dark:text-white transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
