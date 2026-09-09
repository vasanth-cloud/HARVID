import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles,
  MessageSquare,
  Building2,
  ExternalLink
} from 'lucide-react';
import { companyDetails } from '../../data/harvidData';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Custom Cloud & SaaS Web Platforms',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build email body & mailto trigger
    const subject = encodeURIComponent(`HARVID Website Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    
    // Open default mail client directed to harvidtech@gmail.com
    window.location.href = `mailto:${companyDetails.contact.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      onShowToast && onShowToast('Inquiry pre-filled! Check your email app or click WhatsApp below to send directly.');
    }, 800);
  };

  return (
    <section id="contact" className="py-24 border-t border-slate-200 dark:border-slate-800 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider">
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Connect with HARVID</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Schedule a Technical Consultation
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Have a custom software project or need an enterprise system consultation? Reach out directly to founders A. Vasanth & T. S. Padmesh.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white dark:bg-slate-900 p-5 sm:p-8 rounded-2xl sm:rounded-[32px] border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-6">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-red-600 shrink-0" />
                <span>Contact Details</span>
              </h3>

              <div className="space-y-3.5 text-sm text-slate-900 dark:text-white">
                
                {/* Email */}
                <div className="flex items-center space-x-3.5 p-3.5 sm:p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800">
                  <Mail className="w-5 h-5 text-red-600 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <strong className="block text-[11px] font-bold uppercase text-slate-500">Official Email</strong>
                    <a 
                      href={`mailto:${companyDetails.contact.email}`} 
                      className="text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-red-600 transition-colors truncate block"
                    >
                      {companyDetails.contact.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-3.5 p-3.5 sm:p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800">
                  <PhoneCall className="w-5 h-5 text-red-600 shrink-0" />
                  <div>
                    <strong className="block text-[11px] font-bold uppercase text-slate-500">Phone / Call</strong>
                    <a 
                      href={`tel:${companyDetails.contact.phone}`} 
                      className="text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-red-600 transition-colors"
                    >
                      {companyDetails.contact.displayPhone}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-3.5 p-3.5 sm:p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800">
                  <MapPin className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[11px] font-bold uppercase text-slate-500">Studio Location</strong>
                    <span className="text-xs sm:text-sm font-semibold">{companyDetails.contact.address}</span>
                  </div>
                </div>

              </div>

              {/* Direct WhatsApp CTA */}
              <div className="pt-2">
                <a
                  href={companyDetails.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-full text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/20 text-center"
                >
                  <MessageSquare className="w-4 h-4 fill-current shrink-0" />
                  <span>Chat on WhatsApp ({companyDetails.contact.phone})</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              </div>

            </div>

          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-5 sm:p-8 rounded-2xl sm:rounded-[32px] border border-slate-200/80 dark:border-slate-800 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-red-500 text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-red-500 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Phone / Contact No.
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 6381901759"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-red-500 text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Primary Service Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-red-500 text-sm"
                  >
                    <option value="Custom Cloud SaaS">Custom Cloud & SaaS Web Platform</option>
                    <option value="AI & BI Analytics">AI & Business Intelligence Engine</option>
                    <option value="Bar & Club OS">Bar & Club Management OS</option>
                    <option value="System Integration">Enterprise System & API Integration</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  Project Message / Requirements *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your software goals or business requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-red-500 text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-bold text-white bg-red-600 hover:bg-red-700 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-red-500/20 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Preparing Email...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5 shrink-0" />
                    <span>Send Inquiry to harvidtech@gmail.com</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
