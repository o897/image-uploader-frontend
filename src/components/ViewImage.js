import React from "react";
import { FiExternalLink } from "react-icons/fi";

const ViewImage = ({ photo, onClose }) => {
    return (
        <div className="view-wrapper" onClick={onClose}>
            <div className="view-content">
                <div className="view-content-user">
                    <div className="row">
                        <img
                            className="view-icon"
                            src={`https://ui-avatars.com/api/?name=${photo.photographer}`}
                            alt={photo.photographer}
                        />
                        <p className="">{photo.photographer}</p>
                    </div>

                    <button className="view-dwn-btn">Download</button>
                </div>
                <img src={photo.src.large} alt={photo.alt} />
                <div className="view-info">
                    <p>Free to use by pexels</p>
                    <FiExternalLink className="view-btn"
                        onClick={() =>
                            /* open a new page */
                            window.open(photo.photographer_url, "_blank")
                        }
                    />
                </div>

            </div>
        </div>
    );
};

export default ViewImage;