import Navbar from "./Navbar";
import { useState } from "react";
function Collection() {
  const [photos, setPhotos] = useState();
  return (
    <>
      <div className="collections collections__menu">
        <div className="colections__menu-item">Daily</div>
        <div className="colections__menu-item">History</div>
        <div className="colections__menu-item">Throwback</div>
        <div className="colections__menu-item">Afcon</div>
      </div>
      <div className="collections__photos">
        {photos ? (
          <div>photos</div>
        ) : (
          <div className="colection__photos-show">
            <img
              src="https://static.vecteezy.com/system/resources/previews/022/059/000/non_2x/no-image-available-icon-vector.jpg"
              srcSet=""
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Collection;
