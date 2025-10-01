class Kendaraan {
  constructor(nama, tipe) {
    this.nama = nama;
    this.tipe = tipe;
  }

  infoKendaraan() {
    return `${this.tipe} - ${this.nama}`;
  }
}

class Mobil extends Kendaraan {
  constructor(nama, jumlahPintu) {
    super(nama, "Mobil");
    this.jumlahPintu = jumlahPintu;
  }

  infoKendaraan() {
    return `${super.infoKendaraan()}, Pintu: ${this.jumlahPintu}`;
  }
}

class Motor extends Kendaraan {
  constructor(nama, jenis) {
    super(nama, "Motor");
    this.jenis = jenis; // contoh: matic, manual, sport
  }

  infoKendaraan() {
    return `${super.infoKendaraan()}, Jenis: ${this.jenis}`;
  }
}

class Pelanggan {
  constructor(nama, nomorTelepon, kendaraanDisewa) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = kendaraanDisewa;
  }

  infoPelanggan() {
    return `Nama: ${this.nama}, Telepon: ${
      this.nomorTelepon
    }, Kendaraan: ${this.kendaraanDisewa.infoKendaraan()}`;
  }
}

class SistemTransportasi {
  constructor() {
    this.daftarPelanggan = [];
  }

  tambahPelanggan(pelanggan) {
    this.daftarPelanggan.push(pelanggan);
  }

  tampilkanDaftarPelanggan() {
    console.log("Daftar Pelanggan yang Menyewa Kendaraan:");
    this.daftarPelanggan.forEach((pelanggan, index) => {
      console.log(`${index + 1}. ${pelanggan.infoPelanggan()}`);
    });
  }
}

// Membuat kendaraan
let mobil1 = new Mobil("Toyota Avanza", 4);
let motor1 = new Motor("Honda Vario", "Matic");

// Membuat pelanggan
let p1 = new Pelanggan("Rizky", "081234567890", mobil1);
let p2 = new Pelanggan("Ramadan", "089876543210", motor1);

// Membuat sistem
let sistem = new SistemTransportasi();
sistem.tambahPelanggan(p1);
sistem.tambahPelanggan(p2);

// Menampilkan daftar
sistem.tampilkanDaftarPelanggan();
