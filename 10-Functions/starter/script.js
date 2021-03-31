'use strict';

console.log('---Default Parameters---');
const bookings = [];

const createBooking = (flightNum, numPassengers = 1, price = 199) => {
  // ES5
  // numPassengers = numPassengers || 1
  // price = price || 199
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 398);

// Value vs Reference
console.log('---Value vs Reference---');
const flight = 'LH235';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 3799793439,
};

const checkIn = (flightNumb, passenger) => {
  flightNumb = 'LH995';
  passenger.name = `Mr/s ${passenger.name}`;

  const a =
    passenger.passport === 3799793439 ? 'Checked in' : 'Wrong passport!';
};
// checkIn(flight, jonas);
// console.log(flight, jonas);

//Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};
newPassport(jonas);
checkIn(flight, jonas);

// Callback
console.log('---Callback---');
const oneWord = str => {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = str => {
  const [first, ...others] = str.split('');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Origianl string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);

// Js uses callbacks all the time
console.log('---Js uses callbacks all the time---');
const high5 = () => console.log('👋🏻');
['Jonas', 'Martha', 'Adam'].forEach(high5);

// Functions returning Functions
console.log('---Functions returning Functions---');
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet('Welcome');
greeterHey('Jonas');
greeterHey('Steven');

greet('Benvenuto')('Jonas');
greetArr('Bonjour')('Greta');

// The call and apply methods
console.log('---The call and apply methods---');
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(235, 'Jonas Schmedtmann');
lufthansa.book(735, 'Martha Schmedtmann');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
book.call(eurowings, 23, 'Sarah Williams');
book.call(eurowings, 595, 'Mishlé Williams');
console.log(eurowings);

const latam = {
  airline: 'Latam Airlines',
  iataCode: 'LTM',
  bookings: [],
};

// Call methods
console.log('---Call methods---');
book.call(latam, 25, 'George Martinez');
book.call(latam, 35, 'Emmanuel Auguste');
console.log(latam);

// Apply method
console.log('---Apply method---');
const flightData = [583, 'George Cooper'];
book.apply(latam, flightData);
console.log(latam);

book.call(latam, ...flightData);

//  Bind method
console.log('---Bind method---');
const bookEW = book.bind(latam);
const bookLH = book.bind(lufthansa);
const bookLK = book.bind(eurowings);
bookEW(23, 'Steven Williams');
bookLH(25, 'Carmelo Peralta');
bookLK(25, 'Wokitoki Gonzalez');

//const bookLH;
