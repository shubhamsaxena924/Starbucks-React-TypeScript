import React from "react";

interface Props {}

const NotFound: React.FC<Props> = (props) => {
  return (
    <>
      <p>Not found</p>
    </>
  );
};

export default React.memo(NotFound);
