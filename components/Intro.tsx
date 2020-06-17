import { CMS_NAME } from "../lib/constants";
import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <section className={styles.root}>
      <h1>Hi, how are you?</h1>
      <p>
        I’m Eric Bichan, a web developer based in Brooklyn, NY, specializing in
        projects in the arts and media space. Here is my <a href="#">resume</a>.
      </p>

      <p>
        I am currently freelance, previously with <a href="#">BBH NY</a>.
      </p>

      <p>
        Want to make something cool? Feel free to <a href="#">reach out</a>.
      </p>
    </section>
  );
};

export default Intro;
