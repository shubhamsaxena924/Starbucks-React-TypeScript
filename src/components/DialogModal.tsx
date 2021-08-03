import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, SetStateAction } from "react";

interface Props {
  isDialogOpen: boolean;
  setIsDialogOpen: React.Dispatch<SetStateAction<boolean>>;
  title: string;
  desc: string;
  buttonText: string;
}

const DialogModal: React.FC<Props> = (props) => {
  return (
    <Transition.Root show={props.isDialogOpen} as={Fragment}>
      <Dialog
        open={props.isDialogOpen}
        onClose={() => props.setIsDialogOpen(() => false)}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-70"
          entered="opacity-70"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-70"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 z-10 transform bg-black"></Dialog.Overlay>
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          entered="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed z-20 flex flex-col items-center self-center p-10 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md duration top-1/2 left-1/2 w-96">
            <h3 className="m-4 text-3xl text-center text-gray-500">
              {props.title}
            </h3>
            <p className="m-4 text-sm font-normal text-center text-gray-400">
              {props.desc}
            </p>
            <button
              className="inline-block px-8 py-2 mt-5 text-white duration-300 rounded-md w-28 bg-primary-400 hover:bg-opacity-80"
              onClick={() => props.setIsDialogOpen(() => false)}
            >
              {props.buttonText}
            </button>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default React.memo(DialogModal);
