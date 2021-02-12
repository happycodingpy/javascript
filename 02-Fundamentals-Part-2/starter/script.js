'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// functions
// es una pieza de codigo que podemos reutilizar cuantas veces queramos en nuestro codigo
function logger() {
    console.log('My name is Jonas');
}

logger()

function fruitProcessor(apples, oranges) {
    //console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;

    return juice;
}

const appleAndOrangeJuice = fruitProcessor(5, 3);
console.log(appleAndOrangeJuice);
