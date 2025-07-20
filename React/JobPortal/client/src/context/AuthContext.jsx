import React, { useContext, useEffect, useState } from "react";

const AuthContext = React.createContext();

export const AuthProvider = (props) => {
  const getSafeUser = () => {
    try {
      const userString = sessionStorage.getItem("user");
      return userString ? JSON.parse(userString) : null;
    } catch (error) {
      console.error("Error parsing user from sessionStorage:", error);
      sessionStorage.removeItem("user");
      return null;
    }
  };

  const [user, setUser] = useState(getSafeUser());
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isRecruiter, setIsRecruiter] = useState(false);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    const storedUser = getSafeUser();
  
    if (storedUser) {
      setUser(storedUser);
      setIsLogin(true);
      setIsAdmin(user.role === "Admin");
      setIsRecruiter(user.role === "Recruiter");
      setIsUser(user.role === "User");
    } else {
      setUser(null);
      setIsLogin(false);
      setIsAdmin(false);
      setIsRecruiter(false);
      setIsUser(false);
    }
  });

  const value = {
    user,
    setUser,
    isLogin,
    isAdmin,
    isRecruiter,
    isUser,
    setIsLogin,
    setIsAdmin,
    setIsRecruiter,
    setIsUser,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
