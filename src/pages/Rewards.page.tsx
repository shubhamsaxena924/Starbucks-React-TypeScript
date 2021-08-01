import React from "react";
import Banner from "../components/Banner";
import GettingStarted from "../components/GettingStarted";

import Hero from "../components/Hero";

interface Props {}

const Rewards: React.FC<Props> = (props) => {
  return (
    <>
      <div>
        <Banner />
        <Hero />
        <GettingStarted />
      </div>
      <div className="h-200"></div>
      <div className="h-200"></div>
    </>
  );
};

export default React.memo(Rewards);
