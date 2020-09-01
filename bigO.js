// Big O의 대표적인 종류
// 출처 : https://soldonii.tistory.com/56?category=862199

// O(n) : Linear Time
// input 되는 element의 개수와 Operation의 수가 정비례 관계
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];

findNemo = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO");
    }
  }
};

findNemo(everyone);

// O(1) : Constant Time
// input Element의 개수와 상관없이 한번의 작업을 하는 경우
const boxes = [0, 1, 2, 3, 4, 5];

function compressFirstBox(boxes) {
  console.log(boxes[0]);
}

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
}

logFirstTwoBoxes(boxes); // O(2)
