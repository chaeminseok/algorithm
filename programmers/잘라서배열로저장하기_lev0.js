function solution(my_str, n) {
  var answer = [];
  var j = my_str.length / n; // for문을 몇번 돌릴지

  for (var i = 0; i < j; i++) {
    //n개로 몇번 나뉘는지 횟수만큼
    answer.push(my_str.substr(0, n)); // 문자열을 n개 만큼 잘라서 배열에 넣는다.
    my_str = my_str.substr(n, my_str.length); //배열에 넣은 n만큼을 지운다.
  }
  return answer;
}
