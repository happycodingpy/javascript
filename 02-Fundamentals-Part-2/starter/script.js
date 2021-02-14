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

// function fruitProcessor(apples, oranges) {
//     //console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;

//     return juice;
// }

// const appleAndOrangeJuice = fruitProcessor(5, 3);
// console.log(appleAndOrangeJuice);

// function declaration
function calcAge1(birthYear) {
    return 2021 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);

// function expression
const calcAge2 = function (birthYear) {
    return 2021 - birthYear;    
}
const age2 = calcAge2(1932);
console.log(age2)

// Arrow functions
// const calcAge3 = birthYear => 2021 - birthYear;
// const age3 = calcAge3(1928);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2021 - birthYear;
//     const retirement = 65 - age;

//     // return retirement;
//     return `${firstName} retires in ${retirement} years`
// }

// const age4 = yearsUntilRetirement(1991, 'Jonas');
// console.log(age4);

// functions calling other functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges`;

    return juice;
}

const appleAndOrangeJuice = fruitProcessor(5, 3);
console.log(appleAndOrangeJuice);

const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(1928);
console.log(age3);

const calcAge5 = function (birthYear) {
    return 2021 - birthYear;
}

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge5(birthYear)
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
    
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1939, 'Tim'));
console.log(yearsUntilRetirement(2005, 'Bob'));

// Arrays - Data structure
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const year = new Array(1939, 2020, 2021, 1945, 1979);
console.log(year);

console.log(friends[1]);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

const jonas = ['Jonas', 'Portugal', friends, 'EUR', 2021];
console.log(jonas)

// Exercise
const calcAgeJonas = (birthYear) => {
    return 2021 - birthYear;
}

const years = [1991, 2021, 2008, 2005, 1939, 1945, 2007];

const ageJonas1 = calcAgeJonas(years[0])
const ageJonas2 = calcAgeJonas(years[3])
console.log(ageJonas1)
console.log(ageJonas2)

const ages = [calcAgeJonas(years[0]), calcAgeJonas(years[1]), calcAgeJonas(years[3])];
console.log(ages);

// Basic arrays operations(Methods)

// push method - agrega elementos al final del array
const countries = ['Paraguay', 'Brasil', 'Argentina', 'Chile', 'Uruguay'];
countries.push('Portugal')
console.log(countries)

// unshift method - agrega elementos al inicia del array
countries.unshift('Francia')
console.log(countries)

// Remove methods
// pop() elimina el ultimo elemento del array
countries.pop();
console.log(countries);

// shift() elimina el ultimo elemento de un array
const friends1 = ['Michael', 'Peter', 'Steven', 'Tim', 'Bob'];
friends1.shift();
console.log(friends1);

console.log(friends1.indexOf('Steven'));

// includes() verifica si un elemento esta o no en el array
console.log(friends1.includes('William')) // false
console.log(friends1.includes('Steven')) // true

friends1.push(23);
console.log(friends1.includes(23)) // true

if (friends1.includes('William')) {
    console.log('You have a friend called William');
} else {
    friends1.push('William');
    console.log('William is now his friend')
}

console.log(friends1);

// Objetct - data structure
const pepe = {
    // properties: firstName, country, gender, friends
    firstName: 'Pepe',
    country:'United State',
    gender: 'Dinosaur',
    friends: ['Firefly', 'Butterfly,', 'Pterodáctilo'],
}

console.log(pepe);
console.log(pepe.gender);

// const interestedIn = prompt('What do you want to know about Pepe? Choose between firstName, country, gender, friends');

// if (pepe[interestedIn]) {
//     console.log(pepe[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, country, gender, friends');
// }

// data is added to the object
pepe.location = 'home';
pepe['twitter'] = '@pepedinosaur';
console.log(pepe);

// Challenge
// Write: Jonas has 3 friends, and his best friend is called Firefly
console.log(`${pepe.firstName} has ${pepe.friends.length} friends, and his best friend is calle ${pepe.friends[0]}`);

// Object Method
// los object en js pueden contenr todo tipo de datos igual que un array
// y también object dentro de otro object

