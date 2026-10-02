import React from 'react';
import { motion } from 'framer-motion';
import { useAdmin } from '../../context/AdminContext';

export default function Settings() {
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
            <span className="text-[#EA580C] font-semibold">Infrastructure &amp; Audit Trail</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-[#0F172A] mt-1">
            System Logs &amp; API Health
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold shadow-xs" onClick={() => showToast('Audit report exported (audit_master.csv)')}>
            <span className="material-symbols-outlined text-[16px]">download</span>
            <span>Export Audit Logs CSV</span>
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#EA580C] hover:bg-[#c2410c] text-white text-xs font-bold shadow-md shadow-orange-900/10" onClick={() => showToast('Purging memory buffers across all nodes...')}>
            <span className="material-symbols-outlined text-[16px]">restart_alt</span>
            <span>Flush Platform Cache</span>
          </button>
        </div>
      </div>

      {/* Gateway & ATS Param Controls (3 Cards) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#EA580C] flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">router</span>
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-900">Edge Gateway Ping</h3>
                <span className="text-[11px] text-slate-500">Cloudflare Workers + Envoy</span>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase border border-emerald-200">120ms Avg</span>
          </div>
          <div className="space-y-3 mt-4">
            <div className="flex justify-between text-xs">
              <span className="text-slate-500">Active Rate Limit:</span>
              <span className="font-bold text-slate-800">120 req / candidate / min</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-slate-500">SSL/TLS Handshake:</span>
              <span className="font-bold text-emerald-600">Strict TLS 1.3</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-slate-500">DDoS Mitigation:</span>
              <span className="font-bold text-emerald-600">Adaptive Shield ON</span>
            </div>
          </div>
          <button className="mt-4 w-full py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 transition-colors" onClick={() => showToast('Edge route configuration saved')}>
            Reconfigure Gateway Limits
          </button>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">psychology</span>
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-900">ATS Engine v4.2</h3>
                <span className="text-[11px] text-slate-500">Matching Semantic Classifier</span>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase border border-emerald-200">99.98% Up</span>
          </div>
          <div className="space-y-3 mt-4">
            <div className="flex justify-between text-xs">
              <span className="text-slate-500">Similarity Threshold:</span>
              <span className="font-bold text-[#EA580C]">Cosine 0.74 Cutoff</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-slate-500">Model Precision:</span>
              <span className="font-bold text-slate-800">FP16 TensorRT</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-slate-500">Embeddings Dimension:</span>
              <span className="font-bold text-slate-800">1,536 dims (OpenAI Ada)</span>
            </div>
          </div>
          <button className="mt-4 w-full py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 transition-colors" onClick={() => showToast('Triggered embeddings re-indexing')}>
            Tune Semantic Parameters
          </button>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">memory</span>
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-900">Redis Key Store</h3>
                <span className="text-[11px] text-slate-500">Session &amp; Swipe Cache</span>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 text-[10px] font-bold uppercase border border-purple-200">12.4k Keys</span>
          </div>
          <div className="space-y-3 mt-4">
            <div className="flex justify-between text-xs">
              <span className="text-slate-500">Memory Utilization:</span>
              <span className="font-bold text-slate-800">412 MB / 2.0 GB</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-slate-500">Eviction Policy:</span>
              <span className="font-bold text-slate-800">allkeys-lru</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-slate-500">Hit Ratio:</span>
              <span className="font-bold text-emerald-600">98.4% Cache Hit</span>
            </div>
          </div>
          <button className="mt-4 w-full py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 transition-colors" onClick={() => showToast('Redis snapshot backup initiated')}>
            Snapshot &amp; Compact
          </button>
        </div>
      </div>

      {/* Audit Logs Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
            <h2 className="text-base font-bold text-[#0F172A]">Real-time Event Stream &amp; Audit Logs</h2>
          </div>
          <span className="text-xs text-slate-400">Auto-streaming • 100 entries/min</span>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse font-mono text-xs">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-[11px] font-bold uppercase tracking-wider border-b border-slate-100 font-sans">
                <th className="py-3 px-4">Timestamp (UTC)</th>
                <th className="py-3 px-4">Severity</th>
                <th className="py-3 px-4">Service Cluster</th>
                <th className="py-3 px-4">Event Message / Payload</th>
                <th className="py-3 px-4 text-right">Origin IP / Operator</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              <tr className="hover:bg-slate-50/70">
                <td className="py-3 px-4 text-slate-500">14:42:01.218</td>
                <td className="py-3 px-4"><span className="px-2 py-0.5 rounded font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">INFO</span></td>
                <td className="py-3 px-4 text-slate-800">auth.gateway</td>
                <td className="py-3 px-4 text-slate-700 font-sans">Root admin session verified via hardware WebAuthn (Zone 0)</td>
                <td className="py-3 px-4 text-right text-slate-500">198.51.100.44</td>
              </tr>
              <tr className="hover:bg-slate-50/70">
                <td className="py-3 px-4 text-slate-500">14:38:19.094</td>
                <td className="py-3 px-4"><span className="px-2 py-0.5 rounded font-bold bg-amber-50 text-amber-700 border border-amber-200">WARN</span></td>
                <td className="py-3 px-4 text-slate-800">moderation.ats</td>
                <td className="py-3 px-4 text-slate-700 font-sans">Salary anomaly detected on job #JB-9082 (Stated max $650k)</td>
                <td className="py-3 px-4 text-right text-slate-500">worker-cluster-us-east</td>
              </tr>
              <tr className="hover:bg-slate-50/70">
                <td className="py-3 px-4 text-slate-500">14:22:50.812</td>
                <td className="py-3 px-4"><span className="px-2 py-0.5 rounded font-bold bg-rose-50 text-rose-700 border border-rose-200">ERROR</span></td>
                <td className="py-3 px-4 text-slate-800">waf.antispam</td>
                <td className="py-3 px-4 text-slate-700 font-sans">Rate limit breached: 1,400 swipes/hr from UID #USR-4409 (Bot flagged)</td>
                <td className="py-3 px-4 text-right text-slate-500">203.0.113.88</td>
              </tr>
              <tr className="hover:bg-slate-50/70">
                <td className="py-3 px-4 text-slate-500">14:15:32.401</td>
                <td className="py-3 px-4"><span className="px-2 py-0.5 rounded font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">INFO</span></td>
                <td className="py-3 px-4 text-slate-800">vector.pinecone</td>
                <td className="py-3 px-4 text-slate-700 font-sans">Role index checkpoint committed: 324 embeddings synced</td>
                <td className="py-3 px-4 text-right text-slate-500">cron.worker-03</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
