import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Planet } from '../model/Planet';
import PlanetDetails from '../components/PlanetDetails';
import './styles/PlanetPage.css';

interface Props {
  addFavorite: (bodyName: string) => void;
  removeFavorite: (bodyName: string) => void;
  favorites: string[];
}

const PlanetPage: React.FC<Props> = ({ addFavorite, removeFavorite, favorites }) => {
  const [planet, setPlanet] = useState<Planet | null>(null);
  const { name } = useParams<{ name: string }>();
 
  useEffect(() => {
    if (!name) {
      return; // om namet odefinerat
    }
    console.log(`Fetching data for planet name: ${name}`);
    axios.get('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies', {
      headers: { 'x-zocom': 'api-key' }
    })
    .then(response => {
      console.log('API response:', response.data);
      const planetData = response.data.bodies.find((body: Planet) => body.name.toLowerCase() === name.toLowerCase());
      if (planetData) {
        setPlanet(planetData);
      } else {
        console.error('Planet not found');
      }
    })
    .catch(error => {
      console.error('Error fetching planet data:', error);
    });
  }, [name]);

  return (
    <div className={`planet-page ${planet?.name.toLowerCase()}`}>
     
      {planet ? (
        <PlanetDetails 
          planet={planet} 
          isFavorite={favorites.includes(planet.name)} 
          addFavorite={addFavorite} 
          removeFavorite={removeFavorite} 
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PlanetPage;
