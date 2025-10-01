import { index, store, destroy } from './controller.js';

const listEl = document.getElementById("list");
const btnLihat = document.getElementById("lihat");
const btnTambah = document.getElementById("tambah");
const btnHapus = document.getElementById("hapus");
const inputHapus = document.getElementById("hapusNama");

function renderList() {
    listEl.innerHTML = "";
    index().forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        listEl.appendChild(li);
    });
}

btnLihat.addEventListener("click", renderList);

btnTambah.addEventListener("click", () => {
    store();
    alert("2 data baru berhasil ditambahkan!");
    renderList();
});

btnHapus.addEventListener("click", () => {
    const nama = inputHapus.value.trim();
    if (destroy(nama)) {
        alert(`Data ${nama} berhasil dihapus!`);
        renderList();
    } else {
        alert(`Data ${nama} tidak ditemukan!`);
    }
});
