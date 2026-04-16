import React from "react";
import { FiExternalLink } from "react-icons/fi";

const ViewImage = ({ photo,onClose }) => {
  return (
    <div className="view-wrapper" onClick={onClose}>
      
      {/* stops click from closing modal when clicking inside */}
      <div
        className="view-content"
       
      >
        
        <img src={photo.src.large} alt={photo.alt} />

        <div className="view-info">
          <p>{photo.photographer}</p>

          <FiExternalLink
            onClick={() =>
              window.open(photo.photographer_url, "_blank")
            }
          />
        </div>

      </div>
    </div>
  );
};

export default ViewImage;