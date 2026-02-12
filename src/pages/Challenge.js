import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { FaRegThumbsUp } from "react-icons/fa";


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
                Anime challenges created to inspire you to explore your favorite
                characters, scenes, and art styles. Jump in, create, and share your
                passion with others who love anime just as much as you do. No prizes —
                just pure creativity and love for the culture.
            </div>
            {/* top 5 liked pictures */}

            {/* make a map it should rotate */}
           
            <div className="challenge-photos">
                <div className="challenge-photos-item s">
                    <img src="https://thenerddaily.com/wp-content/uploads/2018/08/Reasons-To-Watch-Anime.jpg?x26698" />
                </div>
                <div className="challenge-photos duo">
                    <div className="challenge-photos-item m">
                        <img src="https://comicbook.com/wp-content/uploads/sites/4/2025/01/One-Piece-Anime-Episodes-Hiatus-Watch.jpg" />
                    </div>
                    <div className="challenge-photos-item m">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsVElG1mHnr6oGMZa_FhCWF5iEXcKLbbF89A&s" />
                    </div>
                </div>
                <div className="challenge-photos-item s">
                    <img src="https://m.media-amazon.com/images/S/pv-target-images/9cef9a4a0cd4d6727d10a7d7ced004f09f3c9c03d50ee16feaf401b914703352._SX1080_FMjpg_.jpg" />
                </div>
                <div className="challenge-photos-item l">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAHKNOZTz54_bsmQ7SWawYdiuxlky5pMwD-g&s" />
                </div>

                <div className="challenge-user">
                    <h2>FirstName LastName</h2>
                    <div>
                        I’ve loved anime since childhood — the stories, the emotion, the
                        powerful characters, and the worlds that felt bigger than reality.
                        It wasn’t just entertainment; it was inspiration, imagination, and a
                        place where I could escape and dream bigger.
                    </div>
                    <div className="challenge-user-stat">
                        <div className="challenge-user-stat-item">
                            <FaRegThumbsUp /> Like
                        </div>
                        <div className="challenge-user-stat-item">
                            <button>Join the Challenge</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Challenge;
