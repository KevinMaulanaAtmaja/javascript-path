// FOR...OF (iterable)
const mhs = ["Kevin", "Amel", "Dina"];

// pake for
for (let i = 0; i < mhs.length; i++) {
    console.log(mhs[i]);
}
// pake forEach
mhs.forEach((m) => console.log(m));
// pake for...of
for (const m of mhs) {
    console.log(m);
}

// string
const nama = "Kevin";
for (const n of nama) {
    console.log(n);
}

// iterasi di for...of
const mhs2 = ["Kevin", "Amel", "Dina"];
// array.entries() utk for of supaya punya iterable param
for (const m of mhs2.entries()) {
    console.log(m);
}

mhs2.forEach((m, i) => {
    console.log(`${m} mhs ke-${i + 1}`);
});
for (const [i, m] of mhs2.entries()) {
    console.log(`${m} mhs ke-${i + 1}`);
}

// nodelist
// const liNama = document.querySelectorAll(".nama");
// liNama.forEach((n) => console.log(n.textContent));
// for (const n of liNama) {
//     console.log(n.innerHTML);
// }

// arguments
function jumlahkanAngka() {
    // foreach,reduce & method arr lain tdk bisa dipakai karena arg bukan array
    // console.log(arguments);
    let jumlah = 0;
    for (const a of arguments) {
        jumlah += a;
    }
    return jumlah;
}
console.log(jumlahkanAngka(1, 2, 3, 4, 5));

function printArgs() {
    for (const arg of arguments) {
        console.log(arg);
    }
}

printArgs(1, 2, 3);

// FOR...IN (enumerable)
const mhs3 = {
    nama: "Kevin",
    umur: 18,
    email: "kevin@gmail.com",
};

for (const m in mhs3) {
    console.log(m); // utk property
    console.log(mhs3[m]); // utk value
}
