'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: { open: 12, close: 22 },
  [weekdays[4]]: { open: 11, close: 23 },
  [weekdays[5]]: { open: 0, close: 24 },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Desde ES6 declaramos los objetos de esta forma dentro
  // de otro objeto y esto mejora el rendimiento
  openingHours,

  // Funcion que recibe dos parametros (starterIndex, mainIndex)
  order: function (starterIndex, mainIndex) {
    // Esta funcion retorna de starterMenu los parametros (starterIndex, mainIndex)
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ time, adress, mainIndex, starterIndex }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// El Optional Chaining "?" previene cualquier tipo de error que no podamos contemplar a simple vista
console.log(restaurant.openingHours.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  //   const open = restaurant.openingHours[day]?.open || closed;
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

console.log(restaurant.cantar?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [
  { name: 'Jonas', email: 'jonas@hola.com' },
  { name: 'Michael', email: 'michael@hola.com' },
];

console.log(users[0]?.name ?? 'User array empty');

// console.log(users[0]?.name ?? 'User array empty');
// Es lo mismo que hacer esto
if (users.length > 0) {
  console.log(users[0].name);
} else {
  console.log('User array empty');
}
