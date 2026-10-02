import React from 'react';
import { CheckCircle2, Award, Briefcase, ChevronRight } from 'lucide-react';

export default function RoleBreakdown({ job }) {
  if (!job) return null;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
      <div className="border-b border-slate-100 pb-4">
        <h3 className="text-lg font-bold text-slate-900">Role & Match Breakdown</h3>
        <p className="text-xs text-slate-500 mt-0.5">Automated ATS compatibility assessment</p>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Matched Competencies</h4>
          <div className="space-y-2">
            {job.tags.map((tag) => (
              <div key={tag} className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-100 text-xs text-emerald-950 font-medium">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  {tag}
                </span>
                <span className="text-[10px] font-bold text-emerald-700 uppercase">Strong Match</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
            <Award className="w-4 h-4 text-brand-blue" />
            <span>AI Calibration Note</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Your recent work with modern JavaScript state flows matches 94% of applicant criteria for this position.
          </p>
        </div>
      </div>
    </div>
  );
}
