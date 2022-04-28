import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { links } from "./payload";
import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import FavoritesContext from "../store/favorites-context";
import CartContext from "../store/cart-context";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import cx from "classnames";

function MainNavigation(props) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const favoritesCtx = useContext(FavoritesContext);
  const cartCtx = useContext(CartContext);
  const [isActive, setIsActive] = useState(false);
  const toggle = () => {
    setIsActive(!isActive);
  };

  const { items } = cartCtx;
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Shop Center</div>
      <nav>
        <ul className={cx({ [classes.active]: isActive })}>
          {links.map(({ path, name }) => (
            <li key={name}>
              <Link onClick={toggle} to={path}>
                {name === "Favorite" ? (
                  <div className={classes.badge}>
                    <FavoriteBorderIcon className={classes.icon} />
                    <span className={classes.fav}>
                      {favoritesCtx.totalFavorites}
                    </span>
                  </div>
                ) : (
                  name
                )}
              </Link>
            </li>
          ))}
          <button className={btnClasses} onClick={props.onShowCart}>
            <span className={classes.icon}>
              <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badges}>{numberOfCartItems}</span>
          </button>
        </ul>
        <button
          onClick={toggle}
          className={
            isActive ? cx(classes.burger, classes.active) : classes.burger
          }
        >
          <div className={classes.line}></div>
          <div className={classes.line}></div>
          <div className={classes.line}></div>
        </button>
      </nav>
    </header>
  );
}
export default MainNavigation;

