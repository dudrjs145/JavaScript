// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object

// primitive type
// one variable = one value
const name = "ellie";
const age = 4;
print(name, age);
function print(name, age) {
  console.log(name);
  console.log(age);
}

// object type
// object = { key : value};
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

const ellie = { name: "ellie", age: 4 };
function printPerson(person) {
  console.log(perosn.name);
  console.log(person.age);
}
print(ellie);

ellie.hasJob = true;

delete ellie.hasJob;

// 2. Computed properties
// key should be alwyas string
// 일반적인 코딩에는 ellie.name 방식을 사용하고
// 키가 런타임때 결정되면 ellie[key]를 사용
console.log(ellie.name);
console.log(ellie["name"]); // computed properties
ellie["hasJob"] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}

printValue(ellie, "name");
printValue(ellie, "age");

// 3. Property value shorthand
// shorthand 키와 값의 변수 이름이 같으면 간단하게 작성 가능
// 기존 클래스가 없던 시절 사용 방법
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "james", age: 4 };
const person4 = { name: "" };

function makePerson(name, age) {
  return {
    name,
    age,
  };
}
const person5 = makePerson("ellie", 30);
console.log(person5);

// 4. Constructor function
// 추천 사용 방법
// JS 엔진이 자동으로 Object를 생성해서 반환

function Person(name, age) {
  // this = {}
  this.name = name;
  this.age = age;

  //return this;
}

const person6 = Person("kim", 2);

// 5. in operator: property existence check (key in obj)
console.log("name" in ellie);
console.log("age" in ellie);
console.log("random" in ellie);
console.log(ellie.random);

// 6. for..in vs for..of
// for (key in obj)
for (key in ellie) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

for (value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3, ...])
const user = { name: "ellie", age: 20 };
const user2 = user;
user2.name = "coder";
console.log(user);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.log(user3);

Object.assign(user3, user);
user3.name = "ellie";
console.log(user3);
console.log(user);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed);
