import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[1440px] mx-auto px-margin-desktop flex items-center justify-between gap-gutter-desktop">
        <div className="flex items-center gap-space-sm">
          <img
            alt="SwipeX Logo"
            className="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida/AEtjO1VmkskWoixxuapJwoAFPxhtew6VxdXJkyJOpeSOCJg74_fEOQBqQZJVcNrOqnKGjZQ5Btu4OC-Gn60mpckHc-Sq_dW1d97nu1PFhDOIjNYrVrg6yiuT3p3LK5_YVQ0CeN3YFvwe41DZHea4LgK8UzmRQbE2hS5mbUqY_lXYqNxQ6iZwaVhQjcw3lSbEVNjOsIuFJBS078brY_w7eBGpVi_Bx12fks0XzUYLBuHuDUDNHYo3ZH8B41nKFgw"
          />
          <span className="font-display text-2xl text-on-surface tracking-tight font-extrabold">
            SwipeX
          </span>
        </div>
        <div className="flex items-center gap-space-sm">
          <button
            type="button"
            onClick={() => navigate('/auth')}
            className="inline-flex items-center justify-center h-11 px-space-lg rounded-full bg-primary-container text-on-primary font-display text-sm shadow-[0_6px_20px_rgba(37,99,235,0.25)] hover:bg-primary transition-all font-semibold"
          >
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}