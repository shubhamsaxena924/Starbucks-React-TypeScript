import React from "react";

interface Props {
  title: string;
  desc: string;
  children: React.ReactElement[] | React.ReactElement;
  isLastSection?: boolean;
}

const EarnStarsSection: React.FC<Props> = (props) => {
  // props.children.forEach((child) => {
  //   if (child.type !== EarnStarsCard) {
  //     throw new Error(
  //       "Children of EarnStarsSection should be EarnStarsCard. Given: " +
  //         child.type
  //     );
  //   }
  // });
  return (
    <>
      <div className="flex flex-col pt-12 lg:px-6 lg:flex-row xl:w-5/6">
        <div className="flex flex-col flex-none pb-8 lg:w-1/6">
          <h2 className="text-xl font-semibold md:text-2xl">{props.title}</h2>
          <p>{props.desc}</p>
        </div>
        <div className="flex flex-col flex-auto lg:ml-4 md:flex-row md:justify-between">
          {props.children}
        </div>
      </div>
      <hr className={props.isLastSection ? "border-t-0" : "border-t-2"} />
    </>
  );
};

EarnStarsSection.defaultProps = {
  isLastSection: false,
};

export default React.memo(EarnStarsSection);
