function solution(s, n) {
    var answer = '';
    const big = Array.from({ length: 26 }, (v, i) =>
        String.fromCharCode(i + 65)
    );
    const small = Array.from({ length: 26 }, (v, i) =>
        String.fromCharCode(i + 97)
    );
    answer = [...s].map((str) => {
        if (big.indexOf(str) !== -1) {
            return big[(big.indexOf(str) + n) % 26];
        } else if (small.indexOf(str) !== -1) {
            return small[(small.indexOf(str) + n) % 26];
        } else {
            return ' ';
        }
    });
    return answer.join('');
}
