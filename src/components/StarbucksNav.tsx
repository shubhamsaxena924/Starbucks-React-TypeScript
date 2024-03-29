import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

interface Props {}

const StarbucksNav: React.FC<Props> = (props) => {
  const [isTransitionLeaving, setIsTransitionLeaving] =
    useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMenuLinkClicked, setIsMenuLinkClicked] = useState<boolean>(false);
  window
    .matchMedia("(min-width: 768px)")
    .addEventListener("change", () => setIsMenuOpen(false));
  return (
    <header
      className={
        "top-0 left-0 right-0 z-30 lg:sticky " +
        (isMenuOpen ? "w-screen" : "w-full")
      }
    >
      <nav className="relative z-40 bg-white shadow-lg">
        <div className="flex items-center justify-center px-6 m-auto md:px-8">
          <div className="w-10 my-4 2xl:absolute md:w-14 md:ml-0 md:mr-4 lg:mr-7">
            <Link to="#">
              <svg
                className="text-black rounded"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100%"
                height="100%"
                viewBox="0 0 62 62"
              >
                <g
                  fill="none"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit={10}
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                >
                  <path
                    fill="#006341"
                    d="M34.017 13.969c-.263-.047-1.531-.26-3.017-.26s-2.754.212-3.017.26c-.151.027-.209-.121-.094-.207.104-.077 3.11-2.365 3.11-2.365l3.109 2.365c.117.086.06.234-.091.207zm-5.194 14.856s-.159.057-.201.197c.63.484 1.064 1.585 2.378 1.585s1.748-1.101 2.377-1.585c-.041-.141-.2-.197-.2-.197s-.823.194-2.177.194-2.177-.194-2.177-.194zm2.177-1.853c-.365 0-.445-.138-.694-.137-.237.001-.697.19-.797.363.007.088.039.167.103.237.532.08.772.376 1.389.376s.856-.296 1.389-.376c.062-.07.096-.148.103-.237-.099-.173-.56-.361-.798-.363-.25-.002-.331.137-.695.137zm29.956 5.673c-.038.717-.102 1.428-.19 2.131-3.396.562-4.61-2.464-8.089-2.312.208.738.377 1.49.507 2.258 2.869-.002 4.025 2.68 7.217 2.285-.168.82-.37 1.629-.603 2.426-2.524.248-3.413-2.26-6.334-2.191.024.416.037.836.037 1.26l-.012.701 5.672 2.164c-.297.807-.629 1.596-.991 2.369-1.705-.094-2.293-2.281-4.887-2.107-.078.561-.177 1.115-.295 1.662 2.253-.158 2.738 1.916 4.352 2.084-.411.75-.854 1.48-1.325 2.191-.956-.512-1.785-2.057-3.598-2.152.186-.574.349-1.156.487-1.748-1.608 0-3.447-.627-4.989-2.031.5-2.846-3.917-5.744-3.917-7.828 0-2.264 1.145-3.517 1.145-6.569 0-2.265-1.1-4.722-2.759-6.401-.321-.326-.65-.59-1.028-.827 1.524 1.886 2.694 4.122 2.694 6.712 0 2.874-1.337 4.391-1.337 7.044 0 2.652 3.88 4.947 3.88 7.682 0 1.076-.344 2.127-1.478 4.191 1.742 1.74 4.011 2.689 5.475 2.689.475 0 .73-.145.9-.518.146-.322.285-.648.416-.977 1.577.061 2.299 1.494 3.172 2.066-.479.643-.982 1.264-1.509 1.865-.585-.648-1.371-1.738-2.522-2.041-.206.4-.424.795-.653 1.182.991.27 1.669 1.27 2.194 1.928-.566.586-1.155 1.148-1.768 1.688-.383-.596-.979-1.352-1.647-1.76-.247.334-.504.66-.769.977.568.385 1.069 1.078 1.396 1.643-.708.568-1.44 1.107-2.198 1.611-.374-3.047-4.533-5.135-3.412-8.67-.368.623-.807 1.402-.807 2.34 0 2.559 2.726 4.59 2.943 7.133-.565.338-1.143.656-1.732.957-.098-2.795-2.984-5.854-2.984-8.148 0-2.561 3.354-5.133 3.354-8.156 0-3.025-3.87-5.119-3.87-7.775 0-2.654 1.646-4.181 1.646-7.583 0-2.492-1.184-5.014-3.013-6.625-.324-.286-.643-.513-1.026-.712 1.725 2.069 2.725 3.946 2.725 6.794 0 3.199-1.886 4.975-1.886 8.107 0 3.133 3.798 4.875 3.798 7.795s-3.535 5.381-3.535 8.381c0 2.729 3.116 5.453 3.162 8.691-.681.297-1.375.568-2.081.814.396-3.271-3.111-6.645-3.111-9.314 0-2.918 3.667-5.426 3.667-8.572 0-3.148-3.728-4.611-3.728-7.842 0-3.229 2.287-5.017 2.287-8.585 0-2.781-1.373-5.282-3.379-6.832l-.127-.096c-.189-.14-.345.029-.211.195 1.42 1.773 2.179 3.566 2.179 6.221 0 3.264-2.627 5.916-2.627 9.078 0 3.732 3.528 4.799 3.528 7.861 0 3.061-3.783 5.51-3.783 8.76 0 3.014 3.58 6.359 2.966 9.838-.718.186-1.446.348-2.185.48.672-4.332-2.84-7.443-2.84-10.277 0-3.068 3.918-5.803 3.918-8.801 0-2.828-2.812-3.752-3.182-6.645-.051-.395-.368-.688-.805-.615-.571.104-1.303.48-2.453.48s-1.882-.377-2.454-.48c-.436-.072-.753.221-.804.615-.369 2.893-3.183 3.816-3.183 6.645 0 2.998 3.919 5.732 3.919 8.801 0 2.834-3.512 5.945-2.841 10.277-.738-.133-1.467-.295-2.185-.48-.614-3.479 2.967-6.824 2.967-9.838 0-3.25-3.784-5.699-3.784-8.76 0-3.062 3.529-4.129 3.529-7.861 0-3.162-2.628-5.813-2.628-9.078 0-2.654.759-4.447 2.18-6.221.133-.166-.022-.335-.212-.195l-.126.096c-2.004 1.546-3.376 4.047-3.376 6.828 0 3.568 2.287 5.356 2.287 8.585 0 3.23-3.728 4.693-3.728 7.842 0 3.146 3.667 5.654 3.667 8.572 0 2.67-3.507 6.043-3.11 9.314-.707-.246-1.401-.518-2.082-.814.047-3.238 3.161-5.963 3.161-8.691 0-3-3.533-5.461-3.533-8.381s3.796-4.662 3.796-7.795c0-3.132-1.885-4.908-1.885-8.107 0-2.848.999-4.725 2.724-6.794-.384.199-.702.426-1.025.712-1.829 1.611-3.012 4.133-3.012 6.625 0 3.402 1.646 4.929 1.646 7.583 0 2.656-3.87 4.75-3.87 7.775 0 3.023 3.354 5.596 3.354 8.156 0 2.295-2.888 5.354-2.985 8.148-.589-.301-1.167-.619-1.732-.957.218-2.543 2.943-4.574 2.943-7.133 0-.938-.438-1.717-.807-2.34 1.121 3.535-3.038 5.623-3.412 8.67-.758-.504-1.491-1.043-2.198-1.611.326-.564.827-1.258 1.396-1.643-.266-.316-.522-.643-.769-.977-.669.408-1.266 1.164-1.648 1.76-.611-.539-1.201-1.102-1.767-1.688.525-.658 1.203-1.658 2.194-1.928-.229-.387-.447-.781-.653-1.182-1.151.303-1.938 1.393-2.522 2.041-.527-.602-1.031-1.223-1.509-1.865.873-.572 1.595-2.006 3.171-2.066.132.328.271.654.417.977.17.373.426.518.9.518 1.464 0 3.732-.949 5.475-2.689-1.134-2.064-1.478-3.115-1.478-4.191 0-2.734 3.88-5.029 3.88-7.682 0-2.653-1.337-4.17-1.337-7.044 0-2.59 1.17-4.826 2.694-6.712-.378.237-.707.501-1.028.827-1.659 1.68-2.759 4.136-2.759 6.401 0 3.052 1.146 4.305 1.146 6.569 0 2.084-4.418 4.982-3.918 7.828-1.542 1.404-3.381 2.031-4.99 2.031.14.592.303 1.174.487 1.748-1.812.096-2.641 1.641-3.598 2.152-.472-.711-.914-1.441-1.325-2.191 1.613-.168 2.099-2.242 4.353-2.084-.118-.547-.218-1.102-.296-1.662-2.594-.174-3.182 2.014-4.887 2.107-.362-.773-.694-1.562-.991-2.369l5.673-2.164-.012-.701c0-.424.013-.844.036-1.26-2.921-.068-3.81 2.439-6.334 2.191-.232-.797-.435-1.605-.602-2.426 3.19.395 4.347-2.287 7.217-2.285.13-.768.299-1.52.506-2.258-3.479-.151-4.693 2.875-8.088 2.312-.089-.703-.152-1.414-.19-2.131 3.947.441 5.427-2.804 9.021-2.407.339-.859.733-1.69 1.177-2.49-4.506-.792-6.036 2.976-10.23 2.397.453-16.171 13.706-29.143 29.989-29.143s29.536 12.972 29.989 29.147c-4.195.579-5.725-3.188-10.23-2.397.443.8.837 1.631 1.177 2.49 3.592-.398 5.072 2.848 9.02 2.407zm-42.852-12.583c-2.209-.903-4.883-.695-7.167.772-.354-2.125-1.507-4.013-3.149-5.152-.227-.157-.463-.008-.442.255.347 4.49-2.278 8.389-5.506 11.816 3.327 1 6.159-3.284 10.474-1.789 1.548-2.305 3.514-4.308 5.79-5.902zm12.896-2.716c-2.785 0-5.118 1.575-5.729 3.61-.047.156.017.257.197.176.501-.225 1.071-.333 1.69-.333 1.136 0 2.137.417 2.729 1.143.262.864.284 2.115-.012 2.829-.468-.105-.636-.467-1.093-.467s-.811.321-1.586.321c-.774 0-.865-.366-1.374-.366-.599 0-.709.617-.709 1.313 0 3.103 2.852 7.373 5.886 7.373 3.033 0 5.885-4.27 5.885-7.373 0-.696-.143-1.292-.769-1.373-.312.225-.599.426-1.313.426-.775 0-.989-.321-1.445-.321-.551 0-.496 1.162-1.15 1.227-.436-1.048-.457-2.392-.095-3.589.593-.726 1.593-1.143 2.729-1.143.619 0 1.193.109 1.689.333.181.081.244-.021.197-.176-.61-2.035-2.942-3.61-5.727-3.61zm4.434 4.452c-.668 0-1.451.205-1.943.753-.051.149-.051.371.021.519 1.211-.415 2.279-.431 2.795.146.275-.25.363-.475.363-.736 0-.403-.41-.682-1.236-.682zm-9.741 1.418c.584-.585 1.815-.56 3.094-.088.056-.636-1.083-1.331-2.221-1.331-.827 0-1.236.279-1.236.683 0 .261.088.487.363.736zm19.194-10.504c-2.199.157-4.109.912-5.654 2.17.656-1.86 1.489-3.487 2.545-5.064-2.8.297-5.141 1.321-6.849 3.071l-1.337-3.505 2.968-2.621-3.974-.281-1.586-3.696-1.587 3.696-3.974.281 2.968 2.621-1.336 3.505c-1.709-1.75-4.05-2.774-6.848-3.071 1.054 1.578 1.887 3.205 2.543 5.064-1.544-1.259-3.454-2.014-5.653-2.17 1.319 1.696 2.488 3.504 3.354 5.448.098.219.308.291.535.178 3.012-1.497 6.406-2.339 9.997-2.339s6.984.843 9.998 2.339c.227.113.437.041.534-.178.867-1.944 2.036-3.752 3.356-5.448zm4.801 13.254c4.313-1.495 7.146 2.788 10.473 1.789-3.228-3.427-5.852-7.326-5.505-11.816.021-.263-.216-.413-.442-.255-1.643 1.139-2.796 3.027-3.149 5.152-2.285-1.467-4.958-1.676-7.167-.772 2.273 1.592 4.24 3.595 5.79 5.902z"
                  ></path>
                </g>
                <g fill="#006341">
                  <path d="M53.595 57.01h-1.526v4.105h-.547v-4.105h-1.522v-.51h3.595v.51zM54.236 56.5h.811l1.57 3.618h.011l1.574-3.618h.798v4.615h-.551v-3.869h-.012l-1.653 3.869h-.333l-1.659-3.869h-.011v3.869h-.545v-4.615z"></path>
                </g>
              </svg>
            </Link>
          </div>
          <div className="flex items-center w-full max-w-144">
            <div className="hidden text-sm font-bold tracking-widest md:inline-block">
              <ul>
                <li className="inline-block">
                  <NavLink
                    activeClassName="border-b-8 border-primary-300"
                    className="inline-block py-7 lg:py-9 hover:text-primary-300"
                    to="/menu"
                  >
                    MENU
                  </NavLink>
                </li>
                <li className="inline-block pl-4 lg:pl-7">
                  <NavLink
                    activeClassName="border-b-8 border-primary-300"
                    className="inline-block py-7 lg:py-9 hover:text-primary-300"
                    to="/rewards"
                  >
                    REWARDS
                  </NavLink>
                </li>
                <li className="inline-block pl-4 lg:pl-7">
                  <NavLink
                    activeClassName="border-b-8 border-primary-300"
                    className="inline-block py-7 lg:py-9 hover:text-primary-300"
                    to="/gifts"
                  >
                    GIFT CARDS
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="items-center hidden ml-auto text-sm md:flex">
              <Link
                className="inline-block mr-10 font-semibold hover:text-primary-300"
                to="#"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="inline-block valign-middle pr2"
                  preserveAspectRatio="xMidYMid meet"
                  aria-hidden="true"
                  focusable="false"
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    overflow: "visible",
                    fill: "currentcolor",
                  }}
                >
                  <path d="M12,11.475 C10.5214286,11.475 9.32142857,10.299 9.32142857,8.85 C9.32142857,7.401 10.5214286,6.225 12,6.225 C13.4785714,6.225 14.6785714,7.401 14.6785714,8.85 C14.6785714,10.299 13.4785714,11.475 12,11.475 M12,1.5 C7.85357143,1.5 4.5,4.7865 4.5,8.85 C4.5,14.3625 12,22.5 12,22.5 C12,22.5 19.5,14.3625 19.5,8.85 C19.5,4.7865 16.1464286,1.5 12,1.5"></path>
                </svg>
                Find a store
              </Link>
              <button className="px-4 py-2 font-semibold duration-300 border border-black rounded-full hover:bg-primary-100">
                Sign in
              </button>
              <button className="px-4 py-2 ml-4 font-semibold text-white duration-300 bg-black border border-black rounded-full hover:bg-primary-400 hover:bg-opacity-90">
                Join now
              </button>
            </div>
            <div className="flex p-2 ml-auto duration-700 ease-out rounded-full md:hidden hover:bg-gray-100">
              <button
                className={"menu " + (isMenuOpen ? "opened" : "")}
                onClick={() => {
                  setIsMenuOpen((open) => !open);
                  setIsMenuLinkClicked(() => false);
                }}
                disabled={isTransitionLeaving}
              >
                <svg className="w-8 h-8" viewBox="0 0 100 100">
                  <path
                    className="line line1"
                    d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                  />
                  <path className="line line2" d="M 20,50 H 80" />
                  <path
                    className="line line3"
                    d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* trick to move the content below the fixed nav bar when height of nav bar changes */}
      {/* <div className="hidden lg:block lg:relative lg:h-24"></div> */}
      <Transition.Root
        show={isMenuOpen}
        as={Fragment}
        beforeLeave={() => setIsTransitionLeaving(() => true)}
        afterLeave={() => setIsTransitionLeaving(() => false)}
      >
        <Dialog
          open={isMenuOpen}
          onClose={() => {
            setIsMenuOpen(() => false);
            setIsMenuLinkClicked(() => false);
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-50"
            entered="opacity-50"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-50"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 z-10 transform bg-black"></Dialog.Overlay>
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-transform duration-500"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition-transform duration-500"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="fixed top-0 bottom-0 right-0 z-20 w-3/4 p-5 transform bg-white pt-28">
              <ul className="flex flex-col text-lg font-semibold tracking-wider">
                <li className="m-4">
                  <button
                    className="flex items-center justify-between w-full font-semibold tracking-wider"
                    onClick={() => {
                      setIsMenuLinkClicked(true);
                    }}
                  >
                    <span>Menu</span>
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 overflow-hidden fill-current"
                      preserveAspectRatio="xMidYMid meet"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M8.902 17.656c-.293.293-.293.768 0 1.06.293.294.768.294 1.06 0L16.38 12.3c.293-.293.293-.768 0-1.06L9.86 4.72c-.293-.293-.767-.293-1.06 0-.293.293-.293.767 0 1.06l5.99 5.99L8.9 17.656z"></path>
                    </svg>
                  </button>
                </li>
                {/* Nested transition */}
                <Transition
                  show={isMenuLinkClicked}
                  as={Fragment}
                  enter="transition-transform duration-500"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition-transform duration-500"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <div className="fixed top-0 bottom-0 right-0 z-30 w-full transform bg-white">
                    <button
                      onClick={() => setIsMenuLinkClicked(() => false)}
                      className="flex items-center justify-between w-full px-5 pt-20 pb-2 bg-primary-100"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className={
                          "rotate-90 w-8 h-8 overflow-visible transform transition-transform duration-300 fill-current"
                        }
                        preserveAspectRatio="xMidYMid meet"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M11.96 15.5c-.206 0-.402-.084-.546-.232l-5.188-5.33c-.3-.31-.3-.81 0-1.12.3-.31.79-.31 1.093 0l4.64 4.767 4.723-4.853c.3-.31.79-.31 1.09 0 .303.31.303.812.002 1.122l-5.27 5.414c-.145.148-.34.232-.546.232"></path>
                      </svg>
                      <li className="w-full m-4">Menu</li>
                    </button>
                    <ul className="flex flex-col p-5 text-lg font-semibold tracking-wider">
                      <li className="m-4">
                        <Link
                          to="/menu"
                          onClick={() => setIsMenuOpen(() => false)}
                        >
                          All Products
                        </Link>
                      </li>
                      <li className="m-4">
                        <Link
                          to="/menu"
                          onClick={() => setIsMenuOpen(() => false)}
                        >
                          Featured
                        </Link>
                      </li>
                      <li className="m-4">
                        <Link
                          to="/menu"
                          onClick={() => setIsMenuOpen(() => false)}
                        >
                          Previous
                        </Link>
                      </li>
                      <li className="m-4">
                        <Link
                          to="/menu"
                          onClick={() => setIsMenuOpen(() => false)}
                        >
                          Favorites
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Transition>
                <li className="m-4">
                  <Link
                    to="/rewards"
                    onClick={() => setIsMenuOpen(() => false)}
                  >
                    Rewards
                  </Link>
                </li>
                <li className="m-4">
                  <Link to="/gifts" onClick={() => setIsMenuOpen(() => false)}>
                    Gift Cards
                  </Link>{" "}
                </li>
              </ul>
              <hr className="mx-3 my-6 border-t-2" />
              <div className="flex flex-col space-y-2 xs:space-y-0 xs:space-x-4 xs:flex-row">
                <button className="flex-grow-0 flex-shrink-0 px-4 py-1 text-sm font-semibold leading-6 duration-300 border border-black rounded-full hover:bg-primary-100">
                  Sign in
                </button>
                <button className="flex-grow-0 flex-shrink-0 px-4 py-1 text-sm font-semibold leading-6 text-white duration-300 bg-black border border-black rounded-full hover:bg-primary-400 hover:bg-opacity-90">
                  Join now
                </button>
              </div>
              <Link
                className="block mt-4 mr-2 font-semibold hover:text-primary-300"
                to="#"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="inline-block valign-middle pr2"
                  preserveAspectRatio="xMidYMid meet"
                  aria-hidden="true"
                  focusable="false"
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    overflow: "visible",
                    fill: "currentcolor",
                  }}
                >
                  <path d="M12,11.475 C10.5214286,11.475 9.32142857,10.299 9.32142857,8.85 C9.32142857,7.401 10.5214286,6.225 12,6.225 C13.4785714,6.225 14.6785714,7.401 14.6785714,8.85 C14.6785714,10.299 13.4785714,11.475 12,11.475 M12,1.5 C7.85357143,1.5 4.5,4.7865 4.5,8.85 C4.5,14.3625 12,22.5 12,22.5 C12,22.5 19.5,14.3625 19.5,8.85 C19.5,4.7865 16.1464286,1.5 12,1.5"></path>
                </svg>
                Find a store
              </Link>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </header>
  );
};

export default React.memo(StarbucksNav);
