function tambah(a, b) {
    return a + b;
}

function kali(a, b) {
    return a * b;
}

var a = parseInt(prompt("Masukkan nilai 1:"));
var b = parseInt(prompt("Masukkan nilai 2:"));
var hasil1 = tambah(a, b);
console.log(hasil1);
alert(hasil1);

var hasil2 = kali(tambah(1, 2), tambah(3, 4));
console.log(hasil2);
alert(hasil2);
