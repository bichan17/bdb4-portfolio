import styles from "./Footer.module.css";
import { EMAIL_ADDRESS } from "../lib/constants";

const Footer = () => {
  return (
    <footer className={styles.root}>
      <a href={`mailto:${EMAIL_ADDRESS}`}>Contact</a>
      <a href="#">Resume</a>
    </footer>
  );
};

export default Footer;
