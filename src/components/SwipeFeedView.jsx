import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function SwipeFeedView({ deck, setDeck, setSavedJobs, savedJobs, setAppliedJobs, setSwipeCount, setFilterDrawerOpen, showToast, INITIAL_JOBS }) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-12, 12]);
  const likeOpacity = useTransform(x, [0, 100], [0, 1]);
  const passOpacity = useTransform(x, [-100, 0], [1, 0]);

  const triggerSwipe = (direction) => {
    if (deck.length === 0) return;
    const activeCard = deck[0];

    if (direction === 'right') {
      showToast(`Applied instantly to ${activeCard.company}!`, '🔥');
      setSwipeCount(c => c + 1);
      setAppliedJobs(prev => [
        {
          id: `app-${Date.now()}`,
          title: activeCard.title,
          company: activeCard.company,
          type: `${activeCard.location} • ${activeCard.employment}`,
          appliedDate: "Just now",
          applicantsCount: activeCard.applicants,
          status: "In Review",
          statusType: "amber"
        },
        ...prev
      ]);
    } else {
      showToast(`Passed on ${activeCard.title}`, '❌');
      setSwipeCount(c => c + 1);
    }

    setDeck(prev => prev.slice(1));
    x.set(0);
  };

  const handleBookmark = () => {
    if (deck.length === 0) return;
    const activeCard = deck[0];
    if (!savedJobs.some(j => j.id === activeCard.id)) {
      setSavedJobs(prev => [...prev, activeCard]);
      showToast(`Saved "${activeCard.title}" to Favorites!`, '⭐');
    } else {
      showToast(`"${activeCard.title}" is already bookmarked!`, 'ℹ️');
    }
  };

  const resetDeck = () => {
    setDeck(INITIAL_JOBS);
    showToast("Refreshed active discovery stream deck!", "🔄");
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 max-w-2xl">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-[#EA580C] text-xs font-extrabold mb-1">
            <span className="w-2 h-2 rounded-full bg-[#EA580C] animate-pulse"></span>
            Discovery Stream Active
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
            Active Opportunity Feed
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Drag card right or click Apply to submit; drag left to pass.
          </p>
        </div>

        <button 
          onClick={() => setFilterDrawerOpen(true)}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-slate-200 hover:border-orange-500 text-slate-700 hover:text-orange-600 font-bold text-xs shadow-sm transition-all"
        >
          <svg className="w-4 h-4 text-[#EA580C]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
          <span>Filter Preferences</span>
        </button>
      </div>

      <div className="relative w-full max-w-[480px] h-[590px] flex items-center justify-center my-2 select-none">
        {deck.length > 0 ? (
          <>
            {deck[2] && (
              <div className="absolute w-[430px] h-[550px] bg-slate-200/70 rounded-3xl transform -translate-y-6 scale-90 opacity-40 pointer-events-none shadow-md border border-slate-300"></div>
            )}
            {deck[1] && (
              <div className="absolute w-[455px] h-[565px] bg-white rounded-3xl transform -translate-y-3 scale-95 opacity-80 pointer-events-none border border-slate-200 shadow-lg"></div>
            )}

            <motion.div
              style={{ x, rotate }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x > 120) {
                  triggerSwipe('right');
                } else if (info.offset.x < -120) {
                  triggerSwipe('left');
                }
              }}
              className="relative w-full h-[580px] bg-white rounded-3xl border border-slate-200/90 shadow-2xl p-6 sm:p-8 flex flex-col justify-between z-20 overflow-hidden cursor-grab active:cursor-grabbing"
            >
              <motion.div 
                style={{ opacity: likeOpacity }}
                className="absolute top-8 left-8 z-30 pointer-events-none px-4 py-1.5 border-4 border-emerald-500 text-emerald-600 font-black text-2xl uppercase tracking-wider rounded-2xl rotate-[-12deg] bg-white/95 shadow-xl"
              >
                APPLY 🔥
              </motion.div>
              <motion.div 
                style={{ opacity: passOpacity }}
                className="absolute top-8 right-8 z-30 pointer-events-none px-4 py-1.5 border-4 border-rose-500 text-rose-600 font-black text-2xl uppercase tracking-wider rounded-2xl rotate-[12deg] bg-white/95 shadow-xl"
              >
                SKIP ❌
              </motion.div>

              <div>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 rounded-2xl bg-[#0F172A] text-white flex items-center justify-center font-black text-xl shadow-md ring-4 ring-slate-100">
                      {deck[0].initials}
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {deck[0].company}
                      </div>
                      <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] leading-tight mt-0.5">
                        {deck[0].title}
                      </h2>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wide bg-orange-50 text-[#EA580C] border border-orange-200/80">
                    {deck[0].type}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 my-5 py-4 border-y border-slate-100 text-xs">
                  <div className="flex items-center gap-2 text-slate-600 font-bold">
                    <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-[#EA580C]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </div>
                    <span className="truncate">{deck[0].location}</span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-600 font-bold">
                    <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-[#EA580C]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </div>
                    <span>{deck[0].employment}</span>
                  </div>

                  <div className="col-span-2 flex items-center justify-between p-3 rounded-2xl bg-orange-50/80 border border-orange-100">
                    <div className="flex items-center gap-2">
                      <span className="text-base font-black text-[#EA580C]">$</span>
                      <span className="text-xs font-bold text-slate-700">Offered Compensation</span>
                    </div>
                    <span className="text-sm font-black text-[#0F172A]">{deck[0].salary}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
                    <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <span>{deck[0].posted}</span>
                  </span>

                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black ${
                    deck[0].competitionLevel === 'Low'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-rose-50 text-rose-800 border border-rose-200'
                  }`}>
                    <span className={`w-2 h-2 rounded-full ${deck[0].competitionLevel === 'Low' ? 'bg-emerald-600' : 'bg-rose-600'}`}></span>
                    <span>{deck[0].applicants}</span>
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {deck[0].desc}
                </p>

                <div>
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-2">Required Core Stack</div>
                  <div className="flex flex-wrap gap-1.5">
                    {deck[0].skills.map((skill, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 text-[11px] font-bold">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-around">
                <div className="flex flex-col items-center gap-1">
                  <button
                    onClick={() => triggerSwipe('left')}
                    className="w-13 h-13 p-3.5 rounded-full bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-600 hover:text-white flex items-center justify-center shadow-lg transition-all transform hover:scale-110 active:scale-95"
                    title="Skip (Swipe Left)"
                  >
                    <svg className="w-6 h-6 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </button>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Pass</span>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <button
                    onClick={handleBookmark}
                    className="w-11 h-11 rounded-full bg-amber-50 text-amber-600 border border-amber-200 hover:bg-amber-500 hover:text-white flex items-center justify-center shadow-md transition-all transform hover:scale-110 active:scale-95"
                    title="Save to Bookmarks"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  </button>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Save</span>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <button
                    onClick={() => triggerSwipe('right')}
                    className="w-16 h-16 rounded-full bg-[#EA580C] text-white hover:bg-orange-700 flex items-center justify-center shadow-xl shadow-orange-600/40 transition-all transform hover:scale-110 active:scale-95"
                    title="Apply Now (Swipe Right)"
                  >
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                      <path d="M12.75 2.25c-.26 0-.5.13-.64.35L8.5 7.85l-1.39-1.85a.75.75 0 0 0-1.2.01L2.21 12.3c-.48.65-.02 1.57.79 1.57h2.06c.07 2.1 1.25 4.01 3.12 5.03 2.18 1.19 4.88.94 6.78-.63 1.9-1.57 2.65-4.09 1.9-6.38l1.79-1.79a.75.75 0 0 0-.25-1.25l-5.2-1.73-.25-.07a.75.75 0 0 0-.2-.02Z"></path>
                    </svg>
                  </button>
                  <span className="text-[10px] font-extrabold text-[#EA580C] uppercase tracking-wider">Apply Now</span>
                </div>
              </div>
            </motion.div>
          </>
        ) : (
          <div className="w-full h-[520px] bg-white rounded-3xl border border-slate-200 shadow-xl p-8 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 rounded-3xl bg-orange-100 text-[#EA580C] flex items-center justify-center mb-4 text-3xl shadow-inner">
              🎉
            </div>
            <h3 className="text-2xl font-black text-[#0F172A]">All Caught Up!</h3>
            <p className="text-xs text-slate-500 max-w-sm mt-2 mb-6">
              You have reviewed all current verified matches in your stream. Reset the deck or adjust your filters to see more high-leverage roles.
            </p>
            <button
              onClick={resetDeck}
              className="px-6 py-3 rounded-2xl bg-[#EA580C] hover:bg-orange-700 text-white font-black text-xs shadow-lg shadow-orange-600/30 transition-all"
            >
              Reload Opportunity Deck
            </button>
          </div>
        )}
      </div>

      <div className="text-center text-xs text-slate-400 mt-2 font-medium">
        Tip: Drag card or use arrow buttons to interact seamlessly.
      </div>
    </div>
  );
}
