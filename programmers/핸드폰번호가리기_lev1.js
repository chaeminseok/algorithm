function solution(phone_number) {
  var a = phone_number.split("");
  for (let i = 0; i < a.length; i++) {
    if (i < a.length - 4) {
      a[i] = "*";
    }
  }

  return a.join("");
}
console.log(solution("01033334444"));
