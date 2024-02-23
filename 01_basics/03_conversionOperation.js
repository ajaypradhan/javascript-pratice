//  *******************CONVERSION*****************************
let score = "33";

console.log(typeof score);
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

// "33" => 33
// "33abc" => NaN
//  true = 1; false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// ""  => false
// "ajay" => true

let num = 33;
let stringNumber = String(num);
console.log(stringNumber);
console.log(typeof stringNumber);

//  *******************OPERATION*****************************

let value = 3;
let negValue = -value;

console.log(negValue);

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 2); //power
console.log(2 / 2);
console.log(2 % 2); //remainder

let str1 = "hello ";
let str2 = "ajay";

let str3 = str1 + str2;

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+true);
console.log(+"");

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);
