import * as React from "react";
import { Link } from "react-router-dom";
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
        <MenuItem onClick={handleClose}>
          <Link to="/" className="menuPhone">HOME</Link>
        </MenuItem>
        <MenuItem onClick={handleClose} >
          <Link to="/ZahlungArt" className="menuPhone">COVID-19</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/Impressum" className="menuPhone">IMPRESSUM</Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Link to="/AutoMieten" className="menuPhone">AUTO MIETEN</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/Kontakt" className="menuPhone">KONTAKT</Link>
        </MenuItem>
        </div>
      </Menu>

    </div>
  );
}
