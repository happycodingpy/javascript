// convencion de nombres de variables
let userName = 'Jonas';
let ebook = 'Around the world';
console.log(`${userName} is reading the ebook ${ebook}`);

/* las constantes se escriben todas en mayuscula */
let PI = 3.1415;
console.log(PI)

/* los nombres de nuestras variables deben ser descriptivos
para mantener un codigo limpio y facil de leer */
let myFirstJob = 'Programmer';
let myCurrentJob = 'Java Developer';
let myCountry = 'Argentina';
console.log(myFirstJob);
console.log(myCurrentJob);
console.log(myCountry);

/* data types 
number: Floating point numbers, used for decimals and integers 
undefined: variable declarada pero no definida
let myName;
*/

// number
// let age = 23;

// boolean
let javascriptIsFun = true;
console.log(javascriptIsFun);

// typeof()
console.log(typeof(javascriptIsFun));

javascriptIsFun = 'YES!';
console.log(javascriptIsFun);

// undefined
let myNameIs;
console.log(`The variable myNameIs: ${myNameIs}`);

// let, const and var

// con let podemos asignar variables y luego reasignarlas con otros valores
//let age = 30;
// age = 35;

// const se utiliza para variables que no cambiaran en el tiempo
// no podemos crear variables const vacias
// const se utiliza por defecto para declarar variables
const year = 2019;

// es mejor usar siempre const y usar let si cambiaremos los valores de las variables

// var es la forma vieja de definir variables antes de ES6
//var job = 'programmer';

// let y var no son similares

// operadores matematicos
// +,-,*, /, %, **
const now = 2021;
const ageJonas = now - 1991;
const ageSarah = now - 1989;
console.log(ageJonas, ageSarah);
console.log(ageJonas *2, ageJonas / 10, 2**3)

// operadores de asignacion
let x = 10 +5;
x += 10;
x *= 4;
x++;
x--;
console.log(x)

// operadores de comparacion
// >, <, <=, >=
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

console.log(now - 1991 > now - 1989);

// operadores de precedentes
let a, b;
a = b = 25 - 10 - 5;
console.log(a, b)

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

// string and template literals
const firstName = 'Jonas';
const job = 'Teacher';
const country = 'Portugal';

const jonasNew = `I'm ${firstName}, a ${job} who lives in ${country}`;
console.log(jonasNew);

// decisions - if / else statements
const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license');
} else {
    const yearsLeft = 18 -age;
    console.log(`Sara is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 2001;
let century;

if (birthYear <= 2000) {
    century = 20;
    
} else {
    century = 21;
}
console.log(century);