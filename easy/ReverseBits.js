/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  var reverseArr = n.toString(2).split("").reverse();
  while (reverseArr.length < 32) {
    reverseArr.push("0");
  }
  return parseInt(reverseArr.join(""), 2);
};
