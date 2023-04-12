function solution(s) {
    var answer = '';
    let str=s.split(" ")
    str.sort((a,b)=>a-b)
    answer=str[0]+" "+str[str.length-1]
    return answer;
}
console.log(solution("1 2 3 4"));