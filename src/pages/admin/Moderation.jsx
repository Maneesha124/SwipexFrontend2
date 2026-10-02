import React from 'react';
import { motion } from 'framer-motion';
import { useAdmin } from '../../context/AdminContext';

export default function Moderation() {
  const { showToast, flaggedJobs, approveJob, removeJob } = useAdmin();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="space-y-8"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
            <span>Command Core</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-[#EA580C] font-semibold">Automated Trust &amp; Safety</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-[#0F172A] mt-1">
            Job Moderation &amp; Quality Audit
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-all" onClick={() => showToast('Bulk approval executed for low-risk items')}>
            Approve Verified Listings (18)
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center bg-slate-100 p-1 rounded-xl gap-1">
            <button className="px-3.5 py-1.5 rounded-lg bg-[#EA580C] text-white text-xs font-bold shadow-xs">Pending Audit (3)</button>
            <button className="px-3.5 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 text-xs font-semibold transition-colors">Approved (312)</button>
            <button className="px-3.5 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 text-xs font-semibold transition-colors">Removed / Blacklisted (9)</button>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl">
              <span className="material-symbols-outlined text-slate-400 text-[18px] mr-2">tune</span>
              <select className="bg-transparent text-xs font-semibold text-slate-800 outline-none cursor-pointer">
                <option>All Audit Flags (3)</option>
                <option>Misleading Salary Range</option>
                <option>Suspected Spam / Scams</option>
                <option>Unverified Corporate Domain</option>
              </select>
            </div>
            <button className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600" onClick={() => showToast('Filter preset saved')}>
              <span className="material-symbols-outlined text-[20px]">filter_list</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto w-full -mx-6 border-t border-slate-100">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-[11px] font-bold uppercase tracking-wider border-b border-slate-100">
                <th className="py-3.5 px-6">Job ID</th>
                <th className="py-3.5 px-4">Entity &amp; Recruiter</th>
                <th className="py-3.5 px-4">Role Specification</th>
                <th className="py-3.5 px-4">AI Audit Flags</th>
                <th className="py-3.5 px-4">Applicant Volume</th>
                <th className="py-3.5 px-6 text-right">Moderation Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {flaggedJobs.map((job) => (
                <tr 
                  key={job.id} 
                  className={`hover:bg-slate-50/70 transition-colors ${
                    job.status === 'approved' ? 'opacity-40 pointer-events-none bg-emerald-50/50' : 
                    job.status === 'removed' ? 'opacity-40 pointer-events-none bg-rose-50/50' : ''
                  }`}
                >
                  <td className="py-4 px-6 text-xs font-extrabold text-[#EA580C]">{job.id}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-lg ${job.companyBg} font-bold text-xs flex items-center justify-center`}>{job.companyInitials}</div>
                      <div>
                        <span className="text-xs font-bold text-slate-900 block">{job.company}</span>
                        <span className="text-[11px] text-slate-500">{job.recruiter}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-xs font-bold text-slate-900 block">{job.title}</span>
                    <span className="text-[11px] text-slate-500">{job.statedSpec}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full ${job.reasonBg} text-[11px] font-bold`}>
                      <span className="material-symbols-outlined text-[14px]">{job.reasonIcon}</span>
                      {job.aiFlag}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-xs text-slate-600 font-semibold">{job.applicantVolume}</td>
                  <td className="py-4 px-6 text-right">
                    {job.status === 'approved' ? (
                      <span className="inline-flex items-center gap-1 text-emerald-600 text-xs font-bold">
                        <span className="material-symbols-outlined text-[16px]">check_circle</span> Approved
                      </span>
                    ) : job.status === 'removed' ? (
                      <span className="inline-flex items-center gap-1 text-rose-600 text-xs font-bold">
                        <span className="material-symbols-outlined text-[16px]">block</span> Removed
                      </span>
                    ) : (
                      <div className="flex items-center justify-end gap-1.5">
                        <button className="px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all" onClick={() => approveJob(job.id)}>Approve</button>
                        <button className="px-2.5 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold transition-all border border-rose-200" onClick={() => removeJob(job.id)}>Remove</button>
                        <button className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600" onClick={() => showToast('Recruiter audit triggered')} title="Action Audit">
                          <span className="material-symbols-outlined text-[16px]">flag</span>
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
