'use strict';

///////////////////////////////////////
// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

// ReferenceError: hasDriverLicense is not defined
// if (passTest) hasDriverLicense = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// SyntaxError: Unexpected strict mode reserved word
// const interface = 'Audio';

///////////////////////////////////////
// Functions
function logger() {
  console.log('My name is Jonas');
}
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges `;
  return juice;
}
const fruitJuice = fruitProcessor(5, 2);
console.log(fruitJuice);

///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);
