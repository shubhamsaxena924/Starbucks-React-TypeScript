import React from "react";

interface Props {
  title: string;
  desc: string;
  image: string;
  "image-alt"?: string;
  isActive: boolean;
}

const TabContent: React.FC<Props> = (props) => {
  const isAbsolute = props.isActive ? " " : "absolute top-0 left-0 right-0";
  return (
    <div className={"py-5 mx-auto shadow-inner bg-primary-200 " + isAbsolute}>
      <div className="flex flex-col items-center justify-center md:flex-row">
        <div className="w-full my-8 md:my-0 md:w-auto">
          <div className="relative w-full">
            <div className="w-full md:absolute pb-star"></div>
            <img
              className="absolute inset-0 w-full md:static md:w-auto md:h-60"
              src={props.image}
              alt={props["image-alt"]}
            />
          </div>
        </div>
        <div className="px-4 text-center md:mt-0 md:text-left ">
          <div className="max-w-37">
            <h3 className="text-xl font-semibold md:text-2xl">{props.title}</h3>
            <p className="pt-4 text-sm md:text-base">{props.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabContent;
