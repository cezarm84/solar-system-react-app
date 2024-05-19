import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PlanetPage from './pages/PlanetPage';
import FavoritePage from './pages/FavoritePage';

const App: React.FC = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const addFavorite = (bodyName: string) => {
    setFavorites([...favorites, bodyName]);
  };

  const removeFavorite = (bodyName: string) => {
    setFavorites(favorites.filter(name => name !== bodyName));
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/planet/:id" 
            element={<PlanetPage addFavorite={addFavorite} removeFavorite={removeFavorite} favorites={favorites} />} 
          />
          <Route path="/favorites" element={<FavoritePage favorites={favorites} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
