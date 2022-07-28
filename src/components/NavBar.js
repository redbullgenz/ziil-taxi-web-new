import { Link, NavLink } from "react-router-dom";
import "../style/NavbarS/NavBar.css";
import MenuPhone from "../components/MenuPhone";

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function NavBar() {
  return (
    <div>
      <div className="navbar_x">
        <div className="phoneMenu">
          <MenuPhone />
        </div>
        <div className="BarBox">ZIIL-TAXI</div>
        <div className="navBar">
       
        <NavLink to="./" className="BarBox" activeClassName="selected">
          HOME
        </NavLink>
        <NavLink to="./ZahlungArt" className="BarBox" activeClassName="selected">
          COVID-19
        </NavLink>
        <NavLink to="./Impressum" className="BarBox" activeClassName="selected">
          IMPRESSUM
        </NavLink>
        <NavLink to="./AutoMieten" className="BarBox" activeClassName="selected">
          AUTO MIETEN
        </NavLink>

        <NavLink to="./Kontakt" className="BarBox" activeClassName="selected">
          KONTAKT
        </NavLink>
      </div>
      <div className="icon_menu_bar">
      <div className="BarBox"><LocalPhoneIcon  className="nummer1"/><a className="nummer1" href="tel:+41794001111" alt="Handy Nummero">079 400 11 11</a></div>
      </div>
      </div>
    </div>
  );
}

export default NavBar;
