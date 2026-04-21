function romanToInt(input) {
  let res = 0;
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  for (i = 0; i < input.length - 1; i++) {
    if (roman[input[i]] < roman[input[i + 1]]) {
      res -= roman[input[i]];
    } else {
      res += roman[input[i]];
    }
  }

  return res + roman[input[input.length - 1]];
}
