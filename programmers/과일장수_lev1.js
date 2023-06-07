function solution(k, m, score) {
  var answer = 0;
  score.sort((a, b) => b - a);
  const n = Math.floor(score.length / m);
  for (let i = 0; i < n; i++) {
    let a = score.splice(0, m);
    answer += a[m - 1] * m;
  }

  return answer;
}
