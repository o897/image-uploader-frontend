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

                    {/* <button className="view-dwn-btn">Download</button> */}
                    {photo.type === "youtube" ? (
                        <button onClick={() => window.open(photo.link, "_blank")}>
                            Watch on YouTube
                        </button>
                    ) : (
                        <button onClick={() => window.open(photo.src.original, "_blank")}>
                            Download
                        </button>
                    )}
                </div>
                <img src={photo.src.large} alt={photo.alt} />
                <div className="view-info">
                    <p>Free to use by pexels</p>
                    <p>Click anywhere wthin to close</p>
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