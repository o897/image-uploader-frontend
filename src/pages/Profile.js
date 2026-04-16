// import Navbar from "../components/Navbar";
import Collection from "../components/Collection";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { MdAdd } from "react-icons/md";


const Profile = () => {

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
        <section className="home_platforms" id="hm-pt-prof">
          <a className="home-all-med">
            All
          </a>
          <div className="row">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/023/986/561/small/tiktok-logo-tiktok-logo-transparent-tiktok-icon-transparent-free-free-png.png" />
            <p>Tiktok Memories</p>
            <span className="med-count">900</span>
          </div>
          <div className="row">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/018/930/476/small_2x/facebook-logo-facebook-icon-transparent-free-png.png" />
            <p>Facebook Memories</p>
            <span className="med-count">920</span>
          </div>
          <div className="row">
            <img src="https://img.freepik.com/premium-vector/youtube-icon-illustration-youtube-app-logo-social-media-icon_561158-3674.jpg" />
            <p>Youtube Memories</p><span className="med-count">90k</span>
          </div>
          <div className="row">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1qA65lbq7b6F7V-uQXDfHnTtyCLC4M_Zj1Q&s" />
            <p>Netflix Moments</p>
            <span className="med-count">120k</span>
          </div>
        </section>
        {/* <div className="profile_collection">
          <div className="prof-card-container">
            <div className="profile_collection-card">
            
              <img src="https://sf-static.tiktokcdn.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon2.png"/>
              <h3>Tiktok</h3>
              <p>11 posts</p>
          </div>
            </div>

           <div className="profile_collection-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" />
              <h3>Youtube</h3>
              <p>9 posts</p>
          </div>
           <div className="profile_collection-card">
              <img src="https://static.designboom.com/wp-content/uploads/2023/09/facebook-new-logo-change-designboom-02.jpg" />
              <h3>Facebook</h3>
              <p>4 Posts</p>
              
          </div>


        </div> */}

      </div>
    </>
  );
};

export default Profile;
