import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import ManList from "./ShopList";
import classes from './Favorites.module.css'

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p className={classes.text}>You got no Favorite yet. Start adding some?</p>;
  } else {
      content = <ManList fashion={favoritesCtx.favorites} />}
  return (
    <section>
      <h1 className={classes.favorite}>My favorite</h1>
      {content} 
    </section>
  );

  }
export default FavoritesPage;
