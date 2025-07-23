import React, { useState } from "react";
import {
  FaUser,
  FaBriefcase,
  FaBookmark,
  FaChartBar,
  FaSignOutAlt,
} from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "../../config/api";
import { useAuth } from "../../context/AuthContext";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const { user, setUser, setIsLogin } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const sidebarItems = [
    { id: "overview", label: "Overview", icon: FaChartBar },
    { id: "profile", label: "My Profile", icon: FaUser },
    { id: "applications", label: "Applied Jobs", icon: FaBriefcase },
    { id: "saved", label: "Saved Jobs", icon: FaBookmark },
  ];

  const handleLogout = () => {
    toast.promise(
      axios.get("/auth/logout").then(() => {
        sessionStorage.removeItem("user");
        setIsLogin(false);
        setUser(null);
        navigate("/login");
      }),
      {
        loading: "Logging out...",
        success: <b>Logged out successfully!</b>,
        error: <b>Logout failed!</b>,
      }
    );
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden flex items-start mb-2">
        <button
          className="p-2 m-2 rounded-lg bg-white text-cyan-900 shadow hover:bg-cyan-800 hover:text-white focus:outline-none"
          onClick={() => setOpen(true)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>

      {/* Sidebar overlay for mobile */}
      <div className={`fixed inset-0 z-40 bg-black/40 transition ${open ? "block" : "hidden"} md:hidden`} onClick={() => setOpen(false)} />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-4/5 max-w-xs bg-white shadow-lg flex flex-col transition-transform duration-300 md:static md:w-1/5 md:max-w-none md:shadow-none md:block
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
        style={{ minHeight: '100vh' }}
      >
        <div className="flex justify-between items-center md:hidden p-4 border-b border-gray-200">
          <h1 className="text-lg font-bold text-gray-800">{user.firstName}'s Dashboard</h1>
          <button onClick={() => setOpen(false)} className="text-2xl text-cyan-900">&times;</button>
        </div>
        <div className="p-4 flex-1">
          <h1 className="text-xl font-bold text-gray-800 mb-4 hidden md:block">{user.firstName}'s Dashboard</h1>
          <nav>
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id); setOpen(false); }}
                className={`flex items-center w-full px-4 py-2 mt-2 text-sm rounded-lg ${
                  activeTab === item.id
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="p-4 border-t border-gray-300">
          <button
            onClick={() => { handleLogout(); setOpen(false); }}
            className="flex items-center w-full px-4 py-2 text-sm rounded-lg text-red-600 hover:bg-red-50"
          >
            <FaSignOutAlt className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
