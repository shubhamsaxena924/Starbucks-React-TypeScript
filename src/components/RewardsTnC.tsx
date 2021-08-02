import React from "react";

interface Props {}

const RewardsTnC: React.FC<Props> = (props) => {
  return (
    <div className="bg-primary-100">
      <div className="px-6 py-12 mx-auto text-sm max-w-144">
        <p className="mb-8">At participating stores. Restrictions apply.</p>

        <div className="flex flex-col md:flex-row">
          {/* card 1 */}
          <div className="flex-1">
            <h3 className="pb-4 font-bold tracking-widest text-gray-600">
              EARNING STARS
            </h3>
            <p className="pb-4">
              Stars cannot be earned on purchases of alcohol, Starbucks Cards or
              Starbucks Card reloads.
            </p>
            <p className="pb-4">
              Earn 1 Star per $1 spent when you scan your member barcode in the
              app, then pay with cash, credit/debit cards or mobile wallets at
              participating stores. You can also earn 1 Star per $1 spent when
              you link a payment method and pay directly through the app.
            </p>
            <p className="pb-4">
              Earn 2 Stars per $1 spent when you load funds and pay with your
              digital Starbucks Card in the app. You can also earn 2 Stars per
              $1 spent when you pay in-person at a participating store with your
              registered physical Starbucks Card or scan your member barcode in
              the app, and then use any physical Starbucks Card (regardless of
              whether it is registered) to complete the purchase.
            </p>
          </div>

          {/* card 2 */}
          <div className="flex-1 pt-4 md:pl-8 md:pt-0">
            <h3 className="pb-4 font-bold tracking-widest text-gray-600">
              TERMS OF USE
            </h3>
            <p className="pb-4">
              For full program details visit
              <a
                className="block underline text-primary-300 hover:no-underline"
                href="starbucks.com/rewards/term"
              >
                starbucks.com/rewards/term
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
            </p>
            <p className="pb-4">
              * Earn 1 Star per $1 when digitally loading your Starbucks Card
              with your Starbucks® Rewards Visa® Card: See your Card Rewards
              Program Agreement for more details.
            </p>
            <p className="pb-4">
              Starbucks® Rewards benefits are available at participating
              Starbucks stores. Not all stores have the ability to honor Rewards
              at this time. Visit the&nbsp;
              <a
                className="underline text-primary-300 hover:no-underline"
                href="starbucks.com/store-locator"
              >
                Starbucks Store Locator
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
              &nbsp;and search for locations honoring “Redeem Rewards”.
            </p>
            <p className="pb-4">
              Deposit and credit card products provided by JPMorgan Chase Bank,
              N.A. Member FDIC
            </p>
          </div>
        </div>

        <div className="flex flex-col mt-4 md:flex-row">
          {/* card 3 */}
          <div className="flex-1">
            <h3 className="pb-4 font-bold tracking-widest text-gray-600">
              BENEFITS
            </h3>
            <p className="pb-4">
              Free refills available during same in-store visit only. To qualify
              for the Birthday Reward, you must have made at least one
              Star-earning transaction.
            </p>
          </div>

          {/* card 4 */}
          <div className="flex-1 pt-4 md:pl-8 md:pt-0">
            <h3 className="pb-4 font-bold tracking-widest text-gray-600">
              REDEEMING REWARDS
            </h3>
            <p className="pb-4">
              Rewards cannot be redeemed for alcoholic beverages or multi-serve
              items. Not all stores honor tiered Rewards. Select stores redeem
              150 Stars for free food or drink items only.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(RewardsTnC);
