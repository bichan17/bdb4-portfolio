import styles from "./Header.module.css";
import { MdMailOutline } from "react-icons/md";
import { EMAIL_ADDRESS } from "../lib/constants";

const Header = () => {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <h1 className={styles.name}>Eric Bichan</h1>
        <a className={styles.mailLink} href={`mailto:${EMAIL_ADDRESS}`}>
          <MdMailOutline />
        </a>
      </div>
    </section>
  );
};

export default Header;
