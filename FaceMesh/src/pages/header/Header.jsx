import React from "react";
import styles from "./Header.module.scss";
import { AppBar, Toolbar, IconButton, Button } from "@mui/material";

import {
  FaceMeshToolBarButtonComponent,
  FaceMeshToolBarIconComponent,
} from "../../utils/FaceMesh.components";

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
          <FaceMeshToolBarIconComponent />
          <FaceMeshToolBarButtonComponent />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
