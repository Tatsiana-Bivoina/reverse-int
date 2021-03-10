module.exports = function reverse (n) {
  let reverseNumber = Array.from(n.toString());
  return parseInt(reverseNumber.reverse().join(''));
}
