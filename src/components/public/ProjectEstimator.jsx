import React, { useState } from 'react';
import { 
  Calculator, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  DollarSign, 
  Layers, 
  ShieldCheck, 
  ArrowRight,
  Beer
} from 'lucide-react';

export default function ProjectEstimator({ onOpenQuoteModal }) {
  const [projectType, setProjectType] = useState('bar-club-os');
  const [scale, setScale] = useState('medium');
  const [hasVIP, setHasVIP] = useState(true);
  const [hasStockTally, setHasStockTally] = useState(true);

  // Calculation Logic
  const calculateEstimate = () => {
    let baseMin = 12000;
    let baseMax = 22000;
    let weeksMin = 4;
    let weeksMax = 8;

    if (projectType === 'bar-club-os') {
      baseMin = 15000;
      baseMax = 28000;
      weeksMin = 6;
      weeksMax = 10;
    } else if (projectType === 'custom-saas') {
      baseMin = 18000;
      baseMax = 32000;
      weeksMin = 6;
      weeksMax = 12;
    }

    if (scale === 'large') {
      baseMin *= 1.6;
      baseMax *= 1.8;
      weeksMin = Math.round(weeksMin * 1.4);
      weeksMax = Math.round(weeksMax * 1.5);
    }

    if (hasVIP) {
      baseMin += 4000;
      baseMax += 7000;
    }
    if (hasStockTally) {
      baseMin += 5000;
      baseMax += 8000;
    }

    return {
      min: Math.round(baseMin),
      max: Math.round(baseMax),
      weeksMin,
      weeksMax
    };
  };

  const estimate = calculateEstimate();

  return (
    <section id="estimator" className="py-24 border-y relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 dark:text-emerald-400 text-xs font-semibold tracking-wider uppercase">
            <Calculator className="w-3.5 h-3.5" />
            <span>Software Investment Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black theme-text-primary tracking-tight">
            Estimate Your Software Project Scope
          </h2>
          <p className="text-base sm:text-lg theme-text-secondary">
            Select your project requirements, POS inventory scale, and gate access modules to generate a timeline and cost projection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border space-y-8">
            
            {/* 1. Project Type */}
            <div className="space-y-3">
              <label className="text-sm font-bold theme-text-primary uppercase tracking-wider block">
                1. Project Category
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'bar-club-os', label: 'Bar & Club OS', desc: 'Entry, Stock, POS, Sales Tally' },
                  { id: 'custom-saas', label: 'Custom Web & FastAPI App', desc: 'Bespoke Cloud Platform' },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setProjectType(type.id)}
                    className={`p-4 rounded-xl text-left border transition-all ${
                      projectType === type.id
                        ? 'bg-sky-500/10 border-sky-500 theme-text-primary shadow-md'
                        : 'theme-bg-subtle theme-text-secondary hover:border-sky-500/30'
                    }`}
                  >
                    <div className="font-bold text-sm">{type.label}</div>
                    <div className="text-xs theme-text-secondary mt-1">{type.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Scale / Complexity */}
            <div className="space-y-3">
              <label className="text-sm font-bold theme-text-primary uppercase tracking-wider block">
                2. Operation Scale & Outlets
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'medium', label: 'Single Venue / Bar', sub: 'Up to 5 Terminal Counters' },
                  { id: 'large', label: 'Multi-Outlet / Club Chain', sub: 'Multiple Locations & Central Sync' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setScale(item.id)}
                    className={`p-3.5 rounded-xl text-left border transition-all ${
                      scale === item.id
                        ? 'bg-sky-500/10 border-sky-500 theme-text-primary'
                        : 'theme-bg-subtle theme-text-secondary hover:border-sky-500/30'
                    }`}
                  >
                    <div className="font-bold text-xs">{item.label}</div>
                    <div className="text-[10px] theme-text-secondary mt-0.5">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Advanced Features */}
            <div className="space-y-3">
              <label className="text-sm font-bold theme-text-primary uppercase tracking-wider block">
                3. Dedicated Modules
              </label>
              <div className="space-y-2">
                <label className="flex items-center justify-between p-3.5 rounded-xl theme-bg-subtle border cursor-pointer hover:border-sky-500/40">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={hasVIP}
                      onChange={(e) => setHasVIP(e.target.checked)}
                      className="w-4 h-4 rounded accent-sky-500"
                    />
                    <span className="text-sm font-medium theme-text-primary">
                      VIP Member Card Verification & Photo ID Entry Module
                    </span>
                  </div>
                  <span className="text-xs text-sky-500 dark:text-sky-400 font-mono font-semibold">+Entry Scan</span>
                </label>

                <label className="flex items-center justify-between p-3.5 rounded-xl theme-bg-subtle border cursor-pointer hover:border-sky-500/40">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={hasStockTally}
                      onChange={(e) => setHasStockTally(e.target.checked)}
                      className="w-4 h-4 rounded accent-sky-500"
                    />
                    <span className="text-sm font-medium theme-text-primary">
                      Automated Stock Receipts, Peg Tally & Employee Salary Advance Hub
                    </span>
                  </div>
                  <span className="text-xs text-emerald-500 dark:text-emerald-400 font-mono font-semibold">+Stock Tally</span>
                </label>
              </div>
            </div>

          </div>

          {/* Projection Card */}
          <div className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-sky-500/30 space-y-6 sticky top-24 shadow-2xl">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-700/40">
              <span className="text-xs font-bold text-sky-500 dark:text-sky-400 uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>Estimated Projection</span>
              </span>
              <span className="text-[11px] font-semibold text-emerald-500 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                Calculated
              </span>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs theme-text-secondary font-medium">Estimated Development Investment</span>
                <div className="text-3xl sm:text-4xl font-black theme-text-primary font-mono tracking-tight">
                  ${estimate.min.toLocaleString()} - ${estimate.max.toLocaleString()}
                </div>
                <p className="text-[11px] theme-text-secondary">Includes API setup, DB migrations, and custom dashboard.</p>
              </div>

              <div className="p-4 rounded-2xl theme-bg-subtle border space-y-3">
                <div className="flex items-center justify-between text-xs theme-text-primary">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <Clock className="w-4 h-4 text-sky-500" />
                    <span>Timeline Projections:</span>
                  </span>
                  <span className="font-bold font-mono text-sm">
                    {estimate.weeksMin} to {estimate.weeksMax} Weeks
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs theme-text-primary">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <Beer className="w-4 h-4 text-indigo-500" />
                    <span>Core Engine:</span>
                  </span>
                  <span className="font-bold text-indigo-500 dark:text-indigo-400">
                    FastAPI + PostgreSQL
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="w-full py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-sky-500/20"
              >
                <span>Book Technical Review with Vasanth</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
