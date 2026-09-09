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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-red-500/5 via-slate-500/5 to-transparent blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Startup Tag Badge */}
        <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-semibold text-red-600 dark:text-red-400 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span>HARVID • AI-Powered Software Solutions for Businesses</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </div>

        {/* Hero Headline */}
        <div className="max-w-5xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] sm:leading-[1.08]">
            Building AI-Powered Software <br className="hidden sm:block" />
            <span className="text-red-600 dark:text-red-500">
              Solutions for Modern Businesses
            </span>
          </h1>

          <p className="text-base sm:text-xl lg:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-normal leading-relaxed">
            From custom SaaS web platforms and AI automation engines to specialized industry systems like Bar OS and Jewellery ERP, HARVID turns complex business challenges into fast, high-revenue software.
          </p>
        </div>

        {/* Strong Action Pill CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 sm:pt-4">
          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto px-9 py-4 rounded-full text-base font-bold text-white bg-red-600 hover:bg-red-700 hover:scale-105 transition-all duration-200 shadow-xl shadow-red-500/25 flex items-center justify-center space-x-3"
          >
            <span>Build Your Solution</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href={companyDetails.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-9 py-4 rounded-full text-base font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200 border border-slate-200 dark:border-slate-700 flex items-center justify-center space-x-2"
          >
            <span>Talk to Us</span>
          </a>
        </div>

        {/* Technologies / Trust Badges */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">Powered By:</span>
          {companyDetails.techStack.map((tech, idx) => (
            <span key={idx} className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800">
              {tech}
            </span>
          ))}
        </div>

        {/* Feature Stats Grid */}
        <div className="pt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 text-left">
          {companyDetails.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-slate-900/90 p-4 sm:p-6 rounded-2xl sm:rounded-[24px] border border-slate-200/80 dark:border-slate-800/80 shadow-lg shadow-slate-900/5 hover:shadow-xl transition-all duration-300 space-y-1"
            >
              <div className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-red-600 dark:text-red-400">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Multi-Solution Preview Card */}
        <div className="mt-12 sm:mt-16 rounded-2xl sm:rounded-[32px] bg-white dark:bg-slate-900 p-5 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-2xl shadow-slate-900/10 text-left space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0">
                <Cloud className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  HARVID Multi-Solution Software Architecture
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  React + FastAPI + PostgreSQL Cloud Infrastructure
                </p>
              </div>
            </div>

            <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold shrink-0">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>ACTIVE PLATFORMS</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200/60 dark:border-slate-800/80 space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                <span>CUSTOM SAAS PLATFORMS</span>
                <Cloud className="w-4 h-4 text-red-500" />
              </div>
              <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-mono">Enterprise Web Apps</div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Responsive React user interfaces, user authentication, workflows, and custom SaaS dashboards.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200/60 dark:border-slate-800/80 space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                <span>FEATURED HOSPITALITY</span>
                <Beer className="w-4 h-4 text-red-500" />
              </div>
              <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-mono">Bar & Club OS™</div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                VIP gate photo verification, stock receipt tracking, and daily closing POS sales tallying.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200/60 dark:border-slate-800/80 space-y-3 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                <span>AI & ANALYTICS</span>
                <BrainCircuit className="w-4 h-4 text-red-500" />
              </div>
              <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-mono">Predictive BI Engine</div>
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
