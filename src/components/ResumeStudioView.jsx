import React from 'react';

export default function ResumeStudioView({ showToast }) {
  return (
    <div className="w-full space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-extrabold uppercase tracking-wider mb-1">
            AI Diagnostic Suite
          </div>
          <h1 className="text-3xl font-black text-[#0F172A] tracking-tight">
            AI Resume Studio & ATS Optimizer
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Inspect ATS parser scoring, missing high-value keyword alerts, and instant tailoring suggestions.
          </p>
        </div>
        <button 
          onClick={() => showToast("Triggered re-evaluation against active job listings!", "⚡")}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#EA580C] hover:bg-orange-700 text-white font-extrabold text-xs shadow-md transition-all self-start sm:self-auto"
        >
          <span>⚡ Re-Analyze Resume</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm text-center">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-50 text-[#EA580C] flex items-center justify-center mb-3">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            <h3 className="text-base font-black text-[#0F172A]">Upload Updated Resume</h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">PDF, DOCX up to 10MB</p>
            
            <label className="cursor-pointer inline-flex items-center justify-center px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-extrabold w-full transition-colors">
              <span>Select File from Computer</span>
              <input 
                type="file" 
                className="hidden" 
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    showToast(`Uploaded: ${e.target.files[0].name}`, "📄");
                  }
                }}
              />
            </label>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-500">Active Resume Versions</h4>
            
            <div className="p-3.5 rounded-2xl border-2 border-[#EA580C] bg-orange-50/50 flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#EA580C] text-white flex items-center justify-center font-black text-xs">
                  PDF
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900">AlexMorgan_Fullstack_2025.pdf</div>
                  <div className="text-[10px] text-[#EA580C] font-bold">Active for 1-Click Apply</div>
                </div>
              </div>
              <span className="w-2 h-2 rounded-full bg-[#EA580C]"></span>
            </div>

            <div 
              className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50 flex items-start justify-between hover:bg-white transition-colors cursor-pointer" 
              onClick={() => showToast("Switched active default to Cloud Arch CV", "✅")}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-slate-700 text-white flex items-center justify-center font-black text-xs">
                  PDF
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900">Alex_CloudArch_Specialized.pdf</div>
                  <div className="text-[10px] text-slate-400">Updated 2 weeks ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pb-6 border-b border-slate-100">
            <div className="md:col-span-5 flex flex-col items-center justify-center p-6 bg-slate-50/80 rounded-2xl border border-slate-200/80">
              <div className="relative w-40 h-40 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-slate-200"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                  ></path>
                  <path
                    className="text-[#EA580C] stroke-current"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    strokeDasharray="78, 100"
                    strokeLinecap="round"
                    strokeWidth="3.5"
                  ></path>
                </svg>
                <div className="absolute flex flex-col items-center justify-center text-center">
                  <span className="text-3xl font-black text-[#0F172A]">78%</span>
                  <span className="text-[10px] uppercase font-extrabold text-[#EA580C] tracking-wider">ATS Match Score</span>
                </div>
              </div>
              <span className="mt-3 text-xs font-extrabold text-slate-700">Target Role: Senior Fullstack</span>
            </div>

            <div className="md:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-extrabold border border-emerald-200">
                <span>✓ Tier 1 Recruiter Clearance</span>
              </div>
              <h3 className="text-lg font-black text-slate-900">Your profile matches 8 out of 10 primary keywords.</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Your resume cleanly passes formatting parses. Adding containerization metrics will immediately push your score past 88%.
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <svg className="w-4 h-4 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" fillRule="evenodd"></path>
                </svg>
                <span>Critical Missing Skills Detected:</span>
              </h4>
              <span className="text-[11px] font-bold text-rose-600">-14% Score Impact</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-50 text-rose-700 border border-rose-200 text-xs font-black">
                <span className="w-2 h-2 rounded-full bg-rose-600"></span>
                Docker (Containerization)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-50 text-rose-700 border border-rose-200 text-xs font-black">
                <span className="w-2 h-2 rounded-full bg-rose-600"></span>
                AWS (Cloud Architecture)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                Redis Caching
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-500">
              AI Tailoring Recommendations
            </h4>
            
            <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-200/80 flex items-start gap-3">
              <div className="w-7 h-7 rounded-xl bg-[#EA580C] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-black">
                1
              </div>
              <div>
                <div className="text-xs font-black text-orange-950">Add Metric Quantifications to FastAPI Projects</div>
                <p className="text-xs text-slate-600 mt-0.5">
                  Include concrete performance numbers. Example: <em className="text-slate-800">"Scaled FastAPI endpoints serving 1.4M daily requests with sub-40ms P99 latency."</em>
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <div className="w-7 h-7 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-black">
                2
              </div>
              <div>
                <div className="text-xs font-black text-slate-900">Promote Cloud CI/CD Pipelines</div>
                <p className="text-xs text-slate-600 mt-0.5">
                  Highlight your GitHub Actions & Docker containerization skills in the top Summary section to bypass recruiter filters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
