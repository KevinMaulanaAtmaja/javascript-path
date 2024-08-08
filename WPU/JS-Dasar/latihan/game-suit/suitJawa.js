var tanya = true;
while (tanya) {
    // menangkap pilihan player
    var p = prompt("pilih: gajah, semut, orang");

    // menangkap pilihan computer
    // membangkitkan bil random
    var comp = Math.random();
    console.log(comp);

    if (comp < 0.34) {
        comp = "gajah";
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = "orang";
    } else {
        comp = "semut";
    }
    var hasil = "";
    // menentukan rules
    if (p == comp) {
        hasil = "SERI!";
    } else if (p == "gajah") {
        hasil = (comp == "orang") ? "MENANG!" : "KALAH!";
    } else if (p == "orang") {
        hasil = (comp == "semut") ? "MENANG!" : "KALAH!";
    } else if (p == "semut") {
        hasil = (comp == "gajah") ? "MENANG!" : "KALAH!";
    } else {
        hasil = "PILIHAN ANDA SALAH";
    }
    // tampilkan hasilnya
    alert("Kamu milih: " + p + " dan Komputer milih: " + comp + "\nMaka hasilnya: " + hasil);
    tanya = confirm("lagi?");
}
alert('Selesai bermain!')