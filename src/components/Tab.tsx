import React from "react";

export interface Props {
  title: React.ReactNode;
  children: React.ReactNode;
}

const Tab: React.FC<Props> = (props) => {
  return <>{props.children}</>;
};

export default Tab;
