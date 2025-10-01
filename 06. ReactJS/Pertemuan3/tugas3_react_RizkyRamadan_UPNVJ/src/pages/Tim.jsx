function Team() {
  const teamMembers = [
    {
      name: "Rizky Ramadan",
      role: "Founder & CEO",
      img: "https://picsum.photos/300/300?random=1",
      desc: "Visioner yang membangun bookstore ini dari nol.",
    },
    {
      name: "Ridan",
      role: "Marketing Manager",
      img: "https://picsum.photos/300/300?random=2",
      desc: "Mengatur strategi pemasaran dan branding.",
    },
    {
      name: "Kiki",
      role: "Lead Developer",
      img: "https://picsum.photos/300/300?random=3",
      desc: "Membangun sistem dan memastikan aplikasi berjalan mulus.",
    },
    {
      name: "Remora",
      role: "UI/UX Designer",
      img: "https://picsum.photos/300/300?random=4",
      desc: "Mendesain pengalaman pengguna yang sederhana dan elegan.",
    },
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Meet Our Team</h1>
        <p className="text-muted">Orang-orang hebat di balik bookstore</p>
      </div>

      <div className="row g-4">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="col-12 col-sm-6 col-md-3">
            <div className="card h-100 shadow border-0">
              <img
                src={member.img}
                alt={member.name}
                className="card-img-top rounded-top"
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{member.name}</h5>
                <p className="text-primary mb-1">{member.role}</p>
                <p className="text-muted small">{member.desc}</p>
              </div>
              <div className="card-footer text-center bg-white">
                <a href="#" className="text-secondary mx-2">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-secondary mx-2">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-secondary mx-2">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
