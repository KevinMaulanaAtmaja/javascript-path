// VAR, LET & CONST
// var -> hoisting == bendera
// console.log(numberVar);  //undefined
var numberVar = 10;
console.log(numberVar);

// console.log(numberLet); // error
let numberLet = 11;
console.log(numberLet);

// console.log(numberConst); // error
let numberConst = 12;
console.log(numberConst);

// block scope(java,c) vs func scope(js)
for (var i = 0; i < 6; i++) {
    console.log(i);
}
// console.log("Luar Func scope: " + i);

// IIFE(Immediately Invoked Function Expression)
// & SIAF(Self-Invoking Anonymous Function)
(function () {
    for (var numberVar2 = 0; numberVar2 < 6; numberVar2++) {
        console.log(numberVar2);
    }
})();
// console.log(numberVar2); //error

// ES6 => let - const

// let dan const(menganut block scope) sudah otomatis menerapkan IIFE
for (let numberLet2 = 0; numberLet2 < 6; numberLet2++) {
    console.log(numberLet2);
}
// console.log(numberLet2); //error

// pake const utk meminimalisir perubahan state
const numberConst2 = 14;
// numberConst2 = 15; //error
console.log(numberConst2);

// bisa dirubah tpi tdk bisa langsung seluruh isi elementnya
const mhs = {
    nama: "Kevin",
    umur: 18,
};
mhs.umur = 19;
// mhs = {
//     jurusan: "TRPL",
// }; // error
console.log(mhs);

const numberConst3 = [1, 2, 3, 4];
// numberConst3 = [1, 2, 3, 4, 5]; // error
numberConst3.push(5);
console.log(numberConst3);
