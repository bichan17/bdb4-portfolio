import PortfolioItem from "./PortfolioItem";
import Post from "../types/post";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
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