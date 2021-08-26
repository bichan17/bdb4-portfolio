import React, { ReactNode } from "react";
import styles from "./Container.module.css";

interface ContainerProps {
  children?: ReactNode;
}

const Container: React.FC = (props: ContainerProps) => {
  const { children } = props;

  return <div className={styles.root}>{children}</div>;
};

export default Container;
