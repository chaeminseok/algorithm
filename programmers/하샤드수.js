function solution(x) {
    const num = [...String(x)];
    return x % num.reduce((a, c) => a + Number(c), 0) === 0 ? true : false;
}
console.log(solution(99));
console.log(solution(11));
