import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: () => {},
  removeFavorite: () => {},
  itemIsFavorite: () => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteclothes) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteclothes);
    });
  }

  function removeFavoriteHandler(clothesId) {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.filter(clothes => clothes.id !== clothesId);
    });
  }

  function itemIsFavoriteHandler(clothesId) {
    return userFavorites.some(clothes => clothes.id === clothesId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;