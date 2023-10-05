function solution(arr, queries) {
  for (let [m, n] of queries) {
    var am = arr[m];
    var an = arr[n];
    arr[m] = an;
    arr[n] = am;
  }
  return arr;
}
console.log(
  solution(
    [0, 1, 2, 3, 4],
    [
      [0, 3],
      [1, 2],
      [1, 4],
    ]
  )
);
