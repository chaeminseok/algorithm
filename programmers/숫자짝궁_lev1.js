function solution(X, Y) {
  var string = "";
  X = X.split("");
  string;
  Y = Y.split("");
  for (let i = 0; i < 10; i++) {
    let Xnum = X.filter((e) => i === Number(e)).length;
    let Ynum = Y.filter((e) => i === Number(e)).length;
    string = string + String(i).repeat(Math.min(Xnum, Ynum));
  }
  const answer = string
    .split("")
    .sort((a, b) => Number(b) - Number(a))
    .join("");
  return answer === "" ? "-1" : answer[0] === "0" ? "0" : answer;
}
console.log(solution("100", "2345"));
