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

```

```
