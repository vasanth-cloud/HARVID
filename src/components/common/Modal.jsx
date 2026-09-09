import React, { useState } from 'react';
import { X, Send, Sparkles, CheckCircle2, Beer } from 'lucide-react';
import { companyDetails } from '../../data/harvidData';

export default function Modal({ isOpen, onClose, onShowToast }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Bar & Club OS Platform',
    timeline: 'Immediate (1-2 months)',
    budget: 'Standard Project'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onShowToast && onShowToast('Consultation request received! Vasanth A. will reach out directly.');
      setSubmitted(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-4">
      <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 max-w-xl w-full max-h-[90vh] overflow-y-auto relative space-y-6 shadow-2xl animate-in fade-in zoom-in duration-200 text-slate-900 dark:text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-slate-400 dark:text-slate-400 hover:text-red-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HARVID Technical Consultation</span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white">
            Schedule a Technical Review
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Review your custom software requirements, FastAPI backend architecture, or Bar & Club OS directly with founders A. Vasanth & T. S. Padmesh.
          </p>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white">Consultation Request Confirmed!</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              We've dispatched your project details directly to A. Vasanth's engineering desk.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vasanth A."
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-red-500 text-xs sm:text-sm"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Work Email *</label>
                <input
                  type="email"
                  required
                  placeholder="vasanth@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-red-500 text-xs sm:text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Organization Name</label>
                <input
                  type="text"
                  placeholder="e.g. Enterprise / Business"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-red-500 text-xs sm:text-sm"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Project Service</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-red-500 text-xs sm:text-sm"
                >
                  <option value="Custom Cloud SaaS">Custom Cloud & SaaS Web Platform</option>
                  <option value="AI & BI Analytics">AI & Business Intelligence Engine</option>
                  <option value="Bar & Club OS Platform">HARVID Bar & Club Operating System</option>
                  <option value="System Integration">Enterprise System & API Integration</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full text-sm font-bold text-white bg-red-600 hover:bg-red-700 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-red-500/20"
            >
              <Send className="w-4 h-4" />
              <span>Confirm & Schedule Consultation</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
