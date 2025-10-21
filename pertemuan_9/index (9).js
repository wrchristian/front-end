//string Litera, Arrow Finction & Default parameter
// 1. String Literals
// let fullName = "John Doe";
// let age = 30;
// let city = "Manado";

//Hello, nama saya john doe, umur saya 30 tahun
// dan saya tinggal di manado.
// let kalimat = "Hello, nama saya " +
//  fullName + ", umur saya " + 
//  age + " tahun dan saya tinggladi " + 
//  addres;
//  console.log(kalimat);

//  let kalimat2 = `Hello, nama saya ${fullName}, umur saya ${age},tahun dan saya tinggal di ${city}`;
// console.log(kalimat2);

// 2. Arrow Function
// function sayGreetings(fullName) {
//     return `Hello, my name is ${fullName}`;
// }
// console.log(sayGreetings("John Doe"));

// //Implicit return value
// const sayGreetings2 = (fullName) => `Hello, my name is ${fullName}`;
// console.log(sayGreetings2("Jane Doe"));

// //Arrow function pada callback
// let numbers = [1, 2, 3, 4, 5];
// let output = numbers.map((item) => item * 1);
// console.log(output);

// // Arrow function pada IIFE
// let output2 = (() => 'Hello')();
// console.log(output2);

// 3. Default Parameter
const sayGreetings  = (fullName, age, address) => 
    `Hello, nama sya ${fullName}, umur saya ${age} tahun, dansaya tinggal di ${address}`;

