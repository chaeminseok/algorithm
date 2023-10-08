function solution(nums) {
  var answer = 0;
  let arr = [];
  nums.forEach((num) => {
    if (!arr.includes(num)) {
      arr.push(num);
    }
  });
  return (answer = arr.length > nums.length / 2 ? nums.length / 2 : arr.length);
}
console.log(solution([3, 3, 3, 2, 2, 4]));
