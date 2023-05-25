function solution(n, lost, reserve) {
  var answer = n - lost.length;
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);
  for (i of reserve) {
    if (lost.includes(i) === true) {
      answer += 1;
      lost = lost.filter((element) => element !== i);
      reserve = reserve.filter((element) => element !== i);
    }
  }
  for (i of reserve) {
    if (lost.includes(i) === false && lost.includes(i - 1) === true) {
      answer += 1;
      lost = lost.filter((element) => element !== i - 1);
    } else if (lost.includes(i) === false && lost.includes(i + 1) === true) {
      answer += 1;
      lost = lost.filter((element) => element !== i + 1);
    }
  }

  return answer;
}
console.log(solution(5, [2, 4], [1, 3, 5]));
