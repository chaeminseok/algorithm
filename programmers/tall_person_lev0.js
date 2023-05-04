const solution = (array, height) => {
  var answer = array.filter((item) => item > height);
  return answer.length;
};
console.log(solution([149, 180, 192, 170], 167));
