import { createContext, useState } from "react";

export const BooksContext = createContext({
  books: [],
  setBooks: () => {},
});

export function BooksContextProvider({ initialData, children }) {
  const [books, setBooks] = useState(initialData);
  return (
    <BooksContext.Provider value={{ books, setBooks }}>
      {children}
    </BooksContext.Provider>
  );
}
