import PortfolioItem from "./PortfolioItem";
import Post from "../types/post";
import styles from "./PortfolioList.module.css";

type Props = {
  title: string;
  posts: Post[];
};

const PortfolioList = ({ title, posts }: Props) => {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <h2 className={styles.listTitle}>{title}</h2>
        <div>
          {posts.map((post) => (
            <PortfolioItem
              key={post.slug}
              title={post.title}
              date={post.date}
              project_link={post.project_link}
              slug={post.slug}
              tags={post.tags}
              content={post.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioList;
