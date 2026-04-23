import { useState } from 'react'
import { GoHeart } from "react-icons/go";
import { CiBookmark } from "react-icons/ci";
import { FiExternalLink } from "react-icons/fi";
import ViewImage from './ViewImage';


// columns responsible for taking in each column
function ImagesGrid({ columns }) {
  const [view, setView] = useState(false);
  //  selected photo
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // fetch user uploaded images

  return (
    <div className="hero">
      {columns && columns.map((column, index) => (
        <div className="hero__images" key={index}>
          {column.map((photo) => (
            <div className="hero__images-image" key={photo.id} onClick={(e) => setSelectedPhoto(photo)}>
              <img src={photo.src?.large || photo?.image || photo?.filename} alt={photo?.alt || photo?.image || photo?.filename} />

              <GoHeart className="like-icon img-icon" />

              <img
                className="img-icon-user"
                src={`https://ui-avatars.com/api/?name=${photo?.photographer || photo?.image || photo.filename}`}
                alt={photo?.photographer || photo?.image}
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
