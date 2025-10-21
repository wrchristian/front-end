//JavaScript Conditional & loop

//1.JavaScript Conditional

// let suhu = 30;
// if (suhu >= 38){
//     console.log("Suhu diluar panas");
// } else {
//     console.log("suhu diluar normal");
// }
// console.log("selesai")

//if - else if - else 
// jika umur 0 - 5 tampilkan belita
// jika umur 6 - 11 tampilkan anak anak
// jika umur 12 - 17 tampilkan remaja
// jika umur 18 - 23 tampilkan anak muda
// jika umur 24 - 40 tampilkan dewasa
// jika umur 41 - 9999 tampilkan orang tua

// let umur = 7;
// if (umur >= 0 && umur <= 5 ){
//     console.log("Umur termasuk katagori belita");
// } else if (umur >= 6 && umur <=11 ){
//     console.log("Umur termasuk katagori anak anak ");
// } else if (umur >= 12 && umur <=17 ){
//     console.log("Umur termasuk katagori remaja");
// } else if (umur >= 18 && umur <= 23 ){
//     console.log("Umur termasuk katagori anak muda ");
// } else if (umur >= 24 && umur <= 40 ){
//      console.log("Umur tarmasik katagori dewasa ");
// }else if (umur >= 40 ){
//     console.log("Umur tarmasuk katagori orang tua ");
// }

// Seitch - case
let umur = 5;
switch (umur){
    case 1:
        console.log("Hari minggu");
    case 2:
        console.log("Hari senin");
    case 3:
        console.log("Hari selasa");
    case 4:
        console.log("Hari rabu");
    case 5:
        console.log("Hari kamis");
    case 6:
        console.log("Hari jumat");
    case 7:
        console.log("Hari sabtu");
}
 
