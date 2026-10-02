import React from 'react';
import { motion } from 'framer-motion';
import { useAdmin } from '../../context/AdminContext';

export default function Users() {
  const { showToast } = useAdmin();

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
            <span className="text-[#EA580C] font-semibold">Identity &amp; Role Control</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-[#0F172A] mt-1">
            User &amp; Recruiter Directory
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-orange-50 border border-orange-200 text-[#EA580C] text-xs font-bold">
            <span className="material-symbols-outlined text-[18px]">people</span>
            <span>1,248 Candidates</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
            <span className="material-symbols-outlined text-[18px]">verified</span>
            <span>86 Recruiters</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center bg-slate-100 p-1 rounded-xl gap-1">
            <button className="px-3.5 py-1.5 rounded-lg bg-white text-[#EA580C] text-xs font-bold shadow-xs">All Users (1,334)</button>
            <button className="px-3.5 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 text-xs font-semibold transition-colors">Candidates</button>
            <button className="px-3.5 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 text-xs font-semibold transition-colors">Recruiters</button>
            <button className="px-3.5 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 text-xs font-semibold transition-colors">Suspended (4)</button>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative w-64">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">search</span>
              <input className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-[#EA580C] focus:outline-none" placeholder="Filter by email or UID..." type="text"/>
            </div>
            <button className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-slate-900" onClick={() => showToast('Exported users roster CSV')} title="Export CSV">
              <span className="material-symbols-outlined text-[20px]">download</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto w-full -mx-6 -mb-6 border-t border-slate-100">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-[11px] font-bold uppercase tracking-wider border-b border-slate-100">
                <th className="py-3.5 px-6">User / Account</th>
                <th className="py-3.5 px-4">System Role</th>
                <th className="py-3.5 px-4">Verification Status</th>
                <th className="py-3.5 px-4">Joined Date</th>
                <th className="py-3.5 px-4">Activity Matrix</th>
                <th className="py-3.5 px-6 text-right">Administrative Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-400 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                      SL
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-[#0F172A]">Sarah Lin, M.S.</span>
                      <span className="text-[11px] text-[#64748B]">s.lin@datascience.io • UID #USR-4412</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-50 text-[#EA580C] border border-orange-200">
                    Candidate
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span className="inline-flex items-center gap-1 text-emerald-600 text-xs font-bold">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                    Verified ID &amp; Degree
                  </span>
                </td>
                <td className="py-4 px-4 text-xs text-slate-600">Oct 21, 2025</td>
                <td className="py-4 px-4 text-xs text-slate-600">142 Swipes • 8 Matches</td>
                <td className="py-4 px-6 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors" onClick={() => showToast('Loading dossier for Sarah Lin...')}>View Dossier</button>
                    <button className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800" onClick={() => showToast('Impersonation token created for testing')} title="Impersonate">
                      <span className="material-symbols-outlined text-[16px]">switch_account</span>
                    </button>
                  </div>
                </td>
              </tr>

              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                      MR
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-[#0F172A]">Marcus Reynolds</span>
                      <span className="text-[11px] text-[#64748B]">m.reynolds@vertexcorp.com • UID #REC-0089</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                    Verified Recruiter
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span className="inline-flex items-center gap-1 text-emerald-600 text-xs font-bold">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                    Corporate DNS Confirmed
                  </span>
                </td>
                <td className="py-4 px-4 text-xs text-slate-600">Sep 12, 2025</td>
                <td className="py-4 px-4 text-xs text-slate-600">12 Jobs Posted • 94% Response</td>
                <td className="py-4 px-6 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors" onClick={() => showToast('Loading dossier for Marcus Reynolds...')}>View Dossier</button>
                    <button className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600" onClick={() => showToast('Recruiter privileges suspended for investigation')} title="Suspend Recruiter">
                      <span className="material-symbols-outlined text-[16px]">person_off</span>
                    </button>
                  </div>
                </td>
              </tr>

              <tr className="hover:bg-slate-50/70 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                      EC
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-[#0F172A]">Elena Chen</span>
                      <span className="text-[11px] text-[#64748B]">elena.c@frontendpulse.dev • UID #USR-4409</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-50 text-[#EA580C] border border-orange-200">
                    Candidate
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span className="inline-flex items-center gap-1 text-emerald-600 text-xs font-bold">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                    Verified GitHub &amp; ID
                  </span>
                </td>
                <td className="py-4 px-4 text-xs text-slate-600">Oct 23, 2025</td>
                <td className="py-4 px-4 text-xs text-slate-600">92 Swipes • 5 Matches</td>
                <td className="py-4 px-6 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors" onClick={() => showToast('Loading dossier for Elena Chen...')}>View Dossier</button>
                    <button className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800" onClick={() => showToast('Impersonation token created for testing')} title="Impersonate">
                      <span className="material-symbols-outlined text-[16px]">switch_account</span>
                    </button>
                  </div>
                </td>
              </tr>

              <tr className="hover:bg-slate-50/70 transition-colors bg-rose-50/30">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-400 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                      TX
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-slate-900">Temp Bot Account 90</span>
                      <span className="text-[11px] text-rose-600 font-semibold">Flagged: High Auto-Swipe Velocity</span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 text-rose-700 border border-rose-300">
                    Suspended
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span className="inline-flex items-center gap-1 text-rose-600 text-xs font-bold">
                    <span className="material-symbols-outlined text-[16px]">cancel</span>
                    Unverified Phone
                  </span>
                </td>
                <td className="py-4 px-4 text-xs text-slate-600">Yesterday</td>
                <td className="py-4 px-4 text-xs text-slate-600">1,400 Swipes/hr (Bot)</td>
                <td className="py-4 px-6 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="px-2.5 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-colors" onClick={() => showToast('Account permanently purged')}>Purge</button>
                    <button className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors" onClick={() => showToast('Account unbanned')}>Reinstate</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-medium text-[#64748B]">
          <span>Showing 1 to 4 of 1,334 registered accounts</span>
          <div className="flex items-center gap-1.5">
            <button className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-400 cursor-not-allowed text-xs font-semibold">Previous</button>
            <span className="px-3 py-1.5 rounded-lg bg-[#EA580C] text-white font-bold text-xs shadow-xs">1</span>
            <button className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-semibold">2</button>
            <button className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-semibold">3</button>
            <button className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-semibold">Next</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
