function solution(id_pw, db) {
  const result = ["login", "wrong pw", "fail"];
  for (let i = 0; i < db.length; i++) {
    if (db[i][0] === id_pw[0]) {
      if (db[i][1] === id_pw[1]) {
        return result[0];
        break;
      } else {
        return result[1];
        break;
      }
    } else if (i === db.length - 1) {
      return result[2];
    }
  }
}
