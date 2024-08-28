// SPREAD OPERATOR
// memecah iterables jdi single element

const mhs = ["Kevin", "Amel", "Dina"];
console.log(mhs);
console.log(...mhs);
console.log(...mhs[0]);

// menggabungkan 2/lebih array
const mhs2 = ["Kevin", "Amel", "Dina"];
const dosen = ["Dosen1", "Dosen2", "Dosen3"];
const orang = [...mhs2, "Lidia", ...dosen];
// const orang2 = mhs2.concat(dosen);
// console.log(orang2);
console.log(orang);

// meng-copy array
// arr copy tdk akan bisa mengubah arr asli
const mhs3 = ["Kevin", "Amel", "Dina"];
// const mhsCopy = mhs3;
const mhsCopy = [...mhs3];
mhsCopy[0] = "Lidia";
console.log(mhs3);
console.log(mhsCopy);

// nodelist
const liNama = document.querySelectorAll(".nama");
const nama = [];
for (let i = 0; i < liNama.length; i++) {
    nama.push(liNama[i].innerText);
}
console.log(nama);

const nama2 = [...liNama].map((n) => n.textContent);
console.log(nama2);

// latihan
const namaMhs = document.querySelector(".namaMhs");
const huruf = [...namaMhs.textContent].map((n) => `<span>${n}</span>`).join("");
// console.log(huruf);
namaMhs.innerHTML = huruf;

// REST PARAMETER
function restParam(...myArgs) {
    // return arguments;
    // ubah dari args jdi array
    // return Array.from(arguments);
    // return [...arguments];
    return myArgs;
}
console.log(restParam(1, 2, 3, 4, 5));

function jumlahkan(...angka) {
    // let total = 0;
    // for (const a of angka) {
    //     total += a;
    // }
    // return total;

    return angka.reduce((a, b) => a + b);
}
console.log(jumlahkan(1, 2, 3, 4, 5));

// array destructuring
const kelompok1 = ["Kevin", "Amel", "Dina", "Lidia"];
const [ketua, wakil, ...anggota] = kelompok1;
console.log(...anggota);

// obj destructuring
const team = {
    pm: "Kevin",
    designer: "Amel",
    developer: "Dina",
    tester: "Lidia",
};

const { pm, ...myTeam } = team;
console.log(myTeam);

// filtering
function filterBy(type, ...values) {
    return values.filter((v) => typeof v === type);
}

// console.log(filterBy("boolean", 1, 2, "Kevin", false, 10, true, "Amel"));
console.log(filterBy("number", 1, 2, "Kevin", false, 10, true, "Amel"));
