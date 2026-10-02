import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/admin/Header';
import Toast from '../components/admin/Toast';
import Overview from './admin/Overview';
import Users from './admin/Users';
import Moderation from './admin/Moderation';
import Settings from './admin/Settings';
import Profile from './admin/Profile';

export default function AdminApp() {
  return (
    <div className="w-full min-h-screen m-0 p-0 overflow-x-hidden flex bg-[#F8FAFC] text-slate-800 font-sans antialiased selection:bg-orange-500 selection:text-white">
      <Toast />
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 min-h-screen bg-[#F8FAFC]">
        <Header />
        <main className="flex-1 p-8 overflow-y-auto bg-[#F8FAFC]">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="users" element={<Users />} />
            <Route path="moderation" element={<Moderation />} />
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
