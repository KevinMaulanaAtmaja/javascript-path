// pake jquery
// $.ajax({
//     url: "https://my-json-server.typicode.cm/KevinMaulanaAtmaja/fakeapi/todos",
//     success: (todos) => console.log(todos),
//     error: (err) => console.log(err),
// });

// pake ajax
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.status === 200) {
        if (xhr.readyState === 4) {
            console.log(JSON.parse(xhr.response));
        }
    } else {
        console.log(xhr.responseText);
    }
};
xhr.open("get", "https://my-json-server.typicode.com/KevinMaulanaAtmaja/fakeapi/todos");
xhr.send();

// mengembalikan promise
// const todos = fetch("https://my-json-server.typicode.com/KevinMaulanaAtmaja/fakeapi/todos");
// console.log(todos);

// pake fetch
fetch("https://my-json-server.typicode.com/KevinMaulanaAtmaja/fakeapi/todos")
    .then((response) => response.json())
    .then((data) => console.log(data));

// PROMISE
// Obj yg mempresentasikan keberhasilan/kegagalang sebuah
// event yg async di masa yg akan datang.
// janji (terpenuhi / ingkar)
// status (fulfilled / reject / pending)
// callback ( resolve / reject /finnaly)
// aksi (then / catch)

// contoh 1
let ditepati = true;
const janji1 = new Promise((resolve, reject) => {
    if (ditepati) {
        resolve("Janji tlah ditepati!");
    } else {
        reject("Ingkar  janji!");
    }
});
// console.log(janji1);
janji1
.then((response) => console.log("OK! : " + response))
.catch((response) => console.log("NOT OK! : " + response));

// contoh 2
let ditepati2 = false;
const janji2 = new Promise((resolve, reject) => {
    if (ditepati2) {
        setTimeout(() => {
            resolve("Ditepati stlah bbrp waktu!");
        }, 2000);
    } else {
        setTimeout(() => {
            reject("Tidak ditepati stlah bbrp waktu!");
        }, 2000);
    }
});

console.log("Mulai!");
// console.log(janji2.then(() => console.log(janji2)));
janji2
    .finally(() => console.log("Selesai menunggu"))
    .then((response) => console.log("OK! : " + response))
    .catch((response) => console.log("NOT OK! : " + response));
console.log("Selesai!");

// Promise.all()
const animes = new Promise((resolve) => {
    setTimeout(() => {
        resolve([
            {
                id: 1,
                judul: "Eromanga sensei",
                status: "selesai",
                chars: ["Izumi Sagiri", "Masamune Sagiri"],
            },
        ]);
    }, 2000);
});

const cuaca = new Promise((resolve) => {
    setTimeout(() => {
        resolve([
            {
                kota: "Bwi",
                temp: 28,
                kondisi: "Hujan",
            },
            {
                kota: "Psrn",
                temp: 30,
                kondisi: "Cerah",
            },
        ]);
    }, 500);
});

// animes.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

Promise.all([animes, cuaca])
    // array gabung
    .then((response) => console.log(response));
    // array terpisah
    // .then((response) => {
    //     const [animes, cuaca] = response;
    //     console.log(animes);
    //     console.log(cuaca);
    // });
