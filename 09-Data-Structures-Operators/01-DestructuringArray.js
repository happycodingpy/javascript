'use strict';

const paises = ['Arg', 'Brl', 'Py'];
const [a, b, c] = paises;

console.log(a, b, c);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Funcion que recibe dos parametros (starterIndex, mainIndex)
  order: function (starterIndex, mainIndex) {
    // Esta funcion retorna de starterMenu los parametros (starterIndex, mainIndex)
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
// Si quiero sacar el tercer elemento, simplemente agrego una coma
// Entre el primer elemento y el tercero, para que de esa forma no tome el segundo elemento
// const [first, , second] = restaurant.categories;
const [main, secondary] = restaurant.categories;
console.log(main, secondary);

// Recibe y retorna valores de la function order
const [starter, mainMenu] = restaurant.order(2, 0);
console.log(starter, main);
// Garlic Bread Italian

// Nested destructuring
const nested = [2, 4, [5, 6]];

// Desestructuramos el primer y tercer elemento del array
// const [i, , j] = nested;

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p, q, r = 1] = [8, 9];
console.log(p, q, r);
