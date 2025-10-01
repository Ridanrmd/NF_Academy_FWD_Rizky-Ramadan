function Contact() {
  return (
    <div className="container py-5">
      <div className="row mb-5">
        <div className="col text-center">
          <h1 className="fw-bold">Contact Us</h1>
          <p className="text-muted">
            Kami senang mendengar dari Anda! Silakan hubungi kami melalui
            informasi berikut.
          </p>
        </div>
      </div>

      <div className="row g-5 justify-content-center">
        {/* Info Kontak */}
        <div className="col-md-6">
          <div className="card shadow border-0 p-4">
            <h4 className="mb-4 text-center">Informasi Kontak</h4>
            <ul className="list-unstyled">
              <li className="mb-3">
                <i className="fa-solid fa-location-dot text-primary me-2"></i>
                Jl. Mawar No. 123, Jakarta
              </li>
              <li className="mb-3">
                <i className="fa-solid fa-envelope text-primary me-2"></i>
                info@bookstore.com
              </li>
              <li className="mb-3">
                <i className="fa-solid fa-phone text-primary me-2"></i>
                +62 812-3456-7890
              </li>
            </ul>
            <div className="mt-4 text-center">
              <a href="#" className="text-secondary fs-4 me-3">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-secondary fs-4 me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-secondary fs-4 me-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-secondary fs-4">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
