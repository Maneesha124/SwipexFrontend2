import React, { useState } from 'react';
import CandidateHeader from '../../components/CandidateHeader';
import DiscoveryDeck from '../../components/DiscoveryDeck';
import RoleBreakdown from '../../components/RoleBreakdown';

export default function CandidatePortal() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="min-h-screen bg-brand-canvas flex flex-col">
      <CandidateHeader />
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 flex justify-center">
          <DiscoveryDeck onSelectJob={setSelectedJob} />
        </div>
        <div className="lg:col-span-5">
          <RoleBreakdown job={selectedJob} />
        </div>
      </main>
    </div>
  );
}
