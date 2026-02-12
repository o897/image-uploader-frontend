import React from 'react';
import { Link } from 'react-router-dom';

const data = [
  { title: "Anime", count: "124 Photos", img: "https://www.lingualift.com/wp-content/uploads/2020/03/anime.png" },
  { title: "Daily", count: "89 Photos", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80" },
  { title: "Throwback", count: "210 Photos", img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=600&q=80" },
  { title: "Scenery", count: "45 Photos", img: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=600&q=80" },
];

export default function Community() {
  return (
    <div className="collections-grid">
      {data.map((item, index) => (

        <Link to={`/community/${item.title.toLowerCase()}`} key={index}>
           <div key={index} className="collection-card"> 
          
          {/* Optional Badge */}
          <div className="collection-badge">Challenge</div>

          <img src={item.img} alt={item.title} />
          
          <div className="collection-overlay">
            <h3 className="collection-title">{item.title}</h3>
            <span className="collection-meta">{item.count} — Created by You</span>
          </div>
        </div>
        </Link>
       
      ))}
    </div>
  );
}