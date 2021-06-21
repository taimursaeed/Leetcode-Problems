/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  var arr = s.split("");

  var obj = [];
  for ([i, e] of arr.entries()) {
    var arrItem = obj.find((item) => item.ele === e);
    var arrIndex = obj.indexOf(arrItem);
    if (arrIndex === -1) {
      obj.push({ ele: e, count: 1, index: i });
    } else {
      obj[arrIndex]["count"] += 1;
    }
  }
  var result = obj.find((item) => item.count === 1);
  return result?.index >= 0 ? result?.index : -1;
};

x = firstUniqChar("aabb");
console.log(x);
