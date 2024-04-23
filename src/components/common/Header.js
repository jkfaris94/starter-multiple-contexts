import { useContext } from "react";
import { BooksContext } from "../../contexts/BooksContext";

function Header() {
  const { books } = useContext(BooksContext);
  const reserved = books.filter((book) => book.borrowed).length;

  return (
    <header className="bg-warning sticky-top">
      <div className="p-5 display-5 mb-0">
        <h1>Book Reservation</h1>
        <h2 className="text-dark text-opacity-75">
          {reserved} / {books.length} Books Reserved.
        </h2>
      </div>
    </header>
  );
}

export default Header;
