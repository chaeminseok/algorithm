function solution(arr) {
    var answer = [];
    arr.sort((a, b) => b - a);
    if (arr.length === 1) {
        return [-1];
    } else {
        return arr.slice(0, arr.length - 1);
    }
}
console.log(solution([-1, 2, -4, 5]));
