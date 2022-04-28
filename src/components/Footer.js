import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import classes from './Footer.module.css'


function Contact() {
  return (
    <div className={classes.footer}>
      <div className={classes.footer__row}>
        <h3>Obsługa klienta</h3>
        <li>
          <Link to="/">Kontakt</Link>
        </li>
        <li>
          <Link to="/">Formy platnosci</Link>
        </li>
        <li>
          <Link to="/">Zwroty</Link>
        </li>
      </div>
      <div className={classes.footer__row}>
        <h3>Informacje</h3>
        <li>
          <Link to="/">Regulamin</Link>
        </li>
        <li>
          <Link to="/">O nas</Link>
        </li>
      </div>
      <div className={classes.footer__row}>
        <h3>Moje konto</h3>
        <li>
          <Link to="/">Moje zamowienia</Link>
        </li>
        <li>
          <Link to="/">Logowanie</Link>
        </li>
      </div>
      <div className={classes.footer__row}>
        <h3>Infolinia</h3>
        <span>48 xxx xxx xxx</span>
        <p>Jestesmy dostepni od:</p>
        <p>
          <span>pn-pt.</span> w godz. <span>7-15</span>
        </p>
      </div>
      <div className={classes.footer__row}>
        <h3>Znajdz nas na:</h3>
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
    </div>
  );
}

export default Contact;
