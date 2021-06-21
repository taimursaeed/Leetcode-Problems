/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var isNegative = x < 0 ? true : false;
  var str = x.toString();

  str = isNegative ? str.slice("1") : str;

  var temp = `${isNegative ? "-" : ""}${str.split("").reverse().join("")}`;

  var result = parseInt(temp);

  if (result > Math.pow(-2, 31) && result < Math.pow(2, 31) - 1) {
    return result;
  } else return 0;
};

test = reverse(120);
