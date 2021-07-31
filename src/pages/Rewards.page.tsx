import React from "react";
import Banner from "../components/Banner";
import Hero from "../components/Hero";

interface Props {}

const Rewards: React.FC<Props> = (props) => {
  return (
    <>
      <Banner />
      <Hero />
    </>
  );
};

export default React.memo(Rewards);
