// Declarar dos varibles

let a = 10;
let b = 3;

let remainder = a % b;
console.log(remainder)

// siguiente ejercicio
// declarar una variable age y asignarle un valor

let age = 20;
let isAdult = age >= 18;
console.log(isAdult)

// siguiente ejercicio
// declara una variable booleana isRandom y asignarle un valor

let isRandom = false;

let shoulStayInside = !isRandom;
console.log(shoulStayInside)

// siguiente ejercicio
// delacara una variable counter = 5 y usa un post-incrementer para aumentar su valor en 1

let counter = 5;
counter++;
console.log(counter)

// siguiente ejercicio
// una configuracion es valida si su estatus es un booleano o es un level

let status = null;
let level = 75;
let isValidConfig = (typeof status === 'boolean' || level > 50);
console.log(isValidConfig);

// siguiente ejercicio
// calcula el resultado de las expresiones (5*4) + (20/5) - 3

let result = (5*4) + (20/5) - 3;
console.log(result)

// siguiente ejercicio
// declarar numString = '5' y numInt = 5 y comparar si son iguales

let numString = '5';
let numInt = 5;
let looseResult = numString == numInt;
let StrictResult = numString === numInt;
console.log(looseResult);
console.log(StrictResult);

// siguiente ejercicio
// define el valor final  de x despues de following operations

let x = 10;
x = x * 2 + 5 % 3;
console.log(x);

// siguiente ejercicio
// determina if an integer year = 2024 is a leap year using only operators, other forms of code are not allowed

let year = 2024;
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
console.log(isLeapYear);