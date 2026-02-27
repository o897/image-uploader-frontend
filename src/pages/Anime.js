import { useState, useEffect } from "react";
// This show 5 or 4 set of photos beside their user but this is all according to the community :/community
import { Link } from "react-router-dom";

const Anime = () => {
  const API_KEY = process.env.REACT_APP_PEXELS_API_KEY;

  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const data = [
  {
    title: "Anime",
    count: "124 Photos",
    img: "https://www.lingualift.com/wp-content/uploads/2020/03/anime.png",
  },
  {
    title: "Daily",
    count: "89 Photos",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
  }
];
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.pexels.com/v1/search?query=anime&per_page=10&page=1",
          {
            headers: {
              Authorization: API_KEY,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        // FIX 2: Safeguard against empty results
        setPhotos(result.photos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // FIX 3: Handle Loading and Error states in the UI
  if (loading) return <div className="loading">Loading photos...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <>
    hi
      <div className="collection">
          {data.map((item, index) => (
                <Link to={`/challenge/${item.title.toLowerCase()}`} key={index}>
                  <div key={index} className="collection-card">
                    {/* Optional Badge */}
                    <div className="collection-badge">Challenge</div>
        
                    <img src={item.img} alt={item.title} />
        
                    <div className="collection-overlay">
                      <h3 className="collection-title">{item.title}</h3>
                      <span className="collection-meta">
                        {item.count} — Created by You
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
      </div>
      <p>Orapeleng</p>
      <div className="hero">
        <div className="hero__images">
          {photos.slice(0, 2).map((photo) => (
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
          {photos.slice(3, 5).map((photo) => (
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
          {photos.slice(6, 8).map((photo) => (
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
};

export default Anime;
