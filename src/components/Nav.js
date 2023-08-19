"use client";

import { useState } from "react";
import BibleIcon from "./icons/BibleIcon";
import Link from "next/link";

import TableOfContents from "./tableOfContents";
import Logo from "./Logo";
import TOC from "./toc";
import LetterMenu from "./letterMenu";

const Nav = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleToggleMenu = () => {
    document.getElementById("menu").style.display = menuIsOpen
      ? "none"
      : "inline";
    document.getElementById("menu").style.overflowY = menuIsOpen
      ? "hidden"
      : "scroll";
    document.getElementById("content").style.overflowY = menuIsOpen
      ? "scroll"
      : "hidden";
    document.getElementById("content").style.display = menuIsOpen
      ? "block"
      : "none";
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <div className="h-screen w-full  ">
      {/* <!-- Nav --> */}
      <section className="sm:hidden w-screen h-16 bg-gray-800 fixed pointer mb-2">
        <div
          className="w-10 h-10 fixed right-6 top-4 "
          onClick={handleToggleMenu}
        >
          <img
            src={menuIsOpen ? "/icons/menu-close.png" : "/icons/menu-open.png"}
            alt=""
          />
        </div>
      </section>
      <div className="flex">
        <section
          id="menu"
          style={{ "min-width": "240px" }}
          className=" hidden sm:w-1/3 md:w-1/2 sm:relative pb-20 sm:px-4 mt-16 sm:mt-0 h-full sm:inline fixed w-full items-center overflow-y-scroll bg-gray-800 "
        >
          <div className="hidden sm:inline">
            <Logo />
          </div>
          {/* <TableOfContents /> */}
          {/* <TOC handleToggleMenu={handleToggleMenu} /> */}

          <LetterMenu handleToggleMenu={handleToggleMenu} />
        </section>
        <section
          id="content"
          className="sm:fixed right-0 sm:w-2/3 md:w-1/2 overflow-y-scroll col-span-2 px-10"
        >
          {children}
        </section>
      </div>
    </div>
  );
};

export default Nav;
