import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import Community from "./Community";
import Navbar from "../components/Navbar";
import ImagesGrid from "../components/ImagesGrid";
import PlatformFilter from "../components/PlatformFilter";

function Home() {
  // depending on which site the user uploaded from we can take the icon, so we should have an object
  // Ill be using pexels api to fill the home page
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [errorMsg, setErrorMsg] = useState(null);

  const API_KEY = process.env.REACT_APP_PEXELS_API_KEY;

  const col1 = photos.filter((_, i) => i % 3 === 0);
  const col2 = photos.filter((_, i) => i % 3 === 1);
  const col3 = photos.filter((_, i) => i % 3 === 2);

  const likeImage = async (photoId) => {
  try {
    const response = await fetch(
      `https://oraserver.online/image/like/${photoId}`,
      {
        method: "POST",
        credentials: "include"
      }
    );

    if (!response.ok) {
      toast("cant like image");
      return;
    }

    const data = await response.json(); // { like: true/false }

    setPhotos(prev =>
      prev.map(photo =>
          photo.id === photoId
            ? { ...photo, liked: data.like }
            : photo       
      )
    );

  } catch (err) {
    console.error(err);
    toast("Something went wrong");
  }
};

  const onYoutube = async (e) => {
    // if user not logged in show error

    e.preventDefault()
    
    const response = await fetch("https://oraserver.online/media/youtube/likes", {
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      return toast.error('Login to your google account first');
    }
    const youtubePhotos = data.map((item) => ({
      id: item.id,
      image: item.snippet.thumbnails.high.url,
    }));

    setPhotos(youtubePhotos);

  };

 const loadlikes = async () => {
  const response = await fetch(`https://oraserver.online/image/likes/me`, {
    credentials: "include"
  });

  const data = await response.json();

  const ids = data.imageIds.map(item => item.photoId);

  return new Set(ids);
};

  

  const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.pexels.com/v1/curated?page=${page}&per_page=10`,
          {
            headers: {
              Authorization: API_KEY,
            },
          }
        );

        // pexels data
        const data = await response.json();

        const likedSet = await loadlikes();

        const photosWithLikes = data.photos.map(photo => (
          {
            ...photo, 
            liked: likedSet.has(String(photo.id))
          }
        ))
       
          setPhotos((prev) => [...prev, ...photosWithLikes]);

      } catch (err) {
        console.log(err.message)
        setLoading(false);
      } finally {
          setLoading(false);

      } 
  };

  useEffect(() => {
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
        setLoading(true); 
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <>
      <div><Toaster/></div>
      <section className="home_intro">
        <Navbar />
        <div className="collection">
          <Community />
        </div>
      </section>
      <p className="error-txt">{errorMsg}</p>
      <PlatformFilter onYoutube={onYoutube} onNetflix={() => toast("feature coming soon")}/>
      <section className="home_hero">
        <h2 className="home_hero-title">Community Uploads</h2>

        <ImagesGrid columns={[col1, col2, col3]} likes={likeImage}/>

        {loading && (
          <div className="loader"></div>
        )}

      </section>

    </>
  );
}

export default Home;
