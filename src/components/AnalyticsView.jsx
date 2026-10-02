import React from 'react';

export default function AnalyticsView() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-extrabold text-slate-900">Hiring Velocity & Funnel Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Swipe-to-Apply Ratio</span>
          <div className="text-3xl font-extrabold text-brand-orange mt-2">38.4%</div>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Avg Time-to-Shortlist</span>
          <div className="text-3xl font-extrabold text-emerald-600 mt-2">4.2 Hours</div>
        </div>
      </div>
    </div>
  );
}
