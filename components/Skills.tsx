"use client";

import React, { useState } from "react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import {
  Layout,
  Cpu,
  Server,
  Database,
  ShieldCheck,
  Sparkles,
  Layers,
  Search,
  CheckCircle2,
} from "lucide-react";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "frontend":
        return <Layout className="w-4 h-4" />;
      case "state":
        return <Cpu className="w-4 h-4" />;
      case "backend":
        return <Server className="w-4 h-4" />;
      case "database":
        return <Database className="w-4 h-4" />;
      case "auth-payments":
        return <ShieldCheck className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  // Flatten skills with category info
  const allSkills = SKILL_CATEGORIES.flatMap((cat) =>
    cat.skills.map((s) => ({ ...s, categoryId: cat.id, categoryTitle: cat.name }))
  );

  const displayedSkills = allSkills.filter((skill) => {
    const matchesTab = activeTab === "all" || skill.categoryId === activeTab;
    const matchesSearch =
      searchQuery.trim() === "" ||
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-white/[0.05] border border-indigo-200/60 dark:border-white/10">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Stack & Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Skills & Core Competencies
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl text-base">
              Carefully curated core technologies powering high-performance frontends, robust server architectures, and relational databases.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Filter by keyword (e.g. Next.js, Stripe)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs rounded-full border border-slate-300 dark:border-white/10 bg-white dark:bg-black text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 shadow-sm transition-all"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200/80 dark:border-white/10 pb-4">
          <button
            onClick={() => setActiveTab("all")}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === "all"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 scale-[1.02]"
                : "bg-slate-100 dark:bg-black text-slate-600 dark:text-slate-400 border border-transparent dark:border-white/10 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/70 dark:hover:bg-white/[0.06]"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>All Core Skills ({allSkills.length})</span>
          </button>

          {SKILL_CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 scale-[1.02]"
                    : "bg-slate-100 dark:bg-black text-slate-600 dark:text-slate-400 border border-transparent dark:border-white/10 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/70 dark:hover:bg-white/[0.06]"
                }`}
              >
                {getCategoryIcon(cat.id)}
                <span>
                  {cat.name} ({cat.skills.length})
                </span>
              </button>
            );
          })}
        </div>

        {/* Curated Skills Grid with Animated Progress Bars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-2xl bg-white dark:bg-black border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-indigo-500/50 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block mt-0.5">
                      {skill.tag}
                    </span>
                  </div>

                  <span
                    className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full uppercase tracking-wider font-bold ${
                      skill.level === "Expert"
                        ? "bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/30"
                        : "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30"
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>
              </div>

              {/* Card Footer: Category & Verified Status */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                <span>{skill.categoryTitle}</span>
                <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Stack</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {displayedSkills.length === 0 && (
          <div className="text-center py-12 text-slate-500 dark:text-slate-400 text-sm">
            No technologies found matching "{searchQuery}". Try another keyword.
          </div>
        )}
      </div>
    </section>
  );
}
