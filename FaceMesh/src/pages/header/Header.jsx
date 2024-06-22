import React from "react";
import styles from "./Header.module.scss";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Avatar,
  colors,
  ButtonBase,
  Button,
} from "@mui/material";
import {
  Search as SearchIcon,
  Home as HomeIcon,
  Notifications as NotificationsIcon,
  Message as MessageIcon,
} from "@mui/icons-material";

function Header() {
  return (
    <div>
      <AppBar position="static" className={styles.AppBar}>
        <Toolbar className={styles.ToolBar}>
          <IconButton className={styles.ToolBarComponent}>
            <HomeIcon className={styles.ToolBarComponent} />
          </IconButton>
          <Button variant="contained" className={styles.ToolBarComponent}>
            Hey
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
