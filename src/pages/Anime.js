// import { useState, useEffect } from "react";

// const Anime = () => {
//   const API_KEY = process.env.REACT_APP_PEXELS_API_KEY;

//   const [photos, setPhotos] = useState();
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           //   "https://api.pexels.com/v1/curated?page=1&per_page=20",
//           "https://api.pexels.com/v1/search?query=anime&per_page=20&page=1",
//           {
//             headers: {
//               Authorization: API_KEY, // ✅ THIS IS THE KEY
//             },
//           }
//         );

//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const result = await response.json();
//         console.log("result photos", result);
//         setPhotos(result.photos); // ✅ photos only
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//       {/* Site for user to upload anime pictures */}

//       <div className="hero">
//         <div className="hero__images">
//           {photos.slice(0, 2).map((photo) => (
//             <div className="hero__images-image" key={photo.id}>
//               <img
//                 src={photo.src.large}
//                 srcSet={`${photo.src.medium} 350w, ${photo.src.large} 940w, ${photo.src.large2x} 1880w`}
//                 sizes="(max-width: 500px) 100vw, 410px"
//                 alt={photo.alt}
//                 loading="lazy"
//               />
//             </div>
//           ))}
//         </div>
//         <div className="hero__images">
//           {photos.slice(3, 5).map((photo) => (
//             <div className="hero__images-image" key={photo.id}>
//               <img
//                 src={photo.src.large}
//                 srcSet={`${photo.src.medium} 350w, ${photo.src.large} 940w, ${photo.src.large2x} 1880w`}
//                 sizes="(max-width: 500px) 100vw, 410px"
//                 alt={photo.alt}
//                 loading="lazy"
//               />
//             </div>
//           ))}
//         </div>
//         <div className="hero__images">
//           {photos.slice(6, 8).map((photo) => (
//             <div className="hero__images-image s" key={photo.id}>
//               <img
//                 src={photo.src.large}
//                 srcSet={`${photo.src.medium} 350w, ${photo.src.large} 940w, ${photo.src.large2x} 1880w`}
//                 sizes="(max-width: 500px) 100vw, 410px"
//                 alt={photo.alt}
//                 loading="lazy"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Anime;

import { useState, useEffect } from "react";

const Anime = () => {
  const API_KEY = process.env.REACT_APP_PEXELS_API_KEY;

  // FIX 1: Initialize as an empty array [] instead of undefined
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.pexels.com/v1/search?query=anime&per_page=20&page=1",
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
        setPhotos(result.photos || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [API_KEY]);

  // FIX 3: Handle Loading and Error states in the UI
  if (loading) return <div className="loading">Loading photos...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <>
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
