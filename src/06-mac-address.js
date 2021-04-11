/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),

 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not. * separated by hyphens.
 *
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(mac) {
  let result = true;
  mac.split('-').forEach((item) => {
    if (Number.isNaN(+`0x${item}`)) result = false;
  });
  return result;
}

module.exports = isMAC48Address;
