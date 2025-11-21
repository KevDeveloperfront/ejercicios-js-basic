//Ejercicios de funciones en Js

/**
 * Pedir al usuario que ingrese una serie de calificaciones
 * separadas por comas a través de un prompt y luego calcular:
 * - La cantidad de calificaciones ingresadas.
 * - El promedio de las calificaciones.
 * - La calificación más alta y la más baja.
 * - Mostrar los resultados en una alerta.
 * 
 * Pista: Se deberá convertir la cadena ingresada en un array.
 * Requisito: Usar funciones :3
 */

alert("Bienvenidos al Portal de la U.E.D.K.D");
let user = prompt("Ingrese su Usuario: ");
let pass = prompt("Ingrese su Contraseña: ");
if (user !== "admin" || pass !== "1234") {
  alert("Credenciales inválidas. Sesión terminada.");
} else {
  alert("Bienvenido, " + user);
} 

 let input = prompt("Ingrese las notas separadas por comas (ej: 15, 12, 08, 15, 16): ");

 let notas = stringAarrys(input);

 function stringAarrys(string) {
   let notas = string.split(",");
   return notas
   .map(notas => parseInt(notas))
   .filter(notas => !isNaN(notas));
 }

 if (notas.length === 0) {
  alert("No has ingresado ninguna de las notas, favor vuelva a intentar ingresar las notas");
 } else {
  let cantidad = calcularCantidad(notas);
  let promedio = calcularPromedio(notas);
  let masAlta = calcularMasAlta(notas);
  let masBaja = calcularMasBaja(notas);
  alert("Cantidad de notas ingresadas: " + cantidad);
  alert("Promedio de notas: " + promedio);
  alert("Nota más alta: " + masAlta);
  alert("Nota más baja: " + masBaja);
 }

 // funcion para calcular cantidad de notas

 function calcularCantidad(notas) {
  return notas.length;
 }

 // funcion para calcular promedio de notas

 function calcularPromedio(notas) {
  let suma = 0;
  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }
  return suma / notas.length;
 }
 
 // funcion para calcular la nota mas alta

function calcularMasAlta(notas) {
  return Math.max (...notas);
}

// funcion para calcular la nota mas baja

function calcularMasBaja(notas) {
  return Math.min (...notas);
}







/**
 * Pedir al usuario que ingrese un número a través de un prompt
 * (validando que sea un valor válido) y luego mostrar en una alerta
 * todos los números primos menores o iguales al número ingresado.
 * 
 * Pista: Un número primo es aquel que solo es divisible por 1 y
 * por sí mismo.
 */

function isPrime(num){
  if (num <= 1) return false;

  if (num === 2) return true;

  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

let num = prompt("Ingrese un número: ");
let numbers = [];

if (!isNumber(num) || num < 1) {
  alert("Entrada inválida. Debe ser un número mayor o igual a 1.");
  throw new Error("Invalid input");
} 

for (let i = 2; i <= num; i++) {
  numbers.push(i);
}
console.log(numbers);











/**
 * Crear una función que simule el lanzamiento de dos dados.
 * La función deberá ejecutarse hasta que ambos dados muestren el
 * mismo número (es decir, se obtenga un par).
 * 
 * Al finalizar, mostrar en una alerta cuántos lanzamientos
 * fueron necesarios para obtener el par.
 */

// Requisito para todos: Usar funciones :3

function getRandomInt(max){
  return Math.floor(Math.random() * max) + 1;
}

let dice1, dice2;

do {
  dice1 = getRandomInt(6) + 1;
  dice2 = getRandomInt(6) + 1;
  rolls++;
  console.log("Dado 1: " + dice1);
  console.log("Dado 2: " + dice2);
} while (dice1 !== dice2);

alert (`Se necesitaron ${rolls} lanzamientos para obtener un par de dados.`);