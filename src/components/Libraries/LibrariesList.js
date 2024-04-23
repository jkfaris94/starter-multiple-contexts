import Library from "./Library";

function LibrariesList({ libraries }) {
  const listItems = libraries.map((library) => (
    <Library key={library.id} library={library} />
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
