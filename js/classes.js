/**
 * Classes
 *
 * A class is a blueprint for creating objects with predefined
 * properties and methods.
 */

class Person {
  constructor(firstName, lastName, age, country = "Venezuela") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
  }

  greet() {
    console.log("Hello!");
  }

  introduce() {
    console.log(
      `My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old. I live in ${this.country}.`
    );
  }
}

let person1 = new Person("José", "Guillen", 30, "USA");
let person2 = new Person("Daniel", "Miranda", 25);

console.log(person1);
console.log(person2);

console.log(person1.firstName);
console.log(person2.age);

person1.greet();

person2.introduce();

// animales

class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} is eating.`);
  }
  sleep() {
    console.log(`${this.name} is sleeping.`);
  }
}

class Dog extends Animal {
  constructor(name, breed){
    super(name);
    this.breed = breed;
  }
  bark() {
    console.log("Woof! Woof!");
  }

  searchBall (){
    console.log(`${this.name} is searching the ball.`);
  }
}

let perrito = new Dog("Firulais", "Golden Retriever");
console.log(perrito);
perrito.eat();
perrito.sleep();
perrito.bark();
perrito.searchBall();

class Cat extends Animal {
  constructor(name, color){
    super(name);
    this.color = color;
  }
  meow() {
    console.log("Miau! Miau!");
  }
  chaseMouse() {
    console.log(`${this.name} is chasing the mouse.`);
  }
}

let gato = new Cat("Garfield", "Gris");
console.log(gato);
gato.eat();
gato.sleep();
gato.meow();
gato.chaseMouse();