import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Building2,
  Cloud
} from 'lucide-react';
import { companyDetails, teamData } from '../../data/harvidData';

export default function AboutUs() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Founders & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Engineering Excellence & Strategic Growth
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            HARVID was founded with a single mission: to build intelligent, high-speed software solutions that solve real business problems.
          </p>
        </div>

        {/* Founders Section */}
        <div className="mb-16 sm:mb-20 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">
              Equal Leadership Structure
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Meet the Founders
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Direct founder collaboration on every enterprise project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {teamData.map((member, idx) => (
              <div 
                key={idx} 
                className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl sm:rounded-[32px] border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-4 sm:space-y-5 text-center group hover:border-red-500/40 transition-all duration-300"
              >
                <div className="w-28 h-28 sm:w-36 sm:h-36 mx-auto rounded-2xl overflow-hidden border-2 border-red-500/40 shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={member.avatar} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top" 
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-400 bg-red-500/10 px-3.5 py-1 rounded-full border border-red-500/20 inline-block mb-1">
                    Founder — {member.name}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">{member.focus}</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl sm:rounded-[32px] border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-600 dark:text-red-400 shrink-0">
              <Cloud className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Cloud Software Architecture</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Engineering scalable multi-tenant SaaS applications, custom web portals, and automated business platforms.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl sm:rounded-[32px] border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Sub-20ms High Concurrency</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Leveraging FastAPI, PostgreSQL, and clean microservice architecture to ensure zero latency and peak reliability.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl sm:rounded-[32px] border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Strategic Business Impact</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Combining technical mastery with growth strategy to deliver software that drives measurable revenue expansion.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
