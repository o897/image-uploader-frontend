// import Navbar from "../components/Navbar";
import { useAuth } from "../contexts/AuthContext";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { MdAdd } from "react-icons/md";
import PlatformFilter from "../components/PlatformFilter";
import ImagesGrid from "../components/ImagesGrid";

const Profile = () => {
  const [userPhotos, setUserPhotos] = useState([]);
  useEffect(() => {
    try {
      // we reading images stored in the db
      const query = fetch("https://oraserver.online/images/me");
      const res = query.json()
      console.log(res)
    } catch (error) {

    }


  }, []);
  const { user } = useAuth();

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
              {user.user?.firstName} {user.user?.lastName}
            </h2>
            <p>User Bio or Description</p>
          </div>
          <div className="profile_user-btns">
            <li>Share</li>
            <li>Edit Profile</li>
          </div>
        </div>
        <div className="profile_user_pins">
          <li>Likes</li>
          <li>Favourite</li>
          <li>Memoir</li>
        </div>
        <div className="profile_coll-icon">
          <MdAdd />
        </div>

        <ImagesGrid />
      </div>
    </>
  );
};

export default Profile;
