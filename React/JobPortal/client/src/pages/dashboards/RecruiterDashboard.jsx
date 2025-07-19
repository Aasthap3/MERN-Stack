import React, { useState, useEffect } from 'react'
import Overview from '../../components/RecruiterDashboard/Overview';
import Profile from '../../components/RecruiterDashboard/Profile';
import Applications from '../../components/RecruiterDashboard/Applications';
import PostJobs from '../../components/RecruiterDashboard/PostJobs';
import Sidebar from '../../components/RecruiterDashboard/Sidebar';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const RecruiterDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();

  const { isLogin, isRecruiter } = useAuth();
  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    } else if (!isRecruiter) {
      navigate("/notFound");
    }
  }, [isLogin, isRecruiter, navigate]);
  return (
    <>
      {(isLogin && isRecruiter) && (
      <div className="flex h-[90vh] bg-gray-100 overflow-hidden">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="w-4/5 h-full overflow-auto scrollbar-hide">
          {activeTab === "overview" && <Overview />}
          {activeTab === "profile" && <Profile />}
          {activeTab === "applications" && <Applications />}
          {activeTab === "addJobs" && <PostJobs />}
        </div>
      </div>
      )}
    </>
  )
}

export default RecruiterDashboard