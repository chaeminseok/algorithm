function solution(arr) {
  let answer = 0;
  let sum = arr.reduce(plu);
  answer = sum / arr.length;
  return answer;
}

function plu(a, b) {
  return a + b;
}
console.log(solution([1, 2, 3, 4, 5]));
