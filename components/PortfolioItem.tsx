import { cn } from "../lib/helpers";
import markdownStyles from "./markdown-styles.module.css";
import styles from "./PortfolioItem.module.css";
import icons from "../styles/icons.module.css";

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
        <a href={project_link} target="_blank">
          <span className={styles.projectTitleText}>{title}</span>
          <span
            className={cn(
              styles.arrowIcon,
              icons.bdbIcon,
              icons.iconArrowRight
            )}
          ></span>
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
