import React from "react";

interface Props {}

const Banner: React.FC<Props> = (props) => {
  return (
    <div className="flex items-center justify-between px-5 text-sm text-white bg-primary-400 md:pr-8 md:pl-25 lg:pl-28 xl:pl-8 h-14">
      <div className="w-full font-bold 2xl:m-auto max-w-144">
        STARBUCKS® REWARDS
      </div>
      <div className="flex flex-shrink-0">
        <button className="px-4 py-2 font-bold duration-300 border border-white rounded-full hover:bg-primary-200 md:hidden hover:bg-opacity-20">
          Join in the app
        </button>
      </div>
    </div>
  );
};

export default React.memo(Banner);
