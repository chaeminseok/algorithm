const solution = (price, money, count) => {
  var answer = 0;
  let totalPrice = 0;
  for (let i = 1; i <= count; i++) {
    answer += price * i;
  }

  return answer > money ? answer - money : 0;
};

console.log(solution(3, 20, 4));
