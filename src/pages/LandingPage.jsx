import React from 'react';
import Header from '../components/landing/Header';
import Hero from '../components/Hero';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-surface font-body text-on-surface antialiased flex flex-col justify-between overflow-hidden">
      <Header />
      <main className="w-full pt-20 bg-surface min-h-screen lg:h-screen flex flex-col justify-between overflow-hidden">
        <Hero />
      </main>
    </div>
  );
}
