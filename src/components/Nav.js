"use client";

import { useState } from "react";
import BibleIcon from "./icons/BibleIcon";
import Link from "next/link";

import TableOfContents from "./tableOfContents";

const Nav = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(true);

  const handleToggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <div className="h-screen w-full bg-white md:grid-cols-3 grid grid-cols-1">
      {/* <!-- Nav --> */}
      <aside className="md:h-full flex flex-wrap md:block md:flex-row md:w-full w-full h-16 mx-auto items-center bg-gray-800 text-white ">
        {/* <!-- Logo --> */}
        <Link
          href="/"
          className="h-10 mr-auto text-white w-32 px-2 flex justify-center items-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white"
        >
          My Expositor
        </Link>

        {/* <!-- menu --> */}
        <div className="block ml-auto text-base  items-center ">
          {/* <!-- icon --> */}
          <div className="block md:hidden">
            <button
              onClick={handleToggleMenu}
              className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
            >
              <svg
                className={`fill-current h-3 w-3 ${
                  menuIsOpen ? "hidden" : "block"
                }`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
              <svg
                className={`fill-current h-3 w-3 ${
                  menuIsOpen ? "block" : "hidden"
                }`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            </button>
          </div>

          {/* <!-- dropdown --> */}
          <div
            id="dropdownNavbar"
            className={`z-50  divide-y ${
              menuIsOpen ? "" : "hidden"
            } divide-gray-100 rounded-lg bg-gray-800 shadow `}
          >
            <TableOfContents />
          </div>
        </div>
      </aside>
      <aside className="relative overflow-y-scroll col-span-2 px-10">
        {children}
      </aside>
    </div>
  );
};

export default Nav;
