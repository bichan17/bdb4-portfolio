import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <section className={styles.root}>
      <div className={styles.textWrapper}>
        <h2>Hi, how are you?</h2>
        <p>
          I’m Eric Bichan, a web developer based in Brooklyn, NY, specializing
          in projects in the arts and media space. Here is my{" "}
          <a href="#">resume</a>.
        </p>

        <p>
          I am currently freelance, previously with <a href="#">BBH NY</a>.
        </p>

        <p>
          Want to make something cool?
          <br />
          Feel free to <a href="#">reach out</a>.
        </p>
      </div>
    </section>
  );
};

export default Intro;
