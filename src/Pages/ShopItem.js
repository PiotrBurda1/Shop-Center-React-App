import { useContext } from "react";
import classes from "./ShopItem.module.css";
import Card from "../ui/Card";
import FavoritesContext from "../store/favorites-context";
import CartContext from "../store/cart-context";
import { Link } from "react-router-dom";

const amount = 1;
function ShopItem({ image, title, price, id, info, category }) {
  const favoritesCtx = useContext(FavoritesContext);
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    alert("Gratulacje! Produkt dodany do koszyka :)");
    cartCtx.addItem({
      id,
      title,
      amount,
      price,
      image,
    });
  };
  const itemIsFavorite = favoritesCtx.itemIsFavorite(id);
  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(id);
    } else {
      favoritesCtx.addFavorite({
        category,
        id,
        title,
        image,
        price,
        info,
      });
    }
  }

  return (
    <div className={classes.item}>
      <Card>
        <Link className={classes.txt} to={`/shop/${id}`}>
          <div className={classes.image}>
            <img src={image} alt={title} id={id} />
            <p className={classes.look}>Product Details</p>
          </div>
        </Link>
        <div className={classes.content}>
          <h3>{title}</h3>
          <p>${price}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove it" : "To Favorites"}
          </button>
          <button onClick={() => addToCartHandler(amount)}>Buy Now!</button>
        </div>
      </Card>
    </div>
  );
}

export default ShopItem;
