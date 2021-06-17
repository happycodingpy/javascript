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

## Breve intro a JavaScript

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

////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

////////////////////////////////////
// let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher'

lastName = 'Schmedtmann';
console.log(lastName);

////////////////////////////////////
// Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

////////////////////////////////////
// Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/
```
