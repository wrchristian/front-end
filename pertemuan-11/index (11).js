// Rest parmeter & spread Operator (...)
//1.Rest parmeter
//a.rest palmeter bertipe data array
//b.Rest parmeter harus ada di tarakhir dalam parameter list
const funct1 = (param1, param2, param3,...rest) =>{
    let result = 0;
    rest.forEach((item) => (result += item));
    console.log(result);
};

funct1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//2.Spread Operator
// Berkalion dengan array dan object
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console .log(...numbers);

//Kegunaan Spread Operator pada Array
// duplikasi array
let numbers2 = numbers;
numbers.push(6);
console.log(numbers2);
// menggabungkan arrau
let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
let cobineNum1 = num1.concat(num2, num3);
let cobineNum2 = [...num1, ...num2, ...num3];
console.log(cobineNum1);
console.log(cobineNum2);

//kegunaan Spread Operator pada Object
//1.Duplikasi object
