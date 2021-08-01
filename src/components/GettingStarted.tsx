import React from "react";
import GettingStartedStep from "./GettingStartedStep";

interface Props {}

const GettingStarted: React.FC<Props> = (props) => {
  return (
    <div className="justify-center px-4 mb-20 md:mb-32">
      <div className="mx-auto text-sm md:text-base max-w-144">
        <div className="mx-auto text-center md:w-1/2">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Getting started is easy
          </h2>
          <p className="pt-4">
            Earn Stars and get rewarded in a few easy steps.
          </p>
        </div>

        <div className="flex flex-col pt-12 md:text-center md:space-x-6 md:flex-row md:mx-md-card">
          {/* Step 1 */}
          <GettingStartedStep
            key={1}
            sNum={1}
            sTitleSmallScr="Download the Starbucks® app"
            sTitle="Create an account"
          >
            <>
              <span className="md:hidden">
                <a
                  className="underline text-primary-300 hover:no-underline"
                  href={"/rewards"}
                >
                  Join in the app
                </a>
                &nbsp;to get access to the full range of Starbucks® Rewards
                benefits. You can also&nbsp;
                <a
                  className="underline text-primary-300 hover:no-underline"
                  href={"/rewards"}
                >
                  join online
                </a>
                .
              </span>
              <span className="hidden md:block">
                To get started,&nbsp;
                <a
                  className="underline text-primary-300 hover:no-underline"
                  href="/rewards"
                >
                  join now
                </a>
                . You can also&nbsp;
                <a
                  className="underline text-primary-300 hover:no-underline"
                  href="/rewards"
                >
                  join in the app
                </a>
                &nbsp;to get access to the full range of Starbucks® Rewards
                benefits.
              </span>
            </>
          </GettingStartedStep>
          {/* Step 2 */}
          <GettingStartedStep
            key={2}
            sNum={2}
            sTitleSmallScr="Order and pay how you’d like"
            sTitle="Order and pay how you’d like"
          >
            <>
              Use cash, credit/debit card or save some time and pay right
              through the app. You’ll collect Stars all ways.&nbsp;
              <a
                className="underline text-primary-300 hover:no-underline"
                href="/rewards"
              >
                Learn how
              </a>
            </>
          </GettingStartedStep>
          {/* Step 3 */}
          <GettingStartedStep
            key={3}
            sNum={3}
            sTitleSmallScr="Earn Stars, get Rewards"
            sTitle="Earn Stars, get Rewards"
          >
            <>
              As you earn Stars, you can redeem them for Rewards—like free food,
              drinks, and more. Start redeeming with as little as 25 Stars
            </>
          </GettingStartedStep>
        </div>
      </div>
    </div>
  );
};

export default React.memo(GettingStarted);
