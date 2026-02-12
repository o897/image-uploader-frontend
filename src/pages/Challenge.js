import React, { useState, useEffect } from "react";

const Challenge = () => {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.pexels.com/v1/curated?page=1&per_page=20"
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
      {/* top 5 liked pictures */}
      <div className="challenge-photos">
        <div className="challenge-photos-item">
          <img src="https://m.media-amazon.com/images/S/pv-target-images/9cef9a4a0cd4d6727d10a7d7ced004f09f3c9c03d50ee16feaf401b914703352._SX1080_FMjpg_.jpg" />
        </div>
        <div className="challenge-photos-item">
          <img src="https://m.media-amazon.com/images/S/pv-target-images/9cef9a4a0cd4d6727d10a7d7ced004f09f3c9c03d50ee16feaf401b914703352._SX1080_FMjpg_.jpg" />
        </div>
        <div className="challenge-photos-item">
          <img src="https://m.media-amazon.com/images/S/pv-target-images/9cef9a4a0cd4d6727d10a7d7ced004f09f3c9c03d50ee16feaf401b914703352._SX1080_FMjpg_.jpg" />
        </div>
        <div>
          <img src="https://m.media-amazon.com/images/S/pv-target-images/9cef9a4a0cd4d6727d10a7d7ced004f09f3c9c03d50ee16feaf401b914703352._SX1080_FMjpg_.jpg" />
        </div>
        <div className="challenge-photos-item">
          <img src="https://m.media-amazon.com/images/S/pv-target-images/9cef9a4a0cd4d6727d10a7d7ced004f09f3c9c03d50ee16feaf401b914703352._SX1080_FMjpg_.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Challenge;
