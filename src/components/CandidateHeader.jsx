import React from 'react';
import { Flame, Bell, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CandidateHeader() {
  return (
    <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-30 px-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-xl bg-brand-blue flex items-center justify-center text-white font-extrabold shadow-md shadow-blue-500/20">
          <Flame className="w-5 h-5 fill-current" />
        </div>
        <span className="text-lg font-extrabold text-slate-900 tracking-tight">Swipe<span className="text-brand-blue">X</span></span>
      </div>

      <div className="flex items-center gap-3">
        <Link to="/recruiter" className="text-xs font-bold text-slate-600 hover:text-brand-blue px-3 py-1.5 rounded-xl hover:bg-slate-100 transition-colors">
          Recruiter Workspace →
        </Link>
        <button className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100">
          <Bell className="w-5 h-5" />
        </button>
        <div className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center text-slate-600">
          <User className="w-4 h-4" />
        </div>
      </div>
    </header>
  );
}
