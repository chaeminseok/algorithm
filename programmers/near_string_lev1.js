function solution(s) {
  let stack = [];
  let ans = [];

  [...s].forEach((str) => {
    if (!stack.includes(str)) {
      stack.push(str);
      ans.push(-1);
    } else {
      ans.push(stack.length - stack.lastIndexOf(str));
      stack.push(str);
    }
  });

  return ans;
}
console.log(solution("banana"));
