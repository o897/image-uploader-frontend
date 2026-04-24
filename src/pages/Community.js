import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useEffect } from "react";

export default function Community() {

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

  const [search,setSearch] = useState("");
  const [photos, setPhotos] = useState([]);

  const filtered = photos.filter(item => item.filename.toLowerCase().includes(search.toLocaleLowerCase()));
  
  // data containing all the images


  const fetchImages = async () => {
    try {
      const data = await fetch("https://oraserver.online/image/all", {
        method : "GET"
      })
      if (!data.ok) {
        throw new Error("Failed to fetch");
      }
      const response = await data.json();
      setPhotos(response);
    } catch (error) {
      throw new Error(error)
    }
  }
 

    useEffect(() => {
      fetchImages();
    },[])


  return (
    <div className="collections-grid">

      <div className="search">
        <h3 className="collection-intro">Discover and share the moments that matter most.</h3>
        <div className="search-wrapper">
          <FaSearch className="search-icon" />
          <input
            name="search"
            className="navbar__menu-input"
            placeholder="Search photos using keywords or a description"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        { search && (
          <div className="search-collection-container">
              {filtered.length > 0 ? (
                filtered.map((item) => (
                  <div className="search-collection-card-title">
                   {/* a list of suggested items */}
                   <Link key={item._id} className="searched-item" to={`/complete/${encodeURIComponent(item.filename)}`}>{item.filename}</Link>
                </div>
                ))
              ) : (
                <p>No results</p>
              )}
            
            <div className="search-highlights row">
              <li>#Funny</li>
              <li>#Video</li>
              <li>#Today</li>
            </div>

          </div>
        )
          
        }

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
