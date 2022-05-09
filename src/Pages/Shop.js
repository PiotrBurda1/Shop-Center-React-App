import man from "../images/man.jpg";
import man1 from "../images/man1.jpg"
import woman from "../images/woman.jpg";
import woman1 from "../images/woman1.jpg"
import child from "../images/child.jpg";
import child1 from "../images/child1.jpg"
import classes from "./Shop.module.css";
import { useNavigate } from "react-router-dom";

function Shop() {
  let navigate = useNavigate();
  function handleClick(people) {
    navigate(`/shop/${people}`);
  }
  return (
    <section className={classes.width}>
      <h1 className={classes.category}>Main Category</h1>;
      <div className={classes.kontener}>
        <div className={classes.ad}>
          <img src={man} alt="man" className={classes.big}/>
          <img src={man1} alt="man" className={classes.small}/>
          <button onClick={() => handleClick("man")}>Men's Store</button>
        </div>
        <div className={classes.ad}>
          <img src={woman} alt="woman" className={classes.big}/>
          <img src={woman1} alt="woman" className={classes.small}/>
          <button onClick={() => handleClick("woman")}>Women's Store</button>
        </div>
        <div className={classes.ad}>
          <img src={child} alt="child" className={classes.big}/>
          <img src={child1} alt="child" className={classes.small}/>
          <button onClick={() => handleClick("child")}>Children's store</button>
        </div>
      </div>
    </section>
  );
}
export default Shop;
