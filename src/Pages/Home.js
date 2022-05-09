import home1 from "../images/home1.png";
import home2 from "../images/home2.jpg";
import classes from "./Home.module.css";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/shop");
  }
  return (
    <section>
      <h1 className={classes.subhome__main__title}>Welcome in Shop Center!</h1>
      <div className={classes.image}>
        <img src={home1} alt="home" className={classes.big} />
        <button onClick={handleClick} className={classes.check}><img src={home2} alt="home2" className={classes.small} /></button> 
        <button onClick={handleClick} className={classes.button}>
        Shop Now!
        </button>
      </div>
    </section>
  );
}

export default Home;
