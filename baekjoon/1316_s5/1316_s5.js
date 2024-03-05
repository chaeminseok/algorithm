let input = require("fs")
  .readFileSync("baekjoon/1316_s5/input.txt")
  .toString()
  .trim()
  .split("\n");
let count = 0;
let n = Number(input[0]);
for (let i = 1; i < n + 1; i++) {
  let stringArr = [...input[i]];
  let checker = [];
  for (let j = 0; j < stringArr.length; j++) {
    if (!checker.includes(stringArr[j])) {
      checker.push(stringArr[j]);
    } else if (stringArr[j - 1] !== stringArr[j]) {
      break;
    }
    if (j === stringArr.length - 1) {
      count += 1;
    }
  }
}
console.log(count);
