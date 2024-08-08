var penumpang = ["Kevin", undefined, "Dina"];
var tambahPenumpang = function (namaPenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.length == 0) {
        // tmbh penumpang di awal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari func
        return penumpang;
    } else {
        // telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            // jika kursi kosong
            if (penumpang[i] == undefined) {
                // tmbh penumpang di kursi trsbt
                penumpang[i] = namaPenumpang;
                // kembalikan isi array & keluar dari func
                return penumpang;
            }
            // jika sudah ada nama yg sama
            else if (penumpang[i] == namaPenumpang) {
                // tampilkan pesan kesalahannya
                console.log(namaPenumpang + " sudah ada di dlm angkot");
                // kembalikan isi array & keluar dari func
                return penumpang;
            }
            // jika seluruh kursi terisi
            else if (i == penumpang.length - 1) {
                // tmbh penumpang di akhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array & keluar dari func
                return penumpang;
            }
        }
    }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.length == 0) {
        // tampilkan pesan bahwa angkot kosong, dan
        // tdk mungkin ada penumpang turun
        console.log("Angkot masih kosong!");
        // kembalikan isi array & keluar dari func
        return penumpang;
    } else {
        // telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            // jika nama penumpang sesuai
            if (penumpang[i] == namaPenumpang) {
                // hapus penumpang dg ubah namanya,
                // menjadi undefined
                penumpang[i] = undefined;
                // kembalikan isi array & keluar dari func
                return penumpang;
            }
            // jika tdk ada nama yg sesuai
            else if (i != namaPenumpang.length - 1) {
                // tampilkan pesan kesalahannya
                console.log("Tidak ada penumpang dg nama " + namaPenumpang);
                // kembalikan isi array & keluar dari func
                return penumpang;
            }
        }
    }
};

// ketik di log
// penumpang
// tambahPenumpang("Amel", penumpang);
// hapusPenumpang("Kevin", penumpang);
