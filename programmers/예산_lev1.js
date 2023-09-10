function solution(d, budget) {
    var answer = 0;
    d.sort((a, b) => a - b);

    d.forEach((sum) => {
        if (budget >= sum) {
            budget = budget - sum;
            answer += 1;
        }
    });
    return answer;
}
console.log(solution([1, 2, 23, 4, 24, 2], 9));
