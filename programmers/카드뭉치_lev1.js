function solution(cards1, cards2, goal) {
  var answer = "";
  goal.forEach((e) => {
    if (cards1.includes(e) && cards1.indexOf(e) === 0) {
      cards1.shift();
    } else if (cards2.includes(e) && cards2.indexOf(e) === 0) {
      cards2.shift();
    } else {
      answer = "No";
    }
  });
  return answer === "No" ? "No" : "Yes";
}
