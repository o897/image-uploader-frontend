import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

function Home() {
  // fetch images from cloudinary api

  // Ill be using pexels api to fill the home page

  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = process.env.REACT_APP_PEXELS_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.pexels.com/v1/curated?page=1&per_page=20",
          {
            headers: {
              Authorization: API_KEY, // ✅ THIS IS THE KEY
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("result photos", result);
        // Read custom rate-limit headers
        const rateLimit = response.headers.get("X-Ratelimit-Limit");
        const remaining = response.headers.get("X-Ratelimit-Remaining");
        const reset = response.headers.get("X-Ratelimit-Reset");

        console.log("Rate Limit:", rateLimit);
        console.log("Remaining:", remaining);
        console.log("Reset:", reset);

        setPhotos(result.photos); // ✅ photos only
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />

      <div className="collection">
        <h3 className="collection-intro">
          A MERN-stack image sharing platform inspired by Pexels, built to
          demonstrate real-world API consumption, authentication, media uploads,
          and user-controlled content sharing.
        </h3>
        <div className="collection-card">
          {/* when a person hover it flips with some funny meme people encouraged to upload some memes */}

          {/* Cringe pic challenge */}
          <div className="collection-card-front">
            <h4>Cringe</h4>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9J3tl5Eu3zxb4HuCB3ys6yXmXREZDacqMLg&s"
              alt="Avatar"
            />
          </div>
        </div>
        <div className="collection-card">
          <div className="collection-card-front">
            <div className="collection-card-front-head">
              <div>Collections</div>
              <div>See all</div>
            </div>
            <ul>
              <li>Daily</li>
              <li>History</li>
              <li>Throwback</li>
              <li>Afcon</li>
            </ul>
          </div>
        </div>
      </div>

      <h4>Images by Pexels</h4>
      <div className="hero">
        <div className="hero__images">
          {photos.slice(0, 5).map((photo) => (
            <div className="hero__images-image" key={photo.id}>
              <img
                src={photo.src.large}
                srcSet={`${photo.src.medium} 350w, ${photo.src.large} 940w, ${photo.src.large2x} 1880w`}
                sizes="(max-width: 500px) 100vw, 410px"
                alt={photo.alt}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="hero__images">
          {photos.slice(6, 11).map((photo) => (
            <div className="hero__images-image" key={photo.id}>
              <img
                src={photo.src.large}
                srcSet={`${photo.src.medium} 350w, ${photo.src.large} 940w, ${photo.src.large2x} 1880w`}
                sizes="(max-width: 500px) 100vw, 410px"
                alt={photo.alt}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="hero__images">
          {photos.slice(12, 17).map((photo) => (
            <div className="hero__images-image s" key={photo.id}>
              <img
                src={photo.src.large}
                srcSet={`${photo.src.medium} 350w, ${photo.src.large} 940w, ${photo.src.large2x} 1880w`}
                sizes="(max-width: 500px) 100vw, 410px"
                alt={photo.alt}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
