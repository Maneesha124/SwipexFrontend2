import React from 'react';
import { Briefcase, ArrowLeft, Flame } from 'lucide-react';

export default function PostJobView({ onBack }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900">Post a New Position</h2>
          <p className="text-xs text-slate-500">Published roles appear immediately in target candidates' swipe feeds.</p>
        </div>
        <button
          onClick={onBack}
          className="px-3.5 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 bg-white hover:bg-slate-50 flex items-center gap-1.5"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Dashboard</span>
        </button>
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-8">
        <div className="flex items-center gap-3 pb-5 border-b border-slate-100 mb-6">
          <div className="w-10 h-10 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center border border-orange-100">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-extrabold text-slate-900">Position Configuration</h3>
            <p class="text-xs text-slate-500">Calibrate salary, tech stack, and competition parameters</p>
          </div>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); alert("Job Published Successfully!"); onBack(); }} className="space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Job Title *</label>
            <input
              type="text"
              defaultValue="Senior Fullstack Engineer"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-900 focus:bg-white focus:border-brand-orange transition-all"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Company Type</label>
              <select className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800">
                <option>Startup (Fast Growth)</option>
                <option>MNC (Enterprise Global)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">Work Style</label>
              <select className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800">
                <option>100% Remote (Global)</option>
                <option>Hybrid</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-brand-orange hover:bg-orange-700 text-white text-xs font-extrabold shadow-lg shadow-orange-600/30 transition-all flex items-center justify-center gap-2"
          >
            <Flame className="w-4 h-4 fill-white" />
            <span>Publish Job to Swipe Feed</span>
          </button>
        </form>
      </div>
    </div>
  );
}
