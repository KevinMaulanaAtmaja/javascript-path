// ARROW FUNCTION
// bentuk lain yg lebih ringkas dari func expression

// func expression
let funcExp = function (nama) {
    return `Halo ${nama}`;
};
console.log(funcExp("Amel"));

// arrow func => 1 param
let arrowFunc = (nama) => {
    return `Halo ${nama}`;
};
console.log(arrowFunc("Dina"));

// lebih dari 1 param
let tampilNama1 = (nama, waktu) => {
    return `Selamat ${waktu}, ${nama}`;
};
console.log(tampilNama1("Dina", "Malam"));

// implicit return
const tampilNama2 = (nama) => `Halo ${nama}`;
console.log(tampilNama2("Dina"));

const tampilNama3 = () => `Halo guys`;
console.log(tampilNama3());

// pake map perbandingan
let mhs = ["Kevin", "Amel", "Dina"];
// func biasa
let jmlHuruf = mhs.map(function (nama) {
    return nama.length;
});
console.log(jmlHuruf);

// pake arrow func
let jmlHuruf2 = mhs.map((nama) => nama.length);
console.log(jmlHuruf2);

let jmlHuruf3 = mhs.map((nama) => ({ nama: nama, jmlHuruf3: nama.length }));
console.table(jmlHuruf3);

// THIS PADA ARROW FUNCTION
// constructor func
const Mhs = function () {
    // constructorfunc tdk bisa pake arrowfunc
    this.nama = "Kevin";
    this.umur = 18;
    this.sayHello = () => {
        // klo di method(arrowfunc) bisa dipake
        // karena arrowfunc tdk ada konsep this
        console.log(`Hello, ${this.nama}, umur ${this.umur} tahun.`);
    };
    console.log(this);
};
let kevin = new Mhs();

// obj literal
let mhs2 = {
    nama: "Kevin",
    umur: 18,
    sayHello: () => {
        //     function(){
        // console.log(this);
        //     }
        console.log(`Hello, ${this.nama}, umur ${this.umur} tahun.`);
        console.log(this); //window
    },
};

const Mhs2 = function () {
    this.nama = "Kevin";
    this.umur = 18;
    this.sayHello = function () {
        console.log(`Hello, ${this.nama}, umur ${this.umur} tahun.`);
    };
    setInterval(() => {
        //     function(){
        // console.log(this); //window
        //     }
        console.log(this.umur++);
        // console.log(this); // lexical scope
    }, 1000);
    console.log(this); // lexical scope
};
let amel = new Mhs2();

// latihan
const box = document.querySelector(".box");
box.addEventListener("click", function () {
    // console.log(this);
    // const that = this;
    let satu = "size";
    let dua = "caption";
    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }
    this.classList.toggle(satu);
    setTimeout(() => {
        // function(){
        //jika pake func declaration drpda arrow func
        //     console.log(this); //window scope
        // }
        // cara atasinya (func dec):
        // console.log(that);
        //     console.log(this); //lexical scope(arrow func)
        this.classList.toggle(dua);
    }, 600);
});

// intinya :
// - arrow func tdk memakai konsep this dan varny akan di telusuri lgi di lokal parent trdkt
// - declaration func memakai konsep this tpi bila varny  yg dicri tdk ad dlm localnya maka lngsng di telusuri di window
// - expression func memakai konsep this tpi bila var yg dicri tdk dlm local maka, ditelusuri lgi ke lokal parent trdkt
