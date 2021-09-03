import React from "react";

import { EMAIL_ADDRESS, RESUME, GITHUB_URL } from "../lib/constants";
import { cn } from "../lib/helpers";
import useScrollPosition from "../lib/useScrollPosition";

import styles from "./Header.module.css";

const Header: React.FC = () => {
  const scrollPosition = useScrollPosition();
  return (
    <section
      className={cn(
        styles.root,
        scrollPosition > 70 ? styles.backgroundFilled : ""
      )}
    >
      <div className={styles.wrapper}>
        <ul className={styles.linkList}>
          <li>
            <a
              className={styles.link}
              target="_blank"
              rel="nofollow"
              href={GITHUB_URL}
            >
              Github
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              target="_blank"
              rel="nofollow"
              href={RESUME}
            >
              Resume
            </a>
          </li>
          <li>
            <a className={styles.link} href={`mailto:${EMAIL_ADDRESS}`}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
