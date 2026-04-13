import { useState } from "react";
function Collection() {
  const [photos, setPhotos] = useState([]);

  // render the collection that the user picked
  //  I already  set the set for the collection already
  // a user can create their own collcitions
  return (
    <>
      <div className="collections collections__menu">
        <div className="colections__menu-item">Anime</div>
        <div className="colections__menu-item">Daily</div>
        <div className="colections__menu-item">Throwback</div>
        <div className="colections__menu-item">Scenery</div>
        <div>+</div>
      </div>
      {/* Here we will render, each component of its kind eg {anime, cringe, throwback etc} */}
      {/* if a user hasnt posted anything we show nothing */}
      <div className="">
        {photos ? (
          // fill this space with what the user already posted across all collections
          <div>hi</div>
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
