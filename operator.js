// 1. String concatenation
console.log("my" + " cat");
console.log("1" + 2);
console.log(`string literals:

''''
1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 * 1); // multiply
console.log(1 / 1); // divide
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${preIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${preDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical operators
// || (or), && (and), !(not)
const value1 = false;
const value2 = 4 < 2; // false

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log(i);
  }
  return true;
}

// ! (not)
console.log(!value1);

// || (or)
// true가 발견되면 뒤 조건은 무시
// 즉, check()와 같이 헤비한 연산들은 뒷쪽으로 배치하여 시간 낭비를 줄이기

// false || false || check()  <- check()에서 시간이 낭비됨
console.log(`or: ${value1 || value2 || check()}`);

// true || false || check() <- check()검사 없이 맨 앞 true에서 종료
console.log(`or: ${true || value2 || check()}`);

// && (and)
// &&의 경우 false를 발견하면 뒷 조건들은 무시
console.log(`or: ${false || value2 || check()}`);

// && 는 간편하게 널 체크할 때도 쓰임
// nullableObject && nullableObject.something
// nullableObject == null이면 뒤 && something이 실행이 되지 않음
// code상으로 아래와 같은 동작!!
/*
if (nullableObject != null) {
  nullableObject.something;
};
*/

// 7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
const ellie3 = ellie1;
console.log("object equality by reference");
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// 8. Conditional operators: if
// if, else if, else

const name = "coder";
if (name == "kim") {
  console.log("Welcom, Kim");
} else if (name == "coder") {
  console.log("You are amazing coder");
} else {
  console.log("unknown");
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === "kim" ? "yes" : "no");

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type check in TS
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love you!");
    break;
  default:
    console.log("same all!");
    break;
}

// 11. Loops
// while loop, while the condition is truthy
// body code is executed
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition
i = 3;
do {
  console.log(`Do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
// inline variable declaration
for (let i = 3; i > 0; i--) {
  console.log(`inline variable for : ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  console.log(`inline variable for : ${i}`);
}

// nested loops
// 이럴경우 bigO 가 O(n^2), cpu에 좋지 않음, 피하는게 좋음
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:{j}`);
  }
}

// break, continue
// break 루프를 완전히 끝냄
// continue 지금 것만 스킵 후 다음 루프로 넘어감
