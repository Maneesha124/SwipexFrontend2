import React from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function ApplicantsView({ onBack }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900">Applicant Review Pool</h2>
          <p className="text-xs text-slate-500">28 Shortlisted candidates ready for review.</p>
        </div>
        <button onClick={onBack} className="px-3.5 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 bg-white flex items-center gap-1.5">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Dashboard</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 space-y-3">
          <div className="p-4 rounded-2xl bg-white border-2 border-brand-orange shadow-md">
            <div className="flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" alt="Alex" className="w-12 h-12 rounded-xl object-cover" />
              <div>
                <h4 className="text-sm font-extrabold text-slate-900">Alex Morgan</h4>
                <p className="text-xs text-slate-500">Fullstack Developer • 5 yrs exp</p>
                <span className="inline-block mt-1 px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">92% Match</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
          <h3 className="text-lg font-bold text-slate-900">Alex Morgan Diagnostic</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">✓ React.js (Expert)</span>
            <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">✓ FastAPI & Python</span>
          </div>
          <button className="px-5 py-2.5 rounded-xl bg-brand-orange text-white text-xs font-bold shadow-md">
            Shortlist Candidate
          </button>
        </div>
      </div>
    </div>
  );
}
