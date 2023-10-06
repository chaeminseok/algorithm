function solution(n, arr1, arr2) {
  var answer = [];
  arr1 = arr1.map((e) => e.toString(2).padStart(n, "0"));
  arr2 = arr2.map((e) => e.toString(2).padStart(n, "0"));
  for (let k = 0; k < n; k++) {
    let answerLine = "";
    for (let j = 0; j < n; j++) {
      if (arr1[k][j] === arr2[k][j] && arr2[k][j] === "0") {
        answerLine += " ";
      } else if (arr1[k][j] === "1" || arr2[k][j] === "1") {
        answerLine += "#";
      }
      if (j === n - 1) {
        answer.push(answerLine);
      }
    }
  }
  return answer;
}
console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
