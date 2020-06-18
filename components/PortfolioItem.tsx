import markdownStyles from "./markdown-styles.module.css";

type Props = {
  title: string;
  date: string;
  slug: string;
  project_link: string;
  tags: Array<string>;
  content: string;
};

const PortfolioItem = ({ title, project_link, tags, content }: Props) => {
  return (
    <div>
      <h3>
        <a className="hover:underline" href={project_link} target="_blank">
          {title}
        </a>
      </h3>
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {tags && <div>{tags.toString().replace(/,/g, ", ")}</div>}
    </div>
  );
};

export default PortfolioItem;
