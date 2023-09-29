function solution(my_string) {
  let answer = 0;
  my_string.split("").map((e) => (!isNaN(e) ? (answer += Number(e)) : 0));
  return answer;
}
console.log(solution("aAb1B2cC34oOp"));
