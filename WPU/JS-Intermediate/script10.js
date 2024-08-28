// CALLBACK
// Synchronous Callback
// function halo(namaku) {
//     alert(`Halo, ${namaku}`);
// }

// function tampilkanNama(callback) {
//     const namaku = prompt("Masukkan Nama: ");
//     callback(namaku);
// }
// // tampilkanNama(halo);
// tampilkanNama((namaku) => alert(`Halo, ${namaku}`));

// const mhsku1 = [
//     { nama: "Kevin", nim: "123", idDosenWali: 1 },
//     { nama: "Amel", nim: "1234", idDosenWali: 2 },
//     { nama: "Dina", nim: "12345", idDosenWali: 3 },
// ];

// console.log("Mulai");
// mhsku1.forEach((m) => { //lama loading ga usah diaktifin
//     for (let i = 0; i < 1000000; i++) {
//         let date = new Date();
//     }
//     console.log(m.nama);
// });
// console.log("Selesai");

// Asynchronous Callback
function getDataMhs(url, success, error) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(xhr.response);
            } else if (xhr.status === 404) {
                error();
            }
        }
    };
    xhr.open("get", url);
    xhr.send();
}

// function success() {}
// function error() {}
// getDataMhs("data/mahasiswa.json", success, error);

console.log("Mulai");
getDataMhs(
    "data/mahasiswa.json",
    (results) => {
        // console.log(results);
        // console.log(JSON.parse(results));
        const mhs = JSON.parse(results);
        mhs.forEach((m) => {
            console.log(m.nama);
        });
    },
    (error) => {
        console.log(error);
    }
);
console.log("Selesai");

// jquery minify v3
// JQUERY
// console.log("Mulai");
// $.ajax({
//     url: "data/mahasiswa.json",
//     success: (mhs) => {
//         // console.log(mhs);
//         mhs.forEach((m) => {
//             console.log(m.nama);
//         });
//     },
//     error: (error) => {
//         console.log(error.responseText);
//     },
// });
// console.log("Selesai");
