/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const str = email.split('@')[email.split('@').length - 1];
  if (str[0] === '.') { return str.slice(1, str.length); }
  return str;
}

module.exports = getEmailDomain;
