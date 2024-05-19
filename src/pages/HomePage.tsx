import React from 'react';
import './styles/HomePage.css';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const bodies = ['Sun', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

  return (
    <div className="home-page">
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
