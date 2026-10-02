import React from 'react';

export default function FilterDrawer({ isOpen, onClose, filterType, setFilterType, filterRemoteOnly, setFilterRemoteOnly, filterLowCompOnly, setFilterLowCompOnly, showToast }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-md bg-white h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <h3 className="text-lg font-black text-[#0F172A] flex items-center gap-2">
              <span>🎛️</span> Filter Preferences
            </h3>
            <button 
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-700"
            >
              ✕
            </button>
          </div>

          <div className="space-y-6 mt-6">
            <div>
              <label className="text-xs font-black uppercase tracking-wider text-slate-500 block mb-2">Company Stage</label>
              <div className="grid grid-cols-3 gap-2">
                {['All', 'Startup', 'MNC'].map(stage => (
                  <button
                    key={stage}
                    onClick={() => setFilterType(stage)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                      filterType === stage 
                        ? 'bg-[#EA580C] text-white border-[#EA580C]' 
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {stage}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-xs font-bold text-slate-700">Remote Roles Only</span>
                <input 
                  type="checkbox"
                  checked={filterRemoteOnly}
                  onChange={(e) => setFilterRemoteOnly(e.target.checked)}
                  className="w-4 h-4 rounded text-[#EA580C] focus:ring-[#EA580C]"
                />
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-xs font-bold text-slate-700">Low Applicant Competition (&lt;10)</span>
                <input 
                  type="checkbox"
                  checked={filterLowCompOnly}
                  onChange={(e) => setFilterLowCompOnly(e.target.checked)}
                  className="w-4 h-4 rounded text-[#EA580C] focus:ring-[#EA580C]"
                />
              </label>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            showToast("Preferences applied to Discovery Feed!", "⚙️");
            onClose();
          }}
          className="w-full py-3 rounded-2xl bg-[#EA580C] text-white font-black text-xs shadow-lg hover:bg-orange-700 transition-all mt-6"
        >
          Apply Preferences
        </button>
      </div>
    </div>
  );
}
