function solution(a, b, n) {
  var answer = 0;
  var coke = n;
  while (coke >= a) {
    var bonus = Math.floor(coke / a) * b;
    coke = bonus + (coke % a);
    answer += bonus;
  }

  return answer;
}
console.log(solution(2, 1, 20));
