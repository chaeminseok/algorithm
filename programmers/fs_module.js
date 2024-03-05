// let fs = require("fs");

// let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// console.log(input);
const [n, ...arr] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
