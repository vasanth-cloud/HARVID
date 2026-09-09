import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Beer, 
  Cloud,
  BrainCircuit,
  Database,
  Activity,
  Boxes,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { companyDetails } from '../../data/harvidData';

export default function Hero({ onOpenQuoteModal, setActiveSection }) {
  return (
    <section id="hero" className="relative pt-16 pb-28 overflow-hidden">
      
      {/* Ambient Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-sky-500/10 via-indigo-500/10 to-transparent blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Apple-style Tag Badge */}
        <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
          <span>HARVID Tech & Software Solutions • Multi-Industry Platforms</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        </div>

        {/* Hero Headline */}
        <div className="max-w-5xl mx-auto space-y-6">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08]">
            Engineering Intelligent Software & <br className="hidden sm:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-indigo-600 to-sky-400">
              Custom Enterprise Platforms
            </span>
          </h1>

          <p className="text-lg sm:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-normal leading-relaxed">
            From custom cloud SaaS applications and AI predictive analytics to specialized industry platforms like our Bar & Club Operating System, HARVID builds high-performance software tailored to your goals.
          </p>
        </div>

        {/* Action Pill Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto px-9 py-4 rounded-full text-base font-semibold text-white bg-slate-900 dark:bg-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 hover:scale-105 transition-all duration-200 shadow-xl flex items-center justify-center space-x-3"
          >
            <span>Schedule Technical Review</span>
            <ArrowRight className="w-4 h-4 opacity-70" />
          </button>
        </div>

        {/* Feature Cards Grid */}
        <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
          {companyDetails.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-slate-900/90 p-6 rounded-[24px] border border-slate-200/80 dark:border-slate-800/80 shadow-lg shadow-slate-900/5 hover:shadow-xl transition-all duration-300 space-y-1"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-sky-600 dark:text-sky-400">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Multi-Solution Preview Card */}
        <div className="mt-16 rounded-[32px] bg-white dark:bg-slate-900 p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-2xl shadow-slate-900/10 text-left space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                <Cloud className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  HARVID Multi-Solution Software Architecture
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  React + FastAPI + PostgreSQL Cloud Infrastructure
                </p>
              </div>
            </div>

            <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>ACTIVE PLATFORMS</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200/60 dark:border-slate-800/80 space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                <span>CUSTOM SAAS PLATFORMS</span>
                <Cloud className="w-4 h-4 text-sky-500" />
              </div>
              <div className="text-xl font-bold text-slate-900 dark:text-white font-mono">Enterprise Web Apps</div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Responsive React user interfaces, user authentication, workflows, and custom SaaS dashboards.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200/60 dark:border-slate-800/80 space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                <span>FEATURED HOSPITALITY</span>
                <Beer className="w-4 h-4 text-indigo-500" />
              </div>
              <div className="text-xl font-bold text-slate-900 dark:text-white font-mono">Bar & Club OS™</div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                VIP gate photo verification, stock receipt tracking, and daily closing POS sales tallying.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200/60 dark:border-slate-800/80 space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                <span>AI & ANALYTICS</span>
                <BrainCircuit className="w-4 h-4 text-emerald-500" />
              </div>
              <div className="text-xl font-bold text-slate-900 dark:text-white font-mono">Predictive BI Engine</div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Data aggregation telemetry routines, custom reporting endpoints, and automated analytics.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
