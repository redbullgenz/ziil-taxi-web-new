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
        <Link to="./" className="BarBox">
          HOME
        </Link>
        <Link to="./Covid" className="BarBox">
          COVID-19
        </Link>
        <Link to="./Impressum" className="BarBox">
          IMPRESSUM
        </Link>
        <Link to="./AutoMieten" className="BarBox">
          AUTO MIETEN
        </Link>

        <Link to="./Kontakt" className="BarBox">
          KONTAKT
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
