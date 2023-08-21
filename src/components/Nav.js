"use client";

import { useState } from "react";
import BibleIcon from "./icons/BibleIcon";
import Link from "next/link";

import TableOfContents from "./tableOfContents";
import Logo from "./Logo";
import TOC from "./toc";
import LetterMenu from "./letterMenu";
import OldTestamentMenu from "./oldTestamentMenu";
import NewTestamentMenu from "./newTestamentMenu";

const Nav = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [menuSelected, setMenuSelected] = useState("A to Z");
  const [selectedBook, setSelectedBook] = useState(" ");

  const handleToggleMenu = () => {
    console.log(selectedBook);

    var x = window.matchMedia("(min-width: 640px)");

    !x.matches &&
      (document.getElementById("menu").style.display = menuIsOpen
        ? "none"
        : "inline");

    !x.matches &&
      (document.getElementById("content").style.overflowY = menuIsOpen
        ? "scroll"
        : "hidden");
    !x.matches &&
      (document.getElementById("content").style.display = menuIsOpen
        ? "block"
        : "none");
    !x.matches && setMenuIsOpen(!menuIsOpen);
  };

  const menuSections = ["A to Z", "Old Testament", "New Testament"];

  const handleMenuSectionSelect = (e) => {
    const selected = e.target.innerText;
    setMenuSelected(selected);
    console.log(selected);
  };

  return (
    <div className="h-screen w-full  ">
      {/* <!-- Nav --> */}
      <section className="sm:hidden w-screen h-16 bg-gray-800 fixed pointer">
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
          className=" hidden sm:w-1/3 sm:static pb-20 sm:pb-0 sm:px-4 mt-16 sm:mt-0 h-screen sm:inline fixed w-full items-center overflow-hidden bg-gray-800 "
        >
          <div className="absolute flex w-full sm:h-32 h-16 sm:w-1/3 justify-center pl-2 sm:pl-0 sm:pr-8 mt-6 sm:mt-0 items-center">
            {menuSections.map((section) => (
              <button
                key={section}
                className={`w-1/3 border rounded-lg mx-2 h-14 p-2 ${
                  section == menuSelected ? "bg-gray-900 border-green-500" : ""
                }`}
                onClick={(e) => handleMenuSectionSelect(e)}
              >
                <h1 className="text-white text-center text-sm">{section}</h1>
              </button>
            ))}
          </div>
          {menuSelected == "A to Z" && (
            <LetterMenu
              handleToggleMenu={handleToggleMenu}
              selectedBook={selectedBook}
              setSelectedBook={setSelectedBook}
            />
          )}
          {menuSelected == "Old Testament" && (
            <OldTestamentMenu
              handleToggleMenu={handleToggleMenu}
              selectedBook={selectedBook}
              setSelectedBook={setSelectedBook}
            />
          )}
          {menuSelected == "New Testament" && (
            <NewTestamentMenu
              handleToggleMenu={handleToggleMenu}
              setSelectedBook={setSelectedBook}
              selectedBook={selectedBook}
            />
          )}
        </section>
        <section
          id="content"
          className="sm:fixed sm:right-0 h-full sm:w-2/3 overflow-y-scroll col-span-2 px-10"
        >
          {children}
        </section>
      </div>
    </div>
  );
};

export default Nav;
