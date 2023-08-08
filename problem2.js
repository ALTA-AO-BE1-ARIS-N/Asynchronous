// Fungsi simulasi pembelian pakaian
function beliPakaian(nama, harga, waktu) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ nama, harga });
      }, waktu * 1000);
    });
  }
  
  // Daftar pakaian yang ingin dibeli
  const daftarPakaian = [
    { nama: 'baju', harga: 15000, waktu: 3 },
    { nama: 'celana', harga: 25000, waktu: 7 },
    { nama: 'topi', harga: 22000, waktu: 2 },
    { nama: 'sepatu', harga: 46000, waktu: 10 },
  ];
  
  async function beliSemuaPakaian() {
    let sisaUang = 150000;
  
    for (const pakaian of daftarPakaian) {
      console.log(`saya membawa uang sebesar Rp. ${sisaUang}`);
      console.log(`saya ingin membeli ${pakaian.nama}`);
      console.log(`dengan harga Rp. ${pakaian.harga}`);
      console.log(`dan waktu yang dibutuhkan adalah ${pakaian.waktu} detik`);
  
      try {
        const hasilPembelian = await beliPakaian(pakaian.nama, pakaian.harga, pakaian.waktu);
        sisaUang -= hasilPembelian.harga;
        console.log(`saya membawa uang sebesar Rp. ${sisaUang}`);
      } catch (error) {
        console.log(error);
      }
  
      console.log('\n');
    }
  
    console.log(`sisa kembaliannya adalah Rp. ${sisaUang}`);
  }
  
  // Memulai pembelian pakaian
  beliSemuaPakaian();