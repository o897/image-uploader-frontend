import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { FaRegThumbsUp } from "react-icons/fa";
import ChallengeIntro from "../components/ChallengeIntro";
import { useParams } from "react-router-dom";

const Challenge = () => {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.pexels.com/v1/{}?page=1&per_page=20`
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

      {/* top 5 liked pictures */}
      <ChallengeIntro />

      <div className="challenge-photos">
        <div className="challenge-photos-pic">
          <div className="challenge-photo">
            <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />
          </div>
          <div className="challenge-photo-items">
            <div>Like</div>
            <div>Download</div>
            <div>Share</div>
          </div>
          <div className="challenge-photos-comments">
            <div className="challenge-photos-comments-user">

            </div>
            <div className="challenge-user-entries">
              <div className="">
                first name
              </div>
              <div>
                comment
              </div>

            </div>
          </div>
        </div>

        <div className="challenge-users">
         

          <div className="chlng-usr-sugtn">
            {/* map here */}
            <div className="chlng-usr-sugtn-title">More like this</div>
            <div className="chlng-usr-sugtn">
                  <div className="chlng-usr-sugtn-item">
                    <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />
                    <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />
                    <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />

                  </div>
                  <div className="chlng-usr-sugtn-item">
                    <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />
                    <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />
                    <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />

                  </div>
                  <div className="chlng-usr-sugtn-item">
                    <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />
                    <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />
                    <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />

                  </div>
            </div>
          </div>

          <div className="chalng-user-uploads">
            <div className="chlng-usr-sugtn">
              {/* map here */}
              <div className="chlng-usr-sugtn">

                <div className="chlng-user-icon">
                  <div className="chlng-user-pic">
                    <img src="https://decider.com/wp-content/uploads/2017/06/gilfoyle.jpg?quality=80&strip=all&w=1156" />
                    <p>Orapeleng Mathebula</p>
                  </div>

                  <div className="chlng-usr-sugtn-item">
                    <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />
                    <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />
                    <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />

                  </div>
                </div>

                <div className="chlng-user-icon">
                  <div className="chlng-user-pic">
                    <img src="https://decider.com/wp-content/uploads/2017/06/gilfoyle.jpg?quality=80&strip=all&w=1156" />
                    <p>Orapeleng Mathebula</p>
                  </div>

                  <div className="chlng-usr-sugtn-item">
                    <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />
                    <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />
                    <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />

                  </div>
                </div>
                <div className="chlng-user-icon">
                  <div className="chlng-user-pic">
                    <img src="https://decider.com/wp-content/uploads/2017/06/gilfoyle.jpg?quality=80&strip=all&w=1156" />
                    <p>Orapeleng Mathebula</p>
                  </div>

                  <div className="chlng-usr-sugtn-item">
                    <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />
                    <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />
                    <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Challenge;
