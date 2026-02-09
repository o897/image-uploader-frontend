import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const API_URL =
  process.env.REACT_APP_API_URL ||
  "https://image-uploader-backend-yzqj.onrender.com";

const LOCAL_URL = "http://localhost:3001";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

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

  const handleSubmit = async (e, authType = "email") => {
    e.preventDefault();

    try {
      let response;
      let endpoint;

      if (authType === "email") {
        endpoint = `${API_URL}/auth/login`;
        response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(formData),
        });
      } else if (authType === "google" || authType === "facebook") {
        // Redirect to OAuth endpoint
        window.location.href = `${API_URL}/auth/${authType}`;
        return;
      }

      const data = await response.json();

      if (response.ok) {
        login(data);
        console.log("Login successful:", data);
        navigate("/upload");
      } else {
        console.error("Login failed:", data?.message || data);
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
    }
  };

  return (
    <div className="login__pg">
      <form className="form__signin" onSubmit={(e) => handleSubmit(e, "email")}>
        <h1>Welcome back</h1>

        <div className="form__signin-btns">
          <button
            className="form__signin-btn"
            type="button"
            onClick={(e) => handleSubmit(e, "google")}
          >
            Sign in with Google
          </button>
          <button
            className="form__signin-btn"
            type="button"
            onClick={(e) => handleSubmit(e, "facebook")}
          >
            Sign in with Facebook
          </button>
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

        <button className="form__signin-btn login" type="submit">
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
