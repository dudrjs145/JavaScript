// Functions
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value
"use strict";

// 1. Function declaration
// function name(param1, param2) { body ... return;}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
  console.log("Hello");
}
printHello();

function log(message) {
  console.log(message);
}

log("Hello@");

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = "coder";
}
const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)

// ES6 이전 사용 방식
function showMessage(message, from) {
  if (from === undefined) {
    from = "unknown";
  }
  console.log(`${message} by ${from}`);
}

// ES6 이후
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}

// 4. Rest parameters (added in ES6)
// 배열 형식으로 전달
// Array는 Object 타입
function printAll(...args) {
  console.log(typeof args); // Object 타입
  console.log(args);

  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  /* 다른 방식의 for 문

  for (const arg of args) {
    console.log(arg);
  }

  // 함수형 언어 forEach
  args.forEach((arg) => console.log(arg));
  */
}

printAll("dream", "coding", "ellie");

// 5. Local Scope
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello";
  console.log(message); // local variable
  console.log(globalMessage);
}
printMessage();

// 6. Return a value
// return 없는 함수 => return undefined; 와 같다
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${result}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    // 빠른 종료 후
  }
  // 로직 실행
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
//  sum(1, 2); hoisting
//  function sum(a, b) { ... }
// a function expression is created when the execution reaches it.

// anonymous function
const print = function () {
  console.log("print");
};

// named function
const message = function message() {
  console.log("print");
};

print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
// Callback Function?  함수를 전달해서 상황이 맞으면 전달된 함수를 부르는 함수
function randomQuiz(answer, printYes, printNo) {
  // 상황에 따라 printYes, printNo를 호출
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}

// anonymous function
const printYes = function () {
  console.log("yes");
};

// named function
// better debugging is debugger's stack traces
// recursions
const printNo = function print() {
  console.log("no!");

  // recursions
  // print();
};

randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function () {
  console.log("simplePrint!");
};

const arrowPrint = () => console.log("simplePrint!");
const add = (a, b) => a + b;
console.log(`add: ${add(1, 3)}`);

// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log("IIFE");
})();

// Fun quiz time
// function calculate (command, a, b)
// command: add, substract, divide, multiply, remainder
function calculate(command, a, b) {
  switch (command) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "divide":
      return a / b;
    case "multiply":
      return a * b;
    case "remainder":
      return a % b;
    default:
      return "Command Error";
  }
}
console.log(calculate("add", 10, 5));
console.log(calculate("substract", 10, 5));
console.log(calculate("divide", 10, 5));
console.log(calculate("multiply", 10, 5));
console.log(calculate("remainder", 10, 5));
console.log(calculate("Error", 10, 5));
