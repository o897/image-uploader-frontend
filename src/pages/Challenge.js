import { useState, useEffect } from "react";
import ChallengeIntro from "../components/ChallengeIntro";
import { useParams } from "react-router-dom";
import Layout from "../layouts/Layout";
import { FaClock } from "react-icons/fa";


const Challenge = () => {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const { category } = useParams();
  const API_KEY = process.env.REACT_APP_PEXELS_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.pexels.com/v1/search?query=${category}&per_page=20`,
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

        setPhotos(result.photos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    console.log(category);
    fetchData();
  }, []);

  console.log("photos", photos);

  return (

  <Layout>

     <div className="challenge">
      <ChallengeIntro />
      <section className="submission">
        <div className="submissions">
          <div className="user-submission">

            <div className="user-submissions">
              <img className="submission-img" alt="" srcSet="" src="https://a.storyblok.com/f/178900/960x540/f8a7314e6a/demon-slayer-infinity-castle.JPG/m/filters:quality(95)format(webp)" />
              <img className="submission-img" alt="" srcSet="" src="https://a.storyblok.com/f/178900/960x540/f8a7314e6a/demon-slayer-infinity-castle.JPG/m/filters:quality(95)format(webp)" />
              <img className="submission-img" alt="" srcSet="" src="https://a.storyblok.com/f/178900/960x540/f8a7314e6a/demon-slayer-infinity-castle.JPG/m/filters:quality(95)format(webp)" />
              <img className="submission-img" alt="" srcSet="" src="https://a.storyblok.com/f/178900/960x540/f8a7314e6a/demon-slayer-infinity-castle.JPG/m/filters:quality(95)format(webp)" />
              <img className="submission-img" alt="" srcSet="" src="https://a.storyblok.com/f/178900/960x540/f8a7314e6a/demon-slayer-infinity-castle.JPG/m/filters:quality(95)format(webp)" />
            </div>
            <div className="user-submission-keyinfo">
              <div className="user-submission-abt">
                <h3>About my anime challenge</h3>
                <span className="abt-txt">industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</span>
              </div>
              <div className="user-submission-info">
                <img src="https://lh3.googleusercontent.com/a/ACg8ocIiZTOLXu74pAuZU0ih2qIv-Net4IKoqiNtWKO-qRzXGTwSaG_5=s288-c-no" />
                <div className="user-submission-info-key">
                  <span>Key Information</span>
                  <span><strong>Orapeleng Mathebula</strong></span>
                  <span>Anime : Demons Slayer</span>
                  <span>Netflix</span>
                </div>
              </div>
            </div>
            <div className="submission-stat">
            <div className="submission-stat-card">
              Your favourite
            </div>
            <div className="submission-stat-card">
              <FaClock className="stat-clock-icon" size={25}/> 01/12/2026
            </div>
          </div>
          </div>          
        </div>
      </section>
      <section className="home_hero" id="challenge">
        <h2 className="home_hero-title-chlng">Challenge Submission</h2>
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
    </div>
  </Layout>
    
  );
};

export default Challenge;
