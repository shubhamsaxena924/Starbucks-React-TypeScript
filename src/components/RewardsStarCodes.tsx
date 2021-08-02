import React from "react";
import { useState } from "react";

interface Props {}

const RewardsStarCodes: React.FC<Props> = (props) => {
  const [isInputFocussed, setIsInputFocussed] = useState<boolean>(false);
  return (
    <>
      <div className="mb-20 md:mb-32">
        <div className="mx-auto max-w-144">
          <div className="px-4 mx-auto md:w-1/2">
            <h2 className="text-2xl font-semibold md:text-3xl">Star Codes</h2>
            <p className="py-4 text-sm md:text-base">
              Yesssss. You’ve got Stars in your hand. Enter your code here and
              we’ll add Stars to your account.
            </p>
            <form>
              <div className="p-2">
                <div className="mb-4">
                  <label>
                    <span
                      className={
                        (isInputFocussed
                          ? "-translate-y-3/4 -translate-x-5 text-primary-300 scale-75 transform duration-300"
                          : "translate-y-0 translate-x-0 text-gray-700 transform duration-300") +
                        " absolute m-2 p-1 px-2 text-lg tracking-wider font-semibold  bg-white"
                      }
                    >
                      Enter your Star Code
                    </span>
                    <input
                      type="text"
                      name="star-code"
                      className="w-full p-3 text-lg font-medium rounded-lg outline-none ring-1 ring-gray-400 focus:ring-2 focus:ring-primary-300"
                      onFocus={() => setIsInputFocussed(() => true)}
                      onBlur={() => setIsInputFocussed(() => false)}
                    />
                  </label>
                </div>
                <div></div>
              </div>
              <button className="block px-4 py-2 ml-auto font-semibold duration-300 border border-black rounded-full hover:bg-primary-100">
                Submit
              </button>
            </form>
            <p className="pt-4 text-sm md:text-base">
              Have a receipt but don't have a code?
            </p>
            <p className="text-sm md:text-base">
              Go to&nbsp;
              <a
                className="underline text-primary-300 hover:no-underline"
                href="starbucks-stars.com"
              >
                starbucks-stars.com
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
              &nbsp;to upload your receipt and collect your Stars.
            </p>
          </div>
        </div>
      </div>

      {/*questions */}
      <div className="mb-20 md:mb-32">
        <div className="mx-auto max-w-144">
          <div className="px-4 mx-auto md:w-1/2">
            <h2 className="text-2xl font-semibold md:text-3xl">Questions?</h2>
            <p className="py-4 text-sm md:text-base">
              We want to help in any way we can. You can ask your barista
              anytime or we’ve answered the most commonly asked questions&nbsp;
              <a
                className="underline text-primary-300 hover:no-underline"
                href="https://customerservice.starbucks.com/app/answers/list/p/552"
              >
                right over here&nbsp;
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
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(RewardsStarCodes);
