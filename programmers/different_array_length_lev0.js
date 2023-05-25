const solution = (arr, n) => {
  return arr.map((num, idx) => (arr.length % 2 !== idx % 2 ? num + n : num));
};
//console.log(solution([49, 12, 100, 276, 33], 27));
