import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { FaTiktok } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { CiBookmark } from "react-icons/ci";
import Community from "./Community";
import Navbar from "../components/Navbar";


function Home() {
  // fetch images from cloudinary api

  // depending on which site the user uploaded from we can take the icon, so we should have a an object
  // Ill be using pexels api to fill the home page
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const API_KEY = process.env.REACT_APP_PEXELS_API_KEY;

  const col1 = photos.filter((_, i) => i % 3 === 0);
  const col2 = photos.filter((_, i) => i % 3 === 1);
  const col3 = photos.filter((_, i) => i % 3 === 2);

  useEffect(() => {
    const fetchData = async () => {
      // ❌ Don't show loading on first load
      if (page > 1) setLoading(true);

      try {
        const response = await fetch(
          `https://api.pexels.com/v1/curated?page=${page}&per_page=10`,
          {
            headers: {
              Authorization: API_KEY,
            },
          }
        );

        const data = await response.json();

        // ⏳ ONLY delay for page 2+
        if (page > 1) {
            setPhotos((prev) => [...prev, ...data.photos]);
            setLoading(false);
        } else {
          // page 1 loads instantly
          setPhotos(data.photos);
        }

      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      const reachedBottom =
        scrollTop + windowHeight >= fullHeight - 100;

      if (reachedBottom && !loading) {
        setLoading(true); // 🔥 lock scrolling trigger
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <>

      <section className="home_intro">
        <Navbar />
        <div className="collection">
          <Community />
        </div>
      </section>


      {/* pop us when user clicks a photos */}
      <section className="home_hero">

        <div className="hero" id="challenge">
          {[col1, col2, col3].map((column, idx) => (
            <div className="hero__images" key={idx}>
              {column.map((photo) => (
                <div className="hero__images-image" key={photo.id}>
                  <img src={photo.src.large} alt={photo.alt} />
                  <GoHeart className="like-icon img-icon"/>
                  <CiBookmark className="bookmark-icon img-icon"/>
                  <FaTiktok className="media-icon img-icon"/>
                  <img className="img-icon-user" src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="/>
                </div>
              ))}
            </div>
          ))}
        </div>
        {loading && (
          <div className="">
            Loading more images...
          </div>
        )}

      </section>

    </>
  );
}

export default Home;
