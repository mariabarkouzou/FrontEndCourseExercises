const fibonacci = function (n) {
  let arr = [0, 1];

  if (n > 0) {
    for (let i = 2; i < n + 1; i++) {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr[n];
  } else {
    return "OOPS";
  }
};

module.exports = fibonacci;
