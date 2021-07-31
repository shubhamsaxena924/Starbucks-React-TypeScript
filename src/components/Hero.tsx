import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const Hero: React.FC<Props> = (props) => {
  return (
    <div className="mb-20 bg-primary-200 2xl:mb-32">
      <div className="flex w-full bg-center bg-no-repeat bg-cover 3000:bg-contain bg-gray-20 bg-mobile_star md:bg-star 2xl:justify-center">
        <div className="flex w-full max-w-144">
          <div className="h-0 pb-mobile md:pb-star"></div>
          <div className="flex items-start justify-center w-full md:items-center md:justify-start max-w-144">
            <div className="flex items-start justify-center">
              <div className="px-4 py-8 text-base text-center md:px-8 2xl:px-0 md:text-left md:text-xl">
                <h1 className="text-2xl font-semibold md:text-4xl">
                  FREE COFFEE
                  <br />
                  IS A TAP AWAY
                </h1>
                <p className="pt-4">Join now to start earning Rewards.</p>
                <button className="hidden px-4 py-2 mt-8 text-base font-semibold text-white duration-300 rounded-full bg-primary-300 md:block hover:bg-opacity-90">
                  Join now
                </button>
                <button className="px-4 py-2 mt-8 font-semibold text-white duration-300 rounded-full bg-primary-300 md:hidden hover:bg-opacity-90">
                  Join in the app
                </button>
                <p className="hidden pt-4 md:block">
                  Or&nbsp;
                  <Link className="underline hover:no-underline" to="#">
                    join in the app
                  </Link>
                  &nbsp;for the best experience
                </p>
                <p className="pt-4 md:hidden">
                  <Link className="underline hover:no-underline" to="#">
                    Or join online
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Hero);
