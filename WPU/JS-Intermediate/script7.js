// DESTRUCTURING ASSIGMENT
const perkenalan = ["Halo", "nama", "saya", "Kevin"];

const [salam, satu1, dua1, namake1] = perkenalan;
console.log(salam);
// skipping item
const [salam2, , , namake2] = perkenalan;
console.log(namake2);

// swap
let varA = 1;
let varB = 2;
console.log(varA);
console.log(varB);
[varA, varB] = [varB, varA];
console.log(varA);
console.log(varB);

// return value pada func
function coba() {
    return [3, 4];
}
const [c, d] = coba();
console.log(c);

// rest parameter
// 1.array rest param
const [awal, ...values] = [1, 2, 3, 4];
console.log(awal);
console.log(values);

// 2.obj rest param
const test = {
    id: 123,
    nama: "Test",
    umur: 19,
    email: "test@gmail.com",
};

function getIdTest({ id }) {
    return id;
}
function getIdEmailTest({ id, email }) {
    return { id, email };
}
console.log(getIdTest(test)); //namaFunc(obj)
console.log(getIdEmailTest(test));

// destructuring obj
const mhs1 = {
    nama3: "Kevin3",
    umur3: 18,
};
// tdk bisa asal kasih nama
const { abc, def } = mhs1; // error
const { namaku3, umurku3 } = mhs1;
console.log(namaku3);

// argument tanpa deklarasi obj
const { nama4, umur4 } = { nama4: "Kevin4", umur4: 19 };
console.log(nama4);

// assign ke var baru/nama alias
const mhsku2 = {
    nama5: "Amel",
    umur5: 5,
};
const { nama5: n, umur5: u } = mhsku2;
console.log(n);
console.log(u);

// memberi default value
const mhsku3 = {
    nama6: "Dina",
    umur6: 16,
    // email: "dina@gmail.com",
};
let { nama6, umur6, emailku1 = "email@default.com" } = mhsku3;
console.log(emailku1);

// DESTRUCTURING FUNCTION
// array func destructuring
function kalkulasi(a, b) {
    return [a + b, a - b, a * b, a / b];
}

// tanpa destructuring
// const jumlah = kalkulasi(2, 3)[0];
// const kurangi = kalkulasi(2, 3)[1];
// console.log([jumlah, kurangi]);

// dg destructuring
const [tambah, kurang, kali, bagi] = kalkulasi(2, 3);
// console.log(tambah);
console.log(kali);

// obj func destructuring
function kalkulasi2(a, b) {
    return {
        tambah2: a + b,
        kurang2: a - b,
        kali2: a * b,
        bagi2: a / b,
    };
}
const { tambah2, kurang2, kali2, bagi2 } = kalkulasi2(4, 5);
console.log(kurang2);
console.log(bagi2);

// destructuring args
const mhsku4 = {
    nama7: "Amel",
    umur7: 5,
    email2: "amel@gmail.com",
    nilai: {
        tugas: 90,
        uts: 87,
        uas: 85,
    },
};

// tanpa destructuring
function cetakMhs(mhs) {
    return `Halo ${mhs.nama7}, Umur ${mhs.umur7}`;
}
console.log(cetakMhs(mhsku4)); //namaFunc(obj)

// dg destructuring
function cetakMhs2({ nama7, umur7, nilai: { uts } }) {
    return `Halo ${nama7}, Umur ${umur7}, Nilai UTS: ${uts}`;
}
console.log(cetakMhs2(mhsku4));
