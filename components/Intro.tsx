import React from "react";

import { useRef } from "react";
import { cn } from "../lib/helpers";

import styles from "./Intro.module.css";
import icons from "../styles/icons.module.css";

import { EMAIL_ADDRESS, RESUME } from "../lib/constants";

const Intro: React.FC = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const clickButton = () => {
    if (introRef.current) {
      const y = introRef.current.getBoundingClientRect().height;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className={styles.root} ref={introRef}>
      <div className={styles.textWrapper}>
        <h2>Hi, how are you?</h2>
        <p>
          I’m Eric Bichan, a web developer with a creative approach and an eye
          for detail based in Brooklyn, NY.
        </p>

        <p>
          Want to make something cool together?
          <br />
          Email me at{" "}
          <a rel="nofollow" target="_blank" href={`mailto:${EMAIL_ADDRESS}`}>
            <span>{EMAIL_ADDRESS}</span>
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Intro;
