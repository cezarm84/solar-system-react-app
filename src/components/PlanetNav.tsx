import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  bodies: string[];
  onHover: (bodyName: string) => void;
}

const PlanetNav: React.FC<Props> = ({ bodies, onHover }) => {
  return (
    <nav className="planet-nav">
      {bodies.map((body, index) => (
        <Link to={`/planet/${body.toLowerCase()}`} key={index}>
          <div
            className={`planet-button ${body.toLowerCase()}`}
            onMouseEnter={() => onHover(body)}
            onMouseLeave={() => onHover('')}
          >
            {body}
          </div>
        </Link>
      ))}
    </nav>
  );
}

export default PlanetNav;
