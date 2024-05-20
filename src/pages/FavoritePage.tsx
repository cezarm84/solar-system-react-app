import React from 'react';
import './styles/FavoritePage.css';

interface Props {
  favorites: string[];
}

const FavoritePage: React.FC<Props> = ({ favorites }) => {
  return (
    <div className="favorite-page">
      <h2>Favorites items:</h2>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map(favorite => (
            <li key={favorite}>{favorite}</li>
          ))}
        </ul>
      ) : (
        <p>No favorite yet.....</p>
      )}
    </div>
  );
}

export default FavoritePage;
