function solution(array, commands) {
  var answer = [];
  commands.forEach((element, i) => {
    const arr1 = array.slice(element[0] - 1, element[1]);
    arr1.sort((a, b) => a - b);
    return answer.push(arr1[element[2] - 1]);
  });
  return answer;
}
console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
