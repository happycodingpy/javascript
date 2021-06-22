'use strict';

const paises = ['Arg', 'Brl', 'Py'];
const [a, b, p] = paises;

console.log(a, b, p);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};
// Si quiero sacar el tercer elemento, simplemente agrego una coma
// Entre el primer elemento y el tercero, para que de esa forma no tome el segundo elemento
// const [first, , second] = restaurant.categories;
const [first, second] = restaurant.categories;
console.log(first, second);
