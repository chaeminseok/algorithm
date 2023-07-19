function solution(arr, divisor) {
    const answer = arr.filter((v) => v % divisor === 0);
    return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
console.log(solution([5, 9, 7, 10]));
