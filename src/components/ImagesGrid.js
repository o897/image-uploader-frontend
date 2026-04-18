import {useState} from 'react'
import { GoHeart } from "react-icons/go";
import { CiBookmark } from "react-icons/ci";
import { FiExternalLink } from "react-icons/fi";    
import ViewImage from './ViewImage';


// columns responsible for taking in each column
function ImagesGrid({ columns }) {
 const [view,setView] = useState(false);
//  selected photo
 const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="hero" id="challenge">
      {columns.map((column, index) => (
        <div className="hero__images" key={index}>
          {column.map((photo) => (
            <div className="hero__images-image" key={photo.id} onClick={(e) => setSelectedPhoto(photo)}>
              <img src={photo.src.large} alt={photo.alt} />

              <GoHeart className="like-icon img-icon" />

              <img
                className="media-icon img-icon"
                src="https://www.svgrepo.com/show/315519/pexels.svg"
                alt="Pexels"
              />

              <img
                className="img-icon-user"
                src={`https://ui-avatars.com/api/?name=${photo.photographer}`}
                alt={photo.photographer}
              />

              <span className="img-icon-username">
                {photo.photographer}
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
