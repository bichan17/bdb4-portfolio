import React, { ReactNode } from "react";

import Footer from "./Footer";
import Meta from "./Meta";

interface Props {
  children?: ReactNode;
}

const Layout: React.FC = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
