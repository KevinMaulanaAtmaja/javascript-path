// OBJECT (revisited)
// cara membuat obj di JS
// 1. obj literal
// Problem: tdk efektif utk obj yg bnyk
let kevin1 = {
    // key: "value"
    nama: "Kevin1",
    energi: 10,
    lulus: false,
    makan: function (porsi) {
        this.energi = this.energi + porsi;
        return console.log(`Halo ${this.nama}, Selamat makan!`);
    },
};

let amel1 = {
    nama: "Amel1",
    energi: 10,
    lulus: false,
    makan: function (porsi) {
        this.energi = this.energi + porsi;
        return console.log(`Halo ${this.nama}, Selamat makan!`);
    },
};
// console.log(kevin1.makan(11));
console.log(kevin1);

// 2. func declaration
function Mahasiswa2(nama, energi) {
    let mahasiswa = {};
    // obj.key = value;
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    mahasiswa.makan = function (porsi) {
        this.energi += porsi;
        return console.log(`Halo ${this.nama}, Selamat makan!`);
    };
    mahasiswa.main = function (jam) {
        this.energi -= jam;
        return console.log(`Halo ${this.nama}, Selamat bermain!`);
    };
    return mahasiswa;
}
let kevin2 = Mahasiswa2("Kevin2", 20);
let amel2 = Mahasiswa2("Amel2", 30);
console.log(kevin2);

// 3. constructor func
function Mahasiswa3(nama, energi) {
    // this.property = param;
    this.nama = nama;
    this.energi = energi;
    this.makan = function (porsi) {
        this.energi += porsi;
        return console.log(`Halo ${this.nama}, Selamat makan!`);
    };
    this.main = function (jam) {
        this.energi -= jam;
        return console.log(`Halo ${this.nama}, Selamat bermain!`);
    };
}
let kevin3 = new Mahasiswa3("Kevin3", 20);
let amel3 = new Mahasiswa3("Amel3", 30);
console.log(kevin3);

// OBJECT.CREATE()
// 4. Object.create()
const methodMahasiswa = {
    makan: function (porsi) {
        this.energi += porsi;
        return console.log(`Halo ${this.nama}, Selamat makan!`);
    },
    main: function (jam) {
        this.energi -= jam;
        return console.log(`Halo ${this.nama}, Selamat bermain!`);
    },
    tidur: function (jam) {
        this.energi += jam * 2;
        return console.log(`Halo ${this.nama}, Selamat tidur!`);
    },
};

function Mahasiswa4(nama, energi) {
    // Obj.create() => utk menghubungkan ke obj lain(sperti inheritance/pewarisan)
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    return mahasiswa;
}
let kevin4 = Mahasiswa4("Kevin4", 20);
let amel4 = Mahasiswa4("Amel4", 30);
console.log(kevin4);

function Mahasiswa5(nama, energi) {
    // let mahasiswa = Object.create(methodMahasiswa);
    // let mahasiswa = {};
    // let this = Object.create(Mahasiswa.prototype);
    // obj.property = param;
    this.nama = nama;
    this.energi = energi;

    // return mahasiswa;
    // return this;
}

// PROTOTYPE
// Obj.prototype.nameProptotype = func()
Mahasiswa5.prototype.makan = function (porsi) {
    this.energi += porsi;
    return console.log(`Halo ${this.nama}, Selamat makan!`);
};
Mahasiswa5.prototype.main = function (jam) {
    this.energi -= jam;
    return console.log(`Halo ${this.nama}, Selamat bermain!`);
};
Mahasiswa5.prototype.tidur = function (jam) {
    this.energi += jam * 2;
    return console.log(`Halo ${this.nama}, Selamat tidur!`);
};

let kevin5 = new Mahasiswa5("Kevin5", 20);
let amel5 = new Mahasiswa5("Amel5", 30);
console.log(kevin5);

// versi class
class Mahasiswa6 {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        return console.log(`Halo ${this.nama}, Selamat makan!`);
    }
    main(jam) {
        this.energi -= jam;
        return console.log(`Halo ${this.nama}, Selamat bermain!`);
    }
    tidur(jam) {
        this.energi += jam * 2;
        return console.log(`Halo ${this.nama}, Selamat tidur!`);
    }
}
let kevin6 = new Mahasiswa6("Kevin6", 20);
let amel6 = new Mahasiswa6("Amel6", 30);
console.log(kevin6);

// penjelasan
// 1.Obj literal
// Kelebihan:
// mudah dan cepat utk membuat obj sederhana.
// sangat sesuai utk obj tunggal tanpa metode/state yg rumit.

// kekurangan:
// tdk mendukung pembuatan bnyk instance dg struktur yg sama.
// tdk memiliki metode prototipe secara langsung.

// 2. Func declaration
// Kelebihan:
// fleksibel dan mudah dipahami.
// dpt digunakan utk membuat bnyk instance dg struktur yg sama.

// Kekurangan:
// setiap instance memiliki salinan metode yg sama,
// yg dpt menyebabkan penggunaan memori berlebih jika bnyk instance dibuat.

// 3.Constructor Func
// Kelebihan:
// mendukung pembuatan bnyk instance dg struktur yg sama.
// metode dpt didefinisikan di prototipe, sehingga berbagi di antara smua instance, menghemat memori.

// Kekurangan:
// memerlukan penggunaan kata kunci new, yg jika dilupakan dpt menyebabkan masalah.
// tdk sejelas metode lain dlm bbrp kasus.

// 4.Obj.create()
// Kelebihan:
// sangat fleksibel dan memungkinkan pembuatan obj dg rantai prototipe yg ditentukan.
// dpt digunakan utk membuat obj dg hierarki prototipe kompleks.

// Kekurangan:
// Sedikit lebih rumit dan tidak sejelas metode lainnya.
// Kurang cocok utk pembuatan banyak instance dg metode yg sama dibandingkan dg constructor func.
