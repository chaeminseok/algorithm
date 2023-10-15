function solution(n, m, section) {
  var answer = 0;

  let standard = 0;
  section.forEach((e, i) => {
    if (e > standard + m - 1 || i === 0) {
      standard = e;
      answer++;
    }
  });
  return answer;
}
console.log(solution(12, 4, [2, 3, 7, 10]));
