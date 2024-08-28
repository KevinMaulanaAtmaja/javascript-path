//EXECUTION CONTEXT, HOISTING & SCOPE
// 1.Hoisting example:
console.log(namaVar); //undefined
var namaVar = "Kevin";

console.log(namaFunc()); //return valuenya
function namaFunc() {
    return "test";
}

// 2.Execution Context
// a.(Global)creation phase pada Global Context
// namaVar = undefined;
// var adlh undefined.
// namaFunction = fn()=>(return value) dari func trsbt.
// hoisting == mengerek bendera

// window = global object
// this = window
// console.log(window, this);

// b.(Global)execution phase
// JS mulai mengeksekusi kode baris demi baris.
// var diinisialisasi dg nilai yg diberikan
// dan func dpt dipanggil dan dieksekusi.

// visualisasi exe phase=> https://pythontutor.com/javascript.html#mode=edit

// a.(Func)creation phase pada Local Context
// membuat activation object(OB)
// hoisting deklarasi func & var
// mengatur scope chain=> urutan nyari var/nilai
// menentukan nilai this

console.log(funcName()); //undefined utk var return value func dieksekusi
var nama = "Kevin";
var umur = 18;

function funcName() {
    return `Halo, nama saya ${nama},saya ${umur} tahun`;
}

// b.(Func)execution phase
// eksekusi kode baris demi baris
// scope chain=> urutan nyari var(nilai)
// yg di dlmnya terdapat creation dan execution phase
// window = this
// arguments = arguments[0: value,1: value]
// hoisting == mengerek bendera

// 3.(Scope) urutan nyari var(nilai) di dlm func
// variable local func -> param -> global var

var username = "@kevin";
function cetakURL(username) {
    // console.log(arguments);
    var igUrl = "https://instagram.com/";
    return igUrl + username;
}
console.log(cetakURL(username));
console.log(cetakURL("amel"));

// latihan
function a() {
    console.log("ini a");
    function b() {
        console.log("ini b");
        function c() {
            console.log("ini c");
        }
        c();
    }
    b();
}
a();

function satu() {
    var nama = "Dina";
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = "Amel";

satu();
dua("Kevin");
console.log(nama);

// CLOSURE
// utk membuat private method
// var func inner -> param func inner -> var func outer(lexical scope) -> var global
// let nama = "Amel"; //global func
function init() {
    // outer func
    // let nama = "Kevin"; //local var
    return function cetakNama(nama) {
        // inner func(closure)
        console.log(nama);
    };
    // console.dir(cetakNama);
    // return cetakNama;
}
init();

let panggilNama = init();
panggilNama("Maulana");

// latihan
function ucapkanSalam(waktu) {
    return function (nama) {
        console.log(`Halo ${nama}, Selamat ${waktu}`);
    };
}

let selamatPagi = ucapkanSalam("Pagi");
let selamatSiang = ucapkanSalam("Siang");
let selamatMalam = ucapkanSalam("Malam");

// console.dir(selamatMalam);
selamatPagi("Kevin");
selamatMalam("Amel");

let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    };
})();

// counter = 100;// tdk ganggu counter dlm inner

console.log(add());
console.log(add());
console.log(add());
