import React, { useState } from 'react';

export default function ProfileView({ profileData, setProfileData, setActiveTab, showToast }) {
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    showCurrent: false,
    showNew: false,
    showConfirm: false
  });

  const handleAvatarUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        showToast("File exceeds 5MB limit", "⚠️");
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileData(prev => ({ ...prev, avatarUrl: event.target.result }));
        showToast("Profile photo updated successfully!", "📸");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveAvatar = () => {
    setProfileData(prev => ({ ...prev, avatarUrl: null }));
    showToast("Profile photo reset to default initials", "🗑️");
  };

  const handleSaveProfile = (e) => {
    if (e) e.preventDefault();
    showToast("Profile & Links saved successfully!", "✅");
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (!passwordForm.currentPassword) {
      showToast("Please enter your current password", "⚠️");
      return;
    }
    if (passwordForm.newPassword.length < 8) {
      showToast("New password must be at least 8 characters", "⚠️");
      return;
    }
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      showToast("Passwords do not match!", "❌");
      return;
    }
    showToast("Security password updated successfully!", "🔒");
    setPasswordForm({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      showCurrent: false,
      showNew: false,
      showConfirm: false
    });
  };

  return (
    <div className="w-full space-y-8 animate-in fade-in duration-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#EA580C] text-xs font-extrabold uppercase tracking-wider mb-1">
            <span>👤</span> Candidate Portal Settings
          </div>
          <h1 className="text-3xl font-black text-[#0F172A] tracking-tight">
            Job Seeker Profile & Credentials
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Manage your public engineering persona, portfolio links, verification badges, and account security.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setActiveTab('feed')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs shadow-sm transition-all"
          >
            <span>← Back to Stream</span>
          </button>
          <button 
            onClick={handleSaveProfile}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#EA580C] hover:bg-orange-700 text-white font-extrabold text-xs shadow-lg shadow-orange-600/30 transition-all"
          >
            <span>💾 Save All Changes</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#EA580C] via-amber-500 to-orange-400"></div>

            <div className="flex flex-col items-center text-center">
              <div className="relative group mt-2 mb-4">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl p-1 bg-gradient-to-tr from-[#EA580C] to-amber-500 shadow-xl shadow-orange-500/20">
                  <div className="w-full h-full rounded-[22px] bg-[#0F172A] overflow-hidden flex items-center justify-center text-white text-3xl font-black relative">
                    {profileData.avatarUrl ? (
                      <img 
                        src={profileData.avatarUrl} 
                        alt={profileData.name} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span>AM</span>
                    )}

                    <label 
                      htmlFor="avatar-file-input"
                      className="absolute inset-0 bg-[#0F172A]/70 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer text-xs font-bold gap-1 p-2"
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      <span>Change Photo</span>
                    </label>
                  </div>
                </div>

                <div 
                  className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-1.5 rounded-xl shadow-lg border-2 border-white flex items-center justify-center"
                  title="Identity & Stack Verified"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
              </div>

              <div className="space-y-1 mb-4">
                <div className="flex items-center justify-center gap-2">
                  <h2 className="text-2xl font-black text-[#0F172A] tracking-tight">{profileData.name}</h2>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span> Verified
                  </span>
                </div>
                <p className="text-xs font-bold text-[#EA580C] uppercase tracking-wider">{profileData.title}</p>
                <p className="text-xs text-slate-500 flex items-center justify-center gap-1">
                  <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                  <span>{profileData.location}</span>
                </p>
              </div>

              <div className="w-full flex items-center justify-center gap-2 mb-2">
                <input 
                  id="avatar-file-input"
                  type="file" 
                  accept="image/png, image/jpeg, image/webp"
                  className="hidden" 
                  onChange={handleAvatarUpload}
                />
                <label 
                  htmlFor="avatar-file-input"
                  className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-50 hover:bg-orange-100 text-[#EA580C] text-xs font-extrabold border border-orange-200 transition-colors shadow-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                  <span>Upload Photo</span>
                </label>

                {profileData.avatarUrl && (
                  <button
                    type="button"
                    onClick={handleRemoveAvatar}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-rose-50 text-slate-600 hover:text-rose-600 text-xs font-bold transition-colors"
                    title="Remove photo"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <span>Remove</span>
                  </button>
                )}
              </div>
              <p className="text-[11px] text-slate-400 font-medium">Supports PNG, JPG, or WebP up to 5MB</p>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 space-y-2 text-left">
              <div className="flex items-center justify-between">
                <label className="text-xs font-black uppercase tracking-wider text-slate-700">
                  Headline & Quick Pitch
                </label>
                <span className="text-[10px] text-slate-400 font-bold">{profileData.bio.length} / 240</span>
              </div>
              <textarea
                rows="3"
                value={profileData.bio}
                onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
                className="w-full rounded-2xl border-slate-200 text-xs text-slate-800 font-medium p-3.5 focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] transition-colors leading-relaxed resize-none"
                placeholder="Brief summary highlighting your experience and target role..."
              ></textarea>
              <p className="text-[10px] text-slate-400 leading-tight">
                Displayed at the top of 1-click applications sent to technical hiring directors.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-slate-100 text-left">
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-[10px] uppercase font-bold text-slate-400">Match Readiness</div>
                <div className="text-sm font-black text-emerald-600 mt-0.5">100% Complete</div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-[10px] uppercase font-bold text-slate-400">Response Rate</div>
                <div className="text-sm font-black text-[#0F172A] mt-0.5">88% (High)</div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-black text-[#0F172A] flex items-center gap-2">
                  <span>🔗</span>
                  <span>Portfolio & Professional Links</span>
                </h3>
                <p className="text-xs text-slate-500">Provide direct links to code repos, live production apps, and engineering profiles.</p>
              </div>
              <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 self-start sm:self-auto">
                Auto-verified
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-black uppercase tracking-wider text-slate-600 block mb-1.5">
                  GitHub Profile
                </label>
                <input
                  type="url"
                  value={profileData.github}
                  onChange={(e) => setProfileData(prev => ({ ...prev, github: e.target.value }))}
                  className="w-full px-4 py-3 rounded-2xl border-slate-200 text-xs text-slate-800 font-bold focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-black uppercase tracking-wider text-slate-600 block mb-1.5">
                  LinkedIn Profile
                </label>
                <input
                  type="url"
                  value={profileData.linkedin}
                  onChange={(e) => setProfileData(prev => ({ ...prev, linkedin: e.target.value }))}
                  className="w-full px-4 py-3 rounded-2xl border-slate-200 text-xs text-slate-800 font-bold focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-black uppercase tracking-wider text-slate-600 block mb-1.5">
                  Portfolio Website
                </label>
                <input
                  type="url"
                  value={profileData.portfolio}
                  onChange={(e) => setProfileData(prev => ({ ...prev, portfolio: e.target.value }))}
                  className="w-full px-4 py-3 rounded-2xl border-slate-200 text-xs text-slate-800 font-bold focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-black uppercase tracking-wider text-slate-600 block mb-1.5">
                  LeetCode / Competitive Programming
                </label>
                <input
                  type="url"
                  value={profileData.leetcode}
                  onChange={(e) => setProfileData(prev => ({ ...prev, leetcode: e.target.value }))}
                  className="w-full px-4 py-3 rounded-2xl border-slate-200 text-xs text-slate-800 font-bold focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] transition-colors"
                />
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end">
              <button
                type="button"
                onClick={handleSaveProfile}
                className="px-6 py-2.5 rounded-xl bg-[#EA580C] hover:bg-orange-700 text-white font-black text-xs shadow-md shadow-orange-600/30 transition-all flex items-center gap-2"
              >
                <span>Save Links & Profile</span>
                <span>✓</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-black text-[#0F172A] flex items-center gap-2">
                  <span>🔒</span>
                  <span>Account Security & Password</span>
                </h3>
                <p className="text-xs text-slate-500">Update your account authentication credentials and safeguard login sessions.</p>
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 bg-slate-100 px-3 py-1 rounded-full self-start sm:self-auto">
                2FA Active
              </span>
            </div>

            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div>
                <label className="text-xs font-black uppercase tracking-wider text-slate-600 block mb-1.5">
                  Current Password
                </label>
                <input
                  type={passwordForm.showCurrent ? "text" : "password"}
                  value={passwordForm.currentPassword}
                  onChange={(e) => setPasswordForm(prev => ({ ...prev, currentPassword: e.target.value }))}
                  placeholder="••••••••••••"
                  className="w-full px-4 py-3 rounded-2xl border-slate-200 text-xs text-slate-800 font-bold focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-black uppercase tracking-wider text-slate-600 block mb-1.5">
                    New Password
                  </label>
                  <input
                    type={passwordForm.showNew ? "text" : "password"}
                    value={passwordForm.newPassword}
                    onChange={(e) => setPasswordForm(prev => ({ ...prev, newPassword: e.target.value }))}
                    placeholder="Min 8 chars"
                    className="w-full px-4 py-3 rounded-2xl border-slate-200 text-xs text-slate-800 font-bold focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-black uppercase tracking-wider text-slate-600 block mb-1.5">
                    Confirm Password
                  </label>
                  <input
                    type={passwordForm.showConfirm ? "text" : "password"}
                    value={passwordForm.confirmPassword}
                    onChange={(e) => setPasswordForm(prev => ({ ...prev, confirmPassword: e.target.value }))}
                    placeholder="Repeat password"
                    className="w-full px-4 py-3 rounded-2xl border-slate-200 text-xs text-slate-800 font-bold focus:border-[#EA580C] focus:ring-1 focus:ring-[#EA580C] transition-colors"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs shadow-md transition-all flex items-center gap-2"
                >
                  <span>Update Password</span>
                  <span>🔒</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
