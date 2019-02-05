class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hello, I am ${this.name}!`;
  }
  getDiscription() {
    return `${this.name} is ${this.age} year(s) old!`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major; //If undefined (falsy) returns false, if truthy return true = and therefore out string
  }
  getDiscription() {
    let description = super.getDiscription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hasLocation() {
    return !!this.homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();
    if (this.hasLocation()) {
      greeting += ` I am visiting from ${this.homeLocation}`;
    }
    return greeting;
  }
}

const me = new Traveler('Ethan Robbins', 30, 'the USA');
const me2 = new Traveler();

console.log(me.getGreeting());
console.log(me2.getGreeting());

// console.log(me.getDiscription());
// console.log(me2.getDiscription());
