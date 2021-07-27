import React from "react";

interface Props {
  title: string;
  desc: string;
  image: string;
  "image-alt"?: string;
}

const TabContent: React.FC<Props> = (props) => {
  return (
    <div className="absolute top-0 left-0 right-0 flex flex-col items-center justify-center pb-12 mx-auto shadow-inner bg-primary-200 md:flex-row">
      <div className="flex-shrink-0 py-8 md:py-0">
        <img
          className="md:h-60 mb-star md:mb-0"
          src={props.image}
          alt={props["image-alt"]}
        />
      </div>
      <div className="px-4 text-center max-w-37 -mt-star md:mt-0 md:text-left">
        <h3 className="text-xl font-semibold md:text-2xl">{props.title}</h3>
        <p className="pt-4 text-sm md:text-base">{props.desc}</p>
      </div>
    </div>
  );
};

export default TabContent;
