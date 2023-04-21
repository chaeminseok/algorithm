// function solution(s) {
//   var answer = true;
//   let stack = 0;
//   s = s.split("");
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(") {
//       stack += 1;
//     } else if (s[i] === ")") {
//       stack -= 1;
//     }
//     if (stack < 0) {
//       answer = false;
//       break;
//     } else if (i === s.length - 1 && stack !== 0) {
//       answer = false;
//       break;
//     } else if (i === s.length - 1 && stack === 0) {
//       answer = true;
//     }
//   }
//   return answer;
// }
function solution(s) {
  let cum = 0;
  for (let paren of s) {
    cum += paren === "(" ? 1 : -1;
    if (cum < 0) {
      return false;
    }
  }
  return cum === 0 ? true : false;
}
//console.log(solution("(())()"));
