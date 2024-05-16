import { useEffect,useState } from "react";



export default function Complete({ filename }) {
    

const [imageData, setImageData] = useState(null);

  const [name, setName] = useState(filename.slice(0,-4));
  console.log("name : ",name);

  useEffect(() => {
    // Fetch image data from your backend API
    fetch(`https://image-uploader-backend-yzqj.onrender.com/api/${name}`)
      .then(response => response.json())
      .then(data => setImageData(data))
      .catch(error => console.error('Error fetching image data:', error));
  }, []);

  const {url} = imageData;

  console.log("new url", url);
//   console.log("url ; ", url);
  
  return (
    
    <div>

    {
       imageData !== null ? 
     ( <div className="image">
        <div className="Upload__message">
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#219653"
            >
              <path d="M422-297.33 704.67-580l-49.34-48.67L422-395.33l-118-118-48.67 48.66L422-297.33ZM480-80q-82.33 0-155.33-31.5-73-31.5-127.34-85.83Q143-251.67 111.5-324.67T80-480q0-83 31.5-156t85.83-127q54.34-54 127.34-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82.33-31.5 155.33-31.5 73-85.5 127.34Q709-143 636-111.5T480-80Z" />
            </svg>
          </i>
          <div className="Upload__message-title">Uploaded Successfully!</div>
        </div>
        <div className="Uploaded__image">
          <img
            src={url}
            alt=""
          />
        </div>
        <div className="Uploaded__image--link">
          <div className="Uploaded__image--link-p">
            {url}
          </div>
          <button
            className="uploaded__image--link-btn"
            onClick={() =>
              navigator.clipboard.writeText(
                {url}
              )
            }
          >
            Copy Link
          </button>
        </div>
      </div>)

      : ("Image data not set")
    }
      
    </div>
  );
}
