function solution(n) {
  var answer = 0;
  return String(n)
    .split("")
    .reduce((a, c) => a + Number(c), 0);
}
console.log(solution(11221213));
