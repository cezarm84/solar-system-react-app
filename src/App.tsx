import React from 'react';

import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PlanetPage from './pages/PlanetPage';
import FavoritePage from './pages/FavoritePage';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/planet/:id" element={<PlanetPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;