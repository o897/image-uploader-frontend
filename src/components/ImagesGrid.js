import { useState } from 'react'
import { GoHeart } from "react-icons/go";
import ViewImage from './ViewImage';
import toast from 'react-hot-toast';
import { FaHeart } from "react-icons/fa";


// columns responsible for taking in each column
function ImagesGrid({ columns, likes }) {
  const [view, setView] = useState(false);
  //  selected photo
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="hero">
      {columns && columns.map((column, index) => (
        <div className="hero__images" key={index}>
          {column.map((photo) => (
            <div className="hero__images-image" key={photo.id} onClick={(e) => setSelectedPhoto(photo)}>
              {/* <img src={photo.src?.large || photo?.image || photo?.url} alt={photo?.alt || photo?.image || photo?.url} /> */}
              <img src={photo.src?.large} alt={photo.alt || "image"} />
                <FaHeart 
                // if liked is true
                className={`like-icon img-icon ${photo.liked ? "liked" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  likes(photo);
                }}
              />

              <img
                className="img-icon-user"
                src={`https://ui-avatars.com/api/?name=${photo?.photographer || photo?.image || photo.url || photo.link}`}
                alt={photo?.photographer || photo?.image}
                loading='lazy'
              />

              <span className="img-icon-username">
                {photo?.photographer || photo?.image || "username"}
              </span>

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
