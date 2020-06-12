import DateFormater from "./DateFormater";
import Link from "next/link";

type Props = {
  title: string;
  date: string;
  slug: string;
};

const PortfolioItem = ({ title, date, slug }: Props) => {
  return (
    <div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">{date}</div>
    </div>
  );
};

export default PortfolioItem;
