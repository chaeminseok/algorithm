const solution = (money) => {
  return [Math.floor(money / 5500), money % 5500];
};
console.log(solution(17000));
