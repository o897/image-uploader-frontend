import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Community from "./Community";
import Navbar from "../components/Navbar";
import ImagesGrid from "../components/ImagesGrid";
import PlatformFilter from "../components/PlatformFilter";
import { useAuth } from "../contexts/AuthContext";

function Home() {
  const [photos, setPhotos] = useState([]);
  const [likedSet, setLikedSet] = useState(new Set());
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const { user } = useAuth();

  const API_KEY = process.env.REACT_APP_PEXELS_API_KEY;


  const col1 = photos.filter((_, i) => i % 3 === 0);
  const col2 = photos.filter((_, i) => i % 3 === 1);
  const col3 = photos.filter((_, i) => i % 3 === 2);


  const loadlikes = async () => {
    try {
      const response = await fetch(
        `https://oraserver.online/image/likes/me`,
        { credentials: "include" }
      );

      if (!response.ok) return new Set();

      const data = await response.json();

      if (!data.imageIds) return new Set();

      return new Set(data.imageIds.map(item => item.photoId));
    } catch (err) {
      console.error("loadlikes error:", err);
      return new Set();
    }
  };

  useEffect(() => {
    const initLikes = async () => {
      const set = await loadlikes();
      setLikedSet(set);
    };

    initLikes();
  }, []);


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

      const data = await response.json();

      const photosWithLikes = data.photos.map(photo => ({
        ...photo,
        liked: likedSet.has(String(photo.id)),
      }));

    
      setPhotos(prev => {
        const existingIds = new Set(prev.map(p => p.id));

        const newPhotos = photosWithLikes.filter(
          p => !existingIds.has(p.id)
        );

        return [...prev, ...newPhotos];
      });

    } catch (err) {
      console.log(err.message);
      toast("Failed to load images");
    } finally {
      setLoading(false);
    }
  };

  // fetch when page changes
  useEffect(() => {
    fetchData();
  }, [page]);


  useEffect(() => {
    setPhotos(prev =>
      prev.map(photo => ({
        ...photo,
        liked: likedSet.has(String(photo.id)),
      }))
    );
  }, [likedSet]);


  const likeImage = async (photo) => {
    if (!user) {
      toast("login first");
      return;
    }

    try {
      const response = await fetch(
        `https://oraserver.online/image/like/${photo.id}`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            imageUrl: photo.src?.large || photo.image,
            photographer: photo.photographer,
          }),
        }
      );

      if (!response.ok) {
        toast("cant like image");
        return;
      }

      const data = await response.json();

   
      setPhotos(prev =>
        prev.map(pic =>
          pic.id === photo.id
            ? { ...pic, liked: data.like }
            : pic
        )
      );

     
      setLikedSet(prev => {
        const newSet = new Set(prev);

        if (data.like) {
          newSet.add(String(photo.id));
        } else {
          newSet.delete(String(photo.id));
        }

        return newSet;
      });

    } catch (err) {
      console.error(err);
      toast("Something went wrong");
    }
  };


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      const reachedBottom =
        scrollTop + windowHeight >= fullHeight - 100;

      if (reachedBottom && !loading) {
        setPage(prev => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);


  return (
    <>
      <Toaster />

      <section className="home_intro">
        <Navbar />
        <div className="collection">
          <Community />
        </div>
      </section>

      <PlatformFilter
        onYoutube={() => toast("feature coming soon")}
        onNetflix={() => toast("feature coming soon")}
      />

      <section className="home_hero">
        <h2 className="home_hero-title">Community Uploads</h2>

        <ImagesGrid
          columns={[col1, col2, col3]}
          likes={likeImage}
        />

        {loading && <div className="loader"></div>}
      </section>
    </>
  );
}

export default Home;