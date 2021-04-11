/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(arr) {
  const obj = {};
  const a = [];
  for (let i = 0; i < arr.length; i++) {
    a.push(arr[i].split('.'));
  }

  for (let i = 0; i < a.length; i++) {
    let str = '';
    for (let j = a[i].length - 1; j >= 0; j--) {
      str += `.${a[i][j]}`;

      obj[str] = 0;
    }
  }
  for (let i = 0; i < a.length; i++) {
    let str = '';
    for (let j = a[i].length - 1; j >= 0; j--) {
      str += `.${a[i][j]}`;

      obj[str]++;
    }
  }
  return obj;
}

module.exports = getDNSStats;
