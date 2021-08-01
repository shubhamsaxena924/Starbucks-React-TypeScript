import React from "react";

interface Props {}

const RewardsBanner: React.FC<Props> = (props) => {
  return (
    <div className="sticky top-0 flex items-center justify-between px-5 text-sm text-white lg:top-25 bg-primary-400 md:pr-8 md:pl-25 lg:pl-28 xl:pl-8 h-14">
      <div className="w-full font-bold 2xl:m-auto max-w-144">
        STARBUCKS® REWARDS
      </div>
      <div className="flex flex-shrink-0">
        <button className="px-4 py-2 text-sm font-bold leading-4 duration-300 border border-white rounded-full sm:leading-5 hover:bg-primary-200 md:hidden hover:bg-opacity-20">
          Join in the app
        </button>
      </div>
    </div>
  );
};

export default React.memo(RewardsBanner);
