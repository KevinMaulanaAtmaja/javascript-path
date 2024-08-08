// latihan for
var noAngkot = 1;
var angkotBeroperasi = 6;
var jumlahAngkot = 10;
while (noAngkot <= angkotBeroperasi) {
    console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
    noAngkot++;
}

for (let noAngkot = angkotBeroperasi + 1; noAngkot <= jumlahAngkot; noAngkot++) {
    console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.");
}
