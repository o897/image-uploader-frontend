import Navbar from "../components/Navbar";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="profile_container">
        <div className="profile_user">
          <div className="profile_icon">
            {/* Added a placeholder image and closed the tag */}
            <img src="https://via.placeholder.com/150" alt="profile image" />
          </div>
          <div className="profile_details">
            <h2>User Name</h2>
            <p>User Bio or Description</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
