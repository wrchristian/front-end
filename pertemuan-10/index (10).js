// 1. Menghitung umur dan tahun pensiun
const calculateAge = birthYear => 2019 - birthYear;

const yearUntilRetirement = ({ year, firstName }) => {
  const age = calculateAge(year);
  const retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
  } else {
    console.log(`${firstName} is already retired.`);
  }
};

yearUntilRetirement({ year: 2005, firstName: 'Joshua' });


// 2. Menjumlahkan angka dengan map
const addNumber = (...numbers) => {
  let sum = 0;
  numbers.map(num => sum += num);
  return sum;
};

console.log(addNumber(1, 2, 3, 4, 5, 6, 7));


// 3. Menghitung luas lingkaran
const phi = 3.14;
let radius = 0;

const calculateArea = ({ radius, power }) => phi * Math.pow(radius, power);

radius = 21;
const area21 = calculateArea({ radius, power: 2 });

radius = 7;
const area7 = calculateArea({ radius, power: 2 });

console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);


// 4. Ajax Request dengan default parameter
const makeAjaxRequest = (url, method = 'GET') => {
  console.log(url, method);
};

makeAjaxRequest('www.google.com');
