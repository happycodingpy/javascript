'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays1 = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays1[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays1[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays1[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
  // thu: {
  //   open: 12,
  //   close: 22,
  // },
  // fri: {
  //   open: 11,
  //   close: 23,
  // },
  // sat: {
  //   open: 0, // Open 24 hours
  //   close: 24,
  // },
};

const restaurant = {
  nameR: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },
  orderDelivery(
    starterIndex = 1,
    mainIndex = 2,
    time = '22:30',
    address = 'Via del Sole, 21'
  ) {
    return `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`;
  },
  // orderDelivery: function (
  //   starterIndex = 1,
  //   mainIndex = 2,
  //   time = '22:30',
  //   address = 'Via del Sole, 21'
  // ) {
  //   return `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`;
  // },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza(mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
  // orderPasta: function (ing1, ing2, ing3) {
  //   console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  // },
  // orderPizza: function (mainIngredients, ...otherIngredients) {
  //   console.log(mainIngredients);
  //   console.log(otherIngredients);
  // },
};

// Optional Chaining
console.log('Optional Chaining');
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ myName: 'Jonas', country: 'USA' }];
console.log(users[0]?.myName ?? 'User array empty');

if (users.length > 0) console.log(users[0]?.myName);
else console.log('User array empty');

// Looping Array - For-or loop
console.log('---For-or Loop---');
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(`Item of menu: ${item}`);
for (const item of menu.entries()) console.log(item);
console.log([...menu.entries()]);
// const od = restaurant.orderDelivery();
// console.log(od);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 1,
// });

// Desestructurar objetos
// const { nameR, openingHours, categories } = restaurant;
// console.log(nameR, openingHours, categories);
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
// const { menu = [], starterMenu: startes = [] } = restaurant;
// console.log(menu, startes);

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

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// The Spread Operator (...)
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
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);

const ingredients = [
  // prompt('Lets make pasta! Ingredient 1?'),
  // prompt('Ingredient2?'),
  // prompt('Ingredient 3?'),
  'Salsa boloñesa',
  'Champiñon',
  'Muzarella',
];
console.log(ingredients);

// solution 1
restaurant.orderPasta[(ingredients[0], ingredients[1], ingredients[2])];

// solution 2
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.nameRc = 'Ristorante Roma';
console.log(restaurantCopy);
console.log(restaurantCopy.nameRc);
console.log(restaurant.nameR);

// 1) Destructuring
// SPREAD, because on RIGHT side of =
const arr2 = [1, 2, ...[3, 4, 5]];
console.log(arr2);

// REST, because on LEFT side of =
const [x, y, ...others] = [1, 2, 3, 4, 5];
console.log(x, y, others);

const [pizza, risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, ...otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = (...n) => {
  console.log(n);
  let sum1 = (a, b) => a + b;
  let a = n.reduce(sum1);
  console.log(`La suma del array es: ${a}`);
};
add(5, 3, 7, 2);
add(5, 2);
add(7, 3);
add(5, 5, 5);

const x1 = [5, 15, 10];
console.log(...x1);

// Use ANY data type, return ANY data type,
// short-circuiting
console.log('-----OR-----');
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('-----AND-----');
console.log(false && 'Jonas');
console.log(true && 'Jonas');
console.log('Hello' && 23 && null && 'jonas');

// Practical example
// const a1 = restaurant.orderPizza
//   ? restaurant.orderPizza('mushrooms', 'muzarella')
//   : 'Not there are Pizza';
// console.log(a1);

// console.log(
//   restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'muzarella')
// );

// Nullish Coalescing Operator
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);
// Nullish: null and undefined
// const foo = null ?? 'default string';
// console.log(foo);

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
