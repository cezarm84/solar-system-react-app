import React, { useState } from 'react';
import './styles/PlanetNav.css';
import { Link } from 'react-router-dom';

interface Props {
  bodies: string[];
}

const PlanetNav: React.FC<Props> = ({ bodies }) => {
  const [hoveredBody, setHoveredBody] = useState<string>('');

  const handleHover = (bodyName: string) => {
    setHoveredBody(bodyName);
  };

  return (
    <nav className="planet-nav">
      {bodies.map((body, index) => (
        <Link to={`/planet/${body.toLowerCase()}`} key={index}>
          <div
            className={`planet-button ${body.toLowerCase()} ${hoveredBody === body ? 'hovered' : ''}`}
            onMouseEnter={() => handleHover(body)}
            onMouseLeave={() => handleHover('')}
          >
            {body}
          </div>
        </Link>
      ))}
    </nav>
  );
}

export default PlanetNav;
