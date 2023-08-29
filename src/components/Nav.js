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
  const [expositorOn, setExpositorOn] = useState(true);

  const handleToggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const handleExpositorToggle = () => {
    const exposition = document.getElementsByClassName("italic1");
    // console.log(typeof exposition, exposition.length, exposition);

    for (const item in exposition) {
      // console.log(item, exposition[item]);
      try {
        {
          expositorOn
            ? (exposition[item].style.display = "none")
            : (exposition[item].style.display = "inline");
        }
        setExpositorOn(!expositorOn);
      } catch (err) {
        console.log(err);
      }
    }
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
          className=" w-26 h-10 fixed left-6 pt-4"
          onClick={handleExpositorToggle}
        >
          <button
            className={
              expositorOn ? "text-green-500 text-xl " : "text-white text-xl"
            }
          >
            {expositorOn ? "Expositor" : "Normal"}
          </button>
        </div>
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
          style={{ minWidth: "240px" }}
          className={`sm:w-1/3 ${
            menuIsOpen ? "inline" : "hidden"
          } sm:block pb-20 sm:pb-0 sm:px-4 mt-16 sm:mt-0 h-screen sm:inline fixed w-full items-center overflow-hidden bg-gray-800`}
        >
          <div
            className=" flex justify-center my-4 hidden sm:block"
            onClick={handleExpositorToggle}
          >
            <button
              className={
                expositorOn
                  ? "text-green-500  text-3xl "
                  : "text-white  text-3xl"
              }
            >
              {expositorOn ? "Expositor" : "Normal"}
            </button>
          </div>
          <div className=" flex flex-wrap w-full justify-center pl-2 sm:pl-0 sm:mt-0 items-center">
            {menuSections.map((section) => (
              <button
                key={section}
                style={{ minWidth: "120px" }}
                className={`w-1/3 border rounded-lg mx-2 h-14 p-2 m-2 ${
                  section == menuSelected ? "bg-gray-900 border-green-500" : ""
                }`}
                onClick={(e) => handleMenuSectionSelect(e)}
              >
                <h1 className="text-white text-center text-sm">{section}</h1>
              </button>
            ))}
          </div>
          <div className="w-full h-full pt-2">
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
          </div>
        </section>
        <section
          id="content"
          // style={{ display: `${menuIsOpen ? "none" : "block"}` }}
          className={`sm:fixed sm:block sm:right-0 h-full sm:w-2/3 ${
            menuIsOpen ? "hidden" : " block"
          } col-span-2 px-10`}
        >
          {children}
        </section>
      </div>
    </div>
  );
};

export default Nav;
