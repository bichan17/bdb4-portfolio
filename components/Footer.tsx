import React from "react";

import styles from "./Footer.module.css";
import { EMAIL_ADDRESS, RESUME } from "../lib/constants";

const Footer: React.FC = () => {
  return (
    <footer className={styles.root}>
      <a href={`mailto:${EMAIL_ADDRESS}`}>
        <span>Contact</span>
      </a>
      <a href={RESUME}>
        <span>Resume</span>
      </a>
    </footer>
  );
};

export default Footer;
