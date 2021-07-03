// Es una colección de valores únicos, lo que significa que los `Sets` nunca pueden tener duplicados y esa propiedad lo hace útiles para ciertas situaciones
const num = [1, 2, 3, 3, 3, 3, 4, 5];

const str = [
  'Paraguay',
  'Paraguay',
  'Francia',
  'Argentina',
  'Sudafrica',
  'Sudafrica',
];

const orderSet = new Set(num);
console.log(orderSet);

const orderSet1 = new Set(str);
console.log(orderSet1);

console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Argentina'));

orderSet1.add('Australia');
console.log(orderSet1);

orderSet1.delete('Francia');
console.log(orderSet1);

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const stafUnique = [...new Set(staff)];
console.log(stafUnique);
