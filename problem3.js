function undianLotre(jumlah) {
    console.log("undian lotre dimulai...");
    console.log("sedang mengundi nomor anda…");
  
    const nomorPengguna = Math.floor(Math.random() * 1000) + 1; // Membuat nomor acak dari 1 - 1000
    const nomorAcak = Math.floor(Math.random() * 1000) + 1; // Membuat nomor acak dari 1 - 1000
  
    setTimeout(() => {
      console.log("undian lotre telah berakhir...");
  
      if (nomorPengguna === nomorAcak) {
        console.log("selamat anda mendapatkan hadiah utama berupa mobil");
      } else {
        console.log("maaf anda kurang beruntung");
      }
    }, 10000); // Waktu tunggu 10 detik
  
  }
  
  const jumlah = 1; // Jumlah pengguna, bisa diganti sesuai kebutuhan
  
  // Memulai undian lotre
  undianLotre(jumlah);