import { useState } from 'react'
import { GoHeart } from "react-icons/go";
import { CiBookmark } from "react-icons/ci";
import { FiExternalLink } from "react-icons/fi";
import ViewImage from './ViewImage';
import toast from 'react-hot-toast';


// columns responsible for taking in each column
function ImagesGrid({ columns, likes }) {
  const [view, setView] = useState(false);
  //  selected photo
  const [selectedPhoto, setSelectedPhoto] = useState(null);


  // const likeImage = async (photoId) => {

  //   console.log(photoId);

  //   try {
  //     const response = await fetch(
  //       // `http://localhost:3000/image/like/${photoId}`,
  //       `https://oraserver.online/image/like/${photoId}`,
  //       {
  //         method: "POST",
  //         credentials: "include"
  //       }
  //     );

  //     if (!response.ok) {
  //       toast("cant like image");
  //       return;
  //     }

  //     const data = await response.json();

  //     const likedIds = data.imageIds;

  //     const likedSet = new Set(likedIds);

  //   } catch (err) {
  //     console.error(err);
  //     toast("Something went wrong");
  //   }
  // };

  return (
    <div className="hero">
      {columns && columns.map((column, index) => (
        <div className="hero__images" key={index}>
          {column.map((photo) => (
            <div className="hero__images-image" key={photo.id} onClick={(e) => setSelectedPhoto(photo)}>
              <img src={photo.src?.large || photo?.image || photo?.url} alt={photo?.alt || photo?.image || photo?.url} />

              {/* <GoHeart key={photo.id} className="like-icon img-icon" onClick={() => likes(photo.id)} /> */}
              <GoHeart
                className={`like-icon img-icon ${photo.liked ? "liked" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  likes(photo.id);
                }}
              />

              <img
                className="img-icon-user"
                src={`https://ui-avatars.com/api/?name=${photo?.photographer || photo?.image || photo.url}`}
                alt={photo?.photographer || photo?.image}
                loading='lazy'
              />

              <span className="img-icon-username">
                {photo?.photographer || photo?.image || "username"}
              </span>

              <FiExternalLink className="img-icon-link" />
            </div>
          ))}
        </div>
      ))}
      {
        selectedPhoto && (
          <ViewImage
            photo={selectedPhoto}
            onClose={() => setSelectedPhoto(null)}
          />
        )
      }
    </div>

  );
}

export default ImagesGrid;
