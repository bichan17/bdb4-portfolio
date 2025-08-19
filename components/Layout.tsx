import React, { ReactNode } from "react";

import Meta from "./Meta";
import ToyScene from "./ToyScene";

import styles from "./Layout.module.scss";

interface Props {
  children?: ReactNode;
}

const Layout: React.FC = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className={styles.root}>
        <main>{children}</main>
      </div>
      {/* <ToyScene /> */}
    </>
  );
};

export default Layout;
