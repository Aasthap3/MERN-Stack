import React, { useState } from "react";
import Sidebar from "../../components/userDashboard/Sidebar";
import Overview from "../../components/userDashboard/Overview";
import Profile from "../../components/userDashboard/Profile";
import SavedJobs from "../../components/userDashboard/SavedJobs";
import Applications from "../../components/userDashboard/Applications";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const navigate = useNavigate();
  const { isLogin, isUser } = useAuth();
  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    } else if (!isUser) {
      navigate("/notFound");
    }
  }, [isLogin, isUser, navigate]);

  return (
    <>
      {(isLogin && isUser) && (
      <div className="flex h-[90vh] bg-gray-100 overflow-hidden">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="w-4/5 h-full overflow-auto scrollbar-hide">
          {activeTab === "overview" && <Overview />}
          {activeTab === "profile" && <Profile />}
          {activeTab === "applications" && <Applications />}
          {activeTab === "saved" && <SavedJobs />}
        </div>
      </div>
      )}
    </>
  );
};

export default UserDashboard;
