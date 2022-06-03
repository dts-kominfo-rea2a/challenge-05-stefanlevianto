const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (listNama, cbSort) => {
  let arrBaru = [];
  if (cbSort == sortAscending) {
    arrBaru = sortAscending(names);
  } else {
    arrBaru = sortDescending(names);
  }
  let arrHasil = [];
  for (i = 0; i < arrBaru.length; i++) {
    arrHasil.push(i + 1 + ". " + arrBaru[i]);
  }
  return arrHasil;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (arrListNama) => {
  return arrListNama.sort();
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (arrListNama) => {
  return arrListNama.reverse();
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
