let input = require("fs")
  .readFileSync("baekjoon/2675_b2/input.txt")
  .toString()
  .trim()
  .split("\n");
for (let i = 1; i < Number(input[0]) + 1; i++) {
  let [repeatNum, repeatString] = input[i].split(" ");
  let output = "";
  for (let j = 0; j < repeatString.length; j++) {
    output += repeatStrings.charAt(j).repeat(repeatNum);
  }
  console.log(output);
}
