import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAdmin } from '../../context/AdminContext';

export default function Overview() {
  const navigate = useNavigate();
  const { showToast, flaggedJobs, approveJob, removeJob } = useAdmin();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="space-y-8"
    >
      {/* Header Context */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
            <span>Command Core</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-[#EA580C] font-semibold">System Telemetry &amp; Moderation</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-[#0F172A] mt-1">
            Executive Operations Matrix
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 text-xs font-semibold shadow-xs">
            <span className="material-symbols-outlined text-[16px] text-slate-400">calendar_today</span>
            <span>Live Sync: Oct 24, 2025</span>
          </div>
          <button 
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#EA580C] hover:bg-[#c2410c] text-white text-xs font-bold shadow-md shadow-orange-900/10 transition-all active:scale-[0.98]"
            onClick={() => showToast('Telemetry refreshed from 4 cluster nodes')}
          >
            <span className="material-symbols-outlined text-[16px]">refresh</span>
            <span>Refresh Metrics</span>
          </button>
        </div>
      </div>

      {/* 4 Bento Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between hover:shadow-md hover:border-orange-200 cursor-pointer transition-all" onClick={() => navigate('/users')}>
          <div className="flex items-start justify-between">
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Total Candidates</span>
              <span className="text-3xl font-extrabold text-[#0F172A] mt-2">1,248</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#EA580C]">
              <span className="material-symbols-outlined text-[24px]">group</span>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
            <span className="material-symbols-outlined text-[16px]">trending_up</span>
            <span>+114 registered this week</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between hover:shadow-md hover:border-blue-200 cursor-pointer transition-all" onClick={() => navigate('/users')}>
          <div className="flex items-start justify-between">
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Verified Recruiters</span>
              <span className="text-3xl font-extrabold text-[#0F172A] mt-2">86</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
              <span className="material-symbols-outlined text-[24px]">domain_verification</span>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-slate-600">
            <span className="material-symbols-outlined text-emerald-600 text-[16px]">verified</span>
            <span>99.2% verification rate</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between hover:shadow-md hover:border-amber-200 cursor-pointer transition-all" onClick={() => navigate('/moderation')}>
          <div className="flex items-start justify-between">
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Active Listings</span>
              <span className="text-3xl font-extrabold text-[#0F172A] mt-2">324</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600">
              <span className="material-symbols-outlined text-[24px]">work</span>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-slate-600">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            <span>42 low-competition slots</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Swipes Processed</span>
              <span className="text-3xl font-extrabold text-[#0F172A] mt-2">18,420</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#EA580C]">
              <span className="material-symbols-outlined text-[24px]">bolt</span>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
            <span className="material-symbols-outlined text-[16px]">speed</span>
            <span>+2,480 today • 34% apply rate</span>
          </div>
        </div>
      </div>

      {/* Analytics & Infrastructure Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#0F172A]">Daily Swipe Velocity &amp; Application Stream</span>
              <span className="text-xs text-[#64748B]">Real-time candidate decision funnel analysis</span>
            </div>
            <div className="flex items-center bg-slate-100 p-1 rounded-xl self-start">
              <button className="px-3 py-1.5 rounded-lg bg-white text-[#EA580C] text-xs font-bold shadow-xs">Last 7 Days</button>
              <button className="px-3 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 text-xs font-semibold transition-colors">Last 30 Days</button>
              <button className="px-3 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 text-xs font-semibold transition-colors">Q4 2025</button>
            </div>
          </div>

          <div className="flex items-center gap-6 pt-4 pb-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#EA580C]"></span>
              <span className="text-xs font-semibold text-slate-600">Swipes Flow</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-600"></span>
              <span className="text-xs font-semibold text-slate-600">Mutual Matches</span>
            </div>
          </div>

          {/* SVG Chart */}
          <div className="relative w-full h-72 my-2 flex items-center justify-center">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 700 240" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="gradientPrimaryOrange" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#EA580C" stopOpacity="0.25"></stop>
                  <stop offset="100%" stopColor="#EA580C" stopOpacity="0.0"></stop>
                </linearGradient>
                <linearGradient id="gradientEmerald" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#059669" stopOpacity="0.20"></stop>
                  <stop offset="100%" stopColor="#059669" stopOpacity="0.0"></stop>
                </linearGradient>
              </defs>
              <line x1="40" y1="25" x2="680" y2="25" stroke="#f1f5f9" strokeWidth="1.5" strokeDasharray="4 4"></line>
              <line x1="40" y1="75" x2="680" y2="75" stroke="#f1f5f9" strokeWidth="1.5" strokeDasharray="4 4"></line>
              <line x1="40" y1="125" x2="680" y2="125" stroke="#f1f5f9" strokeWidth="1.5" strokeDasharray="4 4"></line>
              <line x1="40" y1="180" x2="680" y2="180" stroke="#e2e8f0" strokeWidth="1.5"></line>
              
              <text x="32" y="29" fill="#94A3B8" textAnchor="end" className="text-[11px] font-sans">4.0k</text>
              <text x="32" y="79" fill="#94A3B8" textAnchor="end" className="text-[11px] font-sans">2.5k</text>
              <text x="32" y="129" fill="#94A3B8" textAnchor="end" className="text-[11px] font-sans">1.0k</text>
              <text x="32" y="184" fill="#94A3B8" textAnchor="end" className="text-[11px] font-sans">0</text>

              <path d="M50,150 C120,130 160,85 230,105 C300,125 350,50 420,40 C490,30 550,90 610,65 C640,52 670,45 675,42 L675,180 L50,180 Z" fill="url(#gradientPrimaryOrange)"></path>
              <path d="M50,150 C120,130 160,85 230,105 C300,125 350,50 420,40 C490,30 550,90 610,65 C640,52 670,45 675,42" fill="none" stroke="#EA580C" strokeWidth="3.5" strokeLinecap="round"></path>

              <path d="M50,170 C120,165 160,140 230,150 C300,160 350,110 420,95 C490,80 550,125 610,110 C640,100 670,95 675,92 L675,180 L50,180 Z" fill="url(#gradientEmerald)"></path>
              <path d="M50,170 C120,165 160,140 230,150 C300,160 350,110 420,95 C490,80 550,125 610,110 C640,100 670,95 675,92" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round"></path>

              <circle cx="420" cy="40" r="5" fill="#EA580C"></circle>
              <circle cx="420" cy="40" r="10" fill="none" stroke="#EA580C" strokeWidth="2" className="animate-ping"></circle>

              <g transform="translate(365, -12)">
                <rect width="115" height="38" rx="8" fill="#0F172A" filter="drop-shadow(0 4px 10px rgba(0,0,0,0.18))"></rect>
                <text x="57" y="16" fill="#94A3B8" textAnchor="middle" className="text-[10px] font-bold tracking-wider">PEAK SATURDAY</text>
                <text x="57" y="31" fill="#F97316" textAnchor="middle" className="text-[12px] font-extrabold">3,840 Swipes</text>
              </g>

              <text x="50" y="205" fill="#94A3B8" textAnchor="middle" className="text-[11px] font-sans font-medium">Mon</text>
              <text x="150" y="205" fill="#94A3B8" textAnchor="middle" className="text-[11px] font-sans font-medium">Tue</text>
              <text x="250" y="205" fill="#94A3B8" textAnchor="middle" className="text-[11px] font-sans font-medium">Wed</text>
              <text x="350" y="205" fill="#94A3B8" textAnchor="middle" className="text-[11px] font-sans font-medium">Thu</text>
              <text x="450" y="205" fill="#94A3B8" textAnchor="middle" className="text-[11px] font-sans font-medium">Fri</text>
              <text x="550" y="205" fill="#94A3B8" textAnchor="middle" className="text-[11px] font-sans font-medium">Sat</text>
              <text x="650" y="205" fill="#94A3B8" textAnchor="middle" className="text-[11px] font-sans font-medium">Sun</text>
            </svg>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4 mt-2 bg-slate-50 border border-slate-100 p-4 rounded-xl">
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-[#64748B]">Peak Daily Volume</span>
              <span className="text-xl font-extrabold text-[#0F172A] mt-1">3,840</span>
              <span className="text-[11px] font-medium text-emerald-600 mt-0.5">↑ Record High Q4</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-[#64748B]">Avg Swipes / Candidate</span>
              <span className="text-xl font-extrabold text-[#0F172A] mt-1">14.8</span>
              <span className="text-[11px] font-medium text-slate-500 mt-0.5">Per 24h active cycle</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-[#64748B]">Match Conversion</span>
              <span className="text-xl font-extrabold text-[#EA580C] mt-1">18.6%</span>
              <span className="text-[11px] font-medium text-emerald-600 mt-0.5">+2.4% vs last cycle</span>
            </div>
          </div>
        </div>

        {/* Right Infrastructure Telemetry */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col gap-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#0F172A]">Platform Infrastructure</span>
              <span className="text-xs text-[#64748B]">Operational clusters &amp; edge nodes</span>
            </div>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" title="Telemetry Live"></span>
          </div>

          <div className="flex flex-col gap-3">
            <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#EA580C] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[18px]">speed</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#0F172A]">Avg API Latency</span>
                  <span className="text-[11px] text-[#64748B]">Edge Gateway Ping</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-2.5 py-1 rounded-lg">
                <span className="text-xs font-bold text-emerald-600">120ms</span>
                <span className="text-[10px] font-semibold text-slate-500 uppercase">Optimal</span>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[18px]">neurology</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#0F172A]">ATS Engine v4.2</span>
                  <span className="text-[11px] text-[#64748B]">Semantic Scoring</span>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-600 bg-white border border-slate-200 px-2.5 py-1 rounded-lg">99.98% Up</span>
            </div>

            <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[18px]">database</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#0F172A]">Vector Search DB</span>
                  <span className="text-[11px] text-[#64748B]">Role embeddings</span>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-600 bg-white border border-slate-200 px-2.5 py-1 rounded-lg">42ms Lookup</span>
            </div>

            <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[18px]">memory</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#0F172A]">Redis Key Store</span>
                  <span className="text-[11px] text-[#64748B]">Live User Sessions</span>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-600 bg-white border border-slate-200 px-2.5 py-1 rounded-lg">12.4k Keys</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Fast Control Dispatch</span>
            <div className="grid grid-cols-1 gap-2 mt-1">
              <button className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-[#0F172A] text-xs font-semibold transition-colors group" onClick={() => showToast('Platform cache purged across 8 edge POPs')}>
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-[#EA580C]">cached</span>
                  <span>Flush Platform Cache</span>
                </span>
                <span className="material-symbols-outlined text-[16px] text-slate-400 group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
              </button>
              <button className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-[#0F172A] text-xs font-semibold transition-colors group" onClick={() => showToast('Vector DB re-indexing task queued (#IDX-994)')}>
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-[#EA580C]">hub</span>
                  <span>Re-index Embeddings</span>
                </span>
                <span className="material-symbols-outlined text-[16px] text-slate-400 group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
              </button>
              <button className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-[#0F172A] text-xs font-semibold transition-colors group" onClick={() => showToast('CSV Export generated (audit_log_20251024.csv)')}>
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-slate-500">download</span>
                  <span>Export Audit Report (CSV)</span>
                </span>
                <span className="material-symbols-outlined text-[16px] text-slate-400 group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Flagged Jobs Moderation Preview Data Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
        <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100">
          <div className="flex items-center gap-3 flex-wrap">
            <h2 class="text-lg font-bold text-[#0F172A]">Listings Pending Audit</h2>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse"></span>
              3 Pending Flags Require Review
            </span>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <button className="flex items-center gap-1.5 px-4 py-2 bg-orange-50 hover:bg-orange-100 border border-orange-200 rounded-xl text-[#EA580C] text-xs font-bold transition-colors" onClick={() => navigate('/moderation')}>
              <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              <span>Open Dedicated Moderation Queue</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-[11px] font-bold uppercase tracking-wider border-b border-slate-100">
                <th className="py-3.5 px-6">Job Tracking ID</th>
                <th className="py-3.5 px-4">Company Entity</th>
                <th className="py-3.5 px-4">Job Title &amp; Spec</th>
                <th className="py-3.5 px-4">Audit Flag Reason</th>
                <th className="py-3.5 px-4">Submission Time</th>
                <th className="py-3.5 px-6 text-right">Moderation Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {flaggedJobs.map((job) => (
                <tr 
                  key={job.id} 
                  id={job.rowId}
                  className={`hover:bg-slate-50/70 transition-colors group ${
                    job.status === 'approved' ? 'opacity-40 pointer-events-none bg-emerald-50/50' : 
                    job.status === 'removed' ? 'opacity-40 pointer-events-none bg-rose-50/50' : ''
                  }`}
                >
                  <td className="py-4 px-6 text-xs font-extrabold text-[#EA580C] whitespace-nowrap">
                    {job.id}
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl ${job.companyBg} flex items-center justify-center font-bold text-xs shadow-xs`}>
                        {job.companyInitials}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-[#0F172A]">{job.company}</span>
                        <span className="text-[11px] text-[#64748B]">{job.domain}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-[#0F172A]">{job.title}</span>
                      <span className="text-[11px] text-[#64748B]">{job.spec}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${job.reasonBg} text-[11px] font-semibold`}>
                      <span className="material-symbols-outlined text-[14px]">{job.reasonIcon}</span>
                      {job.reason}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-[#64748B] text-xs whitespace-nowrap">
                    {job.time}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-right">
                    {job.status === 'approved' ? (
                      <span className="inline-flex items-center gap-1 text-emerald-600 text-xs font-bold">
                        <span className="material-symbols-outlined text-[16px]">check_circle</span> Approved
                      </span>
                    ) : job.status === 'removed' ? (
                      <span className="inline-flex items-center gap-1 text-rose-600 text-xs font-bold">
                        <span className="material-symbols-outlined text-[16px]">block</span> Removed
                      </span>
                    ) : (
                      <div className="flex items-center justify-end gap-2">
                        <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs active:scale-95" onClick={() => approveJob(job.id)}>
                          <span className="material-symbols-outlined text-[16px]">check_circle</span>
                          <span>Approve</span>
                        </button>
                        <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 text-xs font-bold transition-all active:scale-95" onClick={() => removeJob(job.id)}>
                          <span className="material-symbols-outlined text-[16px]">block</span>
                          <span>Remove Listing</span>
                        </button>
                        <button className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors" onClick={() => navigate('/moderation')} title="Deep Audit View">
                          <span className="material-symbols-outlined text-[18px]">visibility</span>
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-medium text-[#64748B]">
          <span>Displaying 3 of 3 flagged listings requiring executive consensus</span>
          <div className="flex items-center gap-1.5">
            <button className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-400 cursor-not-allowed text-xs font-semibold">Previous</button>
            <span className="px-3 py-1.5 rounded-lg bg-[#EA580C] text-white font-bold text-xs shadow-xs">Page 1</span>
            <button className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-400 cursor-not-allowed text-xs font-semibold">Next</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
