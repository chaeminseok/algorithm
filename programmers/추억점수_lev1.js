function solution(name, yearning, photo) {
  let answer = [];
  for (let i = 0; i < photo.length; i++) {
    let sum = 0;
    for (let j = 0; j < name.length; j++) {
      if (photo[i].includes(name[j])) {
        sum += yearning[j];
      } else {
        sum += 0;
      }
      if (j === name.length - 1) {
        answer.push(sum);
      }
    }
  }
  return answer;
}
console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ]
  )
);
