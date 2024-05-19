import React from 'react';
import { Planet } from '../model/Planet';
import '../components/styles/PlanetDetails.css';

type Props = {
  planet: Planet;
  isFavorite: boolean;
  addFavorite: (planetName: string) => void;
  removeFavorite: (planetName: string) => void;
};

const PlanetDetails: React.FC<Props> = ({ planet, isFavorite, addFavorite, removeFavorite }) => {
  return (
    <div className="planet-details">
      <h1>Planet Details</h1>
      <p>Name: {planet.name}</p>
      <p>Latin Name: {planet.latinName}</p>
      <p>Rotation: {planet.rotation}</p>
      <p>Circumference: {planet.circumference}</p>
      <p>Day Temperature: {planet.temp.day}</p>
      <p>Night Temperature: {planet.temp.night}</p>
      <p>Distance: {planet.distance}</p>
      <p>Orbital Period: {planet.orbitalPeriod}</p>
      <p>Description: {planet.desc}</p>
      <p>Moons: {planet.moons.join(', ')}</p>
      <button onClick={() => isFavorite ? removeFavorite(planet.name) : addFavorite(planet.name)}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default PlanetDetails;

