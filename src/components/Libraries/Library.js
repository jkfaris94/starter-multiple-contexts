function Library({ library, handleFavoriteLibrary }) {
  const favoriteButton = (
    <button type="button" className="btn p-0" onClick={() => handleFavoriteLibrary(library.id)}>
      <small>{library.favorite ? "♥︎" : "♡"}</small>
    </button>
  );

  return (
    <li className="list-group-item">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{library.name}</h5>
        <small>{favoriteButton}</small>
      </div>
      <small>{library.addressString}</small>
    </li>
  );
}

export default Library;
