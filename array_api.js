"use strict";
// Array APIs
// ["🍏","🍎","🍌","🍋","🍊","🍉","🍇","🍓","🍑","🍒","🍈","🥭","🥑",];
const fruits = ["🍏", "🍎", "🍌", "🍋", "🍊"];

console.log(fruits.length);

console.log(fruits.toString());

console.log(fruits.toLocaleString());

console.log(`poped: ${fruits.pop()}`);

console.log(`pushed new length: ${fruits.push("🍎")}`);

const oneFruit = ["🥑"];
oneFruit.pop();
console.log(oneFruit);

const fruits2 = ["🍋", "🍊", "🍉", "🍇", "🍓"];

const newFruit = fruits.concat(fruits2);
console.log(newFruit);
console.log(fruits);
console.log(fruits2);

const joinFruit = fruits.join();
console.log(joinFruit);

const joinFruit2 = fruits.join("hello");
console.log(joinFruit2);

fruits.reverse();
console.log(fruits);

// slice
console.log("slice------");
console.log(fruits.slice());

// sort
console.log([11, 25, 3, 44, 5].sort());
console.log([11, 25, 3, 44, 5].sort((a, b) => a - b));
console.log(["z", "g", "e", "b", "a", "h"].sort());

// every vs some
console.log(fruits.every((value, index, array) => value === "🍏"));
console.log(fruits.some((value, index, array) => value === "🍑"));

// forEach vs map
// forEach 는 동작만 함
// map은 결과를 반환
console.log(fruits.forEach((value) => value === "🍏"));
console.log(fruits.map((value) => value + 1));
console.log(typeof fruits.map((value) => value === "🍏"));

// filter
const filter = fruits.filter((value) => value === "🍏");
console.log(filter);

// reduce
