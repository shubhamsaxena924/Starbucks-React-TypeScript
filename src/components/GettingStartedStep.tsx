import React from "react";

interface Props {
  sNum: number;
  sTitle: string;
  sTitleSmallScr: string;
  children?: React.ReactElement;
}

const GettingStartedStep: React.FC<Props> = (props) => {
  return (
    <div className="flex pb-8 md:flex-col">
      <div className="flex items-center justify-center flex-grow-0 flex-shrink-0 w-12 h-12 mr-4 text-2xl font-bold border-2 rounded-full md:mb-8 text-primary-400 border-primary-400 md:mx-auto">
        {props.sNum}
      </div>
      <div>
        <h3 className="text-base font-semibold md:hidden">
          {props.sTitleSmallScr}
        </h3>
        {/* <!-- heading on md --> */}
        <h3 className="hidden text-xl font-semibold md:block">
          {props.sTitle}
        </h3>
        {/* Description */}
        <p className="pt-4">{props.children}</p>
      </div>
    </div>
  );
};

export default React.memo(GettingStartedStep);
