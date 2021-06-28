// REST, because on LEFT side on =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

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

restaurant.orderPizza('muzarella', 'provolone', 'pastron', 'aceitunas');
restaurant.orderPizza('pollo y catupiry');

const [pizza, pasta, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, pasta, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// Functions
const add = (...numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    console.log(`Sum: ${sum}`);
  }
};
add(2, 3, 7, 55, 66);
add(2, 3);
add(2, 3);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);
