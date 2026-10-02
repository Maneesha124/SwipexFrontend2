import React from 'react';

export default function MatchDial({ score = 94 }) {
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="relative w-14 h-14 flex items-center justify-center">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 50 50">
        <circle
          cx="25"
          cy="25"
          r={radius}
          stroke="#E2E8F0"
          strokeWidth="4"
          fill="none"
        />
        <circle
          cx="25"
          cy="25"
          r={radius}
          stroke="#16A34A"
          strokeWidth="4"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-700 ease-out"
        />
      </svg>
      <span className="absolute text-xs font-black text-emerald-600">{score}%</span>
    </div>
  );
}
