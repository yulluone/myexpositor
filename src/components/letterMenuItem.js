import Link from "next/link";

export default function LetterMenuItem({
  handleLetterSelect,
  handleToggleMenu,
  letter,
  selectedLetter,
  showBooks,
}) {
  return (
    <div className="text-white w-full  flex flex-col my-3	    ">
      <button
        onClick={() => handleLetterSelect(letter)}
        style={{ "min-width": "40px", "min-height": "40px" }}
        className="flex w-full h-10 justify-between border px-4  items-center align-center rounded-lg hover:scale-110 duration-200"
      >
        {letter}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className="px-4 ">
        {selectedLetter === letter &&
          showBooks.map((book) => (
            <Link href={`/bible${book.href}`}>
              <div
                onClick={handleToggleMenu}
                className="bg-gray-900 w-full my-3 h-10 flex border px-4 items-center rounded-lg hover:scale-105 duration-200"
              >
                <h4 className="text-sm text-white">{book.name}</h4>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
