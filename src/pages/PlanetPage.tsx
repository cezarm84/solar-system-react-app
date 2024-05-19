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
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    axios.get(`https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies/${id}`, {
      headers: { 'x-zocom': 'API_KEY' }
    })
    .then(response => {
      setPlanet(response.data);
    })
    .catch(error => {
      console.error('Error fetching planet data:', error);
    });
  }, [id]);

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
