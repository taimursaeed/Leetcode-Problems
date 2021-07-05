/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  var common = strs.shift();
  for (var i = 0; i < strs.length; i++) {
    while (strs[i].indexOf(common) !== 0) {
      common = common.substring(0, common.length - 1);
      if (common.length === 0) return "";
    }
  }
  return common;
};
