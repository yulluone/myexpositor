import { useState } from "react";
import { BooksOfTheBible } from "./tableOfContentsData";
import LetterMenuItem from "./letterMenuItem";

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
    "M",
    "N",
    "O",
    "P",
    "R",
    "S",
    "T",
    "Z",
  ];

  const handleLetterSelect = ({ letter }) => {
    setShowBooks(BooksOfTheBible.filter((book) => book.name[0] === letter));
    letter === selectedLetter
      ? setSelectedLetter("")
      : setSelectedLetter(letter);
  };

  return (
    <div className="w-full h-full block px-10 mt-32 pb-32 overflow-y-scroll ">
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
