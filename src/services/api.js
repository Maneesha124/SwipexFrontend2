import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VITE_API_URL || 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchJobFeed = () => api.get('/jobs/feed/');
export const submitSwipeAction = (jobId, action) => api.post('/swipes/', { job_id: jobId, action });
export const fetchRecruiterDashboard = () => api.get('/recruiter/dashboard/');
export const postNewJob = (jobData) => api.post('/jobs/', jobData);

export default api;
