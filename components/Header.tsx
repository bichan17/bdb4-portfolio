import React from "react";

import { cn } from "../lib/helpers";
import { EMAIL_ADDRESS } from "../lib/constants";
import icons from "../styles/icons.module.css";

import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <h1 className={styles.name}>Eric Bichan</h1>
        <a className={styles.mailLink} href={`mailto:${EMAIL_ADDRESS}`}>
          <div className={styles.iconWrapper}>
            <span
              className={cn(
                styles.mailIcon,
                icons.bdbIcon,
                icons.iconMailOutline
              )}
            ></span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Header;
