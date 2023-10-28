'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  //Never do this
  //   this.calcAge = function () {
  //     // Method
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person('Jonas', 1991); // Instance of Person

console.log(jonas);
const nam = new Person('Nam', 1997); // Instance of Person
console.log(nam);

const jay = 'jay';

console.log(jonas instanceof Person); // True
console.log(jay instanceof Person); // False

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  // Method
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
nam.calcAge();
console.log(jonas.__proto__);
console.log(jonas.__proto__ == Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(Person));
// .prototypeOfLinkedObjects <-> .prototype

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, nam.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

const arr = [3, 4, 5, 6, 7, 8, 9, 8, 2, 3];
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
const h1 = document.querySelector('h1');
console.dir(x => x + 1);

// Coding challenge

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log('new speed: ', this.speed);
};
const BMW = new Car('BMW', 120);
const Mercedes = new Car('Mercedes', 95);

BMW.accelerate();
BMW.brake();
BMW.brake();

//class expression
// const PersonCl = class {}
//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //This method will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet2() {
    console.log('Hey2!');
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set properties already exist
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else console.log(`${name} is not a fullName`);
  }
  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey there!');
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.__proto__ === PersonCl.prototype);
PersonCl.prototype.greet = function () {
  console.log('Hey!');
};
jessica.greet();
jessica.greet2();
//1. Classes are NOT hoisted
//2. Classes are first-class citizes
//3. Classes are executed in strict mode

//Setter & Getter
const account = {
  owner: 'jonas',
  movement: [200, 530, 120, 300],

  get latest() {
    return this.movement.slice(-1).pop();
  },
  set latest(mov) {
    this.movement.push(mov);
  },
};
console.log(account.latest);
account.latest = 50;
console.log(account.movement);
console.log(jessica.age);
console.log(jessica.fullName);
const jz = new PersonCl('Clasdsfe', 1996);

//Static method
Person.hey = function () {
  console.log('Hey there!');
  console.log(this);
};

Person.hey();
PersonCl.hey();

///////////////////////

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
// PersonProto.prototype.introduce = function () {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
//   };
const steven = Object.create(PersonProto);

const StudenProto = Object.create(PersonProto);
StudenProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
const jayz = Object.create(StudenProto);
jayz.init('Jay', 2010, 'Computer Science');
StudenProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
jayz.introduce();
jayz.calcAge();
console.log(jayz);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
//////////////Coding challenge

class ES6_Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`Increase: Current speed is: ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`Decrease: Current speed is: ${this.speed} km/h`);
  }

  get speedUS() {
    return `Get: Current speed is: ${this.speed / 1.6} mi/h`;
  }

  set speedUS(speed_mih) {
    this.speed = speed_mih * 1.6;
    console.log(`Set: Current speed is: ${speed_mih} mi/h`);
  }
}

const ford = new ES6_Car('Ford', 120);
ford.brake();
ford.accelerate();
console.log(ford.speedUS);
ford.speedUS = 80;
ford.accelerate();
//////////////Coding challenge 3
//Constructor function
// const EV = function (make, speed, charge) {
//   ES6_Car.call(this, make, speed);
//   //   this.make = make;
//   //   this.speed = speed;
//   this.charge = charge;
// };
//Class Child
class EV extends ES6_Car {
  constructor(make, speed, charge) {
    super(make, speed); //Always need to happen first
    this.charge = charge;
  }
}
// Only for constructor function child
// EV.prototype = Object.create(ES6_Car.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`Set battery charge to: ${this.charge}`);
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const electric_car = new EV('Tesla', 120, 23);
console.log(electric_car);
electric_car.chargeBattery(90);
electric_car.brake();
electric_car.accelerate();
/*
///////////////////////////////////
//Parent
const Person1 = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person1.prototype.calcAge = function () {
  // Method
  console.log(2037 - this.birthYear);
};

//Inheritance from Parent
//Child
const Student = function (firstName, birthYear, course) {
  Person1.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person1.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person1);
console.log(mike instanceof Object);
Student.prototype.constructor = Student;

console.dir(Student.prototype.constructor);*/
