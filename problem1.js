function beliCamilan(nama, harga, sisaUang, waktu, callback) {
    setTimeout(() => {
      if (sisaUang >= harga) {
        console.log(`Kamu jajan ${nama} dengan harga Rp. ${harga}`);
        sisaUang -= harga;
        console.log(`Sisa uang kamu sebesar Rp. ${sisaUang}`);
        callback(null, sisaUang);
      } else {
        callback(`Maaf uang kamu belum cukup untuk membeli ${nama}`, sisaUang);
      }
    }, waktu * 1000);
  }
  
  const uangSekarang = 20000;
  
  beliCamilan('Boba', 5000, uangSekarang, 5, (error, sisaUang) => {
    if (error) {
      console.log(error);
    } else {
      beliCamilan('Seblak', 8000, sisaUang, 9, (error, sisaUang) => {
        if (error) {
          console.log(error);
        } else {
        }
      });
    }
  });
