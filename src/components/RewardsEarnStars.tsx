import React from "react";
import EarnStarsSection from "../components/EarnStarsSection";
import EarnStarsCard from "../components/EarnStarsCard";

interface Props {}

const RewardsEarnStars: React.FC<Props> = (props) => {
  return (
    <div className="justify-center px-4 mb-20 md:mb-32 bg-secondary">
      <div className="py-16 mx-auto text-sm md:text-base max-w-144">
        <div className="mx-auto text-center md:w-1/2">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Cash or card, you earn Stars
          </h2>
          <p className="pt-4">
            No matter how you pay, you can earn Stars with your morning coffee.
            Those Stars add up to (really delicious) Rewards.
          </p>
        </div>

        {/* section 1 */}
        <EarnStarsSection title="1★ per dollar" desc="Pay as you go">
          {/* card 1 */}
          <EarnStarsCard
            title="Scan and pay separately"
            desc="Use cash or credit/debit card at the register."
            image-url="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png"
            image-alt="illustration of phone and credit card"
          ></EarnStarsCard>
          {/* card 2 */}
          <EarnStarsCard
            title="Save payment in the app"
            desc="Check-out faster by saving a credit/debit card or PayPal to
          your account. You’ll be able to order ahead or scan and pay at
          the register in one step."
            image-url="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png"
            image-alt="illustration of credit card in phone screen"
          ></EarnStarsCard>
        </EarnStarsSection>

        {/* section 2 */}
        <EarnStarsSection title="2★ per dollar" desc="Add funds in the app">
          {/* card 1 */}
          <EarnStarsCard
            title="Preload"
            desc="To save time and earn Stars twice as fast, add money to your
            digital Starbucks Card using any payment option. Scan and pay
            in one step or order ahead in the app."
            image-url="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2A.png"
            image-alt="illustration of credit card"
          ></EarnStarsCard>
          {/* card 2 */}
          <EarnStarsCard
            title="Register your gift card"
            desc="Then use it to pay through the app. You can even consolidate
            balances from multiple cards in one place."
            image-url="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2B.png"
            image-alt="illustration of gift card"
          ></EarnStarsCard>
        </EarnStarsSection>

        {/* Section 3 */}
        <EarnStarsSection
          title="Up to 3★ per dollar"
          desc="With Starbucks® Rewards Visa® Card"
          isLastSection={true}
        >
          {/* card 1 */}
          <EarnStarsCard
            title="Earn Stars even faster"
            desc={
              <>
                Earn Stars on all purchases you make with our&nbsp;
                <a
                  className="text-green-700 underline hover:no-underline"
                  href="https://www.starbucks.com/starbucks-rewards/credit-card"
                >
                  credit card
                  <svg
                    viewBox="0 0 24 24"
                    className="inline w-6 h-6 overflow-visible fill-current"
                    preserveAspectRatio="xMidYMid meet"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M14.75 18H7.875C6.84 18 6 17.16 6 16.125V9.25c0-1.036.84-1.875 1.875-1.875h5.11c.276 0 .5.224.5.5s-.224.5-.5.5h-5.11c-.483 0-.875.392-.875.875v6.875c0 .483.392.875.875.875h6.875c.483 0 .875-.392.875-.875V11c0-.276.224-.5.5-.5s.5.224.5.5v5.125c0 1.035-.84 1.875-1.875 1.875zM14 6.5c0-.276.224-.5.5-.5h3c.276 0 .5.224.5.5v3c0 .276-.224.5-.5.5s-.5-.224-.5-.5V7.72l-4.66 4.74c-.19.196-.507.2-.704.005-.197-.193-.2-.51-.006-.707L16.307 7H14.5c-.276 0-.5-.224-.5-.5z"></path>
                  </svg>
                </a>
                in and outside of Starbucks. Earn 1 Star per $1 when you
                digitally preload your Starbucks Card with your Starbucks®
                Rewards Visa® Card, and earn 2 Stars per $1 when you pay with
                that preloaded Starbucks Card.
              </>
            }
            image-url="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/3A.png"
            image-alt="illustration of visa card"
          ></EarnStarsCard>
        </EarnStarsSection>
      </div>
    </div>
  );
};

export default React.memo(RewardsEarnStars);
