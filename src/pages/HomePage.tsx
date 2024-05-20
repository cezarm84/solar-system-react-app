import React from 'react';
import './styles/HomePage.css';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const bodies = ['Solen', 'Merkurius', 'Venus', 'Jorden', 'Mars', 'Jupiter', 'Saturnus', 'Uranus', 'Neptunus'];

  return (
    <div className="home-page">
      <div className="nav-bar">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/favorites">View Favorites</Link>
        </div>
      </div>
      <h1>Welcome to the Space Explorer!</h1>
      <div className="solar-system">
        {bodies.map((body, index) => (
          <Link key={index} to={`/planet/${body.toLowerCase()}`}>
            <div className={`body ${body.toLowerCase()}`}>
              <span className="planet-name">{body}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
