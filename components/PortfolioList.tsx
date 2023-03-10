import PortfolioItem from "./PortfolioItem";
import Post from "../@types/post";
import styles from "./PortfolioList.module.scss";

interface Props {
  title: string;
  posts: Post[];
}

const PortfolioList = (props: Props) => {
  const { posts } = props;
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <div>
          {posts.map((post) => (
            <PortfolioItem
              key={post.title}
              {...post}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioList;
