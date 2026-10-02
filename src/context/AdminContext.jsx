import React, { createContext, useContext, useState } from 'react';

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [toast, setToast] = useState({ visible: false, message: '' });

  const [flaggedJobs, setFlaggedJobs] = useState([
    {
      id: '#JB-9082',
      rowId: 'row-ov-1',
      company: 'Apex Global Tech',
      domain: 'apextech.global',
      companyInitials: 'AG',
      companyBg: 'bg-orange-100 text-[#EA580C]',
      title: 'Senior Cloud DevOps Lead',
      spec: 'Full-time • Remote • Posted by Recruiter #48',
      statedSpec: 'Stated: $400k - $650k Base • Remote',
      recruiter: 'Recruiter: #48 (Tier 2 Verified)',
      reason: 'Misleading Salary Range ($400k-$650k)',
      reasonIcon: 'monetization_on',
      reasonBg: 'bg-amber-50 border-amber-200 text-amber-800',
      aiFlag: 'Salary Outlier (>99th percentile)',
      time: '2 hours ago',
      applicantVolume: '188 Swipes • 41 Matches',
      status: 'pending' // pending | approved | removed
    },
    {
      id: '#JB-9077',
      rowId: 'row-ov-2',
      company: 'Vanguard AI Labs',
      domain: 'vanguard-lab.ai',
      companyInitials: 'VA',
      companyBg: 'bg-blue-100 text-blue-600',
      title: 'Junior React Developer',
      spec: 'Contract • Hybrid • External Redirect URL',
      statedSpec: 'Contract • Hybrid • External Redirect',
      recruiter: 'Recruiter: External Agency API',
      reason: 'Suspected Spam / Duplication',
      reasonIcon: 'warning',
      reasonBg: 'bg-rose-50 border-rose-200 text-rose-700',
      aiFlag: 'Redirect Domain Not Whitelisted',
      time: '5 hours ago',
      applicantVolume: '95 Swipes • 8 Matches',
      status: 'pending'
    },
    {
      id: '#JB-9064',
      rowId: 'row-ov-3',
      company: 'Quantum Horizon',
      domain: 'q-horizon.net',
      companyInitials: 'QH',
      companyBg: 'bg-purple-100 text-purple-600',
      title: 'Lead Cryptographic Architect',
      spec: 'Full-time • New York, NY • High Match Pool',
      statedSpec: 'Full-time • NYC / Onsite',
      recruiter: 'Recruiter: #12 (Unverified DNS)',
      reason: 'Unverified Corporate Domain',
      reasonIcon: 'domain_disabled',
      reasonBg: 'bg-slate-100 border-slate-200 text-slate-700',
      aiFlag: 'Domain SPF/DKIM Failed',
      time: 'Yesterday',
      applicantVolume: '312 Swipes • 67 Matches',
      status: 'pending'
    }
  ]);

  const showToast = (message) => {
    setToast({ visible: true, message });
    setTimeout(() => {
      setToast({ visible: false, message: '' });
    }, 3000);
  };

  const approveJob = (id) => {
    setFlaggedJobs(prev =>
      prev.map(job => job.id === id ? { ...job, status: 'approved' } : job)
    );
    showToast(`Listing ${id} approved & published to feed.`);
  };

  const removeJob = (id) => {
    setFlaggedJobs(prev =>
      prev.map(job => job.id === id ? { ...job, status: 'removed' } : job)
    );
    showToast(`Listing ${id} purged from active pipeline.`);
  };

  return (
    <AdminContext.Provider value={{ toast, showToast, flaggedJobs, approveJob, removeJob }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);
