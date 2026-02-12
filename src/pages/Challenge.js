import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const Challenge = () => {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.pexels.com/v1/curated?page=1&per_page=20",
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
    <div className="challenge">
      {/* Take it off the param  */}
      <Navbar />
      <div className="challenge__title">Anime</div>
      <div className="challenge__title-sub">
        Photo and video competitions designed to inspire you to get out there,
        shoot, and share your work with the world. You might even win prizes
        while you do.
      </div>
      {/* top 5 liked pictures */}

      {/* make a map it should rotate */}
      <div className="challenge-photos">
        <div className="challenge-photos-item s">
          <img src="https://thenerddaily.com/wp-content/uploads/2018/08/Reasons-To-Watch-Anime.jpg?x26698" />
        </div>
        <div className="challenge-photos duo">
          <div className="challenge-photos-item m">
            <img src="https://m.media-amazon.com/images/S/pv-target-images/9cef9a4a0cd4d6727d10a7d7ced004f09f3c9c03d50ee16feaf401b914703352._SX1080_FMjpg_.jpg" />
          </div>
          <div className="challenge-photos-item m">
            <img src="https://m.media-amazon.com/images/S/pv-target-images/9cef9a4a0cd4d6727d10a7d7ced004f09f3c9c03d50ee16feaf401b914703352._SX1080_FMjpg_.jpg" />
          </div>
        </div>
        <div className="challenge-photos-item s">
          <img src="https://m.media-amazon.com/images/S/pv-target-images/9cef9a4a0cd4d6727d10a7d7ced004f09f3c9c03d50ee16feaf401b914703352._SX1080_FMjpg_.jpg" />
        </div>
        <div className="challenge-photos-item l">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAHKNOZTz54_bsmQ7SWawYdiuxlky5pMwD-g&s" />
          {/* <div className="challenge-user-name">@username</div></div> */}
          <div className="challenge-photos-item m">
            <img src="https://m.media-amazon.com/images/S/pv-target-images/9cef9a4a0cd4d6727d10a7d7ced004f09f3c9c03d50ee16feaf401b914703352._SX1080_FMjpg_.jpg" />
          </div>
          <div>
            <div>Title</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge;
