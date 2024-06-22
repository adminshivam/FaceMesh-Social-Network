import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import {
  Search as SearchIcon,
  Home,
  Notifications as NotificationsIcon,
  Message as MessageIcon,
} from "@mui/icons-material";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";

export const FaceMeshToolBarButtonComponent = styled(ArrowDropDownCircleIcon)(
  ({ theme }) => ({
    backgroundColor: blue["A400"],
    minHeight: "50px",
    padding: 0,
    paddingLeft: 10,
    paddingRight: 10,
    boxShadow: "none",
    borderRadius: 10,
    color: "white",
    "&:hover": {
      backgroundColor: "#ffffff",
      color: blue["A400"],
      cursor: "pointer",
      boxShadow: "0px 0px 5px 2px grey",
    },
  })
);

export const FaceMeshToolBarIconComponent = styled(Home)(({ theme }) => ({
  backgroundColor: blue["A400"],
  minHeight: "50px",
  padding: 0,
  paddingLeft: 10,
  paddingRight: 10,
  boxShadow: "none",
  borderRadius: 10,
  color: "white",
  "&:hover": {
    backgroundColor: "#ffffff",
    color: blue["A400"],
    cursor: "pointer",
    boxShadow: "0px 0px 5px 2px grey",
  },
}));
