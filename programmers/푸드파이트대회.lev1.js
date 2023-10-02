function solution(food) {
  food.shift();
  let arr = [];
  let obj = {};
  for (let i = 0; i < food.length; i++) {
    obj[i + 1] = Math.floor(food[i] / 2);
  }
  food.forEach((e, i) => {
    if (obj[i + 1] > 0) {
      for (let j = 0; j < obj[i + 1]; j++) {
        arr.push(i + 1);
      }
    }
  });
  arr = [...arr, 0, ...arr.reverse()];
  var answer = [...arr].join("");
  return answer;
}
console.log(solution([1, 3, 4, 6]));
