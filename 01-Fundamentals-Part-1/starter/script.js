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


// Type conversion 
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3); //10s
console.log('23'*2); // 46
console.log('23'/2); // 11.5
console.log('22' > '18'); // true

let n = '1' + 1; // 11
n = n - 1;
console.log(n);

// Truthy and Falsy Values
// los valores falson son valors que no son exactamente falsos
// pero se volveran falsos cuando lo convirtamos en un booleano
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean('Jonas'));

const money = 100;

if (money) {
    console.log('Dont spend it all');
} else {
    console.log('You should get a job!')
}

let height = 123;
//let height;

if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED!');
}

// equality operators: == vs ===
// === strict
// == loose

const agePepe = 18;
if (agePepe === 18) console.log('You just became an adult');

console.log('18'==18);
console.log('18'===18);

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite)

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!')
} else if (favourite === 7) {
    console.log('7 is a aslo a cool number');
} else {
    console.log("It's a nice number");
}

if (favourite !== 23) console.log('Why not 23?')

// boolean logic