import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import "../style/NavbarS/NavBar.css";


export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
      
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon className="iconMenuHamburg_"/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
       
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div  className="MenuHambDiv_">
        <div>
        <MenuItem onClick={handleClose}>
          <NavLink to="/" className="menuPhone" activeClassName="selected2">HOME</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose} >
          <NavLink to="/ZahlungArt" className="menuPhone" activeClassName="selected2">COVID-19</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/Impressum" className="menuPhone" activeClassName="selected2">IMPRESSUM</NavLink>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <NavLink to="/AutoMieten" className="menuPhone" activeClassName="selected2">AUTO MIETEN</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/Kontakt" className="menuPhone" activeClassName="selected2">KONTAKT</NavLink>
        </MenuItem>
        <div className="contact_h">
          <p>Contact</p>
          <div>
          <a>Tel: 079 400 11 11</a>
          <a>info@ziil-taxi</a>
          </div>
        </div>
        </div>
        <div className="close_div" onClick={handleClose}>X</div>
        </div>
      </Menu>

    </div>
  );
}
