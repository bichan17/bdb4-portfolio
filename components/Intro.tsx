import React from "react";

import styles from "./Intro.module.scss";

import { EMAIL_ADDRESS } from "../lib/constants";

const Intro: React.FC = () => (
  <section className={styles.root}>
    <div className={styles.textWrapper}>
      <h2>Hi, how are you?</h2>
      <p>
        I’m Eric Bichan, a web developer with a creative approach and an eye for
        detail based in Brooklyn, NY.
      </p>
      {/* <p>
        Previously with{" "}
        <a rel="nofollow" target="_blank" href="https://work.co/">
          <span>Work & Co</span>
        </a>{" "}
        and{" "}
        <a
          rel="nofollow"
          target="_blank"
          href="https://www.bartleboglehegarty.com/"
        >
          <span>BBH NY</span>
        </a>
        .
      </p> */}
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

export default Intro;
