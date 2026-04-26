// import Navbar from "../components/Navbar";
import { useAuth } from "../contexts/AuthContext";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import ImagesGrid from "../components/ImagesGrid";
import { Link } from "react-router-dom";

const Profile = () => {
  const [photos, setPhotos] = useState([]);

  const { user } = useAuth();


  const col1 = photos.filter((_, i) => i % 3 === 0);
  const col2 = photos.filter((_, i) => i % 3 === 1);
  const col3 = photos.filter((_, i) => i % 3 === 2);


  useEffect(() => {
    console.log(user)
    const fetchPhotos = async () => {
      try {
        // we reading images stored in the db
        const query = await fetch("https://oraserver.online/image/mine", {
          method: "GET",
          credentials: "include"
        });

        const res = await query.json()
        setPhotos(res)
        console.log(photos);

      } catch (error) {
        console.log(error);
      }
    }
    fetchPhotos();
  }, []);

  return (
    <>
      <Navbar />
      <div className="profile_container">
        <div className="profile_user">
          <div className="profile_icon row">
            {/* Added a placeholder image and closed the tag */}
            <img
              src={user?.user?.photo || "https://images.pexels.com/users/avatars/2158460592/orapeleng-mathebula-233.jpg?auto=compress&fit=crop&h=140&w=140&dpr=1"}
              alt="user"
            />
          </div>
          <div className="profile_details">
            <h2>
              {user?.user?.firstName} {user?.user?.lastName}
            </h2>
            <p>Full-stack web developer building practical, real-world applications using React, Node.js, Express, and MongoDB. Focused on clean UI, solid backend systems, and working APIs.</p>
          </div>
          <div className="row">

            <li className="profile_user-btns">Share</li>
            <Link className="profile_user-btns" to="/profile/edit">Edit Profile</Link>
          </div>
          <h2 className="profile-title">Gallery</h2>

        </div>

        {/* <div className="profile_user_pins row">
          <li>Likes</li>
          <li>Favourite</li>
          <li>Memoir</li>
        </div> */}
        {/* <div className="profile_coll-icon">
          <MdAdd />
        </div> */}

      </div>
      {
        photos?.length > 0 ? <ImagesGrid columns={[col1, col2, col3]} /> : (
          <img className="no-img" src="https://sefuateurope.vtexassets.com/assets/vtex.file-manager-graphql/images/00d7afb6-4b37-4e22-8f4e-7ba1eb5f8d93___abcae94d543f1ddcc418317b979f6354.jpeg" alt="no photos" />
        )
      }

    </>
  );
};

export default Profile;
