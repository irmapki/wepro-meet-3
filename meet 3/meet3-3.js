const token = "123456"; // Ini adalah token contoh

// Fungsi untuk mengembalikan Promise
function fetchDataWithToken(token) {
  return new Promise((resolve, reject) => {
    console.log("Memulai proses dengan token:", token);

    setTimeout(() => {
      if (token) {
        resolve(`Data berhasil diambil dengan token: ${token}`);
      } else {
        reject("Token tidak valid atau tidak tersedia");
      }
    }, 2000); // Simulasi waktu tunggu 2 detik
  });
}

// Menjalankan Promise dan menangani hasilnya
fetchDataWithToken(token)
  .then((data) => {
    console.log("Sukses:", data);
  })
  .catch((error) => {
    console.error("Gagal:", error);
  });
