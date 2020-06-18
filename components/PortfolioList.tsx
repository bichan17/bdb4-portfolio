import PortfolioItem from "./PortfolioItem";
import Post from "../types/post";

type Props = {
  title: string;
  posts: Post[];
};

const PortfolioList = ({ title, posts }: Props) => {
  return (
    <section>
      <h2>{title}</h2>
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
    </section>
  );
};

export default PortfolioList;
