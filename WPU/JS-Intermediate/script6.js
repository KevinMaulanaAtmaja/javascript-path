// TEMPLATE LITERAL
// atau Tamplate string
const namaku = `Kevin`;
const umurku = 18;
console.log("Halo " + namaku + ", berumur " + umurku + " tahun."); // ribet
console.log(`Halo ${namaku}, berumur ${umurku} tahun.`); // simple

// embeded expression
console.log(`${1 + 1}`);
// console.log(`${alert("muncul alert!")}`);
const x = 10;
console.log(`${x % 2 == 0 ? "Genap" : "Ganjil"}`);

const mhs10 = {
    nama: "Kevin",
    umur: 18,
    lulus: false,
};

const el = `<div class="mhs">
    <h2>${mhs10.nama}</h2>
    <h3>${mhs10.umur}</h3>
    <span>${mhs10.lulus}</span>
</div>`;
console.log(el);

// LATIHAN TEMPLATE LITERAL
// 1.html fragments
const mhs2 = {
    nama: "Kevin",
    umur: 18,
    lulus: false,
    nrp: 123456789,
};

const el2 = `<div class="mhs">
    <h2>Nama: ${mhs2.nama}</h2>
    <h3>Umur: ${mhs2.umur}</h3>
    <h4>Lulus: ${mhs2.lulus}</h4>
    <span>NRP: ${mhs2.nrp}</span>
</div>`;
console.log(el2);
// document.body.innerHTML = el2;

// 2.looping
const mhs3 = [
    { nama3: "Kevin", email: "kevin@gmail.com" },
    { nama3: "Amel", email: "amel@gmail.com" },
    { nama3: "Dina", email: "dina@gmail.com" },
];

const el3 = `<div class="mhs">
${mhs3
    .map(
        (m) => `<ul>
    <li>${m.nama3}</li>
    <li>${m.email}</li>
    </ul>`
    )
    .join("")}
</div>`;
console.log(el3);
// document.body.innerHTML = el3;

// 3.conditionals
const lagu = {
    judul: "Nina",
    vokalis: "Baskara Putra",
    feat: "Yudhis of Rachun",
};

const el4 = `<div class="lagu">
    <ul>
        <li>${lagu.judul}</li>
        <li>${lagu.vokalis} ${lagu.feat ? `${lagu.feat}` : ""}</li>
    </ul>
</div>`;
console.log(el4);
// document.body.innerHTML = el4;

// 4.nested (html fragments bersarang)
const mhs4 = {
    nama: "Kevin",
    semester: 1,
    mataKuliah: ["Pemprograman Web", "Pemrograman Mobile", "Pemrograman Desktop", "Praktek Coding Cross-Platform"],
};

function cetakMatKul(mataKuliah) {
    return `<ol>
        ${mataKuliah.map((mk) => `<li>${mk}</li>`).join("")}
    </ol>`;
}

const el5 = `<div class="mhs">
    <h2>Nama: ${mhs4.nama}</h2>
    <span>Semester: ${mhs4.semester}</span>
    <h3>Mata Kuliah: ${cetakMatKul(mhs4.mataKuliah)}</h3>
</div>`;
// document.body.innerHTML = el5;
console.log(el5);

// TAGGED TEMPLATE LITERALS
// escapping html tags
// translation & internationalization
// styled components
const nama2 = "Amel";
const umur2 = 5;

// strings => string biasa
// ...args => expression
function coba(strings, ...args) {
    // console.log(strings, ...args);
    // let result = "";
    // strings.forEach((str, i) => {
    //     result += `${str}${args[i] || ""}`;
    // });
    // return result;

    return strings.reduce((result, str, i) => `${result}${str}${args[i] || ""}`, "");
}

const el6 = coba`Halo, nama saya ${nama2}, saya berumur ${umur2} tahun.`;
// document.body.innerHTML = el6;
console.log(el6);

// highlight
const nama3 = "Dina";
const umur3 = 16;
const email = "dina@gmail";

function highlight(strings, ...args) {
    // console.log(...args);
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${args[i] || ""}</span>`, "");
}

const el7 = highlight`Halo, nama saya ${nama3}, saya berumur ${umur3} tahun. Email saya ${email}`;
console.log(el7);
// document.body.innerHTML = el7;
