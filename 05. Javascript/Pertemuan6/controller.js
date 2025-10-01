import users from "./data.js";

export function index() {
  return users.map(
    (u, i) => `${i + 1}. ${u.nama}, ${u.umur} th, ${u.alamat}, ${u.email}`
  );
}

export function store() {
  users.push(
    { nama: "Ridan", umur: 22, alamat: "Jakarta", email: "ridan@gmail.com" },
    { nama: "Iki", umur: 17, alamat: "Karawang", email: "iki@gmail.com" }
  );
  return users;
}

export function destroy(nama) {
  const index = users.findIndex(
    (u) => u.nama.toLowerCase() === nama.toLowerCase()
  );
  if (index !== -1) {
    users.splice(index, 1);
    return true;
  }
  return false;
}
