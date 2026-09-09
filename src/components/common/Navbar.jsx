import React, { useState } from 'react';
import { 
  Menu, 
  X,
  ChevronRight,
  Sun,
  Moon,
  ArrowRight
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { companyDetails } from '../../data/harvidData';

export default function Navbar({ activeSection, setActiveSection, onOpenQuoteModal }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { id: 'services', label: 'Solutions' },
    { id: 'products', label: 'Software Suite' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Real HARVID Red Emblem + Crystal Clear Font Text */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNavClick('hero')}
          >
            {/* Ultra-Sharp Red Emblem Symbol */}
            <div className="h-10 w-10 flex items-center justify-center p-1 rounded-xl bg-slate-950 dark:bg-slate-900/90 border border-slate-800 shadow-md group-hover:scale-105 transition-transform duration-200">
              <img 
                src="/harvid-emblem-clean.png" 
                alt="HARVID Red Emblem" 
                className="h-8 w-auto object-contain drop-shadow-[0_2px_8px_rgba(220,38,38,0.4)]"
              />
            </div>

            {/* Vector-Sharp Brand Font Text */}
            <span className="text-2xl sm:text-3xl font-extrabold tracking-[0.12em] text-slate-900 dark:text-white uppercase font-sans">
              HARVID
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-red-600 dark:text-red-500 font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden md:flex items-center space-x-4">
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 flex items-center justify-center transition-all border border-slate-200 dark:border-slate-800"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Consultation Button */}
            <button
              onClick={onOpenQuoteModal}
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-500 hover:scale-105 transition-all duration-200 shadow-md flex items-center space-x-2"
            >
              <span>Get Consultation</span>
              <ChevronRight className="w-4 h-4 opacity-80" />
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 px-6 pt-4 pb-8 space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="w-full text-left py-2 text-lg font-semibold text-slate-800 dark:text-slate-200 hover:text-red-600 transition-colors"
            >
              {link.label}
            </button>
          ))}

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
            <button
              onClick={() => { setIsMobileMenuOpen(false); onOpenQuoteModal(); }}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-full text-sm font-semibold text-white bg-red-600 hover:bg-red-700"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
