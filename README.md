# JavaScript

![javascript](https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor)

### Editor de Código

Utilizaremos VSCode para trabajar con nuestro código

[Visual Studio Code](https://code.visualstudio.com/)

## Fundamentos Parte 1

```javascript
console.log('Hello World!');
```

```javascript
let js = 'amazing';

if (js === 'amazing') console.log('JavaScript is FUN!');
```

### ¿Qué es JavaScript y qué podemos hacer con él?

![js](https://github.com/hugoorlando/javascript/blob/main/img/js_1.png)

Podemos definir JavaScript de muchas formas diferentes, pero mi definición es que es un lenguaje de programación de alto nivel, orientado a objetos y de múltiples paradigmas.

### ¿Qué significa realmente todo eso?

Así que deconstruyamos esto solo un poco para al menos darle algún sentido.

Y comenzando con el lenguaje de programación en sí, un lenguaje de programación es básicamente una herramienta que nos permite escribir código que instruirá a una computadora para que haga algo. Y, por supuesto, ese es nuestro principal objetivo al usar JavaScript.

**JavaScript es un lenguaje de alto nivel**, lo que significa que no tenemos que pensar en muchas cosas complejas, como administrar la memoria de la computadora mientras ejecuta nuestro programa.

**JavaScript está orientado a objetos** y todo lo que eso significa es que el lenguaje se basa principalmente en el concepto de objetos para almacenar la mayoría de los tipos de datos.

**JavaScript también es un lenguaje de múltiples paradigmas**, lo que significa que es tan flexible y versátil que podemos usar todo tipo de estilos de programación diferentes, como la programación imperativa y declarativa.

Y estos diferentes estilos son solo diferentes formas de estructurar nuestro código.

### Principales tecnologias del Desarrollo Web

![js](https://github.com/hugoorlando/javascript/blob/main/img/js_2.png)

**HTML** es el responsable del contenido de la pagina como los titulos, parrafos, imágenes, etc

**CSS** se encarga de darle estilos a nuestra página web como colores, efectos, etc

**JavaScript** es el lenguaje de programación que se encarga de agregar efectos dinámicos e interactivos a cualquier página web. También es utilizado para manipular el contenido de los datos desde servidores remotos y construir aplicaciones web

### Ejemplo de efectos dinámicos en una app web

![js](https://github.com/hugoorlando/javascript/blob/main/img/js_3.png)

Entonces, como ya sabe, JavaScript nos permite agregar efectos dinámicos a las páginas y, de hecho, construir aplicaciones web completas en el navegador.

Y estas aplicaciones se sienten casi como las aplicaciones que usamos en nuestras computadoras y teléfonos todos los días. Entonces, podemos decir que JavaScript es lo que hizo posible el desarrollo web moderno y, en primer lugar, toda la web moderna.

### Frameworks y Librerias de JavaScript

![js](https://github.com/hugoorlando/javascript/blob/main/img/js_4.png)

Se trata básicamente de herramientas que hacen que escribir aplicaciones web modernas a gran escala sea mucho más fácil y rápido.

Ahora, lo que importa aquí es que todos estos frameworks y bibliotecas todavía se basan en un 100 por ciento en JavaScript.

Y lo que esto significa es que debe volverse realmente bueno en JavaScript antes de aprender y usar cualquiera de estos marcos y no simplemente saltar a su primera librería como React después de saber cómo escribir 10 líneas de código en JS

### Lanzamientos de JavaScript

![js](https://github.com/hugoorlando/javascript/blob/main/img/js_5.png)

### Valores y variables

Un **valor** es un dato, por ejemplo el texto Jonas es un valor

```javascript
'Jonas';
```

Para verlo en la consola

```javascript
console.log('Jonas');
```

Podemos tener diferentes valores

```javascript
console.log('Jonas');
console.log(23);
console.log(true);
```

Un valor es básicamente la unidad más pequeña de información que tenemos en JavaScript y lo podemos guardar en variables

```javascript
let js = 'Amazing';
let firstName = 'Jonas';

console.log(js);
console.log(firstName);
```

Las variables se encargan de guardar los valores (datos, informacion)

```javascript
let userName = 'Jonas';
let ebook = 'Around the world';
console.log(`${userName} is reading the ebook ${ebook}`);
```

```javascript
// Variable name conventions
let jonas_matilda = 'JM';
let $function = 27;

let person = 'jonas';

let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';
```

### Tipos de datos

![js](https://github.com/hugoorlando/javascript/blob/main/img/js_6.png)

Un valor es primitivo cuando no es un Objeto.

### Tipo de datos primitivos

Existen siete tipos de datos primitivos

**Number** números de coma flotante Se utiliza para decimales y enteros.

```javascript
let age = 23;
```

**String** secuencia de caracteres se utiliza para el texto

```javascript
let firstName = 'Jonas';
```

**Boolean** tipo lógico que solo puede ser verdadero o falso y se usa para tomar decisiones

```javascript
let yes = true;
let not = false;
```

**Undefined** valor tomado por una variable que aún no está definida ("valor vacío")

```javascript
let country;
```

**Null** también significa "valor vacío"

```javascript
let country = null;
```

**Symbol** valor que es único y no se puede cambiar

**BigInt** enteros más grandes que los que puede contener el tipo Número

### let, const y var

```javascript
let firstName = 'Jonas';
let lastName = 'Schmedtmann';
console.log(`${firstName} ${lastName}`);

const API = 'https://api.test.com/number?a=5';
const country = 'Argentina';

var city = 'Buenos Aires';
```

### Operadores básicos

```javascript
// Operadores matemáticos (+,-,*,/,**)
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
```

### Operadores de asignacion

```javascript
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
```

### Operadores de comparacion

```javascript
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
```

### String y Template Literals

```javascript
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);
```

### If-Else

```javascript
const age = 15;

if (age >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
```

### Type conversion

```javascript
// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);
```

### Type coercion

```javascript
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);
```

### Truthy and Falsy Values

```javascript
// Valores falsos: 0, '', undefined, null, NaN
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean('')); // false
console.log(Boolean('Jonas')); // true
console.log(Boolean({})); // true
```

### Comparación (==)

El operador de comparacion (==) comprueba si sus dos operandos son iguales y devuelve un resultado booleano. A diferencia del operador de igualdad estricta (===), es que este convierte y compara operandos que son de diferentes tipos.

```javascript
console.log(1 == 1);
// expected output: true

console.log('hello' == 'hello');
// expected output: true

console.log('1' == 1);
// expected output: true

console.log(0 == false);
// expected output: true

console.log('' == false);
// expected output: true
```

### Igualdad Estricta (===)

El operador de estricta igualdad (===) revisa si dos operandos son iguales y produce un resultado Booleano. A diferencia del operador de igualdad regular (==), el operador de estricta igualdad siempre considera que los operandos de distinto tipo de valor son diferentes y nunca similares.

```javascript
console.log(1 === 1);
// expected output: true

console.log('hello' === 'hello');
// expected output: true

console.log('1' === 1);
// expected output: false

console.log(0 === false);
// expected output: false
```

### Booleanos

Tipo lógico que solo puede ser `true` o `false` y se usa para tomar decisiones

![Booleanos](https://github.com/hugoorlando/javascript/blob/main/img/js_7.png)

![Booleanos](https://github.com/hugoorlando/javascript/blob/main/img/js_8.png)

### Operadores logicos

```javascript
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
```

### Operador ternario

```javascript
const age = 23;

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);
```

### Breve historia de JavaScript

![ECMAScript](https://github.com/hugoorlando/javascript/blob/main/img/js_9.png)

## Fundamentos Parte 2

### Activating Strict Mode

Modo estricto para scripts

Para invocar el modo estricto en todo un script, escribe exactamente "use strict"; (o 'use strict';) antes de cualquier otra expresión. El modo estricto permite escribir un código más seguro y evitar errores accidentales, ya que evita que introduzcamos errores en nuestro código

```javascript
// Sintaxis del modo estricto para todo el script
'use strict';

let v = '¡Hola! ¡Estoy en modo estricto para script!';

let hasDriversLicense = false;
const passTest = true;

// ReferenceError: hasDriverLicense is not defined
// if (passTest) hasDriverLicense = true;

// SyntaxError: Unexpected strict mode reserved word
// const interface = 'Audio';
```

### Funciones

Las funciones es simplemente un fragmento de código que podemos reutilizar una y otra vez en nuestro código

```javascript
function logger() {
  console.log('My name is Jonas');
}
```

Todo lo que se encuentra dentro de las llaves `{}` se llama cuerpo de la funcion

Para utilizar la funcion simplement escribimos el nombre de la funcion `logger()` y con ella llamamos a la funcion para ejecutarla

```javascript
function logger() {
  console.log('My name is Jonas');
}

logger();
```

Cuando escribimos una funcion le pasamos informacion y también la funcion puede devolver o retornar esa información o datos.

Las funciones pueden recibir parámetros que son variables específicas para la función y se definen una vez que llamamos a la funcion

```javascript
function fruitProcessor(fruit) {}
```

`fruit` es el parámetro que recibe la función fruitProcessor

### Function Declarations vs. Expressions

Las `Function Declarations` se llaman así porque usamos la palabra clave `function` para declarar una función

```javascript
// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);
```

```javascript
// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age2);
```

La diferencia entre una Function Declarations y una Function Expressions es que a las `Function Declarations podemos llamarlas antes de que la funcion sea ejecutada`

Por

```javascript
// Function declaration
const age1 = calcAge1(1991);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}
console.log(age1);
```

### Arrow Function

```javascript
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;

  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
```

### Functions Calling Other Functions

```javascript
const cutFruitPieces = fruit => fruit \* 4;

const fruitProcessor = (apples, oranges) => {
const applePieces = cutFruitPieces(apples);
const orangePieces = cutFruitPieces(oranges);

const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
return juice;
};
console.log(fruitProcessor(2, 3));
```

### Repasando las funciones

![function](https://github.com/hugoorlando/javascript/blob/main/img/js_10.png)

### Los tres diferentes tipos de funciones

**Function Declaration:** Función que puede ser
utilizado antes de que se declare

```javascript
function salular(nombre) {
  return `Hola ${nombre}`;
}
```

**Function Expression:** Esencialmente una función valor almacenado en una variable

```javascript
const saludar = function (nombre) {
  return `Hola ${nombre}`;
};
```

**Arrow Function**

```javascript
const saludar = nombre => `Hola ${nombre}`;
```

![functions](https://github.com/hugoorlando/javascript/blob/main/img/js_11.png)

Tres formas diferentes de escribir funciones, pero todas funcionan en una manera similar: `recibe datos de entrada, transforma los datos y luego retorna esos mismos datos`

### Anatomia de una Function

![functions](https://github.com/hugoorlando/javascript/blob/main/img/js_12.png)

## Introducción a Arrays

Quiero almacenar los nombres de mis amigos para luego usarlos en una funcion

```javascript
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
```

Utilizamos estructura de datos para trabajar con matrices `(arrays)` ya que todo el tiempo estamos intercambiando datos y los arrays son una buena forma de trabajar con ellos. En JavaScript existe dos tipos de estructura de datos importantes: `los arrays y los objetos`

Los arrays pueden contener tanto valores como queramos y también valores de cualquier tipo que queramos

```javascript
const data = [1, 'Mundo', 25, 'Argentina', false, true];
```

Tambien de esta forma se puede escribir un Array pero no es muy utilizado

```javascript
const years = new Array(1991, 1980, 2020, 2021);
```

Para mostrar el valor del Array en una posicion del mismo hacemos lo siguiente:

```javascript
const data = [1, 'Mundo', 25, 'Argentina', false, true];

console.log(data[0]); // 1
console.log(data[3]); // Argentina
```

Para conocer la longitud o el tamaño del Array

```javascript
const data = [1, 'Mundo', 25, 'Argentina', false, true];

console.log(data.length);
```

Para conocer la última posición del Array

```javascript
const data = [1, 'Mundo', 25, 'Argentina', false, true];

console.log(data[data.length - 1]);
```

Podemos remplazar un elemento del Array. Por ejemplo: voy a remplazar `Michael` por `Jay`

```javascript
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends); // Michael, Steven, Peter

friends[0] = 'Jay';
console.log(friends); // Jay, Steven, Peter
```

Solo los valores primitivos son inmutables, no se pueden cambiar pero los Array no es un valor primitivo por eso simpre podemos cambiarlo para poder tener distintos y nuevos elementos.

Podemos remplazar los elementos de un Array aunque hayan sido declaradas con un `const`. Lo que no podemos hacer es remplazar el Array completamente.

JavaScript tiene algunas funciones integradas que básicamente podemos aplicar directamente a los Arrays y estos se denominan métodos y son operaciones de Arrays. Hay innumerables métodos en JavaScript.

**Push** el método `push()` agrega elementos al final del Array

```javascript
const friends = ['Michael', 'Steven', 'Peter'];
friends.push('John');

console.log(friends);
// Michael, Steven, Peter, John
```

**Unshift** el método `unshift()` agrega elementos al principio del Array

```javascript
const friends = ['Michael', 'Steven', 'Peter'];
friends.unshift('Jay');
console.log(friends);
```

**Pop** el método `pop()` remueve el último elemento de un Array

```javascript
const friends = ['Michael', 'Steven', 'Peter'];

console.log(friends.pop());
```

**Shift** el método `shift()` elimina el primer elemento de un Array

```javascript
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends.shift());
```

**indexOf** el método `indexOf()` nos dice en qué posición se encuentra un determinado elemento en un Array. Se escribe el método y se le pasa el elemento que necesitamos y devuelve el índice de ese elemento

```javascript
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends.indexOf('Steven'));
```

**includes()** el método `includes()` retornara `true`si el elemento está incluido en el Array y `false` si no lo está

```javascript
const friends = ['Michael', 'Steven', 'Peter'];

console.log(friends.includes('Steven')); // true
console.log(friends.includes('Bob')); // false
```

Con el método `includes()` podemos escribir condicionales

```javascript
const friends = ['Michael', 'Steven', 'Peter'];

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}
```

### Intro a los Objetos

Aprenderemos sobre otra Estructura de Datos llamada Objetos

```javascript
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};
```

Podemos obtener el valor de los elementos del Objeto de dos formas: con un `.` y con `[]`

```javascript
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};

console.log(jonas.lastName);
console.log(jonas['lastName']);
```

### Metodo de los Objetos

Los objetos al igual que los arrays pueden contener diferentes tipos de datos y pueden tener inlcuso arrays además de objetos dentro de objetos.

```javascript
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  // Object Methods
  calcAge: function (birthYear) {
    return 2037 - this.birthYear;
  },
};
console.log(jonas.calcAge(1991));
```

### Iteration: The for Loop

```javascript
// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
```

### Looping Arrays, Breaking and Continuing

```javascript
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true,
];
const types = [];

// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does NOT exist

for (let i = 0; i < jonas.length; i++) {
  // Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  // Filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);
```

### Looping Backwards and Loops in Loops

```javascript
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true,
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}
```

### The while Loop

```javascript
for (let rep = 1; rep <= 10; rep++) {
console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 10) {
// console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
rep++;
}

let dice = Math.trunc(Math.random() \* 6) + 1;

while (dice !== 6) {
console.log(`You rolled a ${dice}`);
dice = Math.trunc(Math.random() \* 6) + 1;

if (dice === 6) console.log('Loop is about to end...');
}
```

## Learning How to Code

### 💥 ¿Cómo fallar al aprender a codificar?

💥 No tenía un objetivo claro al comienzo de su viaje.

💥 Empezó viendo cursos y leyendo tutoriales, pero simplemente copiaba el código sin importar cómo funciona. ¡A veces simplemente copiaba y pegaba el código!

💥 No reforzó lo que estaba aprendiendo haciendo pequeños desafíos o tomando notas

💥 No practicó la codificación y no se le ocurrieron sus propias ideas de proyectos.

💥 Rápidamente se sintió frustrado cuando su código no estaba perfectamente limpio o eficiente

💥 Perdió la motivación porque pensó que nunca podría saberlo todo

💥 Estaba aprendiendo de forma aislada

💥 Después de terminar un par de cursos, pensó que ahora era desarrollador web y
podría comenzar a postularse para trabajos. Pero ni siquiera podía crear una aplicación por su cuenta

### 🚀 ¿Cómo tener éxito al aprender a codificar?

**No tenía un objetivo claro en el comienzo de su viaje**

🚀 Establezca un valor específico, medible meta realista y basada en el tiempo

🚀 Sepa exactamente por qué está
aprender a codificar: cambiar carreras? ¿Encontrar un trabajo mejor?

🚀 Imagina un gran proyecto que quiero poder construir!

🚀 Investiga las tecnologías que
necesita y luego aprende

**Él simplemente copiaría el código sin importar cómo funciona. A veces el solo copiar y pegar el código!**

🚀 Entender el código que estás estudiando y escribiendo

🚀 Escriba siempre el código, no
copiar pegar

**No reforzó lo que estaba aprendiendo haciendo pequeños desafíos o tomando notas**

🚀 Después de aprender una nueva característica o concepto, úselo inmediatamente

🚀 Tomar notas

🚀 Ponte a prueba y practicar con codificación pequeña ejercicios y retos

🚀 No tenga prisa por completa el curso rápido

**No practicaba la codificación y no se le ocurrían sus propias ideas de proyectos.**

🚀 Practicar por tu cuenta es el lo más importante que hacer

🚀 ¡Esto NO es opcional! Sin practicar fuera de los cursos, ¡no irás a ningún lado!

🚀 Crea tu propia ideas de proyectos o copias populares sitios o aplicaciones, o simplemente partes de ellos al principio

🚀 No te quedes atrapado en el "infierno del tutorial"

**Rápidamente se frustró cuando su código no era perfectamente limpio o eficiente**

🚀 No te quedes atascado tratando de escribir ¡el código perfecto!

🚀 Solo escribe toneladas de código, no importa la calidad!

🚀 Un código limpio y eficiente ven con tiempo

🚀 Siempre puede refactorizar el código mas tarde

**Perdió la motivación porque pensó que nunca lo sabría todo**

El mayor error que tiene la gente! Los cursos son increíbles punto de partida, pero son solo el comienzo de su viaje

### Conviertase en un solucionador de problemas

Asegurarse de que comprende al 100 por ciento el problema, retroceda y observe el panorama general de alto nivel. Y la parte más importante del paso es hacer las preguntas correctas para tener una idea clara de todo el problema.

Y la mejor manera de entender esto es probablemente mirar un ejemplo juntos aquí.

Entonces, digamos que está trabajando en alguna empresa en algún proyecto, y luego su gerente de proyecto viene y le dice que necesitamos una función que invierta todo lo que le pasamos. Y eso es todo, ya conoces el problema.

¿Pero lo entiendes al cien por cien?

Bueno, probablemente no, ¿verdad?

Yo se que no lo hago.

Así que hagamos las preguntas correctas para llegar allí.

Primero, podemos preguntarnos, ¿qué significa realmente lo que sea en este contexto?

Entonces, ¿qué debería revertirse aquí?

Bueno, y si lo pensamos bien, solo tiene sentido invertir los números de las cadenas y borrar los objetos que no tienen un orden bien definido, por lo que no podemos revertirlos. Tampoco vamos a revertir, como indefinido, nulo o booleano.

Luego, después de haber resuelto eso, podemos preguntarnos, ¿qué debemos hacer si se pasa algo más que no sea un número de cadena o matriz? ¿Cómo vamos a manejar eso?

También es relevante preguntar qué debe devolverse exactamente de la función, por ejemplo, siempre debe ser una cadena o si el vínculo debe ser el mismo que se pasó.

Bueno, en este caso, probablemente siempre deberíamos devolver exactamente el mismo tipo que se pasó. Además, podemos comenzar a hacer preguntas más orientadas a la solución, ¿cómo reconocer si el argumento es un número, una cadena o una matriz, o cómo invertir realmente una serie de cadenas y una matriz?

Estas son solo algunas de las preguntas que podemos hacer aquí.

Estoy seguro de que hay más, pero esto ya debería darnos una imagen mucho más clara de este problema.

### JavaScript en el Browser: DOM y Eventos

El DOM es la representación estructurada de documentos en HTML. Permite a JavaScript acceder a los elementos HTML y estilos para manipularlos.

Por ejemplo: podemos cambiar texto, cambiar atributos HTML y también podemos cambiar estilos desde nuestro código de JavScript. Entonces podríamos decir que el DOM es básicamente un punto de conexión entre documentos HMTL y el código JavaScript

![dom](https://github.com/hugoorlando/javascript/blob/main/img/js_13.png)

![dom](https://github.com/hugoorlando/javascript/blob/main/img/js_14.png)

Los métodos del DOM y las propiedas para manipular el DOM no son parte de JavaScript, ya que JS es simplemente un lenguaje de programación y el DOM no se encuentra dentro de la especificación ECMAScript.

El DOM y sus métodos son parte de algo llamado API Web.

Las Web APIs son librerías que implementan los navegadores y a las que podemos acceder desde nuestro código JavaScript

**API** significa `Interfaz de Programación de Aplicaciones`. Las Web APIs están escritas en JavaScript y están disponibles automáticamente para que las utilicemos.

![dom](https://github.com/hugoorlando/javascript/blob/main/img/js_15.png)

### Data Structures, modern operators and strings

**Destructuring Arrays**

Es una característica de ES6 y es básicamente una forma de descomprimir los valores de un array o un objeto en variables separadas.

La desestructuración consiste en dividir una estructura de datos compleja e una estructura de datos más pequeña una variable.

Para los arrays, usamos esta desestructuración para recuperar elementos de la matraiz y almacenarlos en variables de una manera muy fácil.

Ejemplo:

```javascript
const paises = ['Arg', 'Brl', 'Py'];
const [a, b, p] = paises;

console.log(a, b, p);
// Arg Brl Py
```

Declaramos el array

`const paises = ['Arg', 'Brl', 'Py'];`

Creamos dentro de corchetes variables que guarden los valores de los elementos del array. Esto es la asignación del array

`const [a, b, p] = paises;`

Mostramos en consola los valores del array

`console.log(a, b, p);`

```javascript
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};
const [first, second] = restaurant.categories;
console.log(first, second);
```

Podemos crear una funcion en nuestro objeto y desestructurar el objeto

```javascript
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
```

Para desestructurar objetos utilizamos `{}` porque así es como creamos objetos

```javascript
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
```

### Spread operator

Utilizamos el `Spread operator` para expandir un array en todos sus elementos

Creamos un array llamado `arr` junto con sus elementos. Luego creamos otro array que contendrá nuevos elementos junto el con el primer array creado utilizando el `spread operator` para expandir el primer array en el nuevo array newArr

```javascript
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];

console.log(newArr);
// [ 1, 2, 3, 4, 5 ]

console.log(...newArr);
// 1, 2, 3, 4, 5
```

El `Spread operator` toma todos los elementos del array y también crea nueva variables y por eso solo podemos usarlo en lugares donde de otra manera escribiríamos valores separados comas.

También funciona con todos los iterables. La mayoría de las estructura de datos integradas en JavaScript son iterables, excepto los objetos.

**Iterables:** `arrays, strings, maps, sets. NOT objects`

### Rest Pattern and Parameters

```javascript
// REST, because on LEFT side on =
const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(a, b, others);
// 1 2 [ 3, 4, 5 ]
```

### Short circuiting

```javascript
// OR
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// AND
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
```

### The For-of Loop

```javascript
const menu = [0, 2, 5, 8, 10];

for (const item of menu) console.log(item);
```

Para recorrer el indice del array podemos hacerlo con `.entries()`

```javascript
for (const item of menu.entries()) {
  console.log(item);
}
```

Podemos también desestructurar el array en el for-of loop

```javascript
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
```

### Optional Chaining "?"

El Optional Chaining "?" previene cualquier tipo de error que no podamos contemplar a simple vista

```javascript
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
```

Tambien se puede utilizar con arrays

```javascript
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
```

### Looping Object

```javascript
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

// Property NAMES
console.log('--- Property names ---');
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
console.log('--- Property values ---');
const values = Object.values(openingHours);
console.log(values);

// Entries VALUES
console.log('--- Entries values ---');
const entries = Object.entries(openingHours);
console.log(entries);

console.log('--- For loop Entries values ---');
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
```

### Sets

Es una colección de valores únicos, lo que significa que los `Sets` nunca pueden tener duplicados y esa propiedad lo hace útiles para ciertas situaciones.

Un `Set` no contiene clave-valor sino que son un conjunto de valores que no permiten duplicados

```javascript
const num = [1, 2, 3, 3, 3, 3, 4, 5];

const orderSet = new Set(num);
console.log(orderSet);

// Set { 1, 2, 3, 4, 5 }
```

Al igual que los arrays los `Set` también son iterables

```javascript
console.log(new Set('Hola'));
```

Para saber si existe un elemento en nuestro `Set` utilizamos `.has()`

```javascript
const str = ['Paraguay', 'Francia', 'Argentina', 'Sudafrica'];

const orderSet = new Set(str);

console.log(orderSet.has('Pizza'));
// false

console.log(orderSet.has('Argentina'));
// true
```

También podemos agregar nuevos elemenos a un `Set`

```javascript
const str = ['Paraguay', 'Francia', 'Argentina', 'Sudafrica'];

const orderSet = new Set(str);

orderSet.add('Australia');
// true
```

También podemos eliminar elementos

```javascript
const str = ['Paraguay', 'Francia', 'Argentina', 'Sudafrica'];

const orderSet = new Set(str);

orderSet.delete('Francia');
// true
```

Los `Sets` no contienen indices. Tammbién podemos eliminar todos los elementos del `Set` utilizando `.clear()`

```javascript
const num = [1, 2, 3, 4, 5];

const orderSet = new Set(num);

orderSet.clear();

console.log(orderSet);
```

Podemos iterar los `Sets`

```javascript
const num = [1, 2, 3, 4, 5];

const orderSet = new Set(num);

for (const order of orderSet) {
  console.log(order);
}
```

Tambien podemos convertir un `Set` en un array

```javascript
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const stafUnique = [...new Set(staff)];

console.log(stafUnique);
// [ 'Waiter', 'Chef', 'Manager' ]
```

Los `Set` no estan destinados a reemplazar a los array. Siempre que necesite valores en orden y eso pueda contener duplicados, usemos siempre un array. Debemos tener en cuanto a los `Set` cuando debamos trabajar con valores no duplicados, es decir: únicos

### Maps

`Map` es una estructura de datos que podemos usar para asignar valores a claves. Al igual que los objetos, un `map`se puede almacenar en pares `clave-valor`.

Ahora, la gran diferencia entre objetos y mapas es que en los mapas las claves pueden tener cualquier tipo de valor y esto puede ser útil. En un objeto, las claves son básicamente siempre cadenas pero en las `maps` podemos tener cualquier tipo de clave; incluso podrían ser objetos o arrays u otros maps

**Metodos de los Map**

`set()` recibe los valores para el Map

```javascript
const rest = new Map();
rest.set('name', 'Clasico Argentino');
rest.set(1, 'Buenos Aires, Argentina');
rest.set(2, 'Fiorentina, Italia');

console.log(rest);
```

`get()` devuelve los valores de los Map

```javascript
const rest = new Map();
rest.set('name', 'Clasico Argentino');

console.log(rest.get('name'));
```

`has()` devuelve `true` si la clave existe o `false` si no existe

```javascript
const rest = new Map();
rest.set('name', 'Clasico Argentino');

console.log(rest.has('name'));
```

`size` devuelve el tamaño del Map

```javascript
const rest = new Map();
rest.set('name', 'Clasico Argentino');
rest.set(1, 'Buenos Aires, Argentina');
rest.set(2, 'Fiorentina, Italia');

console.log(rest.size);
```

`clear()` elimina todo el Map

```javascript
const rest = new Map();
rest.set('name', 'Clasico Argentino');
rest.set(1, 'Buenos Aires, Argentina');
rest.set(2, 'Fiorentina, Italia');

rest.clear();
```

También los `Map` pueden recibir arrays

```javascript
const arr = [1, 2, 3];

const arrMap = new Map();
arrMap.set(arr, 'Test');

console.log(arrMap.get(arr));
```

### Maps: iteracion

```javascript
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
```

Para iterar los `Map` utilizamos los pares `clave-valor` como en este ejemplo: `[key, value]`

**entries, keys & values**

```javascript
console.log([...paises.entries()]);
console.log([...paises.keys()]);
console.log([...paises.values()]);
```

### Convertir un Map en Array

```javascript
const paises = new Map([
  [1, 'Argentina'],
  [2, 'Paraguay'],
  [3, 'Brasil'],
  [4, 'Uruguay'],
]);

console.log([...paises]);
```

### ¿Qué estructura de datos elegir?

**¿Solo necesitamos una lista simple de valores?**

Si es asi, usaremos un `array o un set` pero si necesitamos pares `clave-valor`, entonces necesitamos un `objeto o un map`

La diferencia es que con un par `clave-valor` tenemos una forma de describir los valores mientras que en una lista como un array o un set solamente tenemos los valores

**Arrays vs Sets**

Debemos usar un `array` siempre que se necesite almacenar valores en orden y cuando estos valores puedan contener duplicados. También siempre debemos usar un `array` cuando necesitemos manipular datos porque hay un montón de `métodos de array` útiles

Debemos usar un `set` solo cuando se trabaja con valores únicos y no necesitamos duplicados. También podemos utilizar `set` en situaciones en las que el alto rendimiento es realmente importante porque operaciones como buscar un elemento o eliminar un elemento de un `set` pueden ser inserciones de hasta 10 veces más rápidas que en un `array`

Otro uso de un `set` es para eliminar valores duplicados de un `array`

Los `Sets` no estan destinados a reemplazar a un `Array` pero si a complementarlos siempre que se trate de valores únicos

**Objetos vs Maps**

Debemos usar estas estructuras de datos de valores clave siempre que necesitemos describir los valores usando claves.

Los `Objetos` han sido la estructura tradicional de datos de valores `clave` simplemente porque no teníamos `maps` anteriormente a ES6. Pero usar objetos simplemente como almacenes de valores clave tien un par de desventajas técnicas

Los `Maps` son mucho mejores para `clave-valor` simples porque ofrecen un mejor rendimiento. Las claves de `map` pueden tener cualquier tipo de datos y también son fáciles de iterar y es fácil de calcular el tamaño de un mapa

En resumen: debe usar `map` cuando simplemente necesite asignar claves a valores y también cuando necesite claves que no sean string

Para trabajar con datos JSON probablemente usaremos objetos

### String y sus métodos

**indexOf() & lastIndexOf()**

Con `indexOf()` podemos llegar a la posición en la que una determinada letra está en el string.

```javascript
const airline = 'TAP Air Portugal';

console.log(airline.indexOf('r'));
```

Con `indexOf()` solamente tendremos la posición de la primera aparición pero a veces necesitamos la última y para ello usamos: `lastIndexOf()`

```javascript
const airline = 'TAP Air Portugal';

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
```

**slice()**

Podemos extraer las palabras con `slice()`. Por ejemplo:

```javascript
const airline = 'TAP Air Portugal';

console.log(airline.slice(4));
// Air Portugal
```

`airline.slice(4)` es la posición en la que comenzará la extracción; en este caso desde la posición 4 en adelante

Podemos declarar un posicion de inicio y también una posicion final.

En este ejemplo el `slice` inicia en la posicion 4 y termina en la posicion 7

```javascript
const airline = 'TAP Air Portugal';

console.log(airline.slice(4, 7));
// Air
```

### Metodos de Array

```javascript
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
```

### ForEach

```javascript
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.forEach((movement, index, array) => {
  movement > 0
    ? console.log(`Movement ${index + 1}: You deposited ${movement}`)
    : console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
});
```

`(movement, index, array)` es la forma de escribir un forEach para poder iterarlo. En este caso `movement` es el elemento principal, `index` es el índice del forEach y `array` representa que se está trabajando con una array

El orden debe ser como está escrito aquí:
`(movement, index, array)`

`forEach` siempre recorrera el array completamente
por ello si necesitamos salir de un bucle, entonces debemos utilizar un `for loop` normal: `for (let i=0; i > 10; i++)`

**forEach con Map**

```javascript
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});
```

**forEach con Set**

```javascript
const currSet = ['USD', 'USD', 'EUR', 'GBP', 'GBP'];
const currenciesUnique = new Set(currSet);

currenciesUnique.forEach(value => {
  console.log(`${value}`);
});
```

### Map, Filter, Reduce

**Map**

Map devuelve una nueva matriz que contiene los resultados de aplicar una operación en todos los elementos originales de la matriz. En este ejemplo vamos a multiplicar cada elemento por 2 y retornara un nuevo array con los valores multiplicados por dos

```javascript
const a = [3, 1, 4, 5, 3, 2];
a.map(item => item * 2);
```

**Filter**

Retorna una nueva matriz que contiene los elementos de la matriz que pasó una condición de prueba especificada. En este ejemplo vamos a filtrar todos los elementos mayores a 3

```javascript
const a = [3, 1, 4, 5, 3, 2];
a.filter(item => item > 3);
```

Todos los elementos que pasen la prueba se convertirán en un nuevo array filtrado

**Reduce**

Usamos para reducir todos los elementos del array original en un solo valor y un ejemplo de esto puede ser sumar todos los elementos de un array

```javascript
const a = [3, 1, 4, 5, 3, 2];
a.reduce((acc, curr) => acc + curr, 0);
```

![transformacion de datos](https://github.com/hugoorlando/javascript/blob/main/img/map_filter_reduce.png)
