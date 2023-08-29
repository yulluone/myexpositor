import { useState } from "react";
import { BooksOfTheBible } from "./tableOfContentsData";
import LetterMenuItem from "./letterMenuItem";
import { BooksOfTheBibleAtoZ } from "./tableOfContentsData";

export default function LetterMenu({
  handleToggleMenu,
  selectedBook,
  setSelectedBook,
}) {
  //selected letter state
  const [selectedLetter, setSelectedLetter] = useState(" ");
  const [showBooks, setShowBooks] = useState([]);
  //starting letters for the books of the bible
  const letters = [
    "A",
    "C",
    "D",
    "E",
    "G",
    "H",
    "I",
    "J",
    "L",
    "K",
    "M",
    "N",
    "O",
    "P",
    "R",
    "S",
    "T",
    "Z",
  ];

  // const sortAtoZ = () => {
  //   const AtoZ = new Map();
  //   letters.map((letter) => {
  //     AtoZ.set(
  //       letter,
  //       BooksOfTheBible.filter((book) => {
  //         return book.name[0] === letter
  //           ? book
  //           : book.name[0] === "1" && book.name[2] === letter
  //           ? book
  //           : book.name[0] === "2" && book.name[2] === letter
  //           ? book
  //           : book.name[0] === "3" && book.name[2] === letter
  //           ? book
  //           : null;
  //       })
  //     );
  //   });
  //   return AtoZ;
  // };

  const handleLetterSelect = ({ letter }) => {
    // setShowBooks(
    //   BooksOfTheBible.filter((book) => {
    //     return book.name[0] === letter
    //       ? book
    //       : book.name[0] === "1" && book.name[2] === letter
    //       ? book
    //       : book.name[0] === "2" && book.name[2] === letter
    //       ? book
    //       : book.name[0] === "3" && book.name[2] === letter
    //       ? book
    //       : null;
    //   })
    // );

    setShowBooks(BooksOfTheBibleAtoZ.get(letter));
    letter == selectedLetter
      ? setSelectedLetter(" ")
      : setSelectedLetter(letter);
  };

  return (
    <div className="w-full h-full block px-10 pt-4 pb-64 overflow-y-scroll ">
      {letters.map((letter) => (
        <LetterMenuItem
          key={letter}
          letter={letter}
          handleLetterSelect={handleLetterSelect}
          handleToggleMenu={handleToggleMenu}
          selectedLetter={selectedLetter}
          showBooks={showBooks}
          selectedBook={selectedBook}
          setSelectedBook={setSelectedBook}
        />
      ))}
    </div>
  );
}
