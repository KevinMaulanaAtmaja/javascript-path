// HIGHER ORDER FUNCTION(HOF)
const angka = [-1, 6, 2, 9, 3, 0, -3, 12];

// mencari angka >= 3
// for => bukan HOF
const newAngka = [];
for (let i = 0; i < angka.length; i++) {
    if (angka[i] >= 3) {
        newAngka.push(angka[i]);
    }
}
console.log(newAngka);

// FILTER, MAP & REDUCE
// filter
const newAngka2 = angka.filter((n) => n >= 3);
console.log(newAngka2);

// map
// kalikan semua angka dg 2
const newAngka3 = angka.map((n) => n * 2);
console.log(angka);
console.log(newAngka3);

// reduce
// jmlahkan seluruh elemen pda array
// 0 + -1 + 6 + 2 + 9 + 3 + 0 + -3 + 12;
// array.reduce(acc, cur, nilaiAwal)
const newAngka4 = angka.reduce((accumulator, currentVal) => accumulator + currentVal, 2);
console.log(newAngka4);

// method chaining
// cari angka > 5
// kalikan 2
// jumlahkan semua nilainya
// const hasil = angka
//     .filter((n) => n > 5) //6,9,12
//     .map((n) => n * 2) //12,18,24
//     .reduce((acc, cur) => acc + cur, 0); //54
// console.log(hasil);

// LATIHAN FILTER, MAP & REDUCE
// ambil elemen vid
const videos = Array.from(document.querySelectorAll("[data-duration]"));
// console.log(videos);
// pilih hanya yg 'JS Lanjutan'
let jsLanjut = videos
    .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))
    // console.log(jsLanjut);
    // ambil durasi masing2 vid
    .map((item) => item.dataset.duration)
    // ubah durasi jdi float,ubah menit jdi detik
    .map((waktu) => {
        // 10:30 -> [10,30]
        const parts = waktu.split(":").map((part) => parseFloat(part));
        return parts[0] * 60 * parts[1];
    })
    // jmlahkan semua detik
    .reduce((total, detik) => total + detik);
// ubah format jdi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;
// simpan di DOM
const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;
const jmlhVid = videos.filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN")).length;
const pJmlhVid = document.querySelector(".jumlah-video");
pJmlhVid.textContent = `${jmlhVid} Video.`;
// console.log(jsLanjut);
