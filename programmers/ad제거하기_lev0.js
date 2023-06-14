function solution(strArr) {
  var answer = [];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].includes("ad")) {
      continue;
    } else {
      answer.push(strArr[i]);
    }
  }
  return answer;
}
console.log(solution(["and", "notad", "abcd"]));
console.log(solution(["there", "are", "no", "a", "ds"]));
