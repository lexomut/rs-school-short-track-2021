/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(arr, value, start = 0, length = arr.length) {
  if (length === 1) return 0;
  let str = start;
  let ln = length;
  const half = str + Math.trunc(length / 2);
  if (value === arr[half]) return half;
  if (value > arr[half]) str = half;
  else str = (str - half) < 0 ? 0 : str - half;
  ln = Math.round(length / 2);
  return findIndex(arr, value, str, ln);
}

module.exports = findIndex;
