// 비동기 처리 (3) - (async - await) : 깔끔하게 Promise를 사용하는 방법
// 기존의 존재하는 Promise 위에 조금더 간편한 API를 제공 "Syntactic sugar"

// 1. async
function fetchUser() {
  return new Promise((resolve, reject) => {
    // do newtork request in 10 sec.....
    resolve("ellie");
  });
}

const user = fetchUser();
user.then(console.log);

async function fetchUser2() {
  // do network request in 10 sec...
  return "ellie";
}

const user2 = fetchUser2();
user.then(console.log);

// 2. await

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return "apple";
}

async function getBanana() {
  await delay(1000);
  return "banana";
}

async function pickFruits() {
  // Promise에서 발생한 Callback 지옥
  // return getApple().then((apple) => {
  //   return getBanana().then((banana) => `${apple} + ${banana}`);
  // });

  // await 로 사과, 바나나 각 1초씩 기다리게됨 2초 낭비
  // const apple = await getApple();
  // const banana = await getBanana();

  // 비동기로 사과와 바나나를 받고
  // await로 동기화
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs

// Promise.all() 전달된 배열의 Promise들을 병렬로 받아들임
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
