//Asunchrouse JavaScript

//synchronous -> single thread -> blocking
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses 3"); //jika proses memakan waktu yg lama maka akan terblock
// console.log("Proses 4");

//Asynchronous -> multi thread -> non blocking
//1.Parallel
// setTimeout(() => {
//     console.log("Proses 1");
// }, 5000);
// setTimeout(() => {
//     console.log("Proses 2");
// }, 2000);
// setTimeout(() => {
//     console.log("Proses 3");
// }, 4000);
// setTimeout(() => {
//     console.log("Proses 4");
// }, 1000);

//2. Cocurrent
setTimeout(() => {
     console.log("Proses 1");
    setTimeout(() => {
       console.log("Proses 2");
     setTimeout(() => {
        console.log("Proses 3");
      setTimeout(() => {
         console.log("Proses 4");
        }, 1000);
      }, 4000);
    }, 2000);
}, 5000);

//Promise
let codition = true;
const newPromise = new Promise((resolve, reject) => {
  if (codition) {
    resolve("Berhasil");
  } else {
    reject("Gagal");
  }
});

//Cara menggunakan Promise
//1. then catch
// newPromise.
//   then((result1) => `${result1} !!!`) //proses 1
//   .then((result2) => console.log(result2)) //proses 2
//   .catch((error) => console.log(error)); //error
//   //2. async/await
//   // Harus buat didalam fungsi

//   const getPromise = async () => {
//     const result = new newPromise;
//     console.log(result);
//   };

//   getPromise();

// // Simulasi fatch data API dari JSONPlaceholder
// fetch("https://jsconplaceholder.typicode.com/users")
//   .then(Respo nse)