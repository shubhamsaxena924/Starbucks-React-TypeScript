import React from "react";
import RewardsBanner from "../components/RewardsBanner";
import RewardsGettingStarted from "../components/RewardsGettingStarted";
import RewardsForFreeTabs from "../components/RewardsForFreeTabs";

import RewardsHero from "../components/RewardsHero";
import RewardsEndlessExtras from "../components/RewardsEndlessExtras";

interface Props {}

const Rewards: React.FC<Props> = (props) => {
  return (
    <>
      <div>
        <RewardsBanner />
        <RewardsHero />
        <RewardsGettingStarted />
        <RewardsForFreeTabs />
        <RewardsEndlessExtras />
      </div>
    </>
  );
};

export default React.memo(Rewards);
