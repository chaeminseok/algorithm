let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const solution = (names) => {
  const dict = {};
  let total = 0;
  names.forEach((name) => {
    if (!dict[name]) dict[name] = 0;
    dict[name] += 1;
    total += 1;
  });

  return Object.keys(dict)
    .sort()
    .map((key) => `${key} ${((dict[key] / total) * 100).toFixed(4)}`)
    .join("\n");
};

console.log(solution(input));
