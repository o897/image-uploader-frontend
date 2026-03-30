import { useNavigate } from "react-router-dom";
import "../../src/App.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { FaUser } from "react-icons/fa";
import { FaDoorOpen } from "react-icons/fa";



const Navbar = () => {
  const API_URL =
    process.env.REACT_APP_API_URL ||
    "https://oraserver.online";

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

          {user ? (
            <div className="navbar__menu-items">


              <button
                className="submit__img-btn"
                onClick={() => navigate("/upload")}
              >
                Upload
              </button>

              <div><FaUser className="user-icon" onClick={() => navigate("/profile")} /></div>
              {/* <button
                className="navbar__menu-btn-login submit__img-btn"
                onClick={handleLogout}
              >
                Logout
              </button> */}
              <div><FaDoorOpen className="user-icon" onClick={handleLogout}/></div>

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
    </>
  );
};

export default Navbar;
