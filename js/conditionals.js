// condicionales

// age for driver license
let age = 19;

if (age >= 18) {
  console.log("Congrats! You can have a driver license!");
} else {
  console.log("You're too young to drive, buy a skateboard");
}

// alta temperatura

let temperature = 30;
let isRaining = false;

if (temperature >= 28 && !isRaining) {
  console.log("Se quema el zulia");
}

//Pizza Cuadrado(50$) > McDonals(30$) >= Arturo's (20$)

let people = 5;
let budgetPerPerson = 5;

if (budgetPerPerson * people >= 50) {
  console.log("Pizza Cuadrado");
} else if (budgetPerPerson * people < 50 && budgetPerPerson * people > 30) {
  console.log("McDonals");
} else if (budgetPerPerson * people >= 20) {
  console.log("Arturo's");
} else {
  console.log("No hay salida, sale arepa con quesito");
}

// crea una variable para almacenar la hora actual (0 - 23 horas)
// Segun la hora escribir condicionales y hacer un console.log
//   "Cuando el reloj marca la una, un esqueleto sale de su tumba" if the hour is 1
//   "Cuando el reloj marca la dos, Dos esqueletos comen arroz" if the hour is 2
//   "Tres esqueletos se vuelven al revés" if the hour is 3
//   "Cuatro esqueletos van al teatro" if the hour is 4
//   "Cinco esqueletos pegan un brinco" if the hour is 5
//   "Seis esqueletos se ponen el jersey" if the hour is 6
//   "Siete esqueletos van en patinete" if the hour is 7
//   "Ocho esqueletos comen bizcocho" if the hour is 8
//   "Nueve esqueletos cantan y beben agua" if the hour is 9
//   "Diez esqueletos bailan a la vez" if the hour is 10
//   "Once esqueletos corren veloces" if the hour is 11
//   "Doce esqueletos descansan por la noche y se duermen" if the hour is 12
//   "Trece esqueletos duermen" if the hour is 13 and 23

let hour = 2;

if (hour === 1) {
  console.log("Cuando el reloj marca la una, un esqueleto sale de su tumba");
} else if (hour === 2) {
  console.log("Cuando el reloj marca la dos, Dos esqueletos comen arroz");
} else if (hour === 3) {
  console.log("Tres esqueletos se vuelven al revés");
} else if (hour === 4) {
  console.log("Cuatro esqueletos van al teatro");
} else if (hour === 5) {
  console.log("Cinco esqueletos pegan un brinco");
} else if (hour === 6) {
  console.log("Seis esqueletos se ponen el jersey");
} else if (hour === 7) {
  console.log("Siete esqueletos van en patinete");
} else if (hour === 8) {
  console.log("Ocho esqueletos comen bizcocho");
} else if (hour === 9) {
  console.log("Nueve esqueletos cantan y beben agua");
} else if (hour === 10) {
  console.log("Diez esqueletos bailan a la vez");
} else if (hour === 11) {
  console.log("Once esqueletos corren veloces");
} else if (hour === 12) {
  console.log("Doce esqueletos descansan por la noche y se duermen");
} else if (hour === 13 || hour === 23) {
  console.log("Trece esqueletos duermen");
}

// otra forma de hacerlo

let hours = 5;

if (hours >= 1 && hours <= 5) {
  console.log(
    "Cuando el reloj marca l hasta la 5, los esqueletos salen de su tumba"
  );
} else if (hours >= 6 && hours <= 8) {
  console.log(
    "Cuando el reloj marca las 6 hasta las 8, los esqueletos hacen cositas"
  );
} else if (hours >= 9 && hours <= 11) {
  console.log(
    "cuando el reloj marca las 9 hasta las 11, los esqueletos ya casi se les acaban sus actividades"
  );
} else if (hours >= 12 && hours <= 14) {
  console.log(
    "cuando el reloj marca las 12 hasta las 13, los esqueletos se ponen a dormir"
  );
} else {
  console.log(
    "cuando el reloj marca las 14 hasta las 23, los esqueletos se duermen"
  );
}

// siguiente ejercicio
// crea una variable para almacenar una calificacion numerica (01 - 20)
// Escribir una instrucción condicional que imprima:
//   " 'F' No aprobado" si la calificación es menor a 10
//   " 'D' pasas la materia con baja nota" si la calificación es de 10 a 12
//   " 'C' pasas la materia con nota relativamente baja" si la calificación es de 13 a 15
//   " 'B' pasas la materia con notas aceptables" si la calificación es de 16 a 18
//   " 'A' pasas la materia con notas Excelente" si la calificación es de 19 a 20

let note = 15;

if (note >= 19) {
  console.log("A Notas Excelente");
} else if (note >= 16 && note <= 18) {
  console.log("B Notas Aceptables");
} else if (note >= 13 && note <= 15) {
  console.log("C Notas Relativamente Bajas");
} else if (note >= 10 && note <= 12) {
  console.log("D Baja Nota");
} else {
  console.log("F No Aprobado");
}

// siguiente ejercicio
// tengo que crear una variable llamada dayOfWeek para almacenar el dia de la semana (1 -7 de lunes a domingo)
//escribir como condicionales el dia de la semana
// 1 = lunes
// 2 = martes
// 3 = miercoles
// 4 = jueves
// 5 = viernes
// 6 = sabado
// 7 = domingo

let dayOfWeek = 3;

