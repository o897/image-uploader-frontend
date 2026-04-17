import { useNavigate } from "react-router-dom";
import "../../src/App.css";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { FaUser } from "react-icons/fa";
import { FaDoorOpen } from "react-icons/fa";

const Navbar = () => {
    
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const handleLogout = async (e) => {
    e.preventDefault();
    await logout();
    navigate("/")
  };
   
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
              <div><FaDoorOpen className="user-icon" onClick={handleLogout}/></div>

            </div>
          ) : (
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
