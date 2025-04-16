import Header from "./components/common/Header";
import BooksList from "./components/Books/BooksList";
import LibrariesList from "./components/Libraries/LibrariesList";

import { BooksContextProvider } from "./contexts/BooksContext";
import booksData from "./data/books.json";

import librariesData from "./data/libraries.json";
import { LibrariesContextProvider } from "./contexts/LibrariesContext";

function App() {
  return (
    <BooksContextProvider initialData={booksData}>
      <Header />
      <main className="container mt-5">
        <div className="row">
          <LibrariesContextProvider initialData={librariesData}>
            <BooksList />
            <LibrariesList />
          </LibrariesContextProvider>
        </div>
      </main>
    </BooksContextProvider>
  );
}

export default App;
