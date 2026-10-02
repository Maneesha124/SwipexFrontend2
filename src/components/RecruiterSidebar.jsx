import React from 'react';
import { LayoutDashboard, PlusCircle, Users, BarChart3, Flame, LogOut } from 'lucide-react';

export default function RecruiterSidebar({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard Overview', icon: LayoutDashboard },
    { id: 'postjob', label: 'Post a New Job', icon: PlusCircle, badge: '+Fast' },
    { id: 'applicants', label: 'Applicant Review Pool', icon: Users, badge: '28' },
    { id: 'analytics', label: 'Hiring Analytics', icon: BarChart3 },
  ];

  return (
    <aside className="w-64 bg-brand-dark text-slate-300 flex-shrink-0 flex flex-col justify-between border-r border-slate-800 h-screen sticky top-0 z-30 p-5">
      <div>
        <div className="flex items-center gap-3 mb-8 px-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-600/30 text-white font-extrabold text-xl">
            <Flame className="w-6 h-6 fill-current" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-extrabold text-white tracking-tight">Swipe<span className="text-brand-orange">X</span></span>
              <span className="inline-block w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block -mt-0.5">Recruiter Portal</span>
          </div>
        </div>

        <nav className="space-y-1.5">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-brand-orange text-white shadow-md shadow-orange-600/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className={`ml-auto text-[10px] px-1.5 py-0.5 rounded font-semibold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="pt-4 border-t border-slate-800">
        <div
          onClick={() => setActiveTab('profile')}
          className="p-3 rounded-2xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 flex items-center justify-between cursor-pointer group transition-all"
        >
          <div className="flex items-center gap-2.5">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
              alt="Sarah Jenkins"
              className="w-9 h-9 rounded-xl object-cover border border-brand-orange/60"
            />
            <div>
              <div className="text-xs font-bold text-white group-hover:text-brand-orange transition-colors">Sarah Jenkins</div>
              <div className="text-[10px] text-slate-400">Acme Corp Recruiter</div>
            </div>
          </div>
          <button className="p-1.5 text-slate-400 hover:text-rose-400 rounded-lg">
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
