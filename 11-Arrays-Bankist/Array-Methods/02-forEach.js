const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  movement > 0
    ? console.log(`You deposited ${movement}`)
    : console.log(`You withdrew ${Math.abs(movement)}`);
}

// FOREACH
console.log('-- FOREACH --');
movements.forEach((movement, index, array) => {
  movement > 0
    ? console.log(`Movement ${index + 1}: You deposited ${movement}`)
    : console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
});

// forEach with Maps
console.log('-- forEach with Maps --');
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

// Set
const currSet = ['USD', 'USD', 'EUR', 'GBP', 'GBP'];
const currenciesUnique = new Set(currSet);

currenciesUnique.forEach(value => {
  console.log(`${value}`);
});