if (dayOfWeek === 1) {
  console.log("Lunes");
} else if (dayOfWeek === 2) {
  console.log("Martes");
} else if (dayOfWeek === 3) {
  console.log("Miercoles");
} else if (dayOfWeek === 4) {
  console.log("Jueves");
} else if (dayOfWeek === 5) {
  console.log("Viernes");
} else if (dayOfWeek === 6) {
  console.log("Sabado");
} else {
  console.log("Domingo");
}

//siguiente ejercicio
// Creamos variables para determinar que signo zodiacal pertenece la fecha de cumpleaños de una persona
// Aries: 21 de marzo al 19 de abril
//Tauro: del 20 de abril al 20 de mayo
//Géminis: del 21 de mayo al 20 de junio
//Cáncer: del 21 de junio al 22 de julio
//Leo: del 23 de julio al 22 de agosto
//Virgo: del 23 de agosto al 22 de septiembre
//Libra: del 23 de septiembre al 22 de octubre
//Escorpio: del 23 de octubre al 21 de noviembre
//Sagitario: del 22 de noviembre al 21 de diciembre
//Capricornio: del 22 de diciembre al 19 de enero
//Acuario: del 20 de enero al 18 de febrero
//Piscis: del 19 de febrero al 20 de marzo

let day = 8;
let month = 4;

if (month = 3 && day >= 21) {
  console.log(
    "Pertences a la casa de Aries y tu cabello del zodiaco es Mu de Aries"
  );
} else if (month = 4 && day <= 19) {
  console.log(
    "Pertences a la casa de Aries y tu cabello del zodiaco es Mu de Aries"
  );
} else if (month = 4 && day >= 20) {
  console.log(
    "Pertences a la casa de Tauro y tu cabello del zodiaco es Aldebarán de Tauro"
  );
} else if (month = 5 && day <= 20) {
  console.log(
    "Pertences a la casa de Tauro y tu cabello del zodiaco es Aldebarán de Tauro"
  );
} else if (month = 5 && day >= 21) {
  console.log(
    "Pertences a la casa de Geminis y tu cabello del zodiaco es Saga de Geminis"
  );
} else if (month = 6 && day <= 20) {
  console.log(
    "Pertences a la casa de Geminis y tu cabello del zodiaco es Saga de Geminis"
  );
} else if (month = 6 && day >= 21) {
  console.log(
    "Pertences a la casa de Cancer y tu cabello del zodiaco es Mascara de muerte de Cancer"
  );
} else if (month = 7 && day <= 22) {
  console.log(
    "Pertences a la casa de Cancer y tu cabello del zodiaco es Mascara de muerte de Cancer"
  );
} else if (month = 7 && day >= 23) {
  console.log(
    "Pertences a la casa de Leo y tu cabello del zodiaco es Aioria de Leo"
  );
} else if (month = 8 && day <= 22) {
  console.log(
    "Pertences a la casa de Leo y tu cabello del zodiaco es Aioria de Leo"
  );
} else if (month = 8 && day >= 23) {
  console.log(
    "Pertences a la casa de Virgo y tu cabello del zodiaco es Shaka de Virgo"
  );
} else if (month = 9 && day <= 22) {
  console.log(
    "Pertences a la casa de Virgo y tu cabello del zodiaco es Shaka de Virgo"
  );
} else if (month = 9 && day >= 23) {
  console.log(
    "Pertences a la casa de Libra y tu cabello del zodiaco es Dohko de Libra"
  );
} else if (month = 10 && day <= 22) {
  console.log(
    "Pertences a la casa de Libra y tu cabello del zodiaco es Dohko de Libra"
  );
} else if (month = 10 && day >= 23) {
  console.log(
    "Pertences a la casa de Escorpio y tu cabello del zodiaco es Milo de Escorpio"
  );
} else if (month = 11 && day <= 21) {
  console.log(
    "Pertences a la casa de Escorpio y tu cabello del zodiaco es Milo de Escorpio"
  );
} else if (month = 11 && day >= 22) {
  console.log(
    "Pertences a la casa de Sagitario y tu cabello del zodiaco es Aioros de Sagitario"
  );
} else if (month = 12 && day <= 21) {
  console.log(
    "Pertences a la casa de Sagitario y tu cabello del zodiaco es Aioros de Sagitario"
  );
} else if (month = 12 && day >= 22) {
  console.log(
    "Pertences a la casa de Capricornio y tu cabello del zodiaco es Sura de Capricornio"
  );
} else if (month = 1 && day <= 19) {
  console.log(
    "Pertences a la casa de Capricornio y tu cabello del zodiaco es Sura de Capricornio"
  );
} else if (month = 1 && day >= 20) {
  console.log(
    "Pertences a la casa de Acuario y tu cabello del zodiaco es Camus de Acuario"
  );
} else if (month = 2 && day <= 18) {
  console.log(
    "Pertences a la casa de Acuario y tu cabello del zodiaco es Camus de Acuario"
  );
} else if (month = 2 && day >= 19) {
  console.log(
    "Pertences a la casa de Piscis y tu cabello del zodiaco es Aphrodita de Piscis"
  );
} else if (month = 3 && day <= 20) {
  console.log(
    "Pertences a la casa de Piscis y tu cabello del zodiaco es Aphrodita de Piscis"
  );
} else {
  console.log("aun no has nacido, No pertences a ningun zodiaco");
}
