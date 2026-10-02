import React from 'react';
import BrandPanel from '../components/BrandPanel';
import AuthCard from '../components/AuthCard';

export default function AuthPage() {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row">
      <BrandPanel />
      <AuthCard />
    </div>
  );
}
