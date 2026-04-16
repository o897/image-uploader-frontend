import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const SERVER_API = process.env.REACT_APP_SERVER_API;



  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
 
  const checkAuth = async (e) => {
    
    try {
      const res = await fetch("https://oraserver.online/auth/success", {
        credentials: "include",
      });

      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
     
      } else {
        //user not logged in yet
        // Flash errors on the login page
        console.log(`user not logged in yet.`);
        setUser(null);
      }
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (userData) => {
    console.log(`userData in login function AuthProvider`,userData);
    
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
        console.log("user logged in");
        setUser(data);
        navigate("/");
      } else {
        console.error("Login failed:", data?.message || data);
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
    }
  }

  const logout = async () => {
    try {
      await fetch(`${SERVER_API}/auth/logout`,{
        method: "GET",
        credentials: "include",
      });
      setUser(null);
    } catch (e) {
      console.log("logout failed", e);
    }
  };

   useEffect(() => {
    checkAuth();
  }, []);

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
