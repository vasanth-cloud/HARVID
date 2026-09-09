import React from 'react';
import { CheckCircle2, Sparkles, X } from 'lucide-react';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
      <div className="glass-panel px-5 py-4 rounded-2xl border border-sky-500/40 bg-slate-900/95 text-white flex items-center space-x-3 shadow-2xl max-w-md">
        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
        <p className="text-xs sm:text-sm font-medium leading-tight text-slate-200">
          {message}
        </p>
        <button
          onClick={onClose}
          className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 shrink-0"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
