import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./Loading";

export default function Complete() {
  const location = useLocation();
  const filename = location.state?.filename;
  // const filename = "20230802_131109.jpg";

  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(true); // Initialize loading as true

  useEffect(() => {
    const fetchData = () => {
      const response = fetch(
        `https://image-uploader-backend-yzqj.onrender.com/api/${filename}`
      );
      const data = response.json();    
      setImageData(data);
      console.log(imageData);
      setLoading(false);
    };
    fetchData();
  }, []);

  console.log("filename Complete page : ", filename);
  console.log("image data : ", imageData);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        imageData?.url && (
          <div className="image">
            <div className="Upload__message">
              <i>
                <svg
                  xmlns="(link unavailable)"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#219653"
                >
                  <path d="M422-297.33 704.67-580l-49.34-48.67L422-395.33l-118-118-48.67 48.66L422-297.33ZM480-80q-82.33 0-155.33-31.5-73-31.5-127.34-85.83Q143-251.67 111.5-324.67T80-480q0-83 31.5-156t85.83-127q54.34-54 127.34-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82.33-31.5 155.33-31.5 73-85.5 127.34Q709-143 636-111.5T480-80Z" />
                </svg>
              </i>
              <div className="Upload__message-title">
                Uploaded Successfully!
              </div>
            </div>
            <div className="Uploaded__image">
              <img src={imageData.url} alt="https://res.cloudinary.com/teepublic/image/private/s--9_lwy7bt--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:38/co_ffffff,e_outline:inner_fill:38/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1513290234/production/designs/2179068_1.jpg" />
            </div>
            <div className="Uploaded__image--link">
              <div className="Uploaded__image--link-p">{imageData.url}</div>
              <button
                className="uploaded__image--link-btn"
                onClick={() => navigator.clipboard.writeText(imageData.url)}
              >
                Copy Link
              </button>
            </div>
          </div>
        )
      )}
    </>
  );
}
