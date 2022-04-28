import { useContext } from "react";
import DUMMY_Object from "./ManFashion";
import DUMMY_ObjectGrl from "./WomanFashion";
import { useParams } from "react-router-dom";
import Card from "../ui/Card";
import classes from "./ShopDetails.module.css";
import FavoritesContext from "../store/favorites-context";
import CartContext from "../store/cart-context";
import DUMMY_ObjectChild from "./ChildrenFashion";

const amount = 1;
function ShopDetails() {
  const favoritesCtx = useContext(FavoritesContext);
  const cartCtx = useContext(CartContext);
  const params = useParams();
  const object = DUMMY_Object.concat(DUMMY_ObjectGrl,DUMMY_ObjectChild);
  const itemDetails = object.filter((item) => Number(params.id) === item.id);
  let { id, category, title, price, info, image } = itemDetails[0];

  const addToCartHandler = (amount) => {
    alert("Gratulacje! Produkt dodany do koszyka :)")
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
    <div className={classes.contener}>
      <Card>
        <div className={classes.wrapper}>
        <div className={classes.image}>
          <img src={itemDetails[0].image} alt={itemDetails[0].title}></img>
        </div>
          <div className={classes.text}>
            <h1 className={classes.details}>Product Details</h1>
            <h3 className={classes.item}>{itemDetails[0].title}</h3>
            <div className={classes.price}>Price ${itemDetails[0].price}</div>
            <p>{itemDetails[0].info}</p>
            <div className={classes.actions}>
              <button onClick={toggleFavoriteStatusHandler}>
                {itemIsFavorite ? "Remove it" : "To Favorites"}
              </button>
              <button onClick={() => addToCartHandler(amount)}>Buy Now!</button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ShopDetails;
