import { useState, useEffect } from "react";
import ChallengeIntro from "../components/ChallengeIntro";
import { useParams } from "react-router-dom";
import Layout from "../layouts/Layout";
import { FaClock } from "react-icons/fa";
import ImagesGrid from "../components/ImagesGrid";


const Favourite = () => {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const { category } = useParams();
  const API_KEY = process.env.REACT_APP_PEXELS_API_KEY;

  const col1 = photos.filter((_, i) => i % 3 === 0);
  const col2 = photos.filter((_, i) => i % 3 === 1);
  const col3 = photos.filter((_, i) => i % 3 === 2);

  const fetchLikedPost = async () => {
    const response = await fetch("https://oraserver.online/image/liked");
    
    if(!response.ok) {
        console.log("cant fetch liked posts")
    } 

    const data = response.json();

    setPhotos(data);

  }
  useEffect(() => {
    // fetch liked pictures
    
  
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
                <h3>About my Favourite</h3>
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
      <ImagesGrid columns={[col1,col2,col3]}/>
        
      </section>
    </div>
  </Layout>
    
  );
};

export default Favourite;
