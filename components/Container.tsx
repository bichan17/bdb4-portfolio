import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Container: React.FC = ({ children }: Props) => {
  return <div className="">{children}</div>;
};

export default Container;
