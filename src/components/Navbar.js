import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../src/App.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // check to see if user is logged in if yes hide some things
  useEffect(() => {

    console.log("HI");
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
            <Link to={"https://image-uploader-backend-yzqj.onrender.com/auth/logout"}>Logout</Link>
          ) : (
            // after user logs in log btn changes into user profile icon
            <button
              className="navbar__menu-btn-login submit__img-btn"
              onClick={() => navigate("/login")}
            >
              Log in
            </button>
          )}
          <button
            className="submit__img-btn"
            onClick={() => navigate("/upload")}
          >
            Upload
          </button>
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
