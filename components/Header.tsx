import { cn } from "../lib/helpers";
import { EMAIL_ADDRESS } from "../lib/constants";
import icons from "../styles/icons.module.css";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <h1 className={styles.name}>Eric Bichan</h1>
        <a className={styles.mailLink} href={`mailto:${EMAIL_ADDRESS}`}>
          <span className={cn(icons.bdbIcon, icons.iconMailOutline)}></span>
        </a>
      </div>
    </section>
  );
};

export default Header;
