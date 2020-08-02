"use strict";

// 비동기 처리 (2) - Promise - 비동기를 간편하게 처리할 수 있게 도와주는 Object

// State
//  - pending : 지정한 동작 수행 중
//  - fulfiled : 지정한 동작 수행 완료
//  - rejected : 파일을 찾을 수 없거나 네트워크에 문제가 생길 시

// Producer vs Consumer
// 1. Producer
// 새로운 Promise를 만들면, 전달한 executor가 자동으로 실행된다.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work ()
  console.log("doing something...");
  setTimeout(() => {
    // resolve("ellie");
    reject(new Error("no network"));
  }, 2000);
});

// 2. Consuemrs: then, catch, finally
//  - then : Promise resolve 후 동작
//  - catch : reject 후 동작 (then에서도 가능)
//  - finally : 마지막 반드시 동작

promise
  .then((fulfilled) => {
    console.log(fulfilled);
  })
  .catch((error) => {
    console.log("catch!!");
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chaining

const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hen"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => Egg`), 1000);
  });

const getErrorEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(`${hen} => Egg`), 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => Fry`), 1000);
  });

getHen()
  .then((hen) => getEgg(hen))
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal));

// 간단하게 작성 방법
getHen() // comment 를 통해 깔끔한 줄바꿈 이용
  .then(getErrorEgg)
  .catch((error) => {
    return "bread";
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
