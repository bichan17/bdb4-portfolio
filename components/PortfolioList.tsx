import PortfolioItem from "./PortfolioItem";
import Post from "../types/post";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <h2>Work</h2>
      <div>
        {posts.map((post) => (
          <PortfolioItem
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            content={post.content}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
