import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  TrendingUp,
  Building2,
  Cloud,
  Code2,
  Target
} from 'lucide-react';
import { companyDetails, teamData, coreModulesData } from '../../data/harvidData';

export default function AboutUs() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>About HARVID Tech</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Building Smart Systems for Modern Enterprise
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Founded by A. Vasanth and T. S. Padmesh to deliver custom software engineering, cloud SaaS platforms, and enterprise solutions.
          </p>
        </div>

        {/* Founders / Leadership Section */}
        <div className="mb-20 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">
              Founders & Executive Leadership
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Meet the Founders
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamData.map((member, idx) => (
              <div 
                key={idx} 
                className="bg-white dark:bg-slate-900 p-8 rounded-[32px] border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-5 text-center group hover:border-red-500/40 transition-all duration-300"
              >
                <div className="w-36 h-36 mx-auto rounded-2xl overflow-hidden border-2 border-red-500/40 shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={member.avatar} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top" 
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="text-2xl font-black text-slate-900 dark:text-white">{member.name}</h4>
                  <p className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">{member.role}</p>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[32px] border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-600 dark:text-red-400">
              <Cloud className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Enterprise Cloud SaaS</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Designing scalable multi-tenant SaaS applications, custom web platforms, and automated workflow solutions for businesses.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-[32px] border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Robust Backend Architecture</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Leveraging FastAPI, PostgreSQL, Alembic migrations, and clean RESTful endpoints to ensure high concurrency and sub-20ms response speeds.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-[32px] border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Strategic Growth & Outreach</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Combining technical software engineering with strategic marketing vision to drive enterprise adoption and client success.
            </p>
          </div>
        </div>

        {/* Core System Architecture Modules */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
            <div>
              <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">
                System Engineering
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                Core Operating Platforms
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreModulesData.map((cs, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-[28px] border border-slate-200/80 dark:border-slate-800 shadow-lg space-y-4">
                <span className="text-[11px] font-bold text-red-600 dark:text-red-400 bg-red-500/10 px-3 py-1 rounded-full uppercase tracking-wider">
                  {cs.category}
                </span>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">{cs.title}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{cs.summary}</p>
                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center space-x-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <TrendingUp className="w-4 h-4 shrink-0" />
                  <span>{cs.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
