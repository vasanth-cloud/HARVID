import React, { useState } from 'react';
import { 
  Activity, 
  Layers, 
  LifeBuoy, 
  CheckCircle2, 
  ArrowLeft, 
  Plus, 
  LogOut, 
  Server, 
  Beer, 
  Sun, 
  Moon, 
  Database,
  Clock,
  Target
} from 'lucide-react';
import { clientPortalMockData } from '../../data/harvidData';
import { useTheme } from '../../context/ThemeContext';

export default function ClientPortal({ onClose, onShowToast }) {
  const [activeTab, setActiveTab] = useState('projects'); // projects, metrics, tickets
  const [tickets, setTickets] = useState(clientPortalMockData.tickets);
  const [newTicketSubject, setNewTicketSubject] = useState('');
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleCreateTicket = (e) => {
    e.preventDefault();
    if (!newTicketSubject.trim()) return;

    const newTicket = {
      id: `TCK-${Math.floor(100 + Math.random() * 900)}`,
      subject: newTicketSubject,
      status: 'Open',
      assignedTo: 'Vasanth A.'
    };

    setTickets([newTicket, ...tickets]);
    setNewTicketSubject('');
    setIsTicketModalOpen(false);
    onShowToast && onShowToast(`Support task ${newTicket.id} created!`);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-50 dark:bg-slate-950 backdrop-blur-xl overflow-y-auto min-h-screen text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-200">
      
      {/* Top Header Bar */}
      <header className="bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl px-4 sm:px-8 py-4 flex items-center justify-between sticky top-0 z-20 border-b border-slate-200/80 dark:border-slate-800/80">
        <div className="flex items-center space-x-4">
          <button
            onClick={onClose}
            className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Site</span>
          </button>

          <div className="h-5 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />

          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-slate-900 dark:bg-white flex items-center justify-center text-white dark:text-slate-950 shrink-0">
              <Beer className="w-4 h-4" />
            </div>
            <span className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg tracking-tight">
              HARVID Portal
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-3">
          
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 flex items-center justify-center transition-all"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          <div className="hidden sm:flex items-center space-x-2 bg-slate-100 dark:bg-slate-900 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 text-xs">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-slate-800 dark:text-slate-200">{clientPortalMockData.clientName}</span>
          </div>

          <button 
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-red-500 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            title="Close Portal"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-8 py-8 space-y-8">
        
        {/* Navigation Tabs */}
        <div className="flex items-center space-x-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          {[
            { id: 'projects', label: 'Project Requirements & Deliverables', icon: Layers },
            { id: 'metrics', label: 'System Overview', icon: Server },
            { id: 'tickets', label: 'Support & Tasks', icon: LifeBuoy }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-900'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: PROJECTS & DELIVERABLES */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Project Modules</h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">Clear breakdown of what is required and what has been delivered.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {clientPortalMockData.projects.map((proj) => (
                <div key={proj.id} className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-[32px] border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-6">
                  
                  {/* Card Header: Heading + Status Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                    <div className="flex items-center space-x-3">
                      <span className="px-3 py-0.5 rounded-full text-xs font-mono font-bold text-sky-600 dark:text-sky-400 bg-sky-500/10 border border-sky-500/20">
                        {proj.id}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{proj.name}</h3>
                    </div>

                    <div className="flex items-center space-x-3">
                      <span className={`text-xs font-bold px-3.5 py-1 rounded-full border ${proj.badgeColor}`}>
                        {proj.status}
                      </span>
                    </div>
                  </div>

                  {/* Requirements vs Delivered Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* What They Want */}
                    <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 space-y-2">
                      <div className="flex items-center space-x-2 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        <Target className="w-4 h-4 text-sky-500" />
                        <span>What Is Required (Client Goals)</span>
                      </div>
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                        {proj.requirement}
                      </p>
                    </div>

                    {/* What We Have Done */}
                    <div className="p-5 rounded-2xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 space-y-2">
                      <div className="flex items-center space-x-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>What We Have Done (Delivered Work)</span>
                      </div>
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                        {proj.delivered}
                      </p>
                    </div>

                  </div>

                  {/* Clean Progress Bar */}
                  <div className="space-y-2 pt-2">
                    <div className="flex justify-between text-xs text-slate-900 dark:text-white font-semibold">
                      <span>Module Completion Progress</span>
                      <span className="text-sky-600 dark:text-sky-400 font-mono font-bold">{proj.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-950 h-3 rounded-full overflow-hidden p-0.5 border border-slate-200 dark:border-slate-800">
                      <div 
                        className="bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-400 h-full rounded-full transition-all duration-500" 
                        style={{ width: `${proj.progress}%` }} 
                      />
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: SYSTEM OVERVIEW */}
        {activeTab === 'metrics' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-[32px] border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-6">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <Database className="w-5 h-5 text-sky-500" />
                <span>Bar OS Platform Overview</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-[24px] bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 space-y-2">
                  <span className="text-xs font-semibold text-slate-500 uppercase">System Status</span>
                  <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">Active & Online</div>
                  <p className="text-xs text-slate-500">FastAPI backend and PostgreSQL database online.</p>
                </div>

                <div className="p-6 rounded-[24px] bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 space-y-2">
                  <span className="text-xs font-semibold text-slate-500 uppercase">API Performance</span>
                  <div className="text-2xl font-black text-sky-600 dark:text-sky-400 font-mono">Sub-20ms Response</div>
                  <p className="text-xs text-slate-500">Fast gate verification & POS inventory updates.</p>
                </div>

                <div className="p-6 rounded-[24px] bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 space-y-2">
                  <span className="text-xs font-semibold text-slate-500 uppercase">System Security</span>
                  <div className="text-2xl font-black text-indigo-600 dark:text-indigo-400 font-mono">Encrypted Access</div>
                  <p className="text-xs text-slate-500">Role-based user permissions & audit logs.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SUPPORT TICKETS */}
        {activeTab === 'tickets' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Tasks & Requests</h3>
              <button
                onClick={() => setIsTicketModalOpen(true)}
                className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-slate-900 dark:bg-white dark:text-slate-950 shadow-md"
              >
                <Plus className="w-4 h-4 inline mr-1" />
                <span>Submit Task</span>
              </button>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-[28px] border border-slate-200/80 dark:border-slate-800 shadow-xl overflow-hidden">
              <div className="p-5 border-b border-slate-200 dark:border-slate-800 text-xs font-bold uppercase text-slate-500 grid grid-cols-12 gap-4">
                <span className="col-span-3">Task ID</span>
                <span className="col-span-6">Description</span>
                <span className="col-span-3">Status</span>
              </div>

              <div className="divide-y divide-slate-200 dark:divide-slate-800">
                {tickets.map((tck) => (
                  <div key={tck.id} className="p-5 text-xs grid grid-cols-12 gap-4 items-center hover:bg-slate-50 dark:hover:bg-slate-950 transition-colors">
                    <span className="col-span-3 font-mono font-bold text-sky-600 dark:text-sky-400">{tck.id}</span>
                    <span className="col-span-6 font-semibold text-slate-900 dark:text-white">{tck.subject}</span>
                    <span className="col-span-3">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold border ${
                        tck.status === 'Open'
                          ? 'bg-amber-500/10 text-amber-600 dark:text-amber-300 border-amber-500/30'
                          : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border-emerald-500/30'
                      }`}>
                        {tck.status}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Ticket Modal */}
      {isTicketModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-[28px] border border-slate-200 dark:border-slate-800 max-w-md w-full space-y-6 shadow-2xl">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">Submit New Task Request</h4>
            <form onSubmit={handleCreateTicket} className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Task Description</label>
                <input
                  type="text"
                  required
                  placeholder="Describe what feature or update is needed..."
                  value={newTicketSubject}
                  onChange={(e) => setNewTicketSubject(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="flex items-center justify-end space-x-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsTicketModalOpen(false)}
                  className="px-4 py-2 rounded-full text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-slate-900 dark:bg-white dark:text-slate-950"
                >
                  Submit Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
