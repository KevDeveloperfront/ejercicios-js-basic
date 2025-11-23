// Ejercicios para practicar clases en JS

//Crea una clase llamada circle que tenga una propiedad radio y un metodo para calcular el
//area del circulo.

class Circle {
  constructor(radio) {
    this.radio = radio;
  }

  area() {
    let area = Math.PI * this.radio ** 2;
    return area;
  }
}

let circulo = new Circle(prompt("Ingrese el radio del circulo: "));
console.log("El area del circulo es: " + circulo.area());
alert("El area del circulo es: " + circulo.area());

/**
 * Crea una clase llamada person con propiedades como nombre apellido y edad, y un metodo para mostar
 * un instruccion personalizada.
 */

class ninja {
  constructor(name, lastName, age, clan, rango, aldea) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.clan = clan;
    this.rango = rango;
    this.aldea = aldea;
  }
  introduce() {
    console.log(
      `Mi nombre es ${this.name} ${this.lastName} y tengo el rango ${this.rango} en la aldea ${this.aldea}`
    );
  }
}

/**
 * Crea otras 3 clases que hereden de Person: Student, Teacher y Manager. Cada uno debe tener propiedades y metodos adicionales especificos.
 * Student: grade, enrollment (array de materias), study() (metodo que imprima un mensaje)
 * Teacher: subjects (array de materias), teach() (metodo que imprima un mensaje), salary
 * Manager: Departament, employees (array de empleados), manage() (metodo que imprima un mensaje)
 */

class Kage extends ninja {
  constructor(name, lastName, age, clan, rango, aldea, departamento) {
    super(name, lastName, age, clan, rango, aldea);
    this.departamento = departamento;
  }
  administra() {
    console.log(
      `El ${this.rango} ${this.name} administra la aldea de ${this.aldea} siendo el ${this.departamento}`
    );
  }
}

class Jounin extends ninja {
  constructor(name, lastName, age, clan, rango, aldea, asignatura, salario) {
    super(name, lastName, age, clan, rango, aldea);
    this.asignatura = asignatura;
    this.salario = salario;
  }
  instructor() {
    console.log(
      `El ${this.rango} ${this.name} enseña ${this.asignatura} con un salario de ${this.salario}`
    );
  }
}

class Genin extends ninja {
  constructor(
    name,
    lastName,
    age,
    clan,
    rango,
    aldea,
    asignaturas = [],
    grado
  ) {
    super(name, lastName, age, clan, rango, aldea);
    this.asignaturas = asignaturas;
    this.grado = grado;
  }
  estudiante() {
    console.log(
      `El ${this.rango} ${this.name} estudia las diferentes artes de ${this.asignaturas} en el año ${this.grado}`
    );
  }
}

let ninja1 = new Kage(
  "Hiruzen",
  "Sarotubi",
  69,
  "Sarutobi",
  "Kage",
  "Konoha",
  "Hokage"
);
let ninja2 = new Jounin(
  "Iruka",
  "Umino",
  23,
  "Umino",
  "Chunin",
  "Konoha",
  "Instructor",
  "1000000$"
);
let ninja3 = new Genin(
  "Neji",
  "Hyuga",
  13,
  "Hyuga",
  "Genin",
  "Konoha",
  ["Taijutsu", "Ninjutsu", "Genjutsu"],
  "3ser Grado"
);

ninja1.introduce();
ninja1.administra();

ninja2.introduce();
ninja2.instructor();

ninja3.introduce();
ninja3.estudiante();

/**
 * Ejercicios
 *
 * Crea una clase llamada Circle que tenga una propiedad radio
 * y un método para calcular el área del círculo.
 *
 * Crea una clase llamada Person con propiedades como nombre,
 * apellido y edad, y un método para mostrar una introducción
 * personal.
 * Crea otras 3 clases que hereden de Person: Student, Teacher
 * y Administrator. Cada una debe tener propiedades y métodos
 * adicionales específicos.
 * - Student: grade, enrollment (array de materias), study() (método
 * que imprima un mensaje)
 * - Teacher: subject, salary, teach() (método que imprima un
 * mensaje)
 * - Administrator: department, manage() (método que imprima un
 * mensaje)
 */

/**
 * Classes
 *
 * A class is a blueprint for creating objects with predefined
 * properties and methods.
 */

// class Person {
//   constructor(firstName, lastName, age, country = "Venezuela") {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//   }

//   greet() {
//     console.log("Hello!");
//   }

//   introduce() {
//     console.log(
//       `My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old. I live in ${this.country}.`
//     );
//   }
// }

// let person1 = new Person("José", "Guillen", 30, "USA");
// let person2 = new Person("Daniel", "Miranda", 25);

// console.log(person1);
// console.log(person2);

// console.log(person1.firstName);
// console.log(person2.age);

// person1.greet();

// person2.introduce();

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   eat() {
//     console.log(`${this.name} is eating.`);
//   }

//   sleep() {
//     console.log(`${this.name} is sleeping.`);
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name);
//     this.breed = breed;
//   }

//   bark() {
//     console.log("Woof! Woof!");
//   }

//   searchBall() {
//     console.log(`${this.name} is searching for the ball.`);
//   }
// }

// class Cat extends Animal {
//   constructor(name, color) {
//     super(name);
//     this.color = color;
//   }

//   meow() {
//     console.log("Meow! Meow!");
//   }

//   chaseMouse() {
//     console.log(`${this.name} is chasing a mouse.`);
//   }
// }

// let perrito = new Dog("Firulais", "Labrador");
// let gatito = new Cat("Mittens", "Gray");

// console.log(perrito);
// console.log(gatito);

// perrito.bark();
// perrito.searchBall();
// perrito.eat();
// perrito.sleep();

// gatito.meow();
// gatito.chaseMouse();
// gatito.eat();
// gatito.sleep();
