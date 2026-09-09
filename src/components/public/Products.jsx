import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  TrendingUp,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Cpu,
  Building2
} from 'lucide-react';
import { caseStudiesData, whyHarvidData } from '../../data/harvidData';

export default function Products({ onOpenQuoteModal }) {
  return (
    <section id="products" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Real Production Systems & Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Proven Software Built for Real Businesses
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            We don't just write code—we design and deploy complete operating platforms active in hospitality, jewellery retail, and cloud enterprise.
          </p>
        </div>

        {/* Case Studies Cards */}
        <div className="space-y-8">
          {caseStudiesData.map((cs) => (
            <div 
              key={cs.id}
              className="bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-2xl sm:rounded-[32px] border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-6 hover:border-red-500/40 transition-all duration-300"
            >
              {/* Header Badge & Title */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-red-600 dark:text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20 inline-block mb-2">
                    {cs.badge} • {cs.clientCategory}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                    {cs.title}
                  </h3>
                </div>

                <div className="flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-4 py-2 rounded-full text-xs font-bold shrink-0">
                  <TrendingUp className="w-4 h-4 shrink-0" />
                  <span>{cs.result}</span>
                </div>
              </div>

              {/* Problem vs Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Problem */}
                <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>The Problem</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {cs.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    <Lightbulb className="w-4 h-4 shrink-0" />
                    <span>HARVID Solution</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {cs.solution}
                  </p>
                </div>

              </div>

              {/* Key Features & Tech Badges */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                
                {/* System Highlights */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Key Platform Modules
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {cs.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cs.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* CTA Action */}
              <div className="pt-4 flex justify-end border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={onOpenQuoteModal}
                  className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-red-600 hover:bg-red-700 transition-all flex items-center space-x-2 shadow-md shadow-red-500/20"
                >
                  <span>Build a Similar System</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Why HARVID Section */}
        <div className="mt-20 pt-16 border-t border-slate-200 dark:border-slate-800">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-400">
              Why Businesses Choose Us
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Why Choose HARVID?
            </h3>
            <p className="text-base text-slate-600 dark:text-slate-400">
              We combine deep technical engineering with direct founder execution to build software that actually scales your business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyHarvidData.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-lg space-y-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center font-bold">
                  0{idx + 1}
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
