function solution(s) {
    var answer = '';
    var arr = s.split(' ').map((item) => {
        var str = item.split('');
        for (let i = 0; i < str.length; i++) {
            if (i % 2 === 0) {
                str[i] = str[i].toUpperCase();
            } else if (i % 2 === 1) {
                str[i] = str[i].toLowerCase();
            }
        }
        return str.join('');
    });
    return arr.join(' ');
}
console.log(solution('try hello world'));
