import styles from "./Header.module.css";

const Header = () => {
  return (
    <section className={styles.root}>
      <h1>Eric Bichan</h1>
      <a href="#">Email</a>
    </section>
  );
};

export default Header;
