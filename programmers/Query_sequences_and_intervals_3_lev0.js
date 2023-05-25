function solution(arr, queries) {
  for (let [m, n] of queries) {
    var am = arr[m];
    var an = arr[n];
    arr[m] = an;
    arr[n] = am;
  }
  return arr;
}
console.log(solution());
