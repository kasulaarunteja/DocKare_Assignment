import React from "react";
import "./Navbar.css";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GoogleDrawer from "./GoogleDrawer";



const Navbar = () => {
  return (
    <div className="header">
      <div className="header_info">
        <GoogleDrawer/>
        <img src="/images/225.png" />
        <div className="info">
            Forms
        </div>
      </div>

      <div className="header_search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input type="text" name="search" placeholder="search" />
      </div>

      <div className="header_right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </div>

    </div>
  );
};

export default Navbar;
