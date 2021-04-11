/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(s) {
  const arr = s.split('');
  const result = [];

  function f1(index) {
    const res = [1, 0];
    for (let i = index; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) res[0]++;
      else {
        res[1] = i;

        return res;
      }
    }
    return res;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      const res = f1(i);
      result.push(`${res[0]}${arr[i]}`);
      i = +res[1];
    } else result.push(arr[i]);
  }
  return result.join('');
}

module.exports = encodeLine;
