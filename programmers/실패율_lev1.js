function solution(N, stages) {
  let obj = {};
  for (let i = 1; i <= N; i++) {
    const locatedUser = stages.filter((num) => num === i).length;
    const passedUser = stages.filter((num) => num >= i).length;
    const failPercent = locatedUser / passedUser;
    obj[Number(i)] = failPercent;
  }
  const keyOfObj = Object.entries(obj);
  keyOfObj.sort((a, b) => b[1] - a[1]);
  return keyOfObj.map((e) => Number(e[0]));
}
console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
