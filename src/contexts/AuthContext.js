import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const API_URL =
    process.env.REACT_APP_API_URL ||
    "https://image-uploader-backend-yzqj.onrender.com";

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   check if user is already signed in
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch(`${API_URL}/auth/login`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       console.log("Login successful:", data);
  //       navigate("/upload");
  //     } else {
  //       console.error("Login failed:", data?.message || data);
  //     }
  //   } catch (error) {
  //     console.error("An error occurred during login:", error);
  //   }
  // };
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
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
