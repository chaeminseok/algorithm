function solution(sizes) {
  sizes = sizes.map(([a, b]) => (a > b ? [a, b] : [b, a]));
  let max1 = 0;
  let max2 = 0;
  sizes.forEach((size) => {
    if (size[0] > max1) max1 = size[0];
    if (size[1] > max2) max2 = size[1];
  });
  return max1 * max2;
}
