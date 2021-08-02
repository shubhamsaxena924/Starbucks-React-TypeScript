import React from "react";
import { useState } from "react";

interface Props {}

const RewardsStarCodes: React.FC<Props> = (props) => {
  const [isInputFocussed, setIsInputFocussed] = useState<boolean>(false);
  const [starCode, setStarCode] = useState<string>("");
  const [isTouched, setIsTouched] = useState<boolean>(false);
  let fieldError: string = "";
  if (!starCode) {
    fieldError = "Please enter a Star code.";
  }
  let labelClass: string = "";
  const classesOnTop: string =
    " -translate-y-3/4 -translate-x-5 transform text-primary-300 scale-75 duration-300 ";
  const classesInCenter: string =
    " translate-y-0 translate-x-0 transform text-gray-700 duration-300 ";
  if (isInputFocussed && fieldError && isTouched) {
    labelClass = "text-youtube" + classesOnTop;
  } else if (isInputFocussed && fieldError && !isTouched) {
    labelClass = "text-primary-300" + classesOnTop;
  } else if (isInputFocussed && !fieldError && isTouched) {
    labelClass = "text-primary-300" + classesOnTop;
  } else if (isInputFocussed && !fieldError && !isTouched) {
    labelClass = "text-primary-300" + classesOnTop;
  } else if (!isInputFocussed && fieldError && isTouched) {
    labelClass = "text-youtube" + classesInCenter;
  } else if (!isInputFocussed && fieldError && !isTouched) {
    labelClass = "text-gray-700" + classesInCenter;
  } else if (!isInputFocussed && !fieldError && isTouched) {
    labelClass = "text-gray-700" + classesOnTop;
  } else if (!isInputFocussed && !fieldError && !isTouched) {
    labelClass = "text-gray-700" + classesOnTop;
  }
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
                <div className="relative mb-2">
                  {fieldError && isTouched && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute w-6 h-6 text-youtube top-3 right-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  <label htmlFor="star-code">
                    <span
                      className={
                        labelClass +
                        " absolute m-2 p-1 px-2 text-lg tracking-wider font-semibold  bg-white"
                      }
                    >
                      Enter your Star Code
                    </span>

                    <input
                      id="star-code"
                      type="text"
                      name="star-code"
                      required
                      className={
                        (fieldError && isTouched
                          ? "focus:ring-youtube ring-youtube"
                          : "focus:ring-primary-300 ring-primary-300") +
                        " w-full p-3 text-lg font-medium rounded-lg outline-none ring-1 ring-gray-400 focus:ring-2 "
                      }
                      onFocus={() => setIsInputFocussed(() => true)}
                      onBlur={() => {
                        setIsInputFocussed(() => false);
                        setIsTouched(() => true);
                      }}
                      value={starCode}
                      onChange={(event) => setStarCode(event.target.value)}
                    />
                  </label>
                  {isTouched && fieldError && (
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline w-5 h-5 m-1 text-youtube"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <span className="text-sm">{fieldError}</span>
                    </div>
                  )}
                </div>
                <div></div>
              </div>
              <button
                onClick={(event) => {
                  console.log("Star Code is: " + starCode);
                  event.preventDefault();
                }}
                className="block px-4 py-2 ml-auto font-semibold duration-300 border border-black rounded-full hover:bg-primary-100"
              >
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
