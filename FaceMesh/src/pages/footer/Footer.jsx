import React from "react";
import * as styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="footer__left">
        <p>About · Privacy · Terms · Advertise · Ad Choices · Cookies · More</p>
        <p>FaceMesh © 2024</p>
      </div>
      <div className="footer__right">
        <p>FaceMesh by Shivam Gupta</p>
      </div>
    </footer>
  );
};

export default Footer;
