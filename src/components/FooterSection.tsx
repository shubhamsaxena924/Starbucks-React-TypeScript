import { Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";

interface Props {
  title: string;
  subtitles: {
    desc: string;
    url: string;
  }[];
}

const FooterSection: React.FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  window
    .matchMedia("(min-width: 1024px)")
    .addEventListener("change", () => setIsOpen(false));
  return (
    <>
      <div className="flex flex-col justify-between flex-1 mb-8 lg:justify-start">
        <div className="flex justify-between w-full ">
          <h3 className="lg:mb-4 h-7">{props.title}</h3>
          {/* <!-- arrow button --> */}
          <div className="flex ml-auto duration-300 rounded-full lg:hidden hover:bg-primary-200">
            <button onClick={() => setIsOpen((open) => !open)}>
              <svg
                viewBox="0 0 24 24"
                className={
                  (isOpen ? "rotate-180 " : "") +
                  " w-8 h-8 overflow-visible transform transition-transform duration-300 fill-current"
                }
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M11.96 15.5c-.206 0-.402-.084-.546-.232l-5.188-5.33c-.3-.31-.3-.81 0-1.12.3-.31.79-.31 1.093 0l4.64 4.767 4.723-4.853c.3-.31.79-.31 1.09 0 .303.31.303.812.002 1.122l-5.27 5.414c-.145.148-.34.232-.546.232"></path>
              </svg>
            </button>
          </div>
        </div>
        <Transition
          show={isOpen}
          as={Fragment}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <ul className={"flex-col h-auto py-8 space-y-6 text-base lg:flex"}>
            {props.subtitles.map((subtitle) => (
              <li className="text-gray-500 hover:text-black">
                <a href={subtitle.url}>{subtitle.desc}</a>
              </li>
            ))}
          </ul>
        </Transition>
        <ul
          className={"flex-col h-full hidden py-8 space-y-6 text-base lg:flex"}
        >
          {props.subtitles.map((subtitle) => (
            <li className="text-gray-500 hover:text-black">
              <a href={subtitle.url}>{subtitle.desc}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default React.memo(FooterSection);
