function solution(numbers) {
    var answer = -1;
    answer = numbers.reduce((acc, cur) => acc + cur, 0);
    return 45 - answer;
}
console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
