function unroll(squareArray) {
  let res = [];
  let l = 0;
  let r = squareArray[0].length;
  let t = 0;
  let b = squareArray.length;
  while (l < r && b > t) {
    for (let i = l; i < r; i++) res.push(squareArray[t][i]);
    t++;
    for (let i = t; i < b; i++) res.push(squareArray[i][r - 1]);
    r--;
    for (let i = r; i > l; i--) res.push(squareArray[b - 1][i - 1]);
    b--;
    for (let i = b; i > t; i--) res.push(squareArray[i - 1][l]);
    l++;
  }

  return res;
}

module.exports = unroll;