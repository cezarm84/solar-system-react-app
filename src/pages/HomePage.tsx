import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/HomePage.css';

const HomePage: React.FC = () => {
  const bodies = ['Solen', 'Merkurius', 'Venus', 'Jorden', 'Mars', 'Jupiter', 'Saturnus', 'Uranus', 'Neptunus'];
  const [hoveredBody, setHoveredBody] = useState<string>('');

  return (
    <div className="home-page">
      <div className="nav-bar">
        <div>
        <Link to="/" className="nav-link">Home</Link>
        </div>
        <div>
          <Link to="/favorites" className="nav-link">View Favorites</Link>
        </div>
      </div>
      <h1>{hoveredBody ? hoveredBody : 'Welcome to the Space Explorer!'}</h1>
      <div className="solar-system">
        {bodies.map((body, index) => (
          <Link key={index} to={`/planet/${body.toLowerCase()}`}>
            <div
              className={`body ${body.toLowerCase()}`}
              onMouseEnter={() => setHoveredBody(body)}
              onMouseLeave={() => setHoveredBody('')}
            >
              <span className="planet-name">{body}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
