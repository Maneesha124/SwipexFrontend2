import React from 'react';

export default function Header({ activeTab, setActiveTab, savedCount, setFilterDrawerOpen, showToast, profileData }) {
  return (
    <header className="sticky top-0 z-40 bg-[#0F172A] text-white border-b border-slate-800 shadow-xl backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setActiveTab('feed')}
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#EA580C] to-amber-500 flex items-center justify-center shadow-lg shadow-orange-600/30">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.75 2.25c-.26 0-.5.13-.64.35L8.5 7.85l-1.39-1.85a.75.75 0 0 0-1.2.01L2.21 12.3c-.48.65-.02 1.57.79 1.57h2.06c.07 2.1 1.25 4.01 3.12 5.03 2.18 1.19 4.88.94 6.78-.63 1.9-1.57 2.65-4.09 1.9-6.38l1.79-1.79a.75.75 0 0 0-.25-1.25l-5.2-1.73-.25-.07a.75.75 0 0 0-.2-.02Z"></path>
              <path d="M11.95 9.07c-2.02 0-3.8 1.25-4.48 3.14-.15.42.06.88.48 1.03.42.15.88-.06 1.03-.48.45-1.25 1.63-2.09 2.97-2.09.28 0 .5-.22.5-.5s-.22-.5-.5-.5Z"></path>
            </svg>
          </div>
          <div>
            <div className="text-2xl font-black tracking-tight leading-none flex items-center gap-0.5">
              Swipe<span className="text-[#EA580C]">X</span>
            </div>
            <span className="text-[10px] uppercase font-extrabold tracking-widest text-slate-400">Job Seeker Portal</span>
          </div>
        </div>

        {/* Center Interactive Tab Switcher */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800 shadow-inner">
          <button
            onClick={() => setActiveTab('feed')}
            className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'feed'
                ? 'bg-[#EA580C] text-white shadow-md shadow-orange-600/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
            }`}
          >
            <span className="text-base">🎴</span>
            <span>Swipe Feed</span>
          </button>

          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'dashboard'
                ? 'bg-[#EA580C] text-white shadow-md shadow-orange-600/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
            }`}
          >
            <span className="text-base">📊</span>
            <span>Dashboard</span>
          </button>

          <button
            onClick={() => setActiveTab('resume')}
            className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'resume'
                ? 'bg-[#EA580C] text-white shadow-md shadow-orange-600/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
            }`}
          >
            <span className="text-base">📄</span>
            <span>AI Resume Studio</span>
          </button>

          <button
            onClick={() => setActiveTab('saved')}
            className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'saved'
                ? 'bg-[#EA580C] text-white shadow-md shadow-orange-600/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
            }`}
          >
            <span className="text-base">⭐</span>
            <span>Saved Jobs</span>
            <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-extrabold ${
              activeTab === 'saved' ? 'bg-orange-950 text-orange-200' : 'bg-slate-800 text-orange-400'
            }`}>
              {savedCount}
            </span>
          </button>
        </nav>

        {/* Right Action Trigger & Profile Pill */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setFilterDrawerOpen(true)}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 border border-slate-700 transition-all shadow-sm"
          >
            <svg className="w-4 h-4 text-[#EA580C]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <span>Filters</span>
          </button>

          <button 
            onClick={() => showToast("You have 3 active interview callback requests!", "🔔")}
            className="relative p-2.5 text-slate-300 hover:text-white rounded-xl hover:bg-slate-800/80 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-[#EA580C] ring-2 ring-[#0F172A] animate-ping"></span>
            <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-[#EA580C]"></span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('profile')}
            className={`flex items-center gap-3 pl-3 border-l border-slate-800 cursor-pointer p-1.5 transition-all duration-200 group rounded-2xl hover:bg-slate-800/90 hover:ring-2 hover:ring-orange-500/60 text-left ${
              activeTab === 'profile' ? 'ring-2 ring-orange-500 bg-slate-800/90 shadow-lg shadow-orange-600/20' : ''
            }`}
            title="View Profile & Credentials"
          >
            {profileData.avatarUrl ? (
              <img 
                src={profileData.avatarUrl} 
                alt={profileData.name} 
                className="w-10 h-10 rounded-2xl object-cover border-2 border-[#EA580C] shadow-md group-hover:scale-105 transition-transform"
              />
            ) : (
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 border-2 border-[#EA580C] shadow-md flex items-center justify-center text-white font-black text-sm group-hover:scale-105 transition-transform">
                AM
              </div>
            )}
            <div className="hidden lg:block text-left">
              <div className="text-xs font-extrabold text-white group-hover:text-orange-300 transition-colors">{profileData.name}</div>
              <div className="text-[10px] text-slate-400 font-medium">{profileData.title}</div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Scrollable Tabs */}
      <div className="flex md:hidden px-4 py-2 bg-slate-900 border-t border-slate-800 overflow-x-auto gap-2 text-xs font-bold">
        <button 
          onClick={() => setActiveTab('feed')}
          className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-all ${
            activeTab === 'feed' ? 'bg-[#EA580C] text-white' : 'text-slate-300'
          }`}
        >
          🎴 Swipe Feed
        </button>
        <button 
          onClick={() => setActiveTab('dashboard')}
          className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-all ${
            activeTab === 'dashboard' ? 'bg-[#EA580C] text-white' : 'text-slate-300'
          }`}
        >
          📊 Dashboard
        </button>
        <button 
          onClick={() => setActiveTab('resume')}
          className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-all ${
            activeTab === 'resume' ? 'bg-[#EA580C] text-white' : 'text-slate-300'
          }`}
        >
          📄 AI Resume
        </button>
        <button 
          onClick={() => setActiveTab('saved')}
          className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-all ${
            activeTab === 'saved' ? 'bg-[#EA580C] text-white' : 'text-slate-300'
          }`}
        >
          ⭐ Saved ({savedCount})
        </button>
      </div>
    </header>
  );
}
