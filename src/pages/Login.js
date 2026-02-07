import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const API_URL =
  process.env.REACT_APP_API_URL ||
  "https://image-uploader-backend-yzqj.onrender.com";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("log in btn cliked");
    
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // 3. Save user data globally and to LocalStorage
        // Assuming 'data' contains user info like { name, email, token }
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
      <form className="form__signin" onSubmit={handleSubmit}>
        <h1>Welcome back</h1>

        <div className="form__signin-btns">
          <a
            className="form__signin-btn"
            href={`${API_URL}/auth/google`}
            rel="noopener noreferrer"
            
          >
            Sign in with Google
          </a>
          <a
            className="form__signin-btn"
            href={`${API_URL}/auth/facebook`}
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

        <button className="form__signin-btn login" type="submit" onClick={handleSubmit}>
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
