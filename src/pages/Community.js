import {React,useState} from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function Community() {

  // data containing all the images
   const data = [
  {
    title: "Cringe",
    count: "124 Photos",
    img: "https://www.lingualift.com/wp-content/uploads/2020/03/anime.png",
  },
  {
    title: "Meme",
    count: "89 Photos",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Funny",
    count: "89 Photos",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Daily Highlight",
    count: "89 Photos",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Other",
    count: "89 Photos",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
  }
];
  const [query, setQuery] = useState("");


 const filtered = data.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

 

  return (
    <div className="collections-grid">

      <div className="search">
        <h3 className="collection-intro">
          The best free stock photos, royalty free images & videos shared by creators.
        </h3>
        <div className="search-wrapper">
          <FaSearch className="search-icon" />
          <input
            name="search"
            className="navbar__menu-input"
            placeholder="Search photos using keywords or a description"
          />
        </div>
        <div className="search-collection-container">
          <div className="search-collection-card-title">

          </div>

        </div>
      </div>



      <Link to="/challenge/anime">
        <div className="collection-card">

          <div className="collection-badge">Challenge</div>

          <img src="https://www.lingualift.com/wp-content/uploads/2020/03/anime.png" alt="anime" />

          <div className="collection-overlay">
            <h3 className="collection-title">Favourites</h3>
            <span className="collection-meta">
              — Created by You
            </span>
          </div>
        </div>
      </Link>
      <div className="collection-card" id="collection-card-menu">

        <img src="https://www.lingualift.com/wp-content/uploads/2020/03/anime.png" alt="anime" id="collection-img" />

        {data.map((item, index) => (
          <div className="collection-card-title" key={index}>{item.title}</div>
        ))}
      </div>

    </div>
  );
}
