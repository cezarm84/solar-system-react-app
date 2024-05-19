import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Planet } from '../model/Planet';
import PlanetDetails from '../components/PlanetDetails';
import './PlanetPage.css';

const PlanetPage: React.FC = () => {
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
    <div className="planet-page">
      {planet ? (
        <>
          <h2>{planet.name}</h2>
          <PlanetDetails planet={planet} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PlanetPage;
