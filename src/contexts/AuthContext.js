import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const SERVER_API = process.env.REACT_APP_SERVER_API;
  const navigate = useNavigate();


  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",

  });

  // useEffect(() => {

  //   // save logged in user
  //   const savedUser = localStorage.getItem("user");
  //   if (savedUser) {
  //     setUser(JSON.parse(savedUser));
  //   }
  //   setLoading(false);
  // }, []);


  const checkAuth = async () => {
    try {
      const res = await fetch("https://oraserver.online/auth/success", {
        credentials: "include",
      });

      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // const login = (userData) => {
  //   console.log("login function from useContext: ", userData);
  //   setUser(userData); //the data exists already after this /success
  //   localStorage.setItem("user", JSON.stringify(userData));
  // };

  const login = async (userData) => {
    try {
      // traditional login #the dinosaur way
      const response = await fetch(`${SERVER_API}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(userData),
      });

      // our response came with some data, possibly some data from 
      const data = await response.json();

      if (response.ok) {
        navigate("/");
      } else {
        console.error("Login failed:", data?.message || data);
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
    }
  }

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, checkAuth, logout, setLoading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// custom hook for easy acces
export const useAuth = () => {
  return useContext(AuthContext);
};
