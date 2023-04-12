function solution(n) {
    let fi = [0, 1];
    for(let i=2; i<=n; i++) {
        fi[i] = (fi[i-1]+fi[i-2])%1234567;
    }
    console.log(fi[n])
    return fi[n];
}
