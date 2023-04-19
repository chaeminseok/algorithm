const solution = (s) => {
  var answer = s
    .split(" ")
    .map((k) => k.substr(0, 1).toUpperCase() + k.substr(1).toLowerCase());
  return answer.join(" ");
};
//console.log(solution("3people unFollowed me"));
