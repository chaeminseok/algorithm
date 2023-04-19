const solution = (s) => {
  return [...s].filter((e) => e === "1").length.toString(2);
};

console.log(solution("a0000000013211"));
