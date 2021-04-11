/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arr1 = []; const
    arr2 = [];

  arr.forEach((item, index) => (item === -1 ? arr1.push(index) : arr2.push(item)));
  arr2.sort((a, b) => a - b);
  arr1.forEach((item) => arr2.splice(item, 0, -1));
  return arr2;
}

module.exports = sortByHeight;
