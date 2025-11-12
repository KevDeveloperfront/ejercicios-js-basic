//Declara tres variables para almacenar números y compáralas para encontrar la mayor.

let a = 10, b = 25, c = 15;

if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else {
  console.log(c);
}


// 2. Declare three variables to store number and determine what kind of triangle they would be.

let d = 10, e = 12, f = 10;

if (d === e && e === f && d === f) {
  console.log("Equilatero");
} else if (d === e || e === f || d === f) {
  console.log("Isosceles");
} else {
  console.log("Escaleno");
}


// 3. Create a simple login system that compare an username and password with constant values and allows the access if both coincide
// Optional: Generate a customized message based on which value fails, if any.

// 4. Determine tax bracked based on income according to:
// - Less or equal to 1000: 0% tax
// - Less or equal to 3000: 10% tax
// - Less or equal to 6000: 20% tax
// - Everything above: 30% tax

let income = 8350;
let result;

const diez = 10;
const veinte = 20;
const treinta = 30;

if (income <= 1000) {
  console.log("0% tax");
} else if (income <= 3000) {
  result = (diez / 100) * income;
  console.log("Tus impuestos o tax son: " + result + " que serian el 10% tax");
} else if (income <= 6000) {
  result = (veinte / 100) * income;
  console.log("Tus impuestos o tax son: " + result + " que serian el 20% tax");
} else if (income > 6000) {
  result = (treinta / 100) * income;
  console.log("Tus impuestos o tax son: " + result + " que serian el 30% tax");
} else {
  console.log("Tus calculos de impuestos no son correctos");
}