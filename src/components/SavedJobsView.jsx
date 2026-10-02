import React from 'react';

export default function SavedJobsView({ savedJobs, setSavedJobs, setActiveTab, showToast }) {
  const handleRemoveSaved = (id) => {
    setSavedJobs(prev => prev.filter(j => j.id !== id));
    showToast("Removed job from saved bookmarks", "🗑️");
  };

  return (
    <div className="w-full space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-extrabold uppercase tracking-wider mb-1">
            ⭐ Bookmarks Vault
          </div>
          <h1 className="text-3xl font-black text-[#0F172A] tracking-tight">
            Saved Opportunities ({savedJobs.length})
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Roles you bookmarked during discovery. Review full requirements or fire off priority applications.
          </p>
        </div>
        <button 
          onClick={() => setActiveTab('feed')}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#EA580C] hover:bg-orange-700 text-white font-extrabold text-xs shadow-md transition-all self-start sm:self-auto"
        >
          <span>Discover More Jobs 🎴</span>
        </button>
      </div>

      {savedJobs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedJobs.map((job) => (
            <div key={job.id} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0F172A] text-white flex items-center justify-center font-black text-lg">
                    {job.initials}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase bg-orange-50 text-[#EA580C] border border-orange-200">
                    {job.type}
                  </span>
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">{job.company}</div>
                <h3 className="text-lg font-black text-[#0F172A] leading-snug mt-0.5 mb-2">{job.title}</h3>
                
                <div className="space-y-1.5 text-xs text-slate-600 mb-4">
                  <div className="font-semibold text-[#EA580C]">{job.salary}</div>
                  <div className="text-slate-500">{job.location}</div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {job.skills.map((s, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-bold">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => handleRemoveSaved(job.id)}
                  className="p-2 text-slate-400 hover:text-rose-600 rounded-xl hover:bg-rose-50 transition-colors"
                  title="Remove Bookmark"
                >
                  <svg className="w-5 h-5 fill-none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </button>
                
                <button
                  onClick={() => {
                    showToast(`Applied to ${job.company}!`, "🔥");
                    handleRemoveSaved(job.id);
                  }}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-[#EA580C] hover:bg-orange-700 text-white font-extrabold text-xs shadow-md transition-colors text-center"
                >
                  Apply Now 🔥
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 border border-slate-200 text-center max-w-md mx-auto my-12 shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center mx-auto mb-4 text-2xl">
            ⭐
          </div>
          <h3 className="text-xl font-black text-slate-900">No Saved Jobs Yet</h3>
          <p className="text-xs text-slate-500 mt-2 mb-6">
            Click the yellow star on any card in the Swipe Feed to save high-priority roles here for later review.
          </p>
          <button
            onClick={() => setActiveTab('feed')}
            className="px-5 py-2.5 rounded-xl bg-[#EA580C] text-white font-black text-xs shadow-md hover:bg-orange-700 transition-colors"
          >
            Go to Swipe Feed
          </button>
        </div>
      )}
    </div>
  );
}
