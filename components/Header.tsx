import styles from "./Header.module.css";

const Header = () => {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <h1 className={styles.name}>Eric Bichan</h1>
        <a href="#">Email</a>
      </div>
    </section>
  );
};

export default Header;