const pepito = {
    // properties: firstName, country, gender, friends
    firstName: 'Pepito',
    country:'Suiza',
    gender: 'Dinosaur',
    friends: ['Firefly', 'Butterfly,', 'Pterodáctilo'],
    hasDriversLicense: true,
    birthYear: 1985,

    // calcAge: function(birthYear) {
    //     return 2021 - birthYear;
    // }

    // calcAge: function() {
    //     return 2021 - this.birthYear;
    // }

    calcAge: function() {
        this.age = 2021 - this.birthYear;
        return this.age;
    },

    // Challenge
    // Jonas is a 36-years old teacher, and he has a driver's license
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} years old teacher, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`;
    }
}
console.log(pepito.age);
console.log(pepito.calcAge());
console.log(pepito.getSummary());
//console.log(pepito['calcAge'](1991))

// For loop
for (let i = 0; i <= 4; i++) {
    console.log(`Javascript is amazing! ${i}`)
}

// looping array - break and continue
// const pepiArray = {
//     // properties: firstName, country, gender, friends,etc
//     firstName: 'Pepi',
//     country:'Suiza',
//     gender: 'Dinosaur'
//     //friends: ['Firefly', 'Butterfly,', 'Pterodáctilo']
    
// };

const pepiArray = ['Pepi', 'Suiza', 'Dinosaur',true,5];
const types = [];

for (let i=0; i<pepiArray.length; i++) {
    // Reading from pepiArray 
    console.log(pepiArray[i], typeof(pepiArray[i]));
    
    // Filling types array
    // types[i] = typeof pepiArray[i];
    // console.log(types[i]);
    types.push(pepiArray[i])
    console.log(types[i])
}

const años = [1991,2005,1939, 2007,1945,1920,1915,1872];
const edad = [];

for (let i = 0; i < años.length; i++) {
    edad.push(2021 - años[i]);
}
console.log(edad);  

// continue and break
// continue sale de la itereacion del bucle actual y continua con el siguiente
// break termina rapidamente con el loop

const algunosDatos = ['Jonas', 23, true, 'Suiza', 'España', ['Juan', 'Carlos','Junior'],25,33,false];

console.log('---ONLY STRING---');
for (let i=0; i<algunosDatos.length; i++) {
    if (typeof algunosDatos[i] !== 'string') continue;
    console.log(algunosDatos[i], typeof algunosDatos[i])
}

console.log('--ONLY BOOLEAN--')
for (let i=0; i<algunosDatos.length; i++) {
    if (typeof algunosDatos[i] !== 'boolean') continue;
    console.log(algunosDatos[i], typeof algunosDatos[i])
}

console.log('--ONLY NUMBER--')
for (let i=0; i<algunosDatos.length; i++) {
    if (typeof algunosDatos[i] !== 'number') continue;
    console.log(algunosDatos[i], typeof algunosDatos[i])
}

console.log('--BREAK WITH NUMBER--')
for (let i=0; i<algunosDatos.length; i++) {
    if (typeof algunosDatos[i] === 'number') break;
    console.log(algunosDatos[i], typeof algunosDatos[i])
}

// console.log('--ONLY REVERSE--')
// for (let i=0; algunosDatos.length; i++) {
//     console.log(algunosDatos.reverse())
// }

// for (let i= algunosDatos.length -1; i>=0; i--){
//     console.log(i, algunosDatos[i])
// }

// Loops in Loops
console.log()
for (let i=0; i<4; i++) {
    console.log(`---- Starting exercise ${i}`);

    for (let j=0; j<6; j++){
        console.log(`Exercise ${i}: Lifting wight repetition ${j}` )
    }
}

// The while loop
for (let i=0; i<5; i++) {
    console.log(`FOR: Hello Js ${i}`)
}

let i = 0;
while (i<=5) {
    console.log(`WHILE: Hello Js ${i}`)
    i++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    // creamos una nueva condicion y se ejecuta nuevamente
    dice = Math.trunc(Math.random() * 6) + 1;

    if (dice===6) console.log('Loop is about to end...')
}