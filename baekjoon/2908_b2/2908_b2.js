let [num1, num2] = require("fs")
  .readFileSync("baekjoon/2908_b2/input.txt")
  .toString()
  .trim()
  .split(" ");
let reverseNum1 = "";
let reverseNum2 = "";

for (i = 2; i >= 0; i--) {
  reverseNum1 += num1.charAt(i);
  reverseNum2 += num2.charAt(i);
}
console.log(Math.max(Number(reverseNum1), Number(reverseNum2)));
