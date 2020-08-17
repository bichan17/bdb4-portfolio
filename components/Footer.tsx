import styles from "./Footer.module.css";
import { EMAIL_ADDRESS } from "../lib/constants";

const Footer = () => {
  return (
    <footer className={styles.root}>
      <a href={`mailto:${EMAIL_ADDRESS}`}>
        <span>Contact</span>
      </a>
      <a href="#">
        <span>Resume</span>
      </a>
    </footer>
  );
};

export default Footer;
