// Loops

// para obtener una punta afilada, necesitamos girar el lapiz 5 veces en el sacapuntas

let count = 0;
while (count < 5) {
  console.log("Girando el lapiz");
  count++;
}

//---------------------------------------------------

//ejercicio 1 - crea un script para imprimir si un numero es par o inpar del uno al 20

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " es par");
  } else {
    console.log(i + " es impar");
  }
}

//---------------------------------------------------

//ejercicio 2 - crea un script capas de sumar todos los valores de una variable luego de 100 iteraciones

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);


// Practica: Crea un script para contar numero del 20 al 0 y mostar un mensaje en pantalla si el numero es multiplo de 5 

let counts = 20;
while (counts >= 0) {
  if (counts % 5 === 0) {
    console.log(counts + " es multiplo de 5");
  }
  counts--;
}