import classes from "./ShopList.module.css";
import ShopItem from "./ShopItem";

function ShopList(props) {
  return (
    <div className={classes.list}>
      {props.fashion.map((fashion) => (
        <ShopItem
          key={fashion.id}
          id={fashion.id}
          image={fashion.image}
          title={fashion.title}
          info={fashion.info}
          price={fashion.price}
        />
      ))}
    </div>
  );
}
export default ShopList;
