import Header from "./components/common/Header";
import BooksList from "./components/Books/BooksList";

import { BooksContextProvider } from "./contexts/BooksContext";
import booksData from "./data/books.json";

import LibrariesList from "./components/Libraries/LibrariesList";
import librariesData from "./data/libraries.json";

function App() {
  return (
    <BooksContextProvider initialData={booksData}>
      <Header />
      <main className="container mt-5">
        <div className="row">
          <BooksList />
          <LibrariesList libraries={librariesData} />
        </div>
      </main>
    </BooksContextProvider>
  );
}

export default App;
