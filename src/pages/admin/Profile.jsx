import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAdmin } from '../../context/AdminContext';

export default function Profile() {
  const navigate = useNavigate();
  const { showToast } = useAdmin();

  const handleProfileFormSubmit = (e) => {
    e.preventDefault();
    showToast("Profile & credentials updated successfully.");
    setTimeout(() => {
      navigate('/');
    }, 1200);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="space-y-8"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <button 
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#EA580C] hover:border-orange-300 text-xs font-bold transition-all shadow-xs group"
            onClick={() => navigate('/')}
          >
            <span className="material-symbols-outlined text-[18px] transition-transform group-hover:-translate-x-1">arrow_back</span>
            <span>Back to Dashboard</span>
          </button>
          <div className="h-5 w-[1px] bg-slate-200"></div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Zone 0 Root Operator Privilege</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Active Master Session
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-[#0F172A]">
          Admin Profile &amp; Root Credentials
        </h1>
        <p className="text-xs text-slate-500">Configure authentication keys, hardware MFA tokens, security parameters, and root access control.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Profile Status */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col items-center text-center">
            <div className="relative group">
              <div className="w-24 h-24 rounded-2xl bg-[#0F172A] border-4 border-white shadow-xl flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-[48px] text-orange-500">shield_person</span>
              </div>
              <button 
                className="absolute -bottom-2 -right-2 w-8 h-8 rounded-xl bg-[#EA580C] text-white flex items-center justify-center shadow-md hover:bg-orange-700 transition-colors"
                onClick={() => showToast('Avatar file dialog opened')} 
                title="Upload Photo"
              >
                <span className="material-symbols-outlined text-[16px]">photo_camera</span>
              </button>
            </div>
            <h2 className="text-base font-bold text-slate-900 mt-4">Executive Admin</h2>
            <span className="text-xs text-slate-500 font-medium">admin@swipex.com</span>
            <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-[#EA580C] border border-orange-200 text-xs font-bold">
              <span className="material-symbols-outlined text-[14px]">admin_panel_settings</span>
              <span>Zone 0 Root Operator</span>
            </div>
            <div className="w-full border-t border-slate-100 my-5 pt-4 space-y-2 text-left text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Operator ID:</span>
                <span className="font-mono font-bold text-slate-800">#ADM-0001</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Session Scope:</span>
                <span className="font-bold text-emerald-600">Full Cluster Root</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Last Credential Rotation:</span>
                <span className="text-slate-700">14 days ago</span>
              </div>
            </div>
            <button className="w-full py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors" onClick={() => showToast('Avatar updated from system vault')}>
              Upload New Avatar
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[22px]">verified_user</span>
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block">Multi-Factor Auth (MFA)</span>
                <span className="text-[11px] text-slate-500">Hardware Key (FIDO2 / WebAuthn)</span>
              </div>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700">FIDO2 YubiKey 5C</span>
              <span className="text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded">Active</span>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700">Authenticator App (TOTP)</span>
              <span className="text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded">Backup</span>
            </div>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h3 className="text-sm font-bold text-[#0F172A] pb-3 border-b border-slate-100 uppercase tracking-wider">
              Root Credential &amp; Account Settings
            </h3>
            <form className="space-y-6 mt-6" onSubmit={handleProfileFormSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Admin Full Name</label>
                  <input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#EA580C] focus:border-transparent" type="text" defaultValue="Executive Admin"/>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Master Email Address</label>
                  <input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#EA580C] focus:border-transparent" type="email" defaultValue="admin@swipex.com"/>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Current Master Password</label>
                  <input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#EA580C] focus:border-transparent" placeholder="••••••••••••••••" type="password"/>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">New Root Password</label>
                    <input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#EA580C] focus:border-transparent" placeholder="Min 16 alphanumeric + symbol" type="password"/>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Confirm New Password</label>
                    <input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#EA580C] focus:border-transparent" placeholder="Re-enter new password" type="password"/>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-4">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Session &amp; Network Policies</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-slate-800 block">Enforce VPN IP Whitelist</span>
                      <span className="text-[10px] text-slate-500">Reject non-corporate gateways</span>
                    </div>
                    <input defaultChecked className="w-4 h-4 text-[#EA580C] rounded focus:ring-[#EA580C] cursor-pointer" type="checkbox"/>
                  </div>
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-slate-800 block">Idle Session Timeout</span>
                      <span className="text-[10px] text-slate-500">Auto-lock on inactivity</span>
                    </div>
                    <select className="bg-white border border-slate-200 text-xs font-semibold text-slate-800 rounded-lg px-2 py-1 outline-none" defaultValue="30 Minutes">
                      <option>15 Minutes</option>
                      <option>30 Minutes</option>
                      <option>1 Hour</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <button className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 text-xs font-semibold hover:bg-slate-50 transition-colors" type="button" onClick={() => navigate('/')}>
                  Cancel &amp; Discard
                </button>
                <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#EA580C] hover:bg-[#c2410c] text-white text-xs font-bold shadow-md shadow-orange-900/20 transition-all active:scale-95" type="submit">
                  <span className="material-symbols-outlined text-[16px]">save</span>
                  <span>Update Profile &amp; Credentials</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
