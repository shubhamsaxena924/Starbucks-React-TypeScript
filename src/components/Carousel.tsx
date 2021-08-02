import { Transition } from "@headlessui/react";
import React, { Fragment, SetStateAction, useState } from "react";
import Tab from "./Tab";

interface Props {
  title: React.ReactNode;
  children: React.ReactElement[];
  setActive: React.Dispatch<SetStateAction<number>>;
}

const Carousel: React.FC<Props> = ({ title, children, setActive }) => {
  children.forEach((c) => {
    if (c.type !== Tab) {
      throw new Error("Children of TabList should be Tab. Received " + c.type);
    }
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const tabWidth = 100 / children.length;
  // var xTrans = 100*selectedIndex;
  // var translatecss = "translate(" + xTrans +"%)";

  return (
    <div className="mb-20 md:mb-32">
      <div className="pt-12 bg-primary-100">
        <h2 className="px-4 pb-4 text-2xl font-semibold text-center md:text-3xl md:pb-12">
          {title}
        </h2>
        <div className="w-full mx-auto max-w-54">
          <div className="flex items-center">
            {children.map((child, index) => (
              <button
                key={index}
                className="flex-1 px-2 py-4 text-xl font-semibold md:text-2xl"
                onClick={() => {
                  setSelectedIndex(index);
                  setActive(index);
                }}
              >
                {child.props.title}
              </button>
            ))}
          </div>
          <div
            className="h-1 duration-700 ease-in-out bg-primary-300"
            style={{
              width: tabWidth + "%",
              transform: "translate(" + 100 * selectedIndex + "%)",
            }}
          ></div>
        </div>
      </div>
      {/* Actual carousel  console.log("Before transition: " + translatecss)*/}
      <div className="relative" style={{ zIndex: -10 }}>
        {children.map((child, index) => (
          <Transition
            key={index}
            as={Fragment}
            unmount={false}
            show={index === selectedIndex}
            enter="transition-opacity duration-700"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            entered="opacity-100"
            leave="transition-opacity duration-700"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div>{child}</div>
          </Transition>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
