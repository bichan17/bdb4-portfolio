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
          I am currently freelance and open for new work, previously with{" "}
          <a
            rel="nofollow"
            target="_blank"
            href="https://newyork.bartleboglehegarty.com/"
          >
            <span>BBH NY</span>
          </a>
          .
        </p>
        <p>
          Recent clients include{" "}
          <a rel="nofollow" target="_blank" href="https://capacity.gg/">
            <span>Capacity Studios</span>
          </a>
          ,{" "}
          <a
            rel="nofollow"
            target="_blank"
            href="https://apartamentostudios.com/"
          >
            <span>Apartamento Studios</span>
          </a>
          , and the{" "}
          <a rel="nofollow" target="_blank" href="https://mocadetroit.org/">
            <span>Museum of Contemporary Art in Detroit</span>
          </a>
          .
        </p>

        <p>
          Want to make something cool together?
          <br />
          Feel free to{" "}
          <a rel="nofollow" target="_blank" href={`mailto:${EMAIL_ADDRESS}`}>
            <span>reach out</span>
          </a>
          .
        </p>
      </div>
      <button className={styles.scrollDown} onClick={clickButton}>
        <div className={styles.iconWrapper}>
          <span className={cn(icons.bdbIcon, icons.iconCarrot)}></span>
        </div>
      </button>
    </section>
  );
};

export default Intro;
