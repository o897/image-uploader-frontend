import React from 'react';
// import './App.css'; // Ensure CSS is imported

const data = [
  { title: "Urban Decay", count: "124 Photos", img: "https://images.unsplash.com/photo-1444723121867-c6120638054d?auto=format&fit=crop&w=600&q=80" },
  { title: "Golden Hour", count: "89 Photos", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80" },
  { title: "Abstract", count: "210 Photos", img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=600&q=80" },
  { title: "Minimalism", count: "45 Photos", img: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=600&q=80" },
];

export default function Community() {
  return (
    <div className="collections-grid">
      {data.map((item, index) => (
        <div key={index} className="collection-card">
          
          {/* Optional Badge */}
          <div className="collection-badge">Challenge</div>

          <img src={item.img} alt={item.title} />
          
          <div className="collection-overlay">
            <h3 className="collection-title">{item.title}</h3>
            <span className="collection-meta">{item.count} — Created by You</span>
          </div>
        </div>
      ))}
    </div>
  );
}