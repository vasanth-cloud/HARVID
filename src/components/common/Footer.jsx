import React from 'react';
import { 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  Globe, 
  Code2, 
  Share2, 
  AlertCircle,
  MessageSquare
} from 'lucide-react';
import { companyDetails } from '../../data/harvidData';

export default function Footer({ setActiveSection }) {
  const scrollTo = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-12 text-slate-600 dark:text-slate-400 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Registration Disclaimer Banner */}
        <div className="mb-12 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <AlertCircle className="w-5 h-5 text-amber-500 shrink-0" />
            <p className="text-xs sm:text-sm text-amber-700 dark:text-amber-200/90 font-medium">
              <strong className="font-semibold">Registration Notice:</strong> HARVID is currently in pre-registration & active software development phase.
            </p>
          </div>
          <span className="text-[11px] uppercase tracking-wider font-semibold text-amber-600 dark:text-amber-400 bg-amber-500/20 px-3 py-1 rounded-md shrink-0 border border-amber-500/30">
            INCORPORATION PENDING
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Company Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center space-x-3">
              {/* Separate Red Emblem Symbol */}
              <div className="h-10 w-10 flex items-center justify-center p-1 rounded-xl bg-slate-950 dark:bg-slate-900 border border-slate-800 shadow-md">
                <img 
                  src="/harvid-emblem-clean.png" 
                  alt="HARVID Emblem" 
                  className="h-8 w-auto object-contain drop-shadow-[0_2px_8px_rgba(220,38,38,0.4)]"
                />
              </div>

              {/* Vector Brand Font Text */}
              <span className="text-2xl font-extrabold tracking-[0.12em] text-slate-900 dark:text-white uppercase font-sans">
                HARVID
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              {companyDetails.description}
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-red-600 transition-colors" title="Developer Hub">
                <Code2 className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-red-600 transition-colors" title="Global Network">
                <Globe className="w-4 h-4" />
              </a>
              <a href={companyDetails.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors" title="WhatsApp Us">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wider text-slate-900 dark:text-white uppercase">Solutions</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Custom SaaS Platforms</button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-red-600 dark:hover:text-red-400 transition-colors">AI & BI Analytics</button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Bar & Club OS</button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Systems Integration</button>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wider text-slate-900 dark:text-white uppercase">Software Suite</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => scrollTo('products')} className="hover:text-red-600 dark:hover:text-red-400 transition-colors">HARVID Cloud Studio™</button>
              </li>
              <li>
                <button onClick={() => scrollTo('products')} className="hover:text-red-600 dark:hover:text-red-400 transition-colors">HARVID Bar & Club OS™</button>
              </li>
              <li>
                <button onClick={() => scrollTo('products')} className="hover:text-red-600 dark:hover:text-red-400 transition-colors">HARVID Intelligence AI™</button>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-wider text-slate-900 dark:text-white uppercase">Studio Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>{companyDetails.contact.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-red-600 shrink-0" />
                <a href={`mailto:${companyDetails.contact.email}`} className="hover:text-red-600 transition-colors font-medium">
                  {companyDetails.contact.email}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-red-600 shrink-0" />
                <a href={`tel:${companyDetails.contact.phone}`} className="hover:text-red-600 transition-colors font-medium">
                  {companyDetails.contact.displayPhone}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} HARVID Tech & Software Solutions. Founded by A. Vasanth & T. S. Padmesh.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Security Overview</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
