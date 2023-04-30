/*
5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91
*/
const fs = require("fs");
let input = fs.readFileSync(__dirname + "/input.txt").toString();
input = input.split("\n");
const inputc = +input[0];
const inputTestCase = [];
for (let i = 1; i <= inputc; ++i) {
  const arr = input[i].split(" ").map((item) => +item);
  console.log("arr:", arr);
  const newArr = [];
  for (let i = 1; i <= arr[0]; ++i) {
    newArr.push(arr[i]);
  }
  const testCase = {
    N: arr[0],
    arr: newArr,
  };
  inputTestCase.push(testCase);
}
function solution(c, testCase) {
  for (key in testCase) {
    const result = testCase[key].arr.reduce((acc, cur, idx) => {
      return (acc += cur);
    }, 0);
    const average = result / testCase[key].N;
    const averageOverValue = testCase[key].arr.filter(
      (item) => item > average
    ).length;

    const averageOverPercent = (
      (averageOverValue / testCase[key].N) *
      100
    ).toFixed(3);
    console.log(`${averageOverPercent}%`);
  }
}

solution(inputc, inputTestCase);
