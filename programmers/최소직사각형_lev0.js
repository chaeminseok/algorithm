function solution(sizes) {
    let answer = 0;
    let ga = 0;
    let se = 0;
    var sizeSort = sizes.map((size) => {
        const [a, b] = size;
        if (a > b) {
            size = [a, b];
        } else {
            size = [b, a];
        }
        return size;
    });
    for (let i = 0; i < sizeSort.length; i++) {
        if (sizeSort[i][0] > ga) {
            ga = sizeSort[i][0];
        }
        if (sizeSort[i][1] > se) {
            se = sizeSort[i][1];
        }
    }
    return ga * se;
}
console.log(
    solution([
        [60, 50],
        [30, 70],
        [60, 30],
        [80, 40],
    ])
);
