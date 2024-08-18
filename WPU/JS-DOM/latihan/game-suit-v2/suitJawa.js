function getPilihanComputer() {
    const comp = Math.random();
    // console.log(comp);

    if (comp < 0.34) return "gajah";
    if (comp >= 0.34 && comp < 0.67) return "orang";
    return "semut";
}

function getHasil(comp, player) {
    if (player == comp) return "SERI!";
    if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
    if (player == "orang") return comp == "semut" ? "MENANG!" : "KALAH!";
    if (player == "semut") return comp == "gajah" ? "MENANG!" : "KALAH!";
}

function putar() {
    const imgComp = document.querySelector(".img-komputer");
    const gambar = ["gajah", "orang", "semut"];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(() => {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComp.setAttribute("src", "img/" + gambar[i++] + ".png");
        if (i == gambar.length) i = 0;
    }, 100);
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
    pil.addEventListener("click", function () {
        const pComp = getPilihanComputer();
        const pPlayer = pil.className;
        const hasil = getHasil(pComp, pPlayer);

        putar();
        setTimeout(() => {
            const imgComp = document.querySelector(".img-komputer");
            imgComp.setAttribute("src", "img/" + pComp + ".png");

            const info = document.querySelector(".info");
            info.innerHTML = hasil;
        }, 1000);
    });
});

// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function () {
//     const pComp = getPilihanComputer();
//     const pPlayer = pGajah.className;
//     // console.log("Comp: " + pComp, "Player: " + pPlayer);

//     const hasil = getHasil(pComp, pPlayer);
//     // console.log(hasil);

//     const imgComp = document.querySelector(".img-komputer");
//     imgComp.setAttribute("src", "img/" + pComp + ".png");

//     const info = document.querySelector(".info");
//     info.innerHTML = hasil;
// });
