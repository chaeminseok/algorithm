function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let num = numbers[i] + numbers[j];
      if (answer.indexOf(num) === -1) {
        answer.push(num);
      }
    }
  }
  return answer.sort((a, b) => a - b);
}
console.log(solution([2, 1, 3, 4, 1]));
