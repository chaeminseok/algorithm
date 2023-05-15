const solution = (money) => {
  var answer =
    money >= 500000
      ? money * 0.8
      : (answer =
          money >= 300000
            ? money * 0.9
            : money >= 100000
            ? money * 0.95
            : money);
  return Math.floor(answer);
};
console.log(solution(150000));
