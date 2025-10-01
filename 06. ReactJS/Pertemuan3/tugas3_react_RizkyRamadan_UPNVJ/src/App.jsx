import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Tim";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="container">
      {/* Header */}
      <header className="d-flex flex-wrap align-items-center justify-content-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <Link
            to="/"
            className="d-inline-flex align-items-center text-decoration-none"
          >
            <i
              className="fa-solid fa-book fa-2xl"
              style={{ color: "#74C0FC" }}
            ></i>
            <span className="ms-2 fs-4">bookstore</span>
          </Link>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/" className="nav-link px-2">
              Home
            </Link>
          </li>
          <li>
            <a href="#" className="nav-link px-2">
              Book
            </a>
          </li>
          <li>
            <Link to="/team" className="nav-link px-2">
              Team
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link px-2">
              Contact
            </Link>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-outline-primary me-2">
            Login
          </button>
          <button type="button" className="btn btn-primary">
            Register
          </button>
        </div>
      </header>

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <footer className="py-3 my-4 border-top">
        <ul className="nav justify-content-center pb-3 mb-3">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2 text-body-secondary">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Book
            </a>
          </li>
          <li className="nav-item">
            <Link to="/team" className="nav-link px-2 text-body-secondary">
              Team
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link px-2 text-body-secondary">
              Contact
            </Link>
          </li>
        </ul>
        <p className="text-center text-body-secondary">
          © 2025 Rizky Ramadan UPNVJ
        </p>
      </footer>
    </div>
  );
}

export default App;
