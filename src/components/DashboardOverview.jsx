import React from 'react';
import { Briefcase, FileText, CheckCircle, Star, TrendingUp, Calendar, Plus } from 'lucide-react';

export default function DashboardOverview({ onNavigate }) {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold text-slate-900">Recruiter Dashboard Overview</h1>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold border border-emerald-200">
              Live Stream Active
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">Real-time candidate pipeline and swipe engagement velocity.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-sm flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            <span>Last 30 Days</span>
          </button>
          <button
            onClick={() => onNavigate('postjob')}
            className="px-3.5 py-2 rounded-xl bg-brand-orange hover:bg-orange-700 text-white text-xs font-bold shadow-sm shadow-orange-600/30 flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>New Job Post</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Active Job Posts</span>
            <div className="w-8 h-8 rounded-xl bg-orange-100 text-brand-orange flex items-center justify-center">
              <Briefcase className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-slate-900">6 <span className="text-sm font-semibold text-slate-400">Active</span></div>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>2 posted this week</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Applications Received</span>
            <div className="w-8 h-8 rounded-xl bg-blue-100 text-brand-blue flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-slate-900">142 <span className="text-sm font-semibold text-slate-400">Applicants</span></div>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+38% swipe conversion</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Shortlisted</span>
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <CheckCircle className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-slate-900">28 <span className="text-sm font-semibold text-slate-400">Candidates</span></div>
          <div className="mt-2 text-xs text-slate-500 font-medium">9 scheduled for interviews</div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Avg ATS Match</span>
            <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
              <Star className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-slate-900">84% <span className="text-sm font-semibold text-emerald-600">High Match</span></div>
          <div className="mt-2 text-xs text-purple-700 font-semibold">AI algorithmic calibration</div>
        </div>
      </div>
    </div>
  );
}
