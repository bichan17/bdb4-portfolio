import styles from "./Intro.module.css";
import { EMAIL_ADDRESS, RESUME } from "../lib/constants";

const Intro = () => {
  return (
    <section className={styles.root}>
      <div className={styles.textWrapper}>
        <h2>Hi, how are you?</h2>
        <p>
          I’m Eric Bichan, a web developer based in Brooklyn, NY, specializing
          in projects in the arts and media space. Here is my{" "}
          <a rel="nofollow" target="_blank" href={RESUME}>
            <span>resume</span>
          </a>
          .
        </p>

        <p>
          I am currently freelance, previously with{" "}
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
          Want to make something cool?
          <br />
          Feel free to{" "}
          <a rel="nofollow" target="_blank" href={`mailto:${EMAIL_ADDRESS}`}>
            <span>reach out</span>
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Intro;
