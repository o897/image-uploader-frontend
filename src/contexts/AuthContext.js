import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const API_URL =
    process.env.REACT_APP_API_URL ||
    "https://image-uploader-backend-yzqj.onrender.com";

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  console.log("auth provider file");
  const login = (userData) => {
    console.log("userData : ", userData);
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };
  
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, setLoading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// custom hook for easy acces
export const useAuth = () => {
  return useContext(AuthContext);
};
