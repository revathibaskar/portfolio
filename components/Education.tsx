"use client";

import React from "react";
import { EDUCATION_ITEMS } from "@/data/portfolioData";
import { GraduationCap, Award, Calendar, Sparkles } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200/60 dark:border-indigo-800/60">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Education & Degrees
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl text-base">
            Strong foundational computer science background with continuous technical upskilling and high academic distinction.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION_ITEMS.map((item) => (
            <div
              key={item.degree}
              className="rounded-2xl p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden bg-white dark:bg-black border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-indigo-500/50 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform -z-10" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/30">
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    <span>Score: {item.score}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {item.degree}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium mt-1">
                    {item.institution}
                  </p>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">
                    {item.location}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
                  {item.highlight}
                </p>
              </div>

              {/* Score Progress Bar */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-white/10">
                <div className="flex justify-between items-center text-xs font-mono text-slate-500 dark:text-slate-400 mb-1.5">
                  <span>Academic Performance</span>
                  <span className="font-bold text-slate-900 dark:text-white">{item.score}</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-white/[0.08] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-1000"
                    style={{ width: `${item.scoreNumeric}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

