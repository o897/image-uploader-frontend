import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { FaTiktok } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { FiExternalLink } from "react-icons/fi";
import { CiBookmark } from "react-icons/ci";
import Community from "./Community";
import Navbar from "../components/Navbar";
import ImagesGrid from "../components/ImagesGrid";


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
        console.log(data);
        if (page > 1) {
          setPhotos((prev) => [...prev, ...data.photos]);
          setLoading(false);
        } else {
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
      <section className="home_platforms">
        <a className="home-all-med">
          All
        </a>
        <div className="row">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/023/986/561/small/tiktok-logo-tiktok-logo-transparent-tiktok-icon-transparent-free-free-png.png" />
          <p>Tiktok Memories</p>
          <span className="med-count">900</span>
        </div>
        <div className="row">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/018/930/476/small_2x/facebook-logo-facebook-icon-transparent-free-png.png" />
          <p>Facebook Memories</p>
          <span className="med-count">920</span>
        </div>
        <div className="row">
          <img src="https://img.freepik.com/premium-vector/youtube-icon-illustration-youtube-app-logo-social-media-icon_561158-3674.jpg" />
          <p>Youtube Memories</p><span className="med-count">90k</span>
        </div>
        <div className="row">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1qA65lbq7b6F7V-uQXDfHnTtyCLC4M_Zj1Q&s" />
          <p>Netflix Moments</p>
          <span className="med-count">120k</span>
        </div>
      </section>      {/* pop us when user clicks a photos */}
      <section className="home_hero">
        <h2 className="home_hero-title">Community Uploads</h2>

        <ImagesGrid columns={[col1,col2,col3]}/>

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
