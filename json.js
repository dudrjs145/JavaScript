/*
-----------------------------------------
  Ajax -  Asynchronous JavaScript And XML
  웹페이지에서 동적으로 서버와 데이터를 주고 받는 기술
  XMLHttpRequest Object가 대표적
  fetch() API 를 통해 간편하게 데이터를 주고 받을 수 있다. (ie 미지원)
  XML 또한 HTML과 같은 마크업언어

  -----------------------------------------
  JSON
  JavaScript Object Notation
  Object { key: value}

  */

"use strict";

// 1. Object to JSON
// JSON.stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  brithDate: new Date(),
  symbol: Symbol("id"),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log("key", key, "value", value);
  return key === "name" ? "ellie" : value;
});
console.log(json);

// 2. JSON to Object
// JSON.parse(json)
console.log("=======parse======");
json = JSON.stringify(rabbit);
let obj = JSON.parse(json);
console.log(obj);
rabbit.jump();

// JSON 은 오직 프로펖티만 포함, 함수는 포함하지 않기에 변환시 제거된 데이터가 들어옴
// obj.jump();

console.log(rabbit.brithDate.getDate());

// 이 경우 obj.birthDate는 String이기에 Date내장함수 이용을 못함
// console.log(obj.brithDate.getDate());

obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "brithDate" ? new Date(value) : value;
});

console.log(obj.brithDate.getDate());
