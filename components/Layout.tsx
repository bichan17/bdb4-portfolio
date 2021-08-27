import React, { ReactNode } from "react";

import Footer from "./Footer";
import Meta from "./Meta";
import ToyScene from "./ToyScene";
import useMousePosition from "../lib/useMousePosition";

import styles from "./Layout.module.css";

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
      <ToyScene />
    </>
  );
};

export default Layout;
