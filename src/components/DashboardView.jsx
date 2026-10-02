import React from 'react';

export default function DashboardView({ swipeCount, appliedJobs, savedJobs, setActiveTab, showToast }) {
  return (
    <div className="w-full space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-extrabold uppercase tracking-wider mb-1">
            Candidate Workspace
          </div>
          <h1 className="text-3xl font-black text-[#0F172A] tracking-tight">
            Job Application Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Monitor submission states, low competition roles, and match conversion pipeline.
          </p>
        </div>
        <button 
          onClick={() => setActiveTab('feed')}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#EA580C] hover:bg-orange-700 text-white font-extrabold text-xs shadow-md transition-all self-start sm:self-auto"
        >
          <span>Back to Swipe Feed 🎴</span>
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">Total Swipes</span>
            <div className="w-9 h-9 rounded-2xl bg-orange-100 text-[#EA580C] flex items-center justify-center">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.75 2.25c-.26 0-.5.13-.64.35L8.5 7.85l-1.39-1.85a.75.75 0 0 0-1.2.01L2.21 12.3c-.48.65-.02 1.57.79 1.57h2.06c.07 2.1 1.25 4.01 3.12 5.03 2.18 1.19 4.88.94 6.78-.63 1.9-1.57 2.65-4.09 1.9-6.38l1.79-1.79a.75.75 0 0 0-.25-1.25l-5.2-1.73-.25-.07a.75.75 0 0 0-.2-.02Z"></path>
              </svg>
            </div>
          </div>
          <div className="text-3xl sm:text-4xl font-black text-[#0F172A]">{swipeCount}</div>
          <div className="text-[11px] font-bold text-emerald-600 flex items-center gap-1 mt-1.5">
            <span>↑ +14 today</span>
            <span className="text-slate-400 font-normal">• 92% pass rate</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">Applications</span>
            <div className="w-9 h-9 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
          </div>
          <div className="text-3xl sm:text-4xl font-black text-[#0F172A]">{appliedJobs.length}</div>
          <div className="text-[11px] font-bold text-blue-600 flex items-center gap-1 mt-1.5">
            <span>● 2 Shortlisted</span>
            <span className="text-slate-400 font-normal">• 1 Interview</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">Saved Jobs</span>
            <div className="w-9 h-9 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
              </svg>
            </div>
          </div>
          <div className="text-3xl sm:text-4xl font-black text-[#0F172A]">{savedJobs.length}</div>
          <div className="text-[11px] font-bold text-amber-600 flex items-center gap-1 mt-1.5">
            <span>★ High priority</span>
            <span className="text-slate-400 font-normal">• Ready to apply</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">Avg ATS Score</span>
            <div className="w-9 h-9 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
          </div>
          <div className="text-3xl sm:text-4xl font-black text-[#0F172A]">82%</div>
          <div className="text-[11px] font-bold text-emerald-600 flex items-center gap-1 mt-1.5">
            <span>✓ Top 10% Match</span>
            <span className="text-slate-400 font-normal">• Recruiter ready</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-lg font-black text-[#0F172A] flex items-center gap-2">
              <span>📋</span>
              <span>Active Application Tracker</span>
            </h3>
            <p className="text-xs text-slate-500 font-medium">Real-time status tracking with direct applicant competition monitors</p>
          </div>
          <span className="text-xs font-bold text-[#EA580C] bg-orange-50 px-3.5 py-1.5 rounded-xl border border-orange-100 self-start sm:self-auto">
            {appliedJobs.length} Recent Submissions
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 text-slate-500 font-extrabold uppercase text-[10px] tracking-wider border-b border-slate-200">
                <th className="py-4 px-6">Job Title</th>
                <th className="py-4 px-6">Company</th>
                <th className="py-4 px-6">Applied Date</th>
                <th className="py-4 px-6">Applicants Count</th>
                <th className="py-4 px-6">Status Badge</th>
                <th className="py-4 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {appliedJobs.map((app) => (
                <tr key={app.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6">
                    <div className="font-black text-slate-900">{app.title}</div>
                    <div className="text-[10px] text-slate-400">{app.type}</div>
                  </td>
                  <td className="py-4 px-6 font-bold text-slate-800">{app.company}</td>
                  <td className="py-4 px-6 text-slate-500">{app.appliedDate}</td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center gap-1.5 font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg">
                      {app.applicantsCount}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    {app.status === 'Shortlisted' ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-200">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        Shortlisted
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-amber-100 text-amber-800 border border-amber-200">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        {app.status}
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button 
                      onClick={() => showToast(`Opening status timeline for ${app.company}`, "🕒")}
                      className="text-[#EA580C] hover:text-orange-800 font-extrabold text-xs hover:underline"
                    >
                      View Timeline
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
