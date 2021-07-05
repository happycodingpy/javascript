'use strict';

const rest = new Map();
// set recibe los valores
rest.set('name', 'Clasico Argentino');
rest.set(1, 'Buenos Aires, Argentina');
rest.set(2, 'Fiorentina, Italia');
console.log(rest);

// get muestra los valores
console.log(rest.get('name'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

const time = 12;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));

console.log(rest.size);

const arr = [1, 2, 3];

const arrMap = new Map();
arrMap.set(arr, 'Test');
console.log(arrMap.get(arr));

///////////////////////////////////////
// Maps: Iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'Go'],
  [2, 'Python'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = 3;

console.log(question.get(question.get('correct') === answer));

const paises = new Map([
  [1, 'Argentina'],
  [2, 'Paraguay'],
  [3, 'Brasil'],
  [4, 'Uruguay'],
]);
console.log(paises);

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Paises ${key}: ${value}`);
}
