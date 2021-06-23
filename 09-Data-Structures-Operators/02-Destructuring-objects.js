'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: { open: 12, close: 22 },
    fri: { open: 11, close: 23 },
    sat: { open: 0, close: 24 },
  },

  // Funcion que recibe dos parametros (starterIndex, mainIndex)
  order: function (starterIndex, mainIndex) {
    // Esta funcion retorna de starterMenu los parametros (starterIndex, mainIndex)
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// Para desestructurar objetos utilizamos {} porque asi es como creamos objetos
// Los nombres para desestructurar deben ser los mismos nombres que se utilizan en el objeto
const { name, openingHours, categories } = restaurant;
console.log(name);
