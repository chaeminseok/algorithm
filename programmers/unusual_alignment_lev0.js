function solution(numlist, n) {
  var answer = [];
  var result = [];
  numlist.forEach((element) =>
    answer.push({ number: element, abs: Math.abs(n - element) })
  );
  answer = answer.sort((a, b) => a.abs - b.abs);
  for (let i = 0; i < answer.length - 1; i++) {
    if (
      answer[i].abs === answer[i + 1].abs &&
      answer[i].number < answer[i + 1].number
    ) {
      [answer[i], answer[i + 1]] = [answer[i + 1], answer[i]];
    }
  }
  for (i of answer) {
    result.push(i.number);
  }
  return result;
}
console.log(solution([10000, 20, 36, 47, 40, 6, 10, 7000], 30));
