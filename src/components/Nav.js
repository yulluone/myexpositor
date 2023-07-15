"use client";

import { useState } from "react";
import BibleIcon from "./icons/BibleIcon";

const Nav = ({ children }) => {
  const [hidden, setHidden] = useState(false);

  const handleToggleChapters = () => {
    setHidden(!hidden);
  };

  return (
    <div class="h-screen w-full bg-white md:grid-cols-3 grid grid-cols-1">
      {/* <!-- Nav --> */}
      <aside class="md:h-full md:w-full w-full h-16 flex md:flex-col flex-row  items-center justify-between px-3 md:justify-center bg-gray-800 text-white overflow-hidden">
        {/* <!-- Logo --> */}
        <div class="h-10 w-30 flex px-2 items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
          My Expositor
        </div>

        {/* <!-- Bible --> */}
        <div
          onClick={handleToggleChapters}
          class="h-10 px-2 flex flex-row space-x-2 items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white"
        >
          <BibleIcon />
          <div>Chapters</div>
        </div>
        {!hidden && (
          <div
            id="dropdownNavbar"
            class="z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              class="py-2 text-sm text-gray-700 dark:text-gray-400"
              aria-labelledby="dropdownLargeButton"
            >
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
            </ul>
          </div>
        )}
      </aside>

      <aside className="relative overflow-y-scroll col-span-2 px-10">
        {children}
      </aside>
    </div>
  );
};

export default Nav;
