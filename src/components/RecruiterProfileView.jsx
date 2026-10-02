import React from 'react';
import { ArrowLeft, CheckCircle, Upload } from 'lucide-react';

export default function RecruiterProfileView({ onBack }) {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900">Recruiter Profile & Settings</h2>
          <p className="text-xs text-slate-500">Manage credentials and public employer branding.</p>
        </div>
        <button onClick={onBack} className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Dashboard</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
        <div className="flex items-center gap-5">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" alt="Sarah" className="w-20 h-20 rounded-2xl object-cover border-2 border-brand-orange" />
          <div>
            <h3 className="text-xl font-extrabold text-slate-900">Sarah Jenkins</h3>
            <p className="text-xs text-slate-500 font-semibold">Talent Acquisition Lead • Acme Corp</p>
          </div>
        </div>
      </div>
    </div>
  );
}
