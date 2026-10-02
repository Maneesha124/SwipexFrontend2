import React, { useState } from 'react';
import Header from '../components/jobseeker/Header';
import Toast from '../components/jobseeker/Toast';
import FilterDrawer from '../components/FilterDrawer';
import SwipeFeedView from '../components/SwipeFeedView';
import DashboardView from '../components/DashboardView';
import ResumeStudioView from '../components/ResumeStudioView';
import SavedJobsView from '../components/SavedJobsView';
import ProfileView from '../components/ProfileView';
import { INITIAL_JOBS, INITIAL_APPLICATIONS } from '../mock/mockData';

export default function JobSeekerApp() {
  const [activeTab, setActiveTab] = useState('feed');
  const [deck, setDeck] = useState(INITIAL_JOBS);
  const [savedJobs, setSavedJobs] = useState([INITIAL_JOBS[1]]);
  const [appliedJobs, setAppliedJobs] = useState(INITIAL_APPLICATIONS);
  const [swipeCount, setSwipeCount] = useState(48);

  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [filterType, setFilterType] = useState('All');
  const [filterRemoteOnly, setFilterRemoteOnly] = useState(true);
  const [filterLowCompOnly, setFilterLowCompOnly] = useState(true);

  const [profileData, setProfileData] = useState({
    name: 'Alex Morgan',
    title: 'Senior Fullstack Engineer',
    location: 'San Francisco, CA',
    bio: 'Passionate fullstack engineer with 6+ years building distributed cloud architectures and real-time streaming web apps.',
    avatarUrl: null,
    github: 'https://github.com/alexmorgan-dev',
    linkedin: 'https://linkedin.com/in/alexmorgan',
    portfolio: 'https://alexmorgan.design',
    leetcode: 'https://leetcode.com/u/alex_morgan'
  });

  const [toast, setToast] = useState({ show: false, message: '', icon: '🔥' });

  const showToast = (message, icon = '🔥') => {
    setToast({ show: true, message, icon });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 2800);
  };

  return (
    <div className="min-h-screen flex flex-col no-select">
      <Header 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        savedCount={savedJobs.length}
        setFilterDrawerOpen={setFilterDrawerOpen}
        showToast={showToast}
        profileData={profileData}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col justify-center">
        {activeTab === 'feed' && (
          <SwipeFeedView 
            deck={deck}
            setDeck={setDeck}
            savedJobs={savedJobs}
            setSavedJobs={setSavedJobs}
            setAppliedJobs={setAppliedJobs}
            setSwipeCount={setSwipeCount}
            setFilterDrawerOpen={setFilterDrawerOpen}
            showToast={showToast}
            INITIAL_JOBS={INITIAL_JOBS}
          />
        )}

        {activeTab === 'dashboard' && (
          <DashboardView 
            swipeCount={swipeCount}
            appliedJobs={appliedJobs}
            savedJobs={savedJobs}
            setActiveTab={setActiveTab}
            showToast={showToast}
          />
        )}

        {activeTab === 'resume' && (
          <ResumeStudioView 
            showToast={showToast}
          />
        )}

        {activeTab === 'saved' && (
          <SavedJobsView 
            savedJobs={savedJobs}
            setSavedJobs={setSavedJobs}
            setActiveTab={setActiveTab}
            showToast={showToast}
          />
        )}

        {activeTab === 'profile' && (
          <ProfileView 
            profileData={profileData}
            setProfileData={setProfileData}
            setActiveTab={setActiveTab}
            showToast={showToast}
          />
        )}
      </main>

      <FilterDrawer 
        isOpen={filterDrawerOpen}
        onClose={() => setFilterDrawerOpen(false)}
        filterType={filterType}
        setFilterType={setFilterType}
        filterRemoteOnly={filterRemoteOnly}
        setFilterRemoteOnly={setFilterRemoteOnly}
        filterLowCompOnly={filterLowCompOnly}
        setFilterLowCompOnly={setFilterLowCompOnly}
        showToast={showToast}
      />

      <Toast toast={toast} />
    </div>
  );
}
