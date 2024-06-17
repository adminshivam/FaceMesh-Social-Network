import React from "react";
import styles from "./Header.module.css";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Avatar,
  colors,
} from "@mui/material";
import {
  Search as SearchIcon,
  Home as HomeIcon,
  Notifications as NotificationsIcon,
  Message as MessageIcon,
} from "@mui/icons-material";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar className={styles.toolbar}>
        <IconButton>
          <HomeIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
