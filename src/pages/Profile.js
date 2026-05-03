// import Navbar from "../components/Navbar";
import { useAuth } from "../contexts/AuthContext";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import ImagesGrid from "../components/ImagesGrid";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Profile = () => {
  const [photos, setPhotos] = useState([]);

  const { user } = useAuth();


  const col1 = photos.filter((_, i) => i % 3 === 0);
  const col2 = photos.filter((_, i) => i % 3 === 1);
  const col3 = photos.filter((_, i) => i % 3 === 2);

  

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        // we reading images stored in the db
        const query = await fetch("https://oraserver.online/image/mine", {
          method: "GET",
          credentials: "include"
        });

        const res = await query.json();


        const normalized = res.map(photo => ({
          id: photo._id,
          src: {
            large: photo.url, 
          },
          photographer: photo.filename,
          alt: photo.imageTitle || photo.filename,
          liked: false,
        }));

        setPhotos(normalized);

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
              src={user?.photo || "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3408.jpg?w=360"}
              alt="user"
            />
          </div>
          <div className="profile_details">
            <h2>
              {user?.firstName} {user?.lastName}
            </h2>
            <p>{user?.about || "Write your about, whats an interesting fact about you?"}</p>
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
