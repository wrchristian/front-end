//Destructuring & MOdule
//1.Destructuring Array
const numbers = [1, 2, 3, 4, 5]; // Structuring

// let num1 = numbers[0];
// let num2 = numbers[1];
// let num3 = numbers[2];
// let num4 = numbers[3];
// let num5 = numbers[4];

// Destructuring ES6
// const [num1, num2, num3, num4, num5] = numbers;
// console.log(num1, num2, num3, num4, num5);

//Destructuring Array sebagian item aja
// const [, , num3, ,] = numbers;
// console.log(num3);

//Destructuring Array dengan Rest Parameter
const [num1, num2, ...rest] = numbers;
console.log(num1, num2, rest);

//Destructuring Object
const studentm = {
  name: "John",
  age: 25,
  status: "active",
};

// const fullName = studentm.name;
// const age = studentm.age;
// const major = studentm.status;

//Destructuring Object denagan parameter
