import Navbar from "../components/Navbar";

function Community({ name, coverImage, userPicture, title, description }) {
  // db to inject into the card
  return (
    <>
      <Navbar />
      <div>
        <h2>{title ?? "community title"}</h2>
        <div className="community">
          <div className="community-card">
            {/* this will be the uploaded image by a user */}
            <img
              src={coverImage}
              alt={title}
              className="community-card-image"
            />
            <div>
              <div>{title ?? "title"}</div>
              <div>{description ?? "description"}</div>
              <div>
                <div>{userPicture}</div>
                <div className="">{name ?? "name"}</div>
              </div>
            </div>
          </div>
          {/* person can only upload only upto 4 */}
          <div className="community-photos">
            <div className="community-photo">
              <img src="https://cdn.pixabay.com/photo/2025/11/08/08/18/muslim-9944195_1280.jpg" />
            </div>
            <div className="community-photo">
              <img src="https://images.pexels.com/photos/35163027/pexels-photo-35163027.jpeg" />
            </div>
            <div className="community-photo">
              <img src="https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg" />
            </div>
            <div className="community-photo">
              <img src="https://images.pexels.com/photos/2660262/pexels-photo-2660262.jpeg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Community;
