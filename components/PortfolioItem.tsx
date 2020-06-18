import markdownStyles from "./markdown-styles.module.css";
import styles from "./PortfolioItem.module.css";

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
    <div className={styles.root}>
      <h3 className={styles.projectTitle}>
        <a className="hover:underline" href={project_link} target="_blank">
          {title}
        </a>
      </h3>
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {tags && (
        <div className={styles.tags}>{tags.toString().replace(/,/g, ", ")}</div>
      )}
    </div>
  );
};

export default PortfolioItem;
