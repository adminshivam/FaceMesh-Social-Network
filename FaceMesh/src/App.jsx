// src/App.js
import React from "react";
import AppRouter from "./Router";
import * as styles from "./App.scss";

function App() {
  return (
    <div style={{ minHeight: "100vh", margin: "0" }} className={styles.App}>
      <AppRouter />
    </div>
  );
}

export default App;
