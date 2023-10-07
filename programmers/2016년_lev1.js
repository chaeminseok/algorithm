function solution(a, b) {
  var answer = "";
  const arr = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const obj = {
    1: 31,
    2: 29,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };
  let sum = 0;
  for (let i = 1; i < a; i++) {
    sum += obj[i];
  }
  sum = sum + b - 1;
  const c = sum % 7;
  return arr[c];
}
console.log(solution(5, 24));
