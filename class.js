"use strict";

// Class
// - template
// - declare once
// - no data in

// 클래스에 실제로 데이터를 넣어서 만든 것이 Object
// Object
// - instance of a class
// - created many times
// - data in

// Data class
// Data, 즉 field만 있는 클래스

// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  // constructor, 생성자
  // 생성자를 통해 필요한 데이터를 전달
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person("ellie", 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and Setter
// 사용자의 input data를 잘못된 값이 들어오지 않게 조절해주는 역할
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age);

// 3.Fields (public, private)
// 최근 추가 기능
class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// 들어오는 데이터에 상관없이 공통적으로 쓰이는 기능이면
// 클래스에 static으로 선언하여 사용 => 메모리 절약 효과
// 최근 추가 기능
class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined 출력
console.log(Article.publisher); // 정상 출력
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log("🔺");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle: color ${this.color} area:${this.getArea()}`;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());
console.log(triangle.toString());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(rectangle instanceof Triangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
