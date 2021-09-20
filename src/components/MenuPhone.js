import * as React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

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
        <MenuIcon />
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
        <MenuItem onClick={handleClose}>
          <Link to="/">HOME</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/Covid">COVID-19</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/Impressum">IMPRESSUM</Link>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <Link to="/AutoMieten">AUTO MIETEN</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/Kontakt">KONTAKT</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
