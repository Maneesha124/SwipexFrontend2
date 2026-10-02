import React from 'react';

export default function Toast({ toast }) {
  if (!toast.show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#0F172A] text-white border border-slate-700 shadow-2xl animate-bounce">
      <span className="text-xl">{toast.icon}</span>
      <span className="text-xs font-extrabold">{toast.message}</span>
    </div>
  );
}
