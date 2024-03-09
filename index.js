// Fungsi untuk menambahkan dua angka
function tambah(angka1, angka2) {
    return angka1 + angka2;
}

// Fungsi untuk mengurangkan dua angka
function kurang(angka1, angka2) {
    return angka1 - angka2;
}

// Fungsi untuk mengalikan dua angka
function kali(angka1, angka2) {
    return angka1 * angka2;
}

// Fungsi untuk membagi dua angka
function bagi(angka1, angka2) {
    if (angka2 !== 0) {
        return angka1 / angka2;
    } else {
        return "Tidak dapat dibagi oleh nol";
    }
}

// Meminta pengguna untuk memasukkan dua angka
var angka1 = parseFloat(prompt("Masukkan angka pertama:"));
var angka2 = parseFloat(prompt("Masukkan angka kedua:"));

// Memeriksa apakah kedua angka valid
if (!isNaN(angka1) && !isNaN(angka2)) {
    // Menampilkan hasil perhitungan menggunakan fungsi-fungsi
    console.log("Hasil Penjumlahan: " + tambah(angka1, angka2));
    console.log("Hasil Pengurangan: " + kurang(angka1, angka2));
    console.log("Hasil Perkalian: " + kali(angka1, angka2));
    console.log("Hasil Pembagian: " + bagi(angka1, angka2));
} else {
    // Menampilkan pesan jika salah satu atau kedua angka tidak valid
    console.log("Masukkan angka yang valid untuk melakukan perhitungan.");
}
