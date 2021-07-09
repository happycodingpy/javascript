let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log('-- SLICE -- ');
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -1));
console.log(arr.slice());
console.log([...arr]);

// SPLICE
console.log('-- SPLICE --');
// console.log(arr.splice(''));
console.log(arr.splice(-1));
console.log(arr.splice(1, 2));
console.log(arr);

// REVERSE
console.log('-- REVERSE --');
let arr2 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr2.reverse());

// CONCAT
console.log('-- CONCAT --');
let a1 = ['a', 'b', 'c', 'd', 'e'];
let a2 = ['f', 'g', 'h', 'i', 'j'];
console.log([...a1, ...a2]);

// JOIN
console.log('-- JOIN --');
console.log(a1.join(''));
console.log(a1.join(' '));
console.log(a1.join(' - '));
