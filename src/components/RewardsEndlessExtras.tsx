import React from "react";
import EndlessExtraCard from "./EndlessExtraCard";

interface Props {}

const RewardsEndlessExtras: React.FC<Props> = (props) => {
  return (
    <div className="justify-center px-4 mb-20 md:mb-32">
      <div className="mx-auto text-sm md:text-base max-w-144">
        <div className="mx-auto text-center md:w-1/2">
          <h2 className="text-2xl font-semibold md:text-3xl">Endless Extras</h2>
          <p className="pt-4">
            Joining Starbucks® Rewards means unlocking access to exclusive
            benefits. Say hello to easy ordering, tasty Rewards and—yes, free
            coffee.
          </p>
        </div>

        <div className="flex flex-col pt-12 md:text-center md:space-x-6 md:flex-row md:mx-md-card">
          {/* <!-- card 1--> */}
          <EndlessExtraCard
            title="Fun freebies"
            desc="Not only can you earn free coffee, look forward to a birthday
                treat plus coffee and tea refills."
            image-url="https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg"
            image-alt="illustration of burger and drink"
            learnMoreUrl="/rewards"
          />
          {/* <!-- card 2 --> */}
          <EndlessExtraCard
            title="Order & pay ahead"
            desc="Enjoy the convenience of in-store, curbside or drive-thru pickup
            at select stores."
            image-url="https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg"
            image-alt="illustration of phone in a hand"
            learnMoreUrl="/rewards"
          />
          {/* <!-- card 3 --> */}
          <EndlessExtraCard
            title="Get to free faster"
            desc="Earn Stars even quicker with Bonus Star challenges, Double Star
            Days and exciting games."
            image-url="https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg"
            image-alt="illustration of softy"
            learnMoreUrl="/rewards"
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(RewardsEndlessExtras);
