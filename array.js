"use strict";

// JS = dynamically typed Language
// 배열에 다양한 타입을 담을 수 있다.

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["🍎", "🍌", "🍋", "🍑"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push("🍒", "🍉");
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift("🍇");
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note !! shift, unshift are slower than pop, push
// pop, push는 맨 뒤 빈공간에 넣기 때문에 기존의 데이터와 상관없이 넣을 수 있음
// shift, unshift는 기존의 전체 데이터들을 옮겨야 하는 문제가 있음

// splice: remove an item by index position
// 지우고 싶은 개수 미지정시 시작부터 전부 삭제
fruits.splice(1, 2);
console.log(fruits);

// 삭제 후 뒤에 아이템 추가
fruits.splice(1, 1, "🍏", "🍊");
console.log(fruits);

// concat: combine two arrays
const fruits2 = ["🍒", "🍉"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.log(fruits);
console.log(fruits.indexOf("🍏"));
console.log(fruits.indexOf("🍉"));
console.log(fruits.indexOf("🥥"));

// includes
console.log(fruits.includes("🍉"));
console.log(fruits.includes("🥥"));

// lastIndexOf
fruits.push("🍏");
console.log(fruits);
console.log(fruits.indexOf("🍏"));
console.log(fruits.lastIndexOf("🍏"));
