function Book({ book, handleReserveButton }) {
  const reserveBookButton = (
    <li>
      <button
        className="btn btn-warning"
        style={{ width: "100%" }}
        onClick={() => handleReserveButton(book.bookId)}
      >
        Reserve
      </button>
    </li>
  );

  return (
    <article
      className="border rounded d-flex flex-column"
      style={{ width: "48%" }}
    >
      <img
        src={book.image}
        alt={book.title}
        className="object-fit-cover"
        style={{ maxHeight: "150px" }}
      />
      <section className="p-3 d-flex flex-column justify-content-between">
        <div className="mb-3">
          <h2 className="fs-5 mb-0">{book.title}</h2>
          <span className="badge text-bg-dark my-2">{book.genre}</span>
          <p className="text-secondary">{book.synopsis}</p>
        </div>
        <aside>
          <ul className="list-unstyled d-flex flex-column m-0 gap-3">
            <li className="text-center">
              Book is currently
              <span
                className={book.borrowed ? "text-secondary" : "text-success"}
              >
                {book.borrowed ? " unavailable" : " available"}.
              </span>
            </li>
            {!book.borrowed && reserveBookButton}
          </ul>
        </aside>
      </section>
    </article>
  );
}

export default Book;
