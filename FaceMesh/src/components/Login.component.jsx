import React, { useEffect, useState } from "react";
import styles from "./Login.module.scss";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Input } from "@mui/material";
import { FaceMeshInputComponent } from "../utils/FaceMesh.components";

const LoginComponent = () => {
  const [flexDirection, setFlexDirection] = useState("row");

  useEffect(() => {
    const updateFlexDirection = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setFlexDirection(width / height > 1.2 ? "column" : "row");
    };

    updateFlexDirection(); // Set initial state

    window.addEventListener("resize", updateFlexDirection); // Update on window resize

    return () => window.removeEventListener("resize", updateFlexDirection); // Cleanup on unmount
  }, []);

  return (
    <Box
      sx={{ padding: "5% 10%", minHeight: "100%", border: "10px solid black" }}
    >
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          flexDirection: flexDirection,
          alignItems: "center",
        }}
      >
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontFamily: "monospace",
              color: "#1976d2",
              fontSize: "5vw",
            }}
            gutterBottom
          >
            FaceMesh
          </Typography>
          <Typography
            sx={{
              color: "black",
              width: "60%",
              textAlign: "center",
              fontSize: "2vw",
            }}
            gutterBottom
          >
            FaceMesh helps you connect and share with the people in your life.
          </Typography>
        </Box>
        <Box className={styles.innerLoginForm} sx={{ flexDirection: "column" }}>
          <FaceMeshInputComponent placeholder="Email">
            sfgf
          </FaceMeshInputComponent>
          <FaceMeshInputComponent placeholder="Password">
            sfgf
          </FaceMeshInputComponent>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginComponent;
