import React from 'react';
import { Planet } from '../model/Planet';
import './PlanetDetails.css';
type Props = {
  planet: Planet;
};

const PlanetDetails: React.FC<Props> = ({ planet }) => {
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
    </div>
  );
};

export default PlanetDetails;
