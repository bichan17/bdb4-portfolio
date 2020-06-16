import { CMS_NAME } from "../lib/constants";
import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <section className={styles.root}>
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Eric Bichan
      </h1>
    </section>
  );
};

export default Intro;
