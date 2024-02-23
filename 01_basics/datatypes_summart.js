//  Primitive => call by value

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference (Non primitive) => call by reference

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "ajay",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ****************************************************

// stack(primitive) => copy of variable
// Heap(non primitive) => reference of the original value, if we change anything it will change in the original value

let name = "ajay";

let anotherName = name;
anotherName = "ajay pradhan";

console.log(name);
console.log(anotherName);

let userOne = {
  email: "ajay@gmail.com",
  ai: "ads",
};

let userTwo = userOne;

userTwo.email = "ajay@spox.com";

console.log(userOne.email);
console.log(userTwo.email);
