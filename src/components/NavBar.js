import { Link } from "react-router-dom";
import "../style/NavbarS/NavBar.css";
import MenuPhone from "../components/MenuPhone";

function NavBar() {
  return (
    <div>
      <div className="navBar">
        <div className="phoneMenu">
          <MenuPhone />
        </div>
        <Link to="./" className="BarBox" activeClassName="selected">
          HOME
        </Link>
        <Link to="./ZahlungArt" className="BarBox" activeClassName="selected">
          COVID-19
        </Link>
        <Link to="./Impressum" className="BarBox" activeClassName="selected">
          IMPRESSUM
        </Link>
        <Link to="./AutoMieten" className="BarBox" activeClassName="selected">
          AUTO MIETEN
        </Link>

        <Link to="./Kontakt" className="BarBox" activeClassName="selected">
          KONTAKT
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
