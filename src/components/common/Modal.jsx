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
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 max-w-xl w-full max-h-[90vh] overflow-y-auto relative space-y-6 shadow-2xl animate-in fade-in zoom-in duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full theme-text-secondary hover:text-sky-500 hover:bg-slate-500/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-500 dark:text-sky-400 text-xs font-semibold">
            <Beer className="w-3.5 h-3.5" />
            <span>HARVID Technical Consultation</span>
          </div>
          <h3 className="text-2xl font-black theme-text-primary">
            Schedule a Demo with Vasanth A.
          </h3>
          <p className="text-xs sm:text-sm theme-text-secondary">
            Review your Bar & Club software requirements or custom FastAPI project architecture directly with our lead developer.
          </p>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 dark:text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold theme-text-primary">Consultation Request Confirmed!</h4>
            <p className="text-xs theme-text-secondary">
              We've dispatched your details to Vasanth A.'s engineering desk.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold theme-text-primary uppercase">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Vasanth A."
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl theme-bg-subtle border theme-text-primary text-xs focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold theme-text-primary uppercase">Work Email *</label>
                <input
                  type="email"
                  required
                  placeholder="vasanth@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl theme-bg-subtle border theme-text-primary text-xs focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold theme-text-primary uppercase">Organization Name</label>
                <input
                  type="text"
                  placeholder="e.g., Bar / Club / Business"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl theme-bg-subtle border theme-text-primary text-xs focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold theme-text-primary uppercase">Project Type</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl theme-bg-subtle border theme-text-primary text-xs focus:outline-none focus:border-sky-500"
                >
                  <option value="Bar & Club OS Platform">HARVID Bar & Club Management OS</option>
                  <option value="FastAPI Web App">FastAPI & PostgreSQL Backend</option>
                  <option value="Gate Entry VIP">VIP Gate Entry & Member Photo Verification</option>
                  <option value="POS Stock Tally">Stock Receipts & Peg/Bottle Sales Tally</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-sky-500/20"
            >
              <Send className="w-4 h-4" />
              <span>Confirm & Request Consultation</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
