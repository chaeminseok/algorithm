const solution = (t, p) => {
  var answer = 0;
  stack = [];
  const pp = parseInt(p, 10);
  for (i = 0; i <= t.length - p.length; i++) {
    stack.push(t.substring(i, p.length + i));
  }
  stack.forEach((num) => {
    let n = parseInt(num, 10);
    if (pp >= n) {
      answer++;
    }
  });

  return answer;
};
console.log(solution("10203", "15"));
