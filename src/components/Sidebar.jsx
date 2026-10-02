import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside className="w-72 shrink-0 min-h-screen bg-[#0F172A] border-r border-slate-800 text-white flex flex-col justify-between p-6 z-30 sticky top-0 h-screen">
      <div className="flex flex-col gap-6">
        {/* Brand Header */}
        <div className="flex items-center gap-3 px-1 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-10 h-10 rounded-xl bg-[#EA580C] flex items-center justify-center shadow-lg shadow-orange-950/40">
            <span className="material-symbols-outlined text-white text-[22px]">local_fire_department</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-xl tracking-tight text-white">SwipeX</span>
              <span className="w-2 h-2 rounded-full bg-[#EA580C] animate-pulse"></span>
            </div>
            <span className="text-[10px] font-bold text-[#94A3B8] tracking-widest uppercase">System Admin Portal</span>
          </div>
        </div>
        <div className="h-[1px] w-full bg-slate-800/80"></div>
        
        {/* Navigation Tabs */}
        <nav className="flex flex-col gap-1.5" id="sidebarNav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "w-full text-left bg-[#EA580C] text-white font-bold shadow-md shadow-orange-600/30 rounded-xl flex items-center gap-3 px-4 py-3 transition-all group"
                : "w-full text-left text-slate-400 hover:text-white hover:bg-slate-800/70 rounded-xl font-semibold flex items-center gap-3 px-4 py-3 transition-colors group"
            }
          >
            <span className="material-symbols-outlined text-[20px] transition-transform group-hover:scale-110">bar_chart_4_bars</span>
            <span className="text-sm font-semibold tracking-wide">System Overview</span>
          </NavLink>

          <NavLink
            to="/users"
            className={({ isActive }) =>
              isActive
                ? "w-full text-left bg-[#EA580C] text-white font-bold shadow-md shadow-orange-600/30 rounded-xl flex items-center gap-3 px-4 py-3 transition-all group"
                : "w-full text-left text-slate-400 hover:text-white hover:bg-slate-800/70 rounded-xl font-semibold flex items-center gap-3 px-4 py-3 transition-colors group"
            }
          >
            <span className="material-symbols-outlined text-[20px] transition-transform group-hover:scale-110">group</span>
            <span className="text-sm font-semibold tracking-wide">User Management</span>
          </NavLink>

          <NavLink
            to="/moderation"
            className={({ isActive }) =>
              isActive
                ? "w-full text-left bg-[#EA580C] text-white font-bold shadow-md shadow-orange-600/30 rounded-xl flex items-center justify-between px-4 py-3 transition-all group"
                : "w-full text-left text-slate-400 hover:text-white hover:bg-slate-800/70 rounded-xl font-semibold flex items-center justify-between px-4 py-3 transition-colors group"
            }
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[20px] transition-transform group-hover:scale-110">verified_user</span>
              <span className="text-sm font-semibold tracking-wide">Job Moderation</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-bold">3</span>
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive
                ? "w-full text-left bg-[#EA580C] text-white font-bold shadow-md shadow-orange-600/30 rounded-xl flex items-center gap-3 px-4 py-3 transition-all group"
                : "w-full text-left text-slate-400 hover:text-white hover:bg-slate-800/70 rounded-xl font-semibold flex items-center gap-3 px-4 py-3 transition-colors group"
            }
          >
            <span className="material-symbols-outlined text-[20px] transition-transform group-hover:scale-110">settings</span>
            <span className="text-sm font-semibold tracking-wide">System Settings &amp; Logs</span>
          </NavLink>
        </nav>
      </div>

      {/* Bottom Profile */}
      <div 
        className="bg-slate-800/60 hover:bg-slate-800 p-3 rounded-xl border border-slate-700/50 flex items-center justify-between cursor-pointer transition-all group"
        onClick={() => navigate('/profile')}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-9 h-9 rounded-xl bg-orange-600/20 group-hover:bg-[#EA580C] border border-orange-500/30 flex items-center justify-center text-[#EA580C] group-hover:text-white shrink-0 font-bold transition-colors">
            <span className="material-symbols-outlined text-[18px]">shield_person</span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-bold text-slate-200 truncate">Super Admin</span>
            <span className="text-[11px] text-[#94A3B8] truncate">admin@swipex.com</span>
          </div>
        </div>
        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 group-hover:text-orange-400 transition-colors" title="Manage Admin Profile">
          <span className="material-symbols-outlined text-[18px]">tune</span>
        </div>
      </div>
    </aside>
  );
}
