import React from 'react';
import { 
  Beer, 
  Sparkles, 
  ArrowRight, 
  TrendingUp,
  Layers,
  ChevronRight,
  Cloud
} from 'lucide-react';
import { productsData } from '../../data/harvidData';

export default function Products({ onOpenQuoteModal }) {
  return (
    <section id="products" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>HARVID Product Suites</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Enterprise Software & Product Platforms
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Modular software platforms engineered by HARVID to streamline business operations, AI data intelligence, and specialized industry systems.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productsData.map((product) => (
            <div 
              key={product.id}
              className="bg-white dark:bg-slate-900 p-8 rounded-[32px] border border-slate-200/80 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-6">
                
                {/* Header Badge & Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-sky-600 dark:text-sky-400 bg-sky-500/10 px-3.5 py-1 rounded-full border border-sky-500/20">
                    {product.badge}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-slate-950 transition-all">
                    <Cloud className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                    {product.name}
                  </h3>
                  <p className="text-xs font-semibold text-sky-600 dark:text-sky-400">
                    {product.tagline}
                  </p>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {product.desc}
                </p>

                {/* Metric Banner */}
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 flex items-center space-x-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  <TrendingUp className="w-4 h-4 shrink-0" />
                  <span>{product.metrics}</span>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-8">
                <button
                  onClick={onOpenQuoteModal}
                  className="w-full py-3.5 rounded-full text-sm font-semibold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-950 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Request Demo & Pricing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Integration Banner */}
        <div className="mt-16 bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-[32px] border border-slate-200/80 dark:border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white">
              Need a Bespoke SaaS Architecture or System Integration?
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl">
              We design custom software platforms, API middleware integrations, and specialized industry systems tailored to your exact workflow.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-slate-900 dark:bg-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-md"
            >
              Contact Developer Desk
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
