import { cn } from "../lib/helpers";
import markdownStyles from "./markdown-styles.module.scss";
import styles from "./PortfolioItem.module.scss";
import icons from "../styles/icons.module.scss";
import PostType from "../@types/post";

interface PortfolioItemProps extends PostType {
  index: number;
}

const PortfolioItem = ({
  title,
  project_link,
  tags,
  content,
  lead_image,
  index,
}: PortfolioItemProps) => {
  return (
    <div className={styles.root}>
      {lead_image ? (
        <img
          src={`/assets/images/${lead_image}`}
          className={styles.leadImage}
          alt={title}
        />
      ) : null}
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
