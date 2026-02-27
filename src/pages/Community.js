import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const data = [
  {
    title: "Anime",
    count: "124 Photos",
    img: "https://www.lingualift.com/wp-content/uploads/2020/03/anime.png",
  },
  {
    title: "Daily",
    count: "89 Photos",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
  }
];

export default function Community() {
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
      </div>


      {data.map((item, index) => (
        <Link to={`/challenge/${item.title.toLowerCase()}`} key={index}>
          <div key={index} className="collection-card">
            {/* Optional Badge */}
            <div className="collection-badge">Challenge</div>

            <img src={item.img} alt={item.title} />

            <div className="collection-overlay">
              <h3 className="collection-title">{item.title}</h3>
              <span className="collection-meta">
                {item.count} — Created by You
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
