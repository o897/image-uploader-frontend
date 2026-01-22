import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    message: "",
  });

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data);

        // 2. NOW, the frontend performs the redirect.
        navigate("/upload");
      } else {
        console.error("Login failed: ", data.message);
      }
    } catch (error) {
      // This catches network errors (e.g., server is down)
      console.error("An error occurred during login:", error);
      // setError("Could not connect to the server. Please try again later.");
    }
  };

  return (
    <div className="login__pg">
      <form className="form__signin" onSubmit={handleSubmit}>
        <h1>Welcome back</h1>

        <div className="form__signin-btns">
          {/* handle login on the frontend if it return user redirect */}
          <button className="form__signin-btn">
            <a href="http:// https://image-uploader-backend-yzqj.onrender.com/auth/google">
              Sign in with Google
            </a>
            {/* <a href="http://localhost:3000/auth/google">Sign in with Google</a> */}
          </button>
          <button className="form__signin-btn">Sign in with Apple</button>
          <button className="form__signin-btn">
            <a href="http://localhost:3000/auth/facebook">
              {" "}
              Sign in with Facebook
            </a>
          </button>
        </div>

        {/* make it a component */}
        <div className="form__signin-input">
          <label htmlFor="">Email</label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
          <label htmlFor="">Password</label>
          <input
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
          Dont have an acoount? <a href="/register">Sign up</a>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
