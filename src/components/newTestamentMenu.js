import { useState } from "react";
import Link from "next/link";
import { NewTestamentBooks } from "./tableOfContentsData";

export default function NewTestamentMenu({
  handleToggleMenu,
  selectedBook,
  setSelectedBook,
}) {
  return (
    <div className="w-full h-full block px-10 pt-4 pb-64 overflow-y-scroll ">
      {NewTestamentBooks.map((book) => (
        <div
          className="px-4 "
          key={book.name}
          onClick={() => {
            handleToggleMenu();
            setSelectedBook(book.name);
          }}
        >
          <Link href={`/bible${book.href}`}>
            <div
              key={book.name}
              className={`w-full my-3 h-10 flex border px-4 items-center rounded-lg hover:scale-105 duration-200 ${
                book.name == selectedBook ? "bg-gray-900 border-green-500" : ""
              } `}
            >
              <h4 className="text-sm text-white">{book.name}</h4>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
