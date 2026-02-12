import { useNavigate } from "react-router-dom";
import "../../src/App.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { CiSearch } from "react-icons/ci";



const Navbar = () => {
  const API_URL =
    process.env.REACT_APP_API_URL ||
    "https://image-uploader-backend-yzqj.onrender.com";

  const navigate = useNavigate();

  const { user, logout, login } = useAuth();

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      await fetch(`${API_URL}/auth/logout`);
      logout();
      navigate("/");
    } catch (e) {
      console.log("logout failed", e);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(`${API_URL}/auth/success`, {
          credentials: "include",
        });

        if (response.ok) {
          const data = await response.json();
          login(data);
        }
      } catch (e) {
        console.log("Auth check skipped:", e.message);
      }
    };
    checkAuth();
  }, []);

  return (
    <>
      <div className="navbar">
        <div>
          <Link to="/"> Memoir</Link>
        </div>
        <div className="navbar__menu">
          <input
            name="search"
            className="navbar__menu-input"
            placeholder="Search photos using keywords or a description"
          />
          {user ? (
            <div>
              <button
                className="navbar__menu-btn-login submit__img-btn"
                onClick={handleLogout}
              >
                Logout
              </button>

              <button
                className="submit__img-btn"
                onClick={() => navigate("/upload")}
              >
                Upload
              </button>
            </div>
          ) : (
            // after user logs in log btn changes into user profile icon
            <button
              className="navbar__menu-btn-login submit__img-btn"
              onClick={() => navigate("/login")}
            >
              Log in
            </button>
          )}
        </div>
      </div>

      {/* <div className="options">
        <div className="options-item">
          <Link to="/collection/{}">Anime</Link>
        </div>
        <div className="options-item">
          <Link to="/afcon" /> Sports
        </div>
        <div className="options-item">
          <Link to="/memories" /> Year Memories
        </div>
        <div className="options-item">
          <Link to="/2026" />
          Netflix 👀
        </div>
      </div> */}
    </>
  );
};

export default Navbar;
