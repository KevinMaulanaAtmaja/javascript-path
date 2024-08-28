// const coba1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("selesai");
//     }, 2000);
// });

// console.log(coba); //masih promise
// coba1.then((result) => console.log(result));

// ASYNC AWAIT
function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 1000;
        if (waktu < 5000) {
            setTimeout(() => {
                resolve("selesai");
            }, 2000);
        } else {
            reject("kelamaan!");
        }
    });
}

// versi then & catch
const coba2 = cobaPromise();
// console.log(coba); //promise
coba2.then((result) => console.log(result))
.catch((err) => console.error(err));

// try catch versi async await
async function cobaAsync() {
    try {
        const coba = await cobaPromise();
        console.log(coba);
    } catch (err) {
        console.log(err);
    }
}
cobaAsync();

// ERROR HANDLING
function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 13000;
        if (waktu < 5000) {
            setTimeout(() => {
                resolve("selesai");
            }, 2000);
        } else {
            reject("kelamaan!");
        }
    });
}

// Promise: .then() .catch()
const janji3 = cobaPromise();
janji3
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

// Async Await: try catch()
async function cobaAsync() {
    try {
        const janji4 = await cobaPromise();
        console.log(janji4);
    } catch (err) {
        console.log(err);
    }
}
cobaAsync();

// Fetch: response.ok & response.status / throw new Error
fetch("https://my-json-server.typicode.com/KevinMaulanaAtmaja/fakeapi/todos1")
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        // return console.log(response.statusText);
        return response.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
