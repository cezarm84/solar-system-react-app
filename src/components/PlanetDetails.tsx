import React from 'react';
import { Planet } from '../model/Planet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';
import '../components/styles/PlanetDetails.css';

type Props = {
  planet: Planet;
  isFavorite: boolean;
  addFavorite: (planetName: string) => void;
  removeFavorite: (planetName: string) => void;
};

const PlanetDetails: React.FC<Props> = ({ planet, isFavorite, addFavorite, removeFavorite }) => {
  return (
    <div className={`planet-details ${planet.name.toLowerCase()}`}>
      <div className="planet-header">
        
        <div
          className="planet-action-icon"
          onClick={() => (isFavorite ? removeFavorite(planet.name) : addFavorite(planet.name))}
        >
          <FontAwesomeIcon icon={isFavorite ? faHeartBroken : faHeart} />
        </div>
      </div>
      <div className="planet-name-container">
      <h1> {planet.name}</h1>
      </div>
      <div className="planet-description">
        <p>{planet.desc}</p>
        <br />
        <p>Moons: {planet.moons.join(', ')}</p>
      </div>
      <div className="planet-info">
        <div className="planet-info-item">
          <span className="planet-info-label">Latin Name:</span>
          <span className="planet-info-value">{planet.latinName}</span>
        </div>
        <div className="planet-info-item">
          <span className="planet-info-label">Rotation:</span>
          <span className="planet-info-value">{planet.rotation}</span>
        </div>
        <div className="planet-info-item">
          <span className="planet-info-label">Circumference:</span>
          <span className="planet-info-value">{planet.circumference}</span>
        </div>
        <div className="planet-info-item">
          <span className="planet-info-label">Day Temperature:</span>
          <span className="planet-info-value">{planet.temp.day}</span>
        </div>
        <div className="planet-info-item">
          <span className="planet-info-label">Night Temperature:</span>
          <span className="planet-info-value">{planet.temp.night}</span>
        </div>
        <div className="planet-info-item">
          <span className="planet-info-label">Distance:</span>
          <span className="planet-info-value">{planet.distance}</span>
        </div>
        <div className="planet-info-item">
          <span className="planet-info-label">Orbital Period:</span>
          <span className="planet-info-value">{planet.orbitalPeriod}</span>
        </div>
      </div>
    
    </div>
  );
};

export default PlanetDetails;
