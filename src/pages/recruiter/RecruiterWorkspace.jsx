import React, { useState } from 'react';
import RecruiterSidebar from '../../components/RecruiterSidebar';
import RecruiterHeader from '../../components/RecruiterHeader';
import DashboardOverview from '../../components/DashboardOverview';
import PostJobView from '../../components/PostJobView';
import ApplicantsView from '../../components/ApplicantsView';
import AnalyticsView from '../../components/AnalyticsView';
import RecruiterProfileView from '../../components/RecruiterProfileView';

export default function RecruiterWorkspace() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-slate-50 flex antialiased">
      <RecruiterSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col min-w-0">
        <RecruiterHeader
          onNewJobClick={() => setActiveTab('postjob')}
          onProfileClick={() => setActiveTab('profile')}
        />
        <main className="flex-1 p-6 sm:p-8 max-w-7xl w-full mx-auto">
          {activeTab === 'dashboard' && <DashboardOverview onNavigate={setActiveTab} />}
          {activeTab === 'postjob' && <PostJobView onBack={() => setActiveTab('dashboard')} />}
          {activeTab === 'applicants' && <ApplicantsView onBack={() => setActiveTab('dashboard')} />}
          {activeTab === 'analytics' && <AnalyticsView />}
          {activeTab === 'profile' && <RecruiterProfileView onBack={() => setActiveTab('dashboard')} />}
        </main>
      </div>
    </div>
  );
}
