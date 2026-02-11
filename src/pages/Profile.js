// import Navbar from "../components/Navbar";
import Collection from "../components/Collection";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import Navbar from "../components/Navbar";

const Profile = () => {
  const API_URL =
    process.env.REACT_APP_API_URL ||
    "https://image-uploader-backend-yzqj.onrender.com";
  const { user, login } = useAuth();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${API_URL}/auth/success`, {
          credentials: "include", // include cookies if you are using sessions
        });
        const data = await response.json();

        if (response.ok) {
          login(data);
        } else {
          console.error("Login failed:", data?.message || data);
        }
      } catch (e) {
        console.error("Fetch error:", e);
      }
    };

    fetchUser();
  }, [user]);

  return (
    <>
      <Navbar />
      <div className="profile_container">
        <div className="profile_user">
          <div className="profile_icon">
            {/* Added a placeholder image and closed the tag */}
            <img
              src="https://images.pexels.com/users/avatars/2158460592/orapeleng-mathebula-233.jpg?auto=compress&fit=crop&h=140&w=140&dpr=1"
              alt="profile image"
            />
          </div>
          <div className="profile_details">
            <h2>
              {user.firstName} {user.lastName}
            </h2>
            |<p>User Bio or Description</p>
          </div>
          <div>
            <button>Edit profile</button>
          </div>
        </div>
        <div>
          <h2>User Session Data:</h2>
          {/* This prints the object as a readable string on the page */}
          <pre style={{ background: "#f4f4f4", padding: "10px" }}>
            {user ? JSON.stringify(user, null, 2) : "No user logged in"}
          </pre>
        </div>
        <Collection />
      </div>
    </>
  );
};

export default Profile;
