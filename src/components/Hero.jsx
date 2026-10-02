import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  return (
    <div className="relative w-full overflow-hidden flex-1 flex items-center">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-48 right-10 w-[30rem] h-[30rem] bg-secondary-container/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <section className="max-w-[1440px] w-full mx-auto px-margin-desktop py-space-sm lg:py-space-md flex flex-col justify-center flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center my-auto">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-6 flex flex-col justify-center items-start gap-space-sm">
            {/* Tag / Discovery Pill */}
            <div className="inline-flex items-center gap-space-xs px-space-md py-space-2xs rounded-full bg-surface-container-low shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse"></span>
              <span className="font-display text-xs text-primary font-bold tracking-wide uppercase">
                Next-Gen Talent Discovery
              </span>
              <span className="font-display text-[10px] text-secondary bg-surface px-space-xs py-0.5 rounded-full shadow-xs">
                v2.4 Live
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-display text-4xl lg:text-5xl text-on-surface tracking-tight font-extrabold max-w-xl leading-tight">
              Swipe Right on <br />
              <span className="bg-gradient-to-r from-primary-container via-primary to-surface-tint bg-clip-text text-transparent">
                Your Next Job
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-body text-base lg:text-lg text-on-surface-variant max-w-lg leading-relaxed">
              Skip the endless forms. Discover AI-curated job opportunities, evaluate real-time competition levels, and apply instantly with a single gesture.
            </p>

            {/* Primary CTA & Social Proof */}
            <div className="w-full flex flex-col sm:flex-row sm:items-center gap-space-lg pt-space-xs">
              <button
                type="button"
                onClick={() => navigate('/auth')}
                className="inline-flex items-center justify-center h-14 px-space-xl rounded-full bg-primary-container text-on-primary font-display text-base shadow-[0_8px_25px_rgba(37,99,235,0.32)] hover:bg-primary transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
              >
                <span>Get Started Now</span>
                <span className="material-symbols-outlined ml-space-xs text-[20px] transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </button>

              {/* Social Trust Stack */}
              <div className="flex items-center gap-space-sm">
                <div className="flex -space-x-3 overflow-hidden">
                  <div className="inline-block h-10 w-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center text-xs shadow-sm font-bold">
                    AK
                  </div>
                  <div className="inline-block h-10 w-10 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center text-xs shadow-sm font-bold">
                    MS
                  </div>
                  <div className="inline-block h-10 w-10 rounded-full bg-surface-container-highest text-primary flex items-center justify-center text-xs shadow-sm font-bold">
                    JD
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-[16px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <span className="font-display text-[10px] text-on-surface-variant">
                    14,000+ hired this month
                  </span>
                </div>
              </div>
            </div>

            {/* Feature Badges */}
            <div className="flex flex-wrap items-center gap-space-xs pt-space-xs">
              <div className="flex items-center gap-space-2xs px-space-md py-space-xs rounded-full bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow cursor-default">
                <span className="text-amber-500 font-bold">⚡</span>
                <span className="font-display text-xs text-on-surface font-semibold">Instant Apply</span>
              </div>
              <div className="flex items-center gap-space-2xs px-space-md py-space-xs rounded-full bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow cursor-default">
                <span className="text-primary-container font-bold">🤖</span>
                <span className="font-display text-xs text-on-surface font-semibold">AI Match Score</span>
              </div>
              <div className="flex items-center gap-space-2xs px-space-md py-space-xs rounded-full bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow cursor-default">
                <span className="text-tertiary font-bold">📊</span>
                <span className="font-display text-xs text-on-surface font-semibold">Live Competition</span>
              </div>
            </div>

            {/* Metric Grid */}
            <div className="w-full grid grid-cols-3 gap-space-sm pt-space-sm">
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col">
                <span className="font-display text-2xl lg:text-3xl text-on-surface font-extrabold tracking-tight">
                  50k+
                </span>
                <span className="font-body text-xs text-on-surface-variant">
                  Active Tech Roles
                </span>
              </div>
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col">
                <span className="font-display text-2xl lg:text-3xl text-primary font-extrabold tracking-tight">
                  98%
                </span>
                <span className="font-body text-xs text-on-surface-variant">
                  Match Precision
                </span>
              </div>
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col">
                <span className="font-display text-2xl lg:text-3xl text-tertiary font-extrabold tracking-tight">
                  48h
                </span>
                <span className="font-body text-xs text-on-surface-variant">
                  Average Interview
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-6 relative flex justify-center items-center mt-space-lg lg:mt-0">
            {/* Outer Deep Navy Container */}
            <div className="w-full max-w-[520px] min-h-[580px] rounded-[2rem] bg-inverse-surface text-inverse-on-surface p-space-md relative overflow-hidden shadow-[0_24px_60px_rgba(11,28,48,0.28)] flex flex-col justify-between">
              {/* Internal Mesh Glows */}
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary-container/25 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-10 -left-10 w-64 h-64 bg-tertiary-container/20 rounded-full blur-3xl pointer-events-none"></div>

              {/* Top Status Bar */}
              <div className="relative z-10 w-full flex items-center justify-between gap-space-sm">
                <div className="inline-flex items-center gap-space-xs px-space-sm py-1.5 rounded-full bg-surface-container-lowest/10 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="font-display text-[10px] text-inverse-on-surface tracking-wider font-semibold uppercase">
                    1.4k Recruiters Online
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-space-sm py-1.5 rounded-full bg-surface-container-lowest/10 backdrop-blur-md">
                  <span className="material-symbols-outlined text-[16px] text-primary-fixed">
                    verified_user
                  </span>
                  <span className="font-display text-[10px] text-inverse-on-surface font-medium">
                    Verified Feed
                  </span>
                </div>
              </div>

              {/* Subject Portrait Image */}
              <div className="absolute inset-0 flex items-end justify-center pointer-events-none pt-space-xl overflow-hidden">
                <img
                  alt="Candidate Portrait"
                  className="w-auto h-[92%] object-contain object-bottom filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.4)] transform transition-transform duration-700 hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1VkJsR8sIu9Zlskdi26oMZtVEP1SvGy4R4UlbZ2Cy193dXLUtPpvSYHkjBJ5CmQQ4cDywQ1iiya1_epYNTVDudlILGpeTpYe66UMmUOSgNoTsbNkRg3UjsS25wiw39eSAYeg59V3ZOiJalrs7LWnUHcvCqD_Ej1eqjUgr34m3A_Gv2YGtz4pY65g2slZ1jUbmceSztezumgkrTBcl3ckPtt-rRgN3Ksttk3EmU2km1tk-Qni0UuiPushhsg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Glassmorphic Job Card Overlay */}
              <div className="relative z-20 w-full mt-auto pt-space-2xl">
                <div className="w-full bg-surface-container-lowest/95 backdrop-blur-xl p-space-md rounded-2xl shadow-[0_12px_36px_rgba(0,0,0,0.2)] text-on-surface transform transition-all duration-300 hover:-translate-y-1">
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-space-sm">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-on-primary font-display font-bold shadow-sm">
                        <span className="material-symbols-outlined text-[26px]">terminal</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <h2 className="font-display text-lg text-on-surface font-bold leading-tight">
                            Senior Python Developer
                          </h2>
                          <span
                            className="material-symbols-outlined text-primary text-[18px]"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            verified
                          </span>
                        </div>
                        <p className="font-body text-xs text-on-surface-variant font-medium">
                          Tech Corp • $120k – $150k / yr • Remote
                        </p>
                      </div>
                    </div>

                    {/* AI Match Dial Indicator */}
                    <div className="flex flex-col items-center">
                      <div className="relative w-11 h-11 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                          <path
                            className="text-surface-container"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3.5"
                          ></path>
                          <path
                            className="text-tertiary-container"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="currentColor"
                            strokeDasharray="98, 100"
                            strokeLinecap="round"
                            strokeWidth="3.5"
                          ></path>
                        </svg>
                        <span className="absolute font-display text-[10px] font-bold text-tertiary">
                          98%
                        </span>
                      </div>
                      <span className="font-display text-[9px] text-tertiary uppercase font-bold tracking-wider mt-0.5">
                        Matched
                      </span>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-space-xs mt-space-sm pt-space-xs">
                    <span className="inline-flex items-center gap-1 px-space-xs py-1 rounded-full bg-error-container text-on-error-container font-display text-[10px] font-semibold">
                      <span className="material-symbols-outlined text-[14px]">local_fire_department</span>
                      High Competition (42 Applicants)
                    </span>
                    <span className="inline-flex items-center gap-1 px-space-xs py-1 rounded-full bg-secondary-container text-on-secondary-container font-display text-[10px] font-medium">
                      <span className="material-symbols-outlined text-[14px]">schedule</span>
                      Posted 3h ago
                    </span>
                    <span className="inline-flex items-center gap-1 px-space-xs py-1 rounded-full bg-surface-container text-on-surface-variant font-display text-[10px] font-medium">
                      <span className="material-symbols-outlined text-[14px]">psychology</span>
                      Fast Track Interview
                    </span>
                  </div>

                  {/* Actions & Hints */}
                  <div className="mt-space-md pt-space-xs flex items-center justify-between">
                    <div className="flex items-center gap-space-xs text-on-surface-variant font-display text-[10px]">
                      <span className="material-symbols-outlined text-[16px] text-outline">arrow_back</span>
                      <span>Swipe Left: Pass</span>
                    </div>

                    <div className="flex items-center gap-space-sm">
                      <button
                        aria-label="Pass on role"
                        className="w-11 h-11 rounded-full bg-surface-container hover:bg-error-container text-outline hover:text-error transition-all duration-200 flex items-center justify-center shadow-sm active:scale-90"
                      >
                        <span className="material-symbols-outlined text-[22px]">close</span>
                      </button>
                      <button
                        aria-label="Instant Super apply"
                        className="w-11 h-11 rounded-full bg-primary-fixed hover:bg-primary-container text-primary hover:text-on-primary transition-all duration-200 flex items-center justify-center shadow-sm active:scale-90"
                      >
                        <span
                          className="material-symbols-outlined text-[20px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          bolt
                        </span>
                      </button>
                      <button
                        aria-label="Match with role"
                        className="w-11 h-11 rounded-full bg-tertiary hover:bg-tertiary-container text-on-tertiary transition-all duration-200 flex items-center justify-center shadow-md active:scale-90"
                      >
                        <span className="material-symbols-outlined text-[22px]">favorite</span>
                      </button>
                    </div>

                    <div className="flex items-center gap-space-xs text-on-surface-variant font-display text-[10px]">
                      <span>Match: Swipe Right</span>
                      <span className="material-symbols-outlined text-[16px] text-primary">arrow_forward</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Back-stacked Ghost Cards */}
            <div className="absolute -right-4 top-16 w-64 h-80 rounded-2xl bg-surface-container-high/60 backdrop-blur-md -z-10 transform rotate-6 hidden sm:block"></div>
            <div className="absolute -left-4 bottom-24 w-56 h-72 rounded-2xl bg-surface-container-highest/40 backdrop-blur-md -z-10 transform -rotate-6 hidden sm:block"></div>
          </div>
        </div>
      </section>
    </div>
  );
}