import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Community from "./Community";
import Navbar from "../components/Navbar";
import ImagesGrid from "../components/ImagesGrid";
import PlatformFilter from "../components/PlatformFilter";
import { useAuth } from "../contexts/AuthContext";

function Home() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const { user } = useAuth();

  const API_KEY = process.env.REACT_APP_PEXELS_API_KEY;

  const col1 = photos.filter((_, i) => i % 3 === 0);
  const col2 = photos.filter((_, i) => i % 3 === 1);
  const col3 = photos.filter((_, i) => i % 3 === 2);

  // =========================
  // 🔥 LOAD LIKES
  // =========================
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
    } catch {
      return new Set();
    }
  };

  // =========================
  // 🔥 FETCH DATA (FIXED)
  // =========================
  const fetchData = async () => {
    setLoading(true);

    try {
      // 👉 fetch both at same time
      const [pexelsRes, likedSet] = await Promise.all([
        fetch(
          `https://api.pexels.com/v1/curated?page=${page}&per_page=10`,
          {
            headers: { Authorization: API_KEY },
          }
        ),
        loadlikes(),
      ]);

      const data = await pexelsRes.json();

      if (!data.photos) {
        toast("Pexels failed");
        return;
      }

      const photosWithLikes = data.photos.map(photo => ({
        ...photo,
        liked: likedSet.has(String(photo.id)),
      }));

      // ✅ prevent duplicates
      setPhotos(prev => {
        const existingIds = new Set(prev.map(p => p.id));
        const newPhotos = photosWithLikes.filter(
          p => !existingIds.has(p.id)
        );
        return [...prev, ...newPhotos];
      });

    } catch (err) {
      console.log(err);
      toast("Failed to load images");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  // =========================
  // ❤️ LIKE IMAGE
  // =========================
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
          headers: { "Content-Type": "application/json" },
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
        prev.map(p =>
          p.id === photo.id
            ? { ...p, liked: data.like }
            : p
        )
      );

    } catch {
      toast("Something went wrong");
    }
  };

  // =========================
  // 🔁 SCROLL
  // =========================
  useEffect(() => {
    const handleScroll = () => {
      const reachedBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;

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
        <Community />
      </section>

      <PlatformFilter
        onYoutube={() => toast("coming soon")}
        onNetflix={() => toast("coming soon")}
      />

      <section className="home_hero">
        <h2>Community Uploads</h2>

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