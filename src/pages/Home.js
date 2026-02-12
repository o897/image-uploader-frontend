import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Community from "./Community";
import Navbar from "../components/Navbar";


function Home() {
  // fetch images from cloudinary api

  // Ill be using pexels api to fill the home page

  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

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
      {/* <div className="navbar">
        <div>
          <Link to="/"> Memoir</Link>
        </div>
        <div className="navbar__menu">
          <button
            className="navbar__menu-btn-login submit__img-btn"
            onClick={() => navigate("/login")}
          >
            Log in
          </button>
        </div>
      </div> */}

      <section className="home_intro">
         <Navbar />
      <div className="collection">
        <h3 className="collection-intro">
          A MERN-stack image sharing platform inspired by Pexels, built to
          demonstrate real-world API consumption, authentication, media uploads,
          and user-controlled content sharing.
        </h3>
        <Community />
      </div>
      </section>
    

      <section className="home_hero">
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
      </section>

    </>
  );
}

export default Home;
