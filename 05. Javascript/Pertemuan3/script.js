// Array produk
let produkToko = [
  { id: 1, nama: "Headset", harga: 350000, stok: 15 },
  { id: 2, nama: "Mouse", harga: 300000, stok: 10 },
  { id: 3, nama: "Keyboard", harga: 400000, stok: 12 },
];

// Fungsi menambahkan produk
function tambahProduk(nama, harga, stok) {
  let idBaru;

  if (produkToko.length > 0) {
    idBaru = produkToko[produkToko.length - 1].id + 1;
  } else {
    idBaru = 1;
  }

  let produkBaru = { id: idBaru, nama: nama, harga: harga, stok: stok };
  produkToko.push(produkBaru);
  console.log(`Produk "${nama}" berhasil ditambahkan!`);
}

// Fungsi menghapus produk berdasarkan id
function hapusProduk(id) {
  let index = produkToko.findIndex((produk) => produk.id === id);
  if (index !== -1) {
    console.log(`Produk "${produkToko[index].nama}" berhasil dihapus!`);
    produkToko.splice(index, 1);
  } else {
    console.log(`Produk dengan ID ${id} tidak ditemukan.`);
  }
}

// Fungsi menampilkan daftar produk
function tampilkanProduk() {
  console.log("----------- Daftar Produk Toko -----------");
  if (produkToko.length === 0) {
    console.log("Tidak ada produk yang tersedia.");
  } else {
    for (let i = 0; i < produkToko.length; i++) {
      let produk = produkToko[i];
      console.log(
        `ID: ${produk.id}, Nama: ${produk.nama}, Harga: Rp${produk.harga}, Stok: ${produk.stok}`
      );
    }
  }
}

tampilkanProduk();
