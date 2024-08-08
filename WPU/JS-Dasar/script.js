// menulis js
var x = 10;
console.log("hello world!");
// consolelog('');  //error
console.log("isi var:" + x);

// popup box
// alert("popup alert");
// var isiPrompt = prompt("popup prompt:");
// console.log(isiPrompt);
// var isiConform = confirm("popup confirm?");
// console.log(isiConform);

// while
// while (kondisi) {
//     aksi
// }
// var ulang = true;
// while (ulang) {
//     console.log("tampilkan while");
//     ulang = confirm("ulang?");
// }

var nilaiAwal = 1;
while (nilaiAwal <= 5) {
    console.log("tampilkan while ke " + nilaiAwal);
    nilaiAwal++;
}

// for
for (let nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal++) {
    console.log("tampilkan for ke " + nilaiAwal);
}

// if...else if...else
var angka = prompt("masukkan angka:");
if (angka % 2 == 0) {
    alert(angka + " adalah bilangan GENAP");
} else if (angka % 2 == 1) {
    alert(angka + " adalah bilangan GANJIL");
} else {
    alert("yang anda masukkan bukan angka!");
}

// switch
var item = prompt("masukkan makanan/minuman: (cth: nasi,daging,susu,softdrink,fastfood)");
switch (item) {
    case "nasi":
    case "daging":
    case "susu":
        alert("makanan/minuman yg SEHAT!");
        break;

    case "softdrink":
    case "fastfood":
        alert("makanan/minuman yg TIDAK SEHAT!");
        break;

    default:
        alert("anda memasukkan makanan/minuman yg salah!");
        break;
}

// nested for
var s = "";
for (var i = 0; i < 5; i++) {
    for (var j = 0; j < i; j++) {
        s += "*";
    }
    s += "\n";
}
console.log(s);

// func
// membuat func
function jumlahVolumeDuaKubus(a, b) {
    var volumeA;
    var volumeB;
    var total;

    volumeA = a * a * a;
    volumeB = b * b * b;

    total = volumeA + volumeB;

    return total;
}

// menjalankan func
console.log(jumlahVolumeDuaKubus(8, 3));
// alert(jumlahVolumeDuaKubus(4, 5));

// parameter & argument
// param
function tambah(a, b) {
    return a + b;
}
// argument
console.log(tambah(5, 3));

// refactor sederhana
function jumlahVolumeDuaKubus(a, b) {
    return a * a * a + b * b * b;
}

// global/window scope
var a = 1;
function test() {
    // name conflict(var a)
    var a = 3;
    // func scope(var b)
    var b = 2;
    console.log(a);
}
test();
// console.log(b); // tdk bisa akses func scope

// rekursif
// function tes() { //jgn dinyalakan
//     return tes();
// }
// tes();

// base case
// function cetakAngka(n) {
//     // if adalah base case
//     if (n === 0) {
//         return;
//     }
//     console.log(n);
//     cetakAngka(n - 1);
// }
// cetakAngka(10);

function faktorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * faktorial(n - 1);
}
console.log(faktorial(5));

// array
// index array dimulai dari 0
var hewan = ["ayam", "bebek", "cicak", "zebra"];
console.log(hewan.length, hewan[1]);

// array multi-dimensi
function myFunc() {} // func utk multiDimensi
var arrayMulti = ["string", 3, false, myFunc, [4, 5, 6]];

// manipulasi array
// method pada array
// length - hitung panjang array
var arr = ["array1", "array2", "array3"];
console.log(arr.length);
// join - ubah string jdi lebih rapi
console.log(arr.join(" - "));

// push & pop - tmbh & hapus pada akhir array
arr.push("tambahAkhir1", "tambahAkhir2");
arr.pop();
console.log(arr);
// unshift & shift - tmbh & hapus pada awal array
arr.unshift("tambahAwal1", "tambahAwal2");
arr.shift();
console.log(arr);

// splice
// splice(indexAwal, jumlahHapus, item1, item2, item3)
var arr2 = ["array1", "array2", "array3", "array4", "array5"];
arr2.splice(2, 2, "array6", "array7");
console.log(arr2.join(" - "));

// slice
// slice(indexAwal, indexAkhir) - mengambil array dari indexAwal sampai indexAkhir
var arr3 = ["array1", "array2", "array3", "array4", "array5"];
arr3.slice(2, 3);
console.log(arr3.join(" - "));

// foreach
var angka1 = [1, 2, 3, 4, 5];
var mahasiswa = ["Kevin", "Amel", "Dina"];
mahasiswa.forEach((elemen, index) => {
    return console.log(elemen + " mahasiswa ke-" + index);
    // tdk bisa mengembalikan array
    // return console.log(elemen * 2 + " mahasiswa ke-" + index);
});

// map (bedanya map mengembalikan nilai array)
angka1.map((elemen, index) => {
    return console.log(elemen * 2 + " angka ke-" + index);
});

// sort
var angka2 = [9, 3, 14, 1, 8, 3, 11, 20];
console.log("Angka sblum di Sort:" + angka2);
console.log("Sort biasa: " + angka2.sort());
console.log(
    "Sort ASC: " +
        angka2.sort((a, b) => {
            return a - b;
        })
);
console.log(
    "Sort DESC: " +
        angka2.sort((a, b) => {
            return b - a;
        })
);

// filter - bisa mencari bnyk nilai
var angka3 = [2, 9, 3, 17, 1, 8, 3, 12, 21];

var angkaFilter = angka3.filter((elemen) => {
    return elemen > 8;
});
console.log("Angka Filter: " + angkaFilter);

// find - hanya bisa mencari 1 nilai
var angkaFind = angka3.find((elemen) => {
    return elemen > 8;
});
console.log("Angka Find: " + angkaFind);

// object
var mhs = {
    nama: "Kevin Maulana",
    umur: 31,
    lulus: false,
    ips: [3.0, 3.5, 4.0],
    alamat: {
        kota: "Bwi",
        provinsi: "Jatim",
    },
};

// membuat obj
// obj literal
var objLiteral = {
    key: "Obj Literal",
    nama: "Kevin",
    umur: 18,
    halo: function () {
        console.log("Hello!");
    },
};
objLiteral.halo();
console.log(objLiteral);

// func declaration
function objFuncDec(key, nama, umur) {
    var mhs2 = {};
    mhs2.key = key;
    mhs2.nama = nama;
    mhs2.umur = umur;
    mhs2.halo = function () {
        console.log("Hello2!");
    };
    return mhs2;
}
var mhs3 = objFuncDec("Obj Declaration", "Kevin2", 18);
mhs3.halo();
console.log(mhs3);

// constructor
function Mahasiswa(key, nama, umur) {
    this.key = key;
    this.nama = nama;
    this.umur = umur;
    this.halo = function () {
        console.log("Hello3!");
    };
}
var mhs4 = new Mahasiswa("Constructor", "Kevin3", 18);
mhs4.halo();
console.log(mhs4);

// this == window
// console.log(this);

var thisObjLiteral = { key: "value" };
thisObjLiteral.halo = function () {
    console.log("Hello Literal!");
    console.log(this);
};
thisObjLiteral.halo();
// this mengembalikan obj yg bersangkutan

//obj declaration
function thisObjDec() {
    console.log("Hello Declaration!");
    console.log(this);
}
this.thisObjDec(); // memang merah saat quokka
// this mengembalikan obj global

function thisObjConstructor() {
    console.log("Hello Constructor!");
    console.log(this);
}
var obj1 = new thisObjConstructor();
var obj2 = new thisObjConstructor();
// this mengembalikan obj yg baru dibuat
