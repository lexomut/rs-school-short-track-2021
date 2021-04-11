/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  const n1 = `${n}`;
  for (let i = 0; i < n1.length; i++) {
    const arr1 = n1.split('');
    arr1[i] = '';
    const current = arr1.join('');
    if (max < +current) max = +current;
  }
  return max;
}

module.exports = deleteDigit;
