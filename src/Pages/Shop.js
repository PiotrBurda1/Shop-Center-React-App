import man from "../Foto/man.jpg";
import man1 from "../Foto/man1.jpg"
import woman from "../Foto/woman.jpg";
import woman1 from "../Foto/woman1.jpg"
import child from "../Foto/child.jpg";
import child1 from "../Foto/child1.jpg"
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
