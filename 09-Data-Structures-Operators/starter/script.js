'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  nameR: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function (
    starterIndex = 1,
    mainIndex = 2,
    time = '22:30',
    address = 'Via del Sole, 21'
  ) {
    return `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`;
  },
};
const od = restaurant.orderDelivery();
console.log(od);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 1,
// });

// Desestructurar objetos
const { nameR, openingHours, categories } = restaurant;
console.log(nameR, openingHours, categories);
// const a = ['🙈', '🙉', '🙊', '🐒', '🙈'];
// const b = a.filter(i => i === '🙈');

// console.log(b);

const {
  nameRs: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: startes = [] } = restaurant;
console.log(menu, startes);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested object
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);
//console.log(fri);

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

const arr = [3, 4, 5];
const newArr = [1, 2, ...arr];
console.log(newArr);

const arr1 = [1, 2, 3];
const newArr1 = [...arr1];
console.log(newArr1);

const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu);

const num = [1, 2, 3];
const num1 = [...num, 4, 5, 6, 7, 8];
console.log(num1);

const countries = ['Argentina', 'Paraguay', 'Uruguay'];
const countries1 = [...countries, 'Chile', 'Brasil', 'Mexico'];
console.log(countries1);

const ciudades = ['Asunción', 'Santiago', 'Brasilia'];
const ciudades1 = [...ciudades, 'Montevideo', 'Buenos Aires'];
console.log(ciudades1);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 arrays
const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu1);

// Iterables: arrays, strings, maps, sets but NOT objects

// Receive 2 return values from a function
// const a = restaurant.order(0, 0);
// console.log(a);
// const [x, y] = restaurant.order(1, 2);
// console.log(x, y);

// Nested destructuring
// const nested = [2, 4[5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// Default values
// let [i, j, k, l] = [8, 9, , 7];
// console.log(i, j, k, l);
