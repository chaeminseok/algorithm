function solution(s) {
  let answer = 0;
  let stack = [];
  [...s].forEach((str) => {
    stack.push(str);

    const same = stack.filter((item) => {
      return item === stack[0];
    });
    const not = stack.filter((item) => item !== stack[0]);

    if (not.length === same.length) {
      answer += 1;
      stack = [];
    }
  });
  if (stack.length > 0) {
    answer += 1;
  }
  return answer;
}
console.log(solution("banana"));
