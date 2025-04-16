import { useContext } from "react";
import Library from "./Library";
import { LibrariesContext } from "../../contexts/LibrariesContext";


function LibrariesList() {
  const { libraries, setLibraries } = useContext(LibrariesContext)

  const handleFavoriteLibrary = (libraryId) => {
    const selected = libraries.find((library) => library.id === libraryId);
    const index = libraries.indexOf(selected);
    setLibraries([
      ...libraries.slice(0, index),
      { ...selected, favorite: !selected.favorite },
      ...libraries.slice(index + 1),
    ]);
  };

  const listItems = libraries.map((library) => (
    <Library
    key={library.id}
    library={library}
    handleFavoriteLibrary={handleFavoriteLibrary}
    />
  ));

  return (
    <aside className="col-3 px-3">
      <h3>Library Network</h3>
      <p>The following libraries are within our network.</p>
      <ul className="list-group list-group-flush">{listItems}</ul>
    </aside>
  );
}

export default LibrariesList;
