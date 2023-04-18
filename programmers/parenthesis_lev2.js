function solution(s) {
  var answer = true;
  let stack = 0;
  s = s.split("");
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack += 1;
    } else if (s[i] === ")") {
      stack -= 1;
    }
    if (stack < 0) {
      answer = false;
      break;
    } else if (i === s.length - 1 && stack !== 0) {
      answer = false;
      break;
    } else if (i === s.length - 1 && stack === 0) {
      answer = true;
    }
  }
  return answer;
}
solution("(())()");
