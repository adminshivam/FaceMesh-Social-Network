import { Button, Input } from "@mui/material";
import { styled } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import {
  Search as SearchIcon,
  Home,
  Notifications as NotificationsIcon,
  Message as MessageIcon,
} from "@mui/icons-material";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";

export const FaceMeshInputComponent = styled(Input)(({ theme }) => ({
  // backgroundColor: blue["A400"],
  padding: "10px 10px",
  margin: "5% 5%",
  border: "1px solid black",
  borderRadius: 10,
  "&:hover": {
    border: "1px solid blue",
  },
  fontSize: "1.25vw",
}));

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

export const FaceMeshButtonComponent = styled(Button)(({ theme }) => ({
  boxShadow: "none",
  borderRadius: 10,
  margin: 25,
  fontSize: "1.25vw",
}));
