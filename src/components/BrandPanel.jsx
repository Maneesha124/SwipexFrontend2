import React from 'react';

export default function BrandPanel() {
  return (
    <div className="hidden lg:flex lg:w-1/2 bg-[#0A192F] relative p-12 xl:p-16 flex-col justify-between overflow-hidden text-white select-none">
      {/* Background Radial Blur Glows */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/30 rounded-full blur-[110px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:28px_28px] opacity-25 pointer-events-none"></div>

      {/* Top Header / Logo */}
      <div className="relative z-10 flex items-center justify-between">
        <a className="flex items-center gap-3 group" href="/">
          <div className="w-11 h-11 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform duration-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24">
              <rect height="14" rx="3" width="14" x="2" y="5"></rect>
              <path d="m14 9-6 6"></path>
              <path d="M10 9h4v4"></path>
            </svg>
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-white">
            Swipe<span className="text-blue-500">X</span>
          </span>
        </a>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs font-medium text-slate-300 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Universal Gateway</span>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 my-auto max-w-xl pr-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold tracking-wide uppercase mb-6">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
          Unified Talent Network
        </div>
        <h1 className="text-4xl xl:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
          Swipe Right on <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
            Your Next Career Move.
          </span>
        </h1>
        <p className="text-slate-300 text-base xl:text-lg leading-relaxed mb-8">
          Join thousands of job seekers, recruiters, and platform managers connecting in real time.
        </p>
      </div>

      {/* Bottom Live Pulse Stat Overlay Card */}
      <div className="relative z-10 pt-4">
        <div className="glass-card-stat rounded-2xl p-4 flex items-center justify-between border border-white/15 shadow-xl max-w-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400 text-lg">
              🔥
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Live Pulse</div>
              <div className="text-sm font-bold text-white">324 active job opportunities available today</div>
            </div>
          </div>
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
            Active Now
          </span>
        </div>
      </div>
    </div>
  );
}
