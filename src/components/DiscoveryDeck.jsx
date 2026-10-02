import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { X, Zap, Check, Building2, MapPin, DollarSign, Sparkles } from 'lucide-react';
import MatchDial from './MatchDial';

const SAMPLE_JOBS = [
  {
    id: 1,
    title: "Senior Fullstack Engineer",
    company: "Acme Corp",
    location: "San Francisco, CA (Remote)",
    salary: "$140,000 - $180,000",
    match: 94,
    tags: ["React", "FastAPI", "PostgreSQL", "Tailwind"],
    description: "Leading frontend architecture and microservice integration for core real-time telemetry products.",
  },
  {
    id: 2,
    title: "Lead Cloud Architect",
    company: "Nexus Labs",
    location: "New York, NY (Hybrid)",
    salary: "$180,000 - $220,000",
    match: 88,
    tags: ["AWS", "Kubernetes", "Terraform", "Go"],
    description: "Designing scalable multi-region AWS cloud foundations and enterprise container orchestration.",
  }
];

export default function DiscoveryDeck({ onSelectJob }) {
  const [cards, setCards] = useState(SAMPLE_JOBS);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-12, 12]);
  const opacity = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);

  const handleSwipe = (direction) => {
    setCards((prev) => prev.slice(1));
  };

  const current = cards[0];

  if (!current) {
    return (
      <div className="h-[580px] w-full max-w-[440px] flex flex-col items-center justify-center bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200 text-center p-6">
        <Sparkles className="w-12 h-12 text-brand-blue mb-3 animate-bounce" />
        <h3 className="text-lg font-bold text-slate-900">Queue Caught Up!</h3>
        <p className="text-xs text-slate-500 mt-1">Check back soon for new AI matched roles.</p>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-[440px] h-[640px] flex flex-col items-center justify-between">
      {/* Background Deck Visual Offset */}
      {cards[1] && (
        <div className="absolute top-3 w-[92%] h-[560px] bg-white/60 rounded-2xl border border-slate-200 shadow-sm scale-95 opacity-60 pointer-events-none" />
      )}

      {/* Top Active Card */}
      <motion.div
        style={{ x, rotate, opacity }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(e, info) => {
          if (info.offset.x > 120) handleSwipe('right');
          else if (info.offset.x < -120) handleSwipe('left');
        }}
        onClick={() => onSelectJob(current)}
        className="w-full h-[560px] bg-white/90 backdrop-blur-xl rounded-2xl border border-white/80 shadow-xl p-6 flex flex-col justify-between cursor-grab active:cursor-grabbing relative z-10"
      >
        <div>
          <div className="flex items-start justify-between">
            <div>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-50 text-brand-blue border border-blue-200">
                Verified Hiring
              </span>
              <h2 className="text-xl font-extrabold text-slate-900 mt-2">{current.title}</h2>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                <Building2 className="w-3.5 h-3.5" />
                <span>{current.company}</span>
              </div>
            </div>
            <MatchDial score={current.match} />
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <MapPin className="w-4 h-4 text-slate-400" />
              <span>{current.location}</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <DollarSign className="w-4 h-4 text-emerald-600" />
              <span>{current.salary}</span>
            </div>
          </div>

          <div className="mt-4">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Core Tech Stack</h4>
            <div className="flex flex-wrap gap-1.5">
              {current.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <p className="mt-4 text-xs text-slate-600 line-clamp-3 leading-relaxed">
            {current.description}
          </p>
        </div>

        <div className="text-center pt-3 border-t border-slate-100">
          <span className="text-[11px] text-slate-400 font-semibold">Tap for full analysis • Drag to triage</span>
        </div>
      </motion.div>

      {/* Decision Controls */}
      <div className="flex items-center gap-6 mt-4 z-20">
        <button
          onClick={() => handleSwipe('left')}
          className="w-14 h-14 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-rose-500 hover:bg-rose-50 transition-transform active:scale-90"
        >
          <X className="w-6 h-6 stroke-[2.5]" />
        </button>

        <button
          onClick={() => handleSwipe('right')}
          className="w-16 h-16 rounded-full bg-brand-blue text-white shadow-lg shadow-blue-500/30 flex items-center justify-center hover:bg-blue-700 transition-transform active:scale-90"
        >
          <Zap className="w-7 h-7 fill-white" />
        </button>

        <button
          onClick={() => handleSwipe('right')}
          className="w-14 h-14 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-emerald-600 hover:bg-emerald-50 transition-transform active:scale-90"
        >
          <Check className="w-6 h-6 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
}
