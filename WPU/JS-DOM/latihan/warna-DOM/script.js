// ----tombol-----
const tombol1 = document.getElementById("tombol");

tombol1.onclick = function () {
    // document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class', 'biru-muda');

    document.body.classList.toggle("biru-muda");
};

// -----tombol warna random-----
const tombolRandomWarna = document.createElement("button");
const teksTombol = document.createTextNode("Warna Random");
tombolRandomWarna.appendChild(teksTombol);
tombolRandomWarna.setAttribute("type", "button");
tombol1.after(tombolRandomWarna);

tombolRandomWarna.addEventListener("click", function () {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = "rgb(" + r + " , " + g + " , " + b + ")";
});

// ----slider----
const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");

// sMerah
sMerah.addEventListener("input", function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

// sHijau
sHijau.addEventListener("input", function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});
// sBiru
sBiru.addEventListener("input", function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

// ----mouse move------
document.body.addEventListener("mousemove", function (e) {
    // posisi mouse
    // console.log(e.clientX);

    // ukuran elemen
    // console.log(window.innerWidth);

    const xPos = Math.round((e.clientX / window.innerWidth) * 255);
    const yPos = Math.round((e.clientX / window.innerHeight) * 255);

    document.body.style.backgroundColor = "rgb(" + xPos + ", " + yPos + ", 100)";
});
