import React from "react";
import RewardsBanner from "../components/RewardsBanner";
import RewardsGettingStarted from "../components/RewardsGettingStarted";
import RewardsForFreeTabs from "../components/RewardsForFreeTabs";
import RewardsHero from "../components/RewardsHero";
import RewardsEndlessExtras from "../components/RewardsEndlessExtras";
import RewardsEarnStars from "../components/RewardsEarnStars";
import RewardsStarCodes from "../components/RewardsStarCodes";
import RewardsTnC from "../components/RewardsTnC";

interface Props {}

const Rewards: React.FC<Props> = (props) => {
  return (
    <>
      <main>
        <RewardsBanner />
        <RewardsHero />
        <RewardsGettingStarted />
        <RewardsForFreeTabs />
        <RewardsEndlessExtras />
        <RewardsEarnStars />
        <RewardsStarCodes />
        <RewardsTnC />
      </main>
    </>
  );
};

export default React.memo(Rewards);
