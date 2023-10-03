function solution(food) {
  let arr = [];
  for (let i = 1; i < food.length; i++) {
    if (food[i] > 0) {
      for (j = 0; j < Math.floor(food[i] / 2); j++) {
        arr.push(i);
      }
    }
  }
  return arr.concat(0, [...arr].reverse()).join("");
}
console.log(solution([1, 3, 4, 6]));
