function solution(my_string) {
  let string = my_string.split("");
  let answer = [];
  for (let i = string.length - 1; i >= 0; i--) {
    answer.push(string[i]);
  }
  return answer.join("");
}
console.log(solution("bread"));
