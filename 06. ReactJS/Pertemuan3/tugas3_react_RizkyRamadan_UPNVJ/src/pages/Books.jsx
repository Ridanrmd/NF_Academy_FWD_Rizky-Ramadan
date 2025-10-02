import { useState } from "react";
import booksData from "../Utils/books";

function Books() {
  // simpan data buku ke state agar bisa ditambah/diedit
  const [books, setBooks] = useState(booksData);

  // fungsi tambah buku baru
  const addBook = () => {
    const newBook = {
      id: books.length + 1,
      title: "Buku Baru",
      author: "Penulis Baru",
      year: 2025,
      description: "Ini adalah buku yang baru ditambahkan.",
      image: "https://picsum.photos/400/225?random=" + (books.length + 10),
    };

    setBooks([...books, newBook]);
  };

  return (
    <>
      {/* Album / Cards */}
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <h1 className="mb-4 font-weight-bold fs-1">List Buku</h1>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {books.map((book) => (
              <div className="col" key={book.id}>
                <div className="card shadow-sm">
                  <img
                    src={book.image}
                    className="bd-placeholder-img card-img-top"
                    alt={book.title}
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold fs-4">{book.title}</h5>
                    <p className="card-text">{book.description}</p>
                    <p className="text-muted">
                      {book.author} • {book.year}
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-4">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Buy
                        </button>
                      </div>
                      <small className="text-body-secondary">
                        ID: {book.id}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product List Section */}
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Best Selling Book</h1>
            <p className="lead text-body-secondary">
              Pilihan buku terbaik untuk belajar pemrograman modern.
            </p>
            {/* tombol untuk menambahkan buku */}
            <button onClick={addBook} className="btn btn-success mt-3">
              + Tambah Buku
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Books;
