let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0]);
let string = input[1];
let answer = 0;
for (let x of string) {
  answer += Number(x);
}
console.log(answer);
