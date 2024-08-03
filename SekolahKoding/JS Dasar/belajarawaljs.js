  /*
  1. memilih id wrap
  2. metode innerHTML = nulis konten
  */

  //Deklarasi Variabel
  // nama dimulai dengan huruf atau $ atau _
  // nama boleh mengandung huruf, angka, underscore _ dan $ dollar
  // nama itu case sensitive
  // ada 'reserved word' yang tidak boleh dipakai

  //Deklarasi variabel
  var x$_ = 100;

  //tipe-data string
  var text = "belajar JS ";

  //tipe-data number/angka
  var angka = 100;
  var angka_desimal = 100.987;

  //menggabungkan variabel menjadi variabel sebelumnya
  var text1 = "belajar";
  var text2 = " JS";

  var text_baru = text1 + text2;

  //menghapus atau mengubah nilai variabel sebelumnya
  var text_lama = "text lama";

  text_lama = "text baru";

  //operator matematika + - * / %
  //penjumlahan //pengurangan //perkalian //pembagian //sisa hasil bagi
  var angka1 = 100;
  var angka2 = 50;
  var angka_tambah = angka1 + angka2;

  //increment ++ //decrement --
  var angka3 = 101;
  var angka4 = 10;
  angka_baru--;

  var angka_baru = angka3 + angka4;

  //penulisan singkat
  var angka5 = 100;
  var angka6 = 20;

  //angka6 = angka6 + angka5;
  //variabel kiri += variabel kanan
  angka6 += angka5;


  //----metode angka---
  // toFixed(n) toString() random() min(a, b, c) max(a, b, c)
  var angka7 = 1000;
  var angka8 = 123.123456;
  var angka9 = 1003;

  //var angka_baru2 = angka8.toFixed(3);
  //var angka_baru2 = angka7.toString() + angka9;
  //var angka_baru2 = Math.random();
  //var angka_baru2 = Math.min(1, 2, 3, 4);
  //var angka_baru2 = Math.max(1, 2, 3, 4);

  //----metode angka bagian 2-----
  //round() ceil() floor() object methods(contoh: abs,log) r
  //random spesific formula -> Math.floor(Math.random()*x) + 1;
  //var angka_baru2 = Math.round(201.501);
  //var angka_baru2 = Math.ceil(201.001);
  //var angka_baru2 = Math.floor(201.900);

  //var x = 1000; //range ; jarak
  //var y = 5;  //batas minimal
  // batas max = y+x;
  //var angka_baru2 = Math.floor( Math.random() * x) + y;

  //-----metode string-----
  // legth indexOf() lastIndexOf() search() charAt()
  //toUpperCase() toLowerCase() replace("a", "b")

  var nama = "kevina lani maulana atmaja";
  //var hasil = nama.length;
  //var hasil = nama.indexOf("a");
  //var hasil = nama.lastIndexOf("a");
  //var hasil = nama.search("lana");
  //var hasil = nama.charAt(3);
  //var hasil = nama.toUpperCase();
  //var hasil = nama.toLowerCase();
  var hasil = nama.replace("kevina", "kevin");

  //-----metode string bagian 2----
  // substring(start, end)   substr(start, length)
  // parseInt parseFloat
  var nama = "amelia aisyah putri";

  //var hasil2 = nama.substring(0, 5);
  //var hasil2 = nama.substr(1, 8);

  var nama2 = "120.123";
  //var hasil2 = parseInt(nama2) + 100;
  var hasil2 = parseFloat(nama2) +10.312;




  document.getElementById("wrap").innerHTML = hasil2;
