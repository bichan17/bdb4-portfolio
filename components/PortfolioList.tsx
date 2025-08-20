import PortfolioItem from "./PortfolioItem";
import Post from "../@types/post";
import styles from "./PortfolioList.module.scss";
import Intro from "./Intro";

interface Props {
  title: string;
  posts: Post[];
}

const PortfolioList = (props: Props) => {
  const { posts } = props;
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        {posts.map((post, index) => (
          <PortfolioItem key={post.title} {...post} index={index} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioList;
