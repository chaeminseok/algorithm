const fs = require("fs");

const [n, ...lines] = fs
  .readFileSync("input.txt", "utf-8")
  .trim()
  .split("\r\n");

console.log(n);
console.log(`arr은 ${lines}`);
