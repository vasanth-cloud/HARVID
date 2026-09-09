import React, { useState } from 'react';
import { 
  Cloud, 
  Code2, 
  BrainCircuit, 
  Smartphone, 
  Sparkles, 
  Layers,
  CheckCircle2, 
  ChevronRight, 
  ArrowRight
} from 'lucide-react';
import { servicesData } from '../../data/harvidData';

const iconMap = {
  Code2: Code2,
  BrainCircuit: BrainCircuit,
  Smartphone: Smartphone,
  Sparkles: Sparkles,
  Cloud: Cloud,
  Layers: Layers
};

export default function Services({ onOpenQuoteModal }) {
  const [selectedService, setSelectedService] = useState(servicesData[0]);

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Business Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Engineering High-Performance Business Software
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            From custom web and mobile applications to AI business automation and cloud deployments, we build software designed to accelerate your growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Services Selector List */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            {servicesData.map((service) => {
              const IconComponent = iconMap[service.icon] || Code2;
              const isSelected = selectedService.id === service.id;
              
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`p-4 sm:p-6 rounded-2xl sm:rounded-[24px] cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? 'bg-white dark:bg-slate-900 border-red-500 shadow-xl scale-[1.01]'
                      : 'bg-white/60 dark:bg-slate-900/60 border-slate-200/80 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className={`p-2.5 sm:p-3 rounded-2xl shrink-0 ${
                      isSelected 
                        ? 'bg-red-600 text-white shadow-md' 
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}>
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                          {service.title}
                        </h3>
                        <ChevronRight className={`w-4 h-4 transition-transform shrink-0 ${isSelected ? 'rotate-90 text-red-500' : 'text-slate-400'}`} />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed View Panel */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[32px] border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-6">
            <div className="flex items-center space-x-4 pb-6 border-b border-slate-200 dark:border-slate-800">
              {React.createElement(iconMap[selectedService.icon] || Code2, {
                className: "w-7 h-7 sm:w-8 sm:h-8 text-red-600 dark:text-red-500 shrink-0"
              })}
              <div>
                <span className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-widest">
                  Capability Architecture
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {selectedService.fullDesc}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Technical Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedService.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 bg-slate-50 dark:bg-slate-950 p-3.5 rounded-2xl border border-slate-200/60 dark:border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Badges */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Primary Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.techStack.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-end">
              <button
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-bold text-white bg-red-600 hover:bg-red-700 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-red-500/20"
              >
                <span>Build Your Solution</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
