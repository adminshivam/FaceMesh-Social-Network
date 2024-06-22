import styles from "./Login.module.scss";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function LoginComponent() {
  return (
    <Box sx={{ padding: "5% 10%" }}>
      <Box className={styles.innerLoginForm}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", fontFamily: "monospace" }}
          gutterBottom
        >
          FaceMesh
        </Typography>
      </Box>
    </Box>
  );
}
