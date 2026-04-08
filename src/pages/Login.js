import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const API_SERVER_URL =
  process.env.REACT_APP_SERVER_API ||
  "https://oraserver.online";

const LOCAL_URL =  "http://localhost:3001";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // 2. Grab the login function from context

  const [formData, setFormData] = useState({
    email: "",
    password: "",

  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // handle traditional login, FUNCTION CAN CARRY THE FORMDATA
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
    
  //   try {
  //     // traditional login #the dinosaur way
  //     const response = await fetch(`${API_SERVER_URL}/auth/login`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       credentials: "include",
  //       body: JSON.stringify(formData),
  //     });

  //     // our response came with some data, possibly some data from 
  //     const data = await response.json();

  //     if (response.ok) {
  //       // Save user to LocalStorage
  //       login(data); //direct traffic to Auth context
  //       console.log("Login successful:", data);
  //       navigate("/upload");
  //     } else {
  //       console.error("Login failed:", data?.message || data);
  //     }
  //   } catch (error) {
  //     console.error("An error occurred during login:", error);
  //   }
  // };

  const handleLogin = async (e,formData) => {
    e.preventDefault();
    login(formData);
  }

  return (
    <div className="login__pg">
      <form className="form__signin" onSubmit={handleLogin}>
        <h1>Welcome back</h1>

        <div className="form__signin-btns">
          <a
            className="form__signin-btn"
            href={`${API_SERVER_URL}/auth/google`}
            rel="noopener noreferrer"
          >
            Sign in with Google
          </a>
          <a
            className="form__signin-btn"
            href={`${API_SERVER_URL}/auth/facebook`}
            rel="noopener noreferrer"
          >
            Sign in with Facebook
          </a>
        </div>

        <div className="form__signin-input">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
          />
        </div>

        <button className="form__signin-btn login" type="submit" onClick={handleLogin}>
          Sign in
        </button>

        <p>
          Don't have an account? <a href="/register">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
